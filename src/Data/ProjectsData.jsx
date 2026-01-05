export const allProjects = [
  {
    id: 1,
    type: "elite",
    name: "Book Courier",
    description:
      "BookCourier is a full-stack library delivery platform that connects readers with nearby libraries. It allows users to borrow and return books online without visiting the library. The system focuses on improving accessibility, convenience, and efficient book management.",
    image: "https://i.ibb.co.com/rKphN6Mp/image.png",
    stack: [
      "React 18",
      "Tailwind CSS",
      "DaisyUI",
      "React Router v7",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Firebase Authentication",
    ],
    github: "https://github.com/shehabRabby/Book_Courier_Client",
    live: "https://book-parcel.web.app/",
    challenges:
      "Implementing real-time book availability while ensuring database consistency for multiple concurrent users.",
    improvements:
      "Introducing a recommendation system based on reading history and integrating a built-in PDF reader for eBooks.",
  },
  {
    id: 2,
    type: "elite",
    name: "Library Haven",
    description:
      "HAVEN is a high-performance digital library management dashboard built for curators and readers. It enables seamless book archiving, management, and exploration with a strong focus on modern UI/UX, protected routes, and real-time data handling.",
    image: "https://i.ibb.co.com/wF6B8Bdy/image.png",
    stack: [
      "React 18",
      "Tailwind CSS",
      "DaisyUI",
      "React Router v7",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase Authentication",
    ],
    github: "https://github.com/shehabRabby/My_Library_Client",
    live: "https://bookhaven1001.netlify.app/",
    challenges:
      "Designing a scalable curator dashboard with protected routes while maintaining smooth performance and real-time search across large book collections.",
    improvements:
      "Adding advanced analytics for curators, implementing role-based permissions, and enhancing real-time synchronization for collaborative library management.",
  },
  {
    id: 3,
    type: "elite",
    name: "Game Zone",
    description:
      "An interactive gaming platform that lets users explore and discover games through a modern, responsive UI with sliders, animations, and secure authentication.",
    image: "https://i.ibb.co.com/8gK110bj/image.png",
    stack: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "DaisyUI",
      "Firebase Authentication",
    ],
    github: "https://github.com/shehabRabby/GameZone",
    live: "https://gamezone22.netlify.app/",
    challenges:
      "Balancing smooth animations and interactive sliders while maintaining performance across different devices and screen sizes.",
    improvements:
      "Adding a backend for dynamic game data, implementing user reviews and ratings, and introducing personalized game recommendations.",
  },
  {
    id: 4,
    type: "advanced",
    name: "Find Apps",
    description:
      "A modern and responsive React application that lets users explore trending apps, view detailed insights with charts, and install or uninstall apps through a clean, interactive UI.",
    image: "https://i.ibb.co.com/b5LNCjLP/image.png",
    stack: [
      "React",
      "JavaScript (ES6+)",
      "TailwindCSS",
      "DaisyUI",
      "React Router",
      "Recharts",
      "React Toastify",
    ],
    github: "https://github.com/shehabRabby/Assignment-8-Hero-App",
    live: "https://majestic-gumdrop-4ba909.netlify.app/",
    challenges:
      "Synchronizing installed app state with local storage while maintaining smooth navigation, sorting, and toast notifications across multiple pages.",
    improvements:
      "Adding backend support for real-time app data, user authentication, and personalized app recommendations based on usage patterns.",
  },
  {
    id: 5,
    type: "advanced",
    name: "Home Decor",
    description:
      "A React-based home decor showcase application where users can explore room decoration items, view details, and simulate purchasing through a clean and interactive UI.",
    image: "https://i.ibb.co.com/bM8YG7S3/image.png",
    stack: [
      "React",
      "JavaScript (ES6+)",
      "React Router",
      "TailwindCSS",
      "React Toastify",
      "SweetAlert2",
    ],
    github: "https://github.com/shehabRabby/Home-Decore-Project",
    live: "https://keen-dango-5c2f22.netlify.app/",
    challenges:
      "Managing smooth navigation and alert-based user interactions while keeping the UI responsive across different devices.",
    improvements:
      "Adding a backend for real product purchases, user authentication, and a wishlist feature for saving favorite decor items.",
  },

  {
    id: 6,
    type: "advanced",
    name: "Boi Poka",
    description:
      "A React web app where users can browse books, view details, add to wishlist, and manage selections through an interactive and responsive UI.",
    image: "https://i.ibb.co.com/hRJWvPJB/image.png",
    stack: [
      "React",
      "JavaScript (ES6+)",
      "React Router",
      "TailwindCSS",
      "React Toastify",
      "SweetAlert2",
    ],
    github: "https://github.com/shehabRabby/BoiPoka-Website",
    live: "https://roaring-unicorn-8ee474.netlify.app/",
    challenges:
      "Keeping wishlist and book details synchronized across components while maintaining smooth performance and responsive UI.",

    improvements:
      "Adding backend support for persistent user data, implementing search and filter by category, and integrating user reviews and ratings.",
  },
  {
    id: 7,
    type: "advanced",
    name: "Dragon News",
    description:
      "A responsive React news platform fetching real-time articles from the Programming Hero API, allowing users to explore categories and read full articles with secure authentication.",
    image: "https://i.ibb.co.com/PGfVn7VV/image.png",
    stack: [
      "React",
      "DaisiUI",
      "FireBase",
      "React Router",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
    github: "https://github.com/shehabRabby/Dragon-News-",
    live: "https://dragon-news-firebase-d7ca5.web.app/",
    challenges:
      "Integrating real-time API data while ensuring smooth navigation, responsive design, and maintaining secure authentication flows.",

    improvements:
      "Adding personalized news recommendations, user bookmarks, and comment functionality for a more interactive reading experience.",
  },
  {
    id: 8,
    type: "beginner",
    name: "Hotline Services",
    description:
      "A JavaScript-based web app where users can quickly call or copy emergency numbers in Bangladesh, featuring interactive UI and DOM manipulation.",
    image: "https://i.ibb.co.com/wZJy9tZy/image.png",
    stack: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "DOM Manipulation",
      "Local Storage API",
      "Responsive Design",
    ],
    github: "https://github.com/shehabRabby/Hotline-Emergency-call",
    live: "https://flourishing-custard-417a5a.netlify.app/",
    challenges:
      "Ensuring smooth DOM manipulation for dynamic emergency numbers and correctly managing data in local storage for persistence and quick access.",
    improvements:
      "Adding search and filter functionality, a favorites list for frequently used numbers, and visual notifications or alerts for better user interaction.",
  },
  {
    id: 9,
    type: "beginner",
    name: "Help Desk Portal",
    description:
      "A JavaScript and Tailwind CSS-based Help Desk app that tracks tickets, displaying counts for pending, reviewed, and submitted requests with a clean, interactive UI.",
    image: "https://i.ibb.co.com/HDcBgrby/image.png",
    stack: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "DOM Manipulation",
      "Local Storage API",
      "Responsive Design",
    ],
    github: "https://github.com/shehabRabby/Final-Project-Client",
    live: "https://tourmaline-melba-67f57d.netlify.app/",
    Challenges:
      "Managing dynamic DOM updates for ticket statuses and ensuring accurate real-time counts while keeping the UI responsive and intuitive.",
    Improvements:
      "Adding persistent storage with local storage or backend integration, implementing ticket filtering and sorting, and enabling notifications for status changes.",
  },
  {
    id: 10,
    type: "beginner",
    name: "Green Earth",
    description:
      "A React/Tailwind app showcasing trees by category, allowing users to explore details and view selected tree information via interactive modals.",
    image: "https://i.ibb.co.com/0Vdyrq8G/image.png",
    stack: ["JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/shehabRabby/Assignment-6-Green-World",
    live: "https://github.com/shehabRabby/Assignment-6-Green-World",
    Challenges:
      "Managing dynamic rendering of category-based trees and modal interactions while keeping the UI responsive and intuitive.",

    Improvements:
      "Adding a search and filter for trees, persistent storage for favorite trees, and enhanced visuals with animations for a more engaging experience.",
  },
  {
    id: 11,
    type: "beginner",
    name: "Green Earth",
    description:
      "A responsive e-commerce website built with HTML and CSS, showcasing products and layouts to practice web design and front-end fundamentals.",
    image: "https://i.ibb.co.com/mVF6snkb/image.png",
    stack: ["HTML5", "CSS3"],
    github: "https://github.com/shehabRabby/Panda_Ecomerce_Project",
    live: "https://shehabrabby.github.io/Panda_Ecomerce_Project/",
    Challenges:
      "Creating a fully responsive layout with pure HTML and CSS while maintaining consistent styling across devices.",

    Improvements:
      "Adding interactivity with JavaScript, a working shopping cart, and a product filtering/search feature for a more complete e-commerce experience.",
  },
  {
    id: 12,
    type: "beginner",
    name: "Amazon Clone",
    description:
      "A simple Amazon-inspired e-commerce UI built using pure HTML and CSS to practice layout structuring, responsive design, and UI styling fundamentals.",
    image: "https://i.ibb.co.com/BHXgjxFh/image.png",
    stack: ["HTML5", "CSS3"],
    github: "https://github.com/shehabRabby/Amazon_Clone",
    live: "https://shehabrabby.github.io/Amazon_Clone/",
    Challenges:
      "Replicating a complex e-commerce layout like Amazon using only HTML and CSS, managing responsiveness across different screen sizes, and maintaining consistent spacing and alignment.",
    Improvements:
      "Adding JavaScript for interactivity such as search, cart functionality, and dynamic product rendering, improving accessibility, and optimizing the UI for better performance and user experience.",
  },
];
