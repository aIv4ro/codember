import fs from 'node:fs'
import path from 'node:path'

const data = fs.readFileSync(path.resolve('./src/challenge-05/data.txt')).toString()
const users = data.split('\r\n')

const alphanumericRegex = /^[A-Za-z0-9]+$/
const numericRegex = /^[0-9]+$/
const lettersRegex = /^[A-Za-z\s]+$/
const emailRegex = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+$/

const validateId = (id: string): boolean => id != null && alphanumericRegex.test(id)
const validateUsername = (username: string): boolean => username != null && alphanumericRegex.test(username)
const validateEmail = (email: string): boolean => email != null && email !== '' && emailRegex.test(email)
const validateAge = (age: string): boolean => age == null || age === '' || numericRegex.test(age)
const validateLocation = (location: string): boolean => location == null || location === '' || lettersRegex.test(location)

const invalidUsers = users.filter(user => {
  const [id, username, email, age, location] = user.split(',')
  return !validateId(id) || !validateUsername(username) || !validateEmail(email) || !validateAge(age) || !validateLocation(location)
})

console.log(invalidUsers.map(user => user.split(',')[1][0]).join(''))
