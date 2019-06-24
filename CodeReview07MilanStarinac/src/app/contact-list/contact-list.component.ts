import { Component, OnInit } from '@angular/core';
import { ContactService } from "../shared/contact.service";

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
	contactArray =[];
	showDeletedMessage : boolean;
	searchText:string = "";

  constructor(public contactService: ContactService) { }

  ngOnInit() {
 this.contactService.getContacts().subscribe(
                 (list) => {
                         this.contactArray = list.map( (item) => {
                                return {
                                        $key : item.key,
                                        ...item.payload.val()
                                }
                        })
                 });

}
onDelete($key){
     if(confirm("Are you sure you want to delete this record?")){
        this.contactService.deleteContact($key);
       this.showDeletedMessage = true;
       setTimeout(()=> this.showDeletedMessage=false , 3000)
     }
   }

filterCondition(contact){
     return contact.firstName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 ;
   }
}

