// function approch  & asyncronous
const fs = require('fs');
const fileName = "target.text";

const errHandler = err => console.log(err)
const dataHandler = data => console.log(data.toString());
fs.readFile(fileName, (err, data) => {
    if (err) errHandler(err);
    dataHandler(data);
})
console.log("This is function approch")


// --------------




//sycronuous 
// const fs = require('fs')
// const fileNameS = "target.text";

// const data = fs.readFileSync(fileNameS)
// console.log(data.toString());
// console.log("this is asycronous")
// ---------------


// asyncronous programs

// const fs = require('fs');
// const fileName = "target.text";

// fs.readFile(fileName, (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
//     // console.log(data);
// })
// console.log("Node js async programing .....?")
// ---------------------





//event loop 

// file data changed example
// const fs = require('fs');
// const fileName = 'target.text';

// fs.watch(fileName, () => console.log('File changed!'));

// -----------------






//create server using express npm pakage

// const express = require('express')

// const app = express();
// app.get('/', (req, res) => {
//     res.send("Hey Whats is express ")
// })
// app.listen(3000);

//npm run dev //command for starting server



// ------------------







// console.log("PROCESS:", process)

// -------------------------
//Creating server
// const http = require('http');
// // console.log(http);

// const server = http.createServer((req, res) => {
//     res.end("hello world from node js dev realy update")
// });

// server.listen(3000);
// --------------------------------

// const helper = require("./helper.js") //imported file from from helper.js
const { sumData, sum } = require("./helper.js") //obj Destructring here

// const total = helper.sum(10, 200);
// console.log("Total", total)
// console.log(helper);

// const totalD = helper.sumData(15, 100);

const totalD = sumData(15, 100);
console.log("TotalD:", totalD);
// console.log(helper);






// console.log("hello from nodejs");
// let name = "Kapil";
// console.log(name);
// let a = 5;
// let b = 6;
// console.log(a+b);
