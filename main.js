const { vJoy, vJoyDevice } = require('vjoy');
const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
if (!vJoy.isEnabled()) {
	console.log("vJoy is not enabled.");
	process.exit();
}
const ComPath = 'COM11';
const VJoyMaxVal = 32769;
const VJoyMinVal = 1;
const SensorMax = 12.0; //Min and max output values for arduino Sensor
const SensorMin = 8;

function start(){
	const port = new SerialPort(ComPath, { baudRate: 9600 })
	let device = vJoyDevice.create(1);
	const parser = new Readline()
	port.pipe(parser)
	parser.on('data', line => {
		let value = parseFloat(line)
		value = value.map(SensorMin, SensorMax,VJoyMinVal,VJoyMaxVal)
		console.log(value)
		if(value < 32769 && value >= 1){
			device.axes.X.set(value)
		}
	})
	device.buttons[1].set(true);
	//Sets button 1 to true So you can tell check that node has
	//connected to Vjoy using Vjoy monitor
}
async function init(){
	let ports = await SerialPort.list()
	for(i in ports){
		console.log( i + ":" + ports[i].path + " (" + ports[i].manufacturer + ")" )
	}
	start()

}
init()

Number.prototype.map = function (in_min, in_max, out_min, out_max) {
	return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
