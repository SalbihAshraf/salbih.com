document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    
    // Check for saved theme preference
    if (localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    }

    // Toggle theme function
    function toggleTheme() {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        }
    }

    // Add click event to theme toggle button
    themeToggleBtn.addEventListener('click', toggleTheme);

    // Project data
    const projects = [
        {
            title: "SalbihGame Revamped",
            description: "Salbih tackles a new game dev project utilising his knowledge of online tutorials and personal coding expertise",
            image: "Screenshot 2024-12-29 001234.jpg",
            tags: ["Godot", "GDScript", "Pixel Art"],
            link: "https://salbih.itch.io/salbihgame-revamped" // Replace with actual link
        },
        {
            title: "Dungeon Delver",
            description: "Top-down dungeon crawler with pixel art aesthetics. Implemented custom pathfinding and combat systems.",
            image: "https://via.placeholder.com/600x400",
            tags: ["Godot", "GDScript", "Pixel Art"],
            link: "https://github.com/yourusername/dungeon-delver" // Replace with actual link
        },
        {
            title: "Speed Racer VR",
            description: "Virtual reality racing game with realistic physics and multiplayer support. Built for Meta Quest.",
            image: "https://via.placeholder.com/600x400",
            tags: ["Unreal Engine", "C++", "VR"],
            link: "https://github.com/yourusername/speed-racer-vr" // Replace with actual link
        }
    ];

    // Skills data
    const skills = [
        "Unity Game Development",
        "Unreal Engine",
        "C# & C++ Programming",
        "3D Modeling & Animation",
        "Game Design & Level Design",
        "Version Control (Git)",
    ];

    // Render projects
    const projectsGrid = document.getElementById('projects-grid');
    projects.forEach(project => {
        const projectWrapper = document.createElement('a');
        projectWrapper.href = project.link;
        projectWrapper.target = "_blank"; // Opens in new tab
        projectWrapper.className = 'block transition-transform duration-300 hover:-translate-y-2';
        
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <div class="relative overflow-hidden">
                <img src="${project.image}" alt="${project.title}" class="project-image">
            </div>
            <div class="project-content">
                <h3 class="project-title">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"/>
                    </svg>
                    ${project.title}
                </h3>
                <p class="project-description">${project.description}</p>
                <div class="flex flex-wrap gap-2">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        projectWrapper.appendChild(projectCard);
        projectsGrid.appendChild(projectWrapper);
    });

    // Render skills
    const skillsGrid = document.getElementById('skills-grid');
    skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.innerHTML = `
            <svg class="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
            </svg>
            <span>${skill}</span>
        `;
        skillsGrid.appendChild(skillItem);
    });
});