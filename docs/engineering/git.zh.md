---
group: 工程实践
order: 1.0
---

# Git 规约

## 提交消息/Commit Message

### 格式

- **推荐**使用《[约定式提交 (Convertional Commits)]》格式书写 Commit Message。（请完整阅读后再继续以下内容）
- 如果你在使用 `npx f2elint@latest` 初始化项目时启用了 `Commitlint`, 那么约定式提交规则也将一并启用。

### 语言

- 国际化项目和开源项目**推荐**使用英文书写 Commit Message，以增强协作。
- 其他项目**推荐**使用开发团队最普遍使用的语言，以提升效率。
- **不要**使用其他人无法理解的语言书写 Commit Message。
- **不要**使用拼音或不常见的缩写书写 Commit Message，以避免歧义。

### 类型/type

type 用来描述本次提交的改动类型，可选值及对应含义如下：

- feat: 新增功能
- fix: 修复 bug
- docs: 文档相关的改动
- style: 对代码的格式化改动，代码逻辑并未产生任何变化(例如代码缩进，分号的移除和添加)
- test: 新增或修改测试用例
- refactor: 重构代码或其他优化举措
- chore: 项目工程方面的改动，代码逻辑并未产生任何变化
- revert: 恢复之前的提交

> 注意：
>
> 1. commit message 的 type 和 changelog 的 type 存在紧密联系，然而它们两者之间并非一一对应，比如在 changelog 中一般不会指出文档 docs 或测试用例 test 等方面发生的变化
> 2. css 样式文件的修改一般属于 feat 或者 fix，并不是 style

### 范围/scope

scope 用来描述本次提交所涉及到的改动范围（例如模块、功能或其他任何限定的范围）。

scope 的具体取值视项目而定。以淘宝详情页为例，取值可以是：header, footer, favorite, sku, etc...

如果是 monorepo 的项目，scope 取值可以是 subpackage 的名称。例如 babel 项目中对某个 package 的修改：

```
chore(babel-helper-plugin-utils): add npmignore
```

### 描述/description

description 用来概括和描述本次提交的改动内容，需注意以下几点：

