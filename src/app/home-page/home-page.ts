import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  ViewChild,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterModule, TranslateModule, CommonModule],
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.css'],
})
export class HomePage implements OnInit, AfterViewInit {
  patientCount = 0;
  doctorCount = 0;
  clinicCount = 0;
  experienceCount = 0;

  // في نفس كومبوننت الصفحة
  currentYear = new Date().getFullYear();

  private observer!: IntersectionObserver;
  private hasAnimated = false;

  @ViewChild('statsSection') statsSection!: ElementRef;

  ngOnInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !this.hasAnimated) {
          this.animateCounters();
          this.hasAnimated = true;
        }
      },
      { threshold: 0.5 }
    );
  }

  ngAfterViewInit(): void {
    if (this.statsSection) {
      this.observer.observe(this.statsSection.nativeElement);
    }
  }

  animateCounters(): void {
    this.animateCount('patientCount', 200, 1000);
    this.animateCount('doctorCount', 5, 1000);
    this.animateCount('clinicCount', 3, 1000);
    this.animateCount('experienceCount', 30, 1000);
  }

  // 👇 هذه الطريقة تم تعديلها لتعمل بشكل سليم
  animateCount(
    property:
      | 'patientCount'
      | 'doctorCount'
      | 'clinicCount'
      | 'experienceCount',
    target: number,
    duration: number
  ): void {
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = target / steps;
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        this[property] = target;
        clearInterval(interval);
      } else {
        this[property] = Math.floor(current);
      }
    }, stepTime);
  }
}
