import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  animation: any;
  nextSlide: any;
  scrolledUp: any;
  $app: any;
  
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    $(document).ready(function () {
      const $app = $('.app');
      const $img = $('.app__img');
      const $pageNav1 = $('.pages__item--1');
      const $pageNav2 = $('.pages__item--2');
      let curSlide = 1;
    
      
    
      let navigateDown = function () {
        if (curSlide > 1) return;
        this.scrolledUp = false;
        this.pagination(curSlide);
        curSlide++;
      };
    
      let navigateUp = function () {
        if (curSlide === 1) return;
        this.scrolledUp = true;
        this.pagination(curSlide);
        curSlide--;
      };
    
      setTimeout(function () {
        $app.addClass('initial');
      }, 1500);
    
      setTimeout(function () {
        this.animation = false;
      }, 4500);
    
      $(document).on('mousewheel DOMMouseScroll', function (e) {
        var delta = e.originalEvent.wheelDelta;
        if (this.animation) return;
        if (delta > 0 || e.originalEvent.detail < 0) {
          navigateUp();
        } else {
          navigateDown();
        }
      });
    
      $(document).on("click", ".pages__item:not(.page__item-active)", function () {
        if (this.animation) return;
        let target = +$(this).attr('data-target');
        this.pagination(curSlide, target);
        curSlide = target;
      });
    });
  }

  public loginGoogle(): void {
    this.authService.signinGoogle();
  }

  public pagination(slide, target): void {
    this.animation = true;
    if (target === undefined) {
      this.nextSlide = this.scrolledUp ? slide - 1 : slide + 1;
    } else {
      this.nextSlide = target;
    }

    $('.pages__item--' + this.nextSlide).addClass('page__item-active');
    $('.pages__item--' + slide).removeClass('page__item-active');

    this.$app.toggleClass('active');
    setTimeout(function () {
      this.animation = false;
    }, 3000);
  };
}
