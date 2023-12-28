import { mediaQuery } from "@/util/styles";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const FoundContainer = styled.div`
  ${css(
    mediaQuery({
      marginBottom: ["67px", "80px", "92px", "108px", "128px", "175px"],
    })
  )}

  & h2 {
    ${css(
      mediaQuery({
        fontSize: ["10px", "10px", "12px", "14px", "16px", "20px"],
        marginBottom: ["10px", "16px", "20px", "28px", "32px", "54px"],
      })
    )}
    text-align: center;
  }

  & img:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;
