/**
 * @return {null|boolean|number|string|Array|Object}
 * return the last array element
 */
Array.prototype.last = function() {
    return !this.length? -1 : this.at(-1);
};