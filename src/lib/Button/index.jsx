import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { Secondary } from '../../stories/Button.stories'

const StyledButton = styled.button`
  padding: 15px;
  border: none;
  border-radius: 4px;
  max-width: 200px;
  font-size: 14px;
  ${({ variant }) =>
    variant === 'primary'
      ? css`
          /* background-color: aquamarine; */
          ${({ backgroundColor }) =>
            backgroundColor
              ? css`
                  background-color: ${backgroundColor};
                `
              : css`
                  background-color: #e2136e;
                `};
          font-weight: 500;
          color: #fff;

          &:hover {
            transition: 350ms;
            transition-timing-function: cubic-bezier(0.51, 0.67, 0.42, 1.02);
            box-shadow: -4px 2px 33px -16px rgba(0, 0, 0, 0.5);
          }
        `
      : variant === 'secondary'
      ? css`
          ${({ backgroundColor }) =>
            backgroundColor
              ? css`
                  background-color: ${backgroundColor};
                `
              : css`
                  background-color: #fff;
                `};
          font-weight: 500;
          color: #e2136e;
          border: 2px solid #e2136e;
          &:hover {
            transition: 350ms;
            transition-timing-function: cubic-bezier(0.51, 0.67, 0.42, 1.02);
            box-shadow: -4px 2px 33px -16px rgba(0, 0, 0, 0.5);
          }
        `
      : css`
          background-color: aliceblue;
        `}
`

/**
 * Main button components for user interaction
 */
export const Button = ({
  variant,
  type,
  disabled,
  children,
  backgroundColor,
  ...rest
}) => (
  <StyledButton
    variant={variant}
    type={type ? type : `button`}
    disabled={disabled ? true : false}
    backgroundColor={backgroundColor}
    {...rest}
  >
    {children}
  </StyledButton>
)

Button.PropTypes = {
  /**
   * Texts to show within the button (IS REQUIRED)
   */
  children: PropTypes.string.isRequired,

  /**
   * Define the type of the button
   */
  variant: PropTypes.string.isRequired,

  /**
   * Define custom color for the button
   */
  backgroundColor: PropTypes.string,

  /**
   * Optional OnClick event
   */
  onClick: PropTypes.func
}

Button.defaultProps = {
  /**
   * Define the type of the button
   */
  variant: 'primary'
}
