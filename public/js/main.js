// main.js
// Import web components
import './components/app-header.js';
import './components/app-button.js';

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Categories as specified in the assignment
  const categories = ['creatures', 'monsters', 'materials', 'equipment', 'treasure'];
  const categoryDisplayNames = {
    creatures: 'Creatures',
    monsters: 'Monsters',
    materials: 'Materials',
    equipment: 'Equipment',
    treasure: 'Treasure'
  };
  
  const container = document.getElementById('category-buttons');
  
  // Create a button for each category
  categories.forEach(category => {
    // Create app-button element
    const button = document.createElement('app-button');
    
    // Set href attribute (this makes it render as a link)
    button.setAttribute('href', `category.html?category=${category}`);
    
    // Create label for the button
    const label = document.createElement('span');
    label.setAttribute('slot', 'label');
    label.textContent = categoryDisplayNames[category] || category;
    
    // Append label to button
    button.appendChild(label);
    
    // Add button to container
    container.appendChild(button);
  });
});