const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');
const { exec } = require('child_process');
const { default: test } = require('@playwright/test');

const portName = '/dev/ttyACM0';

const port = new SerialPort({ path: portName, baudRate: 9600 });
const parser = port.pipe(new ReadlineParser({ delimiter: '\n' }));
let initialized = false;
let isRunning = false;

console.log(`Listening for button presses on ${portName}...`);

parser.on('data', (data) => {

    if (!initialized) {
        console.log('Serial connection established. Waiting for button presses...');
        initialized = true;
        return;
    }
    if (data === 'RUN_TESTS') {
        
        // Check if isRunning is true, if so it will stop the tests from running again until the current tests are finished
        if (isRunning) {
            console.log('\nTests are already running.');
            return;
        }

        // If isRunning is false, it will set it to true and run the tests
        isRunning = true;
        console.log(`\nButton pressed! Running tests...`);

        const testProcess = exec('npm run runTests')

        testProcess.stdout.on('data', (data) => {
        process.stdout.write(data);
        })

        testProcess.stderr.on('data', (data) => {
        process.stderr.write(data);
        })

        testProcess.on('close', (code) => {
            console.log(`Test process exited with code ${code}`);
            isRunning = false;
            console.log(`Listening for button presses on ${portName}...`);
        })
    }
})

port.on('error', (err) => {
    console.error('Error: ', err.message);
});