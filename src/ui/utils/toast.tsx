import { IconCheck, IconLoader, IconX } from '@tabler/icons'
import hotToast, {
  DefaultToastOptions,
  Renderable,
  resolveValue,
  ToastOptions,
  ValueOrFunction,
} from 'react-hot-toast'

const success = (title: string, message: string, options?: ToastOptions) => {
  return hotToast.custom(
    (t) => (
      <div
        className={`${
          t.visible ? 'animate-enter' : 'animate-leave'
        } max-w-sm w-full bg-white rounded shadow-lg border border-gray-100 pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="p-4 flex items-start gap-4 flex-grow">
          <div className="rounded-full text-green-500 border border-green-500 p-1">
            <IconCheck className="h-3 w-3" stroke="3" />
          </div>
          <div>
            <p className="font-bold text-sm">{title}</p>
            <p className="text-gray-600 text-sm">{message}</p>
          </div>
        </div>

        <div className="p-4">
          <button onClick={() => hotToast.dismiss(t.id)} className="">
            <IconX className="h-5 w-5 text-gray-500 hover:text-gray-400" />
          </button>
        </div>
      </div>
    ),
    options
  )
}

const promise = <T,>(
  promise: Promise<T>,
  msgs: {
    loading: Renderable
    success: ValueOrFunction<Renderable, T>
    error: ValueOrFunction<Renderable, any>
  },
  opts?: DefaultToastOptions
) => {
  const id = hotToast.custom(
    (t) => (
      <div
        className={`${
          t.visible ? 'animate-enter' : 'animate-leave'
        } max-w-sm w-full bg-white rounded shadow-lg border border-gray-100 pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="p-4 flex items-start gap-4 flex-grow">
          <div className="rounded-full text-gray-500 border border-gray-400 p-1">
            <IconLoader className="h-3 w-3" stroke="3" />
          </div>
          <div>
            <p className="font-bold text-sm">Hang in there</p>
            <p className="text-gray-600 text-sm">{msgs.loading}</p>
          </div>
        </div>

        <div className="p-4">
          <button onClick={() => hotToast.dismiss(t.id)} className="">
            <IconX className="h-5 w-5 text-gray-500 hover:text-gray-400" />
          </button>
        </div>
      </div>
    ),
    {
      ...opts,
      ...opts?.loading,
    }
  )

  promise
    .then((p) => {
      // hotToast.success(resolveValue(msgs.success, p), {
      //   id,
      //   ...opts,
      //   ...opts?.success,
      // })

      success('Success!', 'The action was successful... this time...', {
        id,
        ...opts,
        ...opts?.success,
      })
      return p
    })
    .catch((e) => {
      hotToast.error(resolveValue(msgs.error, e), {
        id,
        ...opts,
        ...opts?.error,
      })
    })

  return promise
}

export const toast = {
  success,
  promise,
}
