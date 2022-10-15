import * as React from "react"
import {SVGAttributes} from "react"

interface LogoProps extends SVGAttributes<HTMLOrSVGElement> {}

export function Logo(props: LogoProps) {
  return (
    <svg
      width={100}
      height={100}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={50} cy={50} r={49.5} stroke="#FF7A41" />
      <path
        d="M42.188 29.688v6.25M48.438 29.688v6.25M54.688 29.688v6.25M31.25 67.188h34.375M41.27 67.188a17.187 17.187 0 01-10.02-15.626v-9.374h34.375v9.374a17.187 17.187 0 01-10.02 15.626"
        stroke="#FF7A41"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M65.625 42.188a6.25 6.25 0 016.25 6.25V50a6.25 6.25 0 01-6.25 6.25h-.664"
        stroke="#FF7A41"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
