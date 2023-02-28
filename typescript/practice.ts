class Computer {
  model;
  memory;
  ram;

  constructor(model, memory, ram) {
    this.model = model;
    this.memory = memory;
    this.ram = ram;
  }

  getComputerInfo() {
    return `this is computer model ${this.model}`;
  }

  getComputerInsight = () => {
    return `the ${this.model} have ${this.ram} ram and ${this.memory} memory`;
  };
}

const mac = new Computer("mac", "16gb", "512gb");
console.log(mac.getComputerInfo());

const example = {
  name: 'huy',
  age: 21
}
console.log(example!.name)