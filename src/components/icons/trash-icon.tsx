import { ComponentProps } from 'react'

export function TrashIcon(props: ComponentProps<'svg'>) {
  return (
    <svg
      width={16}
      height={18}
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.143 16c0 1.1 1.028 2 2.286 2h9.142c1.258 0 2.286-.9 2.286-2V4H1.143v12zM16 1h-4l-1.143-1H5.143L4 1H0v2h16V1z"
        fill="#009EDD"
      />
    </svg>
  )
}
