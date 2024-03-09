import * as ToastR from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import {
  ToastClose,
  ToastContainer,
  ToastContent,
  ToastDescription,
  ToastTitle,
  ToastViewport,
} from './styles'

export interface ToastProps {
  title: string
  description: string
  open: boolean
}

export function Toast({ description, open, title, ...props }: ToastProps) {
  return (
    <ToastR.Provider>
      <ToastContainer open={open} {...props}>
        <ToastContent>
          <ToastTitle>{title}</ToastTitle>
          <ToastDescription>{description}</ToastDescription>
        </ToastContent>
        <ToastClose asChild>
          <X size={20} />
        </ToastClose>
      </ToastContainer>
      <ToastViewport></ToastViewport>
    </ToastR.Provider>
  )
}
