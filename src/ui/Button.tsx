import { cva, type VariantProps } from 'class-variance-authority'
import { ButtonOrLink, type ButtonOrLinkProps } from './ButtonOrLink'

const buttonStyles = cva(
  'inline-flex items-center justify-center  px-3 py-2 rounded hover:shadow',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white',
        secondary: 'bg-secondary text-white',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
)

export interface ButtonProps extends VariantProps<typeof buttonStyles>, ButtonOrLinkProps {}

export function Button({ variant, ...props }: ButtonProps) {
  return <ButtonOrLink className={buttonStyles({ variant })} {...props} />
}
