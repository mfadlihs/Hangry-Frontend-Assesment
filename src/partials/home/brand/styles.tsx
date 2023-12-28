import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { mediaQuery } from "@/util/styles";

export const BrandContainer = styled.div`
  ${css(
    mediaQuery({
      padding: [
        "40px 0 56px",
        "44px 0 60px",
        "44px 0 60px",
        "48px 0 80px",
        "56px 0 120px",
        "initial 0 120px",
      ],
    })
  )}

  & > h2 {
    ${css(mediaQuery({ fontSize: ["24px", "28px", "32px", "36px", "40px"] }))}
    font-weight: bold;
    color: var(--text-1);
    margin-bottom: 4px;
  }

  & > .caption {
    color: var(--text-3);
    ${css(mediaQuery({ fontSize: ["16px", "16px", "18px", "20px", "24px"] }))}
  }
`;

export const CardBrandContainer = styled.div`
  & > div:first-child {
    aspect-ratio: 1 / 1;
    width: 100%;
    border-radius: 5%;
    overflow: hidden;
  }

  &:hover img {
    transform: scale(1.1);
  }

  & span {
    color: var(--primary);
    ${css(mediaQuery({ fontSize: ["16px", "16px", "18px", "20px", "32px"] }))}
  }

  & .title {
    font-weight: 700;
    color: var(--text-1);
    ${css(
      mediaQuery({
        fontSize: ["14px", "16px", "20px", "24px", "26px", "32px"],
      })
    )};
  }

  & p {
    ${css(
      mediaQuery({ fontSize: ["10px", "12px", "16px", "18px", "20px", "24px"] })
    )}
    line-height: 1.4;
    color: var(--text-2);
  }

  cursor: pointer;

  &:hover > div:nth-child(2) {
    gap: 10px;
  }
`;
