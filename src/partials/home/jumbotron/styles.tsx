import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { mediaQuery } from "@/util/styles";

export const JumbotronContainer = styled.div`
  & .caption1 {
    ${css(mediaQuery({ fontSize: ["14px", "14px", "16px", "18px", "20px"] }))}
  }
  & .caption2 {
    ${css(mediaQuery({ fontSize: ["24px", "28px", "32px", "36px", "40px"] }))}
  }

  & > img:last-child {
    position: absolute;
    top: 15%;
    ${css(
      mediaQuery({
        height: ["340px", "490px", "580px", "650px", "740px"],
        right: ["-60px", "-73px", "-80px", "-90px", "12%"],
      })
    )}
  }
`;
