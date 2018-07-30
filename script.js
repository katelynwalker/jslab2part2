"use strict";

class AddressBook {
    constructor(){
        this.contacts = [];
    }
    add() {
    const inputs = document.querySelectorAll("input[type='text']")
    this.contacts.push(new Contact(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value));
    this.display();
    }

    deleteAt(index){
        this.contacts.splice(index,1);
        this.display();
        }
    
    display() {
        this.clear();
        let index = 0;
        for (let contact of this.contacts) {
          const newContact = document.createElement("section");
          const name_ = document.createElement("p");
          const email_ = document.createElement("p");
          const phone_ = document.createElement("p");
          const relation_ = document.createElement("p");
          const trashButton = document.createElement("section");
          name_.textContent = `Name: ${contact.name}`;
          email_.textContent = `Email: ${contact.email}`;
          phone_.textContent = `Phone: ${contact.phone}`;
          relation_.textContent = `Relation: ${contact.relation}`
          document.querySelector('.bottom').appendChild(newContact)
          newContact.appendChild(name_);
          newContact.appendChild(email_);
          newContact.appendChild(phone_);
          newContact.appendChild(relation_);
          newContact.appendChild(trashButton);
          newContact.classList.add('item_container');
          trashButton.innerHTML = `<button onclick="addressBook.deleteAt(${index})" class="trash_Button" type="button"><i class="material-icons">delete</i></button>`;
          index++;
         
        }
      
    }
   
  

    clear() {
        document.querySelector('.bottom').innerHTML = ""; 
    }
   
}


class Contact{
        constructor(name, email, phone, relation){
            this.name = name;
            this.email = email;
            this.phone = phone;
            this.relation = relation;
        }
    }




const addressBook = new AddressBook();
    



