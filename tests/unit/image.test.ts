import { describe, expect, it } from 'vitest'
import { blurPercentageToPixels } from '../../app/utils/image'

describe('blurPercentageToPixels', () => {
  it('converts 0% to 0 pixels', () => {
    expect(blurPercentageToPixels(0)).toBe(0)
  })

  it('converts 25% to 5 pixels', () => {
    expect(blurPercentageToPixels(25)).toBe(25)
  })

  it('converts 50% to 10 pixels', () => {
    expect(blurPercentageToPixels(50)).toBe(50)
  })

  it('converts 100% to 20 pixels', () => {
    expect(blurPercentageToPixels(100)).toBe(100)
  })
})
