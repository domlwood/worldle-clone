import { Component } from '@angular/core';

@Component({
  selector: 'app-support',
  template: `
    <div class="container">
      <a href="mailto:domwood76@gmail.com">🐛 report a bug</a>
    </div>
  `,
  styles: [
    `
      .container {
        display: flex;
        justify-content: center;
        & a {
          text-decoration: underline;
          font-style: italic;
          color: rgb(188, 188, 188);
          font-family: IBMPlexLight;
        }
      }
    `,
  ],
})
export class SupportComponent {
  constructor() {}
}
