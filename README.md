# Birthday Website 🎂

A beautiful birthday countdown website that locks access until April 3, 2026!

## Features
- ⏰ Live countdown timer showing days, hours, minutes, and seconds
- 🔒 Access blocked until the birthday date
- 🎉 Beautiful birthday message reveals on April 3rd
- 🎨 Animated balloons and confetti effects
- 📱 Fully responsive design

## How to Deploy to GitHub Pages

### Step 1: Create a GitHub Repository
1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository (e.g., "birthday-surprise")
4. Choose "Public" (required for free GitHub Pages)
5. Click "Create repository"

### Step 2: Upload Your Files
There are two ways to upload:

#### Option A: Using GitHub Website
1. On your repository page, click "uploading an existing file"
2. Drag and drop these files:
   - index.html
   - style.css
   - script.js
3. Click "Commit changes"

#### Option B: Using Git (Command Line)
```bash
cd birthday-website
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Click "Pages" in the left sidebar
4. Under "Source", select "main" branch
5. Click "Save"
6. Wait a few minutes for deployment

### Step 4: Get Your Website URL
Your website will be available at:
```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

## Customization

### Change the Birthday Date
Edit `script.js` line 2:
```javascript
const birthdayDate = new Date('2026-04-03T00:00:00').getTime();
```

### Personalize the Message
Edit `index.html` to change the birthday messages, wishes, and signature.

### Adjust Colors
Edit `style.css` to change the gradient background or other styling.

## Important Notes
- The countdown uses the visitor's local time
- Access is automatically granted at midnight on April 3, 2026
- The website works offline after the first visit
- All animations are CSS-based for smooth performance

## Share the Link
Once deployed, simply share the GitHub Pages URL with your girlfriend! 💕

---
Made with ❤️
