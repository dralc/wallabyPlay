/* global describe, it, expect */
import lib from '../src/index'

describe('suite', () => {
  it('test stepping in', async () => {
    await lib.handler()
    expect(1).toBe(1)
  })
})
