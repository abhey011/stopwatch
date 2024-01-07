import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'stopwatch';
  Sec: any ='0'+ 0;
  Min: any ='0'+ 0;
  Hour: any ='0'+ 0;
  timer: any;
  timerRunning: boolean = false;
  isPaused: boolean = false;

  ngOnInit() {
  }

  start() {
    this.timerRunning = true;
    this.timer = setInterval(() => this.updateTimer(), 1000);
  }

  updateTimer() {
    if (!this.isPaused) {
      if (this.Min === 0 && this.Sec === 0) {
        clearInterval(this.timer);
        this.timerRunning = false;
      } else {
        if (this.Sec === 0) {
          this.Min--;
          this.Sec = 59;
        } else {
          this.Sec--;
        }
      }
    }
  }

  pause() {
    clearInterval(this.timer);
    this.isPaused = true;
  }

  resume() {
    this.isPaused = false;
    this.timer = setInterval(() => this.updateTimer(), 2000);
  }

  reset() {
    clearInterval(this.timer);
    this.Min = 5;
    this.Sec = 0;
    this.isPaused = false;
    this.timerRunning = false;
  }
}
