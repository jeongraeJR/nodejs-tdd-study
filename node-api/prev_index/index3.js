const express = require('express');
const morgan = require('morgan');
const app = express();

//미들웨어는 무조건 next()를 호출해야한다.
function logger(req,res,next){
    console.log('i am logger');
    next();
}

function logger2(req,res,next){
    console.log('i am logger2');
    next();
}


app.use(logger);
app.use(logger2);
app.use(morgan('dev'));

app.listen(3000,function(){
    console.log('Server is running');
})