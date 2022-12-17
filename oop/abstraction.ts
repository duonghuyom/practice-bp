class NewUser {
  name;
  email;
  #password;
  constructor() {}

  #validateEmail(email) {
    // check email is valid or not.
    return true;
  }

  #validatePassword(password) {
    // check password is satisfying the minimum requirements or not.
    return true;
  }

  signUp(name, email, password) {
    let isValidated = false;
    isValidated = this.#validateEmail(email);
    isValidated &&= this.#validatePassword(password);

    if (isValidated) {
      this.name = name;
      this.email = email;
      this.#password = password;
      console.log("User registered successfuly");
    } else {
      console.log("Please enter correct Details!!");
    }
  }

  login(email, password) {
    if (email === this.email && password === this.#password) {
      console.log("Login Successfully");
    } else {
      console.log("Authentication Failed!!");
    }
  }

  #isRegisteredUser(email) {
    return true;
  }

  printEmail() {
    return this.email;
  }

  resetPassword(email, newPassword) {
    if (this.#isRegisteredUser(email)) {
      this.#password = newPassword;
      console.log("Operation performed successfully");
    } else {
      console.log("No account found!");
    }
  }
}

const nehal = new NewUser();
nehal.signUp("Nehal Mahida", "nm@gmail.com", "password:)"); // User registered successfuly

// nehal.#validateEmail("nm@gmail.com"); // Syntax Error.

console.log(nehal.password); // undefined do la bien private nen khong the lay duoc gia tri
console.log(nehal.email); // khong phai la bien private nen co the lay ra duoc gia tri
console.log(nehal.isRegisteredUser()); // loi syntax do la bien private nen khong goi duoc
console.log(nehal.printEmail()); // tra ve gia tri email do phuong thuc nay khong private

nehal.login("nm@gmail.com", "password:)"); // Login Successfully
nehal.resetPassword("nm@gmail.com", ""); // Operation performed successfully

// abstraction co nghia la truu tuong, chi show ra nhung gia tri can thiet, con nhung gia tri khong
// quan trong thi se khong duoc public
