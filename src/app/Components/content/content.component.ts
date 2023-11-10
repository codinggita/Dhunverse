import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit  {
  txtArray = ['Welcome,', 'Namaste,', 'Sasria Kal,', ' Bienvenue,', 'Benvenuto/a,', 'Välkommen,' ];
  currentTxtIndex = 0;
  currentTxt = this.txtArray[this.currentTxtIndex];
  text2 = ' Dhunverse';
  speed = 200;
  ch: any;
  ch2: any;
  ngOnInit(): void {
    this.ch = document.getElementById('demo');
    this.ch2 = document.getElementById('demo1');
    this.typeWriter();
    this.typeWriter2();
  }

  typeWriter() {
    let i = 0;
    const intervalId = setInterval(() => {
      if (i < this.currentTxt.length) {
        this.ch.innerHTML += this.currentTxt.charAt(i);
        i++;
      } else {
        clearInterval(intervalId); // Stop typing
        this.clearText();
      }
    }, this.speed);
  }

  clearText() {
    let text = this.ch.innerHTML;
    if (text.length > 0) {
      text = text.slice(0, -1); // Remove the last character
      this.ch.innerHTML = text;
      setTimeout(() => {
        this.clearText(); // Recursively clear one character at a time
      }, this.speed / 2); // Adjust the speed for a smooth erasing effect
    } else {
      // Move to the next text in the array
      this.currentTxtIndex = (this.currentTxtIndex + 1) % this.txtArray.length;
      this.currentTxt = this.txtArray[this.currentTxtIndex];

      setTimeout(() => {
        this.typeWriter(); // Start typing the next text
      }, this.speed);
    }
  }
  typeWriter2() {
    let i = 0;
    const intervalId2 = setInterval(() => {
      if (i < this.text2.length) {
        this.ch2.innerHTML += this.text2.charAt(i);
        i++;
      } else {
        clearInterval(intervalId2); // Stop the interval when typing is complete
      }
    }, this.speed);
  }
}
