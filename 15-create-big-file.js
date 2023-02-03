const {writeFileSync} = require('fs');
for (let index = 0; index < 10000; index++) {
    writeFileSync(
        './content/big.txt', 
        `Hello World ${index}\n`,
        {flag: 'a'}
    )}