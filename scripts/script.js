
// while
// prompt print remove quit
// prompt remove where
// prompt for add
//     prompt for name, phone, email, relation,

// prompt for quit break loop;

// no extends 

// CREATE INSTANCEof OBJECT (contact)

class AddressBook {
    constructor() {
    this.contacts = [];
    }
    add(info) {
        this.contacts.push(info);
        console.log(this.contacts);
    }
    deleteAt(index) {
        const deleted = this.contacts.splice(index, 1);
        console.log(deleted);
    }
    deleteByName(mmm) {
        const whoWasDeleted = this.contacts.splice(this.contacts.indexOf(whoToDelete));
        console.log(whoWasDeleted);
    }
    print() {
        for (let i = 0; i < this.contacts.length; i++) {

            console.log(this.contacts[i]);
        }
    }
}




class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}


const book = new AddressBook();
book.add(new Contact("Snoopy", "snoopy@cool.com", "3323", "Friend"));
book.add(new Contact("Woodstock", "woodstock@cool.com", "123", "Aunt"));
book.add(new Contact("Rob", "rob@cool.com", "122223", "Uncle"));
book.add(new Contact("Jo", "jo@cool.com", "345", "Idk"));



while (true) {
    var choice = prompt("add, print, delete, delete by name, quit?")
    if (choice === "add") {
        const name = prompt("Enter name");
        const email = prompt("Enter email");
        const phone = prompt("Enter phone");
        const relation = prompt("Enter relation");
        book.add(new Contact(name, email, phone, relation));
    } else if (choice === "print") {
        book.print();
    } else if (choice === "delete") {
        var indexToDelete = prompt("Index to delete?")
        book.deleteAt(indexToDelete);
        console.log(indexToDelete)
    } else if (choice === "delete by name") {
        var whoToDelete = prompt("What name to delete?")
        book.deleteByName(whoToDelete);
        console.log(whoToDelete);
    }
    else if (choice === "quit") {
        console.log("bye")
        break;
    }
}














// const Ty = new Contact ("Ty", "ty@nyanmail.com", "5555553", "Friend");
// console.log(Ty)
// // for (let i = 0; i< food.length; i++) {
// //     //length of array
// // console.log(food[i]);