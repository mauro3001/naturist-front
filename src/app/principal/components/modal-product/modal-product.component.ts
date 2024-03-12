import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-product',
  templateUrl: './modal-product.component.html',
  styleUrls: ['./modal-product.component.scss'],
})
export class ModalProductComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public medicine: any,
    private navigate: Router
  ) {}

  //Variables
  id: number = this.medicine.id;
  name: string = this.medicine.name;
  description: string = this.medicine.description;
  price: number = this.medicine.price;
  image: string = this.medicine.imageUrl;
  date: string = this.medicine.date;
  tags: string[] = this.medicine.tags;

  ngOnInit(): void {}

  getFormatText(text: string) {
    return text?.charAt(0).toUpperCase() + text?.slice(1).toLocaleLowerCase();
  }

  closeDialog() {
    this.navigate.navigate(['/home']);
  }
}
