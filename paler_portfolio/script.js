/* =====================================================
   CONTENT DATA — edit these arrays to update the site
   ===================================================== */

const projects = [
  {
    number: "01",
    title: "My First Project Using Arduino: Creating an Assistive Device",
    description: "An Arduino-based assistive device prototype designed to use electronics and embedded programming to support users with everyday tasks. This project introduced me to building practical technology with hardware.",
    image: "assets/project-1.png",
    technologies: ["Arduino", "C/C++", "Electronics", "Prototyping"],
    github: "#",
    demo: "#",
    role: "Hardware & software developer",
    challenges: "Learning how to connect the Arduino with the required electronic components and make the hardware work reliably with the program.",
    solution: "Built and tested the device as a hands-on prototype, writing Arduino code to coordinate its components and refining the setup through iteration.",
    features: [
      "Arduino-powered assistive device prototype",
      "Combines embedded code with electronic components",
      "Designed to provide practical assistance to users",
      "Built and tested through hands-on iteration"
    ]
  },
  {
    number: "02",
    title: "MySQL Database Creation & Management",
    description: "A database project focused on creating and managing a relational database with MySQL. It organizes related information into structured tables and supports consistent record management.",
    image: "assets/project-2.png",
    technologies: ["MySQL", "SQL", "Relational Database Design"],
    github: "#",
    demo: "#",
    role: "Systems design & development",
    challenges: "Planning a clear database structure and keeping related records organized and consistent as the database is managed.",
    solution: "Created a relational structure with connected tables and used MySQL to organize and manage the project data.",
    features: [
      "Relational database created with MySQL",
      "Information organized into structured tables",
      "Related records connected through database relationships",
      "Project data managed using SQL"
    ]
  },
  {
    number: "03",
    title: "Interactive Resume Website",
    description: "A fun, visually engaging online resume that presents my background, skills, and projects in an interactive format, highlighting my web development, database design, and creative problem-solving skills.",
    image: "assets/project-3.png",
    technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
    github: "#",
    demo: "#",
    role: "Web developer & designer",
    challenges: "Presenting resume information clearly while making the experience engaging and easy to explore across screen sizes.",
    solution: "Designed a polished, responsive resume experience that organizes key information into clear sections and uses interactive project details to invite exploration.",
    features: [
      "Interactive project cards with expanded details",
      "Clear presentation of skills and project work",
      "Responsive layout for desktop and mobile",
      "Visual design consistent with my portfolio"
    ]
  }
];

const technologies = [
  { name: "HTML5", category: "Markup" },
  { name: "CSS3", category: "Styling" },
  { name: "JavaScript", category: "Language" },
  { name: "React", category: "Framework" },
  { name: "React Native", category: "Framework" },
  { name: "TypeScript", category: "Language" },
  { name: "CakePHP", category: "Framework" },
  { name: "Git", category: "Tooling" },
  { name: "GitHub", category: "Tooling" },
  { name: "MySQL", category: "Database" },
  { name: "Bootstrap", category: "Framework" },
  { name: "Figma", category: "Design" }
];

const techIcon = `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M8 5 3 12l5 7M16 5l5 7-5 7M14 3l-4 18"/></svg>`;

/* =====================================================
   1. NAVIGATION
   ===================================================== */
function initNavScroll() {
  const nav = document.getElementById("floatingNav");
  const onScroll = () => {
    nav.classList.toggle("scrolled", window.scrollY > 24);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function initActiveSectionTracking() {
  const sections = ["home", "about", "work", "contact"];
  const links = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((link) => {
            link.classList.toggle(
              "active",
              link.dataset.section === entry.target.id
            );
          });
        }
      });
    },
    { rootMargin: "-45% 0px -45% 0px" }
  );

  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
}

/* =====================================================
   2. MOBILE MENU
   ===================================================== */
function initMobileMenu() {
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("mobileMenu");

  function closeMenu() {
    menu.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
  }

  function openMenu() {
    menu.classList.add("open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
  }

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.contains("open");
    isOpen ? closeMenu() : openMenu();
  });

  menu.querySelectorAll(".mobile-link").forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
      const target = link.dataset.tabTarget;
      if (target) {
        setTimeout(() => activateTab(target), 350);
      }
    });
  });

  document.addEventListener("click", (e) => {
    if (
      menu.classList.contains("open") &&
      !menu.contains(e.target) &&
      !toggle.contains(e.target)
    ) {
      closeMenu();
    }
  });
}

