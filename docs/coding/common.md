---
group: Coding Style
order: 0
---

# Common Coding Specification

Common guidelines that apply to various programming languages. Linting tools like
[EditorConfig](https://editorconfig.org/) and [Prettier](https://prettier.io/) can be used.

## `mandatory` Use 2 space indent

```html
<!-- bad -->
<html>
∙∙∙∙<head>
∙∙∙∙∙∙∙∙<title></title>
∙∙∙∙</head>
</html>

<!-- good -->
<html>
∙∙<head>
∙∙∙∙<title></title>
∙∙</head>
</html>
```

The decision is made based on the following reasons:

1. spaces have same visual results in all editors and web pages, while tabs don't.
2. 2 spaces is more obvious than 1 space.
3. 2 spaces saves more spaces than 3 or 4 spaces, espacially for `html` and `jsx` syntax which can
   have very deep nesting structure.

EditorConfig:

```ini filename=".editorconfig"
indent_style = space
indent_size = 2
```

## `recommended` Max line length 100 chars

Hard line wrap helps reading and debuging code more effiently. We considered diff code side by side
on a equivalent 1600px wide screen. For smaller screens, we suggest to decrease font size or display
scale factor.

EditorConfig:

```ini filename=".editorconfig"
max_line_length = 100
```

VS Code settings:

```json filename=".vscode/settings.json"
{
  "editor.rulers": [100]
}
```

## `mandatory` Use UTF-8 charset

All source code and text files should use UTF-8 charset when encoding and decoding.

EditorConfig:

```ini filename=".editorconfig"
charset = utf-8
```
