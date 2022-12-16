class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  printName() {
    return "day la ten " + this.name + " " + this.age;
  }

  static printNameS() {
    return "day la ten " + this.name + " " + this.age;
  }
}

const huy = new User("tom", 21);
console.log(huy.printName());
console.log(User.printNameS("huy", 2001));

// static la keyword de khai bao cac phuong thuc/thuoc tinh tinh~, su dung static khi khai bao
// thi co the goi den phuong thuc/thuoc tinh do ma khong can den tu khoa new

// shortcut control + option + N de run code runner
