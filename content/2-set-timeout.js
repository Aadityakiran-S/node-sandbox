//started operating system process
console.log('first');

//Offloading to kernel to complete asych
setTimeout(() => {
    console.log("second");
}, 0);
console.log("third");
//completed and exited OS process