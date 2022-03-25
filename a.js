
var emitter = new Emitter();

emitter.on('doSomething', ()=>{
    console.log('doing Something');
})

emitter.emit('doSomething');