import { Transition } from '@headlessui/react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { cva, VariantProps } from 'class-variance-authority'
import clsx from 'clsx'
import { Fragment, useState } from 'react'

const tooltipStyles = cva('', {
  variants: {},
})

export interface TooltipProps extends VariantProps<typeof tooltipStyles> {
  delay?: React.ComponentProps<typeof TooltipPrimitive.Provider>['delayDuration']
}

export function Tooltip({ delay = 200 }: TooltipProps) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <TooltipPrimitive.Provider delayDuration={delay}>
      <TooltipPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
        <TooltipPrimitive.Trigger asChild>
          <button>hover me!</button>
        </TooltipPrimitive.Trigger>
        <Transition
          show={isOpen}
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <TooltipPrimitive.Content
            sideOffset={4}
            forceMount
            className={clsx(
              'radix-side-top:animate-slide-down-fade',
              'radix-side-right:animate-slide-left-fade',
              'radix-side-bottom:animate-slide-up-fade',
              'radix-side-left:animate-slide-right-fade',
              'inline-flex items-center rounded-md px-4 py-2.5',
              'bg-gray-200'
            )}
          >
            <TooltipPrimitive.Arrow className="fill-current text-gray-200" />
            <span className="block text-sm leading-none text-gray-700">
              This is some text you can provide to give the user some more context!
            </span>
          </TooltipPrimitive.Content>
        </Transition>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}
