import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-category-country-form',
  templateUrl: './category-country-form.component.html',
  styleUrls: ['./category-country-form.component.css']
})
export class CategoryCountryFormComponent implements OnInit {

  @Output() selectedParameters = new EventEmitter<any>()

  // Static content
  title: string = 'Filtra notícies per categoria i país';
  categorySelectForm: string = 'Categoria';
  countrySelectForm: string = 'País';

  // Selected parameters
  selectedCategory: string = 'general';
  selectedCountry: string = 'us';

  categories: any[] = [
    {value: 'general', name: 'General'},
    {value: 'business', name: 'Negocis'},
    {value: 'entertainment', name: 'Entreteniment'},
    {value: 'health', name: 'Salut'},
    {value: 'science', name: 'Ciència'},
    {value: 'sports', name: 'Esports'},
    {value: 'technology', name: 'Tecnologia'}
  ];

  countries: any[] = [
    {value: 'us', name: 'Estats Units'},
    {value: 'de', name: 'Alemanya'},
    {value: 'fr', name: 'França'},
    {value: 'jp', name: 'Japó'},
    {value: 'mx', name: 'Mèxic'},
    {value: 'gb', name: 'Regne Unit'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  searchNew() {
    const PARAMETERS = {
      category: this.selectedCategory,
      country: this.selectedCountry
    }

    // Send selected parameters to parent component
    this.selectedParameters.emit(PARAMETERS);
  }

}
