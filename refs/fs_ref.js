//file system
const fs = require('fs')
const path = require('path')

//! создание директории
// fs.mkdir(path.join(__dirname, 'notes'), error => {
// 	if (error) throw error
	
// 	console.log('Папка успешно создана')
// })

//! Создание файла
// fs.writeFile(path.join(__dirname, 'notes', 'my-notes.txt'), 'Hello Node JS', err => {
// 	if(err) throw err
// 	console.log('Файл успешно создан')
// })
//? my function
// function createFile(dir, fileName, content) {
// fs.writeFile(path.join(__dirname, dir, fileName), content, err => {
// 	if(err) throw err
// 	console.log('Файл создан');
// })
// }
// createFile('notes', 'test.js', '//hello world')
//! чтение файла
// fs.readFile(
// 	path.join(__dirname, 'notes', 'my-notes.txt'),
// 	'utf-8',
// 	(err, data) => {
// 		if (err) throw err
// 		console.log(data)
// 	}
// )
//! переименование
// fs.rename(
// 	path.join(__dirname, 'notes', 'my-notes.txt'),
// 	path.join(__dirname, 'notes', 'notes.txt'),
// 	err => {
// 		if(err) throw err
// 		console.log('Файл успешно переименован');
// 	}
// 	)