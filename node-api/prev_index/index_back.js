//const http = require('http');
//http.createServer();
/*
const math = require('./math.js');

const result = math.sum(1,2);
console.log(result);*/

const fs = require('fs');

//const data = fs.readFileSync('./data.txt','utf8');

//비동기 함수.
const data = fs.readFile('./data.txt','utf8',function(err,data){
    console.log(data);
});
