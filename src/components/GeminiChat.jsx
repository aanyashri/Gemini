import React, { useState } from 'react';
import './GeminiChat.css'; 


const fetchGeminiResponse = (input) => {
  const trimmedInput = input.trim().toLowerCase();
  
  
    switch (trimmedInput) {
      case 'hello':
        return 'Hello! How can I assist you today?';
      case 'what is gemini ai?':
        return 'Gemini AI is an advanced chatbot designed to assist with queries.';
      case 'what is react':
        return 'React is a JavaScript library for building user interfaces, maintained by Facebook.';
        case 'what is jsx':
      return 'JSX stands for JavaScript XML. It allows you to write HTML inside JavaScript and makes the syntax similar to HTML in React components.';
    case 'what is a component in react':
      return 'A component in React is a reusable piece of code that represents part of the UI. Components can be class-based or function-based.';
    case 'what are props in react':
      return 'Props are short for properties. They are used to pass data from one component to another in React.';
    case 'what is state in react':
      return 'State in React is an object that holds the dynamic data of a component. It allows components to create and manage their own data.';
    case 'what is useState hook':
      return 'The useState hook is a function that allows you to add state to a functional component in React. It returns the current state and a function to update it.';
    case 'what is useEffect hook':
      return 'The useEffect hook allows you to perform side effects in function components, like fetching data, updating the DOM, and timers.';
    case 'what is virtual dom':
      return 'The Virtual DOM is a lightweight copy of the actual DOM. React uses it to optimize updates by only re-rendering the parts of the UI that have changed.';
    case 'what is react router':
      return 'React Router is a library that allows you to add routing to a React application, making it possible to navigate between different components and pages.';
    case 'what is redux in react':
      return 'Redux is a state management library often used with React to help manage the state of an application in a predictable and consistent way.';
    case 'what is a higher-order component':
      return 'A Higher-Order Component (HOC) is a function that takes a component and returns a new component with additional props or behavior.';
    case 'what is context api':
      return 'The Context API in React allows you to pass data through the component tree without having to pass props manually at every level.';
    case 'what are hooks in react':
      return 'Hooks are special functions in React that let you use state and other React features in functional components without writing a class.';
    case 'what is a functional component':
      return 'A functional component in React is a JavaScript function that returns JSX. It is a simpler way to create components that do not have their own state or lifecycle methods.';
    case 'what is a class component':
      return 'A class component is a React component that is defined as a JavaScript class. It can manage its own state and use lifecycle methods.';
    case 'what are lifecycle methods in react':
      return 'Lifecycle methods are functions that get called at different stages of a component’s lifecycle, such as when it mounts, updates, or unmounts.';
    case 'what is render method in react':
      return 'The render method in React is responsible for describing the UI output of a component. It returns JSX or null.';
    case 'what is react fragment':
      return 'React Fragment is a wrapper component that allows you to group a list of children elements without adding extra nodes to the DOM.';
    case 'what is reconciliation in react':
      return 'Reconciliation is the process by which React updates the DOM by comparing the current virtual DOM with the previous one and only updating the parts that have changed.';
    case 'what is lazy loading in react':
      return 'Lazy loading in React is a technique to load components only when they are needed, improving performance by reducing the initial loading time.';
    case 'what is suspense in react':
      return 'Suspense is a component in React that allows you to defer rendering part of your component tree until some asynchronous operation (like data fetching) has completed.';
    case 'what is react.memo':
      return 'React.memo is a higher-order component that optimizes performance by memoizing a component and preventing unnecessary re-renders if its props don’t change.';
    case 'what is useMemo hook':
      return 'The useMemo hook in React is used to memoize expensive computations, so they are only re-computed when their dependencies change.';
    case 'what is useCallback hook':
      return 'The useCallback hook returns a memoized version of the callback function, preventing unnecessary re-creation of the function on every render.';
    case 'what is a key in react':
      return 'A key is a unique identifier that React uses to efficiently update and re-render list items when their order or content changes.';
    case 'what is the difference between props and state in react':
      return 'Props are passed from parent to child components, while state is managed within the component itself. Props are immutable, while state is mutable.';
    case 'what is lifting state up in react':
      return 'Lifting state up is a technique in React where you move state from a child component to the nearest common ancestor, so multiple components can share and update that state.';
    case 'what is controlled component in react':
      return 'A controlled component in React is an input element whose value is controlled by React’s state. The value is always determined by the component’s state.';
    case 'what is uncontrolled component in react':
      return 'An uncontrolled component in React is an input element where the value is managed by the DOM itself, instead of being controlled by React state.';
    case 'what is portals in react':
      return 'Portals in React provide a way to render children into a different DOM node outside the component hierarchy of the parent component.';
    case 'what is error boundary in react':
      return 'Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, preventing the entire app from crashing.';
    case 'what is hydration in react':
      return 'Hydration is the process of taking a static HTML page (usually server-rendered) and making it interactive by attaching event handlers using React.';
    case 'what is server-side rendering in react':
      return 'Server-side rendering (SSR) is the process of rendering React components on the server, which results in faster initial load times and improved SEO.';
    case 'what is react ref':
      return 'Refs in React provide a way to access and manipulate DOM elements or React components directly.';
    case 'what is prop drilling in react':
      return 'Prop drilling refers to passing data from a parent component to deeply nested child components by passing props through each intermediary component.';
    case 'what is react strict mode':
      return 'React Strict Mode is a tool that highlights potential problems in an application, such as deprecated lifecycle methods or unsafe code patterns.';
    case 'what is react concurrent mode':
      return 'Concurrent Mode is an experimental set of React features that help apps stay responsive by rendering trees without blocking the main thread.';
    case 'what is a pure component in react':
      return 'A Pure Component in React is a class component that implements a shallow comparison of props and state to prevent unnecessary re-renders.';
      case 'goodbye':
        return 'Goodbye! Have a great day!';
      case 'what is js':
        return 'JavaScript (JS) is a programming language used to make web pages interactive. It runs in web browsers and is commonly used for things like dynamic content and interactive elements.';
      case 'what is html':
        return 'HTML stands for HyperText Markup Language, used to structure content on the web.';
      case 'what is css':
        return 'CSS stands for Cascading Style Sheets, used to style and layout web pages.';
      case 'what is node.js':
        return 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine, used for building server-side applications.';
      case 'what is npm':
        return 'npm is a package manager for JavaScript, and it is the default package manager for Node.js.';
      case 'what is vue':
        return 'Vue.js is a progressive JavaScript framework for building user interfaces and single-page applications.';
      case 'what is angular':
        return 'Angular is a platform and framework for building client-side applications using HTML, CSS, and JavaScript/TypeScript.';
      case 'what is typescript':
        return 'TypeScript is a superset of JavaScript that adds static typing to the language.';
      case 'what is bootstrap':
        return 'Bootstrap is a front-end framework for developing responsive and mobile-first websites using HTML, CSS, and JS.';
      case 'what is git':
        return 'Git is a distributed version control system used to track changes in code and collaborate on software projects.';
      case 'what is github':
        return 'GitHub is a platform for hosting and collaborating on Git repositories.';
      case 'what is api':
        return 'An API (Application Programming Interface) is a set of protocols for building and interacting with software applications.';
      case 'what is json':
        return 'JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate.';
      case 'what is ajax':
        return 'AJAX (Asynchronous JavaScript and XML) is a set of techniques for making asynchronous web requests without reloading the page.';
      case 'what is dom':
        return 'DOM (Document Object Model) is a programming interface for web documents, representing the page structure as a tree of nodes.';
      case 'what is jquery':
        return 'jQuery is a fast, small, and feature-rich JavaScript library that simplifies tasks like HTML document traversal, event handling, and animations.';
      case 'what is express.js':
        return 'Express.js is a web framework for Node.js, designed to build web applications and APIs.';
      case 'what is mongodb':
        return 'MongoDB is a NoSQL, document-oriented database used for storing large volumes of unstructured data.';
      case 'what is sql':
        return 'SQL (Structured Query Language) is a language used for managing and manipulating relational databases.';
      case 'what is postgresql':
        return 'PostgreSQL is an advanced open-source relational database management system that supports both SQL and NoSQL queries.';
      case 'what is rest':
        return 'REST (Representational State Transfer) is an architectural style for designing networked applications, relying on stateless communication.';
      case 'what is graphql':
        return 'GraphQL is a query language for APIs and a runtime for executing queries, allowing clients to request exactly the data they need.';
      case 'what is docker':
        return 'Docker is a platform for developing, shipping, and running applications inside containers.';
      case 'what is kubernetes':
        return 'Kubernetes is an open-source system for automating the deployment, scaling, and management of containerized applications.';
      case 'what is ci/cd':
        return 'CI/CD stands for Continuous Integration and Continuous Deployment/Delivery, automating the process of integrating code and deploying it to production.';
      case 'what is agile':
        return 'Agile is a project management and software development methodology focused on iterative development, collaboration, and flexibility.';
      case 'what is scrum':
        return 'Scrum is a framework for Agile project management that organizes development work into time-boxed iterations called sprints.';
      case 'what is kanban':
        return 'Kanban is a visual project management method used in Agile to visualize work, limit work in progress, and maximize efficiency.';
      case 'what is python':
        return 'Python is a high-level, interpreted programming language known for its simplicity and readability, widely used for web development, data analysis, and automation.';
      case 'what is java':
        return 'Java is a class-based, object-oriented programming language designed to have as few implementation dependencies as possible.';
      case 'what is php':
        return 'PHP is a popular general-purpose scripting language that is especially suited to web development.';
      case 'what is ruby':
        return 'Ruby is an interpreted, high-level programming language focused on simplicity and productivity, known for its use in web development through Ruby on Rails.';
      case 'what is c++':
        return 'C++ is a high-performance programming language often used in system software, game development, and performance-critical applications.';
      case 'what is oop':
        return 'OOP (Object-Oriented Programming) is a programming paradigm based on the concept of objects, which can contain data and code that manipulates that data.';
      case 'what is functional programming':
        return 'Functional programming is a programming paradigm where programs are constructed by applying and composing functions.';
      case 'what is react native':
        return 'React Native is a framework for building mobile applications using React and JavaScript.';
      case 'what is flutter':
        return 'Flutter is an open-source UI software development toolkit created by Google for building natively compiled applications for mobile, web, and desktop from a single codebase.';
      case 'what is swift':
        return 'Swift is a powerful and intuitive programming language for iOS, macOS, watchOS, and tvOS development.';
      case 'what is kotlin':
        return 'Kotlin is a statically-typed programming language that is interoperable with Java and is used primarily for Android development.';
      case 'what is vuex':
        return 'Vuex is a state management pattern and library for Vue.js applications.';
      default:
        return 'I am not sure about that, please try asking something else.';
    }
  }
  

const GeminiChat = () => {
  const [userInput, setUserInput] = useState('');
  const [conversation, setConversation] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault(); 

    console.log('User Input:', userInput);

    if (userInput.trim() === '') {
      console.log('Empty input, skipping.');
      return; 
    }

    
    const response = fetchGeminiResponse(userInput);
    console.log('AI Response:', response);

    
    const newConversation = [...conversation, { user: userInput, ai: response }];
    console.log('New Conversation:', newConversation);

    setConversation(newConversation);
    setUserInput(''); 
  };

  return (
    <div className="gemini-chat">
      <h1>Gemini AI Chat</h1>
      <div className="chat-box">
        {conversation.map((conv, index) => (
          <div key={index} className="conversation">
            <p><strong>You:</strong> {conv.user}</p>
            <p><strong>Gemini AI:</strong> {conv.ai}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="chat-form">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Ask something..."
          className="chat-input"
        />
        <button type="submit" className="chat-button">Send</button>
      </form>
    </div>
  );
};

export default GeminiChat;
