# Font Files

## Perandory Font

To complete the Perandory font setup, you need to add the font files here:

1. **Download Perandory font:**
   - Visit: https://www.deefont.com/perandory-font/
   - Or: https://www.behance.net/gallery/136671169/Perandory-Free-Typeface
   - Download the font files (usually in `.zip` format)

2. **Extract and convert font files:**
   - Extract the downloaded files
   - You'll need `.woff2` and `.woff` formats for best browser support
   - If you only have `.ttf` or `.otf`, you can convert them using:
     - Online: https://cloudconvert.com/ttf-to-woff2
     - Or use font tools like Font Squirrel's Webfont Generator

3. **Add font files to this directory:**
   - Place `Perandory-Regular.woff2` in this folder (`app/fonts/`)
   - Place `Perandory-Regular.woff` in this folder (as fallback)
   - If you have other weights (Bold, Italic, etc.), add them too

4. **Update `layout.tsx` if you add more weights:**
   - Uncomment and add paths for additional weights/styles in the `perandory` font configuration

## File Structure

```
app/fonts/
  ├── Perandory-Regular.woff2
  ├── Perandory-Regular.woff
  └── README.md (this file)
```

## Usage

Once the font files are added, you can use Perandory in your components:

```tsx
// Using Tailwind classes
<div className="font-perandory">Text with Perandory font</div>

// Using CSS
<div style={{ fontFamily: 'var(--font-perandory)' }}>Text</div>
```

