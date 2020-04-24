class Slider {
  constructor() {
    this.sliderContainer = document.getElementById('slider_wrapper');
    this.leftNav = document.getElementById('slide_left');
    this.rightNav = document.getElementById('slide_right');
    this.sliders = document.getElementById('slider_wrapper');
    this.slide = document.getElementsByClassName('slide');
    this.amountOfSlidesVisible = Math.round(this.sliderContainer.offsetWidth / this.slide[0].offsetWidth);
    this.leftSlidesLeft = 0;
    this.rightSlidesLeft = Number(this.slide.length - this.amountOfSlidesVisible);
    this.position = 0;
    this.test = 0;
  }

  initializeSlider() {
    let width = this.slide[0].offsetWidth;
    for (let i = 1; i < this.slide.length; i++){
      this.test += width;
      console.log(this.test);
      this.slide[i].style.left = this.test + 'px';
    }
  }

  sliderMovement(direction) {
    let width = this.slide[0].offsetWidth;
    
    switch (direction) {
      case "left": 
        if (this.rightSlidesLeft > 0) {
          this.leftSlidesLeft++;
          this.rightSlidesLeft--;
          this.position += -width;
          this.sliders.style.left = this.position + 'px';
          console.log('Move left ' + this.position);
        } else {
          console.log('No slides to move');
        }
      break;
      case "right": 
        if (this.leftSlidesLeft > 0) {
          this.leftSlidesLeft--;
          this.rightSlidesLeft++;
          this.position += width;
          this.sliders.style.left = this.position + 'px';
          console.log('Move right ' + this.position);  
        } else {
          console.log('No slides to move');
        }
      break;
    }
  }


}

const slider = new Slider();
console.log(slider.amountOfVisibleSlides);
slider.initializeSlider();
slider.leftNav.addEventListener('click', () => {
  slider.sliderMovement('left');
});
slider.rightNav.addEventListener('click', () => {
  slider.sliderMovement('right');
});