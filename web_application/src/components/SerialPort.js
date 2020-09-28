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

//Each line is as follows:
//time_stamp, lat, long, gimbal_x [degrees], gimbal_y[degrees],
//IMU_accel_x, IMU_accel_y, IMU_accel_z, IMU_rot_x, IMU_rot_y, IMU_rot_z,
//internal_temp, height, battery_status, rocket_status
function readData(data){
  allData.push(data);
  console.log(allData.length);
  console.log(data)
  var spiltStr = data.split(','); //array of data from the port
  //console.log(data.substr(0,6))  
  console.log(spiltStr[0]);  //get index of 0 of data
}


