// Add your JavaScript code to create the flip book here

// Get the flipbook container
const flipbookContainer = document.querySelector('.flipbook');

// Get all the pages
const pages = document.querySelectorAll('.page');

// Set the current page index
let currentPageIndex = 0;

// Function to show the current page and hide others
function showCurrentPage() {
  pages.forEach((page, index) => {
    if (index === currentPageIndex) {
      page.style.display = 'block';
    } else {
      page.style.display = 'none';
    }
  });
}

// Function to flip to the next page
function flipNextPage() {
  if (currentPageIndex < pages.length - 1) {
    currentPageIndex++;
    showCurrentPage();
  }
}

// Function to flip to the previous page
function flipPrevPage() {
  if (currentPageIndex > 0) {
    currentPageIndex--;
    showCurrentPage();
  }
}

// Add event listeners for flipping the pages
flipbookContainer.addEventListener('click', flipNextPage);
flipbookContainer.addEventListener('contextmenu', (event) => {
  event.preventDefault(); // Prevent default context menu
  flipPrevPage();
});

// Show the initial page
showCurrentPage();
