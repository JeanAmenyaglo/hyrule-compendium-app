// Import web components
import './components/app-header.js';
import './components/app-button.js';
import './components/entry-card.js';

// Main function to initialize the category page
document.addEventListener('DOMContentLoaded', async () => {
  // Get category from URL query string
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get('category');
  
  // Since your template has h2 (not h1#category-title), we use querySelector
  const categoryTitle = document.querySelector('h2');
  const entriesList = document.getElementById('entries-list');
  
  // If no category specified, show error
  if (!category) {
    if (categoryTitle) {
      categoryTitle.textContent = 'Category Not Found';
    }
    entriesList.innerHTML = '<p>Please select a category from the home page.</p>';
    return;
  }
  
  // Update page title with category name
  if (categoryTitle) {
    const displayName = category.charAt(0).toUpperCase() + category.slice(1);
    categoryTitle.textContent = `${displayName} Entries`;
  }
  
  // Show loading state
  entriesList.innerHTML = '<p>Loading entries...</p>';
  
  try {
    // Fetch data from Hyrule Compendium API
    const response = await fetch(`https://botw-compendium.herokuapp.com/api/v3/compendium/category/${category}`);
    
    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Clear loading message
    entriesList.innerHTML = '';
    
    // Check if we have data
    if (data.data && Array.isArray(data.data) && data.data.length > 0) {
      // Render each entry as an entry-card
      data.data.forEach(entry => {
        const card = document.createElement('entry-card');
        card.data = entry;
        entriesList.appendChild(card);
      });
    } else {
      entriesList.innerHTML = '<p>No entries found for this category.</p>';
    }
    
  } catch (error) {
    console.error('Error fetching data:', error);
    entriesList.innerHTML = '<p>Error loading entries. Please try again later.</p>';
  }
});