/* =====================================================
   3. SMOOTH SCROLLING (nav CTA / desktop links with tab targets)
   ===================================================== */
function initTabTargetLinks() {
  document.querySelectorAll(".nav-link[data-tab-target]").forEach((link) => {
    link.addEventListener("click", () => {
      setTimeout(() => activateTab(link.dataset.tabTarget), 350);
    });
  });
}

/* =====================================================
   4. PORTFOLIO TABS
   ===================================================== */
function activateTab(tabName) {
  const tabs = document.querySelectorAll(".tab");
  const panels = document.querySelectorAll(".tab-panel");

  tabs.forEach((tab) => {
    const isActive = tab.dataset.tab === tabName;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", isActive ? "true" : "false");
  });

  panels.forEach((panel) => {
    const isActive = panel.id === `panel-${tabName}`;
    panel.classList.toggle("active", isActive);
    panel.hidden = !isActive;
  });

  moveTabIndicator();
}

function moveTabIndicator() {
  const activeTab = document.querySelector(".tab.active");
  const indicator = document.getElementById("tabIndicator");
  if (!activeTab || !indicator) return;
  indicator.style.width = `${activeTab.offsetWidth}px`;
  indicator.style.transform = `translateX(${activeTab.offsetLeft - 5}px)`;
}

function initTabs() {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => activateTab(tab.dataset.tab));
  });
  window.addEventListener("resize", moveTabIndicator);
  requestAnimationFrame(moveTabIndicator);
}

/* =====================================================
   5. PROJECT RENDERING
   ===================================================== */
function renderProjects() {
  const grid = document.getElementById("projectGrid");
  grid.innerHTML = projects
    .map(
      (p, i) => `
    <article class="project-card" data-index="${i}" tabindex="0" role="button" aria-label="View details for ${p.title}">
      <div class="card-media${p.number === "03" ? " card-media-portrait" : ""}">
        <img src="${p.image}" alt="${p.title} preview" loading="lazy">
      </div>
      <div class="card-body">
        <span class="card-number">${p.number}</span>
        <h3 class="card-title">${p.title}</h3>
        <p class="card-desc">${p.description}</p>
        <div class="card-tags">
          ${p.technologies.map((t) => `<span class="card-tag">${t}</span>`).join("")}
        </div>
        <div class="card-footer">
          <div class="card-links">
            <a href="${p.github}" target="_blank" rel="noopener" onclick="event.stopPropagation()">GitHub</a>
            <a href="${p.demo}" target="_blank" rel="noopener" onclick="event.stopPropagation()">Live Demo</a>
          </div>
          <span class="card-arrow" aria-hidden="true">↗</span>
        </div>
      </div>
    </article>`
    )
    .join("");

  grid.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", () => openProjectModal(Number(card.dataset.index)));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openProjectModal(Number(card.dataset.index));
      }
    });
  });

  observeCardReveal(grid.querySelectorAll(".project-card"));
}

function observeCardReveal(cards) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          entry.target.style.animationDelay = `${i * 0.08}s`;
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  cards.forEach((card) => observer.observe(card));
}

/* =====================================================
   6. PROJECT MODAL
   ===================================================== */
function openProjectModal(index) {
  const p = projects[index];
  const modal = document.getElementById("projectModal");

  document.getElementById("modalImage").src = p.image;
  document.getElementById("modalImage").alt = `${p.title} screenshot`;
  modal.querySelector(".modal-image-wrap").classList.toggle("modal-image-portrait", p.number === "03");
  document.getElementById("modalNumber").textContent = p.number;
  document.getElementById("modalTitle").textContent = p.title;
  document.getElementById("modalDesc").textContent = p.description;
  document.getElementById("modalRole").textContent = p.role;
  document.getElementById("modalChallenges").textContent = p.challenges;
  document.getElementById("modalSolution").textContent = p.solution;
  document.getElementById("modalGithub").href = p.github;
  document.getElementById("modalDemo").href = p.demo;

  document.getElementById("modalTags").innerHTML = p.technologies
    .map((t) => `<span class="card-tag">${t}</span>`)
    .join("");

  document.getElementById("modalFeatures").innerHTML = p.features
    .map((f) => `<li>${f}</li>`)
    .join("");

  openModal(modal);
}

