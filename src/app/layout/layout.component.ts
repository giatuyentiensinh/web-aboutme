import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

	constructor(private translate: TranslateService) {
		translate.addLangs(["en", "vi"]);
        translate.setDefaultLang('en');

        let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|vi/) ? browserLang : 'en');
	}

}
