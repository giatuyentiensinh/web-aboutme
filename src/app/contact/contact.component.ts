import { Component } from '@angular/core';
// import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent {

  message: string;
  email: string;
  name: string;
  checkLoading: boolean = true;
  // comment: AngularFirestoreCollection<any>;

  constructor() {
  // constructor(af: AngularFirestore) {
    // this.comment = af.collection('/comment');
  }

  onSubmit() {
    // this.checkLoading = false;
    // this.comment.add({
    //   name: this.name,
    //   email: this.email,
    //   message: this.message,
    //   time: new Date()
    // }).then(() => {
    //   console.log(this.message);
    //   console.log(this.email);
    //   console.log(this.name);
    //   this.checkLoading = true;
    // });
  }
}
