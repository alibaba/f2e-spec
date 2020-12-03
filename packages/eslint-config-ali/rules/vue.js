/**
 * 本文件的规则由 eslint-plugin-vue 提供，使用 vue-eslint-parser 作为 parser
 * @link https://eslint.vuejs.org/rules/
 */

module.exports = {
  parser: 'vue-eslint-parser',
  plugins: ['vue'],
  rules: {
    // 给 template 提供 eslint-disable 的能力，支持如下注释：
    // eslint-disable，eslint-enable，eslint-disable-line，eslint-disable-next-line
    'vue/comment-directive': 'error',

    // 本条是对JS规约 no-unused-vars 的补充，防止变量被错误地标记为未使用
    'vue/jsx-uses-vars': 'error',

    // 组件的 data 必须是一个函数
    'vue/no-shared-component-data': 'error',

    // Prop 定义类型应该是构造函数
    'vue/require-prop-type-constructor': 'error',

    // Prop 的默认值必须匹配它的类型
    'vue/require-valid-default-prop': 'error',

    // 为 v-for 设置键值
    'vue/require-v-for-key': 'error',

    // 避免 v-if 和 v-for 用在一起
    'vue/no-use-v-if-with-v-for': 'warn',

    // 计算属性禁止包含异步方法
    'vue/no-async-in-computed-properties': 'error',

    // 禁止在对象字面量中出现重复的键
    'vue/no-dupe-keys': 'error',

    // 禁止出现重复的属性
    'vue/no-duplicate-attributes': 'error',

    // 禁止出现语法错误
    // @link https://html.spec.whatwg.org/multipage/parsing.html#parse-errors
    'vue/no-parsing-error': ['error', {
      'x-invalid-end-tag': false,
      'invalid-first-character-of-tag-name': false,
    }],

    // 禁止使用 vue 中的关键字
    'vue/no-reserved-keys': 'error',

    // 禁止在计算属性中对属性修改
    'vue/no-side-effects-in-computed-properties': 'error',

    // 禁止 <template> 使用 key 属性
    'vue/no-template-key': 'warn',

    // 禁止在 <textarea> 中出现 {{message}}
    'vue/no-textarea-mustache': 'error',

    // 禁止注册没有使用的组件
    'vue/no-unused-components': 'warn',

    // 禁止在 v-for 等指令或者 scope 中申明没有使用到的变量
    'vue/no-unused-vars': 'warn',

    // <component> 必须有 v-bind:is
    'vue/require-component-is': 'warn',

    // render 函数必须有返回值
    'vue/require-render-return': 'error',

    // 计算属性必须有返回值
    'vue/return-in-computed-property': 'error',

    // 强制在 v-on 指令使用 exact 修饰符，当同一个标签上有另一个带修饰符的 v-on 指令
    'vue/use-v-on-exact': 'error',

    // 检查指令的合法性
    'vue/valid-template-root': 'error',
    'vue/valid-v-bind': 'error',
    'vue/valid-v-cloak': 'error',
    'vue/valid-v-else-if': 'error',
    'vue/valid-v-else': 'error',
    'vue/valid-v-for': 'error',
    'vue/valid-v-html': 'error',
    'vue/valid-v-if': 'error',
    'vue/valid-v-model': 'error',
    'vue/valid-v-on': 'error',
    'vue/valid-v-once': 'error',
    'vue/valid-v-pre': 'error',
    'vue/valid-v-show': 'error',
  },
};
