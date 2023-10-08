/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let current_value = init;

    return {
        reset: () => {
            init = current_value
            return init;
        },
        increment: () => {
            return ++init;
        },
        decrement: () => { 
            return --init;
        },  
    }
    
};