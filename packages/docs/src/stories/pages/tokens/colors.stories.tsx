import { Meta } from '@storybook/react'
import { ColorsGrid } from '../../../components/ColorsGrid'
import { getContrast } from 'polished'

export default {
  title: 'Tokens/Colors',
  component: ColorsGrid,
} as Meta<typeof ColorsGrid>

export const Colors = () => {
  const backgroundColor = window.getComputedStyle(document.body).backgroundColor
  const textColor = getContrast(backgroundColor, '#FFF') < 3.5 ? '#000' : '#FFF'

  return (
    <>
      <div style={{ color: textColor }}>
        <h1>Colors</h1>
        <p>Essas são as cores utilizadas no Ignite UI</p>
      </div>
      <ColorsGrid />
    </>
  )
}
