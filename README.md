# 🗺️ Hyrule Compendium Explorer  
A beautifully designed web application that lets you explore the vast world of Hyrule from *The Legend of Zelda: Breath of the Wild*. Built with modern Web Components and deployed using a production‑grade AWS pipeline, this app delivers fast, global performance with a clean, modern architecture.

---

# 🌐 Live Demo  
**CloudFront CDN:**  
https://d3r0rfgnrk6zku.cloudfront.net

---

# 🏷️ Badges  
These give your repo instant credibility:

![Static Badge](https://img.shields.io/badge/Web_Components-HTML%2FJS-blue)  
![Static Badge](https://img.shields.io/badge/Deployed_on-AWS_CloudFront-orange)  
![Static Badge](https://img.shields.io/badge/CI%2FCD-GitHub_Actions-brightgreen)  
![Static Badge](https://img.shields.io/badge/API-Hyrule_Compendium-purple)

---

# 🎮 Features

## 🏗️ Modern Architecture  
- Native Web Components (no frameworks)  
- Shadow DOM encapsulation  
- ES6 modules  
- Reusable UI components  

## 📱 User Experience  
- Responsive design  
- Interactive cards  
- Fast category switching  
- Live API data  

## 🔧 Technical Excellence  
- No build step  
- Clean, modular code  
- Async/await API integration  
- CSS custom properties  

---

# 🏛️ Deployment Architecture (AWS)

Your project now runs on a **secure, automated, globally distributed pipeline**:

```
┌──────────────────────────────┐
│          GitHub              │
│  (Push to main branch)       │
└──────────────┬───────────────┘
               │ GitHub Actions
               ▼
┌──────────────────────────────┐
│   AWS S3 (Private Bucket)    │
│  - Stores static files       │
│  - Block Public Access ON    │
│  - Access via OAC only       │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│     AWS CloudFront CDN       │
│  - Global edge caching       │
│  - HTTPS by default          │
│  - Default root: index.html  │
│  - Cache invalidation on CI  │
└──────────────┬───────────────┘
               │
               ▼
        🌍 End Users
```

### ✅ Key AWS Components  
- **S3 (private)** — stores your site securely  
- **CloudFront** — global CDN distribution  
- **OAC** — secure origin access  
- **GitHub Actions** — automated deployments  

---

# 🚀 CI/CD Pipeline (GitHub Actions)

Every push to `main` triggers:

1. Checkout code  
2. Configure AWS credentials  
3. Sync `public/` to S3  
4. Invalidate CloudFront cache  
5. Deploy globally  

Workflow file:  
```
.github/workflows/deploy-aws.yml
```

Secrets required:

| Secret | Purpose |
|--------|---------|
| `AWS_ACCESS_KEY_ID` | IAM access key |
| `AWS_SECRET_ACCESS_KEY` | IAM secret |
| `AWS_REGION` | e.g., `ca-central-1` |
| `S3_BUCKET` | e.g., `jean-static-site1` |
| `CLOUDFRONT_DISTRIBUTION_ID` | e.g., `E3SHAN1ERYUWEH` |

---

# 📁 Project Structure

```
hyrule-compendium/
├── public/
│   ├── index.html
│   ├── category.html
│   ├── css/
│   └── js/
│       ├── main.js
│       ├── category.js
│       └── components/
│           ├── app-header.js
│           ├── app-button.js
│           └── entry-card.js
├── .github/workflows/
│   ├── deploy.yml            # Netlify (legacy)
│   └── deploy-aws.yml        # AWS S3 + CloudFront CI/CD
└── README.md
```

---

# 🔗 API Integration

Uses the official Hyrule Compendium API:

```
https://botw-compendium.herokuapp.com/api/v3/compendium/category/{category}
```

Categories include:  
creatures, monsters, materials, equipment, treasure

---

# 🎯 Learning Outcomes

### ✅ Frontend  
- Web Components  
- Shadow DOM  
- State management  
- API communication  

### ✅ Modern Web Standards  
- ES6 modules  
- CSS custom properties  
- Semantic HTML  

### ✅ DevOps & Cloud  
- AWS S3 hosting  
- CloudFront CDN  
- OAC permissions  
- CI/CD pipelines  
- Cache invalidation  

---

# 📖 How to Use

1. Visit the live demo  
2. Choose a category  
3. Browse entries  
4. Expand cards for details  
5. Explore all categories  

---

# 🤝 Collaborators  
To add collaborators:

1. Go to your repo  
2. Settings → Collaborators & Teams  
3. Add GitHub username  
4. They accept the invite  

---

# 🧭 Roadmap (What’s Next)

✅ Add API Gateway behind CloudFront  
✅ Add custom domain + HTTPS  
⬜ Add CloudFront Functions for redirects  
⬜ Add loading skeletons  
⬜ Add search functionality  
⬜ Add favorites/bookmarks  
⬜ Add dark mode  

---

# 📄 License  
MIT License — free to use, modify, and learn from.

---

# 👨‍💻 About the Developer  
**Jean Amenyaglo**  
Frontend Developer specializing in modern web technologies.  
Passionate about clean code, user experience, and interactive applications.

GitHub: **@JeanAmenyaglo**
