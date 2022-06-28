import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-hint',
  templateUrl: './image-hint.component.html',
  styleUrls: ['./image-hint.component.scss']
})
export class ImageHintComponent {
@Input() country!: string;
  constructor() { }
}
