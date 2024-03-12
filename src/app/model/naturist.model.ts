export interface NaturistModel {
    id:          number;
    name:        string;
    description: string;
    price:       number;
    imageUrl:    string;
    tags:        string[];
    date:        Date;
}