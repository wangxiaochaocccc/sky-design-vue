export type ButtonType = 'primary' | 'info' | 'warning' | 'danger' | 'success'
export type ButtonSize = 'small' | 'large'
export type NativeType = 'reset' | 'button' | 'submit'
export interface ButtonProps {
  type ?: ButtonType,
  size?: ButtonSize,
  rounded?: boolean,
  disabled?: boolean,
  plain?: boolean,
  circle?: boolean,
  nativeType?: NativeType,
  autofocus?: boolean
  icon?: string
  loading?: boolean
}

export interface ButtonInstance {
  ref:HTMLButtonElement,
}