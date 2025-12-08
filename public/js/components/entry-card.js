class EntryCard extends HTMLElement {
  #expanded = false;
  #data = null;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.handleToggle = this.handleToggle.bind(this); // Bind the method
  }

  connectedCallback() {
    if (this.#data) {
      this.renderWithData();
    } else {
      this.render();
    }
    this.setupEventListeners();
  }

  // Add this method to handle toggle
  handleToggle() {
    this.expanded = !this.expanded;
  }

  get expanded() {
    return this.#expanded;
  }

  set expanded(value) {
    this.#expanded = Boolean(value);
    this.updateDetailsVisibility();
    this.updateToggleButton();
  }

  get data() {
    return this.#data;
  }

  set data(value) {
    this.#data = value;
    this.renderWithData();
    // Don't call setupEventListeners here - it's called in connectedCallback
  }

  renderWithData() {
    if (!this.#data) return;
    
    // Prepare the data for display
    const name = this.#data.name || '';
    const category = this.#data.category || '';
    const description = this.#data.description || '';
    const locations = Array.isArray(this.#data.common_locations) 
      ? this.#data.common_locations.join(', ') 
      : (this.#data.common_locations || 'Unknown');
    const drops = Array.isArray(this.#data.drops) 
      ? this.#data.drops.join(', ') 
      : (this.#data.drops || 'None');
    const imageSrc = this.#data.image || '';
    const imageAlt = name || 'Entry image';

    this.shadowRoot.innerHTML = `
      <style>
        .card {
          border: 1px solid #ccc;
          padding: 1rem;
          margin: 0.5rem 0;
          border-radius: 4px;
          background-color: #fff;
        }
        
        .card img {
          max-width: 200px;
          display: block;
          margin-bottom: 0.5rem;
        }
        
        .extra {
          display: block;
        }
        
        .extra.extra-hidden {
          display: none;
        }
        
        button {
          margin-top: 0.5rem;
        }
      </style>
      <div class="card">
        <h3>${name}</h3>
        ${imageSrc ? `<img src="${imageSrc}" alt="${imageAlt}">` : ''}
        <p><strong>Category:</strong> ${category}</p>
        <app-button id="toggle-btn">
          <span slot="label">${this.#expanded ? 'Hide Details' : 'Show Details'}</span>
        </app-button>
        <div id="details" class="extra ${this.#expanded ? '' : 'extra-hidden'}">
          <p><strong>Description:</strong> ${description}</p>
          <p><strong>Common Locations:</strong> ${locations}</p>
          <p><strong>Drops:</strong> ${drops}</p>
        </div>
      </div>
    `;

    // Setup listeners immediately after rendering
    this.setupEventListeners();
  }

  setupEventListeners() {
    // Get the toggle button from shadow DOM
    const toggleBtn = this.shadowRoot.querySelector('#toggle-btn');
    
    if (toggleBtn) {
      // Remove any existing listeners first
      toggleBtn.removeEventListener('click', this.handleToggle);
      // Add the new listener
      toggleBtn.addEventListener('click', this.handleToggle);
    }
  }

  updateDetailsVisibility() {
    const detailsEl = this.shadowRoot.querySelector('#details');
    if (detailsEl) {
      if (this.#expanded) {
        detailsEl.classList.remove('extra-hidden');
      } else {
        detailsEl.classList.add('extra-hidden');
      }
    }
  }

  updateToggleButton() {
    const toggleBtn = this.shadowRoot.querySelector('#toggle-btn');
    if (toggleBtn) {
      const labelSlot = toggleBtn.querySelector('[slot="label"]');
      if (labelSlot) {
        labelSlot.textContent = this.#expanded ? 'Hide Details' : 'Show Details';
      }
    }
  }

  // Clean up when element is removed
  disconnectedCallback() {
    const toggleBtn = this.shadowRoot.querySelector('#toggle-btn');
    if (toggleBtn) {
      toggleBtn.removeEventListener('click', this.handleToggle);
    }
  }
}

customElements.define('entry-card', EntryCard);