const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const read = readline.createInterface({ input, output });
const filePath = path.join(__dirname, 'text.txt');
  
function write() {
  fs.writeFile(filePath, '', (error) => {
    if (error) return console.error(error.message);
  });
  
  console.log('Доброго времени суток! Давайте начнем ввод данных');
  
  read.on('line', (text) => {
    if (text === 'exit') {
      read.close();
      return;
    }
    
    fs.appendFile(filePath, `${text}\n`, (error) => {  
      if (error) return console.error(error.message);
    });
  });
  
  read.once('close', () => console.log('Спасибо. Ввод данных завершен. Всего доброго!'));
  
}
write();
