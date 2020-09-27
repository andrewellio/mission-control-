const SerialPort = require('serialport');  //npm i serialport
const Readline = require('@serialport/parser-readline')  //npm i @serialport/parser-readline

const port = new SerialPort('COM3', {  //not sure if this is correct
  baudRate: 9600,
  autoOpen: true
});

// The Serial port parser
const parser = new Readline();
port.pipe(parser);

var allData = [];

writeMessage("hello")  //write data
parser.on("data", (line) => readData(line));  //read data and save it into array

function writeMessage(data) {
  port.write(data);
}

function readData(data){
  allData.push(data);
  console.log(allData.length);
  console.log(data)
  //console.log(data.substr(0,6))
}


