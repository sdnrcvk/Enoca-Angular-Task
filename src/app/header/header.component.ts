import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebookF,faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule,RouterModule,FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  faFacebookF=faFacebookF;
  faTwitter=faTwitter;
  faInstagram=faInstagram;
  faSearch=faSearch;

  searchQuery: string = '';

  constructor(private dataService: DataService) {}

  search(form: NgForm,inputField: HTMLInputElement) {
    console.log('Search query:', this.searchQuery);
    // Alınan değeri servise gönder
    this.dataService.setSearchQuery(this.searchQuery);
    
    inputField.value = ''; 
    form.resetForm(); 
  }

}

