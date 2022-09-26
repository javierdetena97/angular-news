import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  title: string = 'Filtra notícies per categoria i país';
  categorySelectForm: string = 'Categoria';
  countrySelectForm: string = 'País';

  selectedCategory: string = 'general';
  selectedCountry: string = 'ar';

  categories: any[] = [
    {value: 'general', name: 'General'},
    {value: 'science', name: 'Ciència'},
    {value: 'health', name: 'Salut'},
    {value: 'sports', name: 'Esports'},
    {value: 'business', name: 'Negocis'},
    {value: 'technology', name: 'Tecnologia'},
    {value: 'entertainment', name: 'Entreteniment'}
  ];

  countries: any[] = [
    {value: 'ar', name: 'Argentina'},
    {value: 'br', name: 'Brasil'},
    {value: 'fr', name: 'França'},
    {value: 'hu', name: 'Hongria'},
    {value: 'mx', name: 'Mèxic'},
    {value: 'gb', name: 'Regne Unit'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  searchNew() {
    console.log(this.selectedCategory);
    console.log(this.selectedCountry);
  }

}
