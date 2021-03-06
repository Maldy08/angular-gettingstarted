import { Component } from "@angular/core";
import { IProduct } from "./products";

@Component({
    selector: 'pm-products',
    templateUrl: './products-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent{
    imageWidth:number =50;
    imageMargin = 2;
    showImage:boolean = false;
    pageTitle:string = 'Product List';
    private _listFilter: string =''

    get listFilter(): string{
        return this._listFilter
    }
    set listFilter(value:string){
        this._listFilter = value
    }

    products:IProduct[] = [
        {
            productId:2,
            productName:"Garden Cart",
            productCode:"GDN-0023",
            releaseDate:"March 18, 2021",
            description: "15 gallon capacity rolling garden cart",
            price:32.99,
            starRating: 4.2,
            imageUrl: "assets/images/garden_cart.png"
        },
        {
            productId:5,
            productName:"Hammer",
            productCode:"TBX-0048",
            releaseDate:"March 21, 2021",
            description: "Curved claw steel hammer",
            price:8.9,
            starRating: 4.8,
            imageUrl: "assets/images/hammer.png"
        }

    ]

    toogleImage():void{
        this.showImage =!this.showImage;
    }
}
