import { useState } from 'react'
import { Transition } from '@headlessui/react'
import { Modal } from './ui/Modal'

export default function App() {
  // const [isShowing, setIsShowing] = useState(false)
  // return (
  //   <>
  //     <button onClick={() => setIsShowing((isShowing) => !isShowing)}>Toggle</button>
  //     <Transition
  //       show={isShowing}
  //       enter="transition-opacity duration-75"
  //       enterFrom="opacity-0"
  //       enterTo="opacity-100"
  //       leave="transition-opacity duration-150"
  //       leaveFrom="opacity-100"
  //       leaveTo="opacity-0"
  //     >
  //       I will fade in and out
  //     </Transition>
  //   </>
  return <Modal>hello</Modal>
}
