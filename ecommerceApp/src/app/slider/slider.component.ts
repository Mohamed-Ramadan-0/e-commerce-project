import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
declare var $:any
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  customOptions: OwlOptions = {
    autoplay: true,
    autoplaySpeed:700,
    autoplayHoverPause:true,
    autoplayTimeout:5000,
    loop: true,
    center: true,
    margin:20,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: false
  }
/* AddCart(){
  $(".card").addClass("d-none")
} */

/* jquery code
 */
}

