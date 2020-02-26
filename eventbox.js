const { EventEmitter } = require('events');

function empty(){
    
    const x1 = new EventEmitter();
    x1.on('hi' , function() {
        console.log("ChoooOoper")
    });
    x1.emit('hi');
}

// ex02
function withArgs(data){
    const em = new EventEmitter()
    em.on('newFellow', args =>{
        if(typeof name === 'string'){
            console.log(`Here come\'s a new challenger ${name}`)
        }
        else if(Array.isArray(args)){
            for(const name of args){
                console.log(`Here come\'s a new challenger ${name}`)
            }
        }
        else{
            console.log(`Sorry type ${typeof args} n'est pas implenter`)
        }

    }) 
    em.emit('newfellow', data)
}
// ex03
class MyEventEmitter {
    constructor(){
        this.events = {}
    }

    on(eventName, callback){
        if (! this.events[eventName]){
            this.events[eventName]= []
        }

        this.events[eventName].push(callback)
        
        return () =>{
            this.events[eventName] = undefined
        }
            
    }

    emit(eventName, ...data){
        //this.events[eventName]() 
        const arrCallback = this.events[eventName]
        if (arrCallback !== undefined){
            arrCallback.forEach(callback =>{
            if (callback.length === data.length){    
            callback(...data)// à partir d'un tableau on crée des paramètres
                 }
            })
        }
    }
}

module.exports = {
    empty, // correspond à empty : empty mais comme la clé est = à la valeur on a pas besoin de l'écrire 2x
    withArgs,
    MyEventEmitter 
}
