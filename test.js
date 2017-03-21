const plugin = require('./')
const chai = require('chai')

chai.should()

const params = {
  english: [
    ['00', 'abandon'],
    ['01', 'ability'],
    ['07ff', 'zoo'],
    ['0800', 'ability abandon'],
    ['3fffff', 'zoo zoo']
  ],
  japanese: [
    ['00', 'あいこくしん'],
    ['01', 'あいさつ'],
    ['07ff', 'われる'],
    ['0800', 'あいさつ あいこくしん'],
    ['3fffff', 'われる われる']
  ],
  french: [
    ['00', 'abaisser'],
    ['01', 'abandon'],
    ['07ff', 'zoologie'],
    ['0800', 'abandon abaisser'],
    ['3fffff', 'zoologie zoologie']
  ],
  italian: [
    ['00', 'abaco'],
    ['01', 'abbaglio'],
    ['07ff', 'zuppa'],
    ['0800', 'abbaglio abaco'],
    ['3fffff', 'zuppa zuppa']
  ],
  spanish: [
    ['00', 'ábaco'],
    ['01', 'abdomen'],
    ['07ff', 'zurdo'],
    ['0800', 'abdomen ábaco'],
    ['3fffff', 'zurdo zurdo']
  ],
  'chinese.simplified': [
    ['00', '的'],
    ['01', '一'],
    ['07ff', '歇'],
    ['0800', '一 的'],
    ['3fffff', '歇 歇']
  ],
  'chinese.traditional': [
    ['00', '的'],
    ['01', '一'],
    ['07ff', '歇'],
    ['0800', '一 的'],
    ['3fffff', '歇 歇']
  ]
}

describe('amorph-base2048', () => {
  describe('converters', () => {
    Object.keys(params).forEach((language) => {
      const form = `base2048.${language}`
      describe(form, () => {
        const pairs = params[language]
        pairs.forEach((pair) => {
          const hex = pair[0]
          const words = pair[1]
          const buffer = Buffer.from(hex, 'hex')
          it(`should convert buffer to ${form}`, () => {
            plugin.converters.get('buffer', form)(buffer).should.equal(words)
          })
          it(`should convert ${form} to buffer`, () => {
            plugin.converters.get(form, 'buffer')(words).toString('hex').should.equal(hex)
          })
        })
      })
    })
  })
})
