import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
    // slider images array start
    images = [
        {
            imageSrc:
                'https://jccint.org/listings/wp-content/uploads/sites/5/listing-uploads/gallery/2020/10/Jamaican_Food_Uper.jpg',
            imageAlt: 'nature1',
        },
        {
            imageSrc:
                'https://images.squarespace-cdn.com/content/v1/5a38c222cf81e0e408821378/1626482951777-LIBTINY0ETRP8YNYWZB1/image-asset.jpeg',
            imageAlt: 'nature1',
        },
        // {
        //     imageSrc:
        //         'https://jccint.org/listings/wp-content/uploads/sites/5/listing-uploads/gallery/2020/10/Jamaican_Food_Uper.jpg',
        //     imageAlt: 'nature1',
        // },

        // {
        //     imageSrc:
        //         'https://images.squarespace-cdn.com/content/v1/54fb1c14e4b0a61cf908cda9/1493775537081-5H84Y9JHD5JOP4IACOUH/pappardalle-%232.jpg?format=1500w',
        //     imageAlt: 'person1',
        // },
        // {
        //     imageSrc:
        //         'https://images.squarespace-cdn.com/content/v1/54fb1c14e4b0a61cf908cda9/1493775536169-NHL7W2XEILCX32552IFJ/charcuterie-lite.jpg?format=1500w',
        //     imageAlt: 'person2',
        // },
        {
            imageSrc:
                'https://duyt4h9nfnj50.cloudfront.net/resized/1537211574272-w2880-87.jpg',
            imageAlt: 'food',
        },
    ];
    // slider images array end

    constructor() {}

    ngOnInit(): void {}
}