/* --- shared modal open/close logic --- */
function openModal(modal) {
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal(modal) {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  const anyOpen = document.querySelector(".modal-backdrop.open");
  if (!anyOpen) document.body.style.overflow = "";
}

function initModals() {
  const projectModal = document.getElementById("projectModal");

  document.getElementById("modalClose").addEventListener("click", () => closeModal(projectModal));

  projectModal.addEventListener("click", (e) => {
    if (e.target === projectModal) closeModal(projectModal);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && projectModal.classList.contains("open")) closeModal(projectModal);
  });
}

/* =====================================================
   9. TECH STACK RENDERING
   ===================================================== */
function renderStack() {
  const grid = document.getElementById("stackGrid");
  grid.innerHTML = technologies
    .map(
      (t) => `
    <div class="stack-card">
      <span class="stack-icon">${techIcon}</span>
      <span class="stack-name">${t.name}</span>
      <span class="stack-category">${t.category}</span>
    </div>`
    )
    .join("");
}

/* =====================================================
   10. SCROLL REVEAL
   ===================================================== */
function initScrollReveal() {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  items.forEach((item) => observer.observe(item));
}

/* =====================================================
   11. CONTACT FORM
   ===================================================== */
function validateField(input, errorEl, validator) {
  const row = input.closest(".form-row");
  const value = input.value.trim();
  const message = validator(value);

  if (message) {
    row.classList.add("error");
    errorEl.textContent = message;
    return false;
  }
  row.classList.remove("error");
  errorEl.textContent = "";
  return true;
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const fields = {
    name: { input: document.getElementById("name"), error: document.getElementById("nameError") },
    email: { input: document.getElementById("email"), error: document.getElementById("emailError") },
    subject: { input: document.getElementById("subject"), error: document.getElementById("subjectError") },
    message: { input: document.getElementById("message"), error: document.getElementById("messageError") }
  };

  const submitBtn = document.getElementById("submitBtn");
  const successEl = document.getElementById("formSuccess");

  function runValidation() {
    const validName = validateField(fields.name.input, fields.name.error, (v) =>
      v.length === 0 ? "Please enter your name." : ""
    );
    const validEmail = validateField(fields.email.input, fields.email.error, (v) => {
      if (v.length === 0) return "Please enter your email.";
      if (!isValidEmail(v)) return "Please enter a valid email address.";
      return "";
    });
    const validSubject = validateField(fields.subject.input, fields.subject.error, (v) =>
      v.length === 0 ? "Please enter a subject." : ""
    );
    const validMessage = validateField(fields.message.input, fields.message.error, (v) =>
      v.length < 10 ? "Message should be at least 10 characters." : ""
    );
    return validName && validEmail && validSubject && validMessage;
  }

  Object.values(fields).forEach(({ input }) => {
    input.addEventListener("blur", runValidation);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!runValidation()) return;

    submitBtn.classList.add("loading");
    submitBtn.disabled = true;
    successEl.classList.remove("show");

    // Frontend-only success state.
    // To actually send messages, connect a backend or a form service
    // (e.g. Formspree, EmailJS, or a custom API endpoint) here.
    setTimeout(() => {
      submitBtn.classList.remove("loading");
      submitBtn.disabled = false;
      successEl.textContent = "Message sent — I'll get back to you soon.";
      successEl.classList.add("show");
      form.reset();
    }, 1100);
  });
}

/* =====================================================
   12. CUSTOM CURSOR & UTILITIES
   ===================================================== */
function initCustomCursor() {
  const isTouch = window.matchMedia("(pointer: coarse)").matches;
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (isTouch || prefersReduced) return;

  document.documentElement.classList.add("has-cursor");
  const dot = document.getElementById("cursorDot");

  window.addEventListener("mousemove", (e) => {
    dot.style.left = `${e.clientX}px`;
    dot.style.top = `${e.clientY}px`;
  });

  const hoverTargets = "a, button, .project-card, .stack-card, input, textarea";
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(hoverTargets)) dot.classList.add("expand");
  });
  document.addEventListener("mouseout", (e) => {
    if (e.target.closest(hoverTargets)) dot.classList.remove("expand");
  });
}

/* =====================================================
   INIT
   ===================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initNavScroll();
  initActiveSectionTracking();
  initMobileMenu();
  initTabTargetLinks();
  initTabs();

  renderProjects();
  renderStack();

  initModals();
  initScrollReveal();
  initContactForm();
  initCustomCursor();
});
