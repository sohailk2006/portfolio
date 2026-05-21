# Mohammed Sohail Khan - Portfolio

A stunning, fully responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS featuring modern UI design and dark/light theme toggle. Showcasing AI & ML engineering projects, skills, and achievements.

## ✨ Features

- 🎨 **Modern Professional UI** - Clean and elegant design
- 🌓 **Dark/Light Theme Toggle** - Seamless theme switching with persistent preference
- 📱 **Fully Responsive** - Perfect display on all devices
- ⚡ **Next.js 14** - Latest Next.js with App Router
- 🎯 **TypeScript** - Type-safe code
- 💨 **Tailwind CSS** - Utility-first styling
- 🔄 **Smooth Scrolling** - Elegant navigation between sections
- 🎭 **React Icons** - Beautiful icon library
- 📦 **Modular Components** - Reusable and maintainable code
- 🔤 **Google Fonts** - Inter font for clean typography

## 📋 Sections

1. **Home** - Hero section with introduction and call-to-action
2. **About** - Personal story and background at Vardhaman College of Engineering
3. **Skills** - AI/ML, Data Science, and technical skills with progress bars
4. **Coding Profiles** - Verified profiles on LeetCode, HackerRank, GeeksforGeeks, and GitHub
5. **Projects** - Project showcase (currently showing coming soon message)
6. **Achievements** - 24-hour hackathon participation and competitive programming achievements
7. **Certifications** - Real certifications: Ethical Hacking (NPTEL), Advanced Data Structures, AI for Beginners (HP), AI Tools Workshop, HTML & CSS
8. **Contact** - Contact form with verified email and phone number

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 18 or higher)
- npm (comes with Node.js)

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🛠️ Build for Production

To create an optimized production build:

```bash
npm run build
```

To run the production build locally:

```bash
npm start
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with font and theme provider
│   │   ├── page.tsx            # Main page with all sections
│   │   └── globals.css         # Global styles & Tailwind imports
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation bar with mobile menu
│   │   ├── Hero.tsx            # Hero section
│   │   ├── About.tsx           # About section
│   │   ├── Skills.tsx          # AI/ML Skills showcase
│   │   ├── Projects.tsx        # AI/ML Projects portfolio
│   │   ├── Achievements.tsx    # Achievements section
│   │   ├── Certifications.tsx  # Certifications section
│   │   ├── Interests.tsx       # Professional & personal interests
│   │   ├── Contact.tsx         # Contact form
│   │   ├── Footer.tsx          # Footer component
│   │   └── ThemeToggle.tsx     # Theme switcher button
│   └── providers/
│       └── ThemeProvider.tsx   # Theme context provider
├── public/                     # Static assets
├── .github/
│   └── copilot-instructions.md # GitHub Copilot instructions
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
├── next.config.mjs             # Next.js configuration
└── package.json                # Dependencies and scripts
```

## 🎨 Customization

### Current Status

✅ **All Real Information Updated** - Portfolio now contains only verified, real data:

- **Contact**: Email, phone, and location verified
- **Social Links**: GitHub and LinkedIn profiles linked
- **Coding Profiles**: LeetCode, HackerRank, GeeksforGeeks verified accounts
- **Certifications**: 5 real certifications with verified dates
- **Achievements**: Real hackathon participation and coding platform activity
- **Projects**: Ready for your projects (currently shows "Coming Soon")

### Adding Your Projects

When you're ready to showcase your projects, edit [src/components/Projects.tsx](src/components/Projects.tsx):

1. Replace the "Projects Coming Soon" section with your actual projects
2. Add project titles, descriptions, technologies used
3. Link to your GitHub repositories
4. Add live demo links if available

8. **Contact Section** ([src/components/Contact.tsx](src/components/Contact.tsx)):
   - Update email: mohammed.sohail@example.com (replace with your email)
   - Update phone number
   - Update location

9. **Metadata** ([src/app/layout.tsx](src/app/layout.tsx)):
   - Already updated with your name and details

6. **Metadata** ([src/app/layout.tsx](src/app/layout.tsx)):
   - Update page title and description

### Theme Colors

Customize colors in [tailwind.config.ts](tailwind.config.ts) to match your brand.

### Fonts

Change the font by updating the import in [src/app/layout.tsx](src/app/layout.tsx). The project uses Inter by default, but you can easily switch to Poppins or any other Google Font:

```typescript
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
```

## 🌐 Deployment

### Vercel (Easiest)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click!

### Other Platforms

This Next.js app can be deployed to any platform that supports Node.js:
- Netlify
- AWS Amplify
- Digital Ocean
- Railway
- Render

## 📝 Environment Variables

If you add form submission functionality (e.g., EmailJS, SendGrid), create a `.env.local` file:

```env
NEXT_PUBLIC_API_KEY=your_api_key_here
```

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

Made with ❤️ and Next.js
