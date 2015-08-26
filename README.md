# Read DS18x20 Sensors With Raspberry Pi

This is a library for reading DS18x20 family temperature sensors with a Raspberry Pi and node.js.

## Installation

Install using `npm`:

`npm install ds1820-temp`

Or download the source code and install dependencies with `npm install`.

## Usage

The library exposes three methods; list devices, read all devices, and read single device.

All functions Return a Promise or you can supply  callback that takes two arguments (`error` and `result`).

### List devices

`listDevices([cb(error, result)])`

Result is an array of device IDs as strings.

### Read All Devices

`readDevices([cb(error, result)])`

Result is an array of objects with two attributes: `id` (the device ID) and `value` (the temperature read).

### Read Single Device

`readDevice(deviceId, [cb(error, result])`

Takes the device ID as an argument. The result is an object with two attributes: `id` (the device ID) and `value` (the temperature read).

## Example

```
var sensors = require('1wire');

// promise based
sensors.readDevices().then(
  function (devices) {
    console.log('Read all devices', devices);
  },
  function (err) {
    console.log('An error occurred', err);
  }
);

// callback based
sensors.readDevices(function (err, devices) {
  if (err) {
    console.log('An error occurred', err);
    return;
  }

  console.log('Read all devices', devices);
});
```

