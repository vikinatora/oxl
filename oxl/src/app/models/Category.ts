import { Offer } from './Offer';

export class Category {
    _id:string;
    name: string;
    offers:Offer[];
    imageUrl:string;
}