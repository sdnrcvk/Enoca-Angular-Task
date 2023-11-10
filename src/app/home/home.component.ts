import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service'
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HttpClientModule],

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  sliderData: any[] = [];
  listData: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getNewsData().subscribe(
      (data) => {

        console.log('Gelen Veriler:', data.articles);
        // İlk üç veriyi slider için al
        this.sliderData = data.articles.slice(0, 3);
        
        // Geri kalan verileri diğer listeye al
        this.listData = data.articles.slice(3);
        console.log('Slider Veriler:', this.sliderData);
        console.log('Diger Veriler:', this.listData);

      },
      (error) => {
        console.error('Veri çekme hatası:', error);
      }
    );
  }
}
