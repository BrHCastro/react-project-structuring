import { ComponentProps } from 'react'

export function CirclePlusIcon(props: ComponentProps<'svg'>) {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.9 4.5H8.1v3.6H4.5v1.8h3.6v3.6h1.8V9.9h3.6V8.1H9.9V4.5zM9 0C4.032 0 0 4.032 0 9s4.032 9 9 9 9-4.032 9-9-4.032-9-9-9zm0 16.2c-3.969 0-7.2-3.231-7.2-7.2 0-3.969 3.231-7.2 7.2-7.2 3.969 0 7.2 3.231 7.2 7.2 0 3.969-3.231 7.2-7.2 7.2z"
        fill="#009EDD"
      />
    </svg>
  )
}
