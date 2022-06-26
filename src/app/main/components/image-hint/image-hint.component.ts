import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-hint',
  templateUrl: './image-hint.component.html',
  styleUrls: ['./image-hint.component.scss']
})
export class ImageHintComponent implements OnInit {
@Input() country!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
