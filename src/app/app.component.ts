import { Component, OnInit } from '@angular/core';
import { VgAPI } from 'videogular2/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	sources: Array<Object>;
	api: VgAPI;
	constructor() {
		this.sources = [
            {
                src: "/assets/songs/NessunDorma.m4a",
                type: "audio/mp3"
            }
        ];
	}

    onPlayerReady(api: VgAPI) {
        this.api = api;
        this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.playVideo.bind(this));
    }

    playVideo() {
        this.api.play();
    }

	ngOnInit() {
	}
}
