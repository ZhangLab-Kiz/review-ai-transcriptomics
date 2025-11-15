# AI in Transcriptomics Review - Website Documentation

## Overview

This static website serves as an interactive companion to the comprehensive review **"A Review of AI Revolution in Transcriptomics: From Single Cells to Spatial Atlases"**. It provides detailed reproducibility checklists for 74 scRNA-seq methods, 49 spatial transcriptomics methods, 24 foundation models, and 5 AI agents, with verified statistics and comprehensive documentation.

## File Structure

```
website/
├── index.html                          # Main landing page
├── pages/
│   ├── scrna-seq-methods.html         # scRNA-seq methods page
│   ├── st-methods.html                 # Spatial Transcriptomics methods page
│   ├── foundation-models.html          # Foundation Models page
│   ├── ai-agents.html                  # AI Agents page
│   └── more.html                       # Contact & more information page
├── assets/
│   ├── css/
│   │   └── style.css                   # Main stylesheet
│   ├── js/
│   │   └── main.js                     # JavaScript utilities
│   └── images/                         # Image assets (if any)
└── README.md                           # This file
```

## Quick Start

### Running Locally

1. **Simple HTTP Server (Recommended)**
   - Python 3: `python -m http.server 8000`
   - Python 2: `python -m SimpleHTTPServer 8000`
   - Open browser and navigate to: `http://localhost:8000`

2. **Using Node.js**
   - Install http-server: `npm install -g http-server`
   - Run in website directory: `http-server`
   - Or specify path: `http-server ./website/`

3. **Direct File Access**
   - Open `index.html` (in the website folder) directly in your browser
   - Note: Some features may not work due to CORS restrictions

### Deployment

#### GitHub Pages (Recommended)

1. **Create GitHub Repository**:
   ```bash
   # In your project root directory
   cd /path/to/your/project
   git init
   git add .
   git commit -m "Initial commit: AI in Transcriptomics review website"
   ```

2. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/yourusername/review-ai-transcriptomics.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from branch "main"
   - Folder: Select "/website" or move website contents to root
   - Save and wait 2-3 minutes
   - Access at: `https://yourusername.github.io/review-ai-transcriptomics/`

4. **Alternative: Move website to root** (simpler URL structure):
   ```powershell
   Move-Item -Path "website\*" -Destination "." -Force
   Remove-Item "website" -Recurse
   git add .
   git commit -m "Move website to root for GitHub Pages"
   git push
   ```

#### Other Hosting Options
- **Netlify**: Drag and drop the `website/` folder
- **Vercel**: Connect GitHub repo and deploy
- **AWS S3 + CloudFront**: Upload to S3 bucket with static hosting
- **Traditional Web Hosting**: FTP upload the `website/` folder

## Website Structure

### Navigation Menu

**Top-Level Menu:**
1. **Home** - Main landing page with overview and key figures
2. **Task-specific Methods** - Dropdown to:
   - scRNA-seq Methods (Table A)
   - ST Methods (Table B)
3. **Advanced Paradigms** - Dropdown to:
   - Foundation Models (Table C)
   - AI Agents (Table D)
4. **More** - Contact information and additional resources

### Page Descriptions

#### Home (index.html)
- Overview of the review and its contributions
- Figure 1: Evolution timeline of AI methods (2018-2025)
- Figure 2: Tri-partite framework of AI paradigms
- Quick navigation cards linking to all major sections
- Note about table resources

#### scRNA-seq Methods (pages/scrna-seq-methods.html)
- **Figure A1**: Distribution by supervision type (vertical layout)
- **Figure A2**: Installation & tutorial availability (vertical layout)
- **Table A**: Reproducibility checklist with 74 scRNA-seq methods
- **Verified Statistics**:
  - Code availability: 71/74 (96%)
  - Installation instructions: 55/74 (74%)
  - Tutorials: 50/74 (68%)
  - Both install + tutorial: 47/74 (64%)
  - Unsupervised/self-supervised: 58/74 (78%)
- Key insights highlighting intrinsic pattern discovery paradigms

#### Spatial Transcriptomics Methods (pages/st-methods.html)
- **Figure B1**: Distribution by learning paradigm (vertical layout)
- **Figure B2**: Installation & tutorial availability (vertical layout)
- **Table B**: Reproducibility checklist with 49 spatial transcriptomics methods
- **Verified Statistics**:
  - Code availability: 49/49 (100%)
  - Installation instructions: 46/49 (94%)
  - Tutorials: 42/49 (86%)
  - Both install + tutorial: 42/49 (86%)
  - Unsupervised/self-supervised: 27/49 (55%)
- Application focus: spatial clustering (20+ methods), cell segmentation (10+ methods)

#### Foundation Models (pages/foundation-models.html)
- **Figure C**: Model parameters vs training data scale (scale analysis)
- **Table C**: Foundation models reproducibility checklist with 24 models
- **Verified Statistics**:
  - Model size range: 5.2M - 27B parameters
  - Training data range: 0.575M - 116M cells
  - GPU hours range: 60 - 147,456 hours
  - Pretrained weights: 19/24 (79%)
  - pip installation: 19/24 (79%)
- Key innovation areas: cross-modal learning, language integration, sequence modeling

#### AI Agents (pages/ai-agents.html)
- AI agent capabilities overview
- Implementation strategies comparison
- Full Table D with 5 AI agents
- Typical AI agent workflow diagram
- Future directions

