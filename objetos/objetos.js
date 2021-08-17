// Ejercicios Objetos

var users = [{ name: "Michael", age: 37 }, { name: "John", age: 30 }, { name: "David", age: 27 }];

console.log(users[1].age);

var users = [{ name: "Michael", age: 37 }, { name: "John", age: 30 }, { name: "David", age: 27 }];

console.log(users[0].name);

var users = [{ name: "Michael", age: 37 }, { name: "John", age: 30 }, { name: "David", age: 27 }];

for (var i = 0; i < users.length; i++) {
    console.log(users[i].name + " - " + users[i].age);
}

var users = [{ name: "Michael", age: 37 }, { name: "John", age: 30 }, { name: "David", age: 27 }];
for (var i = 0; i < users.length; i++) {
    if (users[i].age > 27) {
        console.log(users[i].name);
    }
}