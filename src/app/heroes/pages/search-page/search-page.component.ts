import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule
  ],
  templateUrl: './search-page.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class SearchPageComponent {

  public searchInput = new FormControl('');
  public heroes: Hero[] = [];
  public selectedhero?: Hero;

  constructor ( private heroesService: HeroesService ) {}

  searchHero () {
    const value: string = this.searchInput.value || '';

    this.heroesService.getSuggestions( value )
      .subscribe( heroes => this.heroes = heroes );
  }

  onSelectedOption ( event: MatAutocompleteSelectedEvent ) {
    if( !event.option.value ) {
      this.selectedhero = undefined;
      return
    }

    const hero: Hero = event.option.value;
    this.searchInput.setValue( hero.superhero );

    this.selectedhero = hero;
  }
 }