#### More (pages/more.html)
- Lab information and GitHub repository
- Corresponding author contact
- Contributing authors and their emails
- Citation information
- Research focus areas
- Website information and quick links
- Feedback section

## Data Sources

All data is sourced from the comprehensive review paper and verified markdown checklists:
- **Table A**: `Table A. Reproducibility checklist.md` - 74 scRNA-seq methods
- **Table B**: `Table B. Reproducibility checklist.md` - 49 spatial transcriptomics methods
- **Table C**: `Table C. Reproducibility checklist.md` - 24 foundation models
- **Table D**: `Table D. Reproducibility checklist.md` - 5 AI agents

All statistics displayed on the website are automatically computed from these source tables to ensure accuracy.

## Features

### Interactive Elements
- Smooth navigation between pages
- Dropdown menus for organized navigation
- Interactive charts using Chart.js
- Responsive tables with alternating row colors
- Hover effects on links and buttons

### Design Features
- Responsive design for mobile, tablet, and desktop
- Modern color scheme (primary blue, accent red, success green)
- Sticky header navigation
- Gradient backgrounds
- Box shadows for visual depth
- Clean typography hierarchy

### Accessibility
- Semantic HTML5 structure
- Proper heading hierarchy
- Alt text for images
- Color contrast compliance
- Keyboard navigation support

## Customization

### Changing Styles
Edit `assets/css/style.css`:
- Color scheme: Modify CSS variables at the top (`:root` section)
- Typography: Adjust font sizes and families
- Layout: Modify grid and flexbox configurations

### Updating Tables
- Edit HTML table rows directly in the page files
- Tables are plain HTML for simplicity
- Consider using a table generator if adding many rows

### Adding New Pages
1. Create new HTML file in `pages/` directory
2. Follow the template structure from existing pages
3. Update navigation menu in header across all pages

### Adding Images/Charts
1. Place image files in `assets/images/`
2. Reference them in HTML using relative paths:
   - From pages folder: `src="../assets/images/filename.png"`
   - From root: `src="assets/images/filename.png"`
3. Ensure images are web-optimized (PNG/JPG/SVG)

## Browser Compatibility

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## External Dependencies

The site uses minimal external dependencies:
1. **Chart.js** - Loaded via CDN but charts replaced with static figure images
   - CDN reference: `https://cdn.jsdelivr.net/npm/chart.js` (can be removed if desired)
   - License: MIT

**Static Figure Images** (current implementation):
- `assets/images/figure1.png` - Timeline of AI methods evolution
- `assets/images/figure2.png` - Tri-partite framework diagram
- `assets/images/figureA1.png` - scRNA-seq supervision distribution
- `assets/images/figureA2.png` - scRNA-seq installation availability
- `assets/images/figureB1.png` - ST learning paradigms
- `assets/images/figureB2.png` - ST installation availability
- `assets/images/figureC.png` - Foundation models scale analysis

All other functionality uses vanilla JavaScript with no dependencies.

## SEO Considerations

Current optimizations:
- Semantic HTML5 tags
- Descriptive page titles
- Meta descriptions (can be added)
- Clean URL structure
- Responsive design

To improve further:
- Add meta descriptions to each page
- Create a sitemap.xml
- Add schema.org structured data
- Implement Open Graph tags for social sharing

## Performance Optimization

Current features:
- Minimal CSS and JavaScript
- SVG graphics instead of PNG where possible
- Responsive images
- No unnecessary dependencies

Potential improvements:
- Lazy load images
- Minify CSS/JS for production
- Implement caching headers
- Consider CDN for Chart.js library

## Troubleshooting

### Images Not Displaying
- Verify all images are in `assets/images/` folder
- Check file paths use forward slashes (not backslashes)
- Ensure filenames match exactly (case-sensitive on Linux servers)
- Clear browser cache if images don't update

### Tables Not Formatting Correctly
- Check table HTML structure
- Ensure CSS classes are applied
- Test in different browsers

### Navigation Issues
- Verify all file paths are correct (relative paths)
- Check that all pages exist
- Clear browser cache if pages don't update

## Support & Updates

For issues or updates to the website:
1. **Corresponding Author**: Dr. Chao Zhang (zhangchao@mail.kiz.ac.cn)
2. **Tool Updates & Corrections**: 
   - lishixin@mail.kiz.ac.cn
   - xiaotianxiang251@mails.ucas.ac.cn
   - lanyuanyuan22@mails.ucas.ac.cn
3. **Lab GitHub**: https://github.com/ZhangLab-Kiz

## License

This website and its content are provided as supplementary material to the published review. Please cite the original paper when referencing this work.

## Version History

- **v1.1** (November 2025): Statistics verification and UI improvements
  - Verified all statistics from source markdown tables
  - Updated scRNA-seq page: 74 methods with accurate percentages
  - Updated ST page: 49 methods with accurate percentages
  - Updated FM page: 24 models with correct parameter ranges
  - Replaced Chart.js dynamic charts with static figure images (vertical layout)
  - Cleaned up residual Chart.js code from all pages
  - Updated contact information to single box format
  - Fixed image paths to use `assets/images/` directory

- **v1.0** (January 2025): Initial website release
  - 6 main pages (Home, scRNA-seq, ST, Foundation Models, AI Agents, More)
  - Interactive charts and tables
  - Responsive design
  - Full navigation structure
  - Comprehensive reproducibility checklists

---

Last Updated: November 15, 2025
