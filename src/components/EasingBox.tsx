import React, { FC, useRef, useEffect, memo } from "react";

const EasingBox: FC<{
  easing?: number;
}> = ({
  easing = 8,
}) => {
  const boxRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const box = boxRef.current;
    let curPos = { x: 0, y: 0 };
    let boxPos = { x: 0, y: 0 };
    let init = false;

    function draw() {
      const dX = curPos.x - boxPos.x;
      const dY = curPos.y - boxPos.y;
      boxPos = {
        x: boxPos.x + (dX / easing),
        y: boxPos.y + (dY / easing)
      };
      box.style.transform = `translate3d(${boxPos.x - 10}px, ${boxPos.y - 10}px, 0)`;
      requestAnimationFrame(draw);
    }

    document.addEventListener("mousemove", (event: MouseEvent) => {
      const { clientX, clientY } = event;
      curPos = {
        x: clientX,
        y: clientY
      };
      if(!init) {
        boxPos = curPos;
        box.style.opacity = "1";
        box.style.transform = `translate3d(${boxPos.x - 10}px, ${boxPos.y - 10}px, 0)`;
        draw();
        init = true;
      }
    });
  });

  return (
    <div style={{
      width: 20,
      height: 20,
      backgroundColor: "yellow",
      mixBlendMode: "overlay",
      borderRadius: "50%",
      willChange: "transform",
      position: "fixed",
      left: 0,
      top: 0,
      pointerEvents: "none",
      opacity: 0,
      transition: "opacity .5s"
    }}
    ref={boxRef} />
  );
};

interface Coordinate {
  x: number;
  y: number;
}

export default memo(EasingBox, () => true);
