import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../api.service'
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule,RouterModule,HttpClientModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  allNewsData: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getNewsData().subscribe(
      (data) => {

        console.log('Gelen Veriler:', data.articles);

        this.allNewsData = data.articles;

      },
      (error) => {
        console.error('Veri çekme hatası:', error);
      }
    );
  }
}
