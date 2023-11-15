const encodedMessage = '&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&'
const splitedMessage = encodedMessage.split('')
let value = 0
let res = ''

const actions: Record<string, () => void> = {
  '#': () => { value += 1 },
  '@': () => { value -= 1 },
  '*': () => { value *= value },
  '&': () => { res += value.toString() }
}

for (const char of splitedMessage) {
  actions[char]?.()
}

console.log(res)
