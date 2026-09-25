const languages = [
  {
    name: "C++",
    tutorials: [
      [
        "Build Your Own Text Editor",
        "Create a terminal text editor and learn input handling, files, buffers, and terminal control.",
        "Intermediate",
        "Editor",
      ],
      [
        "Write a Shell",
        "Build a small Unix-style shell to explore processes, commands, pipes, and system calls.",
        "Intermediate",
        "Systems",
      ],
      [
        "Create a Simple Database",
        "Implement storage, records, indexing, and a basic query layer.",
        "Advanced",
        "Databases",
      ],
      [
        "Build an HTTP Server",
        "Handle TCP connections and HTTP requests without relying on a web framework.",
        "Advanced",
        "Networking",
      ],
      [
        "Build a Compiler",
        "Turn a small programming language into executable output through lexical analysis and parsing.",
        "Advanced",
        "Compilers",
      ],
    ],
  },
  {
    name: "C#",
    tutorials: [
      [
        "Build a Command-Line Todo App",
        "Learn classes, collections, file persistence, validation, and CLI design.",
        "Beginner",
        "CLI",
      ],
      [
        "Build a REST API",
        "Create an API with routing, validation, persistence, and authentication.",
        "Intermediate",
        "Web",
      ],
      [
        "Build a Game with MonoGame",
        "Explore the game loop, sprites, keyboard input, collision, and state management.",
        "Intermediate",
        "Games",
      ],
      [
        "Build a Simple Web Server",
        "Work with sockets and HTTP to understand what happens underneath ASP.NET.",
        "Advanced",
        "Networking",
      ],
    ],
  },
  {
    name: "JavaScript",
    tutorials: [
      [
        "Build a Markdown Editor",
        "Create a browser-based editor using DOM manipulation, events, and local storage.",
        "Beginner",
        "Web",
      ],
      [
        "Build a JavaScript Runtime",
        "Explore parsing, execution, objects, and the core ideas behind a language runtime.",
        "Advanced",
        "Runtimes",
      ],
      [
        "Build a Frontend Framework",
        "Implement reactive state, components, rendering, and event handling.",
        "Advanced",
        "Frontend",
      ],
      [
        "Build a Chat Application",
        "Create a real-time browser chat app and learn WebSockets and server communication.",
        "Intermediate",
        "Networking",
      ],
      [
        "Build a Web Crawler",
        "Fetch pages, extract links, and build a small index of discovered content.",
        "Intermediate",
        "Web",
      ],
    ],
  },
  {
    name: "Python",
    tutorials: [
      [
        "Build a Web Scraper",
        "Fetch pages, parse HTML, extract data, and save structured results.",
        "Beginner",
        "Web",
      ],
      [
        "Build a Command-Line Shell",
        "Implement commands, arguments, environment variables, and process execution.",
        "Intermediate",
        "Systems",
      ],
      [
        "Build a URL Shortener",
        "Create a small web service with generated identifiers and persistent storage.",
        "Intermediate",
        "Web",
      ],
      [
        "Build a Search Engine",
        "Index documents and implement a basic ranking and query system.",
        "Advanced",
        "Search",
      ],
      [
        "Build a Simple Database",
        "Learn records, pages, indexes, serialization, and basic query operations.",
        "Advanced",
        "Databases",
      ],
    ],
  },
  {
    name: "Go",
    tutorials: [
      [
        "Build a Web Server",
        "Use TCP, HTTP, handlers, middleware, and concurrency to create a server from the ground up.",
        "Intermediate",
        "Web",
      ],
      [
        "Build a CLI Application",
        "Create a polished command-line tool with arguments, configuration, and file operations.",
        "Beginner",
        "CLI",
      ],
      [
        "Build a Redis-like Server",
        "Implement a small in-memory key-value server and learn networking and protocols.",
        "Advanced",
        "Databases",
      ],
      [
        "Build a Load Balancer",
        "Distribute HTTP traffic across backend servers and explore health checks.",
        "Advanced",
        "Networking",
      ],
      [
        "Build a Distributed Key-Value Store",
        "Explore replication, node communication, consistency, and failure handling.",
        "Advanced",
        "Distributed",
      ],
    ],
  },
  {
    name: "HTML / CSS",
    tutorials: [
      [
        "Build a Responsive Portfolio",
        "Create a responsive portfolio without a CSS framework and learn layout fundamentals.",
        "Beginner",
        "Frontend",
      ],
      [
        "Build a CSS Framework",
        "Create your own utility classes, grid system, components, and responsive rules.",
        "Intermediate",
        "CSS",
      ],
      [
        "Build a Landing Page",
        "Recreate a modern product page while practicing semantic HTML and responsive CSS.",
        "Beginner",
        "Frontend",
      ],
      [
        "Build a Dashboard",
        "Build cards, tables, navigation, and responsive layouts using CSS Grid and Flexbox.",
        "Intermediate",
        "UI",
      ],
      [
        "Build a Design System",
        "Create reusable typography, spacing, buttons, forms, and component patterns.",
        "Intermediate",
        "UI",
      ],
    ],
  },
  {
    name: "Java",
    tutorials: [
      [
        "Build a REST API",
        "Create a backend service with routing, validation, persistence, and JSON responses.",
        "Intermediate",
        "Web",
      ],
      [
        "Build a Web Crawler",
        "Fetch pages, extract links, and process discovered documents concurrently.",
        "Intermediate",
        "Web",
      ],
      [
        "Build a Chat Server",
        "Use sockets and threads to create a multi-client chat system.",
        "Intermediate",
        "Networking",
      ],
      [
        "Build a Simple JVM",
        "Explore bytecode, a stack-based execution model, and the fundamentals of virtual machines.",
        "Advanced",
        "Runtimes",
      ],
    ],
  },
  {
    name: "Rust",
    tutorials: [
      [
        "Build a Command-Line Tool",
        "Practice ownership, borrowing, error handling, files, and argument parsing.",
        "Beginner",
        "CLI",
      ],
      [
        "Build an HTTP Server",
        "Handle TCP connections, parse HTTP requests, and serve responses.",
        "Intermediate",
        "Networking",
      ],
      [
        "Build a Database",
        "Implement storage and querying while learning Rust's ownership model in depth.",
        "Advanced",
        "Databases",
      ],
      [
        "Build an Interpreter",
        "Create a tokenizer, parser, evaluator, and small programming language.",
        "Advanced",
        "Compilers",
      ],
    ],
  },
  {
    name: "PHP",
    tutorials: [
      [
        "Build a MVC Framework",
        "Implement routing, controllers, models, views, and a simple dependency container.",
        "Advanced",
        "Web",
      ],
      [
        "Build a REST API",
        "Create endpoints, validation, authentication, and database-backed resources.",
        "Intermediate",
        "Web",
      ],
      [
        "Build a Blog",
        "Build a CRUD application with authentication, posts, comments, and an admin area.",
        "Beginner",
        "Web",
      ],
      [
        "Build a Template Engine",
        "Learn how template parsing and variable interpolation work by creating your own engine.",
        "Intermediate",
        "Web",
      ],
    ],
  },
  {
    name: "Ruby",
    tutorials: [
      [
        "Build a Web Framework",
        "Explore routing, requests, responses, middleware, and controller patterns.",
        "Advanced",
        "Web",
      ],
      [
        "Build a CLI Tool",
        "Create a useful terminal application with arguments, configuration, and persistence.",
        "Beginner",
        "CLI",
      ],
      [
        "Build a Simple Interpreter",
        "Implement lexical analysis, parsing, expressions, and evaluation.",
        "Advanced",
        "Compilers",
      ],
    ],
  },
  {
    name: "Swift",
    tutorials: [
      [
        "Build an iOS Todo App",
        "Learn SwiftUI state, lists, navigation, persistence, and app structure.",
        "Beginner",
        "Mobile",
      ],
      [
        "Build a Weather App",
        "Consume a public API and display loading, error, and data states.",
        "Beginner",
        "Mobile",
      ],
      [
        "Build a REST API Client",
        "Create a reusable networking layer for decoding and sending JSON.",
        "Intermediate",
        "Networking",
      ],
    ],
  },
  {
    name: "Kotlin",
    tutorials: [
      [
        "Build an Android App",
        "Create an Android application while learning layouts, state, navigation, and storage.",
        "Beginner",
        "Mobile",
      ],
      [
        "Build a REST API",
        "Build a backend service with routing, JSON, validation, and persistence.",
        "Intermediate",
        "Web",
      ],
      [
        "Build a CLI Application",
        "Create a Kotlin terminal application using files, arguments, and structured data.",
        "Beginner",
        "CLI",
      ],
    ],
  },
  {
    name: "TypeScript",
    tutorials: [
      [
        "Build a Web Application",
        "Create a typed frontend application with state, components, events, and API calls.",
        "Intermediate",
        "Frontend",
      ],
      [
        "Build a CLI Tool",
        "Build a Node.js command-line application with typed configuration and file operations.",
        "Beginner",
        "CLI",
      ],
      [
        "Build a Node.js API",
        "Create a typed REST API with validation, services, and database access.",
        "Intermediate",
        "Backend",
      ],
    ],
  },
  {
    name: "SQL / Databases",
    tutorials: [
      [
        "Build a Database Engine",
        "Explore pages, records, indexes, transactions, and query execution.",
        "Advanced",
        "Databases",
      ],
      [
        "Build a SQL Parser",
        "Tokenize SQL and turn statements into an abstract syntax tree.",
        "Advanced",
        "Compilers",
      ],
      [
        "Build a Query Engine",
        "Implement filtering, projection, sorting, joins, and basic optimization.",
        "Advanced",
        "Databases",
      ],
      [
        "Build a Key-Value Store",
        "Create persistent key-value storage with commands and a simple protocol.",
        "Intermediate",
        "Storage",
      ],
    ],
  },
];

