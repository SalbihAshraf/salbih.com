// Project data
const projects = [
    {
        title: "Cosmic Defender",
        description: "A space-themed roguelike shooter built with Unity. Features procedurally generated levels and dynamic difficulty scaling.",
        image: "https://via.placeholder.com/600x400",
        tags: ["Unity", "C#", "2D Graphics"]
    },
    {
        title: "Dungeon Delver",
        description: "Top-down dungeon crawler with pixel art aesthetics. Implemented custom pathfinding and combat systems.",
        image: "https://via.placeholder.com/600x400",
        tags: ["Godot", "GDScript", "Pixel Art"]
    },
    {
        title: "Speed Racer VR",
        description: "Virtual reality racing game with realistic physics and multiplayer support. Built for Meta Quest.",
        image: "https://via.placeholder.com/600x400",
        tags: ["Unreal Engine", "C++", "VR"]
    }
];

const skills = [
    "Unity Game Development",
    "Unreal Engine",
    "C# & C++ Programming",
    "3D Modeling & Animation",
    "Game Design & Level Design",
    "Version Control (Git)",
];

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Check for saved theme preference or default to system preference
const getPreferredTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const setTheme = (theme) => {
    if (theme === 'dark') {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
};

// Initialize theme
setTheme(getPreferredTheme());

// Theme toggle event listener
themeToggle.addEventListener('click', () => {
    const isDark = html.classList.contains('dark');
    setTheme(isDark ? 'light' : 'dark');
});

// Render projects
const projectsGrid = document.getElementById('projects-grid');
projects.forEach(project => {
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
    projectsGrid.appendChild(projectCard);
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