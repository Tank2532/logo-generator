// Base class for shapes
class Shape {
    constructor(baseCode) {
        this.baseCode = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
</svg>`
    }
}

class Circle extends Shape {
    constructor (baseCode, updatedCodeCircle) {
        this.updatedCodeCircle = str.split('xmlns="http://www.w3.org/2000/svg">')
    }
}

class Triangle extends Shape {
    constructor () {

    }
}

class Square extends Shape {
    constructor () {

    }
}

module.exports = { Circle, Triangle, Square };
