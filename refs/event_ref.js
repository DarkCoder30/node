const EventEmitter = require('events')

class Logger extends EventEmitter {
	log(message){
		console.log('message', `${message} ${Date.now()}`)
	}
}

const logger = new Logger()

logger.on('message', data => {
	console.log(data);
})


logger.log('hello')