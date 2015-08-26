var onewire = require('./index'),
    myDevice = '00042b2cd7ff';

/*
 * Promise based tests
 *
 */

onewire.listDevices().then(function (result) {
    console.log("Listing all devices with promises:");
    result.forEach(function (item, i) {
        console.log("\t", i, ":", item);
    });
}, displayError);

onewire.readDevices().then(function (result) {
    console.log("Reading all devices with promises:");
    result.forEach(function (item) {
        console.log("\t", item.name, ":", item.value);
    });
}, displayError);

onewire.readDevice(myDevice).then(function (result) {
    console.log("Reading specific device with promise:", result);
}, displayError);

/*
 * Callback based tests
 *
 */

onewire.listDevices(function (err, devices) {
    console.log("Listing devices with callback:");
    if (err) {
        displayError(err);
    } else {
        devices.forEach(function (item, i) {
            console.log("\t", i, ":", item);
        });
    }
});

onewire.readDevices(function (err, result) {
    console.log("Reading all devices with callback:");
    if (err) {
        displayError(err);
    } else {
        result.forEach(function (item) {
            console.log("\t", item.name, ":", item.value);
        });
    }
});

onewire.readDevice(myDevice, function (err, result) {
    if (err) {
        displayError(err);
    } else {
        console.log("Reading specific device with callback:", result);
    }
});

function displayError (err) {
    console.log("Error:", err);
}
