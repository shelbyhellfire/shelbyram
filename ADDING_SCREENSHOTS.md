# Adding Screenshots to Your Case Study

## 📸 How to Add Images

### Step 1: Take Screenshots

Recommended screenshots for "When Does My Kid Dance?":

1. **Homepage** - Shows the two main options
2. **Search Results** - Color-coded dancer results
3. **Routine Details** - Expanded card view
4. **Schedule View** - Filtered schedule grid
5. **Mobile View** - How it looks on phone

### Step 2: Save Images

```bash
# Create images folder
cd portfolio/public
mkdir -p projects/dance-app

# Save your screenshots as:
# - homepage.png
# - search-results.png
# - routine-details.png
# - schedule-view.png
# - mobile-view.png
```

### Step 3: Update the MDX File

Edit: `app/case-studies/when-does-my-kid-dance/page.mdx`

Add images throughout the case study:

```mdx
## The Solution

### User-Centered Design

![Homepage of When Does My Kid Dance](/projects/dance-app/homepage.png)
*The homepage offers two clear paths: Search for specific dancers or browse the full schedule*

#### 1. **Search for Dancers**

![Color-coded search results](/projects/dance-app/search-results.png)
*Color-coded results make tracking multiple kids easy*

...

### 3. Mobile-First Design

![Mobile view comparison](/projects/dance-app/mobile-view.png)
*The mobile experience was prioritized from day one*
```

### Step 4: Update Project Card Image

In `components/sections/work.tsx`, update the image section:

```tsx
// Replace this:
<div className="relative h-48 mb-4 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 rounded-lg overflow-hidden">
  <div className="absolute inset-0 flex items-center justify-center text-6xl">
    📱
  </div>
</div>

// With this (when you have the image):
<div className="relative h-48 mb-4 rounded-lg overflow-hidden">
  <Image
    src="/projects/dance-app/homepage.png"
    alt="When Does My Kid Dance homepage"
    fill
    className="object-cover"
  />
</div>
```

## 🎨 Image Best Practices

### Sizes
- **Project card images:** 800x600px (4:3 ratio)
- **Case study screenshots:** 1200px wide max
- **Mobile screenshots:** 375px wide (actual phone size)

### Format
- Use **PNG** for UI screenshots (crisp text)
- Use **WebP** for smaller file sizes (Next.js can convert)
- Use **JPEG** for photos

### Optimization
Next.js automatically optimizes images, but you can also:

```bash
# Install image optimization tool
npm install -g sharp-cli

# Optimize images
sharp -i input.png -o output.png -q 80
```

## 📱 Taking Good Screenshots

### Desktop Screenshots

**Browser DevTools:**
1. Open Chrome DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Choose "Responsive" or specific device
4. Capture with browser extension

**Full Page Screenshots:**
- Chrome: DevTools → ⋮ → Capture full size screenshot
- Firefox: Shift+F2 → `screenshot --fullpage`

### Mobile Screenshots

**Real Device:**
1. Open site on phone
2. Take screenshot
3. AirDrop or email to computer

**Simulator:**
- **iOS:** Xcode Simulator
- **Android:** Android Studio Emulator

### Clean Screenshots

- ✅ Remove browser chrome if possible
- ✅ Use realistic data (not "Lorem Ipsum")
- ✅ Show the app in use
- ✅ Consistent zoom levels
- ✅ Good lighting (if phone photos)

## 🎯 Strategic Screenshot Placement

### In Case Study

```mdx
## The Problem
[Screenshot of dense PDF schedule]
*The old way: searching through a 50-page PDF on mobile*

## The Solution  
[Screenshot of search interface]
*The new way: type a name and see all their routines*

## Color-Coded Results
[Screenshot of multi-dancer search]
*Each dancer gets a unique color for easy tracking*

## Mobile-First
[Side-by-side: mobile vs desktop]
*Designed for the device parents actually use*
```

### Before/After Comparisons

```mdx
### Solving the PDF Problem

<div class="grid grid-cols-2 gap-4">
  <div>
    ![Before: PDF Schedule](/projects/dance-app/before-pdf.png)
    **Before:** PDF on mobile
  </div>
  <div>
    ![After: App Interface](/projects/dance-app/after-app.png)
    **After:** Responsive web app
  </div>
</div>
```

## 🎨 Adding Captions

```mdx
![Search results with color coding](/projects/dance-app/search.png)
*Color-coded search results showing routines for three dancers. Each dancer gets a unique color, making it easy to scan and identify schedules at a glance.*
```

## 🖼️ Image Grid Layout

For multiple images side-by-side:

```mdx
<div className="grid grid-cols-2 gap-4 my-8">
  <div>
    ![Feature 1](/image1.png)
    <p className="text-center text-sm mt-2">Description 1</p>
  </div>
  <div>
    ![Feature 2](/image2.png)
    <p className="text-center text-sm mt-2">Description 2</p>
  </div>
</div>
```

## 📊 Alternative: Use Videos

For dynamic features, consider screen recordings:

```mdx
### Interactive Search Demo

<video controls className="w-full rounded-lg">
  <source src="/projects/dance-app/demo.mp4" type="video/mp4" />
</video>
```

**Recording Tools:**
- **Mac:** QuickTime (Cmd+Shift+5)
- **Windows:** Xbox Game Bar (Win+G)
- **Chrome:** Loom extension
- **CLI:** ffmpeg for automation

## 🚀 Quick Start (No Images Yet?)

If you don't have screenshots ready, use placeholders:

```tsx
// Temporary placeholder in work.tsx
<div className="relative h-48 mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg overflow-hidden flex items-center justify-center text-white">
  <div className="text-center">
    <div className="text-6xl mb-2">💃</div>
    <div className="text-sm font-medium">Dance Schedule App</div>
  </div>
</div>
```

Then replace with real images later!

## 📝 Image Checklist

Before adding to portfolio:
- [ ] Images are high quality (not pixelated)
- [ ] All text in screenshots is readable
- [ ] No personal/sensitive information visible
- [ ] Images are optimized (< 500KB each)
- [ ] Alt text is descriptive and helpful
- [ ] Images add value (not just decoration)
- [ ] Mobile screenshots show mobile design
- [ ] Desktop screenshots show desktop design

## 💡 Pro Tips

1. **Show, Don't Tell:** A screenshot of color-coded results beats paragraphs of description

2. **User Context:** Show the app "in the wild" - at a competition, on a phone in hand

3. **Annotate:** Use arrows/highlights to point out key features

4. **Consistency:** Use the same device frame for all mobile screenshots

5. **Real Data:** Use actual competition schedules (anonymize if needed)

---

## When You're Ready

1. Take your screenshots
2. Save to `public/projects/dance-app/`
3. Update the MDX file
4. Refresh and see them live!

Your case study will look even more professional with visuals! 📸
