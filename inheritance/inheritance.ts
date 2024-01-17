// here we'll learn about inheritance in class

class Parent {
  name: string = "0";
  setName(name: string): void {
    this.name = name;
  }
}

class Child extends Parent {
  getName(): string {
    return this.name;
  }
}

let c1 = new Child();

c1.setName("Ravi");

console.log(c1.getName());


