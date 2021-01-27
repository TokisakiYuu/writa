import React, { FC, useRef, useEffect } from "react";
import styled from "styled-components/macro";
import Var from "../js/util/CSSVar";
import TWEEN, { Tween } from "@tweenjs/tween.js";
import useSSR from "use-SSR";

const { isBrowser } = useSSR();
if(isBrowser) {
  function animate(time: number) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
  }
  requestAnimationFrame(animate);
}

const MagnetBox: FC<{
  className?: string;
  detectAreaWidth?: number;
}> = ({ children, className, detectAreaWidth = 50 }) => {
  const contentBoxRef = useRef<HTMLDivElement>();
  const detectBoxRef  = useRef<HTMLDivElement>();
  useEffect(() => {
    const detectBox = detectBoxRef.current;
    const contentBox = contentBoxRef.current;
    // 以内容盒子中心为原点，计算出鼠标此刻的坐标
    const { width: contentBoxWidth, height: contentBoxHeight } = getComputedStyle(contentBox);
    const initPosition = {
      x: detectAreaWidth / 2 + parseInt(contentBoxWidth) / 2,
      y: detectAreaWidth / 2 + parseInt(contentBoxHeight) / 2
    };
    let current: Coordinate = initPosition;
    let animation: Tween<Coordinate> = null;
    const detectMoveHandler = (event: MouseEvent) => {
      if(animation && animation.isPlaying) {
        animation.stop();
      }
      const { offsetX, offsetY } = event;
      const target = {
        x: offsetX - current.x,
        y: offsetY - current.y
      };
      // contentBox.setAttribute("style", `transform: translate3d(${target.x}px, ${target.y}px, 0);`);
      animation = new TWEEN.Tween(current)
        .to(target, 500)
        .easing(TWEEN.Easing.Quadratic.Out)
        .onUpdate(() => {
          contentBox.setAttribute("style", `transform: translate3d(${current.x}px, ${current.y}px, 0);`);
        })
        .start();
    };
    const detectLeaveHandler = () => {
      animation = new TWEEN.Tween(current)
        .to(initPosition, 500)
        .easing(TWEEN.Easing.Quadratic.Out)
        .onUpdate(() => {
          contentBox.setAttribute("style", `transform: translate3d(${current.x}px, ${current.y}px, 0);`);
        })
        .onComplete(() => {
          current = initPosition;
        })
        .onStop(() => {
          current = initPosition;
        })
        .start();
    };
    detectBox.addEventListener("mousemove", detectMoveHandler);
    detectBox.addEventListener("mouseleave", detectLeaveHandler);
    return () => {
      detectBox.removeEventListener("mousemove", detectMoveHandler);
      detectBox.removeEventListener("mouseleave", detectLeaveHandler);
    };
  });

  return (
    <div
      ref={detectBoxRef}
      className={className}
      style={{ position: "relative", display: "inline-block" }}>
      <Content ref={contentBoxRef}>
        {children}
      </Content>
      <MagneticField size={detectAreaWidth} />
    </div>
  );
};

interface MagneticFieldProps {
  size?: number;
}

/**
 * 吸附检测区
 */
const MagneticField = styled.div<MagneticFieldProps>`
  background-color: #86d3ff;
  position: absolute;
  width: calc(100% + ${Var("size", 50)}px);
  height: calc(100% + ${Var("size", 50)}px);
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  opacity: .4;
`;

const Content = styled.div`
  will-change: transform;
`;

interface Coordinate {
  x: number;
  y: number;
}

export default MagnetBox;
