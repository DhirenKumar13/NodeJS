const fs = require('fs');

/*fs.rename('F:/NodeProgramming/albums/ToDelete','F:/NodeProgramming/albums/Delete',(error) => {
	if(error) throw error;
	fs.stat('F:/NodeProgramming/albums/Delete',(error,status) => {
		if(error) throw error;
		console.log("status ${JSON.stringify(status)}");
	});
	console.log("File Renamed and Deleted");
});*/

fs.access('F:/NodeProgramming/albums/Sonarika',fs.constants.R_OK | 
	fs.constants.W_OK, (error) => {
		console.log(error ? 'No Access' : 'Read & Write access provided');
});

/*fs.appendFile('F:/NodeProgramming/albums/sample.txt','\n Jay Hind Again',(error) => {
	if(error) throw error;
	console.log("The file is appened successfully");
});*/

fs.readFile('F:/NodeProgramming/albums/sample.txt','utf8',(error , data) => {
	if(error) throw error;
	console.log(data);
});

fs.open('F:/NodeProgramming/albums/sample.txt','r',(error,file)=> {
	if(error) throw error;
	console.log('The open file is '+file);
});

fs.readdir('F:/NodeProgramming/albums/','utf8',(error,folders) => {
	if(error) throw error;
	console.log('F:/NodeProgramming/albums contains :'+folders);
});


console.log('Renaming and Deleting is checked');
console.log('Accessing is checked');
console.log('File appended successfully');
console.log('File read successfully');
console.log('File opened successfully');
console.log('Directory read successfully');