# ✏️ Customization Checklist

Use this as your quick reference for personalizing your portfolio.

## 🔴 CRITICAL - Must Change

### Personal Information

- [ ] **Your Name** (3 places)
  - `components/layout/navigation.tsx` - Line 26: "YourName"
  - `app/layout.tsx` - Line 12: "Your Name - UX Frontend Developer"
  - `components/layout/footer.tsx` - Line 68: "Your Name"

- [ ] **Email Addresses**
  - `components/sections/contact.tsx` - Line 98: "your.email@example.com"
  - `components/layout/footer.tsx` - Line 68: Copyright text

- [ ] **Social Media Links** (GitHub, LinkedIn, Twitter)
  - `components/layout/footer.tsx` - Lines 30-57
  - `components/sections/contact.tsx` - Lines 98-120

## 🟡 IMPORTANT - Should Change

### Hero Section (`components/sections/hero.tsx`)

- [ ] Update statistics (lines 44-68):
  ```tsx
  5+ Years Experience    → Your years
  20+ Projects          → Your project count
  10+ Design Systems    → Your design system count
  ```

### About Section (`components/sections/about.tsx`)

- [ ] Update intro text (lines 50-56)
- [ ] Modify skills list (lines 7-36):
  - Frontend Development
  - Design Systems
  - Tools & Workflow
  - UX Skills

### Projects (`components/sections/work.tsx`)

- [ ] Replace all 4 placeholder projects (lines 7-37)
  - Update titles
  - Update descriptions
  - Update tags
  - Update links
  - Add real images (or keep emojis temporarily)

## 🟢 OPTIONAL - Nice to Have

### Colors & Branding

- [ ] Customize color scheme in `tailwind.config.js`:
  ```javascript
  primary: { 500: '#YOUR_COLOR' }
  accent: { 500: '#YOUR_COLOR' }
  ```

### Case Studies

- [ ] Write your own case studies in `app/case-studies/[slug]/page.mdx`
- [ ] Update case studies list in `app/case-studies/page.tsx`

### Additional Features

- [ ] Add profile photo to hero
- [ ] Set up actual contact form backend
- [ ] Add Google Analytics
- [ ] Create additional pages (blog, resume, etc.)
- [ ] Add project screenshots/images

## 📂 Files to Edit - Quick Reference

```
Priority 1 (Must Do):
✓ components/layout/navigation.tsx    → Your name
✓ app/layout.tsx                      → Site title & description
✓ components/layout/footer.tsx        → Footer info & socials
✓ components/sections/contact.tsx     → Email & socials

Priority 2 (Should Do):
✓ components/sections/hero.tsx        → Hero stats & intro
✓ components/sections/about.tsx       → About text & skills
✓ components/sections/work.tsx        → Your projects

Priority 3 (Nice to Have):
✓ tailwind.config.js                  → Colors
✓ app/case-studies/                   → Your case studies
```

## 🎨 Quick Customization Examples

### Change Primary Color
```javascript
// tailwind.config.js
primary: {
  500: '#0ea5e9', // Change this hex code
}
```

### Update Hero Stats
```tsx
// components/sections/hero.tsx (lines 44-68)
<span className="text-3xl...">5+</span>
<span>Years Experience</span>
// Change to your actual numbers
```

### Add Your Project
```typescript
// components/sections/work.tsx
const projects = [
  {
    title: 'Your Project Name',
    description: 'What you built and why',
    image: '/projects/your-project.jpg',
    tags: ['React', 'TypeScript', 'etc'],
    link: '/case-studies/your-project',
  },
  // ...
];
```

## ✅ Completion Tracking

### Day 1 Goals
- [ ] Update all personal information
- [ ] Fix all contact details
- [ ] Customize hero section
- [ ] Update about section

### Week 1 Goals
- [ ] Add real projects
- [ ] Write 1-2 case studies
- [ ] Add project images
- [ ] Test on all devices

### Before Launch
- [ ] Proofread all text
- [ ] Test all links
- [ ] Check mobile responsiveness
- [ ] Run accessibility audit
- [ ] Get feedback from friends
- [ ] Deploy to Vercel

## 🚨 Common Mistakes to Avoid

❌ Leaving placeholder text ("YourName", "your.email")
❌ Broken social media links
❌ Using fake project data
❌ Not testing on mobile
❌ Forgetting to update meta tags for SEO

✅ Use real information
✅ Test everything thoroughly  
✅ Show actual work
✅ Keep it updated
✅ Make it personal

## 🎯 Quick Test Before Going Live

Run through this checklist:

1. [ ] Navigate to every page
2. [ ] Click every link (should work or be removed)
3. [ ] Test dark mode toggle
4. [ ] Test mobile menu
5. [ ] Try contact form
6. [ ] Check on mobile device
7. [ ] Read all text for typos
8. [ ] Verify social links work
9. [ ] Test case study pages
10. [ ] Check page load speed

## 💡 Pro Tips

1. **Start Small**: Update personal info first, then content
2. **One Section at a Time**: Don't try to do everything at once
3. **Test Often**: Preview changes in browser
4. **Keep Backups**: Commit to Git frequently
5. **Get Feedback**: Show to friends/colleagues before launch

## 🎉 When You're Done

- [ ] Push to GitHub
- [ ] Deploy to Vercel
- [ ] Share on LinkedIn
- [ ] Add to resume
- [ ] Update job applications

---

**Remember**: This portfolio showcases YOUR skills. Make it personal, make it real, and make it awesome! 🚀

---

## Need Help?

- **Can't find a file?** Use VS Code's search (Cmd/Ctrl + P)
- **Broke something?** Check git history and revert
- **Stuck on styling?** Check Tailwind docs or DESIGN_SYSTEM.md
- **MDX not working?** Check syntax in mdx-components.tsx

You've got this! 💪
