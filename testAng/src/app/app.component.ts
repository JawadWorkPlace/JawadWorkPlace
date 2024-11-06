// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss'
// })
// export class AppComponent {
//   title = 'testAng';
// }

// Collapsing/ Expanding Code example
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   // styleUrls: ['./app.component.css'],
// })
// export class AppComponent {
//   // This boolean controls the collapsed/expanded state
//   isCollapsed: boolean = true;

//   // Function to toggle the state
//   toggleContent() {
//     this.isCollapsed = !this.isCollapsed;
//   }
// }

//Pagination Code example

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Full list of data (e.g., 50 items)
  items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

  // Number of items per page
  pageSize = 5;

  // Current page
  currentPage = 1;

  // Get items for the current page
  get paginatedItems() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.items.slice(startIndex, startIndex + this.pageSize);
  }

  // Move to the previous page
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // Move to the next page
  nextPage() {
    const totalPages = Math.ceil(this.items.length / this.pageSize);
    if (this.currentPage < totalPages) {
      this.currentPage++;
    }
  }
}
