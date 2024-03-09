import * as TooltipR from '@radix-ui/react-tooltip'
import { ToltipArrow, TooltipRContainer, TooltipRContent } from './styles'
import { ReactNode } from 'react'

export interface TooltipProps {
  children: ReactNode
  content: string
  open?: boolean
}

export function Tooltip({ children, content, open }: TooltipProps) {
  return (
    <TooltipR.Provider>
      <TooltipR.Root open={open}>
        <TooltipR.Trigger asChild>{children}</TooltipR.Trigger>
        <TooltipR.Portal>
          <TooltipRContainer>
            <ToltipArrow colorInterpolation={'#fff'} color="#ffff" />
            <TooltipRContent>{content}</TooltipRContent>
          </TooltipRContainer>
        </TooltipR.Portal>
      </TooltipR.Root>
    </TooltipR.Provider>
  )
}
