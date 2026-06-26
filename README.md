# Mow Bros MN - Modern Website

A modern, iOS-inspired website for Mow Bros MN lawn care and snow removal services in Minnesota.

## Features

- **iOS-Inspired Design**: Clean, modern interface inspired by Apple's design language
- **Responsive Layout**: Fully responsive design that works on all devices
- **Fast Loading**: Optimized for performance with minimal dependencies
- **Accessibility**: Built with accessibility standards in mind
- **Mobile-First Approach**: Bottom navigation bar inspired by iOS apps
- **Smooth Animations**: Subtle animations and transitions for better UX

## Design System

### Color Palette
- **Primary Green**: #4a7c2e (Main brand color)
- **Light Green**: #5a9c3a (Hover states)
- **Dark Green**: #2d5016 (Dark mode fallback)
- **Accent**: #6ab847 (Call-to-action elements)

### Typography
- **Font Family**: System fonts (-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue)
- **Responsive sizing**: Scales based on viewport

### Components
- Buttons (Primary, Secondary, Large, Small)
- Service Cards
- Testimonial Cards
- Contact Cards
- Navigation (Top sticky bar + Bottom iOS-style nav)

## Project Structure

```
Mow-Bros-Website/
├── index.html           # Main HTML file
├── styles.css           # iOS-inspired styling
├── script.js            # Interactive features
├── assets/              # Images and logos folder
│   ├── logo.png
│   ├── hero-image.jpg
│   └── gallery/
├── README.md            # This file
└── .gitignore
```

## Getting Started

### Local Development

1. Open `index.html` in your browser
2. Modify content in HTML file
3. Customize styles in `styles.css`
4. Add interactivity in `script.js`

### Live Server

For better development experience, use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (with http-server package)
http-server
```

Then visit `http://localhost:8000` in your browser.

## Customization

### Change Brand Colors
Edit the CSS variables in `styles.css`:

```css
:root {
    --primary: #4a7c2e;
    --primary-light: #5a9c3a;
    --primary-dark: #2d5016;
    --accent: #6ab847;
}
```

### Add New Sections
1. Add HTML to `index.html`
2. Add corresponding CSS to `styles.css`
3. Update navigation links if needed

### Modify Services
Edit the services grid in `index.html`:
- Change service names, descriptions, and icons
- Icons come from FontAwesome (https://fontawesome.com)

## Performance Optimizations

- Minimal CSS and JavaScript (no build step required)
- Optimized images
- CSS variables for easy theming
- Hardware-accelerated animations
- Lazy loading ready (can be added)

## Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance
- Touch-friendly button sizes (minimum 48x48px)

## Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- iOS Safari
- Android Chrome

## Deployment

### GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Site will be live at `https://username.github.io/Mow-Bros-Website`

### Traditional Hosting
1. Upload files via FTP to your web host
2. Ensure `.htaccess` is configured for routing
3. Test all links and forms

### Netlify
1. Connect GitHub repository
2. Deploy automatically on each push
3. Custom domain configuration available

## Features to Add

- [ ] Image gallery with lightbox
- [ ] Service booking system
- [ ] Customer testimonials carousel
- [ ] Before/after image slider
- [ ] Weather-based service alerts
- [ ] Blog/News section
- [ ] Team member profiles
- [ ] Service area map
- [ ] Newsletter signup
- [ ] Live chat integration

## Contact & Support

**Mow Bros MN**
- Phone: (763) 222-3810
- Email: mowbrosmn@gmail.com
- Address: 19332 Able St NE, East Bethel, MN 55011
- Facebook: facebook.com/mowbrosmn
- Instagram: instagram.com/mowbrosmn

## License

© 2024 Mow Bros MN. All rights reserved.

## Credits

- Design inspired by Apple's iOS design language
- Icons from FontAwesome (https://fontawesome.com)
- Built with modern HTML, CSS, and JavaScript
