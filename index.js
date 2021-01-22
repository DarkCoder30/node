const http = require('http')
const fs = require('fs')
const path = require('path')
const nodemon = require('nodemon')
//? state

const server = http.createServer((req, res) => {
	if (req.method === 'GET') {
		res.writeHead(200, {
			'Content-Type': 'text/html; charset=utf-8'
		})
		if(req.url === '/'){
			fs.readFile(path.join(__dirname, 'views', 'index.html'), 'utf-8', (err, content) => {
				if (err) {
					throw err	
				}
				res.end(content)
			})
		} else if (req.url === '/about') {
			fs.readFile(path.join(__dirname, 'views', 'about.html'), 'utf-8', (err, content) => {
				if (err) {
					throw err
				}
				res.end(content)
			})
		}else if (req.url === '/api/users'){
			res.writeHead(200, {
				'Content-Type': 'text/json'
			})
			const users = [
				{ name: 'Balislav', age: '20' },
				{ name: 'Alex', age: '35' }
			]
			res.end(JSON.stringify(users))
		}
	}else if(req.method === 'POST'){
		const body = []
		res.writeHead(200, {
			'Content-Type': 'text/html; charset=utf-8'
		})
		req.on('data', data => {
			body.push(Buffer.from(data))
		})
		req.on('end', () => {
			const message = body.toString().split('=')[1]
			res.end(`
		<h1 style="green">Ваше сообщение: </h1> <h2>${message}</h2>
		`)			
		})
		
	}
})

server.listen(3000, () => {
	console.log('Server is working...');
})

