export type ButtonType = 'primary' | 'info' | 'warning' | 'danger' | 'success'
export type ButtonSize = 'small' | 'large'

export interface ButtonProps {
  type ?: ButtonType,
  size?: ButtonSize,
  rounded?: boolean,
  disabled?: boolean,
  plain?: boolean,
  circle?: boolean,
}