class NguoiDung {
  email;
  #password; // # co nghia la khai bao private

  constructor(email, password) {
    this.email = email;
    this.#password = password;
  }

  login(email, password) {
    if (email === this.email && password === this.#password) {
      console.log("Login Successfully");
    } else {
      console.log("Authentication Failed!!");
    }
  }

  resetPassword(newPassword) {
    this.#password = newPassword;
  }

  logout() {
    console.log("Logout Successfully");
  }

  getPassword() {
    return this.#password;
  }
}

class Author extends NguoiDung {
  #numOfPost;

  constructor(email, password) {
    super(email, password);
    this.#numOfPost = 0;
  }

  createPost(content) {
    this.#numOfPost++;
  }

  getNumOfPost() {
    return this.#numOfPost;
  }
}

class Admin extends NguoiDung {
  constructor(email, password) {
    super(email, password);
  }

  removeUser(userId) {
    console.log("User Removed successfully.");
  }
}

const nehal = new Author("nm@gmail.com", "password:)");
nehal.login("nm@gmail.com", "password:)");
nehal.createPost(
  "I hope you are enjoying this article. Don't forget to leave your feedback. :)"
);
nehal.createPost("I am tired, Do you wanna buy me a coffee? :)");

console.log(nehal.email); // lay duoc ra email
console.log(nehal.numOfPost); // khong lay ra duoc gia tri numOfPost vi la bien private
console.log(nehal.getNumOfPost()); // goi qua method thi se lay duoc gia tri private
console.log(nehal.getPassword());

const json = new Admin("jason@gmail.com", "[Object] [object]");
json.login("jason@gmail.com", "[Object] [object]");
json.resetPassword("{id: 1}");
json.login("jason@gmail.com", "{id: 1}");
json.removeUser(12);

// trường hợp access private property trong class cha từ class con thì không access được, ngay cả
// khi thông qua method
