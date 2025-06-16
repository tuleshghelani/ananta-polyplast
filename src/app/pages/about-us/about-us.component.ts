import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import Aos from 'aos';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent implements OnInit {
  yearsOfExperience: number = new Date().getFullYear() - 2020;

  private meta = inject(Meta);
  private title = inject(Title);
  private platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      Aos.init({
        duration: 1000,
        once: true
      });
    }
    this.title.setTitle('About Us | Ananta Poly Plast - Premium PP Corrugated Manufacturer');
    this.meta.updateTag({
      name: 'description',
      content: 'Learn about Ananta Poly Plast, a leading manufacturer of PP corrugated sheets and boxes in Gujarat. Discover our values, experience, and commitment to quality and sustainability.'
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'About Ananta Poly Plast, PP corrugated manufacturer, company profile, plastic packaging, Gujarat, Rajkot, sustainable packaging'
    });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ name: 'author', content: 'Ananta Poly Plast' });
    this.meta.updateTag({ property: 'og:title', content: 'About Us | Ananta Poly Plast' });
    this.meta.updateTag({ property: 'og:description', content: 'Learn about Ananta Poly Plast, a leading manufacturer of PP corrugated sheets and boxes in Gujarat.' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:image', content: 'assets/home/automobile.jpg' });
    this.meta.updateTag({ property: 'og:url', content: 'https://anantapolyplast.com/about-us' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: 'About Us | Ananta Poly Plast' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Learn about Ananta Poly Plast, a leading manufacturer of PP corrugated sheets and boxes in Gujarat.' });
    this.meta.updateTag({ name: 'twitter:image', content: 'assets/home/automobile.jpg' });
  }
}
