### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

Its for client side routing

- What is a single page application?

Multiple pages can render, but the page never refreshes

- What are some differences between client side and server side routing?

Serverside uses alternate tooling to serve up an entirely different web-page, and it navigates based on url - while as with client side the url changes are more for aesthetics and bookmarking

- What are two ways of handling redirects with React Router? When would you use each?

You can use the Redirect component from ReactRouter and you can use the useNavigate hook

- What are two different ways to handle page-not-found user experiences using React Router? 

You can create a catch-all route using path="\*" and either render a 404 component or redirect to a different page.

- How do you grab URL parameters from within a component using React Router?

Use /:param/ syntax and the useParams() hook

- What is context in React? When would you use it?

Context offers a global scope for delivering props down a chain of child components without the hassle of the normal prop functionality, by wrapping the parent component in a wrapper containing the value that child components can access by evoking it within it's own component code

- Describe some differences between class-based components and function
  components in React.

Class components cant use hooks, extra boiler plate legwork, and have mounting lifecycle methods

- What are some of the problems that hooks were designed to solve?

Too much code, confusing class structures, more concise state management, too many wrappers, performance, modularity
