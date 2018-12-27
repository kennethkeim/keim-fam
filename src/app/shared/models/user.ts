export class User {
   email: string
   password: string

   constructor(email: string, password: string) {
      this.email = email;
      this.password = password;
   }
}

// for future reference, this class could be called/instantiated 
// without a class like so:

// user: User = {
//    name: "ken",
//    email: "foo",
//    password: "fff"
// }

// rather than this method:
// user = new User("Kenneth", "ken@email.com", "lamepass");
