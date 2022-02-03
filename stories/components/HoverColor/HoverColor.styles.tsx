import styled from 'styled-components';

export const HoverColorStyles = styled.span`
  display: inline-flex;
  align-items: center;
  .highlight {
    * {
      display: block;
      width: fit-content;
      background-size: 200% 100%;
      @media (prefers-reduced-motion: no-preference) {
        transition: background-position 1s, color 0.5s;
      }
    }
  }
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      .highlight {
        background-position: -100% 0;
        background-image: linear-gradient(to right, transparent 50%, var(--color-primary) 50%);
        background-position: -100% 0;
      }
    }
  }
`;
