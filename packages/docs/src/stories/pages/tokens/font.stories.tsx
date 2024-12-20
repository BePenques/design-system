import { Meta } from '@storybook/react'
import { TokensGrid } from '../../../components/TokensGrid'
import { fonts } from '@ignite-ui/tokens'
import { getContrast } from 'polished'

export default {
  title: 'Tokens/FontFamilies',
  component: TokensGrid,
} as Meta<typeof TokensGrid>

export const FontFamilies = () => {
  const backgroundColor = window.getComputedStyle(document.body).backgroundColor
  const textColor = getContrast(backgroundColor, '#FFF') < 3.5 ? '#000' : '#FFF'

  return (
    <>
      <div style={{ color: textColor }}>
        <h1>Font Families</h1>
      </div>
      <TokensGrid tokens={fonts} />
    </>
  )
}
