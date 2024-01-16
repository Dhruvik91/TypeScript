// here we'll learn about class declaration 


class User {

    name: string = "RAVI"
    getname(): string {
        return this.name
    }
}

let user1 = new User();
console.log(user1.getname())