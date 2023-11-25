import fs from 'node:fs'
import path from 'node:path'

const data = fs.readFileSync(path.resolve('./src/challenge-03/data.txt')).toString()
const inputs = data.split('\r\n')

const regex = /(\d+)-(\d+) (\w): (\w+)/
const invalidInputsRegex = inputs.filter(input => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-unused-vars
  const [_, min, max, letter, password] = input.match(regex)!
  const counterRegex = new RegExp(letter, 'g')
  const counter = password.match(counterRegex)?.length ?? 0
  return counter < Number(min) || counter > Number(max)
})

console.log(invalidInputsRegex[41])
