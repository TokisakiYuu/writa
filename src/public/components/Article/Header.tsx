import React, { FC } from "react";
import styled from "styled-components/macro";

const Header: FC<{
  className?: string;
  change?: boolean;
}> = ({ className }) => (
  <div className={className}>
    <span>header</span>
  </div>
);

const StyledHeader = styled(Header)`
  min-height: 80px;
  background-color: ${props => props.change? "blue": "#ff9090"};
`;


export default StyledHeader;
