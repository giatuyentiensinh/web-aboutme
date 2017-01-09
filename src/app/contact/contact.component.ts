import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.css']
})
export class ContactComponent{

	message: string;
	email: string;
	name: string;
	checkLoading: boolean = true;
	comment: FirebaseListObservable<any[]>;

	constructor(af: AngularFire) {
		this.comment = af.database.list('/comment');
	}

	onSubmit() {
		this.checkLoading = false;
		this.comment.push({
			name: this.name,
			email: this.email,
			message: this.message,
			time: new Date()
		}).then(() => {
			console.log(this.message);
			console.log(this.email);
			console.log(this.name);
			this.checkLoading = true;
		});
	}
}
