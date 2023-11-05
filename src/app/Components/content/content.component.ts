import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit  {
  txt = 'Welcome';
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
      if (i < this.txt.length) {
        this.ch.innerHTML += this.txt.charAt(i);
        i++;
      } else {
        clearInterval(intervalId); 
        this.clearText();
      }
    }, this.speed);
  }

  clearText() {
    let text = this.ch.innerHTML;
    if (text.length > 0) {
      text = text.slice(0, -1); 
      this.ch.innerHTML = text;
      setTimeout(() => {
        this.clearText(); 
      }, this.speed / 2); 
    } else {
      setTimeout(() => {
        this.typeWriter(); 
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
