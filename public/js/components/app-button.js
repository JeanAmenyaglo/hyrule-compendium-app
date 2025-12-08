class AppButton extends HTMLElement {
  static get observedAttributes() {
    return ['href'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'href') {
      this.render();
    }
  }

  render() {
    const href = this.getAttribute('href');
    const isLink = href !== null;
    
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          --app-button-bg: #eee;
          --app-button-color: #000;
          --app-button-bg-hover: #333;
          --app-button-color-hover: #fff;
        }
        
        a, button {
          background-color: var(--app-button-bg);
          color: var(--app-button-color);
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
        }
        
        a:hover, button:hover {
          background-color: var(--app-button-bg-hover);
          color: var(--app-button-color-hover);
        }
      </style>
      ${isLink ? 
        `<a href="${href}"><slot name="label">Click Me</slot></a>` : 
        `<button><slot name="label">Click Me</slot></button>`
      }
    `;
  }
}

customElements.define('app-button', AppButton);