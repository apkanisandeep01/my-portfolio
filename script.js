document.addEventListener('DOMContentLoaded', function() {
    
    // =================================================================
    // PORTFOLIO DATA
    // =================================================================
    const portfolioData = {
        navLinks: [
            { href: '#why-me', text: 'Why Me?' },
            { href: '#apps', text: 'Live Apps' },
            { href: '#projects', text: 'Projects' },
            { href: '#education', text: 'Education' },
            { href: '#contact', text: 'Contact Me' }
        ],
        hero: {
            name: 'APKANI SANDEEP KUMAR',
            profilePic: 'profile.jpg',
            tagline: 'I transform complex data into actionable business insights, bridging my unique background in agriculture with modern data analysis techniques.',
            typedText: ["Data Analyst", "Aspiring Data Scientist", "Python Developer", "Web Automation"],
            buttons: [
                { type: 'primary', href: 'https://wa.me/918179607161', icon: 'fas fa-envelope', text: 'Get In Touch' },
                { type: 'secondary', href: 'https://drive.google.com/file/d/18hAQKeiGVUib5modtU39gOsgnR6DjX0s/view?usp=sharing', icon: 'fas fa-download', text: 'Download Resume' }
            ]
        },
        whyMe: [
            { icon: 'fas fa-chart-line', color: 'icon-primary', title: 'Proven Business Impact', text: 'I don\'t just analyze data; I translate it into measurable outcomes, like boosting crop yields and identifying 173% YoY growth drivers.' },
            { icon: 'fas fa-cogs', color: 'icon-secondary', title: 'Automation Expert', text: 'My Python scripts have automated tedious tasks, cutting data processing time by 80% and creating efficient, scalable workflows.' },
            { icon: 'fas fa-seedling', color: 'icon-tertiary', title: 'Unique Perspective', text: 'My background in agriculture provides a grounded, practical approach to data, allowing me to see patterns others might miss.' }
        ],
        apps: [
            { icon: 'fas fa-file-excel', color: 'icon-primary', title: 'Excel Repair & Export Assistant', text: 'Automated tool for repairing corrupted Excel files and streamlining data recovery.', appUrl: 'https://repairexcel.streamlit.app/', codeUrl: 'https://github.com/apkanisandeep01/Universal-Excel-Repair-tool.git' },
            { icon: 'fas fa-calculator', color: 'icon-secondary', title: 'Land Area Calculator', text: 'Precise land area calculations using GPS coordinates for agricultural needs.', appUrl: 'https://agriextentcalsi.streamlit.app/', codeUrl: 'https://github.com/apkanisandeep01/Agri-extent-calsi.git' },
            { icon: 'fab fa-python', color: 'icon-tertiary', title: 'Python-powered Excel', text: 'A comprehensive platform integrating Python scripts with Excel for advanced automation.', appUrl: 'https://excelwithpython.streamlit.app/', codeUrl: 'https://github.com/apkanisandeep01/Python-powered_Excel.git' },
            { icon: 'fas fa-seedling', color: 'icon-success', title: 'Crop Verification Report (CBV)', text: 'A tool for efficient merging and generating insights, (Departmnet Use only).', appUrl: 'https://cropverificationdata.streamlit.app/', codeUrl: 'https://github.com/apkanisandeep01/Crop-Verification-Merger.git' },
            { icon: 'fas fa-random', color: 'icon-primary', title: 'Excel Random Sampler', text: 'A tool to select desired columns and generate a random sample based on user input.', appUrl: 'https://excelrandomsampler.streamlit.app/', codeUrl: 'https://github.com/apkanisandeep01/excel-random-sampler.git' },
            { icon: 'fas fa-file-alt', color: 'icon-danger', title: 'Crop Damage Proforma Generator', text: 'A tool for efficient merging and generating Crop damage report proforma, (Departmnet Use only).', appUrl: 'https://agricropdamage.streamlit.app', codeUrl: 'https://github.com/apkanisandeep01/Crop-Damage-Report.git' }
        ],
        projects: [
            { title: 'Yulu Bike-Sharing Analysis', text: 'Validated impact of seasonality on bike demand using hypothesis testing to optimize operations.', repoUrl: 'https://github.com/apkanisandeep01/Yulu-Bike-Sharing-Demand-Analysis', tags: ['Python', 'Statistics', 'Pandas', 'Numpy', 'Seaborn', 'Matplotlib'] },
            { title: 'Aerofit Customer Analysis', text: 'Modeled distinct customer profiles for treadmill products to inform targeted marketing campaigns.', repoUrl: 'https://github.com/apkanisandeep01/-Aerofit-Treadmill-Customer-Analysis.git', tags: ['Python', 'Statistics', 'Pandas', 'Numpy', 'Seaborn', 'Segmentation'] },
            { title: 'Walmart Sales Analysis', text: 'Engineered a customer segmentation model on 100M+ sales records to identify high-value segments.', repoUrl: 'https://github.com/apkanisandeep01/Walmart-BlackFriday-Analysis.git', tags: ['Python', 'Matplotlib', 'Pandas', 'Numpy', 'Seaborn'] },
            { title: 'Netflix Streaming Analysis', text: 'Identified market shift from movies to TV shows through EDA, informing content strategy.', repoUrl: 'https://github.com/apkanisandeep01/Streaming-Trends-Netflix-Content-Insights.git', tags: ['Python', 'EDA', 'Pandas', 'Numpy', 'Seaborn'] },
            { title: 'Delhivery Logistics Analysis', text: 'Analyzed data to identify inefficiencies and engineered features to improve delivery performance.', repoUrl: 'https://github.com/apkanisandeep01/Delhivery-Logistics-Data-Analysis-and-Feature-Engineering.git', tags: ['Python', 'Pandas', 'Numpy', 'Seaborn'] },
            { title: 'Brazil E-commerce Analysis', text: 'Analyzed 100K+ orders using SQL to identify seasonal trends and growth drivers.', repoUrl: 'https://github.com/apkanisandeep01/brazilian-ecommerce-analysis.git', tags: ['SQL', 'Analytics', 'BigQuery'] }
        ],
        journey: [
            { date: 'June 2024 - Present', title: 'Data Science & Machine Learning', company: 'Scaler Academy', text: 'Deepening my expertise in Python, SQL, and advanced analytics to build robust data solutions.' },
            { date: 'Apr 2018 - Present', title: 'Agriculture Extension Officer', company: 'Government of Telangana', text: 'Leveraged data analysis to enhance crop yields, advising farmers and automating data processing with Python.' }
        ],
        education: [
            { icon: 'fas fa-graduation-cap', title: 'Data Science & Machine Learning', institution: 'Scaler Academy (2024 - Present)', text: 'Specializing in Python, SQL, and advanced analytics.' },
            { icon: 'fas fa-laptop-code', title: 'Full Stack Development Program', institution: 'NxtWave (2022 - 2023)', text: 'Focused on HTML, CSS, SQL, and Python for web and data applications.' },
            { icon: 'fas fa-university', title: 'Bachelor of Arts', institution: 'Shalivahana Degree College (2019 - 2022)', text: 'Majors in History, Politics, and Philosophy, honing analytical and research skills.' },
            { icon: 'fas fa-university', title: 'Diploma Agriculture Management', institution: 'GPSIOAM, Bangalore (2016 - 2017)', text: 'Completed hands-on training at GPS Institute, learning real-world agricultural production and marketing practices.' }
        ],
        certifications: [
            'EDA Fundamentals',
            'Python Libraries',
            'Querying Data with SQL',
            'Programming Foundations with Python',
            'Introduction to Databases',
            'Build Your Own Responsive Website',
            'Build Your Own Static Website'
        ],
        contact: {
            email: 'apkanisandeep00@outlook.com',
            phone: '8179607161',
            socials: [
                { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/apkanisandeep01' },
                { name: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/apkanisandeepkumar' },
                { name: 'Kaggle', icon: 'fab fa-kaggle', url: 'https://www.kaggle.com/apkanisandeepkumar' },
                { name: 'LeetCode', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png', url: 'https://leetcode.com/apkanisandeep01/' },
                { name: 'HackerRank', icon: 'fab fa-hackerrank', url: 'https://www.hackerrank.com/profile/apkanisandeep00' },
                { name: 'Streamlit', imgSrc: 'https://streamlit.io/images/brand/streamlit-logo-secondary-colormark-darktext.png', url: 'https://share.streamlit.io/user/apkanisandeep01' },
            ]
        }
    };
    
    // =================================================================
    // DYNAMIC CONTENT RENDERING FUNCTIONS
    // =================================================================
    function renderNavLinks() {
        const container = document.getElementById('nav-links-container');
        if (!container) return;
        container.innerHTML = portfolioData.navLinks.map(link => `
            <li><a href="${link.href}">${link.text}</a></li>
        `).join('');
    }
    
    function renderHero() {
        const profilePic = document.getElementById('profile-pic');
        const heroName = document.getElementById('hero-name');
        const heroTagline = document.getElementById('hero-tagline');
        const buttonsContainer = document.getElementById('hero-buttons-container');

        if(profilePic) profilePic.setAttribute('src', portfolioData.hero.profilePic);
        if(heroName) heroName.textContent = portfolioData.hero.name;
        if(heroTagline) heroTagline.textContent = portfolioData.hero.tagline;
        if(buttonsContainer) {
            buttonsContainer.innerHTML = portfolioData.hero.buttons.map(btn => `
                <a href="${btn.href}" target="_blank" class="btn btn-${btn.type}">
                    <i class="${btn.icon}"></i> ${btn.text}
                </a>
            `).join('');
        }
    }

    function renderWhyMe() {
        const grid = document.getElementById('why-me-grid');
        if (!grid) return;
        grid.innerHTML = portfolioData.whyMe.map(item => `
            <div class="why-me-card">
                <div class="icon ${item.color}"><i class="${item.icon}"></i></div>
                <h3>${item.title}</h3>
                <p>${item.text}</p>
            </div>
        `).join('');
    }

    function renderApps() {
        const grid = document.getElementById('apps-grid');
        if (!grid) return;
        grid.innerHTML = portfolioData.apps.map(app => `
            <div class="app-card">
                <div class="icon ${app.color}"><i class="${app.icon}"></i></div>
                <h3>${app.title}</h3>
                <p>${app.text}</p>
                <div class="app-links">
                    <a href="${app.appUrl}" target="_blank" class="btn btn-small btn-primary">Launch App</a>
                    <a href="${app.codeUrl}" target="_blank" class="btn btn-small btn-dark">View Code</a>
                </div>
            </div>
        `).join('');
    }

    function renderProjects() {
        const grid = document.getElementById('projects-grid');
        if (!grid) return;
        grid.innerHTML = portfolioData.projects.map(project => `
            <div class="project-card">
                <h3>${project.title}</h3>
                <p>${project.text}</p>
                <a href="${project.repoUrl}" target="_blank" class="git-btn">
                    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Logo" width="20" height="20">
                    <span>View Repo</span>
                </a>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                </div>
            </div>
        `).join('');
    }
    
    function renderJourney() {
        const container = document.getElementById('timeline-container');
        if (!container) return;
        container.innerHTML = portfolioData.journey.map(item => `
            <div class="timeline-item">
                <div class="timeline-date">${item.date}</div>
                <h3>${item.title}</h3>
                <h4>${item.company}</h4>
                <p>${item.text}</p>
            </div>
        `).join('');
    }
    
    function renderEducation() {
        const grid = document.getElementById('education-grid');
        if (!grid) return;
        
        const educationHtml = portfolioData.education.map(item => `
            <div class="education-item">
                <div class="education-icon"><i class="${item.icon}"></i></div>
                <div>
                    <h4>${item.title}</h4>
                    <p class="institution">${item.institution}</p>
                    <p>${item.text}</p>
                </div>
            </div>
        `).join('');

        const certsHtml = portfolioData.certifications.map(cert => `
            <div class="cert-item">
                <i class="fas fa-check-circle"></i>
                <span>${cert}</span>
            </div>
        `).join('');

        grid.innerHTML = `
            <div class="education-col">
                <h3>Formal Education</h3>
                ${educationHtml}
            </div>
            <div class="education-col">
                <h3>Certifications</h3>
                ${certsHtml}
            </div>
        `;
    }

    function renderContact() {
        const container = document.getElementById('contact-container');
        const contact = portfolioData.contact;
        if (!container || !contact) return;
        
        const socialLinksHtml = contact.socials.map(social => {
            const iconHtml = social.icon ? `<i class="${social.icon}"></i>` : `<img src="${social.imgSrc}" alt="${social.name} Logo">`;
            return `<a href="${social.url}" target="_blank" title="${social.name}">${iconHtml}</a>`;
        }).join('');

        container.innerHTML = `
            <p>Reach me directly:</p>
            <p class="email"><i class="fas fa-envelope"></i> ${contact.email}</p>
            <p class="email"><i class="fas fa-phone"></i> ${contact.phone}</p>
            <div class="social-links">
                ${socialLinksHtml}
            </div>
        `;
    }

    // --- Initial Render Call ---
    function renderAll() {
        renderNavLinks();
        renderHero();
        renderWhyMe();
        renderApps();
        renderProjects();
        renderJourney();
        renderEducation();
        renderContact();
    }
    
    renderAll();
    
    // =================================================================
    // EVENT LISTENERS AND ANIMATIONS
    // =================================================================

    // --- Mobile Navigation (Hamburger Menu) ---
    const hamburger = document.getElementById('hamburger-button');
    const navLinks = document.getElementById('nav-links-container');
    const navOverlay = document.querySelector('.nav-overlay');
    const body = document.body;

    function openMenu() {
        body.classList.add('nav-open');
        navLinks.classList.add('nav-active');
        navOverlay.classList.add('nav-active');
        history.pushState({menuOpened: true}, null);
    }

    function closeMenu() {
        body.classList.remove('nav-open');
        navLinks.classList.remove('nav-active');
        navOverlay.classList.remove('nav-active');
    }

    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        if (body.classList.contains('nav-open')) {
            history.back();
        } else {
            openMenu();
        }
    });

    navOverlay.addEventListener('click', () => {
        if (body.classList.contains('nav-open')) {
            history.back();
        }
    });

    navLinks.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            if (body.classList.contains('nav-open')) {
               history.back();
            }
        }
    });

    window.addEventListener('popstate', (e) => {
        if (body.classList.contains('nav-open')) {
            closeMenu();
        }
    });


    // --- Animated Typing Effect ---
    const typedTextSpan = document.getElementById('typed-text');
    const textArray = portfolioData.hero.typedText;
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (typedTextSpan && charIndex < textArray[textArrayIndex].length) {
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 2000);
        }
    }

    function erase() {
        if (typedTextSpan && charIndex > 0) {
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50);
        } else {
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, 1300);
        }
    }

    if (typedTextSpan && textArray.length) {
        setTimeout(type, 1500);
    }

    // --- Scroll Animation ---
    const sections = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});