1. 时态方面使用一般现在时，不要使用过去时。虽然查看 message 时，message 内容本身都发生在过去，然而对于主题来说，使用现在时的时态更简洁明确，并且更易达成一致性：

   ```
   # good
   docs: delete redundant docs

   # bad
   docs: deleted redundant docs
   ```

   [StackOverflow: Should I use past or present tense in git commit messages](http://stackoverflow.com/questions/3580013/)

2. 句式使用祈使句。即一般情况不要增加主语。因为在绝大情况下，主语都是作者『我』：

   ```
   # good
   docs: delete redundant docs

   # bad
   docs: i delete redundant docs
   ```

3. 句首无需大写，句尾无需结束标点。因为主题（或标题）本身不用形成完整的句子：

   ```
   # good
   docs: delete redundant docs

   # bad
   docs: Delete redundant docs.
   ```

### 正文/body

日志的内容主体 body 用来描述详细的提交内容，可写可不写，需注意以下几点：

1. 时态方面使用一般现在时，不要用过去时态。
2. 句式视情况而定，一般使用祈使句式。
3. 标点方面遵循一般的文档格式规约。

### 脚注/footer

footer 通常用于代码评审过程记录、作者签名等。例如：

```
Reported-by: User1 <user1@example.com>
Helped-by: User2 <user2@example.com>
Reviewed-by: User3 <user3@example.com>
Signed-off-by: Author <author@example.com>
```

> 为什么要有签名区？
>
> 因为一个提交的元信息中只有作者（author）、提交者（committer）两个字段，而一段代码的诞生，参与的人往往不止于此，还可能有问题报告者（Reported-by）、代码评审者（Reviewed-by）、上游 Committer 的签名（Signed-off-by）。为此一些开源项目（如 Git、Linux）的一个约定俗成的习惯，是在提交的最后加上签名，每个贡献者一行，从上到下可以看到这段代码诞生的过程。

还可以添加其他元信息，例如：

1. 引用 Issues

   可以在 commit 信息里使用关键字 + Issue ID（Gitlab / Github / Redmine 或其他平台的），来表明该提交解决了某个 Issue。推荐使用的关键字有：

   ```
   close
   closes
   closed
   fix
   fixes
   fixed
   resolve
   resolves
   resolved
   ```

   关键字的选用可以根据当前语义、关联的 Issue 是否在当前仓库下，甚至是 commit 消息的长度限制来决定。

   - close: 关闭当前仓库的 Issue
   - fix: 关闭当前或其他仓库的 Issue, 一般指 Bug 修复
   - resolve: 关闭当前或其他仓库的 Issue

   关闭多个 Issues 使用如下格式:

   ```
   Close #1, #2, #3
   Close #1, close #2, close #3

   Fix #1, #2, #3
   Fix #1, close #2, close #3

   Resolve #1, #2, #3
   Resolve #1, close #2, close #3
   ```

2. 破坏性变动（Breaking changes）

   如果本次提交的改动是破坏性的，需要在这里声明：

   ```
   BREAKING CHANGE: 为了组件 API 规范的统一，本次升级将 size 属性的 value 值从 `s|m|l` 替换为 `small|medium|large`。

   请按照如下方式升级：

   <Button size="s">提交</Button>
   -->
   <Button size="small">提交</Button>

   继续使用 size="m" 可能会导致样式错误。
   ```

## 工作流/Workflow

### No Flow

如果项目仅有一人维护，则**不需要创建任何分支**，直接在 main/master 分支上提交代码即可。

### GitHub Flow / One Flow

[GitHub Flow] 和 [One Flow] 类似，在敏捷开发项目中获得了广泛使用。

这个模式最重要的特征是**仅有一个维护分支**，即 main/master 分支。从主分支创建 feature 和 hotfix 分支，开发完成后再合并回主分支。版本号总是递增的，如 2.x 发布后，通常便不会再发布 1.x 更新，1.x 的用户只能升级到 2.x 才能获得更新。目前绝大部分的 NPM 包和互联网项目，都是这种模式。

这种模式的优点在于解放了开发者，能够更快地交付迭代。而缺点则在于用户不得不更频繁地处理破坏性变更，以获取想要的功能更新或安全补丁。

### Git Flow

[Git Flow] 是 2010 年被总结出来的。当时的软件行业模式是由微软 IBM 等传统软件公司企业所主导的，SaaS 产品开发是主流。

这个模式最重要的特征是**有多个维护分支**，有固定的发布周期和较长的维护周期。当一个大版本发布后，上一个大版本仍然能在一段时间内获得热修复或小功能更新。最典型的例子是是 Node.js。Node.js 发布频率很高，半年一个大版本。但是运维希望长期保持一个大版本，降低迁移成本，保障稳定性。因此 Node.js 提供了 LTS 版本，将最新版本的一些非破坏性变功能更新 backport 回 LTS 分支。另外安全修复也会 backport 回所有尚在支持的大版本分支中。

这种模式的优点在于，用户可以不用担心软件突然升级或停止维护，导致自己无法使用或来不及迁移。但是另一方面，这种模式带来了巨大的维护成本，难以适应剧烈的市场变化。

📹 [Git Flow vs GitHub FLow: What You Need to Know](https://www.youtube.com/watch?v=hG_P6IRAjNQ)

## 分支命名/Branch Naming

### 常驻分支

单分支维护模式:

- `main`: 主分支

多分支维护模式:

- `main`: 主分支，最新的稳定版本，修复分支从此创建，再合并回此分支
- `feature`: 特性分支，新功能从此创建，再合并回此分支，正式发布时再合并到 `main`
- `next`: 下个大版本分支，破坏性变更从此创建，再合并会此分支，正式发布时再合并到 `main`
- `x`/`x.y`: 之前版本的维护分支，修复分支从此创建，再合并回此分支，这些分支不能合并回 `main`

### 临时分支

格式：

```
<类型>/[问题编号][处理人]<描述>
```

类型 (type) 与[约定式提交 (Convertional Commits)]中的一致。

最简单的例子，仅有类型和描述：

```
feat/shopping-cart
refactor/class-renaming
```

带上问题编号（GitHub Issue 或 JIRA Task）：

```
feat/1023-crash-on-search
fix/3012-crash-on-search
```

## 标签命名/Tag Naming

Git Tag 通常用来标记发布的版本。

1. 版本号**必须**符合《[语义化版本 (Semantic Versioning)]》约定。

   ```bash
   # good
   v1.0.0
   v1.0.0-rc.1
   v1.0.0-beta.2
   v1.0.0-alpha.3

   # bad, miss minor and patch version
   v1

   # bad, miss patch version
   v1.0

   # bad, too long
   v1.0.0.1

   # bad, leading zero
   v1.02.0
   ```

2. 正式版本 Tag **必须**位于主分支 (`master` 或 `main`)，请勿在变更分支或开发分支上发布正式版本。

3. 版本 Tag **推荐**以 v 开头，如 `v1.2.3`。这样在使用 `git checkout` 命令时，可以较方便的补全或列出版本号。

   ```bash
   $ git checkout v # 按下 Tab 补全
   Display all 184 possibilities? (y or n)
   v2.0.0            v5.0.0-beta.13    v5.0.0-rc.17      v5.13.0           v5.31.0
   v3.0.0            v5.0.0-beta.14    v5.0.0-rc.18      v5.13.1           v5.31.1
   v3.0.0-alpha.2    v5.0.0-beta.15    v5.0.0-rc.19      v5.14.0           v5.32.0
   v3.0.0-alpha.3    v5.0.0-beta.16    v5.0.0-rc.2       v5.14.1           v5.32.1
   ```

4. 多包仓库 (Monorepo) 分为两种情况：

   - 如果所有包遵循同一版本号发布，则无需特殊处理。示例：[vitest](https://github.com/vitest-dev/vitest/releases)
   - 如果不同包按照独立版本号发布，则版本 Tag **必须**加上包名作为前缀：`@foo/bar@1.2.2`。示例：[react-docgen](https://github.com/reactjs/react-docgen/releases)

## 参考资料

1. [Git Book](https://git-scm.com/book/zh/v2)
2. [Angular Commit Message Format](https://github.com/angular/angular/blob/main/contributing-docs/commit-message-guidelines.md)
3. [Karma Git Commit Msg](https://karma-runner.github.io/6.4/dev/git-commit-msg.html)

[约定式提交 (Convertional Commits)]: https://www.conventionalcommits.org/zh-hans/
[语义化版本 (Semantic Versioning)]: https://semver.org/lang/zh-CN/
[GitHub Flow]: https://docs.github.com/zh/get-started/using-github/github-flow
[One Flow]: https://www.endoflineblog.com/oneflow-a-git-branching-model-and-workflow
[Git Flow]: https://nvie.com/posts/a-successful-git-branching-model/
