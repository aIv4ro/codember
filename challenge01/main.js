import fs from 'fs';

const file = fs.readFileSync('./users.txt')
const fileText = file.toString();
const fileLines = fileText.split("\n");
const usersInfo = [];
let currentUser = '';
fileLines.forEach((line, index) => {
  if(line === '\r' || index === fileLines.length - 1) {
    usersInfo.push(currentUser);
    currentUser = '';
  }
  else { currentUser += line.replace('\r', ' ') }
});

function validateUser(user) {
  return user.usr && user.eme && user.psw && user.age && user.loc && user.fll;
}

const users = usersInfo.map(userInfo => {
  const entries = userInfo
    .split(' ')
    .filter(entrie => entrie)
    .map(entrie => entrie.split(':'))

  return Object.fromEntries(entries);
}).filter(validateUser)

console.log(`${users.length}${users.at(-1).usr}`);