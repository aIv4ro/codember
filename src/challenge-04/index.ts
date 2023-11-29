import fs from 'node:fs'
import path from 'node:path'

const data = fs.readFileSync(path.resolve('./src/challenge-04/data.txt')).toString()
const fileNames = data.split('\r\n')

const realFiles = fileNames.filter(fileName => {
  const [str, checksum] = fileName.split('-')
  const uniqueChars = str.split('').filter((char, index) => {
    const remaining = str.substring(0, index) + str.substring(index + 1, str.length)
    return !remaining.includes(char)
  }).join('')
  return uniqueChars === checksum
})

console.log(realFiles[32])
