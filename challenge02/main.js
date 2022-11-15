function decryptWord(encryptedWord) {
  let decryptedWord = '';

  while(encryptedWord.length >= 2) {
    const twoDigitsLetter = encryptedWord.substring(0, 2);
    const letterCharCode = parseInt(twoDigitsLetter) >= 97 ? twoDigitsLetter : encryptedWord.substring(0, 3);
    decryptedWord += String.fromCharCode(parseInt(letterCharCode));
    encryptedWord = encryptedWord.substring(letterCharCode.length);
  }

  return decryptedWord;
}

const encryptedText = await fetch('https://codember.dev/encrypted.txt').then(res => res.text());
const encryptedWords = encryptedText.split(' ');
const decryptedWords = encryptedWords.map(decryptWord);
const decrypedText = decryptedWords.join(' ');

console.log(decrypedText);