const Nobject = require('nobject')
const nobject = new Nobject
const base2048 = require('base-2048')

nobject.set(['buffer', 'base2048.chinese.simplified'], (buffer) => {
  return base2048.chineseSimplified.encode(buffer)
})

nobject.set(['base2048.chinese.simplified', 'buffer'], (words) => {
  return base2048.chineseSimplified.decode(words)
})

nobject.set(['buffer', 'base2048.chinese.traditional'], (buffer) => {
  return base2048.chineseTraditional.encode(buffer)
})

nobject.set(['base2048.chinese.traditional', 'buffer'], (words) => {
  return base2048.chineseTraditional.decode(words)
})

nobject.set(['buffer', 'base2048.english'], (buffer) => {
  return base2048.english.encode(buffer)
})

nobject.set(['base2048.english', 'buffer'], (words) => {
  return base2048.english.decode(words)
})

nobject.set(['buffer', 'base2048.french'], (buffer) => {
  return base2048.french.encode(buffer)
})

nobject.set(['base2048.french', 'buffer'], (words) => {
  return base2048.french.decode(words)
})

nobject.set(['buffer', 'base2048.italian'], (buffer) => {
  return base2048.italian.encode(buffer)
})

nobject.set(['base2048.italian', 'buffer'], (words) => {
  return base2048.italian.decode(words)
})

nobject.set(['buffer', 'base2048.japanese'], (buffer) => {
  return base2048.japanese.encode(buffer)
})

nobject.set(['base2048.japanese', 'buffer'], (words) => {
  return base2048.japanese.decode(words)
})

nobject.set(['buffer', 'base2048.spanish'], (buffer) => {
  return base2048.spanish.encode(buffer)
})

nobject.set(['base2048.spanish', 'buffer'], (words) => {
  return base2048.spanish.decode(words)
})


module.exports = {
  pluginVersion: 1,
  converters: nobject,
  equivalenceTests: {}
}
