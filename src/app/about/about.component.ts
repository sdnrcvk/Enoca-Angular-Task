import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  name: string = "Sedanur Çevik";
  graduatedFrom: string = "bilgisayar mühendisliği";
  studiedAt: string = "Karabük Üniversitesi";
  learning: string = ".Net , Next.js, Laravel";
  collaborationInterest: string = "React Projects";
  seekingHelpWith: string = "Laravel and .Net";
  website: string = "www.sedanurcevik.com";
  mediumProfile: string = "https://medium.com/@sdnrcvk";
  githubProfile:string="https://github.com/sdnrcvk";
  linkedinProfile: string = "https://www.linkedin.com/in/sedanurcevik/";
  email: string = "sdnrcvk@gmail.com";
}
