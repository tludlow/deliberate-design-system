import { Toaster } from 'react-hot-toast'
import { Button } from './ui/Button'
import { toast } from './ui/utils/toast'

export default function App() {
  const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  return (
    <div>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          duration: 5000,
        }}
      />
      <Button
        onClick={() =>
          toast.promise(sleep(1000), {
            loading: 'Waiting for the response',
            success: 'The action was successful',
            error: 'The action errored, oh no :(',
          })
        }
      >
        Promise Toast
      </Button>
    </div>
  )
}
