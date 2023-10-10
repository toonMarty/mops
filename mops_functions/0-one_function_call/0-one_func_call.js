/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let counter = 0;
    
	return function(...args){
        counter++;
        return counter === 1 ? fn(...args) : undefined;
    }
};
