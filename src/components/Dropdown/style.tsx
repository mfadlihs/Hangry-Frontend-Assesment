import styled from "@emotion/styled";
import { variant } from "styled-system";
import type {
  ComponentWraperProps,
  OverlayContainerProps,
  OverlayContentProps,
} from "./types";

const overlayContainerWidthVariant = (
  overlayWidth: "auto" | "fit-container" | string,
  width: number
) => {
  if (overlayWidth === "fit-container") {
    return `${width}px`;
  }
  if (overlayWidth === "auto") {
    return "fit-content";
  }
  return overlayWidth;
};

const placementVariant = variant({
  prop: "placement",
  variants: {
    "top-start": {
      paddingBottom: "20px",
    },
    top: {
      paddingBottom: "20px",
    },
    "top-end": {
      paddingBottom: "20px",
    },
    "bottom-start": {
      paddingTop: "20px",
    },
    bottom: {
      paddingTop: "20px",
    },
    "bottom-end": {
      paddingTop: "20px",
    },
    "left-start": {
      paddingRight: "20px",
    },
    left: {
      paddingRight: "20px",
    },
    "left-end": {
      paddingRight: "20px",
    },
    "right-start": {
      paddingLeft: "20px",
    },
    right: {
      paddingLeft: "20px",
    },
    "right-end": {
      paddingLeft: "20px",
    },
  },
});

export const OverlayContainer = styled.div<OverlayContainerProps>`
  width: ${({ overlayWidth, width }) => {
    return overlayContainerWidthVariant(overlayWidth, width);
  }};
  z-index: ${({ zIndex }) => zIndex};

  animation: fadeIn 0.5s;
  ${placementVariant}

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const OverlayContent = styled.div<OverlayContentProps>`
  background: white;
  box-shadow: 0px 8px 120px rgba(41, 41, 41, 0.08);
  border-radius: 8px;

  height: ${({ overlayHeight }) => overlayHeight};
  overflow-x: ${({ overlayHeight }) =>
    overlayHeight === "auto" ? "hidden" : "auto"};
  overflow-y: auto;
`;

export const ComponentWraper = styled.div<ComponentWraperProps>`
  cursor: pointer;
  width: ${({ fitContent }) => (fitContent ? "fit-content" : "auto")};
  ${placementVariant}
`;
