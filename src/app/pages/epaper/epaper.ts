import { Component } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-epaper',
  standalone: true,
  imports: [PdfViewerModule],
  templateUrl: './epaper.html',
  styleUrls: ['./epaper.scss'],
})
export class Epaper {
  // selectedPdf: SafeResourceUrl;
  selectedPdf = 'https://drive.google.com/file/d/1_lFCS0E8tISpHQW64UNLkFA-4L2cMhBI/view';
  cityList = [
    {
      name: 'Mumbai',
      img: 'https://cdn.britannica.com/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg',
      pdf: '/assets/pdf/mumbai.pdf',
    },
    {
      name: 'Pune',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFPUBFBMKFKujvGHrlAQMJScOx519Wf5VySg&s',
      pdf: '/assets/pdf/Delhi_TOI_29-07.pdf',
    },
    {
      name: 'Nashik',
      img: 'https://i.ytimg.com/vi/XfoW4VGBLf8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDtd5Co_4u0LF7iCJUl_S5cWmDKNA',
      pdf: '/assets/pdf/nashik.pdf',
    },
  ];

  constructor(private sanitizer: DomSanitizer) {
    // this.selectedPdf = this.sanitizeUrl('/assets/pdf/Delhi_TOI_29-07.pdf');
  }

  selectPdf(pdfUrl: string) {
    // this.selectedPdf = this.sanitizeUrl(pdfUrl);
  }

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
