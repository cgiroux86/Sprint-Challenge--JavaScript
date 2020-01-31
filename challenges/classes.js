// 1. Copy and paste your prototype in here and refactor into class syntax.

class Cuboid {
    constructor(length,width,height){
    this.length = length;
    this.width = width;
    this.height = height
    }
    volume() {
      return this.length * this.height * this.width;
    }
    surfaceArea() {
      return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
    }
  }

  class CubeMaker extends Cuboid {
      constructor(length,width,height){
          super(length, width, height)
      }
      cubeVolume() {
          return this.length * this.height * this.width;
      }
      cubeArea() {
          return 6*(Math.pow(this.length,2))
      }
  }
  let cube = new CubeMaker(4,4,4)
  
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
console.log(cube.cubeVolume())
console.log(cube.cubeArea())
// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.