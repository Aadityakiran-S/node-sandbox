const EventEmitter = require('events');
const customEmitter = new EventEmitter();

//IMPORTANT: First Listen for the event and then emitt it, can't listen after
//emission because then you'd have missed it. Makes sense huh? Yeah!
customEmitter.on('eventName', (name, ID) => {
    console.log(`data recieved: Username: ${name}, userID: ${ID} `);
});

customEmitter.on('eventName', () => {
    console.log(`some other logic here `);
});

customEmitter.emit('eventName', 'John Doe', 1234);

