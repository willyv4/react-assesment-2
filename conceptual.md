### Conceptual Exercise

## What is the purpose of the React Router?

The purpose of React Router is to enable client-side routing in React applications, providing navigation within a single-page app. It lets developers define routes, map URLs to different sections, and render associated components.

## What is a single page application?

A single page application (SPA) is a web application that loads once on an initial page and dynamically updates its content without requiring full page reloads.

## What are some differences between client side and server side routing?

Client-side routing occurs on the front-end of the application, while server-side routing is handled on the backend. In client-side routing, page rendering is managed dynamically using JavaScript, while server-side routing relies on the backend server, which can be slightly slower. Server-side routing is generally more SEO-friendly, whereas client-side rendering may require extra measures for better search engine optimization. Server-side routing enables faster initial page loading, although redirects may take longer. On the other hand, client-side routing has a slower initial page load but faster redirects.

## What are two ways of handling redirects with React Router? When would you use each?

useNavigate Hook: This hook provides the navigate function, allowing for programmatic navigation. It is useful when you need more control over redirects, such as performing redirects in response to user interactions or within custom functions.

<Redirect> Component: This component offers a declarative approach to redirects in React Router. It allows you to specify the redirect target directly in your JSX code. It is useful for handling redirects based on conditions or when rendering routes.

Choose the useNavigate hook when you need more flexibility and control over the redirect process, and use the <Redirect> component for declarative redirects based on conditions or when rendering routes.

## What are two different ways to handle page-not-found user experiences using React Router?

Use a catch-all route: Define a route with a \* (asterisk) wildcard as the path value. This route should be placed at the end of your route configuration. When no other routes match, this catch-all route will be triggered, allowing you to render a not-found component or redirect to a not-found page.

Utilize the navigate function: This function from React Router allows for programmatically navigating to a not-found page. You can use it in conjunction with conditional logic to determine when to trigger the navigation.

## How do you grab URL parameters from within a component using React Router?

To grab URL parameters from within a component using React Router, you can use the useParams hook provided by react-router-dom. It allows you to access the parameter values directly within your component without any additional code.

## What is context in React? When would you use it?

Context in React is a feature that allows components to access shared data without passing it through props. It's useful when you have data used by multiple components at different levels, reducing prop drilling.

## Describe some differences between class-based components and function components in React.

Class-based components and function components in React have some key differences. Class-based components use ES6 classes, extend the React.Component class, and have their own internal state managed through this.state. They can also utilize lifecycle methods like componentDidMount and componentDidUpdate. On the other hand, function components are regular JavaScript functions and manage state using the useState hook and lifecycle methods with the useEffect hook. Function components are generally simpler, more concise, and more performant. They promote reusability and composability through hooks, while class-based components require more boilerplate code. Function components were introduced in React 16.8 and are now the recommended approach for new projects.

## What are some of the problems that hooks were designed to solve?

Hooks were designed to solve problems in React such as complex component logic, difficulty in reusing and sharing stateful logic, boilerplate code, limitations in performance optimization, and a steep learning curve. They address these issues by enabling encapsulation of component logic, facilitating the sharing of stateful logic, reducing boilerplate code, providing performance optimization options, and offering a simpler and more intuitive API for easier development and learning.
