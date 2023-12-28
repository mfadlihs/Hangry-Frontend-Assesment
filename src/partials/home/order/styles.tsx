import { mediaQuery } from "@/util/styles";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const OrderContainer = styled.div`
  display: flex;

  & h2 {
    ${css(
      mediaQuery({ fontSize: ["24px", "28px", "32px", "36px", "38px", "40px"] })
    )}
    font-weight: bold;
    margin-bottom: 8px;
    color: var(--text-1);
  }

  & .caption {
    ${css(
      mediaQuery({
        fontSize: ["14px", "16px", "18px", "20px", "22px", "24px"],
        marginBottom: [],
      })
    )}
    color: var(--text-3);
  }

  & span {
    color: var(--primary);
  }

  & .opp {
    ${css(
      mediaQuery({ fontSize: ["14px", "16px", "18px", "20px", "22px", "24px"] })
    )}
    font-weight: bold;
    color: var(--text-1);
  }

  & .opp + div {
    ${css(
      mediaQuery({ fontSize: ["12px", "13px", "14px", "15px", "15px", "16px"] })
    )}
    color: var(--text-2);
  }
  & .diskon {
    ${css(
      mediaQuery({
        margin: [
          "24px 0 24px",
          "28px 0 28px",
          "30px 0 32px",
          "32px 0 36px",
          "34px 0 40px",
          "38px 0 48px",
        ],
      })
    )}
  }
`;
