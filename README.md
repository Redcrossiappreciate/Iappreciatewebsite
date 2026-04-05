# Project iAppreciate 2026

A modern first-draft event showcase website for **Project iAppreciate 2026**, a flagship humanitarian initiative by the **Red Cross Youth Chapter at Nanyang Technological University (RCY NTU)**.

The site is built with:

- React
- Tailwind CSS
- Framer Motion
- Vite

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the local development server:

```bash
npm run dev
```

3. Open the local URL shown in your terminal, usually:

```bash
http://localhost:5173
```

The dedicated gallery page is available at:

```bash
http://localhost:5173/gallery.html
```

## Project Structure

```text
.
├── public/
│   └── images/
│       ├── gallery/
│       ├── hero/
│       ├── highlights/
│       ├── icons/
│       └── sponsors/
├── src/
│   ├── components/
│   ├── data/
│   ├── sections/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
└── vite.config.js
```

## Where To Edit Content

Most of the text content is kept in one file:

- [`src/data/siteContent.js`](/Users/aymantripathi/RCY%20iappreciate%20website/src/data/siteContent.js)
- [`src/data/galleryImages.js`](/Users/aymantripathi/RCY%20iappreciate%20website/src/data/galleryImages.js)

That file controls:

- hero text
- section copy
- impact statistics
- support categories
- sponsor logos
- contact information
- social links

The gallery image list is kept separately in:

- [`src/data/galleryImages.js`](/Users/aymantripathi/RCY%20iappreciate%20website/src/data/galleryImages.js)

This lets the homepage preview and the dedicated gallery page reuse the same image data.

If you want to replace placeholder text later, start there first.

## Image Folders

Place your images in these folders:

- `public/images/hero`
- `public/images/gallery`
- `public/images/highlights`
- `public/images/sponsors`
- `public/images/icons`

### Recommended Sizes

- Hero images: `2000 x 1400px` or similar, landscape
- Gallery images: at least `1200px` on the long side
- Highlight images: `1600 x 1000px`
- Sponsor logos: transparent PNG or SVG, around `600 x 240px`
- Icons: SVG preferred

### Aspect Ratio Tips

- Hero: `3:2` or `16:10`
- Gallery: mix of portrait, square, and landscape is okay
- Highlights: `16:10` or `4:3`
- Sponsors: wide rectangles work best

The gallery layout is designed to handle mixed image ratios gracefully.

## How To Replace Placeholder Images

1. Add your image file to the correct folder inside `public/images`.
2. Open [`src/data/siteContent.js`](/Users/aymantripathi/RCY%20iappreciate%20website/src/data/siteContent.js).
3. Replace the placeholder path with your new file path.

Example:

```js
image: "/images/gallery/my-photo-01.jpg";
```

If a file path is missing or incorrect, the site will automatically fall back to a built-in placeholder image instead of breaking the layout.

## Current Image Placement

The hero image currently used on the homepage is:

- `public/images/hero/project-iappreciate-hero.jpg`

The event gallery images currently used are:

- `public/images/gallery/iappreciate-02.jpg`
- `public/images/gallery/iappreciate-03.jpg`
- `public/images/gallery/iappreciate-04.jpg`
- `public/images/gallery/iappreciate-05.jpg`
- `public/images/gallery/iappreciate-06.jpg`
- `public/images/gallery/iappreciate-07.jpg`
- `public/images/gallery/iappreciate-08.jpg`
- `public/images/gallery/iappreciate-09.jpg`
- `public/images/gallery/iappreciate-10.jpg`
- `public/images/gallery/iappreciate-11.jpg`
- `public/images/gallery/iappreciate-12.jpg`
- `public/images/gallery/iappreciate-13.jpg`
- `public/images/gallery/iappreciate-14.jpg`
- `public/images/gallery/iappreciate-15.jpg`
- `public/images/gallery/iappreciate-16.jpg`

The `.heic` source files were converted into `.jpg` during setup so they work cleanly in the browser.

## How To Replace Contact Information

Open [`src/data/siteContent.js`](/Users/aymantripathi/RCY%20iappreciate%20website/src/data/siteContent.js) and update:

- sponsorship email
- general contact email
- social media links
- team labels or names

## GitHub Pages Deployment

This project uses a relative Vite base path, so it is friendly to GitHub Pages deployments.

### Option 1: Deploy with `gh-pages`

1. Create a GitHub repository.
2. Push this project to that repository.
3. Run:

```bash
npm run deploy
```

4. In GitHub, set Pages to publish from the `gh-pages` branch if needed.

### Option 2: Deploy with GitHub Actions

You can also use GitHub's built-in static site workflow. Since the build output is generated with:

```bash
npm run build
```

the `dist` folder can be published directly through a Pages action.

## Editing Tips For Beginners

- To change text: edit [`src/data/siteContent.js`](/Users/aymantripathi/RCY%20iappreciate%20website/src/data/siteContent.js)
- To change gallery photos or captions: edit [`src/data/galleryImages.js`](/Users/aymantripathi/RCY%20iappreciate%20website/src/data/galleryImages.js)
- To change layout: edit the files in `src/sections`
- To change smaller UI pieces like cards or buttons: edit files in `src/components`
- To change colors, spacing, shadows, or fonts: edit `src/index.css` and `tailwind.config.js`

## Notes

- Placeholder statistics are clearly labeled as editable in the UI copy.
- The design is intentionally calm and minimal so it can support many real event photos later.
- The component structure is intentionally simple and beginner-friendly for future edits.
