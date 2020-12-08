# no-lowercase-component-name

组件命名不推荐小写
参照: https://github.com/airbnb/javascript/tree/master/react#naming

## 规则内容

**错误代码**示例:

```jsx
// src/components/app/index.jsx
const app = () => {
  return <p>hello world</p>;
};

export default app;
```

**正确代码**示例:

```jsx
// src/components/App/index.jsx
const App = () => {
  return <p>hello world</p>;
};

export default App;
```
