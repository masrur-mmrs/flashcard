let flashcards = {
    "React": [{
            "question": "What is ReactJS?",
            "answer": "ReactJS is a JavaScript library for building user interfaces."
        },
        {
            "question": "What are the key features of ReactJS?",
            "answer": "Key features of ReactJS include virtual DOM, component-based architecture, and reusability."
        },
        {
            "question": "What is JSX?",
            "answer": "JSX is a syntax extension for JavaScript used in React to describe the structure of UI components."
        },
        {
            "question": "What is the virtual DOM?",
            "answer": "The virtual DOM is a lightweight copy of the actual DOM used by React to optimize and speed up UI updates."
        },
        {
            "question": "What are React components?",
            "answer": "React components are independent and reusable UI building blocks."
        },
        {
            "question": "What is the difference between functional and class components?",
            "answer": "Functional components are stateless and rely on the props passed to them, while class components have state and lifecycle methods."
        },
        {
            "question": "What is state in React?",
            "answer": "State is an object that holds data and determines how a component renders and behaves."
        },
        {
            "question": "What are props in React?",
            "answer": "Props are inputs to React components that can be used to pass data from a parent component to its children."
        },
        {
            "question": "What is the purpose of the render() method in React?",
            "answer": "The render() method is responsible for rendering the JSX content of a component."
        },
        {
            "question": "What is the significance of keys in React lists?",
            "answer": "Keys help React identify which items have changed, been added, or been removed in a list, improving performance and updating only the necessary elements."
        },
        {
            "question": "What is the role of componentDidMount() lifecycle method?",
            "answer": "componentDidMount() is invoked immediately after a component is mounted and is commonly used to initiate network requests or fetch data."
        },
        {
            "question": "What is the purpose of shouldComponentUpdate()?",
            "answer": "shouldComponentUpdate() allows you to optimize rendering by deciding whether or not to re-render a component based on the changes in props or state."
        },
        {
            "question": "What is React Router?",
            "answer": "React Router is a popular library for handling routing in React applications."
        },
        {
            "question": "What are controlled components in React?",
            "answer": "Controlled components are form elements whose values are controlled by React, allowing you to handle form input state in React's state."
        },
        {
            "question": "What is the purpose of React.Fragment?",
            "answer": "React.Fragment is a wrapper that allows multiple elements to be grouped together without introducing an additional DOM node."
        },
        {
            "question": "What is Redux?",
            "answer": "Redux is a predictable state container for JavaScript apps, commonly used with React to manage application state."
        },
        {
            "question": "What is React Native?",
            "answer": "React Native is a framework for building native mobile apps using React."
        },
        {
            "question": "What are React hooks?",
            "answer": "React hooks are functions that allow you to use state and other React features in functional components."
        },
        {
            "question": "What is the purpose of useEffect() hook?",
            "answer": "useEffect() is a hook used to perform side effects in functional components, such as fetching data or subscribing to events."
        },
        {
            "question": "What is JSX pragma?",
            "answer": "JSX pragma is a way to tell Babel how to transform JSX into createElement() calls in React applications."
        },
        {
            "question": "What is the significance of PureComponent in React?",
            "answer": "PureComponent is a base class for React components that implements a shallow comparison of props and state to determine if a re-render is necessary."
        },
        {
            "question": "What is the purpose of ReactDOM.render() method?",
            "answer": "ReactDOM.render() is used to render a React element into the DOM."
        },
        {
            "question": "What are higher-order components (HOCs) in React?",
            "answer": "Higher-order components are functions that take a component and return a new enhanced component, enabling code reuse and logic sharing."
        },
        {
            "question": "What is the role of the constructor() in React class components?",
            "answer": "The constructor() method is used to initialize the state and bind event handlers in a React class component."
        },
        {
            "question": "What is the purpose of the setState() method?",
            "answer": "The setState() method is used to update the state of a component and trigger a re-render."
        }
    ],
    "HTML": [{
            "question": "What does HTML stand for?",
            "answer": "HTML stands for HyperText Markup Language."
        },
        {
            "question": "What is the purpose of HTML?",
            "answer": "HTML is used to structure and present content on the web."
        },
        {
            "question": "What are the basic tags required for every HTML document?",
            "answer": "The basic tags required for every HTML document are <html>, <head>, and <body>."
        },
        {
            "question": "What is the doctype declaration in HTML?",
            "answer": "The doctype declaration specifies the version of HTML used in the document."
        },
        {
            "question": "What is the role of the <head> tag in HTML?",
            "answer": "The <head> tag is used to define meta information about the HTML document, such as the title, character encoding, and linked stylesheets or scripts."
        },
        {
            "question": "What is the purpose of the <title> tag in HTML?",
            "answer": "The <title> tag specifies the title of the HTML document, which is displayed in the browser's title bar or tab."
        },
        {
            "question": "What are the different heading tags in HTML?",
            "answer": "The different heading tags in HTML are <h1>, <h2>, <h3>, <h4>, <h5>, and <h6>, where <h1> represents the highest level of heading."
        },
        {
            "question": "What is the difference between <span> and <div> tags in HTML?",
            "answer": "The <span> tag is an inline element used to group inline elements, while the <div> tag is a block-level element used to group block-level elements or sections."
        },
        {
            "question": "What is the purpose of the <a> tag in HTML?",
            "answer": "The <a> tag is used to create hyperlinks to other web pages or resources."
        },
        {
            "question": "What are the different types of lists in HTML?",
            "answer": "The different types of lists in HTML are ordered lists (<ol>), unordered lists (<ul>), and definition lists (<dl>)."
        },
        {
            "question": "What is the purpose of the <img> tag in HTML?",
            "answer": "The <img> tag is used to embed images in an HTML document."
        },
        {
            "question": "What is the difference between <ol> and <ul> tags in HTML?",
            "answer": "The <ol> tag is used to create an ordered list with numbered items, while the <ul> tag is used to create an unordered list with bullet point items."
        },
        {
            "question": "What is the purpose of the <table> tag in HTML?",
            "answer": "The <table> tag is used to create tabular data in HTML, consisting of rows (<tr>), cells (<td>), and headers (<th>)."
        },
        {
            "question": "What is the role of the colspan attribute in HTML?",
            "answer": "The colspan attribute specifies the number of columns a table cell should span across."
        },
        {
            "question": "What is the purpose of the <form> tag in HTML?",
            "answer": "The <form> tag is used to create an interactive form for user input, which can be submitted to a server for processing."
        },
        {
            "question": "What are the different input types in HTML?",
            "answer": "The different input types in HTML include text, password, checkbox, radio, number, email, date, and more."
        },
        {
            "question": "What is the role of the <label> tag in HTML?",
            "answer": "The <label> tag is used to associate a label with a form element, providing a textual description or name for the element."
        },
        {
            "question": "What is the purpose of the <textarea> tag in HTML?",
            "answer": "The <textarea> tag is used to create a multiline text input field."
        },
        {
            "question": "What is the role of the <iframe> tag in HTML?",
            "answer": "The <iframe> tag is used to embed another HTML document or external content within the current document."
        },
        {
            "question": "What is the purpose of the <head> tag in HTML?",
            "answer": "The <head> tag is used to define meta information about the HTML document, such as the title, character encoding, and linked stylesheets or scripts."
        },
        {
            "question": "What is the purpose of the <meta> tag in HTML?",
            "answer": "The <meta> tag is used to provide metadata about the HTML document, such as the character encoding, viewport settings, or keywords."
        },
        {
            "question": "What is the purpose of the <strong> tag in HTML?",
            "answer": "The <strong> tag is used to indicate strong importance or emphasis on text, typically rendered in bold."
        },
        {
            "question": "What is the role of the <sup> tag in HTML?",
            "answer": "The <sup> tag is used to specify superscripted text, typically used for footnotes, mathematical expressions, or citations."
        },
        {
            "question": "What is the purpose of the <hr> tag in HTML?",
            "answer": "The <hr> tag is used to create a horizontal rule or line to separate content within a document."
        },
        {
            "question": "What is the purpose of the <abbr> tag in HTML?",
            "answer": "The <abbr> tag is used to define an abbreviation or acronym, providing a full or expanded version of the abbreviated text."
        },
        {
            "question": "What is the role of the <blockquote> tag in HTML?",
            "answer": "The <blockquote> tag is used to indicate a block of quoted content or citation from another source."
        }
    ],
    "Javascript": [{
            "question": "What does ES6 stand for?",
            "answer": "ES6 stands for ECMAScript 2015, which is the 6th edition of the ECMAScript standard."
        },
        {
            "question": "What are the new features introduced in ES6?",
            "answer": "ES6 introduces several new features, including arrow functions, classes, modules, let and const, template literals, destructuring, and more."
        },
        {
            "question": "What is the purpose of arrow functions in ES6?",
            "answer": "Arrow functions provide a concise syntax for writing function expressions and lexically bind the value of 'this' within the function."
        },
        {
            "question": "What are template literals in ES6?",
            "answer": "Template literals are a new way to define strings in JavaScript, allowing interpolation of variables and multiline strings."
        },
        {
            "question": "What is the role of let and const keywords in ES6?",
            "answer": "The 'let' keyword is used to declare block-scoped variables, while the 'const' keyword is used to declare variables with constant values."
        },
        {
            "question": "What are the advantages of using classes in ES6?",
            "answer": "Classes provide a cleaner syntax for creating objects and implementing object-oriented programming concepts in JavaScript."
        },
        {
            "question": "What is destructuring in ES6?",
            "answer": "Destructuring is a convenient way to extract values from objects or arrays into individual variables."
        },
        {
            "question": "What are modules in ES6?",
            "answer": "Modules are a way to organize and share JavaScript code by separating it into reusable components or files."
        },
        {
            "question": "What is the purpose of the spread operator (...) in ES6?",
            "answer": "The spread operator allows an iterable (e.g., an array) to be expanded into individual elements, making it useful for array manipulation and function calls."
        },
        {
            "question": "What is the role of the 'import' and 'export' keywords in ES6 modules?",
            "answer": "The 'import' keyword is used to import functions, objects, or values from other modules, while the 'export' keyword is used to export functions, objects, or values from a module."
        },
        {
            "question": "What is the purpose of default parameters in ES6?",
            "answer": "Default parameters allow you to specify default values for function parameters if no value or 'undefined' is provided."
        },
        {
            "question": "What are arrow functions in ES6?",
            "answer": "Arrow functions are a concise syntax for writing function expressions in JavaScript and provide a lexically bound 'this' value."
        },
        {
            "question": "What is the purpose of the 'map' method in ES6?",
            "answer": "The 'map' method is used to create a new array by applying a function to each element of an existing array."
        },
        {
            "question": "What is the role of the 'filter' method in ES6?",
            "answer": "The 'filter' method is used to create a new array with all elements that pass a specific condition defined by a function."
        },
        {
            "question": "What are promises in ES6?",
            "answer": "Promises are objects used for asynchronous programming, representing the eventual completion or failure of an asynchronous operation."
        },
        {
            "question": "What is the purpose of the 'async/await' keywords in ES6?",
            "answer": "The 'async/await' keywords provide a more readable and synchronous-like syntax for working with promises and asynchronous code."
        },
        {
            "question": "What is the role of the 'let' keyword in ES6?",
            "answer": "The 'let' keyword is used to declare block-scoped variables, allowing more precise control of variable scope and avoiding variable hoisting issues."
        },
        {
            "question": "What are rest parameters in ES6?",
            "answer": "Rest parameters allow you to represent an indefinite number of arguments as an array, providing a convenient way to handle variable-length argument lists."
        },
        {
            "question": "What is the purpose of the 'find' method in ES6?",
            "answer": "The 'find' method is used to return the first element in an array that satisfies a provided testing function."
        },
        {
            "question": "What is the role of the 'for...of' loop in ES6?",
            "answer": "The 'for...of' loop is used to iterate over iterable objects (e.g., arrays, strings, maps, sets) and provides a simpler syntax compared to traditional 'for' loops."
        },
        {
            "question": "What is the purpose of the 'Symbol' data type in ES6?",
            "answer": "Symbols are a new primitive data type in ES6 that are unique and can be used as keys for object properties."
        },
        {
            "question": "What is the role of the 'Object.assign()' method in ES6?",
            "answer": "The 'Object.assign()' method is used to copy the values of all enumerable properties from one or more source objects to a target object."
        },
        {
            "question": "What is the purpose of the 'Array.from()' method in ES6?",
            "answer": "The 'Array.from()' method creates a new array instance from an array-like or iterable object."
        },
        {
            "question": "What are generators in ES6?",
            "answer": "Generators are functions that can be paused and resumed, allowing for the generation of a sequence of values over time."
        },
        {
            "question": "What is the role of the 'Promise.all()' method in ES6?",
            "answer": "The 'Promise.all()' method is used to combine multiple promises into a single promise that is fulfilled when all input promises are fulfilled, or rejected if any of the input promises are rejected."
        }
    ]

}

export default flashcards;