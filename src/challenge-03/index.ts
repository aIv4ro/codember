import fs from 'node:fs'
import path from 'node:path'

const data = fs.readFileSync(path.resolve('./src/challenge-03/data.txt')).toString()
const inputs = data.split('\r\n')
const invalidInputs = []

for (const input of inputs) {
  const [policy, password] = input.split(': ')
  const [times, letter] = policy.split(' ')
  const [min, max] = times.split('-').map(num => Number(num))
  let counter = 0
  for (const char of password) {
    if (char === letter) {
      counter++
    }
  }
  if (counter < min || counter > max) {
    invalidInputs.push(password)
  }
}

console.log(invalidInputs[12])
