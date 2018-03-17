import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-national-work',
  templateUrl: './national-work.component.html',
  styleUrls: ['./national-work.component.css']
})
export class NationalWorkComponent implements OnInit {

	y19862000 : boolean;
	y2002 : boolean;
	y2006 : boolean;
	y2010 : boolean;
	y2014 : boolean;

	constructor(){
	    this.y19862000 = false;
	    this.y2002 = false;
	    this.y2006 = false;
	    this.y2010 = false;
	    this.y2014 = true;
	}


	ngOnInit() {
	}

	ShowTextFragment(textId: string): void {
	    switch(textId) {
	    	case "19862000":
				this.y2002 = false;
				this.y2006 = false;
				this.y2010 = false;
				this.y2014 = false;
	    		this.y19862000 = !this.y19862000;
	    		break;
	    	case "2002":
				this.y2006 = false;
				this.y2010 = false;
				this.y2014 = false;
				this.y19862000 = false;
	    		this.y2002 = !this.y2002;
	    		break;
	    	case "2006":
				this.y2002 = false;
				this.y2010 = false;
				this.y2014 = false;
				this.y19862000 = false;   	
	    		this.y2006 = !this.y2006;
	    		break;
	    	case "2010":
				this.y2002 = false;
				this.y2006 = false;
				this.y2014 = false;	   
				this.y19862000 = false; 	
	    		this.y2010 = !this.y2010;
	    		break;
	    	default:
				this.y2002 = false;
				this.y2006 = false;
				this.y2010 = false;   
				this.y19862000 = false; 	
	    		this.y2014 = !this.y2014;
	    }
	}

}
