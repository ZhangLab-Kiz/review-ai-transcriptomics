// Navigation and utility functions

// Smooth scroll to sections
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Convert markdown table to HTML
function markdownToHtml(markdown) {
    const lines = markdown.trim().split('\n');
    if (lines.length < 2) return '';

    // Skip title line (starting with **)
    let startIdx = 0;
    if (lines[0].includes('**')) {
        startIdx = 1;
    }

    let html = '<table>';
    
    // Process header and separator
    for (let i = startIdx; i < lines.length; i++) {
        const line = lines[i].trim();
        
        // Skip empty lines and separator lines
        if (!line || /^[|:\-\s]*$/.test(line)) {
            continue;
        }

        // Parse table row
        const cells = line.split('|').filter(cell => cell.trim()).map(cell => cell.trim());
        
        if (i === startIdx) {
            // Header row
            html += '<thead><tr>';
            cells.forEach(cell => {
                html += `<th>${cell}</th>`;
            });
            html += '</tr></thead>';
            html += '<tbody>';
        } else {
            // Data rows
            html += '<tr>';
            cells.forEach(cell => {
                // Handle markdown links
                let cellContent = cell.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>');
                html += `<td>${cellContent}</td>`;
            });
            html += '</tr>';
        }
    }
    
    html += '</tbody></table>';
    return html;
}

// Format table for display
function displayTable(tableMarkdown, containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = markdownToHtml(tableMarkdown);
    }
}

// Page navigation function
function navigateTo(page) {
    window.location.href = `pages/${page}.html`;
}

// Initialize page on load
document.addEventListener('DOMContentLoaded', function() {
    // Add active class to current page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.includes(currentPage.replace('.html', ''))) {
            link.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        }
    });

    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// Utility function to escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Utility function to format numbers
function formatNumber(num) {
    return new Intl.NumberFormat('en-US').format(num);
}
