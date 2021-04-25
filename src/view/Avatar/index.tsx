import React, { FC } from "react";
import styled from "styled-components/macro";

const Avatar: FC<{
  className?: string;
}> = ({ className }) => (
  <div className={className}>
    <div className="avatar-img">
      <img src={require("../_static/avatar.png")} />
    </div>
    <h2 className="username">Writa</h2>
  </div>
);

const StyledAvatar = styled(Avatar)`
  background-color: #648EFF;
  overflow: hidden;
  .avatar-img {
    text-align: center;
    img {
      border-radius: 50%;
      width: 74px;
      height: 74px;
      padding: 22px 0;
    }
  }
  .username {
    text-align: center;
    color: white;
    font-weight: normal;
  }
`;

export default StyledAvatar;
