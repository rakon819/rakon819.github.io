// Project data
const projects = {
    project1: {
        title: "Project One",
        description: "This is my personal website built with HTML, CSS, and JavaScript.",
        image: "assets/images/project1.jpg",
        link: "https://willowy-melba-a8d5bd.netlify.app"
    },
    project2: {
        title: "Project Two",
        description: "This project will be added soon.",
        image: "assets/images/project2.jpg",
        link: "#" // Пока заглушка, можно заменить на реальный проект позже
    }
};

// Open modal for selected project
function openModal(projectId) {
    const modal = document.getElementById('modal');
    const content = document.getElementById('modal-content');

    const project = projects[projectId];
    content.innerHTML = `
        <h2>${project.title}</h2>
        <img src="${project.image}" alt="${project.title}" style="width:100%; margin-bottom:20px;">
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View Project</a>
    `;
    modal.style.display = "block";
}

// Close modal
function closeModal() {
    document.getElementById('modal').style.display = "none";
}