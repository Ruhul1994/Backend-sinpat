//objective
//*  create a program using node-js eventemitter that:

//1. listens for multiple types of user events(eg.logIn, LogOut, purchase and profileUpdate);
//2. tracks how many times each event is emitted;
//3. logs a summary of all events occurrence when a special summary event is triggered

//Requirements
//1. create at least four custom events
//2. emit these events multiple times with different arguments(eg.username, item purchased )
//3. tracks and store the count of each event type.
//4. define a summary events that logs a detailed report of how many times each event was triggered.


const eventEmitter = require('events');
const fs = require('fs');
const emitter = new eventEmitter();

const eventCounts = {
    logIn: 0,
    logOut: 0,
    purchase: 0,
    profileUpdate: 0,
};

let logFile = 'eventlog.json';
if (fs.existsSync(logFile)) {
    const data = fs.readFile(logFile, 'utf-8',(err,data)=>{
        if(err){
            console.log(err);
        }else{
            Object.assign(eventCounts, JSON.parse(data));
        }
    });
   
}

function saveCounts() {
    fs.writeFile(logFile, JSON.stringify(eventCounts, null, 2), (err) => {
        if (err) {
            console.error(err);
        }
    });
}

emitter.on('logIn', (arg) => {
    console.log(`User ${arg.name} has logged in with ID ${arg.id}`);
    eventCounts.logIn++;
    saveCounts();
});

emitter.on('logOut', (arg) => {
    console.log(`User ${arg.name} has logged out with ID ${arg.id}`);
    eventCounts.logOut++;
    saveCounts();
});

emitter.on('purchase', (arg) => {
    console.log(`User ${arg.name} has purchased ${arg.item} with ID ${arg.id}`);
    eventCounts.purchase++;
    saveCounts();
});

emitter.on('profileUpdate', (arg) => {
    console.log(`User ${arg.name} has updated profile with ID ${arg.id}, field: ${arg.field}`);
    eventCounts.profileUpdate++;
    saveCounts();
});

emitter.on('summary', () => {
    console.log('Event Summary:');
    console.log(`logIn: ${eventCounts.logIn}`);
    console.log(`logOut: ${eventCounts.logOut}`);
    console.log(`purchase: ${eventCounts.purchase}`);
    console.log(`profileUpdate: ${eventCounts.profileUpdate}`);
});

emitter.emit('logIn', { name: 'jenifer', id: 100 });
emitter.emit('logIn', { name: 'Ruhul', id: 102 });
emitter.emit('logIn', { name: 'mona', id: 103 });
emitter.emit('logIn', { name: 'john', id: 101 });
emitter.emit('logOut', { name: 'jenifer', id: 100 });
emitter.emit('purchase', { name: 'john', id: 101, item: 'shoes' });
emitter.emit('profileUpdate', { name: 'john', id: 101, field: 'email address' });

emitter.emit('summary');
