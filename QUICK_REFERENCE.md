# 🎯 QUICK REFERENCE CARD

## 🌐 Your Portfolio URLs

**Local Development:** http://localhost:3000

**Pages:**
- Homepage: `/`
- Case Studies: `/case-studies`
- Dance App Case Study: `/case-studies/when-does-my-kid-dance`

**Live Dance App:** https://whendoesmykiddance.shelbyramseth.com/

---

## 📝 Files to Edit for Personalization

```
Priority 1 (Required):
✏️ components/layout/navigation.tsx        Line 26: "YourName"
✏️ components/sections/contact.tsx         Line 98: Email
✏️ components/layout/footer.tsx            Lines 30-57: Social links

Priority 2 (Important):
📝 components/sections/hero.tsx            Stats & intro
📝 components/sections/about.tsx           Skills & bio
📝 app/layout.tsx                          Page title

Priority 3 (Nice to Have):
🎨 app/globals.css                         Colors (@theme)
📚 app/case-studies/                       More case studies
```

---

## 🚀 Common Commands

```bash
# Start dev server
cd portfolio && npm run dev

# Build for production
npm run build

# Check for errors
npm run lint

# Deploy to Vercel
git push
# Then import repo on vercel.com
```

---

## 📚 Documentation Quick Links

**Start Here:**
- `START_HERE.md` - Overview
- `CUSTOMIZATION_CHECKLIST.md` - What to change

**Project Specific:**
- `CASE_STUDY_ADDED.md` - New case study details
- `ADDING_SCREENSHOTS.md` - How to add images

**Technical:**
- `DESIGN_SYSTEM.md` - Components
- `FIXED_AND_WORKING.md` - What was fixed

---

## ✅ Current Status

**Working:**
- ✅ Full portfolio site
- ✅ Dark mode
- ✅ Responsive design
- ✅ Real project featured
- ✅ Case study written

**Todo:**
- [ ] Personalize info
- [ ] Add screenshots
- [ ] Deploy live

---

## 🎯 Your Project: "When Does My Kid Dance?"

**What it is:**
Dance competition schedule app for parents

**Key features:**
- Search for dancers
- Color-coded tracking
- Mobile-first design

**Tech:**
Next.js, TypeScript, Tailwind CSS

**Impact:**
85% mobile usage, used by studios

**Case Study:**
2000+ words, code examples, real metrics

---

## 💡 Quick Wins

### Add Screenshots
1. Save to `public/projects/dance-app/`
2. Update MDX file with `![alt](/path/to/image.png)`
3. Refresh page

### Change Colors
Edit `app/globals.css`:
```css
@theme {
  --color-primary-500: #YOUR_COLOR;
  --color-accent-500: #YOUR_COLOR;
}
```

### Add New Project
Edit `components/sections/work.tsx`:
```typescript
{
  title: 'Your Project',
  description: 'Description...',
  tags: ['Tag1', 'Tag2'],
  link: '/case-studies/your-project',
}
```

---

## 🆘 Having Issues?

**Site not loading?**
```bash
cd portfolio && npm run dev
```

**Styles broken?**
- Clear browser cache
- Restart dev server

**Need help?**
Check the documentation files listed above

---

## 📊 Portfolio Highlights

**Real Project:** Dance app (live & working)
**Case Study:** Complete with code examples
**Tech Stack:** Next.js 15, TypeScript, Tailwind v4
**Design:** Mobile-first, dark mode, responsive
**Performance:** Fast load times, SEO optimized

---

## 🎉 Next Steps

1. Read `CUSTOMIZATION_CHECKLIST.md`
2. Update your personal info
3. Add screenshots (see `ADDING_SCREENSHOTS.md`)
4. Deploy to Vercel
5. Start applying! 🚀

---

**Your portfolio is production-ready and showcases real skills!** 🌟
