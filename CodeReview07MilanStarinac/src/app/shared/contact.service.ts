import { Injectable } from '@angular/core';
import { FormControl , FormGroup, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(public firebase: AngularFireDatabase) { }
    contactList: AngularFireList<any>;

   form = new FormGroup({
     $key: new FormControl(null),
     firstName: new FormControl('', Validators.required),
     surname: new FormControl('', Validators.required),
     phoneNumber: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
getContacts(){
                 this.contactList = this.firebase.list('contact');
                 return this.contactList.snapshotChanges();
         }
insertContact(contact){
                 this.contactList.push({
                         firstName: contact.firstName,
                         surname: contact.surname,
                         phoneNumber: contact.phoneNumber,
                         email: contact.email,
                         location: contact.location
                  });
         }
populateForm(contact){
    this.form.setValue(contact);
  }
updateContact(contact){
    this.contactList.update(contact.$key,{
       firstName: contact.firstName,
       surname: contact.surname,
       phoneNumber: contact.phoneNumber,
       email: contact.email,
       location: contact.location 
    });
  }
deleteContact($key: string){
    this.contactList.remove($key);
  }


}





