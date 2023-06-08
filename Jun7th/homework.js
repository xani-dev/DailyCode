let events = require('events');
let eventEmitter = new events.EventEmitter();

// Create an event handler
let myEventHandler = () => {
	console.log('I hear a scream');
};

// Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event
eventEmitter.emit('scream');
