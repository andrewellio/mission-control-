import weatherData from "../data/WeatherData.json";
import React, { useState } from "react";
const [imcomeData,setIncomeData] = useState();  //to store the data from SerialPort
const SerialPort = require('serialport');  //npm i serialport
const Readline = require('@serialport/parser-readline')  //npm i @serialport/parser-readline

const port = new SerialPort('COM1',{  //not sure if this is correct
    baudrate: 9600,
  });

// The Serial port parser
const parser = new Readline();
port.pipe(parser);

// Read the data from the serial port
parser.on("data", (line) => console.log(line),setIncomeData(line));  //log data and store it

// Write the data to the serial port
port.write("Some date write to port!");  // can change to weatherData