const toc = document.getElementById("tocList");
const sections = document.getElementById("tutorialSections");
const search = document.getElementById("searchInput");
const empty = document.getElementById("emptyState");
const resultCount = document.getElementById("resultCount");

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function render(filter = "") {
  const query = filter.trim().toLowerCase();
  toc.innerHTML = "";
  sections.innerHTML = "";

  let visibleTutorials = 0;

  languages.forEach((language) => {
    const matches = language.tutorials.filter((item) => {
      const haystack = [language.name, ...item].join(" ").toLowerCase();
      return !query || haystack.includes(query);
    });

    if (!matches.length) return;

    visibleTutorials += matches.length;

    const id = slugify(language.name);

    const tocItem = document.createElement("li");
    tocItem.innerHTML = `<a href="#${id}">${language.name}</a>`;
    toc.appendChild(tocItem);

    const section = document.createElement("section");
    section.className = "language-section";
    section.id = id;

    section.innerHTML = `
          <div class="language-heading">
            <h2>${language.name}</h2>
            <span class="language-count">${matches.length} ${matches.length === 1 ? "project" : "projects"}</span>
          </div>
          <div class="tutorial-grid">
            ${matches
              .map(
                (item) => `
              <a class="tutorial"
                 href="https://www.google.com/search?q=${encodeURIComponent(item[0] + " tutorial " + language.name)}"
                 target="_blank"
                 rel="noopener noreferrer">
                <h3>${item[0]} <span class="arrow">↗</span></h3>
                <p>${item[1]}</p>
                <div class="meta">
                  <span class="tag accent">${item[2]}</span>
                  <span class="tag">${item[3]}</span>
                </div>
              </a>
            `,
              )
              .join("")}
          </div>
        `;

    sections.appendChild(section);
  });

  resultCount.textContent = `${visibleTutorials} ${visibleTutorials === 1 ? "tutorial" : "tutorials"} shown`;

  empty.style.display = visibleTutorials ? "none" : "block";
}

search.addEventListener("input", (event) => render(event.target.value));

render();

// Get the current year
var currentYear = new Date().getFullYear();

// Update the content of the element with id="currentYear"
document.getElementById("currentYear").textContent = currentYear;

// back to top
const backToTop = document.getElementById("backToTop");
// Show/hide button when scrolling
window.addEventListener("scroll", () => { if (window.scrollY > 400) { backToTop.classList.add("show"); } else { backToTop.classList.remove("show"); } });

// Scroll smoothly to the top
backToTop.addEventListener("click", () => { window.scrollTo({ top: 0, behavior: "smooth" }); });