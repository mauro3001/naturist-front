import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NaturistModel } from 'src/app/model/naturist.model';
import { NaturistServices } from '../../../services/naturist-services.service';
import { ModalProductComponent } from '../modal-product/modal-product.component';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, switchMap } from 'rxjs';
@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.scss'],
})
export class InitialPageComponent implements OnInit {
  options = [
    { name: 'Home', icon: 'home', route: '/home' },
    { name: 'About', icon: 'info', route: '/about' },
    { name: 'Contact', icon: 'villa', route: '/contact' },
  ];
  constructor(
    private naturistService: NaturistServices,
    public dialog: MatDialog,
    private route: ActivatedRoute
  ) {}

  showFiller = false;
  //All data about products
  products: NaturistModel[] = [];

  ngOnInit(): void {
    this.showFiller = true;
    this.getInformation();
  }

  getModalProductById() {
    const medicineIndex = parseInt(this.route.snapshot.queryParams['medicine']);
    console.log('aca llega el id', medicineIndex);
    if (
      !isNaN(medicineIndex) &&
      medicineIndex !== null &&
      medicineIndex !== undefined
    ) {
      const medicine: NaturistModel = this.products.filter(
        product => product.id === medicineIndex
      )[0];
      if (medicine) {
        this.openDialog(medicine);
      }
    }
  }

  getInformation() {
    this.naturistService.listProducts().subscribe(
      (data: NaturistModel[]) => {
        this.products = data.map((product, index) => {
          return { ...product, id: index };
        });
        console.log('aca llega la data', this.products);
        if (this.products) {
          this.getModalProductById();
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  openDialog(medicine: NaturistModel) {
    const dialogRef = this.dialog.open(ModalProductComponent, {
      data: medicine,
    });
    console.log('information', medicine);

    dialogRef.afterClosed().subscribe(result => {});
  }
}
