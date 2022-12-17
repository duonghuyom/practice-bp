// polymorphism co nghia la da hinh, mot parent class co the defined ra duoc nhieu phuong thuc,
// va khi cac child class ke thua tu parent class thi no co the modify lai cac phuong thuc, thuoc
// tinh trong do.

class ComUser {
  email;
  password;

  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  login(email, password) {
    if (email === this.email && password === this.password) {
      console.log("Login Successfully");
    } else {
      console.log("Authentication Failed!!");
    }
  }
}

class NormalUser extends ComUser {
  #numOfPost;

  constructor(email, password) {
    super(email, password);
    this.#numOfPost = 0;
  }

  createPost(content) {
    // add content to your DB. :)
    this.#numOfPost++;
  }

  getNumOfPost() {
    return this.#numOfPost;
  }
}

class Administrator extends ComUser {
  #userId;
  constructor(email, password, userId) {
    super(email, password);
    this.#userId = userId;
  }

  login(email, password) {
    const isValidAdmin = true;
    if (email === this.email && password === this.password && isValidAdmin) {
      console.log("Admin Login Successfully");
    } else {
      console.log("Authentication Failed!!");
    }
  }

  removeUser(userId) {
    console.log("User Removed successfully.");
  }
}

const Huy = new NormalUser("duonghuy@gmail.com", "duonghuy");
Huy.login("duonghuy@gmail.com", "duonghuy"); // Login Successfully

const boss = new Administrator("jason@gmail.com", "[Object] [object]", 123);
boss.login("jason@gmail.com", "[Object] [object]"); // Admin Login Successfully
boss.removeUser(123);
console.log(boss.userId);
