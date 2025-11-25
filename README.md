# AI in Transcriptomics Review - Website

## Overview

This static website serves as an interactive companion to the comprehensive review **"AI Revolution in Transcriptomics: From Single Cells to Spatial Atlases"**. It provides detailed reproducibility checklists for 84 scRNA-seq methods, 49 spatial transcriptomics methods, 24 foundation models, and 5 AI agents, with verified statistics and comprehensive documentation.

## File Structure

```
├── Index.html                          # Main landing page
├── pages/
│   ├── scrna-seq-methods.html         # scRNA-seq methods page
│   ├── st-methods.html                # Spatial Transcriptomics methods page
│   ├── foundation-models.html         # Foundation Models page
│   ├── ai-agents.html                 # AI Agents page
│   └── more.html                      # Contact & more information page
├── assets/
│   ├── css/
│   │   └── style.css                  # Main stylesheet
│   ├── js/
│   │   └── main.js                    # JavaScript utilities
│   └── images/                        # Image assets
└── README.md                          # This file
```

## Quick Start

### Running Locally

**Using Live Server (VS Code Extension)**
- Right-click `Index.html` and select "Open with Live Server"
- Or use `python -m http.server 8000` and navigate to `http://localhost:8000`

### Deployment to GitHub Pages

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git branch -M main
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from branch "main"
   - Folder: Root
   - Save and wait 2-3 minutes
   - Access at: `https://yourusername.github.io/your-repo-name/`

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
- **Table A**: Reproducibility checklist with 84 scRNA-seq methods
- **Verified Statistics**:
  - Code availability: 82/84 (97.6%)
  - Installation instructions: 72/84 (85.7%)
  - Tutorials: 69/84 (82.1%)
  - Both install + tutorial: 69/84 (82.1%)
  - Unsupervised/self-supervised: 58/84 (69%)
- Key insights highlighting intrinsic pattern discovery paradigms

#### Spatial Transcriptomics Methods (pages/st-methods.html)
- **Figure B1**: Distribution by learning paradigm (vertical layout)
- **Figure B2**: Installation & tutorial availability (vertical layout)
- **Table B**: Reproducibility checklist with 49 spatial transcriptomics methods
- **Verified Statistics**:
  - Code availability: 49/49 (100%)
  - Installation instructions: 46/49 (93.9%)
  - Tutorials: 44/49 (89.8%)
  - Both install + tutorial: 44/49 (89.8%)
  - Unsupervised/self-supervised: 27/49 (55%)
- Application focus: spatial clustering (13 methods), cell segmentation (11 methods), deconvolution (11 methods)

#### Foundation Models (pages/foundation-models.html)
- **Figure C**: Model parameters vs training data scale (scale analysis)
- **Table C**: Foundation models reproducibility checklist with 24 models
- **Verified Statistics**:
  - Model size range: 5.2M - 27B parameters
  - Training data range: 0.575M - 116M cells
  - GPU hours range: 60 - 147,456 hours
  - Pretrained weights: 19/24 (79%)
  - pip installation: 19/24 (79.2%)
- Key innovation areas: cross-modal learning (OmiCLIP), language integration (C2S-Scale, TranscriptFormer), sequence modeling (GeneMamba)

#### AI Agents (pages/ai-agents.html)
- AI agent capabilities overview
- Implementation strategies comparison
- Full Table D with 5 AI agents
- **Verified Statistics**:
  - Code availability: 4/5 (80%)
  - Online services: 2/5 (40%)
  - Spatial transcriptomics support: 3/5 (60%)
- Typical AI agent workflow diagram

#### More (pages/more.html)
- Lab information and GitHub repository
- Corresponding author contact
- Contributing authors and their emails
- Citation information
- Research focus areas
- Website information and quick links

## Browser Compatibility

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contact & Support

For issues or updates to the website:
- **Corresponding Author**: Dr. Chao Zhang (zhangchao@mail.kiz.ac.cn)
- **Tool Updates & Corrections**: 
  - lishixin@mail.kiz.ac.cn
  - xiaotianxiang251@mails.ucas.ac.cn
  - lanyuanyuan22@mails.ucas.ac.cn
- **Lab GitHub**: https://github.com/ZhangLab-Kiz

## License

This website and its content are provided as supplementary material to the published review. Please cite the original paper when referencing this work.

## Version History

- **v1.0** (November 2025): Initial release
  - 5 main pages with comprehensive reproducibility checklists
  - 84 scRNA-seq methods with 97.6% code availability
  - 49 spatial transcriptomics methods with 100% code availability
  - 24 foundation models with detailed statistics (5.2M-27B parameters)
  - 5 AI agents with implementation strategies (80% code availability)
  - Responsive design with static figure images
  - Full navigation structure

---

Last Updated: November 25, 2025
