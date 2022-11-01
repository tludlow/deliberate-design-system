import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'
import { IconInfoSquare } from '@tabler/icons'

const bannerStyles = cva('inline-flex px-4 py-3 rounded items-center', {
  variants: {
    variant: {
      success: 'bg-green-500 text-white',
      error: 'bg-red-500 text-white',
    },
  },
  defaultVariants: {
    variant: 'success',
  },
})

export interface BannerProps extends VariantProps<typeof bannerStyles> {
  /**
   * Icon to be displayed inside the banner
   */
  icon?: React.ReactNode | null
  children: React.ReactNode
}

export function Banner({ icon = <IconInfoSquare />, children, variant }: BannerProps) {
  return (
    <div className={bannerStyles({ variant })}>
      {icon && <div className="flex items-center justify-center mr-2">{icon}</div>}
      {children}
    </div>
  )
}
