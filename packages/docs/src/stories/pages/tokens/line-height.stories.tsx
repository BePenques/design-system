import { Meta } from '@storybook/react'
import { TokensGrid } from '../../../components/TokensGrid'
import { lineHeights } from '@bepenques-designsys/tokens'
import { getContrast } from 'polished'

export default {
  title: 'Tokens/LineHeight',
  component: TokensGrid,
} as Meta<typeof TokensGrid>

export const LineHeight = () => {
  const backgroundColor = window.getComputedStyle(document.body).backgroundColor
  const textColor = getContrast(backgroundColor, '#FFF') < 3.5 ? '#000' : '#FFF'

  return (
    <>
      <div style={{ color: textColor }}>
        <h1>Line Height</h1>
      </div>
      <TokensGrid tokens={lineHeights} />
    </>
  )
}
