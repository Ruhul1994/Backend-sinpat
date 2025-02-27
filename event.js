const eventEmitter = require('events');

const emitter = new eventEmitter();

emitter.on ('log', ()=>{
    console.log('log event hs been emitted');
});
emitter.on ('greet', (arg)=>{
    console.log(` Hello ${arg.name} how are you?, your id is ${arg.id}`);
});

emitter.emit('log');
emitter.emit('greet',{
    name: 'jenifer',
    id: 100,
});