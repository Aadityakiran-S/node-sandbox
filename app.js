const {readFile, writeFile} = require('fs').promises;

// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async() => {
    let first; let second;
    try{
        first = await readFile('./content/first.txt', 'utf-8');
        second = await readFile('./content/second.txt', 'utf-8');

        await writeFile('./content/result-mind-grenade.txt', 
        `THIS IS AWESOME ${first} ${second}`);
    }
    catch(err){
        console.log(err);
    }

    console.log(first, second);
}

start();

// const start = async() => {
//     let first; let second;
//     try{
//         first = await readFilePromise('./content/first.txt', 'utf-8');
//         second = await readFilePromise('./content/second.txt', 'utf-8');

//         await writeFilePromise('./content/result-mind-grenade.txt', 
//         `THIS IS AWESOME ${first} ${second}`);
//     }
//     catch(err){
//         console.log(err);
//     }

//     console.log(first, second);
// }

////Function to perform our read and write operations
// const start = async() => {
//     let first; let second;
//     try{
//         first = await getText('./content/first.txt');
//         second = await getText('./content/second.txt');
//     }
//     catch(err){
//         console.log(err);
//     }

//     console.log(first, second);
// }

////Function that performs read operation as a promise 
// const getText = (path) => {
//     return new Promise((resolve, reject) =>{
//         readFile(path, 'utf-8', (err, data) =>{
//             if(err){
//                 reject(err);
//             }
//             else{
//                 resolve(data);
//             }
//         });
//     });
// }

// getText('./content/first.txt')
//     .then((result) => console.log(`Path: ${path} Result: ${result}`))
//     .catch((err) => console.log(err));


