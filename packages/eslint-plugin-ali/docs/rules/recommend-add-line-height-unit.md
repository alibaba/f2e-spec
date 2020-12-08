# recommend-add-line-height-unit

Recommended to add unit for line-height which is more than 5.

## Rule Details

Examples of **incorrect** code for this rule:

```js
class App extends React.Component {
  render() {
    return <p style={lineHeight: 10}>hello world</p>;
  }
}
```

```css
.text {
  line-height: 10;
}
```

Should add unit for line-height, like `line-height: 10px;`;

Examples of **correct** code for this rule:

```js
class App extends React.Component {
  render() {
    return <p style={lineHeight: 2}>hello world</p>;
  }
}
```

```css
.text {
  line-height: 2;
}
```
