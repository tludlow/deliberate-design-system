import { cva, type VariantProps } from 'class-variance-authority'
import * as SwitchPrimitive from '@radix-ui/react-switch'
import clsx from 'clsx'

const switchStyles = cva('', {
  variants: {},
})

export interface SwitchProps extends VariantProps<typeof switchStyles> {
  defaultChecked: React.ComponentProps<typeof SwitchPrimitive.Root>['defaultChecked']
  disabled: React.ComponentProps<typeof SwitchPrimitive.Root>['disabled']
}

export function Switch({ defaultChecked, disabled }: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      defaultChecked={defaultChecked}
      disabled={disabled}
      className={clsx(
        'group',
        'radix-state-checked:bg-green-500',
        'radix-state-unchecked:bg-gray-200',
        'relative inline-flex h-[24px] w-[44px] flex-shrink-0  rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out',
        'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75',
        {
          'cursor-not-allowed opacity-50': disabled,
          'cursor-pointer': !disabled,
        }
      )}
    >
      <SwitchPrimitive.Thumb
        className={clsx(
          'group-radix-state-checked:translate-x-[1.125rem]',
          'group-radix-state-unchecked:translate-x-0.5',
          'pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out'
        )}
      />
    </SwitchPrimitive.Root>
  )
}
