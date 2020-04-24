class Slider {
  constructor() {
    this.sliderContainer = document.getElementById('slider_container');
    this.sliderWrapper = document.getElementById('slider_wrapper');
    this.leftNav = document.getElementById('slide_left');
    this.rightNav = document.getElementById('slide_right');
    this.slide = document.getElementsByClassName('slide');
    this.amountOfSlidesVisible = Math.round(this.sliderWrapper.offsetWidth / this.slide[0].offsetWidth);
    this.leftSlidesLeft = 0;
    this.rightSlidesLeft = Number(this.slide.length - this.amountOfSlidesVisible);
    this.position = 0;
    this.leftOffset = 0;
  }

  initializeSlider(amountOfSlides) {
    let widthOfEachSlide = this.sliderContainer.offsetWidth / amountOfSlides;
    this.sliderWrapper.style.width = this.slide.length * widthOfEachSlide + 'px';
    for (let i = 0; i < this.slide.length; i++) {
      this.slide[i].style.width = widthOfEachSlide + 'px';
    }
    for (let i = 1; i < this.slide.length; i++) {
      this.leftOffset += widthOfEachSlide;
      this.slide[i].style.left = this.leftOffset + 'px';
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
          this.sliderWrapper.style.left = this.position + 'px';
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
          this.sliderWrapper.style.left = this.position + 'px';
          console.log('Move right ' + this.position);  
        } else {
          console.log('No slides to move');
        }
      break;
    }
  }


}

const slider = new Slider();
slider.initializeSlider(6);
slider.leftNav.addEventListener('click', () => {
  slider.sliderMovement('left');
});
slider.rightNav.addEventListener('click', () => {
  slider.sliderMovement('right');
});