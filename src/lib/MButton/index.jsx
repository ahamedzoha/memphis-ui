import React from 'react'
import styled, { css } from 'styled-components'

const StyledButton = styled.button`
  padding: 15px;
  border: none;
  border-radius: 4px;
  max-width: 200px;
  font-size: 14px;
  ${({ variant }) =>
    variant === 'primary'
      ? css`
          background-color: aquamarine;
          &:hover {
            background-color: aqua;
            transition: 350ms;
            transition-timing-function: cubic-bezier(0.51, 0.67, 0.42, 1.02);
            box-shadow: -4px 2px 33px -16px rgba(0, 0, 0, 0.5);
          }
        `
      : variant === 'secondary'
      ? css`
          background-color: palevioletred;
          &:hover {
            background-color: palegoldenrod;
            transition: 350ms;
            transition-timing-function: cubic-bezier(0.51, 0.67, 0.42, 1.02);
            box-shadow: -4px 2px 33px -16px rgba(0, 0, 0, 0.5);
          }
        `
      : css`
          background-color: aliceblue;
        `}
`
export const MButton = ({ variant, type, disabled, children }) => (
  <StyledButton
    variant={variant}
    type={type ? type : `button`}
    disabled={disabled ? true : false}
  >
    {children}
  </StyledButton>
)
