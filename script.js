let navbar = document.getElementById("navbar")
let sidebar = document.getElementById("sidebar")
let projectHolder = document.getElementById("project-holder")

function Navbar() {
    navbar.innerHTML = `<a href="index.html#home" class="logo" id="logo">Portfolio</a>
<ul class="nav">
<li><a href="index.html#home" class="listItem hideOnMobile">Home</a></li>
<li><a href="index.html#projects" class="listItem hideOnMobile">Projects</a></li>
<li><a href="index.html#contact" class="listItem hideOnMobile">Contact</a></li>
<li class="menu-button" onclick="showSidebar()"><svg xmlns="http://www.w3.org/2000/svg" height="30px"
viewBox="0 -960 960 960" width="30px" fill="#e8eaed">
<path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
</svg></li>
</ul>`
}

function Sidebar() {
    sidebar.innerHTML = `<li onclick="hideSidebar()"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
<path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
</svg></li>
<li><a href="index.html#home" onclick="hideSidebar()">Home</a></li>
<li><a href="index.html#projects" onclick="hideSidebar()">Projects</a></li>
<li><a href="index.html#contact" onclick="hideSidebar()">Contact</a></li>`
}

function displayProject(a) {
    const jsonFile = "./projects.json"
    fetch(jsonFile).then((response) => {
        return response.json()
    }).then(data => {
        data.slice(0, a).map(content => {
            const { url, image, heading, desc } = content;
            projectHolder.innerHTML += `
            <a href="${url}">
            <section class="project">
                <img src="${image}" class="project-img"> 
                <div>
                    <div class="project-heading">${heading}</div>
                    ${desc}
                </div>
            </section>
        </a>
        `
        })
    })
}

Navbar()
Sidebar()

let logo = document.getElementById("logo")
let listItem = document.querySelectorAll(".listItem")

function shrinkNav() {
    if (scrollY > 50) {
        navbar.classList.add("shrink-navbar")
        logo.classList.add("shrink-logo")
        for (let i = 0; i < 3; i++) {
            listItem[i].style.fontSize = "1.125rem"
        }
    } else {
        navbar.classList.remove("shrink-navbar")
        logo.classList.remove("shrink-logo")
        for (let i = 0; i < 3; i++) {
            listItem[i].style.fontSize = "1.5rem"
        }
    }
}
function showSidebar() {
    sidebar.classList.add("show-sidebar")
}
function hideSidebar() {
    sidebar.classList.remove("show-sidebar")
}

window.onscroll = function () { shrinkNav() }