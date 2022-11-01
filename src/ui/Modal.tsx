import { cva, type VariantProps } from 'class-variance-authority'
import * as Dialog from '@radix-ui/react-dialog'
import { Transition } from '@headlessui/react'
import { IconX } from '@tabler/icons'
import { Fragment, useState } from 'react'

const modalStyles = cva(
  [
    'h-full md:h-fit',
    'z-30 fixed bottom-0 md:top-[50%] md:left-[50%] md:-translate-x-[50%] md:-translate-y-[50%]',
    'bg-white p-4 rounded max-h-[60%] border border-gray-100',
  ],
  {
    variants: {
      fullWidth: {
        true: 'w-full',
        false: 'w-full md:w-1/3',
      },
    },
    defaultVariants: {
      fullWidth: false,
    },
  }
)

export interface ModalProps extends VariantProps<typeof modalStyles> {
  children: React.ReactNode
}

export function Modal({ children, fullWidth }: ModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger>Open Modal</Dialog.Trigger>
      <Dialog.Portal forceMount>
        <Transition.Root show={isOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay forceMount className="fixed inset-0 z-20 bg-gray-900/50" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Content forceMount className={modalStyles({ fullWidth })}>
              <Dialog.Close className="absolute right-2 top-2 rounded-full p-1 hover:bg-gray-200">
                <IconX className="text-gray-600 hover:text-gray-800 h-5 w-5" />
              </Dialog.Close>
              {children}
            </Dialog.Content>
          </Transition.Child>
        </Transition.Root>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
