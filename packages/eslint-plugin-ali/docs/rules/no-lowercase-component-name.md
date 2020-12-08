# no-lowercase-component-name

It is not recommended to name components in lower case.
See: https://github.com/airbnb/javascript/tree/master/react#naming

## Rule Details

Examples of **incorrect** code for this rule:

```jsx
// src/components/app/index.jsx
const app = () => {
  return <p>hello world</p>;
};

export default app;
```

Examples of **correct** code for this rule:

```jsx
// src/components/App/index.jsx
const App = () => {
  return <p>hello world</p>;
};

export default App;
```
