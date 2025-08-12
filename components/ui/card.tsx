import * as React from "react"

export type CardProps = React.HTMLAttributes<HTMLDivElement>

export function Card({ className = "", ...props }: CardProps) {
  return <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props} />
}


