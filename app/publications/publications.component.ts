import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {

	ngOnInit() {
	}

	showNationalBooks : boolean;
	showInternationalBooks : boolean;
	showBookChapters : boolean;
	showPapers : boolean;	
	showOthers : boolean;

	constructor(){
	    this.showNationalBooks = false;
	    this.showInternationalBooks = false;
	    this.showBookChapters = false;
	    this.showPapers = false;
	    this.showOthers = false;
	}

	ShowTextFragment(textId: string): void {
	    switch(textId) {
	    	case "national":
	    		this.showNationalBooks = !this.showNationalBooks;
			    this.showInternationalBooks = false;
			    this.showBookChapters = false;
			    this.showPapers = false;
			    this.showOthers = false;
	    		break;
	    	case "international":
	    		this.showInternationalBooks = !this.showInternationalBooks;
			    this.showNationalBooks = false;
			    this.showBookChapters = false;
			    this.showPapers = false;
			    this.showOthers = false;
	    		break;
	    	case "papers":
	    		this.showPapers = !this.showPapers;
			    this.showNationalBooks = false;
			    this.showInternationalBooks = false;
			    this.showBookChapters = false;
			    this.showOthers = false;
	    		break;
	    	case "bookchapters":
	    		this.showBookChapters = !this.showBookChapters;
			    this.showNationalBooks = false;
			    this.showInternationalBooks = false;
			    this.showPapers = false;
			    this.showOthers = false;
	    		break;
	    	default:
	    		this.showOthers = !this.showOthers;
			    this.showNationalBooks = false;
			    this.showInternationalBooks = false;
			    this.showBookChapters = false;
			    this.showPapers = false;
	    }
	}
}
