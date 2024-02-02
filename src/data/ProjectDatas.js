import {
  bookstore,
  dineSpotter,
  dota2Heros,
  leaderboard,
  siribox,
  spaceTravellers,
  yachtRental,
} from '../assets/images/images';

const projectDatas = [
  {
    title: 'Dine Spotter',
    description:
      "Dine Spotter is a desktop web application that serves as a clone of <a href='https://www.opentable.com/' class='hover:underline text-green-500 dark:text-secondary_light' target='_blank'>OpenTable</a> website. Users can discover available tables based on the number of people, preferred time, and date for their reservation.",
    image: dineSpotter,
    live_link: 'https://dine-spotter.vercel.app',
    github_link: 'https://github.com/K0ppai/Dine-Spotter',
    responsive: 'Desktop',
    tech: ['Next.js', 'TailwindCss', 'Prisma', 'Supabase'],
    built_date: 'December 2023',
    development_type: 'Full-Stack Development',
    goal: 'My goal in building this website is to practice constructing a real-world application and enhance my technical skills using the Next.js framework and TypeScript.',
    key_feature:
      "Dine spotter's key features include search features with filtering system, availability system for the desired booking time, booking system with your party sizes, time and day at your favourite restaurant and finally the authentication sytem",
    lesson_learned:
      'After completing the development of this website, I have acquired a comprehensive skill set that includes effectively implementing middleware, establishing secure authentication using JSON Web Tokens (JWT), incorporating a robust filtering system with search queries, and significantly improving code quality, readability, maintainability, and scalability through the use of TypeScript in my Next.js application.',
    end_point: 'dine-spotter',
  },
  {
    title: 'Yacht Rental',
    description:
      "Yacht Rental, a project I worked on with two fellow developers, is all about renting yachts. We used Ruby on Rails for the behind-the-scenes stuff, React.js for the user-friendly front end, and PostgreSQL to store all the important info. It's pretty simple: users can sign up, log in, and then, on the main page, they'll spot these amazingly eyecatching yachts. If they find one they like, they can easily reserve it in the city they prefer. Smooth sailing all the way!",
    image: yachtRental,
    live_link: 'https://beta-yacht-rental.netlify.app/',
    github_link: 'https://github.com/K0ppai/yacht-rental-backend',
    responsive: 'Responsive',
    tech: ['React', 'Redux', 'TailwindCss', 'Ruby On Rails', 'PostgreSQL'],
    built_date: 'October 2023',
    development_type: 'Full-Stack Development',
    goal: 'In our project, we had a few main goals. First, we wanted to challenge ourselves and test our technical skills with a more demanding project. Our mission was to connect the back-end (created with Ruby on Rails) to the front-end (built with React). We really got to know the ins and outs of both Ruby on Rails and React frameworks. It was super important for us to follow the best practices and coding guidelines for Ruby, RoR, JavaScript, and React. We provided each other with helpful feedback and carried out effective code reviews. Communication was key, and we successfully planned and finished the project without any conflicts. By setting clear working agreements, we made sure our team worked smoothly together. We understood that showing respect for our teammates was vital for building strong relationships, and we were reliable and committed team members. To keep everything organized, we used an empty Kanban board to manage our tasks and time efficiently. In the end, we successfully delivered the project on time.',
    key_feature:
      "We're super proud about how we've made things safe and simple for all users. We've got a system that makes sure there are no duplicate email addresses, so you won't run into any email troubles. When it comes to booking, users can't double-book the same yacht on the same day in the same city, so your reserved yacht stays yours 😉. And for all the reservation info, it's crystal clear. You'll know exactly how long it'll take and what the total cost is. We're all about making things easy and straightforward!",
    lesson_learned:
      "Looking back on my journey, I've learned how to put two different apps online and make them connect together. And here's the best part, I've also learned how to set up strong security with the help of a gem called devise-jwt. It's like having a secret code to keep everything safe and sound!",
    end_point: 'yacht-rental',
  },
  {
    title: 'Dota2 Heros',
    description:
      "Hey there! DOTA2 HEROS is a cool, user-friendly website I built to help you dive into the world of DOTA2 heroes. It's super responsive and lets you explore all those awesome heroes in the game. I used React.js and Redux to create it, and I hooked it up to the OpenDota API for all that amazing hero data. I'm pretty proud to say that I was the one behind the scenes making it happen. So, if you're ready to discover and learn more about your favorite DOTA2 heroes, you're in the right place!",
    image: dota2Heros,
    live_link: 'https://dota2-heros.netlify.app',
    github_link: 'https://github.com/K0ppai/dota2_heros',
    responsive: 'Responsive',
    tech: ['React', 'Redux', 'TailwindCss', 'Rest API'],
    built_date: 'August 2023',
    development_type: 'Front-End Development',
    goal: "The main objective of this project was to put React to work in full swing. I used React components, props, and even set up routing for smooth navigation. Connecting React with Redux was a big part of the game plan, and I got pretty good at handling events within a React app. Plus, I didn't stop there – I even wrote integration and even mock tests using React Testing Library. Styling? You bet! I made sure my React app looked sleek and stylish. I also dived into React's lifecycle methods and followed the best practices and coding style guides to keep things clean and tidy. And, of course, I used store, actions, and reducers like a pro in React. It was a comprehensive journey into the world of React, and I'm pretty pleased with the results!",
    key_feature:
      "This app comes with a handy search feature, giving users the power to easily search for their beloved heroes by name. But what I'm particularly excited about is the hero animation – it's a standout feature. When you head to the hero detail page, you're in for a visually stunning experience. It's something I'm really proud of, and I can't wait for you to check it out!",
    lesson_learned:
      "One tricky part of this project was making things update in real-time as you type. It took some effort to get the app to show results while you were still typing hero names. But you know what? It was a great learning experience. It taught me how to handle real-time updates in web apps, and now I've got that skill in my toolbox.",
    end_point: 'dota2-heros',
  },
  {
    title: 'SiriBox',
    description:
      "SIRIBOX is a friendly website that showcases TV shows and series. To make it all work, we used the TVmaze API to gather info about those shows. We built this project using Pure JavaScript and spiced things up with the Bootstrap CSS framework to make the website look good. I wasn't alone on this journey; I teamed up with another developer to make sure all the cool features came to life. Plus, I put some effort into making the project look stylish and user-friendly.",
    image: siribox,
    live_link: 'https://siribox.netlify.app',
    github_link: 'https://github.com/K0ppai/SiriBox',
    tech: ['JavaScript', 'Bootstrap', 'Rest API'],
    responsive: 'Responsive',
    built_date: 'July 2023',
    development_type: 'Front-End Development',
    goal: "The project had a clear mission: use JavaScript to create lively websites and build straightforward single-page applications. To make it all happen, we embraced the user-friendly ES6 language features and organized our code into neat, modular pieces. We tackled the challenge of handling tasks that happen at different times in a smart way using callbacks and promises. Plus, we made sure our code bundles were nice and tidy with the help of Webpack. We were all about following the best coding rules and style guides to keep things top-notch. Testing was a big deal, so we used the AAA pattern to make sure our JavaScript app was super dependable. Gitflow kept us on track with versions, and we knew how to resolve minor git tiffs. Working with external APIs was a breeze, we just followed the docs. JSON data? No problem, we processed it like pros. Oh, and we didn't forget to make the website super responsive and keep our JavaScript snappy and asynchronous. Plus, we teamed up for code reviews, making sure everything was A-OK and everyone was on the same page.",
    key_feature:
      "To make it easier to find stuff, I added a filter for different show types, like action or comedy. You can also do cool things like 'liking' and leaving comments on your fave shows. When you hit the comment button, a little window pops up with all the info about the show, like the description, rating, and more. Plus, there's a spot to type in your own comments. It's all about making the app more interactive and user-friendly!",
    lesson_learned:
      "When I look back on this project, I realized that I originally set things up to send and get data from the API, and then I'd update likes and comments on the shows. The problem was that there was a bit of a lag when users interacted with the website. Thinking about it now, a smarter way to do it would've been to update what you see on the website first (that's called the DOM), and then send the data to the API. To keep things like likes and comments the same, I could've only fetched data when a user refreshed the page. That way, people wouldn't have to wait as long to see what's going on, making the website smoother to use.",
    end_point: 'siribox',
  },
  {
    title: 'Leaderboard',
    description:
      "The LEADERBOARD project marks another step in my web development journey. It's special because it's my first project where I've used asynchronous JavaScript functions. Plus, I got to work with Microverse's Leaderboard API service, which let me send and fetch data using APIs. Pretty cool, right?",
    image: leaderboard,
    live_link: 'https://leaderboard-list.netlify.app',
    github_link: 'https://github.com/K0ppai/leaderboard-list-app',
    tech: ['JavaScript', 'Bootstrap', 'API'],
    responsive: 'Responsive',
    built_date: 'June 2023',
    development_type: 'Front-End Development',
    goal: "In this project, my main aims are to get the hang of callbacks and promises in JavaScript, make use of the latest ES6 syntax (which is like a fancy way of writing JavaScript), keep my code tidy using ES6 modules, bundle everything neatly with Webpack (it's like organizing your stuff in a backpack), talk to APIs to send and receive data (following the instructions they give), work with JSON (that's a type of data format), make my JavaScript code work more smoothly by making it do multiple things at once, and turn okay-looking plans into a friendly and easy-to-use interface.",
    key_feature:
      "In this project, you can put in your scores, and they go right into the system. What's cool is that the scores get sorted automatically, from the highest to the lowest, so you can easily check out who's leading the pack. And don't worry about your device 😉. The website is designed to fit and work well on all sorts of screens.",
    lesson_learned:
      "This project has been a super learning experience for me. I've picked up some really useful skills, like how to work with stuff that doesn't happen all at the same time (that's what 'asynchronous' means) and how to use those internet connections to get cool data (that's the API part). Plus, I learned about using 'medium-fidelity wireframes,' which is like having a plan for building stuff that's not too fancy but just right.",
    end_point: 'leaderboard',
  },
  {
    title: 'Space Travellers',
    description:
      "I teamed up with another developer to create SPACE TRAVELLERS, and my main job was taking care of the missions part. We used data from the SpaceX API to show off cool missions and rockets. The site has three big pages: one for checking out and reserving rockets, another for diving into missions and getting on board, and a third page where you can see the rockets you've reserved and the missions you've joined. It's all about exploring the universe!",
    image: spaceTravellers,
    live_link: 'https://space-travellers-koppai.netlify.app',
    github_link: 'https://github.com/K0ppai/space_travelers',
    tech: ['React', 'Redux', 'Rest API'],
    responsive: 'Desktop',
    built_date: 'July 2023',
    development_type: 'Front-End Development',
    goal: "The main idea of this project is to build a web app using React. We're using some important tricks and rules to make it great. We're creating different pieces in React, using them together, and making sure everything works smoothly. We're also setting up routes for moving around the app, and we're keeping track of the app's information using Redux. We're making sure that when you click or do something, the app responds nicely. To be extra sure everything's working well, we're testing it too. And of course, we're making the app look good with some styling. We're also using a special feature called React hooks to manage how things change over time. We're following the best ways of doing things in React and keeping the code neat and tidy. Lastly, we're handling the data the app needs really well with a few more tricks.",
    key_feature:
      'On the Rockets page, you can check out all the cool info about rockets and even pick your favorites to book. And guess what? The Missions page is just as awesome. You get to see all the nitty-gritty details about missions and jump right in!',
    lesson_learned:
      "This project taught me the importance of talking things out and making a good plan before we dive into development. I realized how essential it is to figure out stuff like where everyone works and how our folders are organized right from the start. It keeps us from doing the same things twice and keeps our project nice and neat. Plus, it makes sure we're all working together and knowing what's going on.",
    end_point: 'space-travellers',
  },
  {
    title: 'Bookstore',
    description:
      'The BOOKSTORE project was a great learning experience for me. I got to learn how to use React and Redux, which are super handy tools. With the Bookstore API from Microverse, I could do cool stuff like getting books, adding new ones with all their details, and even removing books. It was a fantastic learning journey!',
    image: bookstore,
    live_link: 'https://bookstore-koppai.netlify.app',
    github_link: 'https://github.com/K0ppai/bookstore_app',
    tech: ['React', 'Redux', 'Rest API'],
    responsive: 'Desktop',
    built_date: 'July 2023',
    development_type: 'Front-End Development',
    goal: "The main things I wanted to achieve with this project were pretty simple: get the hang of how to handle stuff like state in an app, work with store, actions, and reducers in React, connect up React and Redux to make them best buddies, and plug into an existing API using Redux to show data on the screen. It's all about getting the pieces to work together smoothly!",
    key_feature:
      "This app does three main things: first, you can check out a list of books. Second, you can add new books, including their genres and authors. And third, you can take books off the list. It's all about making books easy to manage.",
    lesson_learned:
      "Once I wrapped up this project, I picked up some cool tricks. I figured out how to use Redux and React icons to make the app look way cooler. Plus, my coding buddy got me into Tailwind CSS, and taught me how to add a dark mode to websites. I'm proud to say that this project made me a better frontend developer.",
    end_point: 'bookstore',
  },
];
export default projectDatas;
