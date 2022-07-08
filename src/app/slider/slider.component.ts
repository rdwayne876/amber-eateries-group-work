import { Component, Input, OnInit } from '@angular/core';

// slider related
interface sliderImage {
    imageSrc: string;
    imageAlt: string;
}

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
    constructor() {}

    @Input() images: sliderImage[] = [];
    @Input() indicators = true;
    @Input() controls = true;
    @Input() autoSlide = false;
    @Input() slideInterval = 3000; //default to 3 seconds

    selectedIndex = 0;

    ngOnInit(): void {
        if (this.autoSlide) {
            this.autoSlideImages();
        }
    }
    // changes slide in every 3 seconds
    autoSlideImages(): void {
        setInterval(() => {
            this.onNextClick();
        }, this.slideInterval);
    }

    // sets index of image on dot/indicator click
    selectImage(index: number): void {
        this.selectedIndex = index;
    }

    onPrevClick(): void {
        if (this.selectedIndex === 0) {
            this.selectedIndex = this.images.length - 1;
        } else {
            this.selectedIndex--;
        }
    }

    onNextClick(): void {
        if (this.selectedIndex === this.images.length - 1) {
            this.selectedIndex = 0;
        } else {
            this.selectedIndex++;
        }
    }
}
