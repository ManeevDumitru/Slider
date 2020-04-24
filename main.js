class Slider {
  constructor() {
    this.sliderContainer = document.getElementById('slider_container');
    this.sliderWrapper = document.getElementById('slider_wrapper');
    this.leftNav = document.getElementById('slide_left');
    this.rightNav = document.getElementById('slide_right');
    this.change_b = document.getElementById('change_b')
    this.slide = document.getElementsByClassName('slide');
    this.amountOfSlidesVisible = 0;
    this.leftSlidesLeft = 0;
    this.rightSlidesLeft = 0;
    this.position = 0;
    this.leftOffset = 0;
  }

  resetSlider() {
    this.amountOfSlidesVisible = 0;
    this.leftSlidesLeft = 0;
    this.rightSlidesLeft = 0;
    this.position = 0;
    this.leftOffset = 0;
    for (let i = 1; i < this.slide.length; i++) {
      this.leftOffset = 0;
      this.slide[i].style.left = this.leftOffset + 'px';
    }
  }

  initializeSlider(amountOfSlides) {
    let widthOfEachSlide = this.sliderContainer.offsetWidth / amountOfSlides;
    this.amountOfSlidesVisible = Math.round(this.sliderContainer.offsetWidth / widthOfEachSlide);
    this.rightSlidesLeft = Math.round(this.slide.length - this.amountOfSlidesVisible);
    this.sliderWrapper.style.width = this.slide.length * widthOfEachSlide + 'px';
    this.sliderWrapper.style.left = 0 + 'px';
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
      case "right": 
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
    }
  }
}

const slider = new Slider();
slider.initializeSlider(3);
slider.change_b.addEventListener('click', () => {
  slider.resetSlider();
  slider.initializeSlider(document.getElementById('input_amount').value);
})
document.getElementById('slider').addEventListener('click', (e) => {
  if (e.target.classList.contains('slider_movement')) {
    slider.sliderMovement(e.target.dataset.direction);
  }
})