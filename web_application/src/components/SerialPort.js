const SerialPort = require('serialport');  //npm i serialport
const Readline = require('@serialport/parser-readline')  //npm i @serialport/parser-readline

const port = new SerialPort('COM3', {  //not sure if this is correct
  baudRate: 9600,
  autoOpen: true
});

const recievedData = 'data';
// The Serial port parser
const parser = new Readline();
port.pipe(parser);

// Read the data from the serial port
parser.on("data", (line) => parseData(line));  //log data and store it

// Write the data to the serial port, can change to weatherData
writeMessage("hello")
console.log("data to port")

function writeMessage(data) {
  let msg = "date write to port!";
  port.write(data)
}

function parseData(data){
  let msg = data;
  recievedData = data
  console.log(recievedData);
}