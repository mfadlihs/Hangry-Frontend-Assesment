import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { mediaQuery } from "@/util/styles";

export const HomePadding = styled.div`
  ${css(
    mediaQuery({
      paddingLeft: ["16px", "20px", "40px", "80px", "120px", "165px"],
      paddingRight: ["16px", "20px", "40px", "80px", "120px", "165px"],
    })
  )}

  padding-bottom: 100px;
`;
