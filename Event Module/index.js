import EventEmitter from 'events'



// Creating Class
class MyEmitter extends EventEmitter{};


const razaEmitter = new MyEmitter();


// Register Event Listner
razaEmitter.on('event', ()=>{
    console.log('Event Trigger')
})

// Trigger Event
razaEmitter.emit()





