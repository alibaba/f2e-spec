---
group: Coding Style
order: 5
---

# React Coding Specification

## 1 编码风格

### 1.1 缩进

- 1.1.1【强制】JSX 语法使用 2 个空格缩进。eslint: [react/jsx-indent](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md) [react/jsx-indent-props](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md) [react/jsx-closing-tag-location](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md)

  对于 JSX 语法，遵循与 JS 规约和 HTML 规约一致的 2 个空格缩进，不要使用 4 空格或 tab 缩进：

  ```jsx static
  // bad
  <Foo
      superLongParam="bar"
      anotherSuperLongParam="baz"
  >
      <Quux />
  </Foo>

  // good
  <Foo
    superLongParam="bar"
    anotherSuperLongParam="baz"
  >
    <Quux />
  </Foo>
  ```

### 1.2 空格

- 1.2.1【强制】自闭合标签的斜线前有且仅有一个空格。eslint: [no-multi-spaces](https://eslint.org/docs/rules/no-multi-spaces) [react/jsx-tag-spacing](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md)

  ```jsx static
  // bad
  <Foo/>

  // very bad
  <Foo                 />

  // bad
  <Foo
   />

  // good
  <Foo />
  ```

- 1.2.2【强制】JSX 行内属性之间仅有一个空格。eslint: [react/jsx-props-no-multi-spaces](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md)

  同一行中标签和属性之间、属性之间只有一个空格。
  ```jsx static
  // bad
  <App  spacy />
  <App too  spacy />

  // good
  <App cozy />
  <App very cozy />
  ```

- 1.2.3【强制】JSX 属性的大括号内部两侧无空格。eslint: [react/jsx-curly-spacing](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md)

  ```jsx static
  // bad
  <Foo bar={ baz } />

  // good
  <Foo bar={baz} />
  ```

- 1.2.4【强制】不要在 JSX 属性的等号两边加空格。eslint: [jsx-equals-spacing](https://eslint.org/docs/rules/jsx-equals-spacing)

  ```jsx static
  // bad
  <Hello name = {firstname} />;

  // good
  <Hello name={firstname} />;
  ```

### 1.3 引号

- 1.3.1【强制】JSX 属性使用双引号，不要使用单引号。eslint: [jsx-quotes](https://eslint.org/docs/rules/jsx-quotes)

  为什么？HTML 属性通常使用双引号而不是单引号，因此 JSX 属性沿用了这种约定。
  其他 JS 使用单引号。

  ```jsx static
  // bad
  <Foo bar='bar' />

  // good
  <Foo bar="bar" />

  // bad
  <Foo style={{ left: "20px" }} />

  // good
  <Foo style={{ left: '20px' }} />
  ```

### 1.4 小括号

- 1.4.1【强制】多行的 JSX 标签需用小括号包裹。eslint: [react/jsx-wrap-multilines](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md)

  ```jsx static
  // bad
  render() {
    return <MyComponent variant="long body" foo="bar">
             <MyChild />
           </MyComponent>;
  }

  // good
  render() {
    return (
      <MyComponent variant="long body" foo="bar">
        <MyChild />
      </MyComponent>
    );
  }

  // good - 单行的 jsx 无需加圆括号
  render() {
    const body = <div>hello</div>;
    return <MyComponent>{body}</MyComponent>;
  }
  ```

### 1.5 标签

- 1.5.1【强制】无子元素的标签需写成自闭合标签。eslint: [react/self-closing-comp](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md)

  ```jsx static
  // bad
  <Foo variant="stuff"></Foo>

  // good
  <Foo variant="stuff" />
  ```

- 1.5.2【强制】标签属性的换行。eslint: [react/jsx-max-props-per-line](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md) [react/jsx-first-prop-new-line](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md)

  对 JSX 标签属性的换行，遵循以下规则：

  - 标签名和它的属性可以写在一行，前提是不超过单行最大 100 字符数的限制
  - 如果标签有多个属性，且存在换行，则每个属性都需要换行独占一行

  ```jsx static
  // bad - 属性应全部换行，或全部跟组件名写在一行
  <Foo superLongParam="bar"
       anotherSuperLongParam="baz" />

  // good
  <Foo
    superLongParam="bar"
    anotherSuperLongParam="baz"
  />

  // good - 组件名和属性可以写在一行，前提是不超过单行最大字符限制
  <Foo bar="bar" />

  // bad
  <Hello foo={{
      }}
      bar />

  // good
  <Hello foo={{
  }} />

  <Hello
      foo={{
      }}
      bar
  />
  ```

- 1.5.3【强制】标签的属性有多行时，结束标签需另起一行。eslint: [react/jsx-closing-bracket-location](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md)

  ```jsx static
  // bad
  <Foo
    bar="bar"
    baz="baz" />

  // good
  <Foo
    bar="bar"
    baz="baz"
  />
  ```

- 1.5.4【强制】禁止在有子节点的组件或 DOM 元素中使用 dangerouslySetInnerHTML 属性。eslint: [react/no-danger-with-children](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md)

  ```jsx static
  // bad
  <div dangerouslySetInnerHTML={{ __html: "HTML" }}>
    Children
  </div>

  <Hello dangerouslySetInnerHTML={{ __html: "HTML" }}>
    Children
  </Hello>

  // good
  <div dangerouslySetInnerHTML={{ __html: "HTML" }} />

  <Hello dangerouslySetInnerHTML={{ __html: "HTML" }} />

  <div>
    Children
  </div>

  <Hello>
    Children
  </Hello>
  ```

- 1.5.5【强制】HTML 自闭标签不能有子节点。eslint: [react/void-dom-elements-no-children](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md)

  HTML 自闭标签，比如 img，br，hr，被统称为空 DOM 元素，不能给他们定义子节点。

  ```jsx static
  // bad
  <br>Children</br>
  <br dangerouslySetInnerHTML={{ __html: 'HTML' }} />

  // good
  <div>Children</div>
  <div dangerouslySetInnerHTML={{ __html: 'HTML' }} />
  ```

- 1.5.6【推荐】不要使用危险属性。eslint: [react/no-danger](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md)

  React中的危险属性是指那些已知会引起应用程序漏洞的属性。这些属性命名为 `dangerouslyXyz` 已经清楚地表明它们是危险的，应该尽量避免使用。[详细文档](https://facebook.github.io/react/tips/dangerously-set-inner-html.html)

  ```jsx static
  // bad
  <div dangerouslySetInnerHTML={{ __html: "Hello World" }}></div>;

  // good
  <div>Hello World</div>;
  ```

- 1.5.7【强制】JSX 语句的文本节点中不要使用注释字符串（例如，以//或/ *开头）。eslint: [react/jsx-no-comment-textnodes](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md)

  ```jsx static
  // bad
  class Hello extends React.Component {
    render() {
      return (
        <div>// empty div</div>
      );
    }
  };

  class Hello extends React.Component {
    render() {
      return (
        <div>
          /* empty div */
        </div>
      );
    }
  };

  // good
  class Hello extends React.Component {
    render() {
      return <div>{/* empty div */}</div>;
    }
  };

  class Hello extends React.Component {
    render() {
      return <div /* empty div */></div>;
    }
  };

  class Hello extends React.Component {
    render() {
      return <div className={'foo' /* temp class */}</div>;
    }
  };
  ```

- 1.5.8【强制】标签中禁止出现无意义字符，比如 > " } '。eslint: [react/no-unescaped-entities](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md)


  `>` 可用 `&gt;` 替代

  `"` 可用 `&quot;`，`&ldquo;` ， `&#34; ` 或者  `&rdquo;`  替代

  `'` 可用 `&apos;`，`&lsquo;`，`&#39;` 或者 `&rsquo;` 替代

  `}` 可用 `&#125;` 替代

  或者写在表达式里，比如 ` <div>{'>'}</div>`

  ```jsx static
  // bad
  <MyComponent
    a="b">  {/* oops! */}
    c="d"
    Intended body text
  </MyComponent>

  // good
  <div> &gt; </div>
  <div> {'>'} </div>
  ```

## 2 语言特性

### 2.1 基本

- 2.1.1【参考】使用 `JSX` 语法时，防止 `React` 变量被标记为未使用，可以使用 `@jsx` 标注来指定 `React` 之外的变量。eslint: [react/jsx-uses-react](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md)

  ```jsx static
  // bad
  var React = require('react');
  // nothing to do with React

  /** @jsx Foo */
  var React = require('react');
  var Hello = <div>Hello {this.props.name}</div>;

  // good
  var React = require('react');
  var Hello = <div>Hello {this.props.name}</div>;

  /** @jsx Foo */
  var Foo = require('foo');
  var Hello = <div>Hello {this.props.name}</div>;
  ```

- 2.1.2【强制】不要使用未声明的组件。eslint: [react/jsx-no-undef](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md) [react/jsx-uses-vars](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md)

  不允许没有引用组件就直接使用，也可能是组件名拼写错误。

  ```jsx static
  // bad
  <Hello name="John" />;

  // good
  import Hello from './Hello';

  <Hello name="John" />;
  ```

- 2.1.3【强制】每个文件只包含一个 React 组件。eslint: [react/no-multi-comp](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md)

  但是可以包含多个[函数组件](https://reactjs.org/docs/components-and-props.html#function-and-class-components)。

- 2.1.4【强制】不要在函数组件中使用 this。eslint: [react/no-this-in-sfc](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md)

  ```jsx static
  // bad
  function Foo(props, context) {
    return (
      <div>
        {this.context.foo ? this.props.bar : ''}
      </div>
    );
  }

  // good
  function Foo(props, context) {
    return (
      <div>
        {context.foo ? props.bar : ''}
      </div>
    );
  }
  ```

- 2.1.5【强制】使用 ES6 class 创建组件 ，而不是 [createReactClass](https://reactjs.org/docs/react-without-es6.html) 。eslint: [react/prefer-es6-class](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md)

  ```jsx static
  // bad
  const Listing = createReactClass({
   // ...
   render() {
     return <div>{this.state.hello}</div>;
   }
  });

  // good
  class Listing extends React.Component {
   // ...
   render() {
     return <div>{this.state.hello}</div>;
   }
  }
  ```

- 2.1.6【参考】如果组件没有内部状态或 refs ，应使用函数组件，而不是类组件。eslint: [react/prefer-stateless-function](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md)

  ```jsx static
  // bad
  class Listing extends React.Component {
    render() {
      return <div>{this.props.hello}</div>;
    }
  }

  // bad
  const Listing = ({ hello }) => (
    <div>{hello}</div>
  );

  // good
  function Listing({ hello }) {
    return <div>{hello}</div>;
  }
  ```

- 2.1.7【强制】不要使用 React.createElement，除非你不是用 JSX 文件初始化应用程序。



### 2.2 方法

- 2.2.1【推荐】不要在 JSX 属性中使用 .bind()。eslint: [react/jsx-no-bind](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)

  这不利于组件性能，每次 render 都会创建一个新的函数。

  有 2 种替代方案：

  - 在 `constructor` 中绑定事件处理函数
  - 使用 react 的 [property initializers](https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#autobinding) 特性或 [ES7 autobind decorator ](https://www.npmjs.com/package/core-decorators#autobind)

  ```jsx static
  // bad
  class extends React.Component {
    onClickDiv() {
      // ...
    }

    render() {
      return <div onClick={this.onClickDiv.bind(this)} />;
    }
  }

  // good - 在 constructor 中绑定事件处理函数
  class extends React.Component {
    constructor(props) {
      super(props);

      this.onClickDiv = this.onClickDiv.bind(this);
    }

    onClickDiv() {
      // ...
    }

    render() {
      return <div onClick={this.onClickDiv} />;
    }
  }

  // good - 使用 react 的 property initializers 特性
  class extends React.Component {
    constructor(props) {
      super(props);
    }

    onClickDiv = () => {
      // ...
    }

    render() {
      return <div onClick={this.onClickDiv} />;
    }
  }
  ```

- 2.2.2【强制】render 方法必须要有返回值。eslint: [react/require-render-return](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md)

  ```jsx static
  // bad
  render() {
    (<div />);
  }

  // good
  render() {
    return (<div />);
  }
  ```

- 2.2.3【强制】禁止使用 ReactDOM.render 的返回值。eslint: [react/no-render-return-value](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md)

  render()返回 ReactComponent 实例的引用。然而，应该避免使用这个返回值，因为在某些情况下，React 的未来版本中 render 方法可能会异步执行。如果需要引用 ReactComponent 实例，根元素需要增加 ref 回调。

  ```jsx static
  // bad
  const inst = ReactDOM.render(<App />, document.body);
  doSomethingWithInst(inst);

  // good
  ReactDOM.render(<App ref={doSomethingWithInst} />, document.body);

  ReactDOM.render(<App />, document.body, doSomethingWithInst);
  ```

- 2.2.4【强制】在扩展 React.PureComponent 时禁止使用 shouldComponentUpdate。eslint: [react/no-redundant-should-component-update](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md)

  定义 React.PureComponent 扩展组件时使用 shouldComponentUpdate 虽然有效，但是扩展 PureComponent 变得毫无意义。

  ```jsx static
  // bad
  class Foo extends React.PureComponent {
    shouldComponentUpdate() {
      // do check
    }

    render() {
      return <div>Radical!</div>
    }
  }

  function Bar() {
    return class Baz extends React.PureComponent {
      shouldComponentUpdate() {
        // do check
      }

      render() {
        return <div>Groovy!</div>
      }
    }
  }

  // good
  class Foo extends React.Component {
    shouldComponentUpdate() {
      // do check
    }

    render() {
      return <div>Radical!</div>
    }
  }

  function Bar() {
    return class Baz extends React.Component {
      shouldComponentUpdate() {
        // do check
      }

      render() {
        return <div>Groovy!</div>
      }
    }
  }

  class Qux extends React.PureComponent {
    render() {
      return <div>Tubular!</div>
    }
  }
  ```

- 2.2.5【强制】禁止使用已经废弃的方法。eslint: [react/no-deprecated](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md)

  随着React版本升级，有些方法逐渐被弃用。

  ```jsx static
  // bad
  React.render(<MyComponent />, root);

  React.unmountComponentAtNode(root);

  React.findDOMNode(this.refs.foo);

  React.renderToString(<MyComponent />);

  React.renderToStaticMarkup(<MyComponent />);

  React.createClass({ /* Class object */ });

  const propTypes = {
    foo: PropTypes.bar,
  };

  //Any factories under React.DOM
  React.DOM.div();

  import React, { PropTypes } from 'react';

  class Foo extends React.Component {
    componentWillMount() { }
    componentWillReceiveProps() { }
    componentWillUpdate() { }
    // ...
  }

  class Foo extends React.PureComponent {
    componentWillMount() { }
    componentWillReceiveProps() { }
    componentWillUpdate() { }
    // ...
  }

  var Foo = createReactClass({
    componentWillMount: function() {},
    componentWillReceiveProps: function() {},
    componentWillUpdate: function() {},
    // ...
  })

  // good
  ReactDOM.render(<MyComponent />, root);

  // When [1, {"react": "0.13.0"}]
  ReactDOM.findDOMNode(this.refs.foo);

  import { PropTypes } from 'prop-types';

  class Foo {
    componentWillMount() { }
    componentWillReceiveProps() { }
    componentWillUpdate() { }
  }
  ```

- 2.2.6【强制】不要使用 findDOMNode。eslint: [react/no-find-dom-node](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md)

  [严格模式下已经弃用 findDOMNode](https://reactjs.org/docs/strict-mode.html#warning-about-deprecated-finddomnode-usage)。

  ```jsx static
  // bad
  class MyComponent extends Component {
    componentDidMount() {
      findDOMNode(this).scrollIntoView();
    }

    render() {
      return <div />
    }
  }

  // good
  class MyComponent extends Component {
    componentDidMount() {
      this.node.scrollIntoView();
    }

    render() {
      return <div ref={node => this.node = node} />
    }
  }
  ```

- 2.2.7【强制】不要使用 componentWillMount、componentWillReceiveProps、componentWillUpdate。

  不要再使用 [componentWillMount](https://reactjs.org/docs/react-component.html#unsafe_componentwillmount) 、[componentWillReceiveProps](https://reactjs.org/docs/react-component.html#unsafe_componentwillreceiveprops)、[componentWillUpdate](https://reactjs.org/docs/react-component.html#unsafe_componentwillupdate)。使用这些生命周期方法通常会导致错误和不一致，因此React 计划在17版本删掉这些方法。

  - componentWillMount() 可以用 constructor() 或 componentDidMount() 替代；
  - componentWillReceiveProps() 可以用 componentDidUpdate() 或其他方式替换；
  - componentWillUpdate() 可以用 componentDidUpdate() 替换或者把逻辑写在 getSnapshotBeforeUpdate() 中。

  使用[rename-unsafe-lifecycles codemod](https://github.com/reactjs/react-codemod#rename-unsafe-lifecycles)自动为不推荐使用的生命周期钩子添加“UNSAFE_”前缀。转化为
  - UNSAFE_componentWillMount()
  - UNSAFE_componentWillReceiveProps()
  - UNSAFE_componentWillUpdate()

- 2.2.8【强制】不要在 componentWillUpdate 内改变 state 值。eslint: [react/no-will-update-set-state](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md)

  首先，不要再使用 componentWillUpdate，[React 未来在17版本计划删掉 componentWillUpdate](https://reactjs.org/docs/react-component.html#unsafe_componentwillupdate)。通常可以用 componentDidUpdate() 替代。使用[rename-unsafe-lifecycles codemod](https://github.com/reactjs/react-codemod#rename-unsafe-lifecycles)自动更新组件。

  不要在 componentWillUpdate 调用 this.setState()。若你需要更新状态响应属性的变更，使用 [getDerivedStateFromProps()](https://react.docschina.org/docs/react-component.html#static-getderivedstatefromprops) 代替。在 componentWillUpdate 中改变 state 的值可能会引起组件的不确定状态。

  ```jsx static
  // bad
  class Hello extends React.Component {
    componentWillUpdate() {
      this.setState({
        name: this.props.name.toUpperCase()
      });
    }

    render() {
      return <div>Hello {this.state.name}</div>;
    }
  };

  // good
  class Hello extends React.Component {
    componentWillUpdate() {
      this.props.prepareHandler();
    }

    render() {
      return <div>Hello {this.props.name}</div>;
    }
  };

  class Hello extends React.Component {
    componentWillUpdate() {
      this.prepareHandler(function callback(newName) {
        this.setState({
          name: newName
        });
      });
    }

    render() {
      return <div>Hello {this.props.name}</div>;
    }
  };
  ```

### 2.3 Props

- 2.3.1【强制】采用小驼峰风格命名 prop 。eslint: [react/no-unknown-property](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md)

  ```jsx static
  // bad
  <Foo
    UserName="hello"
    phone_number={12345678}
  />

  // good
  <Foo
    userName="hello"
    phoneNumber={12345678}
  />
  ```

- 2.3.2【强制】声明的 prop 必须被使用。eslint: [react/no-unused-prop-types](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md)

  声明而未使用的 prop 可能带来潜在的问题，也会给维护者造成困扰，应将它们删除。

  ```jsx static
  // bad
  var Hello = createReactClass({
    propTypes: {
      name: PropTypes.string
    },
    render: function() {
      return <div>Hello Bob</div>;
    }
  });

  var Hello = createReactClass({
    propTypes: {
      firstname: PropTypes.string.isRequired,
      middlename: PropTypes.string.isRequired, // middlename is never used below
      lastname: PropTypes.string.isRequired
    },
    render: function() {
      return <div>Hello {this.props.firstname} {this.props.lastname}</div>;
    }
  });

  // good
  var Hello = createReactClass({
    propTypes: {
      name: PropTypes.string
    },
    render: function() {
      return <div>Hello {this.props.name}</div>;
    }
  });
  ```

- 2.3.3【参考】 props，state 优先使用解构赋值。eslint: [react/destructuring-assignment](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md)

  ```jsx static
  // bad
  const MyComponent = (props) => {
    return (<div id={props.id} />)
  };

  // good
  const MyComponent = ({id}) => {
    return (<div id={id} />)
  };

  const MyComponent = (props, context) => {
    const { id } = props;
    return (<div id={id} />)
  };
  ```

- 2.3.4【强制】prop 值为 true 时，可以省略它的值。eslint: [react/jsx-boolean-value](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md)

  ```jsx static
  // bad
  <Foo
    hidden={true}
  />

  // good
  <Foo
    hidden
  />
  ```

- 2.3.5【推荐】prop 需要 propTypes 验证。eslint: [react/prop-types](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md)

  PropTypes 验证接收到的数据从而提高组件的可重用性。如果其他开发传入了不正确数据类型，可以及时警告。

  ```jsx static
  // bad
  class Greeting extends React.Component {
    render() {
      return (
        <h1>Hello, {this.props.name}</h1>
      );
    }
  }

  // good
  class Greeting extends React.Component {
    render() {
      return (
        <h1>Hello, {this.props.name}</h1>
      );
    }
  }

  Greeting.propTypes = {
    name: PropTypes.string
  };
  ```

- 2.3.6【推荐】不要使用模糊的类型检查器。eslint: [react/forbid-prop-types](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md)

  不要使用模糊的类型验证，比如 any, array, object。它们可以用其他明确的类型代替。any可以替换为任意类型，array 和 object 可以分别替换为 arrayOf 和 shape。

  ```jsx static
  // bad
  class MyComponent extends React.Component {
    ...
  }

  MyComponent.propTypes = {
    // 任意类型的数据
    optionalAny: PropTypes.any,
    // 一个未指定元素类型的数组
    optionalArray: PropTypes.array,
    // 一个未指定属性类型的对象
    optionalObject: PropTypes.object
  };

  // good
  class MyComponent extends React.Component {
    ...
  }

  MyComponent.propTypes = {
    // 指明待验证数据的特性类型，确保接收的数据是有效的
    optionalAny: PropTypes.string,
    requiredAny: PropTypes.any.isRequired,
    // 一个指定了元素类型的数组
    optionalArray: PropTypes.arrayOf(PropTypes.number),
    // 一个指定了属性类型的对象
    optionalObject: PropTypes.shape({
      color: PropTypes.string,
      fontSize: PropTypes.number
    }),
  };
  ```

- 2.3.7【参考】属性需要指定 defaultProps，除了 isRequired 的属性。eslint: [react/require-default-props](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md)

  ```jsx static
  // bad
  function MyStatelessComponent({ foo, bar }) {
    return <div>{foo}{bar}</div>;
  }
  MyStatelessComponent.propTypes = {
    foo: PropTypes.number.isRequired,
    bar: PropTypes.string,
  };

  // good
  function MyStatelessComponent({ foo, bar }) {
    return <div>{foo}{bar}</div>;
  }
  MyStatelessComponent.propTypes = {
    foo: PropTypes.number.isRequired,
    bar: PropTypes.string,
  };
  MyStatelessComponent.defaultProps = {
    bar: '',
  };
  ```

- 2.3.8【强制】如果属性有 isRequired 类型检查，不要在 defaultProps 内对其赋值。eslint: [react/default-props-match-prop-types](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md)

  propTypes 类型检查发生在 defaultProps 解析之后，如果在 defaultProps 赋值，isRequired 类型检查没有实际意义。

  ```jsx static
  // bad
  MyStatelessComponent.propTypes = {
    foo: React.PropTypes.string.isRequired,
    bar: React.PropTypes.string
  };

  MyStatelessComponent.defaultProps = {
    foo: "foo"
  };

  // good
  MyStatelessComponent.propTypes = {
    foo: React.PropTypes.string.isRequired,
    bar: React.PropTypes.string
  };

  MyStatelessComponent.defaultProps = {
      bar: 'some default'
  };
  ```

- 2.3.9【推荐】不要用数组的索引值作为 map 生成元素的 key。eslint: [react/no-array-index-key](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md)

  为什么？React 使用 key 来标识哪些项已更改，已添加或已删除， [key 应该始终稳定](https://reactjs.org/docs/lists-and-keys.html#keys)。使用不稳定的 ID 是一种[反模式](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318)，因为它不能唯一标识元素。如果数组重新排序或将元素添加到数组的开头，可能会更改索引导致不必要的渲染，对性能产生负面影响。

  如果数组的顺序可能发生变化，我们不建议使用索引值作为 key。

  ```jsx static
  // bad
  {todos.map((todo, index) =>
    <Todo
      {...todo}
      key={index}
    />
  )}

  // good
  {todos.map(todo => (
    <Todo
      {...todo}
      key={todo.id}
    />
  ))}
  ```

- 2.3.10【强制】禁止将 children 作为属性名。eslint: [react/no-children-prop](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md)

  使用 JSX 时，`children` 应嵌套在开始和结束标签之间。不使用JSX时，应将 `children` 作为附加参数传递给 `React.createElement`。

  ```jsx static
  // bad
  <div children='Children' />

  <MyComponent children={<AnotherComponent />} />
  <MyComponent children={['Child 1', 'Child 2']} />

  React.createElement("div", { children: 'Children' })

  // good
  <div>Children</div>

  <MyComponent>Children</MyComponent>

  <MyComponent>
    <span>Child 1</span>
    <span>Child 2</span>
  </MyComponent>

  React.createElement("div", {}, 'Children')
  React.createElement("div", 'Child 1', 'Child 2')
  ```

- 2.3.11【强制】不要声明重复的属性名。eslint: [react/jsx-no-duplicate-props](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md)

  ```jsx static
  // bad
  <Hello name="John" name="John" />;

  // good
  <Hello firstname="John" lastname="Doe" />;
  ```

- 2.3.12【强制】style 的属性值必须是一个对象。eslint: [react/style-prop-object](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md)

  ```jsx static
  // bad
  <div style="color: 'red'" />
  <div style={true} />
  <Hello style={true} />

  const styles = true;
  <div style={styles} />

  React.createElement("div", { style: "color: 'red'" });
  React.createElement("div", { style: true });
  React.createElement("Hello", { style: true });

  const styles = true;
  React.createElement("div", { style: styles });

  // good
  <div style={{ color: "red" }} />
  <Hello style={{ color: "red" }} />

  const styles = { color: "red" };
  <div style={styles} />

  React.createElement("div", { style: { color: 'red' }});
  React.createElement("Hello", { style: { color: 'red' }});

  const styles = { height: '100px' };
  React.createElement("div", { style: styles });
  ```

- 2.3.13【推荐】不要单独使用 target='_blank'。eslint: [react/jsx-no-target-blank](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md)

  `target='_blank'` 常用于在新标签页打开。使用这个属性可能造成严重的安全问题。建议和 `rel='noreferrer noopener'` 一起使用。[详见](https://mathiasbynens.github.io/rel-noopener/)
  ```jsx static
  // bad
  const Hello = <a target='_blank' href="http://example.com/"></a>
  const Hello = <a target='_blank' href={ dynamicLink }></a>

  // good
  const Hello = <p target='_blank'></p>
  const Hello = <a target='_blank' rel='noopener noreferrer' href="http://example.com"></a>
  const Hello = <a target='_blank' href="relative/path/in/the/host"></a>
  const Hello = <a target='_blank' href="/absolute/path/in/the/host"></a>
  const Hello = <a></a>
  ```

### 2.4 State

- 2.4.1【强制】不要在 setState 中使用 this.state。eslint: [react/no-access-state-in-setstate](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md)

  在 setState 中使用 this.state 可能导致错误，当两个 state 在同一个批处理中时，引用的是旧状态而不是新状态。
  为避免这种情况，请在回调中使用 preState 作为第一个参数。
  ```jsx static
  // bad
  function increment() {
    this.setState({ value: this.state.value + 1 });
  }

  // good
  function increment() {
    this.setState(prevState => ({ value: prevState.value + 1 }));
  }
  ```

  bad case 中假设 value 为1，有两个 setState 操作在同一个批处理中执行，实际执行的是：
  ```
  setState({ value: 1 + 1 })
  setState({ value: 1 + 1 })
  ```
  good case 中 react 会以正确的更新后的状态调用参数。实际执行的是：
  ```
  setState({ value: 1 + 1 })
  setState({ value: 2 + 1 })
  ```

- 2.4.2【强制】声明的 state 必须被使用。eslint: [react/no-unused-state](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md)

  声明而未使用的 state 可能带来潜在的问题，也会给维护者造成困扰，应将它们删除。

  ```jsx static
  // bad
  class MyComponent extends React.Component {
    state = { foo: 0 };

    render() {
      return <SomeComponent />;
    }
  }

  var UnusedGetInitialStateTest = createReactClass({
    getInitialState: function() {
      return { foo: 0 };
    },
    render: function() {
      return <SomeComponent />;
    }
  })

  // good
  class MyComponent extends React.Component {
    state = { foo: 0 };

    render() {
      return <SomeComponent foo={this.state.foo} />;
    }
  }

  var UnusedGetInitialStateTest = createReactClass({
    getInitialState: function() {
      return { foo: 0 };
    },
    render: function() {
      return <SomeComponent foo={this.state.foo} />;
    }
  })
  ```

### 2.5 Refs

- 2.5.1【强制】使用 ref 回调函数或 React.createRef()，不要使用字符串。eslint: [react/no-string-refs](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md)

  ```jsx static
  // bad - 使用字符串
  class MyComponent extends React.Component {
    componentDidMount() {
      this.refs.inputRef.focus();
    }

    render() {
      return <input type="text" ref="inputRef" />;
    }
  }

  // good - 使用回调函数
  class MyComponent extends React.Component {
    componentDidMount() {
      this.inputRef.focus();
    }

    render() {
      return <input type="text" ref={(ele) => { this.inputRef = ele; }} />;
    }
  }

  // good - 使用 React.createRef()，React V16 后版本支持
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);

      this.inputRef = React.createRef();
    }

    componentDidMount() {
      this.inputRef.current.focus();
    }

    render() {
      return <input type="text" ref={this.inputRef} />;
    }
  }
  ```

### 2.6 顺序

- 2.6.1【参考】组件方法的排序规则。eslint: [react/sort-comp](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md)

  React 组件内有声明周期方法、事件处理方法、render 方法等几类方法，指定这些方法按固定的顺序排序可以增强代码的一致性，方便查找和阅读。

  我们推荐的方法排序如下：

    - 可选的 `static` 方法
    - `constructor`
    - `getChildContext`
    - `componentWillMount`
    - `componentDidMount`
    - `componentWillReceiveProps`
    - `shouldComponentUpdate`
    - `componentWillUpdate`
    - `componentDidUpdate`
    - `componentWillUnmount`
    - *clickHandlers 或 eventHandlers* 比如 `onClickSubmit()` 或 `onChangeDescription()`
    - *`render` 的 getter 方法* 比如 `getSelectReason()` 或 `getFooterContent()`
    - *可选的 render 方法* 比如 `renderNavigation()` 或 `renderProfilePicture()`
    - `render`

### 2.7 Mixins

- 2.7.1【强制】不要使用 mixins。

  Mixins 引入了隐式依赖，可能导致命名冲突，并导致滚雪球式的复杂度。大多数使用 mixin 的场景都可以通过组件、高阶组件或工具模块以更好的方式完成。

## 3 命名

- 3.1【强制】文件扩展名： 使用 .jsx、.tsx、.js 或 .ts 作为 React 组件的文件扩展名。eslint: [react/jsx-filename-extension](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md)

- 3.2【强制】引用名：使用大驼峰风格命名引用的组件，使用小驼峰风格命名引用组件的实例。eslint: [react/jsx-pascal-case](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md)

  ```jsx static
  // bad
  import reservationCard from './reservation-card';

  // good
  import ReservationCard from './reservation-card';

  // bad
  const ReservationItem = <ReservationCard />;

  // good
  const reservationItem = <ReservationCard />;
  ```

- 3.3【推荐】高阶组件命名：将高阶组件名和传入组件名组合作为 displayName。

  例如，高阶组件 `withFoo()` ，当传入组件 `Bar` 时，应该产生一个组件，应使用 withFoo(Bar) 作为生成组件的  displayName。

  组件的 `displayName` 可被开发者工具和报错信息使用，这种组合的命名方式能清晰地表达高阶组件和被包裹组件的关系。

  ```jsx static
  // bad
  export default function withFoo(WrappedComponent) {
    return function WithFoo(props) {
      return <WrappedComponent {...props} foo />;
    }
  }

  // good
  export default function withFoo(WrappedComponent) {
    function WithFoo(props) {
      return <WrappedComponent {...props} foo />;
    }

    const wrappedComponentName = WrappedComponent.displayName
      || WrappedComponent.name
      || 'Component';

    WithFoo.displayName = `withFoo(${wrappedComponentName})`;
    return WithFoo;
  }
  ```

## 4 Hooks

- 4.1【强制】只在最顶层调用 Hooks，不要在循环、条件和嵌套函数中调用 Hooks。eslint: [rules of Hooks - only call Hooks at the top level](https://reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level)

  ```jsx static
  // bad - call Hooks inside conditions
  function ComponentWithConditionalHook() {
    if (cond) {
      useConditionalHook();
    }
  }

  // bad - call Hooks inside loops
  function ComponentWithHookInsideLoop() {
    while (cond) {
      useHookInsideLoop();
    }
  }

  // bad - call Hooks inside callback
  function ComponentWithHookInsideCallback() {
    useEffect(() => {
      useHookInsideCallback();
    });
  }

  // good
  function ComponentWithHook() {
    useHook();
  }
  ```

- 4.2【强制】Hooks 命名必须以 `use` 开头，小驼峰形式

  ```jsx static
  // bad
  const customHook = () => {}

  // good
  const useCustomHook = () => {}
  ```

- 4.3【强制】只在 React 函数组件和自定义 Hooks 中调用 Hooks，不能在普通的 JavaScript 函数中调用 Hooks。eslint: [rules of Hooks - only call Hooks from React functions](https://reactjs.org/docs/hooks-rules.html#only-call-hooks-from-react-functions)

  ``` jsx
  // bad - call Hooks inside class componennt
  class ClassComponentWithHook extends React.Component {
    render() {
      React.useState();
    }
  }

  // bad - call Hooks inside normal function
  function normalFunctionWithHook() {
    useHookInsideNormalFunction();
  }

  // good - call Hooks inside function component
  function ComponentWithHook() {
    useHook();
  }

  // good - call Hooks inside custom Hooks
  function useHookWithHook() {
    useHook();
  }
  ```

- 4.4【推荐】`useEffect` 及[类似 Hooks ](https://github.com/facebook/react/blob/3c1a7ac87c5b4903aa0de02d11bd9ec2590ad598/packages/eslint-plugin-react-hooks/src/ExhaustiveDeps.js#L1518)需要声明所有依赖。eslint: [exhaustive-deps](https://github.com/facebook/react/issues/14920)

  此规则在某些场景下可能过于严格，并且 ESLint autofix 可能会造成一些[问题](https://github.com/facebook/react/issues/16313)，因此需注意：
  - 升级 `eslint-plugin-react-hooks` 到 2.4.0 版本及以上，因为 [2.4.0 版本后该规则的 autofix 被默认禁用](https://github.com/facebook/react/blob/master/packages/eslint-plugin-react-hooks/CHANGELOG.md#240)
  - 如果某些场景下此规则确实不适用，可以通过 ESLint 行注释手动禁用此规则，在行尾添加： `// eslint-disable-line react-hooks/exhaustive-deps`

  ```jsx static
  // bad
  function MyComponent() {
    const local = {};
    useEffect(() => {
      console.log(local);
    }, []);
  }

  // good
  function MyComponent() {
    const local = {};
    useEffect(() => {
      console.log(local);
    }, [local]);
  }
  ```

## 5 无障碍

[无障碍丰富互联网应用规范（WAI-ARIA，简称 ARIA）](https://www.w3.org/TR/wai-aria/)是 W3C 发布的技术规范，定义了一组可用于元素的 HTML 特性，作为对 HTML 语义化的补充，让残障人士能更加便利的访问 Web 内容和使用 Web 应用。

本章节会涉及到一些 WAI-ARIA 规范中的术语：
- 角色（role）：定义了元素的种类。如 `role="button"` 告诉屏幕阅读器这是一个按钮元素。
- 属性（property）：通过给元素定义一些属性，让他们具备更多的语义。例如 `aria-required="true"` 意味着该元素在表单上是必填的。
- 状态（state）：用于表达元素当前的条件的特殊属性，例如 `aria-disabled="true"`，屏幕阅读器就会禁止编辑这个表单元素。状态和属性的差异之处就是：属性在应用的生命周期中不会改变，而状态可以，通常我们用编程的方法改变它，例如 JavaScript。

[这篇文档](https://developer.mozilla.org/zh-CN/docs/Learn/Accessibility/WAI-ARIA_basics)对 WAI-ARIA 规范的内容和使用做了初步介绍。

- 5.1【推荐】img 标签应包含 alt 属性。eslint: [jsx-a11y/alt-text](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md)

  如果图片无需被无障碍阅读器识别(如作为 button 的 icon 使用)，你可以将 `alt` 属性写为空字符串

  ```jsx static
  // bad
  <img src="hello.jpg" />

  // good
  <img src="hello.jpg" alt="Me waving hello" />

  // good - 图片无需被无障碍阅读器识别时
  <button>
    <img src="icon.png" alt="" />
    Save
  </button>
  ```

- 5.2【推荐】img 标签的 alt 属性不要使用 "image"，"photo"，"picture" 之类的关键词。eslint: [jsx-a11y/img-redundant-alt](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md)

  屏幕阅读器已会将 `img` 元素识别成图片，再在 alt 中包含这类关键词没有意义。

  ```jsx static
  // bad
  <img src="hello.jpg" alt="Picture of me waving hello" />

  // good
  <img src="hello.jpg" alt="Me waving hello" />
  ```

- 5.3【推荐】锚元素(即 `<a>` 元素)必须含有内容，且内容必须对屏幕阅读器可见(这里指内容不能通过设置 `aria-hidden` 属性隐藏)。eslint: [jsx-a11y/anchor-has-content](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-has-content.md)

  ```jsx static
  // bad - empty content
  <a />

  // bad - content not accessible to screen readers
  <a><TextWrapper aria-hidden /></a>

  // good
  <a>Anchor Content!</a>
  <a><TextWrapper /><a>
  ```

- 5.4【推荐】禁止使用无效的 ARIA 属性，只能使用列在 [WAI-ARIA States and Properties spec](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties) 中的 `aria-*` 属性。eslint: [jsx-a11y/aria-props](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-props.md)

  ```jsx static
  // bad - Labeled using incorrectly spelled aria-labeledby
  <div id="address_label">Enter your address</div>
  <input aria-labeledby="address_label">

  // good - Labeled using correctly spelled aria-labelledby
  <div id="address_label">Enter your address</div>
  <input aria-labelledby="address_label">
  ```

- 5.5【推荐】ARIA 属性、状态的值必须为有效值。eslint: [jsx-a11y/aria-proptypes](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-proptypes.md)
  ```jsx static
  // bad - the aria-hidden state is of type true/false
  <span aria-hidden="yes">foo</span>

  // good
  <span aria-hidden="true">foo</span>
  ```

- 5.6【推荐】禁止特定元素包含 `role` 和 `aria-*` 属性。一些保留的 DOM 元素不支持设置 ARIA 角色或者属性，通常是因为这些元素是不可见的，例如 `meta, html, script, style`。eslint: [jsx-a11y/aria-unsupported-elements](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-unsupported-elements.md)

  ```jsx static
  // bad - the meta element should not be given any ARIA attributes
  <meta charset="UTF-8" aria-hidden="false" />

  // good
  <meta charset="UTF-8" />
  ```

- 5.7【推荐】仅使用有效的、非抽象的 ARIA roles，[了解更多](https://www.w3.org/TR/wai-aria/#roles_categorization)。eslint: [jsx-a11y/aria-role](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md)

  ```jsx static
  // bad - not an ARIA role
  <div role="datepicker" />

  // bad - abstract ARIA role
  <div role="range" />

  // good
  <div role="button" />
  ```

- 5.8【推荐】有 ARIA role 的元素必须也声明该 role 需要的属性，[了解更多](https://www.w3.org/TR/wai-aria/#requiredState)。eslint: [jsx-a11y/role-has-required-aria-props](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-has-required-aria-props.md)

  ```jsx static
  // bad - the checkbox role requires the aria-checked state
  <span role="checkbox" aria-labelledby="foo" tabindex="0"></span>

  // good - the checkbox role requires the aria-checked state
  <span role="checkbox" aria-checked="false" aria-labelledby="foo" tabindex="0"></span>
  ```

- 5.9【推荐】强制拥有显式或隐式 role 的元素，只能含有该 role 支持的 `aria-*` 属性。eslint: [jsx-a11y/role-supports-aria-props](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-supports-aria-props.md)

  一些元素会有隐式的 role ，譬如 `<a href="#">` ，会被解析为 `role="link"`。很多 ARIA 属性只能在具有特定 role 的元素上使用

  ```jsx static
  // bad - the radio role does not support the aria-required property
  <ul role="radiogroup" aria-labelledby="foo">
    <li aria-required tabIndex="-1" role="radio" aria-checked="false">Rainbow Trout</li>
    <li aria-required tabIndex="-1" role="radio" aria-checked="false">Brook Trout</li>
    <li aria-required tabIndex="0" role="radio" aria-checked="true">Lake Trout</li>
  </ul>

  // good - the radiogroup role does support the aria-required property
  <ul role="radiogroup" aria-required aria-labelledby="foo">
    <li tabIndex="-1" role="radio" aria-checked="false">Rainbow Trout</li>
    <li tabIndex="-1" role="radio" aria-checked="false">Brook Trout</li>
    <li tabIndex="0" role="radio" aria-checked="true">Lake Trout</li>
  </ul>
  ```

- 5.10【推荐】`<iframe>` 元素必须有一个唯一的 title 属性，表示其内容。eslint: [jsx-a11y/iframe-has-title](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/iframe-has-title.md)

  ```jsx static
  // bad
  <iframe />
  <iframe {...props} />
  <iframe title="" />
  <iframe title={undefined} />
  <iframe title={false} />
  <iframe title={true} />
  <iframe title={42} />

  // good
  <iframe title="This is a unique title" />
  ```

- 5.11【推荐】不要使用 accessKey 属性。accessKey 属性提供了为当前元素生成快捷键的方式，不过 accessKey 值可能与系统或浏览器键盘快捷键或辅助技术功能相冲突，所以不建议使用。eslint: [jsx-a11y/no-access-key](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md)

  ```jsx static
  // bad
  <div accessKey="h" />

  // good
  <div />
  ```

- 5.12【推荐】禁止使用会造成视觉分散的元素。一些会引起视觉注意力分散的元素对视觉障碍的用户会造成问题，例如 `<marquee>` 和 `<blink>`。eslint: [jsx-a11y/no-distracting-elements](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-distracting-elements.md)

  ```jsx static
  // bad
  <marquee />
  <blink />

  // good
  <div />
  ```

- 5.13【推荐】scope 属性只能在 `<th>` 元素上使用，[了解更多](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Advanced#The_scope_attribute)。eslint: [jsx-a11y/scope](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/scope.md)

  ```jsx static
  // bad
  <div scope />

  // good
  <th scope="col" />
  ```

## 配套工具

- [eslint-config-ali](https://www.npmjs.com/package/eslint-config-ali)：本规约配套的 [ESLint](http://eslint.org/) 规则包，可使用 `eslint-config-ali/react` 或 `eslint-config-ali/typescript/react` 引入本文介绍的规则（「无障碍」章节的规则未默认引入，如需引入请参考[文档](https://www.npmjs.com/package/eslint-config-ali)中的「a11y 支持」章节）


## 参考资料

- [React 官网 - v16.6.0](https://reactjs.org/docs/)
- [Airbnb JavaScript Style Guide - React](https://github.com/airbnb/javascript/master/react)
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react/)
- [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html)
- [MDN - 可访问性](https://developer.mozilla.org/zh-CN/docs/learn/Accessibility)
- [谷歌开发者 - 无障碍功能](https://developers.google.com/web/fundamentals/accessibility?hl=zh_cn)
