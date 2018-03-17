import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regional-work',
  templateUrl: './regional-work.component.html',
  styleUrls: ['./regional-work.component.css']
})
export class RegionalWorkComponent implements OnInit {

	andalucia : boolean;
	aragon : boolean;
	asturias : boolean;
	cantabria : boolean;
	castillayleon : boolean;
	castillalamancha : boolean;
	cataluna : boolean;
	ceuta : boolean;
	madrid : boolean;
	valencia : boolean;
	extremadura : boolean;
	galicia : boolean;
	islasbaleares : boolean;
	islascanarias : boolean;
	larioja : boolean;
	melilla : boolean;
	murcia : boolean;
	navarra : boolean;
	paisvasco : boolean;

	constructor(){
	    this.andalucia = false;
	    this.aragon = false;
	    this.asturias = false;
	    this.cantabria = false;
	    this.castillayleon = false;
	    this.castillalamancha = false;
	    this.cataluna = false;
	    this.ceuta = false;
	    this.madrid = false;
	    this.valencia = false;
	    this.extremadura = false;
	    this.galicia = false;
	    this.islasbaleares = false;
	    this.islascanarias = false;
	    this.larioja = false;
	    this.melilla = false;
	    this.murcia = false;
	    this.navarra = false;
	    this.paisvasco = false;
	}

	ngOnInit() {
	}

	everythingIsOff(): boolean {
		return !(this.andalucia && this.aragon && this.asturias && this.cantabria && this.castillayleon
		&& this.cataluna && this.ceuta && this.madrid && this.valencia && this.extremadura && this.galicia && this.islasbaleares
		&& this.islascanarias && this.larioja && this.melilla && this.murcia && this.navarra && this.paisvasco);
	}

	setEverythingOff(): void {
		this.andalucia = false;
	    this.aragon = false;
	    this.asturias = false;
	    this.cantabria = false;
	    this.castillayleon = false;
	    this.castillalamancha = false;
	    this.cataluna = false;
	    this.ceuta = false;
	    this.madrid = false;
	    this.valencia = false;
	    this.extremadura = false;
	    this.galicia = false;
	    this.islasbaleares = false;
	    this.islascanarias = false;
	    this.larioja = false;
	    this.melilla = false;
	    this.murcia = false;
	    this.navarra = false;
	    this.paisvasco = false;
	}

	ShowTextFragment(textId: string): void {
		this.setEverythingOff();
	    switch(textId) {
	    	case "andalucia":
	    		this.andalucia = true;
	    		break;
	    	case "aragon":
	    		this.aragon = true;
	    		break;
	    	case "asturias":
	    		this.asturias = true;
	    		break;
	    	case "cantabria":
	    		this.cantabria = true;
	    		break;
	    	case "castillayleon":
	    		this.castillayleon = true;
	    		break;
	    	case "castillalamancha":
	    		this.castillalamancha = true;
	    		break;
	    	case "cataluna":
	    		this.cataluna = true;
	    		break;
	    	case "ceuta":
	    		this.ceuta = true;
	    		break;
	    	case "madrid":
	    		this.madrid = true;
	    		break;
	    	case "valencia":
	    		this.valencia = true;
	    		break;
	    	case "extremadura":
	    		this.extremadura = true;
	    		break;
	    	case "galicia":
	    		this.galicia = true;
	    		break;
	    	case "islasbaleares":
	    		this.islasbaleares = true;
	    		break;
	    	case "islascanarias":
	    		this.islascanarias = true;
	    		break;
	    	case "larioja":
	    		this.larioja = true;
	    		break;
	    	case "melilla":
	    		this.melilla = true;
	    		break;
	    	case "murcia":
	    		this.murcia = true;
	    		break;
	    	case "navarra":
	    		this.navarra = true;
	    		break;
	    	default:
	    		this.paisvasco = true;
	    }
	}

}
