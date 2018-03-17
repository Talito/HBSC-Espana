import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

	constructor() { }

	public visible = false;
	public visibleAnimate = false;

	public show(): void {
		console.log('show()');
		this.visible = true;
		setTimeout(() => this.visibleAnimate = true, 100);
	}

	public hide(): void {
		console.log('hide()');
		this.visibleAnimate = false;
		setTimeout(() => this.visible = false, 300);
	}

	public onContainerClicked(event: MouseEvent): void {
		console.log('onContainerClicked');
		if ((<HTMLElement>event.target).classList.contains('modal')) {
		  this.hide();
		}
	}

}
