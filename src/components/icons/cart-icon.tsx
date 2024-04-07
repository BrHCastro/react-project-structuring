import { ComponentProps } from 'react'

export function CartIcon(props: ComponentProps<'svg'>) {
  return (
    <svg
      width={14}
      height={15}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_7211_198)">
        <path
          d="M6.6 6h1.133V4.3h1.7V3.167h-1.7v-1.7H6.6v1.7H4.9V4.3h1.7V6zm-2.267 5.1c-.623 0-1.127.51-1.127 1.133 0 .624.504 1.134 1.127 1.134.624 0 1.134-.51 1.134-1.134 0-.623-.51-1.133-1.134-1.133zm5.667 0c-.623 0-1.128.51-1.128 1.133 0 .624.505 1.134 1.128 1.134.623 0 1.133-.51 1.133-1.134 0-.623-.51-1.133-1.133-1.133zM4.43 9.258l.017-.068.51-.923h4.221c.425 0 .8-.233.992-.584l2.187-3.972-.986-.544h-.005L10.742 4.3 9.178 7.133H5.2l-.073-.153-1.27-2.68-.538-1.133-.533-1.134H.933v1.134h1.134l2.04 4.3-.765 1.389c-.091.159-.142.346-.142.544 0 .623.51 1.133 1.133 1.133h6.8V9.4H4.571a.144.144 0 01-.141-.142z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="clip0_7211_198">
          <path
            fill="#fff"
            transform="translate(.367 .9)"
            d="M0 0H13.6V13.6H0z"
          />
        </clipPath>
      </defs>
    </svg>
  )
}