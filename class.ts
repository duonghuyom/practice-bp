class Animal {
  shape; // neu khong khai bao tu khoa gi dung truoc thi se la public
  color;
  constructor(shape, color) {
    this.shape = shape;
    this.color = color;
  }

  getAnimal() {
    return "this is animal " + this.shape + " with color " + this.color;
  }
}

const cow = new Animal("oval", "black - white");
console.log(cow.getAnimal());
console.log(cow.shape);
