import render_list_item from "../js/templates"

const languagesAndFrameworks = ["Python", "Golang", "Lua", "JS", "Django", "Django Rest Framework", "Flask", "py.test", "React", "HTML/CSS/SCSS"]
const container = document.querySelector('.skills-list--js');
for (let item of languagesAndFrameworks) {
    container.innerHTML += render_list_item(item);
}

const tools = ["PostgreSQL", "SQLAlchemy", "Git", "Jenkins", "Sentry", "Vagrant", "Docker", "Celery", "Redis", "Ansible basics"]
const tools_container = document.querySelector('.skills-list--blue--js');
for (let item of tools) {
    tools_container.innerHTML += render_list_item(item);
}

const additional_skills = ["Agile", "TDD", "SOLID", "Design patterns", "Clean architecture", "CI/CD processes"]
const additional_container = document.querySelector('.skills-list--dot--js');
for (let item of additional_skills) {
    additional_container.innerHTML += render_list_item(item);
}