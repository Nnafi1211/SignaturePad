import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'signaturePad';

  signatureImage;

  showImage(data) {
    this.signatureImage = data;
    console.log(this.signatureImage);
  }
}
