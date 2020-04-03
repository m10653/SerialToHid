# H1 Serial to HID
A simple program to interface an arduino to a Vjoy hid device for Condor 2.


## dependances
You need Vjoy and that can be installed [Here](http://vjoystick.sourceforge.net/site/)

The Following NPM packages are required
```bash
npm install -g windows-build-tools
npm install vjoy
```

## Usage
First you must flash a arduino with SonarTest.ino. This file is an example on how to interface sensors.

Next To run the main App you run
```bash
node main.js
```

You will need to configure a few variables.

ComPath (Path to Serial port)

const SensorMax = 12.0; //Min and max output values for arduino Sensor

const SensorMin = 8;

You can Verify Everything is working buy running the Vjoy Monitor tool.
