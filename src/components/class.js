class text {
    constructor(params) {
        this.params = params;
    }

    string () {
        return 'string'
    }
}



class name extends text {
    constructor(params) {
        super();
        this.params = params;
    }
}



function text() {
    this.text = text;
}

text.prototype.string = function() {
    return 'string';
}

function name (params) {
    this.params = paras
    text.apply(this);
}

name.prototype = Object.create(text.prototype);
name.prototype.constructor = name;

name.prototype.text = function() {
    return 'text'
}
name.prototype.test = 10;

