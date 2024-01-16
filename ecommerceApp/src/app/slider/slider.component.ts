import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


declare var $:any
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  ngOnInit(): void {
  }

  
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
        items: 4
      }
    },
    nav: false
  }

  /* tooltipanimation(){
    console.log("gfshdgjmfhnb");
    
    $(".icon-container").hover(function(){
      $(".tooltipN").css({"left": "140%", "opacity":"1" , "transition":".5s all ease-in-out"});
      }, function(){
      $(".tooltipN").css({"left": "50%", "opacity":"0" , "transition":".5s all ease-in-out"});
    });
  } */
  tooltipanimationin(event:any){
    
    $(event.target.children[1]).css({"left": "140%", "opacity":"1" , "transition":".5s all ease-in-out"});
    
      
  }

  tooltipanimationout(event:any){
    $(event.target.children[1]).css({"left": "50%", "opacity":"0" , "transition":".5s all ease-in-out"});
    
      
  }

}

