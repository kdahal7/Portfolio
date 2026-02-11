# Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript.

## 🚀 Features

- **Responsive Design** - Works on all devices (mobile, tablet, desktop)
- **Smooth Animations** - Scroll animations and transitions
- **Modern UI** - Clean, professional design with gradient effects
- **Interactive Navigation** - Mobile-friendly hamburger menu
- **Contact Form** - Get in touch section
- **Projects Showcase** - Display your best work
- **Skills Section** - Highlight your technical abilities

## 📦 Technologies Used

- HTML5
- CSS3 (with CSS Variables and Flexbox/Grid)
- Vanilla JavaScript
- Font Awesome Icons

## 🛠️ Customization

Before deploying, update the following in the files:

### In `index.html`:
1. Replace "Your Name" with your actual name
2. Update social media links (GitHub, LinkedIn, Twitter)
3. Update email, phone, and location in the contact section
4. Add your actual projects with descriptions and links
5. Modify skills based on your expertise

### In `styles.css`:
- Adjust color scheme by modifying CSS variables in `:root`
- Customize fonts if needed

### In `script.js`:
- Update the typing effect subtitles to match your role
- Customize footer text

## 🌐 Deployment to Vercel

### Method 1: Vercel CLI (Recommended)

1. **Install Vercel CLI** (if not installed):
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   cd c:\Users\kaush\Downloads\PortFolio
   vercel
   ```

4. Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? **Select your account**
   - Link to existing project? **N**
   - Project name? **my-portfolio** (or any name you prefer)
   - In which directory is your code? **./** 
   - Want to override settings? **N**

5. **Production Deployment**:
   ```bash
   vercel --prod
   ```

### Method 2: GitHub + Vercel (Easiest)

1. **Create a GitHub repository**
2. **Push your code**:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

3. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Import your GitHub repository
   - Click "Deploy"

### Method 3: Drag & Drop

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Drag and drop your portfolio folder
4. Click "Deploy"

## 📝 Alternative Free Hosting Options

- **Netlify**: [netlify.com](https://netlify.com) - Drag & drop or Git integration
- **GitHub Pages**: Free with GitHub account
- **Cloudflare Pages**: Fast and free
- **Render**: Free static site hosting

## 🎨 Additional Customization Ideas

- Add a dark/light mode toggle
- Include a blog section
- Add testimonials
- Create a resume download button
- Integrate with a backend for form submissions (e.g., Formspree, EmailJS)

## 📱 Testing

Open `index.html` in your browser to preview locally before deploying.

## 📄 License

Free to use and modify for your personal portfolio.

---

**Good luck with your portfolio! 🎉**
