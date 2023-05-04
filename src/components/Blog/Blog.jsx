import React from 'react';

const Blog = () => {
    return (
        <div className='grid lg:grid-cols-2 mx-60 gap-4 text-justify gap-10'>
            <div className='shadow-lg p-5 rounded-md'>
                <h2 className='font-bold'>The differences between uncontrolled and controlled components.</h2>
                <p className='font-bold underline'>Uncontrolled Components:</p>
                <ul className='list-disc'>
                    <li> Manage their own state internally, which is not stored in the parent component.</li>
                    <li>Use refs to access their own DOM nodes.</li>
                    <li>Typically use default values for form fields.</li>
                    <li>The parent component does not have access to the component's state.</li>
                </ul>
                <p className='font-bold underline'>Controlled Components:</p>
                <ul className='list-disc'>
                    <li>Keep their state in the parent component and receive it through props.
                    </li>
                    <li>Use event handlers to communicate changes back to the parent component.</li>
                    <li>Allow the parent component to validate or modify the data before it is stored.
                    </li>
                    <li>The parent component has access to the component's state and can modify it if needed.
                    </li>
                </ul>
            </div>


            <div className='shadow-lg p-5 rounded-md'>
                <h2 className='font-bold'>How to validate React props using PropTypes</h2>
                <p>In React, PropTypes is a built-in library that provides a way to validate the data types of props being passed to a component. PropTypes ensure that the props passed to a component are of the expected type, and if not, they will throw an error message in the console.</p>
            </div>


            <div className='shadow-lg p-5 rounded-md'>
                <h2 className='font-bold'>Tell us the difference between nodejs and express js.
                </h2>
                <p>Node.js is a runtime environment that allows you to run JavaScript code outside of a web browser, while Express.js is a framework built on top of Node.js that simplifies the process of building web applications and APIs by providing additional features and utilities.Node.js provides a platform for running JavaScript code on the server-side, enabling developers to build scalable and high-performance applications. It provides features such as an event-driven architecture, non-blocking I/O, and a rich set of built-in modules that enable developers to build a wide range of applications, including web servers, command-line tools, and desktop applications.</p>
            </div>



            <div className='shadow-lg p-5 rounded-md'>
                <h2 className='font-bold'>What is a custom hook, and why will you create a custom hook?
                </h2>
                <ol className='list-decimal'>
                    <li>Reusability: A custom hook can encapsulate complex logic and state that can be used across multiple components, making it easier to reuse code and avoid code duplication.</li>
                    <li>Abstraction: Custom hooks can abstract away complex implementation details, making it easier for other developers to use your code without having to understand how it works under the hood.

                    </li>
                    <li>Maintainability: By encapsulating code in a custom hook, you can make it easier to maintain and modify in the future, since changes only need to be made in one place.

                    </li>
                    <li>Testing: Custom hooks can be tested in isolation, which can make it easier to identify and fix issues in your code.</li>

                </ol>
            </div>

        </div>
    );
};

export default Blog;