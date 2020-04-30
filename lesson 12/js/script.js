'use strict'
// create class "Options"
class Options {
// add properties for "Options"
    constructor(height, width, bg, fontSize, textAlign) {
// property listing
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
// create methods
    create(text) {
// create of a new variable "div"
        let div = document.createElement('div');
// add text to "div"
            div.innerHTML = `<h1>${text}</h1>`;
// add style to "div"
            div.style.cssText = `height:${this.height}; width:${this.width}; background:${this.bg}; font-size:${this.fontSize}; text-align:${this.textAlign}`;
// add "div" at the end of our body
            document.body.appendChild(div);

    }
}
// declaration of a new div "block" and adding styles
let block = new Options('40%', '30%', 'pink', '14px', 'center');
// adding text to new div "block"
block.create('We did it all!');