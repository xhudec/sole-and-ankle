import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS } from "../../constants";

const ShoeCardFlag = ({ variant }) => {
  const flagColor =
    variant === "new-release" ?  COLORS.secondary : COLORS.primary
  const flagText = variant === "new-release" ? "Just Released!" : "Sale";

  return <Wrapper color={flagColor}>{flagText}</Wrapper>;
};

const Wrapper = styled.div`
  position: absolute;
  top: 12px;
  right: 0;
  padding: 8px 16px;
  margin-right: -4px;
  border-radius: 2px;

  color: ${COLORS.white};
  background-color: ${(p) => p.color};
  font-size: 0.875rem;
  font-weight: ${WEIGHTS.bold};
`;

export default ShoeCardFlag;
