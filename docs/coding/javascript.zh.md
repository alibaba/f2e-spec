---
group: 代码风格
order: 3
---

# JavaScript 编码规约

## 前言

JavaScript 编码规约主要包含编码风格、语言特性、注释、命名、配套工具等几个部分。本规约面向的 ECMAScript 语言版本是 ES6+，并提供了「关于 ES5」章节供仍在使用 ES5 的开发者查阅。

## 1 编码风格

![示例代码标注图](https://img.alicdn.com/tfs/TB1IaB4hIVl614jSZKPXXaGjpXa-772-484.svg)

上图是一张符合规约要求编码风格的速览图，详细规则如下：

### 1.1 缩进

- 1.1.1 `强制` 使用 2 个空格缩进。eslint: [indent](https://eslint.org/docs/rules/indent)

  统一使用 2 个空格缩进，不要使用 4 个空格或 tab 缩进：

  ```js
  // bad
  function foo() {
  ∙∙∙∙let name;
  }

  // good
  function foo() {
  ∙∙let name;
  }
  ```

### 1.2 分号

- 1.2.1 `强制` 使用分号。eslint: [semi](https://eslint.org/docs/rules/semi)

  统一以分号结束语句，可以避免 JS 引擎自动分号插入机制的怪异行为，在语义上也更加明确。

  > 自动分号插入机制（即 [Automatic Semicolon Insertion](https://tc39.github.io/ecma262/#sec-automatic-semicolon-insertion)，简称 ASI） 是当 JS 遇到不带分号的语句时判断是否自动添加分号的机制，它在个别情况下的行为比较怪异，可能导致意想不到的效果。此外随着 JS 新特性的增加，异常的情况可能变得更加复杂。

  ```js
  // bad - 导致 Uncaught ReferenceError 报错
  const luke = {}
  const leia = {}
  [luke, leia].forEach((jedi) => {
    jedi.father = 'vader'
  })

  // good
  const luke = {};
  const leia = {};
  [luke, leia].forEach((jedi) => {
    jedi.father = 'vader';
  });

  // bad - 导致 Uncaught ReferenceError 报错
  const reaction = "No! That's impossible!"
  (async function meanwhileOnTheFalcon() {
  }())

  // good
  const reaction = "No! That's impossible!";
  (async function meanwhileOnTheFalcon() {
  }());

  // bad - 函数将返回 `undefined` 而不是换行后的值
  function foo() {
    return
      'Result want to be returned'
  }

  // good
  function foo() {
    return 'Result want to be returned';
  }
  ```

### 1.3 逗号

- 1.3.1 `强制` 对于逗号分隔的多行结构，不使用行首逗号。eslint: [comma-style](https://eslint.org/docs/rules/comma-style)

  ```js
  // bad
  const story = [
      once
    , upon
    , aTime
  ];

  // good
  const story = [
    once,
    upon,
    aTime,
  ];

  // bad
  const hero = {
      firstName: 'Ada'
    , lastName: 'Lovelace'
    , superPower: 'computers'
  };

  // good
  const hero = {
    firstName: 'Ada',
    lastName: 'Lovelace',
    superPower: 'computers',
  };
  ```

- 1.3.2 `强制` 对于逗号分隔的多行结构，始终加上最后一个逗号。eslint: [comma-dangle](https://eslint.org/docs/rules/comma-dangle)

  这样可以使增删行更加容易，也会使 git diffs 更清晰。Babel 等编译器会在编译后的代码里帮我们去掉最后额外的逗号，因此不必担心在旧浏览器中的问题。

  ```diff
  // bad - 没有结尾逗号时，新增一行的 git diff 示例
  const hero = {
       firstName: 'Florence',
  -    lastName: 'Nightingale'
  +    lastName: 'Nightingale',
  +    inventorOf: ['coxcomb chart', 'modern nursing']
  };

  // good - 有结尾逗号时，新增一行的 git diff 示例
  const hero = {
       firstName: 'Florence',
       lastName: 'Nightingale',
  +    inventorOf: ['coxcomb chart', 'modern nursing'],
  };
  ```

  ```js
  // bad
  const hero = {
    firstName: 'Dana',
    lastName: 'Scully'
  };

  const heroes = [
    'Batman',
    'Superman'
  ];

  function createHero(
    firstName,
    lastName,
    inventorOf
  ) {
    // ...
  }

  createHero(
    firstName,
    lastName,
    inventorOf
  );

  // good
  const hero = {
    firstName: 'Dana',
    lastName: 'Scully',
  };

  const heroes = [
    'Batman',
    'Superman',
  ];

  function createHero(
    firstName,
    lastName,
    inventorOf,
  ) {
    // ...
  }

  createHero(
    firstName,
    lastName,
    inventorOf,
  );

  // good - 需注意，使用扩展运算符的元素后面不能加逗号
  function createHero(
    firstName,
    lastName,
    inventorOf,
    ...heroArgs
  ) {
    // ...
  }
  ```

### 1.4 块

> 术语解释：**块（block）** 可以理解为类、函数、控制语句等由大括号 `{}` 分隔的代码块状结构，由一对大括号界定，用于组合若干条语句 [了解更多](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block)

- 1.4.1 `推荐` 始终使用大括号包裹代码块。eslint: [curly](https://eslint.org/docs/rules/curly) [nonblock-statement-body-position](https://eslint.org/docs/rules/nonblock-statement-body-position)

  多行代码块必须用大括号包裹：

  ```js
  // bad
  if (foo)
    bar();
    baz(); // 这一行并不在 if 语句里

  // good
  if (foo) {
    bar();
    baz();
  }
  ```

  代码块只有一条语句时，可以省略大括号，并跟控制语句写在同一行。但出于一致性和可读性考虑，不推荐这样做：

  ```js
  // bad
  if (foo)
    return false;

  // bad - 允许但不推荐
  if (foo) return false;

  // good
  if (foo) {
    return false;
  }
  ```

#### 1.4.2 大括号换行风格

- 1.4.2.1 `强制` 对于非空代码块，采用 Egyptian Brackets 风格。eslint: [brace-style](https://eslint.org/docs/rules/brace-style)

  对于非空的代码块，大括号的换行方式采用 [Egyptian Brackets](https://blog.codinghorror.com/new-programming-jargon/) 风格，具体规则如下：

  - 左大括号 `{` 前面不换行，后面换行
  - 右大括号 `}` 前面换行
  - 右大括号 `}` 后面是否换行有两种情况：
    - 如果 `}` 终结了整个语句，如条件语句、函数或类的主体，则需要换行
    - 如果 `}` 后面存在 `else`、`catch`、`while` 等语句，或存在逗号、分号、右小括号（`)`），则不需要换行

  ```js
  // bad - else 应与 if 的 } 放在同一行
  if (foo) {
    thing1();
  }
  else
    thing2();
  }

  // good
  if (foo) {
    thing1();
  } else {
    thing2();
  }
  ```

- 1.4.2.2 `参考` 对于空代码块，可以将大括号直接闭合。

  对于空的代码块，且不在类似 `if..else..` 或 `try..catch..finally..` 的多块结构中时，可以立即将大括号闭合：

  ```js
  // good
  function doNothing() {}
  ```

  但如果空代码块在多块结构中，仍建议按上一条非空块的 Egyptian Brackets 风格换行：

  ```js
  // bad
  if (condition) {
    // …
  } else if (otherCondition) {} else {
    // …
  }

  // good
  if (condition) {
    // …
  } else if (otherCondition) {
  } else {
    // …
  }

  // bad
  try {
    // …
  } catch (e) {}

  // good
  try {
    // …
  } catch (e) {
  }
  ```

- 1.4.3 `强制` 不要使用空代码块。eslint: [no-empty](https://eslint.org/docs/rules/no-empty)

  不要让代码中出现空代码块，这会使阅读者感到困惑。如果必须使用空块，需在块内写明注释。

  ```js
  // bad
  if (condition) {
    thing1();
  } else {
  }

  // good
  if (condition) {
    thing1();
  } else {
    // TODO I haven’t determined what to do.
  }
  ```

### 1.5 空格

合理并一致地使用空格有助于提升代码的可读性和可维护性。具体来说，我们采用如下的空格风格：

- 1.5.1 `强制` 空格风格。eslint: [space-before-blocks](https://eslint.org/docs/rules/space-before-blocks) [keyword-spacing](https://eslint.org/docs/rules/keyword-spacing) [space-in-parens](https://eslint.org/docs/rules/space-in-parens) [array-bracket-spacing](https://eslint.org/docs/rules/array-bracket-spacing) [object-curly-spacing](https://eslint.org/docs/rules/object-curly-spacing) [space-infix-ops](https://eslint.org/docs/rules/space-infix-ops) [key-spacing](https://eslint.org/docs/rules/key-spacing)

  块的左大括号 `{` 前有一个空格：

  ```js
  // bad
  function test(){
    console.log('test');
  }

  // good
  function test() {
    console.log('test');
  }

  // bad
  dog.set('attr',{
    age: '1 year',
    breed: 'Bernese Mountain Dog',
  });

  // good
  dog.set('attr', {
    age: '1 year',
    breed: 'Bernese Mountain Dog',
  });
  ```

  控制语句（`if`、`while` 等）的左小括号 `(` 前有一个空格：

  ```js
  // bad
  if(isJedi) {
    fight ();
  }

  // good
  if (isJedi) {
    fight();
  }
  ```

  声明函数时，函数名和参数列表之间无空格：

  ```js
  // bad
  function fight () {
    console.log ('Swooosh!');
  }

  // good
  function fight() {
    console.log('Swooosh!');
  }
  ```

  小括号内部两侧无空格：

  ```js
  // bad
  function bar( foo ) {
    return foo;
  }

  // good
  function bar(foo) {
    return foo;
  }

  // bad
  if ( foo ) {
    console.log( foo );
  }

  // good
  if (foo) {
    console.log(foo);
  }
  ```

  方括号内部两侧无空格：

  ```js
  // bad
  const foo = [ 1, 2, 3 ];
  console.log(foo[ 0 ]);

  // good
  const foo = [1, 2, 3];
  console.log(foo[0]);
  ```

  大括号内部两侧有空格：

  ```js
  // bad
  const foo = {clark: 'kent'};

  // good
  const foo = { clark: 'kent' };
  ```

  运算符两侧有空格，除了一元运算符：

  ```js
  // bad
  const x=y+5;

  // good
  const x = y + 5;

  // bad
  const isRight = result === 0? false: true;

  // good
  const isRight = result === 0 ? false : true;

  // bad - 一元运算符与操作对象间不应有空格
  const x = ! y;

  // good
  const x = !y;
  ```

  定义对象字面量时， key, value 之间有且只有一个空格，不允许所谓的「水平对齐」：

  ```js
  // bad
  {
    a:            'short',
    looooongname: 'long',
  }

  // bad
  {
    a           : 'short',
    looooongname: 'long',
  }

  // good
  {
    a: 'short',
    looooongname: 'long',
  }
  ```



### 1.6 空行

- 1.6.1 `推荐` 在文件末尾保留一行空行。eslint: [eol-last](https://eslint.org/docs/rules/eol-last)

  在非空文件中保留拖尾换行是一种常见的 UNIX 风格。它的好处同输出文件到终端一样，方便在串联和追加文件时不会打断 shell 的提示。

  我们统一在文件末尾保留一行空行，即用一个换行符结束文件：

  ```js
  // bad - 文件末尾未保留换行符
  import { foo } from './Foo';
  // ...
  export default foo;

  // bad - 文件末尾保留了2个换行符
  import { foo } from './Foo';
  // ...
  export default foo;↵
  ↵

  // good
  import { foo } from './Foo';
  // ...
  export default foo;↵
  ```


- 1.6.2 `强制` 块的开始和结束不能是空行。eslint: [padded-blocks](https://eslint.org/docs/rules/padded-blocks)

  ```js
  // bad
  function bar() {

    console.log(foo);

  }

  // good
  function bar() {
    console.log(foo);
  }

  // bad
  if (baz) {

    console.log(qux);
  } else {
    console.log(foo);

  }

  // good
  if (baz) {
    console.log(qux);
  } else {
    console.log(foo);
  }
  ```

- 1.6.3 `参考` 在块末和新语句间插入一个空行。

  ```js
  // bad
  if (foo) {
    return bar;
  }
  return baz;

  // good
  if (foo) {
    return bar;
  }

  return baz;

  // bad
  const obj = {
    foo() {
    },
    bar() {
    },
  };
  return obj;

  // good
  const obj = {
    foo() {
    },

    bar() {
    },
  };

  return obj;
  ```

### 1.7 最大字符数和最大行数

- 1.7.1 `推荐` 单行最大字符数：100。eslint: [max-len](https://eslint.org/docs/rules/max-len)

  过长的单行代码不易阅读和维护，需要进行合理换行。

  我们推荐单行代码最多不要超过 100 个字符，除了以下两种情况：

  - 字符串和模板字符串
  - 正则表达式

  ```js
  // bad
  const foo = jsonData && jsonData.foo && jsonData.foo.bar && jsonData.foo.bar.baz && jsonData.foo.bar.baz.quux && jsonData.foo.bar.baz.quux.xyzzy;

  // good
  const foo = jsonData
    && jsonData.foo
    && jsonData.foo.bar
    && jsonData.foo.bar.baz
    && jsonData.foo.bar.baz.quux
    && jsonData.foo.bar.baz.quux.xyzzy;

  // bad
  $.ajax({ method: 'POST', url: 'https://foo.com/', data: { name: 'John' } }).done(() => console.log('Congratulations!')).fail(() => console.log('You have failed this city.'));

  // good
  $.ajax({
    method: 'POST',
    url: 'https://foo.com/',
    data: { name: 'John' },
  })
    .done(() => console.log('Congratulations!'))
    .fail(() => console.log('You have failed this city.'));
  ```

- 1.7.2 `参考` 文件最大行数：1000。eslint: [max-lines](https://eslint.org/docs/rules/max-lines)

  过长的文件不易阅读和维护，最好对其进行拆分。

- 1.7.3 `参考` 函数最大行数：80。eslint: [max-lines-per-function](https://eslint.org/docs/rules/max-lines-per-function)

  过长的函数不易阅读和维护，最好对其进行拆分。

## 2 语言特性

### 2.1 变量声明

- 2.1.1 `强制` 使用 const 或 let 声明变量。eslint: [no-var](https://eslint.org/docs/rules/no-var) [no-undef](https://eslint.org/docs/rules/no-undef)

  从 ES6 开始，可以使用 `let` 和 `const` 关键字在块级作用域下声明变量。块级作用域在很多其他编程语言中都有使用，这样声明的变量不会污染全局命名空间。

  不要使用 `var`：

  ```js
  // bad
  var foo = 'foo';
  var bar;

  // good
  const foo = 'foo';
  let bar;
  ```

  更不要什么都不用（这将产生全局变量，从而污染全局命名空间）：

  ```js
  // bad
  foo = 'foo';

  // good
  const foo = 'foo';
  ```

- 2.1.2 `强制` 正确地使用 const 和 let。eslint: [prefer-const](https://eslint.org/docs/rules/prefer-const)

  声明变量时，应优先使用 `const`，只有当变量会被重新赋值时才使用 `let`：

  ```js
  // bad - 声明后未发生重新赋值，应使用 const
  let flag = true;
  if (flag) {
    console.log(flag);
  }

  // good - 声明后发生重新赋值，let 使用正确
  let flag = true;
  if (flag) {
    flag = false;
  }
  ```

  需注意，数组和对象是一个引用，对数组某项和对象某属性的修改并不是重新赋值，因此多数情况下应用 `const` 声明：

  ```js
  // bad
  let arr = [];
  let obj = {};
  arr[0] = 'foo';
  obj.name = 'bar';

  // good
  const arr = [];
  const obj = {};
  arr.push('foo');
  obj.name = 'bar';
  ```

- 2.1.3 `强制` 一条声明语句声明一个变量。eslint: [one-var](https://eslint.org/docs/rules/one-var)

  这样做更易于追加新的声明语句（你不需要总去把最后的 `;` 改成 `,` 了），也更易于进行单步调试。

  ```js
  // bad
  const foo = 1,
        bar = 2;

  // good
  const foo = 1;
  const bar = 2;
  ```

- 2.1.4 `强制` 声明的变量必须被使用。eslint: [no-unused-vars](https://eslint.org/docs/rules/no-unused-vars)

  声明而未使用的变量、表达式可能带来潜在的问题，也会给维护者造成困扰，应将它们删除。

  ```js
  // bad - 未使用变量 foo
  const foo = 1;

  // good
  const foo = 1;
  doSomethingWith(foo);

  // bad - 只修改变量不认为是被使用
  let bar = 1;
  bar = 2;
  bar += 1;

  // good
  let bar = 1;
  bar = 2;
  bar += 1;
  doSomethingWith(bar);

  // bad - 未使用参数 y
  function getX(x, y) {
    return x;
  }

  // good
  function getXPlusY(x, y) {
    return x + y;
  }
  ```

- 2.1.5 `强制` 不要在声明前就使用变量。eslint: [no-use-before-define](https://eslint.org/docs/rules/no-use-before-define)

  在 ES5 中，由于 `var` 的声明提升作用，变量可以在声明前使用，但这样做可能给人带来疑惑和隐患，所以不要在声明前就使用变量：

  ```js
  // bad
  console.log(foo); // => undefined
  var foo = 'foo';

  // good
  var foo = 'foo';
  console.log(foo); // => foo
  ```

  在 ES6 中，由于 `const` 和 `let` 没有声明提升作用，如果在声明前就使用变量，会直接报错：

  ```js
  // bad
  console.log(foo); // => Uncaught ReferenceError: foo is not defined
  const foo = 'foo';

  // good
  const foo = 'foo';
  console.log(foo); // => foo
  ```

- 2.1.6 `参考` 哪里使用，哪里声明。

  在变量被使用前再进行声明，而不是统一在块开始处进行声明。

  ES6 提供的 `let` 和 `const` 是块级作用域，不存在类似 `var` 的声明提升的问题。因此我们可以把声明写在更合理的地方（一般是变量被使用前），而不是统一在块开始处进行声明。

  ```js
  // bad - 如果权限校验（checkUserPermission）失败，fetchData 是不必要的
  function getData(id) {
    const data = fetchData(id);

    if (!checkUserPermission()) {
      return false;
    }

    if (data.foo === 'bar') {
      // ...
    }

    return data;
  }

  // good
  function getData(id) {
    if (!checkUserPermission()) {
      return false;
    }

    const data = fetchData(id);

    if (data.foo === 'bar') {
      // ...
    }

    return data;
  }
  ```

- 2.1.7 `强制` 变量不要与外层作用域已存在的变量同名。eslint: [no-shadow](https://eslint.org/docs/rules/no-shadow)

  如果变量与外层已存在变量同名，会降低可读性，也会导致内层作用域无法读取外层作用域的同名变量。

  ```js
  // bad
  const foo = 1;
  if (someCondition) {
    const foo = 2;
    console.log(foo); // => 2
  }

  // good
  const foo = 1;
  if (someCondition) {
    const bar = 2;
    console.log(bar); // => 2
    console.log(foo); // => 1
  }
  ```

- 2.1.8 `强制` 不要重复声明变量和函数。eslint: [no-redeclare](https://eslint.org/docs/rules/no-redeclare)

  在 ES5 中，尽管使用 `var` 重复声明不会报错，但这样做会令人疑惑，降低程序的可维护性。同理，函数的声明也不要与已存在的变量和函数重名：

  ```js
  // bad
  var a = 'foo';
  var a = 'bar';
  function a() {}
  console.log(a); // => 'bar'

  // good
  var a = 'foo';
  var b = 'bar';
  function c() {}
  console.log(a); // => 'foo'

  // bad - arg 已作为函数参数声明
  function myFunc(arg) {
    var arg = 'foo';
    console.log(arg);
  }
  myFunc('bar'); // => 'foo'

  // good
  function myFunc(arg) {
    var otherName = 'foo';
    console.log(arg);
  }
  myFunc('bar'); // => 'bar'
  ```

  在 ES6 中，使用 `const` 或 `let` 重复声明变量会直接报错：

  ```js
  // bad
  const a = 'foo';
  function a() {} // => Uncaught SyntaxError: Identifier 'a' has already been declared

  // good
  const a = 'foo';
  function b() {}

  // bad - arg 已作为函数参数声明
  function myFunc(arg) {
    const arg = 'foo';
    console.log(arg);
  }
  myFunc('bar'); // => Uncaught SyntaxError: Identifier 'arg' has already been declared

  // good
  function myFunc(arg) {
    const otherName = 'foo';
    console.log(arg);
  }
  myFunc('bar'); // => 'bar'
  ```

- 2.1.9 `强制` 禁止连续赋值。eslint: [no-multi-assign](https://eslint.org/docs/rules/no-multi-assign)

  变量的连续赋值让人难以阅读和理解，并且可能导致意想不到的结果（如产生全局变量）。

  ```js
  // bad - 本例的结果是 let 仅对 a 起到了预想效果，b 和 c 都成了全局变量
  (function test() {
    let a = b = c = 1; // 相当于 let a = (b = (c = 1));
  })();

  console.log(a); // throws ReferenceError
  console.log(b); // 1
  console.log(c); // 1

  // good
  (function test() {
    let a = 1;
    let b = a;
    let c = a;
  })();

  console.log(a); // throws ReferenceError
  console.log(b); // throws ReferenceError
  console.log(c); // throws ReferenceError
  ```

- 2.1.10 `参考` 将 let 和 const 分别归类。

  将 `let` 和 `const` 归类写在一起，可以提高代码整洁性。此外，如果你想按变量的含义排序分组也是允许的。

  ```js
  // bad
  let a;
  const b = 2;
  let c;
  const d = 4;
  let e;

  // good
  const b = 2;
  const d = 4;
  let a;
  let c;
  let e;
  ```

### 2.2 原始类型

> JS的数据类型包括 7 种原始类型（primitive type），即 Boolean, Null, Undefined, Number, String, Symbol (ES6 新定义), BigInt（ES11新定义），以及 Object 类型，[了解更多](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)。这个章节主要介绍原始类型相关的规约。

- 2.2.1 `强制` 不要使用 new Number/String/Boolean。eslint: [no-new-wrappers](https://eslint.org/docs/rules/no-new-wrappers)

  使用 new Number/String//Boolean 声明不会有任何好处，还会导致变量成为 `object` 类型，可能引起 bug。

  ```js
  // bad
  const num = new Number(0);
  const str = new String('foo');
  const bool = new Boolean(false);
  console.log(typeof num, typeof str, typeof bool); // => object, object, object
  if (num) { // true（对象相当于 true）
  }
  if (bool) { // true（对象相当于 true）
  }

  // good
  const num = 0;
  const str = 'foo';
  const bool = false;
  console.log(typeof num, typeof str, typeof bool); // => number, string, boolean
  if (num) { // false（0 相当于 false）
  }
  if (bool) { // false
  }
  ```

- 2.2.2 `推荐` 类型转换。

  【数字】使用 `Number()` 或 `parseInt()` ：

    ```js
    const str = '1';

    // bad
    const num = +str;
    const num = str >> 0;
    const num = new Number(str);

    // good
    const num = Number(str);

    // good
    const num = parseInt(str, 10);
    ```

  【字符串】使用 `String()`：

    ```js
    const num = 1;

    // bad
    const str = new String(num); // typeof str is "object" not "string"
    const str = num + ''; // invokes num.valueOf()
    const str = num.toString(); // isn’t guaranteed to return a string

    // good
    const str = String(num);
    ```

  【布尔值】使用 `!!`：

    ```js
    const age = 0;

    // bad
    const hasAge = new Boolean(age);
    const hasAge = Boolean(age);

    // good
    const hasAge = !!age;
    ```

- 2.2.3 `推荐` 使用 parseInt() 方法时总是带上基数。eslint: [radix](https://eslint.org/docs/rules/radix)

  `parseInt` 方法的第一个参数是待转换的字符串，第二个参数是转换基数。当第二个参数省略时，`parseInt` 会根据第一个参数自动判断基数：

  - 如果以 0x 开头，则使用 16 作基数
  - 如果以 0 开头，则使用 8 作基数。正是这条规则经常导致错误，ES5 规范中直接将这条规则移除，即 ES5 及之后的执行环境以 0 开头也会使用 10 作为基数
  - 其他情况则使用 10 作基数

  虽然从 ES5 开始就移除了自动以 8 作基数的规则，但有时难以保证所有的浏览器和 JS 执行环境都支持了这一特性。[了解更多](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt)

  因此，推荐始终给 `parseInt()` 方法加上基数，除非可以保证代码的执行环境不受上述特性的影响。

  ```js
  // bad
  parseInt("071"); // => ES5 前的执行环境中得到的是 57

  // good
  parseInt("071", 10); // => 71
  ```

- 2.2.4 `强制` 避免不必要的布尔类型转换。eslint: [no-extra-boolean-cast](https://eslint.org/docs/rules/no-extra-boolean-cast)

  在 `if` 等条件语句中，将表达式的结果强制转换成布尔值是多余的：

  ```js
  // bad
  if (!!foo) {
    // ...
  }

  while (!!foo) {
    // ...
  }

  const a = !!flag ? b : c;

  // good
  if (foo) {
    // ...
  }

  while (foo) {
    // ...
  }

  const a = flag ? b : c;
  ```

#### 2.2.5 字符串

- 2.2.5.1 `强制` 字符串优先使用单引号。eslint: [quotes](https://eslint.org/docs/rules/quotes)

  ```js
  // bad
  const name = "tod";
  const name = `tod`; // 模板字符串中应包含变量或换行，否则需用单引号

  // good
  const name = 'tod';
  ```

- 2.2.5.2 `推荐` 使用模板字符串替代字符串拼接。eslint: [prefer-template](https://eslint.org/docs/rules/prefer-template)

  模板字符串让代码更简洁，可读性更强

  ```js
  // bad
  function getDisplayName({ nickName, realName }) {
    return nickName + ' (' + realName + ')';
  }

  // good
  function getDisplayName({ nickName, realName }) {
    return `${nickName} (${realName})`;
  }
  ```

- 2.2.5.3 `强制` 禁止不必要的转义字符。[no-useless-escape](https://eslint.org/docs/rules/no-useless-escape)

  转义字符会大大降低代码的可读性，因此尽量不要滥用它们。

  ```js
  // bad
  const foo = '\'this\' \i\s \"quoted\"';

  // good
  const foo = '\'this\' is "quoted"';
  const foo = `'this' is "quoted"`;
  ```

### 2.3 数组

- 2.3.1 `强制` 使用字面量创建数组。eslint: [no-array-constructor](https://eslint.org/docs/rules/no-array-constructor)

  不要使用 `new Array()` 和 `Array()` 创建数组，除非为了构造某一长度的空数组。

  ```js
  // bad
  const a = new Array(1, 2, 3);
  const b = Array(1, 2, 3);

  // good
  const a = [1, 2, 3];
  const b = new Array(500); // 构造长度为 500 的空数组
  ```

- 2.3.2 `强制` 某些数组方法的回调函数中必须包含 return 语句。eslint: [array-callback-return](https://eslint.org/docs/rules/array-callback-return)

  以下数组方法：`map`, `filter`, `from
`, `every`, `find`, `findIndex`, `reduce`, `reduceRight`, `some`, `sort` 的回调函数中必须包含 `return` 语句，否则可能会产生误用或错误。

  一个常见的误用是，本该用 `forEach` 的场景却用了 `map`：

  ```js
  // 欲将 ['a', 'b', 'c'] 转换成 {a: 0, b: 1, c: 2}
  const myArray = ['a', 'b', 'c'];
  const myObj = {};

  // bad - map 应用于构建一个新数组，单纯想遍历数组应使用 forEach
  myArray.map((item, index) => {
    myObj[item] = index;
  });

  // good
  myArray.forEach((item, index) => {
    myObj[item] = index;
  });
  ```

  某些方法漏掉 `return` 还可能引起错误：

  ```js
  // 欲将 ['a', 'b', 'c'] 转换成 {a: 0, b: 1, c: 2}
  const myArray = ['a', 'b', 'c'];

  // bad => Uncaught TypeError: Cannot set property 'b' of undefined
  const myObj = myArray.reduce((memo, item, index) => {
    memo[item] = index;
  }, {});

  // good
  const myObj = myArray.reduce((memo, item, index) => {
    memo[item] = index;
    return memo;
  }, {});
  ```

- 2.3.3 `推荐` 使用扩展运算符 ... 处理数组。

  ES6 提供了扩展运算符 `...`，可以简化一些数组操作。

  数组复制：

  ```js
  // bad
  const array1 = [];
  for (let i = 0; i < array.length; i += 1) {
    array1[i] = array[i];
  }

  // bad
  const array1 = array.map(item => item);

  // good
  const array1 = [...array];
  ```

  将类数组结构（有 Iterator 接口的对象）转换为数组：

  ```js
  // bad
  const foo = document.querySelectorAll('.foo');

  // good
  const nodes = Array.from(foo);

  // good
  const nodes = [...foo];
  const uniqueNodes = [...new Set(foo)]; // 可以利用 Set 和 ... 将数组去重
  ```

  数组拼接：

  ```js
  // bad
  const array1 = [1, 2].concat(array);

  // good
  const array1 = [1, 2, ...array]
  ```

  用 `...` 替代 `apply`：

  ```js
  // bad
  const args = [1, 2, 3, 4];
  Math.max.apply(Math, args);

  // good
  const args = [1, 2, 3, 4];
  Math.max(...args);
  ```

  特殊的，遍历可迭代对象时，使用 `Array.from` 而不是 `...`，以免创建一个临时数组：

  ```js
  // bad
  const baz = [...foo].map(bar);

  // good
  const baz = Array.from(foo, bar);
  ```

- 2.3.4 `推荐` 使用解构获取数组元素。

  使用 ES6 提供的解构方法获取数组元素：

  ```js
  // bad
  const arr = [1, 2, 3, 4];
  const first = arr[0];
  const second = arr[1];

  // good
  const arr = [1, 2, 3, 4];
  const [first, second] = arr;
  ```

  函数有多个返回值时，应使用对象解构而不是数组解构，因为数组解构需要考虑返回值的位置：

  ```js
  // bad
  function giveMeDivPosition(div) {
    return [left, right, top, bottom];
  }
  const [left, _, top] = giveMeDivPosition(div);

  // good
  function giveMeDivPosition(div) {
    return { left, right, top, bottom };
  }
  const { left, top } = giveMeDivPosition(div);
  ```

### 2.4 对象

- 2.4.1 `强制` 使用字面量创建对象。eslint: [no-new-object](https://eslint.org/docs/rules/no-new-object)

  ```js
  // bad
  const obj = new Object();

  // good
  const obj = {};
  ```

- 2.4.2 `强制` 使用对象属性和方法的简写语法。eslint: [object-shorthand](https://eslint.org/docs/rules/object-shorthand)

  ES6 提供了对象属性和方法的简写语法，可以使代码更加简洁：

  ```js
  const value = 'foo';

  // bad
  const atom = {
    value: value,
    addValue: function (value) {
      return value + ' added';
    },
  };

  // good
  const atom = {
    value,
    addValue(value) {
      return value + ' added';
    },
  };
  ```

- 2.4.3 `参考` 将对象的简写属性写在一起。

  将简写的属性写在一起，置于对象的起始或末尾，可以提高代码整洁性。当然，如果你出于属性的含义或其他考虑进行排序也是允许的。

  ```js
  const anakinSkywalker = 'Anakin Skywalker';
  const lukeSkywalker = 'Luke Skywalker';

  // bad
  const obj = {
    episodeOne: 1,
    twoJediWalkIntoACantina: 2,
    lukeSkywalker,
    episodeThree: 3,
    mayTheFourth: 4,
    anakinSkywalker,
  };

  // good
  const obj = {
    lukeSkywalker,
    anakinSkywalker,
    episodeOne: 1,
    twoJediWalkIntoACantina: 2,
    episodeThree: 3,
    mayTheFourth: 4,
  };
  ```

- 2.4.4 `强制` 对象的属性名不要用引号包裹，除非包含特殊字符。eslint: [quote-props](https://eslint.org/docs/rules/quote-props)

  这样更加简洁，也有助于语法高亮和一些 JS 引擎的优化。

  ```js
  // bad
  const bad = {
    'foo': 3,
    'bar': 4,
    'data-blah': 5,
    'one two': 12,
  };

  // good
  const good = {
    foo: 3,
    bar: 4,
    'data-blah': 5,
    'one two': 12,
  };
  ```

- 2.4.5 `强制` 优先使用 . 访问对象的属性。eslint: [dot-notation](https://eslint.org/docs/rules/dot-notation)

  这样可以提高代码可读性。`[]` 仅应在访问动态属性名或包含特殊字符的属性名时被使用。

  ```js
  const obj = {
    active: true,
    [getDynamicKey()]: 'foo',
    'data-bar': 'bar',
  };

  // bad
  const isActive = obj['active'];

  // good
  const isActive = obj.active;
  const foo = obj[getDynamicKey()];
  const bar = obj['data-bar'];
  ```

- 2.4.6 `推荐` 使用扩展运算符 ... 处理对象。

  替代 `Object.assign` 方法，来进行对象的浅拷贝：

  ```js
  // very bad - original 会被影响
  const original = { a: 1, b: 2 };
  const copy = Object.assign(original, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }  original => { a: 1, b: 2, c: 3 }
  delete copy.a; // copy => { b: 2, c: 3 }  original => { b: 2, c: 3 }

  // bad
  const original = { a: 1, b: 2 };
  const copy = Object.assign({}, original, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }

  // good
  const original = { a: 1, b: 2 };
  const copy = { ...original, c: 3 }; // copy => { a: 1, b: 2, c: 3 }
  ```

  获取排除某些属性的新对象：

  ```js
  // good
  const copy = { a: 1, b: 2, c: 3 };
  const { a, ...noA } = copy; // noA => { b: 2, c: 3 }
  ```

- 2.4.7 `推荐` 使用解构获取对象属性。eslint: [prefer-destructuring](https://eslint.org/docs/rules/prefer-destructuring)

  获取对象的同名属性、多个属性时，使用解构让代码更简洁，也可以减少为了使用属性而创建的临时引用。

  ```js
  // bad
  function getFullName(user) {
    const firstName = user.firstName;
    const lastName = user.lastName;

    return `${firstName} ${lastName}`;
  }

  // good
  function getFullName(user) {
    const { firstName, lastName } = user;
    return `${firstName} ${lastName}`;
  }

  // best
  function getFullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
  }
  ```

- 2.4.8 `参考` 对象的动态属性名应直接写在字面量定义中。

  ES6 允许在新建对象字面量时使用表达式作为属性名，这样可以将所有属性定义在一个地方。

  ```js
  function getKey(k) {
    return `a key named ${k}`;
  }

  // bad
  const obj = {
    id: 1,
    name: 'tod',
  };
  obj[getKey('foo')] = 'foo';

  // good
  const obj = {
    id: 1,
    name: 'tod',
    [getKey('foo')]: 'foo',
  };
  ```

- 2.4.9 `强制` 不要直接在对象上调用 Object.prototypes 上的方法。eslint: [no-prototype-builtins](https://eslint.org/docs/rules/no-prototype-builtins)

  不要直接在对象上调用 `Object.prototypes` 上的方法，例如 `hasOwnProperty`、`propertyIsEnumerable`、`isPrototypeOf`。

  这些方法可能会被对象上的属性覆盖，导致错误：

  ```js
  const obj = {
    foo: 'foo',
    hasOwnProperty: false,
  };
  const objNull = Object.create(null);

  // bad => Uncaught TypeError: obj.hasOwnProperty is not a function
  console.log(obj.hasOwnProperty('foo'));
  console.log(objNull.hasOwnProperty('foo'));

  // good
  console.log(Object.prototype.hasOwnProperty.call(obj, 'foo'));
  console.log(Object.prototype.hasOwnProperty.call(objNull, 'foo'));
  ```

### 2.5 函数

- 2.5.1 `强制` 不要用 Function 构造函数创建函数。eslint: [no-new-func](https://eslint.org/docs/rules/no-new-func)

  使用 `new Function` 创建函数会像 `eval()` 方法一样执行字符串，带来安全隐患

  ```js
  // bad
  const sum = new Function('a', 'b', 'return a + b');

  // good
  const sum = (a, b) => (a + b);
  ```

- 2.5.2 `强制` 不要在块中使用函数声明。eslint: [no-inner-declarations](https://eslint.org/docs/rules/no-inner-declarations)

  在非函数块（如 `if`、`while` 等）中，不要使用函数声明：

  ```js
  // bad - 函数声明不是块作用域而是函数作用域，因此在块外也能使用函数，容易引起误解
  if (true) {
    function test() {
      console.log('test');
    }
  }
  test(); // => test

  // good - 函数表达式可以清晰地说明函数能否在块外使用
  // 不能在块外使用
  if (true) {
    const test = function () {
      console.log('test');
    };
  }
  test(); // => Uncaught ReferenceError: test is not defined

  // 能在块外使用
  let test;
  if (true) {
    test = function () {
      console.log('test');
    };
  }
  test(); // => test
  ```

- 2.5.3 `参考` 使用函数表达式替代函数声明。

  这样可以保证函数不能在定义前被调用。

  函数声明会被提升到当前作用域的顶部，因此函数可以在声明语句前就被调用，这会影响代码的可读性与可维护性。

  ```js
  // bad
  function foo() {
    // ...
  }

  // good
  const foo = () => {
    // ...
  };

  const foo = function () {
    // ...
  };

  // 有些规范提出，应该给函数表达式起一个不同于被赋值变量名的名字，以达到易于调试、查看错误堆栈等目的
  // 事实上，代码在目前浏览器中或者经过 Babel 转码后，匿名函数表达式也能够方便地查看堆栈。所以除非你出于某些目的想给函数起一个不同于被赋值变量的名字，否则直接使用匿名函数表达式
  const foo = function foo_more_descriptive_name() {
    // ...
  };
  ```

- 2.5.4 `强制` 使用箭头函数代替匿名函数。eslint: [prefer-arrow-callback](https://eslint.org/docs/rules/prefer-arrow-callback)

  ES6 提供的箭头函数可以解决 `this` 指向的问题，而且语法更简洁。

  ```js
  // bad
  [1, 2, 3].map(function (x) {
    const y = x + 1;
    return x * y;
  });

  // good
  [1, 2, 3].map((x) => {
    const y = x + 1;
    return x * y;
  });
  ```

- 2.5.5 `推荐` 箭头函数编码风格。eslint: [arrow-parens](https://eslint.org/docs/rules/arrow-parens) [arrow-body-style](https://eslint.org/docs/rules/arrow-body-style)

  箭头函数参数的小括号、函数体的大括号在某些时候可以省略，这可能导致风格的不统一，因此需要规范其编码风格：

  - 函数体风格

    当函数体只包含一条 `return` 语句时，可以省略函数体大括号和 `return`，以使代码更简洁。

    我们推荐使用这个 ES6 提供的语法糖，它可以让书写和阅读更简洁。但你也可以选择始终加上大括号和 `return`，以方便后续在函数体内增加语句。

    ```js
    // good - 函数体包含多条语句时，始终加上大括号
    [1, 2, 3].map((number) => {
      const nextNumber = number + 1;
      return `A string containing the ${nextNumber}.`;
    });

    // good - 函数体只包含一条 `return` 语句时，可以也建议省略大括号和 `return`
    [1, 2, 3].map(number => `A string containing the ${number + 1}.`);

    // good - 也可以选择始终不省略大括号，不使用简写语法糖，以方便后续在函数体内增加语句
    [1, 2, 3].map((number) => {
      return `A string containing the ${number + 1}.`;
    });
    ```

    当 `return` 的内容为对象或者有多行时，需要用小括号包裹：

    ```js
    // bad - Uncaught SyntaxError: Unexpected token
    [1, 2, 3].map((item) => {
      foo: item,
      bar: item + 1,
    });

    // good
    [1, 2, 3].map((item) => ({
      foo: item,
      bar: item + 1,
    }));

    // bad
    ['get', 'post', 'put'].map(httpMethod => Object.prototype.hasOwnProperty.call(
        httpMagicObjectWithAVeryLongName,
        httpMethod,
      )
    );

    // good
    ['get', 'post', 'put'].map(httpMethod => (
      Object.prototype.hasOwnProperty.call(
        httpMagicObjectWithAVeryLongName,
        httpMethod,
      )
    ));
    ```

  - 函数参数风格

    当函数只有一个参数，且函数体为 `return` 简写语法时，可以省略包裹参数的小括号以使代码更简洁。

    我们建议仅在这种情况下省略包裹参数的小括号，其余情况都不要省略小括号。但你也可以选择始终加上小括号，以方便后续可能要增加参数。

    ```js
    // good - 未使用 return 简写语法时，参数始终加上小括号
    [1, 2, 3].map((number) => {
      const nextNumber = number + 1;
      return `A string containing the ${nextNumber}.`;
    });

    // good - 使用 return 简写语法、且只有一个参数时，可以也建议省略参数的小括号
    [1, 2, 3].map(x => x * x);

    // good - 也可以选择始终不省略参数的小括号，以方便后续可能要增加参数
    [1, 2, 3].map((x) => x * x);
    ```

- 2.5.6 `强制` 不要将函数参数命名为 arguments。

  这会覆盖掉函数作用域中的 `arguments` 对象。

  ```js
  // bad
  function foo(name, options, arguments) {
    // ...
  }

  // good
  function foo(name, options, args) {
    // ...
  }
  ```

- 2.5.7 `强制` 不要使用 arguments 对象。eslint: [prefer-rest-params](https://eslint.org/docs/rules/prefer-rest-params)

  不要使用 `arguments` 对象，使用剩余参数操作符 `...` 代替。

  ES6 提供了 rest 操作符 `...`，与 `arguments` 相比可以更清晰地聚合函数的剩余参数。此外， `...` 得到的是一个真正的数组，而 `arguments` 得到的则是类数组结构。

  ```js
  // bad
  function foo(a, b) {
    const args = Array.prototype.slice.call(arguments, foo.length);
    console.log(args);
  }
  foo(1, 2, 3, 4); // => [3, 4]

  // good
  function foo(a, b, ...args) {
    console.log(args);
  }
  foo(1, 2, 3, 4); // => [3, 4]
  ```

- 2.5.8 `推荐` 使用默认参数语法。

  ES6 中引入了默认参数语法，相比之前为参数赋默认值的方法更加简洁、可读性更好。重新对参数赋值是不推荐的行为，且当参数的布尔类型转换结果是 `false` 时可能会错误地被赋予默认值。

  因此，当函数参数需要默认值时，使用默认参数语法，而不是去修改参数：

  ```js
  // bad
  const multiple = (a, b) => {
    a = a || 0;
    b = b || 0;
    return a * b;
  }

  // good
  const multiple = (a = 0, b = 0) => {
    return a * b;
  }
  ```

- 2.5.9 `推荐` 有默认值的函数参数需要放到参数列表的最后。

  否则你将无法享受到默认参数的便利，只能通过传 `undefined` 触发参数使用默认值。

  ```js
  // bad
  function multiply(a = 1, b) {
    return a * b;
  }
  const x = multiply(42); // => NaN
  const y = multiply(undefined, 42); // => 42

  // good
  function multiply(a, b = 1) {
    return a * b;
  }
  const x = multiply(42); // => 42
  ```

- 2.5.10 `推荐` 不要修改函数参数。eslint: [no-param-reassign](https://eslint.org/docs/rules/no-param-reassign)

  不要修改引用类型的参数，这可能导致作为入参的原变量发生变化：

  ```js
  // bad
  const f1 = function f1(obj) {
    obj.key = 1;
  }
  const originalObj = { key: 0 };
  f1(originalObj);
  console.log(originalObj); // => { key: 1 }

  // good
  const f2 = function f2(obj) {
    const key = Object.prototype.hasOwnProperty.call(obj, 'key') ? obj.key : 1;
  }
  ```

  更不要给参数重新赋值，这可能导致意外的行为和内核优化问题：

  ```js
  // bad
  function foo(bar, baz) {
    if (!baz) {
      bar = 1;
    }
  }

  // good
  function foo(bar, baz) {
    let qux = bar;
    if (!baz) {
      qux = 1;
    }
  }
  ```

- 2.5.11 `强制` 将立即执行函数表达式（IIFE）用小括号包裹。eslint: [wrap-iife](https://eslint.org/docs/rules/wrap-iife)

  IIFE 是一个独立的执行单元，将它用小括号包裹可以更清晰的体现这点。需要提醒的是，由于 ES6 模块语法的引入，你可能不再需要使用 IIFE 了。

  ```js
  (function () {
    console.log('Welcome to the Internet. Please follow me.');
  }());
  ```

- 2.5.12 `参考` 函数的复杂度不应过高。eslint: [complexity](https://eslint.org/docs/rules/complexity)

  过高的复杂度意味着代码难以维护和测试。我们推荐函数的复杂度不要超过以下阈值：

  - 圈复杂度不超过 **10**
  - 认知复杂度不超过 **15**

- 2.5.13 `参考` 函数的参数不应过多。eslint: [max-params](https://eslint.org/docs/rules/max-params)
  如果函数的参数过多，将不利于函数的维护和调用。这时你需要考虑是否函数做了太多的事情，是否有必要对其进行拆分。

  如果必须使用过多的参数，可以考虑用对象代替参数列表：

  ```js
  // bad
  function doSomething(param1, param2, param3, param4, param5, param6, param7, param8) {
    // ...
  }
  doSomething(1, 2, 3, 4, 5, 6, 7, 8);

  // good
  function doSomething({ param1, param2, param3, param4, param5, param6, param7, param8 }) {
    // ...
  }
  doSomething({ param1: 1, param2: 2, param3: 3, param4: 4, param5: 5, param6: 6, param7: 7, param8: 8 });
  ```

- 2.5.14 `强制` generator 函数内必须有 yield 语句。eslint: [require-yield](https://eslint.org/docs/rules/require-yield)

  如果一个 `generator` 中没有 `yield` 语句，那么这个 `generator` 就不是必须的。

  ```js
  // bad
  function* foo() {
    return 10;
  }

  // good
  function* foo() {
    yield 5;
    return 10;
  }
  ```

- 2.5.15 `参考` 优先使用 JS 提供的高阶函数进行迭代运算。

  需要迭代运算时，应优先使用 JS 提供的高阶函数，减少直接使用 for 循环（包括 for-in 和 for-of）。

  如使用 map() / every() / filter() / find() / findIndex() / reduce() / some() / ... 来迭代数组，使用 Object.keys() / Object.values() / Object.entries() 方法来迭代对象

  ```js
  const numbers = [1, 2, 3, 4, 5];

  // bad
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  console.log(sum); // => 15;

  // good
  let sum = 0;
  numbers.forEach((num) => {
    sum += num;
  });
  console.log(sum); // => 15;

  // best
  const sum = numbers.reduce((total, num) => total + num, 0);
  console.log(sum); // => 15;

  // bad
  const increasedByOne = [];
  for (let i = 0; i < numbers.length; i++) {
    increasedByOne.push(numbers[i] + 1);
  }

  // good
  const increasedByOne = [];
  numbers.forEach((num) => {
    increasedByOne.push(num + 1);
  });

  // best
  const increasedByOne = numbers.map(num => num + 1);
  ```

### 2.6 类

- 2.6.1 `推荐` 使用 class 语句声明类，而不是使用 prototype。

  `class` 语句是 ES6 中引入的用于声明类的语法糖，更加简洁易维护。

  ```js
  // bad
  function Person() {
    this.age = 1;
  }
  Person.prototype.growOld = function () {
    this.age += 1;
  }

  // good
  class Person {
    constructor() {
      this.age = 1;
    }
    growOld() {
      this.age += 1;
    }
  }
  ```

- 2.6.2 `推荐` 使用 extends 语句进行类的继承。

  `extends` 是用于原型继承的内建方法，不会破坏 `instanceof`。

  ```js
  // bad
  const inherits = require('inherits');
  function PeekableQueue(contents) {
    Queue.apply(this, contents);
  }
  inherits(PeekableQueue, Queue);
  PeekableQueue.prototype.peek = function () {
    return this.queue[0];
  };

  // good
  class PeekableQueue extends Queue {
    peek() {
      return this.queue[0];
    }
  }
  ```

- 2.6.3 `强制` 避免不必要的 constructor。

  ES6 class 会提供一个默认的 `constructor`，空 `constructor` 或者只调用父类的  `constructor` 是不必要的。eslint: [no-useless-constructor](https://eslint.org/docs/rules/no-useless-constructor)

  ```js
  // bad - 以下两种 constructor 可以省略
  class Parent {
    constructor() {
    }

    method() {
      // ...
    }
  }

  class Child extends Parent {
    constructor (value) {
      super(value);
    }

    method() {
      // ...
    }
  }

  // good
  class Parent {
    method() {
      // ...
    }
  }

  class Child extends Parent {
    method() {
      // ...
    }
  }
  ```

- 2.6.4 `强制` 正确地使用 super 方法。eslint: [constructor-super](https://eslint.org/docs/rules/constructor-super) [no-this-before-super](https://eslint.org/docs/rules/no-this-before-super)

  - 子类的 `constructor` 中必须使用 `super()`，且必须在 `this` 和 `super` 关键词前调用
  - 非子类的 `constructor` 中不能使用 `super()`

  ```js
  // bad - 非子类不能使用 super
  class Parent {
    constructor() {
      super();
      this.name = 'parent';
    }
  }

  // good
  class Parent {
    constructor() {
      this.name = 'parent';
    }
  }

  // bad - 子类必须使用 super
  class Child extends Parent {
    constructor() {
      this.name = 'child';
    }
  }

  // bad - this 必须在调用 super 后使用
  class Child extends Parent {
    constructor() {
      this.name = 'foo';
      super();
    }
  }

  // good
  class Child extends Parent {
    constructor (value) {
      super(value);
      this.name = 'foo';
    }
  }
  ```

- 2.6.5 `强制` 避免重复的类成员命名。eslint: [no-dupe-class-members](https://eslint.org/docs/rules/no-dupe-class-members)

  重复的类成员声明最终生效的将是最后一个：

  ```js
  // bad
  class Foo {
    bar() { console.log('bar'); }
    bar() { console.log('baz'); }
  }
  const foo = new Foo();
  foo.bar(); // => baz

  // good
  class Foo {
    bar() { console.log('bar'); }
  }
  ```

### 2.7 模块

- 2.7.1 `推荐` 使用 ES6 modules 而非其他非标准的模块系统。eslint: [import/module-systems](https://github.com/benmosher/eslint-plugin-import#module-systems)

  使用 ES6 modules (`import`/`export`)，而不是其他非标准的模块系统，如 CommonJS、AMD、CMD。

  ES6 modules 作为标准代表着未来，让我们拥抱未来吧。

  ```js
  // bad
  const React = require('react');
  module.exports = React.Component;

  // good
  import React, { Component } from 'react';
  export default Component;
  ```

- 2.7.2 `强制` 不要用多个 import 引入同一模块。eslint: [import/no-duplicates](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md)

  多条 `import` 语句引入了同一模块会降低可维护性，你需要将它们合成一条语句。

  ```js
  // bad
  import React from 'react';
  import { Component }  from 'react';

  // good
  import React, { Component } from 'react';
  ```

- 2.7.3 `强制` import 语句需要放到模块的最上方。eslint: [import/first](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md)

  由于 `import` 语句会被声明提升，将它们放到模块的最上方以防止异常行为。

  ```js
  // bad
  import foo from 'foo';
  foo.init();

  import bar from 'bar';
  bar.init();

  // good
  import foo from 'foo';
  import bar from 'bar';

  foo.init();
  bar.init();
  ```

- 2.7.4 `强制` 禁止 default import 的名字跟文件内的其他 export 命名相同。eslint: [import/no-named-as-default](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md)

  ```js
  // foo.js
  export default 'foo';
  export const bar = 'bar';

  // bad
  import bar from './foo.js';

  // good
  import foo from './foo.js';
  ```

- 2.7.5 `强制` 禁止引用自身。eslint: [import/no-self-import](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-self-import.md)

- 2.7.6 `强制` 禁止循环引用。eslint: [import/no-cycle](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md)

- 2.7.7 `推荐` 不要在 default export 上使用一个已导出的名称作为属性。eslint: [import/no-named-as-default-member](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md)

  ```js
  // foo.js
  export default 'foo';
  export const bar = 'bar';

  // bad
  import foo from './foo.js';
  const bar = foo.bar; // or
  const { bar } = foo;

  // good
  import foo, { bar } from './foo.js';
  ```

- 2.7.8 `推荐` 在模块导入之后保留一个空行。eslint: [import/newline-after-import](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md)

  ```js
  // bad
  import foo from './foo.js';
  const FOO = 'FOO'

  // good
  import foo from './foo.js';

  const FOO = 'FOO'
  ```

- 2.7.9 `参考` import 语句的排序。eslint: [import/order](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md)

  `import` 语句建议按以下规则排序：

  - 先 `import` 第三方模块，再 `import` 自己工程里的模块
  - 先 `import` 绝对路径，再 `import` 相对路径

  ```js
  // bad
  import foo from 'components/foo';
  import './index.scss';
  import React from 'react';

  // good
  import React from 'react';
  import foo from 'components/foo';
  import './index.scss';
  ```

- 2.7.10 `参考` 当模块内只有一个 export 时，使用 default export。eslint: [import/prefer-default-export](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md)

  我们也建议文件内只包含一个 export，这有利于代码的可维护性。

  ```js
  // bad
  export function foo() {}

  // good
  export default function foo() {}
  ```

- 2.7.11 `参考` 不要在 import 时直接 export。

  虽然一行代码更简洁，但这不利于代码的可读性和一致性。

  ```js
  // bad
  export { Com as Component } from 'react';

  // good
  import { Component } from 'react';

  export default Component;
  ```


- 2.7.12 `参考` 模块开发者选择ESM和CJS时，需要判断运行时环境：如果你的模块是只面向浏览器的则选择ESM；如果你的模块是只面向Node.js的则选择CJS，并且确定遵循[CJS命名空间规则](https://nodejs.org/api/esm.html#esm_commonjs_namespaces)；如果你的模块是2者都要兼容的，则ESM和CJS都要支持。

  Node.js的模块，历史上Node.js遵循的是CommonJS，因此ES6 Module会有比较严重的兼容性问题。暂时没有特别好的解法，只能在Node.js中跟进运行时环境，判断使用模块标准。[讨论issue](https://github.com/nodejs/node/issues/33954)

### 2.8 操作符

- 2.8.1 `推荐` 使用严格相等运算符。eslint: [eqeqeq](https://eslint.org/docs/rules/eqeqeq)

  非严格相等运算符（`==` 和 `!=`）会在比较前将被比较值转换为相同类型，对于不熟悉 JS 语言特性的人来说，这可能造成不小的隐患。[了解更多](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)

  因此，一般情况下我们应该使用严格比较运算符（ `===` 和 `!==`）进行比较。如果要比较的两个值类型不同，应该显性地将其转换成相同类型再进行严格比较，而不是依赖于 `==` 和 `!=` 的隐式类型转换。

  ```js
  const id = '83949';

  // bad - 为了兼容 id 可能是字符串的情况，而有意使用 == 与数字比较
  if (id == 83949) {
    // do something
  }

  // good - 如果 id 可能是字符串，应该先将其进行类型转换，再使用 === 进行比较
  if (Number(id) === 83949) {
    // do something
  }
  ```

- 2.8.2 `强制` 不要使用一元自增自减运算符。eslint: [no-plusplus](https://eslint.org/docs/rules/no-plusplus)

  不要使用一元自增自减运算符（`++` 和 `--`），除非在 `for` 循环条件中。

  `++` 和 `--` 会带来值是否会提前变化带来的理解成本，也可能因为自动添加分号机制导致一些错误，因此我们推荐使用 `num += 1` 来代替 `num++`。但出于习惯，在 `for` 循环的条件中依然可以使用自增自减运算符。

  ```js
  let num = 1;

  // bad
  num++;
  --num;

  // good
  num += 1;
  num -= 1;
  ```


- 2.8.3 `强制` 不要使用 void 运算符。eslint: [no-void](https://eslint.org/docs/rules/no-void)

  在很老版本的 JS 中，`undefined` 值是可变的，因此使用 `void` 语句一般是用来得到一个 `undefined` 值。而在新版本的 JS 中，上面的问题已不复存在。因此出于程序可读性的考虑，禁止使用 `void` 运算符。

  ```js
  // bad
  const foo = void 0;

  // good
  const foo = undefined;
  ```

- 2.8.4 `强制` 避免嵌套的三元表达式。eslint: [no-nested-ternary](https://eslint.org/docs/rules/no-nested-ternary)

  嵌套的三元表达式会降低代码可读性。

  ```js
  // bad
  const foo = bar ? baz : qux === quxx ? bing : bam;

  // good
  const qu = qux === quxx ? bing : bam;
  const foo = bar ? baz : qu;
  ```

- 2.8.5 `强制` 避免不必要的三元表达式。eslint: [no-unneeded-ternary](https://eslint.org/docs/rules/no-unneeded-ternary)

  ```js
  // bad
  const foo = a ? a : b;
  const bar = c ? true : false;
  const baz = c ? false : true;

  // good
  const foo = a || b;
  const bar = !!c;
  const baz = !c;
  ```

- 2.8.6 `强制` 混合使用多种操作符时，用小括号包裹分组。eslint: [no-mixed-operators](https://eslint.org/docs/rules/no-mixed-operators)

  这可以更清晰地表达代码意图，提高可读性。四则运算符（`+`, `-`, `*`, `/`）可以不包裹，因为大多数人熟知它们的优先级。

  ```js
  // bad
  const foo = a && b < 0 || c > 0 || d + 1 === 0;

  // good
  const foo = (a && b < 0) || c > 0 || (d + 1 === 0);

  // bad
  const bar = a ** b - 5 % d;

  // good
  const bar = (a ** b) - (5 % d);

  // bad - 有人可能会误以为执行顺序是 (a || b) && c
  if (a || b && c) {
    return d;
  }

  // good
  if (a || (b && c)) {
    return d;
  }

  // good - 四则运算可以不用小括号包裹
  const bar = a + b / c * d;
  ```

### 2.9 控制语句

- 2.9.1 `强制` switch 语句中的 case 需要以 break 结尾。eslint: [no-fallthrough](https://eslint.org/docs/rules/no-fallthrough)

  ```js
  // bad
  switch(foo) {
    case 1:
      doSomething();
    case 2:
      doSomethingElse();
    default:
      doSomething();
  }

  // good
  switch(foo) {
    case 1:
      doSomething();
      break;
    case 2:
      doSomethingElse();
      break;
    default:
      doSomething();
  }
  ```

- 2.9.2 `推荐` switch 语句需要始终包含 default 分支。eslint: [default-case](https://eslint.org/docs/rules/default-case)

  在使用 `switch` 语句时，有时会出现因开发者忘记设置 `default` 而导致错误，因此建议总是给出 `default`。如果有意省略 `default`，请在 `switch` 语句末尾用 `// no default` 注释指明：

  ```js
  // bad
  let foo;
  switch (bar) {
    case 1:
      foo = 2;
      break;
  }

  // good
  let foo;
  switch (bar) {
    case 1:
      foo = 2;
      break;
    default:
      foo = 0;
  }

  // good - 如果有意省略 default，请在 switch 语句末尾用 `// no default` 注释指明
  let foo = 0;
  switch (bar) {
    case 1:
      foo = 2;
      break;
    // no default
  }
  ```

- 2.9.3 `参考` switch 语句应包含至少 3 个条件分支。

  `switch` 语句在有许多条件分支的情况下可以使代码结构更清晰。但对于只有一个或两个条件分支的情况，更适合使用 `if` 语句，`if` 语句更易于书写和阅读。

  ```js
  // bad
  let foo;
  switch (bar) {
    case 1:
      foo = 2;
      break;
    default:
      foo = 0;
  }

  // good
  let foo;
  if (bar === 1) {
    foo = 2;
  } else {
    foo = 0;
  }
  ```

- 2.9.4 `参考` 控制语句的嵌套层级不要过深。eslint: [max-depth](https://eslint.org/docs/rules/max-depth)

  控制语句的嵌套层级不要超过 **4** 级，否则将难以阅读和维护：

  ```js
  // bad
  if (condition1) {
    // depth = 1
    if (condition2) {
      // depth = 2
      for (let i = 0; i < 10; i++) {
        // depth = 3
        if (condition4) {
          // depth = 4
          if (condition5) {
            // bad - depth = 5
          }
          return;
        }
      }
    }
  }
  ```

- 2.9.5 `强制` for 循环中的计数器应朝着正确方向移动。eslint: [for-direction](https://eslint.org/docs/rules/for-direction)

  当 `for` 循环中更新子句的计数器朝着错误的方向移动时，循环的终止条件将永远无法达到，这会导致死循环的出现。这时要么是程序出现了错误，要么应将 `for` 循环改为 `while` 循环。

  ```js
  // bad
  for (let i = 0; i < length; i--) {
    // do something
  }

  // good
  for (let i = 0; i < length; i++) {
    // do something
  }
  ```

- 2.9.6 `推荐` for-in 循环中需要对 key 进行验证。eslint: [guard-for-in](https://eslint.org/docs/rules/guard-for-in)

  使用 `for-in` 循环时需要避免对象从原型链上继承来的属性也被遍历出来，因此保险的做法是对 key 是否是对象自身的属性进行验证：

  ```js
  // bad
  for (const key in foo) {
    doSomething(key);
  }

  // good
  for (const key in foo) {
    if (Object.prototype.hasOwnProperty.call(foo, key)) {
      doSomething(key);
    }
  }
  ```

- 2.9.7 `参考` 如果一个 if 语句的结果总是返回一个 return 语句，那么最后的 else 是不必要的。eslint: [no-else-return](https://eslint.org/docs/rules/no-else-return)

  ```js
  // bad
  function foo() {
    if (x) {
      return x;
    } else {
      return y;
    }
  }

  // good
  function foo() {
    if (x) {
      return x;
    }

    return y;
  }
  ```

- 2.9.8 `参考` 条件表达式的计算结果。

  条件表达式（例如 `if` 语句的条件）的值为通过抽象方法 `ToBoolean` 进行强制转换所得，计算结果遵守下面的规则：

  - **对象**、**数组** 被计算为 **true**
  - **Undefined** 被计算为 **false**
  - **Null** 被计算为 **false**
  - **布尔值** 被计算为 **布尔的值**
  - **数字** 如果是 **+0、-0 或 NaN** 被计算为 **false**，否则为 **true**
  - **字符串** 如果是空字符串 `''` 被计算为 **false**，否则为 **true**

  ```js
  if ({}) { // => true
  }

  if ([]) { // => true
  }

  if (0) { // => false
  }

  if ('0') { // => true
  }

  if ('') { // => false
  }
  ```

### 2.10 其他

- 2.10.1 `强制` 禁止使用 eval。eslint: [no-eval](https://eslint.org/docs/rules/no-eval)

  `eval` 语句存在安全风险，可能导致注入攻击。

  ```js
  // bad
  const obj = { x: 'foo' };
  const key = 'x';
  const value = eval('obj.' + key);

  // good
  const obj = { x: 'foo' };
  const key = 'x';
  const value = obj[key];
  ```

- 2.10.2 `强制` 禁止使用 debugger。eslint: [no-debugger](https://eslint.org/docs/rules/no-debugger)

  `debugger` 语句会让程序暂停，并在当前位置开启调试器。它通常在程序调试阶段使用，不应发布到线上。

  ```js
  // bad
  function isTruthy(x) {
    debugger;
    return Boolean(x);
  }
  ```


- 2.10.3 `推荐` 禁止使用 alert。eslint: [no-alert](https://eslint.org/docs/rules/no-alert)

  `alert` 语句会使浏览器弹出原生警告框，这可能让人感觉你的程序出错了。如果需要对用户弹出警告信息，好的做法是使用第三方的弹窗组件或自己定义警告框样式。同理，`confirm` 和 `prompt` 语句也不应被使用。

  ```js
  // bad
  alert('Oops!');

  // good - 使用自定义的 Alert 组件
  Alert('Oops!');
  ```

- 2.10.4 `推荐` 生产环境禁止使用 console。eslint: [no-console](https://eslint.org/docs/rules/no-console)

  `console` 语句通常在调试阶段使用，发布上线前，应该去掉代码里所有的 `console` 语句。

  ```js
  // bad
  console.log('Some debug messages..');

  // good - 如果你非要使用 console 语句，可以考虑自己进行封装以确保不要在生产环境暴露调试信息
  const utils = {
    log: (msg) => {
      if (window.env !== 'product') {
        console.log(msg);
      }
    },
  };

  utils.log('Some debug messages..');
  ```

- 2.10.5 `强制` 禁止对原生对象或只读的全局对象进行赋值。eslint: [no-global-assign](https://eslint.org/docs/rules/no-global-assign)

  JS 执行环境中会包含一些全局变量和原生对象，如浏览器环境中的 `window`，node 环境中的 `global` 、`process`，`Object`，`undefined` 等。除了像 `window` 这样的众所周知的对象，JS 还提供了数百个内置全局对象，你可能在定义全局变量时无意对它们进行了重新赋值，因此最好的做法是不要定义全局变量。

  ```js
  // bad
  window = {};
  Object = null;
  undefined = 1;
  ```

## 3 注释

> 注释的目的：提高代码的可读性，从而提高代码的可维护性
> 注释的原则：如无必要，勿增注释；如有必要，尽量详尽

- 3.1 `推荐` 单行注释使用 //。

  注释应单独一行写在被注释对象的上方，不要追加在某条语句的后面：

  ```js
  // bad
  const active = true;  // is current tab

  // good
  // is current tab
  const active = true;
  ```

  注释行上方需要有一个空行（除非注释行上方是一个块的顶部），以增加可读性：

  ```js
  // bad - 注释行上方需要一个空行
  function getType() {
    console.log('fetching type...');
    // set the default type to 'no type'
    const type = this.type || 'no type';

    return type;
  }

  // good
  function getType() {
    console.log('fetching type...');

    // set the default type to 'no type'
    const type = this.type || 'no type';

    return type;
  }

  // bad - 注释行上面是一个块的顶部时不需要空行
  function getType() {

    // set the default type to 'no type'
    const type = this.type || 'no type';

    return type;
  }

  // good
  function getType() {
    // set the default type to 'no type'
    const type = this.type || 'no type';

    return type;
  }
  ```

- 3.2 `推荐` 多行注释使用 /** ... */，而不是多行的 //。

  ```js
  // bad
  // make() returns a new element
  // based on the passed in tag name
  function make(tag) {
    // ...

    return element;
  }

  // good
  /**
   * make() returns a new element
   * based on the passed-in tag name
   */
  function make(tag) {
    // ...

    return element;
  }
  ```

- 3.3 `强制` 注释内容和注释符之间需要有一个空格。eslint: [spaced-comment](https://eslint.org/docs/rules/spaced-comment)

  注释内容和注释符之间需要有一个空格，以增加可读性：

  ```js
  // bad
  //is current tab
  const active = true;

  // good
  // is current tab
  const active = true;

  // bad
  /**
   *make() returns a new element
   *based on the passed-in tag name
   */
  function make(tag) {
    // ...

    return element;
  }

  // good
  /**
   * make() returns a new element
   * based on the passed-in tag name
   */
  function make(tag) {
    // ...

    return element;
  }
  ```

- 3.4 `参考` 合理使用特殊注释标记。eslint: [no-warning-comments](https://eslint.org/docs/rules/no-warning-comments)

  有时我们发现某个可能的 bug，但因为一些原因还没法修复；或者某个地方还有一些待完成的功能，这时我们需要使用相应的特殊标记注释来告知未来的自己或合作者。最常用的特殊标记有两种：

  - `// FIXME: 说明问题是什么`
  - `// TODO: 说明还要做什么或者问题的解决方案`

  一个我们不愿看到却很普遍的情况是，我们给代码标记 `FIXME` 或 `TODO` 后却一直没找到时间处理。所以当你做了特殊标记，你应该为它负责，在某个时间把它解决。

  ```js
  class Calculator extends Abacus {
    constructor() {
      super();

      // FIXME: shouldn’t use a global here
      total = 0;

      // TODO: total should be configurable by an options param
      this.total = 0;
    }
  }
  ```

- 3.5 `参考` 文档类注释使用 jsdoc 规范。

  文档类注释，如函数、类、文件、事件等，推荐使用 [jsdoc](http://usejsdoc.org/) 规范或类 jsdoc 的规范。

  例如：

  ```js
  /**
   * Book类，代表一个书本.
   * @constructor
   * @param {string} title - 书本的标题.
   * @param {string} author - 书本的作者.
   */
  function Book(title, author) {
    this.title = title;
    this.author = author;
  }

  Book.prototype = {
    /**
     * 获取书本的标题
     * @returns {string|*}
     */
    getTitle() {
      return this.title;
    },

    /**
     * 设置书本的页数
     * @param pageNum {number} 页数
     */
    setPageNum(pageNum) {
      this.pageNum = pageNum;
    },
  };
  ```

- 3.6 `参考` 无用的代码注释应被即时删除。

  无用的注释代码会使程序变得臃肿并降低可读性，应被即时删除。你可以通过版本控制系统找回被删除的代码。

## 4 命名

- 4.1 `参考` 文件名：使用小写字母命名。考虑到部分操作系统（如 Windows, MacOS）下文件系统大小写不敏感，推荐使用 `-` 连接。例如：hello-world.js。

- 4.2 `参考` 使用小驼峰（camelCase）命名原始类型、对象、函数、实例。[camelcase](https://eslint.org/docs/rules/camelcase)

  ```js
  // bad
  const this_is_my_string = 'foo';
  const this_is_my_object = {};
  function this_is_my_function() {}

  // good
  const thisIsMyString = 'foo';
  const thisIsMyObject = {};
  function thisIsMyFunction() {}
  ```

- 4.3 `强制` 使用大驼峰（PascalCase）命名类和构造函数。eslint: [new-cap](https://eslint.org/docs/rules/new-cap)

  ```js
  // bad
  function user(options) {
    this.name = options.name;
  }

  const bad = new user({
    name: 'nope',
  });

  // good
  class User {
    constructor(options) {
      this.name = options.name;
    }
  }

  const good = new User({
    name: 'yup',
  });
  ```

- 4.4 `参考` 全部大写字母&单词间用下划线分割的命名模式（UPPERCASE_VARIABLES）。

  全大写字母、单词间使用下划线分割的命名模式（UPPERCASE_VARIABLES），仅用于命名常量，且该常量需同时满足如下条件：

  - 使用 `const` 关键字声明
  - 用于 `export`，而不是本文件内

  ES6 后 `const` 关键字用于声明常量，被广泛使用，如果所有用 `const` 声明的值都用 UPPERCASE_VARIABLES 模式命名会使可读性变差，是没有必要的。因此我们约定 UPPERCASE_VARIABLES 命名模式只用于 export 给其他文件用的常量，如果只在同文件内使用，依然使用正常的命名风格。

  ```js
  // bad - 在本文件中使用的常量，不需使用 UPPERCASE_VARIABLES 风格
  const PRIVATE_VARIABLE = 'should not be unnecessarily uppercased within a file';

  // bad
  export let REASSIGNABLE_VARIABLE = 'do not use let with uppercase variables';

  // good
  export const THIS_IS_CONSTANT = '一个常量';
  ```

  此外，如果 `export` 一个对象，只有对象本身需要使用 UPPERCASE_VARIABLES ，对象属性的 key 仍然使用正常命名风格：

  ```js
  // bad - unnecessarily uppercases key while adding no semantic value
  export const AN_OBJECT = {
    KEY: 'value',
  };

  // good
  export const AN_OBJECT = {
    key: 'value',
  };
  ```

- 4.5 `参考` 模块相关的命名规范。

  使用小驼峰（camelCase）命名 `export` 的函数：

  ```js
  function makeStyleGuide() {
    // ...
  }

  export default makeStyleGuide;
  ```

  使用大驼峰（PascalCase）命名 `export` 的 class、函数库、字面量对象：

  ```js
  const AnObject = {
    foo: {
      // ...
    },
  };

  export default AnObject;
  ```

- 4.6 `参考` 命名不要以下划线开头或结尾。eslint: [no-underscore-dangle](https://eslint.org/docs/rules/no-underscore-dangle)

  JS 没有私有属性或私有方法的概念，这样的命名可能会让人误解。

  ```js
  // bad
  this.__firstName__ = 'Panda';
  this.firstName_ = 'Panda';
  this._firstName = 'Panda';

  // good
  this.firstName = 'Panda';
  ```

## 5 关于 ES5

这个章节是为还在使用 ES5 及之前版本 JS 的同学准备。因为本规约以 ES6 编写，你可以通过阅读本章节来了解 ES5 中有哪些需要额外注意的地方。

- 5.1 `推荐` ES5 中的变量声明。

  使用 `var` 进行声明：

  ```js
  // good
  var foo = 'foo';
  ```

  需注意，`var` 声明的变量不是块作用域而是函数作用域：

  ```js
  // 将打印 2, 2, 2，而非 0, 1, 2
  for (var i = 0; i < 3; ++i) {
    var iteration = i;
    setTimeout(function() { console.log(iteration); }, i * 1000);
  }
  ```

  另外，`var` 声明的变量会被提升到其作用域顶部：

  ```js
  // 变量声明会被提升到函数顶部，但赋值不会被提升
  function example() {
    console.log(declaredButNotAssigned); // => undefined
    console.log(notDeclared); // => throws a ReferenceError
    var declaredButNotAssigned = true;
  }
  ```

  即便如此，我们还是推荐在变量使用前再进行声明，而不是统一在作用域开始处声明，以增强可读性。当然，如果你担心声明提升问题会带来隐患，也可以选择统一在作用域开始处进行声明。

  不要在声明前就使用变量，这样做可能给人带来疑惑和隐患。eslint: [`no-use-before-define`](https://eslint.org/docs/rules/no-use-before-define.html)

  ```js
  // bad
  console.log(foo); // => undefined
  var foo = 'foo';

  // good
  var foo = 'foo';
  console.log(foo); // => foo
  ```

- 5.2 `强制` 对于逗号分隔的多行结构，不要加上最后一个行末逗号。eslint: [comma-dangle](https://eslint.org/docs/rules/comma-dangle)

  这样做会在 IE6/7 和 IE9 怪异模式下引起问题。另外，多余的逗号在某些 ES3 的实现里会增加数组的长度。

  ```js
  // bad
  var hero = {
    firstName: 'Kevin',
    lastName: 'Flynn',
  };

  // good
  var hero = {
    firstName: 'Kevin',
    lastName: 'Flynn'
  };
  ```

- 5.3 `参考` 使用 Array 的 slice 方法进行数组复制和类数组对象转换。

  数组复制：

  ```js
  var items = [1, 2, 3];

  // bad
  var itemsCopy = [];
  for (var i = 0; i < items.length; i++) {
    itemsCopy[i] = items[i];
  }

  // good
  var itemsCopy = items.slice();
  ```

  将类数组对象转换成数组：

  ```js
  function trigger() {
    var args = Array.prototype.slice.call(arguments);
    // ...
  }
  ```

- 5.4 `推荐` 不要使用保留字作为对象的属性名。

  不要使用[保留字](http://es5.github.io/#x7.6.1)作为对象的属性名，它们在 IE8 中不工作

  ```js
  // bad
  var superman = {
    class: 'alien',
    default: { clark: 'kent' },
    private: true
  };

  // good
  var superman = {
    type: 'alien',
    defaults: { clark: 'kent' },
    hidden: true
  };
  ```

## 配套工具

- [eslint-config-ali](https://www.npmjs.com/package/eslint-config-ali)：本规约配套的 [ESLint](http://eslint.org/) 规则包

## 参考资料

- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
- [ESLint rules](https://eslint.org/docs/rules/)
