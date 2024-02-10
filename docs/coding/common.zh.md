---
group: 代码风格
order: 0
---

# 通用编码规约

适用于多种编程语言的编码规约。对应的规约工具主要是 [EditorConfig](https://editorconfig.org/) 和 [Prettier](https://prettier.io/)。

## 缩进

两个空格。

```ini filename=".editorconfig"
indent_style = space
indent_size = 2
```

之所以选择两个空格，是有以下考虑：

1. 空格在所有编辑器和网页中展示的效果均一致，而 Tab 则无法控制实际展示的缩进宽度。
2. 2 个空格相比 1 个空格更加明显。
3. 2 个空格相比 3 个空格或 4 个空格更节约空间，适合 `html` 和 `jsx` 等层级较深的语法。

## 行宽

100 字符。

```ini filename=".editorconfig"
max_line_length = 100
```

```json filename=".vscode/settings.json"
{
  "editor.rulers": [100]
}
```

硬换行能提高代码阅读和调试的效率。我们考虑了在等效 1600px 宽的屏幕，左右分屏对比代码的情况。对于更小的屏幕，我们建议调小字体或者缩放比例。

## 编码

所有源代码和纯文本文件都应使用 `utf-8` 编码。

```ini filename=".editorconfig"
charset = utf-8
```

## 作者及贡献者

作者：

- [郭云鹤](https://github.com/guoyunhe)
