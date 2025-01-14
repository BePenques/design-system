import { Meta } from '@storybook/react'
import { TokensGrid } from '../../../components/TokensGrid'
import { space } from '@bepenques-designsys/tokens'
import { getContrast } from 'polished'

export default {
  title: 'Tokens/Spaces',
  component: TokensGrid,
} as Meta<typeof TokensGrid>

export const Spaces = () => {
  const backgroundColor = window.getComputedStyle(document.body).backgroundColor
  const textColor = getContrast(backgroundColor, '#FFF') < 3.5 ? '#000' : '#FFF'

  return (
    <>
      <div style={{ color: textColor }}>
        <h1>Space</h1>
      </div>
      <TokensGrid tokens={space} hasRemValue />
    </>
  )
}
