import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'], // Keep this if you create the CSS file
})
export class AppComponent {
  items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);
  pageSize = 5;
  currentPage = 1;

  get paginatedItems() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.items.slice(startIndex, startIndex + this.pageSize);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    const totalPages = this.totalPages();
    if (this.currentPage < totalPages) {
      this.currentPage++;
    }
  }

  totalPages() {
    return Math.ceil(this.items.length / this.pageSize);
  }
}
