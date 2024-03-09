import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipRContainer = styled(Tooltip.Content, {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  border: 'none',
})
export const ToltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
  border: 'none',
  width: '$4',
  height: '$2',
})
export const TooltipRContent = styled('h1', {
  fontFamily: '$default',
  fontSize: '$sm',
  lineHeight: '$short',
  fontWeight: '$medium',
  color: '$gray100',
})
