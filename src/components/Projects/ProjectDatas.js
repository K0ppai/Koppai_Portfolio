import {
  bookstore,
  dota2Heros,
  leaderboard,
  siribox,
  spaceTravellers,
  todo,
} from '../../assets/images/images';

const projectDatas = [
  {
    id: 1,
    title: 'Dota2 Heros',
    description:
      '"DOTA2 HEROS" is a responsive website designed to help users explore and learn about all the heroes featured in the DOTA2 game. The project was developed using React.js and Redux, and it leverages the OpenDota API for data retrieval. I served as the sole developer for this project.',
    image: dota2Heros,
    live_link: 'https://dota2-heros.netlify.app',
    github_link: 'https://github.com/K0ppai/dota2_heros',
    responsive: 'Responsive',
    tech: ['React', 'Redux', 'TailwindCss', 'Rest API'],
    built_date: 'August 2023',
    development_type: 'Front-End Development',
    goal: 'The goal of this project was to use react components, react props, react router, connect react and redux, handle events in a react app, write integration tests with a react testing library, use styles in a react app, use react life cycle methods, apply react best practices and language style guides in code, use store, actions and reducers in react.',
    key_feature:
      'This app provides search feature which allows users to have the capability to search for their favorite heroes by name. One of the standout features that I take great pride in is the hero animation, which you can experience when visiting the hero detail page.',
    lesson_learned:
      'One of the notable challenges I encountered during this project was implementing real-time dynamic rendering. Ensuring that the app updated and displayed results as users typed hero names was a complex task. However, this project served as a valuable learning experience, equipping me with the skills to master dynamic rendering in web applications.',
  },
  {
    id: 2,
    title: 'SiriBox',
    description:
      'SiriBox is a responsive website that exhibits TV shows and series. It utilizes the TVmaze API to obtain information about these shows. This project is developed using Pure JavaScript, coupled with the Bootstrap CSS framework to enhance the overall appearance of the website. I collaborated with another developer on implementing the functionalities, while also investing time in refining the UI designs of the project.',
    image: siribox,
    live_link: 'https://siribox.netlify.app',
    github_link: 'https://github.com/K0ppai/SiriBox',
    tech: ['JavaScript', 'Bootstrap', 'Rest API'],
    responsive: 'Responsive',
    built_date: 'July 2023',
    development_type: 'Front-End Development',
    goal: "The project's main goals were to use JavaScript for creating dynamic websites and developing basic single-page applications. This involved adopting the ES6 syntax and modular code structure. Additionally, it aimed to handle asynchronous tasks efficiently using callbacks and promises, optimize code bundling with Webpack, and maintain high coding standards by following best practices and style guides. This project implemented the AAA pattern for unit testing to ensure the reliability of the JavaScript app and followed Gitflow for organized version control. It also dealt with simple git conflicts, interacted with external APIs by referring to their documentation, and effectively processed data in JSON format. Prioritizing website responsiveness, making JavaScript code asynchronous was essential. We conducted code reviews to promote collaboration and uphold code quality among team members.",
    key_feature:
      'To enhance searchability, I included a filtering feature based on the genre of the shows. Users can make interactions by giving likes and comments on their favorite shows. By clicking the comment button, a pop-up window will appear with details such as the description, rating, IMDB ID, genre, type of show, and a form for adding new comments.',
    lesson_learned:
      "Reflecting on the project, I initially designed functions to send and retrieve data from the API and then update likes and comments on the shows. However, this approach caused a delay in displaying the added likes and comments when users interacted with the website. In hindsight, a more efficient approach would have been to first update the website's display (DOM) and then send the data to the API. To keep the likes and comments consistent, data fetching could have been implemented only when a user reloads the page. This would have improved the user experience by reducing delays in showing interactions.",
  },
  {
    id: 3,
    title: 'Leaderboard',
    description:
      "Leaderboard project is an another stepping stone in my web development journey. It's my first project where I've used asynchronous JavaScript functions. I've used Microverse's Leaderboard API service which enabled me to send and retrieve data via API.",
    image: leaderboard,
    live_link: 'https://leaderboard-list.netlify.app',
    github_link: 'https://github.com/K0ppai/leaderboard-list-app',
    tech: ['JavaScript', 'Bootstrap', 'API'],
    responsive: 'Responsive',
    built_date: 'June 2023',
    development_type: 'Front-End Development',
    goal: 'In this project, my main goals are to get comfortable with callbacks and promises in JavaScript, use the latest ES6 syntax, organize my code with ES6 modules, bundle everything neatly using Webpack, interact with APIs to send and receive data (following API documentation), work with JSON, make my JavaScript code asynchronous for smoother execution, and translate medium-fidelity wireframes into a user-friendly interface.',
    key_feature:
      "In this project, users can input their scores, which are then stored in the API. These scores are automatically sorted from the highest to the lowest, making it easy to see who's at the top. Plus, the website is designed to be responsive, so it looks and works great on all kinds of devices.",
    lesson_learned:
      "This project has been a fantastic learning experience for me. I've gained valuable skills in working with asynchronous functions and APIs. It's also introduced me to the concept of using medium-fidelity wireframes to plan and build projects.",
  },
  {
    id: 4,
    title: 'Space Travellers',
    description:
      'Space Travellers is a web application.Users can interact with the application by joining a mission, leaving a mission,reserving rockets and viewing the list of missions and rockets.',
    image: spaceTravellers,
    live_link: 'https://space-travellers-koppai.netlify.app',
    github_link: 'https://github.com/K0ppai/space_travelers',
    tech: ['React', 'Redux', 'Rest API'],
    responsive: 'Desktop',
    built_date: 'July 2023',
    development_type: 'Front-End Development',
    goal: 'project goal',
    key_feature: 'Project key feature',
    lesson_learned: 'Lessons learned during building project',
  },
  {
    id: 5,
    title: 'Bookstore',
    description:
      '[Bookstore] is a web application that allows users to add and remove books from a Book list. The project was built with React.js.',
    image: bookstore,
    live_link: 'https://bookstore-koppai.netlify.app',
    github_link: 'https://github.com/K0ppai/bookstore_app',
    tech: ['React', 'Redux', 'Rest API'],
    responsive: 'Desktop',
    built_date: 'July 2023',
    development_type: 'Front-End Development',
    goal: 'project goal',
    key_feature: 'Project key feature',
    lesson_learned: 'Lessons learned during building project',
  },
  {
    id: 6,
    title: 'Todo List',
    description: 'This is project 1',
    image: todo,
    live_link: 'https://todo-koppai.netlify.app',
    github_link: 'https://github.com/K0ppai/to-do-list-app',
    tech: ['JavaScript', 'Local Storage'],
    responsive: 'Responsive',
    built_date: 'June 2023',
    development_type: 'Front-End Development',
    goal: 'project goal',
    key_feature: 'Project key feature',
    lesson_learned: 'Lessons learned during building project',
  },
];
export default projectDatas;
