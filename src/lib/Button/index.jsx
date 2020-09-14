import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const StyledButton = styled.button`
  padding: 15px;
  border: none;
  border-radius: 4px;
  max-width: 200px;
  font-size: 14px;
  &:active {
    transform: translateY(1px);
  }

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

          &:disabled {
            background-color: grey;
            cursor: not-allowed;
            &:active {
              transform: translateY(0);
            }
          }

          &:hover {
            transition: 350ms;
            transition-timing-function: cubic-bezier(0.51, 0.67, 0.42, 1.02);
            box-shadow: -4px 2px 33px -16px rgba(0, 0, 0, 0.5);
          }
        `
      : variant === 'secondary'
      ? css`
          background-color: #fff;
          font-weight: 500;

          ${({ backgroundColor }) =>
            backgroundColor
              ? css`
                  border: 1px solid ${backgroundColor};
                  color: ${backgroundColor};
                `
              : css`
                  border: 1px solid #e2136e;
                  color: #e2136e;
                `};

          &:disabled {
            border-color: grey;
            color: grey;
            cursor: not-allowed;
            &:active {
              transform: translateY(0);
            }
          }

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

Button.propTypes = {
  /**
   * Texts to show within the button (IS REQUIRED)
   */
  children: PropTypes.string.isRequired,
  /**
   * Define the type of the button
   */
  variant: PropTypes.oneOf(['primary', 'secondary']).isRequired,
  /**
   * Define custom color for the button
   */
  backgroundColor: PropTypes.string,
  /**
   * pass disabled as a prop to disable button
   */
  disabled: PropTypes.bool,
  /**
   * Optional OnClick event
   */
  onClick: PropTypes.func
}

Button.defaultProps = {
  /**
   * Define the type of the button
   */
  variant: 'primary',
  /**
   * Event handler
   */
  onClick: undefined
}

Button.defaultProps = {
  /**
   * Default variant of button is primary
   */
  variant: 'primary'
}
