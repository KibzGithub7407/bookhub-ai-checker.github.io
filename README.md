# 📘 BookHub AI Checker

A simple assignment checker for lecturers, hosted on **GitHub Pages**.  
Checks whether student work is **AI-generated** and/or **plagiarized**.

---

## 🚀 Features
- Paste student assignments into a text box
- AI Detection (e.g., GPTZero API)
- Plagiarism Check (via free plagiarism APIs)
- Fully static site → hosted on GitHub Pages (no server needed)

---

## 📂 File Structure

bookhub-ai-checker/ ├── index.html     # UI ├── style.css      # Styles ├── script.js      # API logic └── README.md      # Docs

---

## 🔑 Setup
1. Get free API keys:
   - [GPTZero API](https://gptzero.me/)
   - [Plagiarism Detector API](https://plagiarismdetector.net/)
2. Open `script.js` and replace `YOUR_API_KEY_HERE` with your key.
3. Push repo to GitHub under your account:

git clone https://github.com/KibzGithub7407/bookhub-ai-checker.git cd bookhub-ai-checker git add . git commit -m "Initial commit" git push origin main

4. Enable **GitHub Pages** in repo settings → Pages → Deploy from `main` branch.

---

## 🌐 Live Demo
Once published, your site will be available at:  
`https://kibzgithub7407.github.io/bookhub-ai-checker/`
