import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import Aos from 'aos';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface Product {
  title: string;
  description: string;
  image: string;
  link: string;
  aosDelay: number;
}

interface Dealership {
  image: string;
  name: string;
  alt: string;
}

interface Feature {
  title: string;
  description: string;
  icon: string;
  aosDelay: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  
  currentSlide = 0;
  slides = [0, 1, 2, 3, 4]; // Array for slide indicators
  showDesignContent = false;
  
  constructor(
    private sanitizer: DomSanitizer,
    private meta: Meta,
    private title: Title
  ) {
    this.setupSEO();
    this.setupStructuredData();
  }

  products: Product[] = [
    {
      title: 'PP Corrugated Sheets',
      description: 'High-quality PP corrugated sheets for packaging, signage, and industrial applications.',
      image: 'assets/home/automobile.jpg',
      link: '/products/pp-corrugated-sheets',
      aosDelay: 200
    },
    {
      title: 'PP Corrugated Boxes',
      description: 'Durable corrugated plastic boxes perfect for storage, shipping, and packaging needs.',
      image: 'assets/home/automobile.jpg',
      link: '/products/pp-corrugated-boxes',
      aosDelay: 200
    },
    {
      title: 'PP Sunpack Sheets',
      description: 'Versatile PP sunpack sheets with smooth surface for printing, packaging, and display applications.',
      image: 'assets/home/automobile.jpg',
      link: '/products/pp-sunpack-sheets',
      aosDelay: 200
    },
    {
      title: 'PP Flute Boards',
      description: 'Lightweight yet strong PP flute boards for protection, display, and construction needs.',
      image: 'assets/home/pp-flute-boards.jpeg',
      link: '/products/automobile.jpg',
      aosDelay: 200
    },
  ];
  yearsOfExperience: number = new Date().getFullYear() - 2020;
  experienceText: string = this.yearsOfExperience + '+';
  features: Feature[] = [
    {
      title: 'Lightweight & Durable',
      description: 'Our PP corrugated products offer excellent strength-to-weight ratio for easy handling',
      icon: 'fas fa-feather-alt',
      aosDelay: 100
    },
    {
      title: 'Water & Chemical Resistant',
      description: 'Resistant to water, chemicals, and corrosion for versatile applications',
      icon: 'fas fa-tint-slash',
      aosDelay: 200
    },
    {
      title: 'Eco-Friendly Materials',
      description: 'Sustainable and recyclable materials that reduce environmental impact',
      icon: 'fas fa-leaf',
      aosDelay: 300
    },
    {
      title: 'Customizable Solutions',
      description: 'Tailor-made products according to your specific requirements',
      icon: 'fas fa-tools',
      aosDelay: 400
    },
    {
      title: 'Cost-Effective',
      description: 'Affordable packaging solutions without compromising on quality',
      icon: 'fas fa-rupee-sign',
      aosDelay: 500
    },
    {
      title: 'Wide Range of Applications',
      description: 'Versatile products suitable for various industries and applications',
      icon: 'fas fa-industry',
      aosDelay: 600
    },
    {
      title: 'High Impact Resistance',
      description: 'Superior strength to protect contents during storage and transit',
      icon: 'fas fa-shield-alt',
      aosDelay: 700
    },
    {
      title: 'Printable Surface',
      description: 'Excellent printing capabilities for branding and promotional needs',
      icon: 'fas fa-print',
      aosDelay: 800
    },
    {
      title: 'Reusable & Recyclable',
      description: 'Products that can be reused multiple times and eventually recycled',
      icon: 'fas fa-recycle',
      aosDelay: 900
    }
  ];

  private setupSEO() {
    const description = `Ananta Poly Plast - No.1 PP Corrugated Sheets & Box Manufacturer in Gujarat with ${this.yearsOfExperience}+ years of excellence. Suppliers of Corrugated Plastic Boxes, PP Sunpack Sheets, P Flute Board, PP Hollow Sheets, and more.`;

    this.title.setTitle('Ananta Poly Plast - Premium PP Corrugated Sheets & Box Manufacturer | Rajkot, Gujarat');
    
    // Meta tags for SEO
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'keywords', content: 'PP corrugated sheets, corrugated plastic box, PP sunpack sheet, P flute board, PP hollow sheet, PP floor protection sheet, PP flute board, plastic card board, correx sheet printing, coro sheet board, plastic box, corrugated plastic exporters, corrugated plastic sheet, corrugated box, plastic corrugated sheet, Gujarat, Rajkot' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ name: 'author', content: 'Ananta Poly Plast' });

    // Open Graph tags
    this.meta.updateTag({ property: 'og:title', content: 'Ananta Poly Plast - Premium PP Corrugated Sheets & Box Manufacturer' });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:image', content: 'assets/home/company.jpg' });
    this.meta.updateTag({ property: 'og:url', content: 'https://anantapolyplast.com' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });

    // Twitter Card tags
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Ananta Poly Plast - Premium PP Corrugated Sheets & Box Manufacturer' });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: 'assets/home/company.jpg' });

    // Location tags
    this.meta.updateTag({ name: 'geo.region', content: 'IN-GJ' });
    this.meta.updateTag({ name: 'geo.placename', content: 'Rajkot' });
  }

  private setupStructuredData() {
    const structuredData = {
      '@context': 'http://schema.org',
      '@type': 'Organization',
      name: 'Ananta Poly Plast',
      description: 'Premium PP Corrugated Sheets & Box Manufacturer',
      url: 'https://anantapolyplast.com',
      logo: 'assets/logo.png',
      foundingDate: '2020',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Rajkot',
        addressRegion: 'Gujarat',
        addressCountry: 'IN'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-1234567890',
        contactType: 'sales',
        availableLanguage: ['English', 'Hindi', 'Gujarati']
      },
      // Add dynamic product data
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'PP Corrugated Products',
        itemListElement: this.products.map(product => ({
          '@type': 'Offer',
          name: product.title,
          description: product.description,
          image: product.image
        }))
      }
    };

    // Create script element for structured data
    if (isPlatformBrowser(this.platformId)) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      Aos.init({
        duration: 1000,
        once: true
      });
      this.startSlideShow();
    }
  }

  prevSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
  }

  nextSlide() {
    this.currentSlide = this.currentSlide === this.slides.length - 1 ? 0 : this.currentSlide + 1;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  private startSlideShow() {
    setInterval(() => {
      this.nextSlide();
    }, 5000); 
  }
  
  getSafeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  toggleDesignContent() {
    this.showDesignContent = !this.showDesignContent;
  }
}
