import React from "react";

const Blog = () => {
  
  const onButtonClick = () => {
       
    fetch('PDF.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'React-to-PDF.pdf';
            alink.click();
        })
    })
  }

  return (
    <div className="bg-sky-50 pb-36">
      <h2 className="text-4xl font-bold text-center pt-10 mb-5">
        Some Important Question Answer
      </h2>
      <div className="text-end me-20">
      <button onClick={onButtonClick} className="bg-gradient-to-r from-sky-400 to-blue-500 rounded px-5 py-1 text-white font-serif mb-5 mt-2 ms-20">Download pdf</button>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mx-20 mb-3">
        <div className="collapse-title text-xl font-medium">
        What is the differences between uncontrolled and controlled components?
        </div>
        <div className="collapse-content">
          <p>Controlled components are components whose state is managed by React, while uncontrolled components are components whose state is managed by the DOM. In controlled components, the parent component has full control over the component's state, while in uncontrolled components, the component's state is managed by the user's interaction with the component.</p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mx-20 mb-3">
        <div className="collapse-title text-xl font-medium">
        How to validate React props using PropTypes?
        </div>
        <div className="collapse-content">
          <p>PropTypes is a package in React that allows you to define the expected data types and shapes of the props passed to your components. You can use PropTypes to check if the received props match their expected types and prevent bugs in your application. Simply define the expected data types and shapes of your props using the 'propTypes' object, and check if the received props match using the 'PropTypes' functions in your component's code. If a prop doesn't match its expected type, PropTypes will log a warning message in the console.</p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mx-20 mb-3">
        <div className="collapse-title text-xl font-medium">
        What is the difference between nodejs and express js?
        </div>
        <div className="collapse-content">
          <p>Node.js is a JavaScript runtime environment that executes JavaScript code on the server-side, while Express.js is a web application framework built on top of Node.js that simplifies the development of web applications and APIs.</p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mx-20 mb-3">
        <div className="collapse-title text-xl font-medium">
        What is a custom hook, and why will you create a custom hook?
        </div>
        <div className="collapse-content">
          <p>A custom hook is a reusable function in React that abstracts complex logic into a separate function that can be reused across components. Custom hooks are useful for encapsulating complex or repetitive logic to simplify code, reduce duplication, and make code more modular and maintainable. Custom hooks can be used for tasks like data fetching, state management, and event listeners.</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
