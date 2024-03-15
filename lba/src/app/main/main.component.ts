import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  @ViewChild('buyers-section') buyersSection!: ElementRef;
  @ViewChild('sellers-section') sellersSection!: ElementRef;

  constructor(private renderer: Renderer2) {}

  scrollToBuyers(): void {
    this.scrollToElement(this.buyersSection.nativeElement);
  }

  scrollToSellers(): void {
    this.scrollToElement(this.sellersSection.nativeElement);
  }

  private scrollToElement(element: any): void {
    element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }

}
