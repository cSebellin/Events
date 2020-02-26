const {MyEventEmitter} = require('./eventbox')

//empty()

// withArgs("Luffy")
// console.log('\n===\n')
// withArgs(["Luffy", "Zorro","Usopp","Robin","Nami"])
// console.log('\n===\n')
// withArgs(152)

const em = new MyEventEmitter() 
const unsubscribe = em.on('hi', () =>{
    console.log("Hello World")
})

em.on('hi', () =>{
    console.log(`Hello World`)
})
em.on('hi', function(first, last){
    console.log(`Hello ${first} ${last}`)
})
em.emit('hi', 'Hello World')
em.emit('hi', 'Charline', 'Sebellin')
em.emit('unknown')

unsubscribe()

em.emit('hi', 'Hello World')
em.emit('hi', 'Charline', 'Sebellin')