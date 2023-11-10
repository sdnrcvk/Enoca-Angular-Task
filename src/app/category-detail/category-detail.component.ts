import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ApiService } from '../api.service'
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-category-detail',
  standalone: true,
  imports: [CommonModule,RouterModule,HttpClientModule],
  templateUrl: './category-detail.component.html',
  styleUrl: './category-detail.component.css'
})
export class CategoryDetailComponent implements OnInit {
  categoryName: string = ''; 
  categoryData: any[] = [];

  constructor(private route: ActivatedRoute,private apiService: ApiService) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.categoryName = params.get('name') || ''; 

      // API'ye parametre olarak categoryName'i gönder
      this.apiService.getNewsDataByCategory(this.categoryName).subscribe(
        (data) => {

          console.log('API\'den gelen veri:', data.articles);
          this.categoryData = data.articles; 
        },
        (error) => {
          console.error('Veri çekme hatası', error);
        }
      );
      });
  }
}
