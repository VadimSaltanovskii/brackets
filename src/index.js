module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) {
    return false;
  }

  let loopCount = str.length

  for (let i = 0; i < loopCount; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      str = str.replace(bracketsConfig[j].join(''), '')
    }
  }

  return !str.length

}