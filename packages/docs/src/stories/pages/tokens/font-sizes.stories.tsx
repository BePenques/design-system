import { Meta } from '@storybook/react'
import { TokensGrid } from '../../../components/TokensGrid'
import { fontSizes } from '@ignite-ui/tokens'
import { getContrast } from 'polished'

export default {
  title: 'Tokens/FontSizes',
  component: TokensGrid,
} as Meta<typeof TokensGrid>

export const FontSizes = () => {
  const backgroundColor = window.getComputedStyle(document.body).backgroundColor
  const textColor = getContrast(backgroundColor, '#FFF') < 3.5 ? '#000' : '#FFF'

  return (
    <>
      <div style={{ color: textColor }}>
        <h1>Font size</h1>
      </div>
      <TokensGrid tokens={fontSizes} hasRemValue />
    </>
  )
}
