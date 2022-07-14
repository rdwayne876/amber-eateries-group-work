import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
    selector: 'app-rating',
    templateUrl: './rating.component.html',
    styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
    @Input() starsArr!: number[];
    @Input() id!: number;
    stars: number[] = [1, 2, 3, 4, 5];
    selectedValue: number = 1;
    isMouseOver = true;
    sum: number = 0;
    avg: number = 0;
    displayedValue!: number;

    countStar(star: number) {
        // this.sum = 0;
        // this.starsArr.push(this.selectedValue);

        // this.starsArr.forEach((el) => {
        //     this.sum += el;
        // });

        // this.avg = Math.round(this.sum / this.starsArr.length);
        this.products.rate(star, this.id).subscribe((data) => {
            if (!data) {
                //Error handling logic
            }
        });
    }

    removeStar(star: number) {
        this.isMouseOver = false;
        this.selectedValue != star;
        this.sum -= this.selectedValue;
    }

    addClass(star: number) {
        if (this.isMouseOver) {
            this.selectedValue = star;
        }
    }

    removeClass() {
        if (this.isMouseOver) {
            this.selectedValue = this.avg;
        }
    }

    constructor(private products: DataService) {}

    ngOnInit(): void {
        this.starsArr.forEach((el) => {
            this.sum += el;
        });

        this.avg = this.sum / this.starsArr.length;
        this.selectedValue = this.avg;
    }
}
