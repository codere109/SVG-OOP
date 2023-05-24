class Shape{
    constructor(shapeColor){
        this.shapeColor
    }
}

class Circle extends Shape {
    constructor(shapeColor){
        super(shapeColor)
    }
    render(){
        return `<circle cx="100" cy="150" r="100" stroke="black" stroke-width="3" fill="${this.shapeColor}" />`
    }
}

class Triangle extends Shape {
    constructor(shapeColor){
        super(shapeColor)
    }
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`
    }
}

//figure out how to do the square
class SVG {
    constructor(text,textColor,shape){
        this.text = text;
        this.textColor = textColor;
        this.shape = shape
    }
    render(){
        return `<svg height="300" width="200">
        ${this.shape.render()}
        <text x="100" y="150" fill="${this.textColor}">${this.text}</text>
      </svg>`
    }
}

