import Gitalk from '/_gitalk.js';
import projectConfig from '/pagic.config.js';
var _a, _b;
export default {
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'prev': {
        "text": "深入浅出 Create React App",
        "link": "articles/node/create-react-app-intro.html"
    },
    'next': {
        "link": "articles/translation/index.html",
        "text": "翻译篇"
    },
    'gitalk': React.createElement(Gitalk, { admin: [
            'hylerrix'
        ], clientID: "60180eea2c09238f8998", clientSecret: "e9ea0ff6555185eda28eff4dfd4b755b1764abf3", id: "articles/node/javascript-toolchain-rome.html", owner: "hylerrix", pagerDirection: "first", repo: "deno-tutorial", title: "\u6B32\u53D6\u4EE3\u7EDD\u5927\u591A JavaScript \u5DE5\u5177\u94FE\uFF1FRome \u5C1D\u9C9C" }),
    'sidebar': [
        {
            "text": "Deno 钻研之术",
            "link": "articles/index.html",
            "pagePath": "articles/README.md"
        },
        {
            "link": "articles/document/index.html",
            "title": "文档篇",
            "children": [
                {
                    "text": "Deno 版本历史概览",
                    "link": "articles/document/deno-version-handbook.html",
                    "pagePath": "articles/document/deno-version-handbook.md"
                },
                {
                    "text": "Deno CLI 通用手册",
                    "link": "articles/document/deno-cli-handbook.html",
                    "pagePath": "articles/document/deno-cli-handbook.md"
                }
            ],
            "text": "文档篇",
            "pagePath": "articles/document/README.md"
        },
        {
            "link": "articles/basic/index.html",
            "title": "基础篇",
            "children": [
                {
                    "text": "Hello，从多样化安装到简单实战",
                    "link": "articles/basic/install-and-hello-world.html",
                    "pagePath": "articles/basic/install-and-hello-world.md"
                }
            ],
            "text": "基础篇",
            "pagePath": "articles/basic/README.md"
        },
        {
            "link": "articles/architecture/index.html",
            "title": "架构篇",
            "children": [
                {
                    "link": "articles/architecture/cli/index.html",
                    "title": "探索 CLI",
                    "children": [
                        {
                            "text": "从 CLI 指令通读 Deno v1.x 全特性",
                            "link": "articles/architecture/cli/deno-cli-v1-function.html",
                            "pagePath": "articles/architecture/cli/deno-cli-v1-function.md"
                        }
                    ],
                    "text": "CLI 篇",
                    "pagePath": "articles/architecture/cli/README.md"
                }
            ],
            "text": "架构篇",
            "pagePath": "articles/architecture/README.md"
        },
        {
            "link": "articles/ecology/index.html",
            "title": "生态篇",
            "children": [
                {
                    "text": "Awesome Deno 中文资源全图谱",
                    "link": "articles/ecology/awesome-deno-cn.html",
                    "pagePath": "articles/ecology/awesome-deno-cn.md"
                }
            ],
            "text": "生态篇",
            "pagePath": "articles/ecology/README.md"
        },
        {
            "link": "articles/node/index.html",
            "title": "Node 篇",
            "children": [
                {
                    "text": "深入浅出 Create React App",
                    "link": "articles/node/create-react-app-intro.html",
                    "pagePath": "articles/node/create-react-app-intro.md"
                },
                {
                    "text": "欲取代绝大多 JavaScript 工具链？Rome 尝鲜",
                    "link": "articles/node/javascript-toolchain-rome.html",
                    "pagePath": "articles/node/javascript-toolchain-rome.md"
                }
            ],
            "text": "Node 篇",
            "pagePath": "articles/node/README.md"
        },
        {
            "link": "articles/translation/index.html",
            "title": "翻译篇",
            "children": [
                {
                    "text": "Deno 入门手册：附大量 TypeScript 代码实例",
                    "link": "articles/translation/the-deno-handbook.html",
                    "pagePath": "articles/translation/the-deno-handbook.md"
                },
                {
                    "text": "Deno + WebSockets 打造聊天室应用",
                    "link": "articles/translation/deno-chat-app.html",
                    "pagePath": "articles/translation/deno-chat-app.md"
                },
                {
                    "text": "从 Node 到 Deno：探索各大主流库替代方案",
                    "link": "articles/translation/from-node-to-deno.html",
                    "pagePath": "articles/translation/from-node-to-deno.md"
                },
                {
                    "text": "Deno + Oak 构建酷炫的 Todo API",
                    "link": "articles/translation/deno-oak-todo-api.html",
                    "pagePath": "articles/translation/deno-oak-todo-api.md"
                },
                {
                    "text": "Deno + Oak 连接 MySQL 实战教程",
                    "link": "articles/translation/deno-oak-mysql.html",
                    "pagePath": "articles/translation/deno-oak-mysql.md"
                }
            ],
            "text": "翻译篇",
            "pagePath": "articles/translation/README.md"
        },
        {
            "link": "articles/ROADMAP.html",
            "title": "未来规划",
            "children": [
                {
                    "text": "前端篇",
                    "link": "articles/frontend/index.html",
                    "pagePath": "articles/frontend/README.md"
                },
                {
                    "text": "后端篇",
                    "link": "articles/backend/index.html",
                    "pagePath": "articles/backend/README.md"
                },
                {
                    "text": "语言篇",
                    "link": "articles/language/index.html",
                    "pagePath": "articles/language/README.md"
                },
                {
                    "text": "转载篇",
                    "link": "articles/forward/index.html",
                    "pagePath": "articles/forward/README.md"
                },
                {
                    "text": "周报篇",
                    "link": "articles/weekly/index.html",
                    "pagePath": "articles/weekly/README.md"
                }
            ],
            "text": "未来规划",
            "pagePath": "articles/ROADMAP.md"
        },
        {
            "text": "感谢",
            "link": "articles/THANKS.html",
            "pagePath": "articles/THANKS.md"
        }
    ],
    config: { "root": "/", ...projectConfig, ...(_b = (_a = projectConfig.i18n) === null || _a === void 0 ? void 0 : _a.overrides) === null || _b === void 0 ? void 0 : _b['undefined'] },
    'pagePath': "articles/node/javascript-toolchain-rome.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/node/javascript-toolchain-rome.html",
    'title': "欲取代绝大多 JavaScript 工具链？Rome 尝鲜",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>欲取代绝大多 JavaScript 工具链？Rome 尝鲜</h1>\n<p>文章缩略图：一个包含希腊斯巴达头盔的罗马项目 Logo</p>\n<blockquote>\n<p>条条大路通 Rome。在 Rome 还没有发布 NPM 正式版之际。我们围绕 JavaScript 工具链为核心点，来看看前往 Rome 的路上都有什么；以及 Rome 本身，意味着什么？</p>\n</blockquote>\n<p>二月的最后一天，我在为“<a href="https://github.com/ningowood/open-source-magazine">开源爱好者月刊</a>”搜寻本月最新的开源项目时，偶遇一个名叫 Rome 的仓库霸榜，眼前着实一亮。“一个实验性的 JavaScript 工具链”、“包括编译器、lint、格式化程序、捆绑器、测试框架等”以及“旨在成为与 JavaScript 源码处理相关的所有功能的综合工具”短短几句话展现了一个宏大的目标。现在，是时候入坑了解一波并在个人能力范围内作一个浅要的分享。</p>\n<p>Rome 由就职于 Facebook 同时是 Babel 和 Yarn 作者的 Sebastian McKenzie 主导开源，开源之前，Rome 基本是他的个人项目，现在 Facebook 愿意付薪水让他潜心开发。截止现在（2020 年 04 月初），Rome 的提交记录已经从 70+ 到 600+，贡献者拓展到了 40+ 位，产生了 30+ issues 和 170+ Pull Request。</p>\n<p>Rome 的 Star 趋势图，发布之初便 3k+ star：</p>\n<p><img src="https://cdn.nlark.com/yuque/0/2020/png/86548/1586250919893-28d3dc40-57d9-4a99-9023-50e8c259ffbd.png#align=left&amp;display=inline&amp;height=323&amp;margin=%5Bobject%20Object%5D&amp;name=image.png&amp;originHeight=1176&amp;originWidth=1678&amp;size=111441&amp;status=done&amp;style=none&amp;width=461" alt=""></p>\n<p>此外，或许也能从侧面呼应我曾在月刊第三期中收录的一句关于“创业公司和大公司开源出发点有何不同”的话：大公司可能在一个项目的早期便开源，凭借其号召力希望更多人一起“贡献”迭代，初创团队则会在产品相对成熟的时候再开放，希望尽快吸引用户深度“使用”，注重完善产品在工业环境下的综合表现。</p>\n<p>正文 &amp; 背景 &amp; 干货开始。</p>\n<h2 id="rome%EF%BC%9A%E4%BB%8E%E4%B8%AA%E4%BA%BA%E9%A1%B9%E7%9B%AE%E5%88%B0-facebook-%E6%96%B0%E5%BC%80%E6%BA%90">Rome：从个人项目到 Facebook 新开源<a class="anchor" href="#rome%EF%BC%9A%E4%BB%8E%E4%B8%AA%E4%BA%BA%E9%A1%B9%E7%9B%AE%E5%88%B0-facebook-%E6%96%B0%E5%BC%80%E6%BA%90">§</a></h2>\n<p>从官网不难看出，Rome 旨在成为与 JavaScript 源代码处理相关的所有功能的综合工具，其中包括“编译器、Linter、格式化程序、捆绑器、依赖管理器和测试框架”等。Rome 源于对整个项目的扩展范围一致性的渴望。</p>\n<p>同时，Rome 也来源于 Babel 作者本身对 Babel 的一些不满足而新创，就像 Deno 之于 Node 一样。</p>\n<p>Rome 作者 Sebastian 关于 Rome 的推文集：</p>\n<p><img src="https://cdn.nlark.com/yuque/0/2020/png/86548/1586507768694-82e44955-f16d-4102-9f12-a7e347583ac0.png#align=left&amp;display=inline&amp;height=336&amp;margin=%5Bobject%20Object%5D&amp;name=image.png&amp;originHeight=846&amp;originWidth=1180&amp;size=135209&amp;status=done&amp;style=none&amp;width=469" alt=""></p>\n<p>本节根据 <a href="http://README.md">README.md</a> 和官网首页的介绍，来以问答形式展示 Rome 的背景和想要达到具体目标。</p>\n<h3 id="01%E3%80%81rome-%E7%9A%84%E4%B8%80%E4%BA%9B%E6%9D%A5%E6%BA%90%EF%BC%9F">01、Rome 的一些来源？<a class="anchor" href="#01%E3%80%81rome-%E7%9A%84%E4%B8%80%E4%BA%9B%E6%9D%A5%E6%BA%90%EF%BC%9F">§</a></h3>\n<blockquote>\n<p>在计算机科学中只有两件难事：缓存失效和命名。 ——Phil Karlton</p>\n</blockquote>\n<ul>\n<li>立项来源：由 Babel and Yarn 的作者 Sebastian McKenzie 发起，是 React Native 团队的一个项目。</li>\n<li>名称来源：因“通向罗马的所有道路”，“罗马不是一天建成”和“在罗马时要像罗马人一样”这样的谚语而得名。 这是指整个项目的扩展范围和对一致性的渴望，它始于一个办公室玩笑。</li>\n<li>Logo 来源：一个古希腊斯巴达头盔。虽然它不是罗马字母，也不太相关，但看起来比 Galea （罗马士兵的头盔）酷。</li>\n</ul>\n<h3 id="02%E3%80%81rome-%E7%9A%84%E7%BC%96%E7%A0%81%E6%9E%B6%E6%9E%84%EF%BC%9F">02、Rome 的编码架构？<a class="anchor" href="#02%E3%80%81rome-%E7%9A%84%E7%BC%96%E7%A0%81%E6%9E%B6%E6%9E%84%EF%BC%9F">§</a></h3>\n<blockquote>\n<p>在版本控制系统中，monorepo（单声道存储库的音节缩写）是一种软件开发策略，其中许多项目的代码存储在同一存储库中。 截至 2017 年，这种软件工程实践已有十多年的历史，但直到最近才被命名。——Monorepo，维基百科</p>\n</blockquote>\n<ul>\n<li>完全使用 TypeScript 编写，很少使用松散类型。</li>\n<li>支持处理 JSX 以及 Flow 和 TypeScript 代码。</li>\n<li>self-hosted，可以自己编译自己。</li>\n<li>不是现有工具的集合，所有组件都是自定义的，不使用第三方依赖项（对 JavaScript 生态系统进行了重新思考，对整个工具链采用了不依赖第三方库的大胆实现）。</li>\n<li>是带有内部软件包的 monorepo 架构以便划定代码边界。</li>\n</ul>\n<h3 id="03%E3%80%81rome-%E7%9A%84%E5%B7%A5%E4%BD%9C%E5%B1%95%E6%9C%9B%EF%BC%9F">03、Rome 的工作展望？<a class="anchor" href="#03%E3%80%81rome-%E7%9A%84%E5%B7%A5%E4%BD%9C%E5%B1%95%E6%9C%9B%EF%BC%9F">§</a></h3>\n<ul>\n<li>旨在成为与 JavaScript 源代码处理相关的所有功能的综合工具。</li>\n<li>目标是替代许多现有的 JavaScript 工具，但也将提供为其他工具提供自身的集成方案，以根据需要随意使用——例如使用 Rome 编译器作为另一个捆绑程序的插件。</li>\n<li>目前关注的领域是 Linter（用于分析源代码以标记编程错误，bug，样式错误和可疑结构的工具），这是将 Rome 变成最容易使用的工具链的目标里阻力最小的一个环节。</li>\n</ul>\n<h2 id="%E5%BE%AE%E6%A0%8F%EF%BC%9A%E5%9B%9E%E7%9C%8B-javascript-%E5%B7%A5%E5%85%B7%E9%93%BE">微栏：回看 JavaScript 工具链<a class="anchor" href="#%E5%BE%AE%E6%A0%8F%EF%BC%9A%E5%9B%9E%E7%9C%8B-javascript-%E5%B7%A5%E5%85%B7%E9%93%BE">§</a></h2>\n<blockquote>\n<p>在学习一个工具之前，往往我们应该先去了解这个工具可以用来解决什么样的问题；同样的，当我们遇到一个问题的时候，我们也应该带着这个问题去找工具解决。\n**——**阿里巴巴集团 高级前端工程师 叶俊星</p>\n</blockquote>\n<p>成熟的软件项目必然遵循的良好的开发规范，也拥有属于自身独特的软件开发生命周期，编程实践只占整个开发周期的很小一部分。当一个 JavaScript 软件被建立时通常还会遇到哪些需要解决的问题？这便涉及到了 JavaScript 项目的技术选型，而 JavaScript 生态圈的明星项目数不胜数，以下作一个纵览，不涉及各个工具的具体使用方式。</p>\n<p>JavaScript 工具链示意图：</p>\n<p><img src="https://cdn.nlark.com/yuque/0/2020/png/86548/1586513611176-e3066f3f-4113-43ed-a45c-94c5307217e1.png#align=left&amp;display=inline&amp;height=180&amp;margin=%5Bobject%20Object%5D&amp;name=image.png&amp;originHeight=360&amp;originWidth=708&amp;size=117163&amp;status=done&amp;style=none&amp;width=354" alt=""></p>\n<ul>\n<li><strong>JS 开发环境</strong>？有 V8、Node 甚至是 Deno 等；</li>\n<li><strong>JS 前端框架</strong>？有 Angular、React、Vue、React Native、jQuery 等；</li>\n<li><strong>JS 后端框架</strong>？有 Nest、Express、Koa 等；</li>\n<li><strong>JS 脚手架</strong>？有 Vue CLI、Angular CLI、Create React App、Yeoman 等；</li>\n<li><strong>JS 转译工具</strong>？有 Babel  等；</li>\n<li><strong>JS 测试工具</strong>？围绕单元测试、集成测试，有 Mocha、Jasmine、Jest、Karma 等；</li>\n<li><strong>JS 调试工具</strong>？有 Chrome DevTools/Firebug/Webkit inspector 等各大主流浏览器、VS Code/WebStorm 等各大编辑器/IDE 等；</li>\n<li><strong>JS 格式规范工具</strong>？有 JSLint、JSHint、ESLint、TSLint 等；</li>\n<li><strong>JS 接口联调工具</strong>？有 Axios、Fetch 等；</li>\n<li><strong>JS 包管理器</strong>？有 NPM、Yarn、Bower、PNPM 等；</li>\n<li><strong>JS 模块加载器</strong>？有 RequireJS、SystemJS、StealJS、ES Module Loader 等；</li>\n<li><strong>JS 任务管理工具</strong>？Grunt、Gulp、Webpack 监听文件变化，自动执行任务；</li>\n<li><strong>JS 静态化支持</strong>？有 TypeScript、CoffeeScript、Flow、LiveScript 等；</li>\n<li><strong>JS 代码后处理工具</strong>？围绕混淆器、缩小器、优化器诸多领域有各种各样的 loader 等；</li>\n<li><strong>JS 打包工具</strong>？Webpack、Rollup、Parcel、Browserify 等；</li>\n<li><strong>JS 模板引擎</strong>？有 handlebarsjs、etpl、templatejs 甚至各大前端框架内置的模板语法等；</li>\n<li><strong>JS 非 Web 框架</strong>？在物联网、区块链、大数据等领域均有相关库支持，本文不涉及。</li>\n<li><strong>JS 进程管理</strong>？有 Forever、PM2、StrongLoop Process Manager 等；</li>\n<li><strong>......</strong>？甚至编辑器、IDE、CSS 预处理器、代码托管平台、团队开发模式(纯前端、重后端、前后分离)、WebAssembly、Serverless、JS DevOps 等都可以加到项目的技术选型范围内。</li>\n</ul>\n<p>因此可以看出，技术选型便是针对能让项目成功运转各个环节寻找相应的解决方案；工作流（Workflow）是所有解决方案融合后的落实流程；而工具链（Toolchain）便是工作流下所有实现方式的汇总，同时一个工具也能代表一个解决方案。</p>\n<p>简而言之，JavaScript 工具链便是 JavaScript 工程师在开发过程中会用到的一系列工具。</p>\n<h2 id="%E6%B5%85%E5%B0%9D%E5%88%9D%E8%AF%95-rome-(v0.0.52)">浅尝初试 Rome (v0.0.52)<a class="anchor" href="#%E6%B5%85%E5%B0%9D%E5%88%9D%E8%AF%95-rome-(v0.0.52)">§</a></h2>\n<p>现在 Rome 并没有直接在 Github 上发布任何版本，但编译后生成的 rome.json 可以看出有一个 v0.0.52 的版本号，处于一个很早期的状态，项目简介也是“一个实验性的 JavaScript 工具链”。</p>\n<p>想要尝试 Rome，就得从以下步骤逐步展开（由于 Rome 没有发布正式版本，这里无需过多涉及如何整合在 package.json 的脚本中使用等工程化过程）。</p>\n<p>帝国时代里的罗马大军：</p>\n<p><img src="https://cdn.nlark.com/yuque/0/2020/png/86548/1582968932888-16752733-9ed4-49ff-a135-4b2f1d37b55a.png#align=left&amp;display=inline&amp;height=282&amp;margin=%5Bobject%20Object%5D&amp;name=image.png&amp;originHeight=695&amp;originWidth=1236&amp;size=2575437&amp;status=done&amp;style=none&amp;width=502" alt=""></p>\n<p>本章所有 Demo 均在 <a href="https://github.com/hylerrix/demos">@hylerrix/demos</a> 的 Rome 文件夹中。</p>\n<h3 id="01%E3%80%81git-clone-rome">01、git clone rome<a class="anchor" href="#01%E3%80%81git-clone-rome">§</a></h3>\n<p>既然 Rome 没有正式发布版本，我们也无法直接从 NPM 上直接安装 Rome。现阶段，Rome 提供了本地安装的方式，只需要克隆到本地并本地编译和本地 NPM 安装即可使用。</p>\n<blockquote>\n<p>注：安装 Rome 前请确保本地已正常安装 Node 和 NPM</p>\n</blockquote>\n<pre class="language-bash"><code class="language-bash"><span class="token comment"># 克隆 Rome 项目到本地</span>\n$ <span class="token function">git</span> clone <a class="token url-link" href="https://github.com/facebookexperimental/rome">https://github.com/facebookexperimental/rome</a>\n<span class="token comment"># 命令行进入 Rome 项目</span>\n$ <span class="token builtin class-name">cd</span> rome\n<span class="token comment"># 方式一：编译 Rome</span>\n$ ./scripts/build-release dist\n<span class="token comment"># 方式二：编译 Rome（Windows 10 的情况下，使用 PowerShell 7）</span>\n$ <span class="token builtin class-name">cd</span> rome <span class="token operator">&amp;&amp;</span> node scripts/build-release dist\n<span class="token comment"># 安装编译后的 Rome 到本地全局环境中</span>\n$ <span class="token function">npm</span> <span class="token function">install</span> -g ./dist/\n<span class="token comment"># 现在便可以使用 Rome 了</span>\n$ rome <span class="token comment"># No command specified. Run --help to see available commands.</span>\n</code></pre>\n<h3 id="02%E3%80%81rome-init">02、rome init<a class="anchor" href="#02%E3%80%81rome-init">§</a></h3>\n<p>rome init 命令会在当前目录生成一个 rome.json 文件，使用推荐配置会初始化以下内容：</p>\n<pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n  <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"^0.0.52"</span><span class="token punctuation">,</span>\n  <span class="token property">"lint"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"enabled"</span><span class="token operator">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>该文件告诉 Rome 至少应为 0.0.52 版本，以便与当前项目一起使用。具体使用文档还在开发中。</p>\n<h3 id="03%E3%80%81rome-run-index.ts">03、rome run index.ts<a class="anchor" href="#03%E3%80%81rome-run-index.ts">§</a></h3>\n<p>rome run 命令将运行传递给它的任何文件，通常与项目的主文件一起使用。目前仍在开发中，可能无法正确处理所有源文件。此时我们为测试 rome run 成功运行，建立一个 index.ts 和 api.ts 文件，如下。</p>\n<pre class="language-javascript"><code class="language-javascript"><span class="token comment">// index.ts</span>\n<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> getData <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'./api\'</span>\n\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">setData</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> success<span class="token punctuation">,</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword control-flow">await</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">\'success:\'</span><span class="token punctuation">,</span> success<span class="token punctuation">)</span>\n  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">\'data:\'</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword control-flow">await</span> <span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token comment">// api.ts</span>\n<span class="token keyword module">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token known-class-name class-name">Promise</span><span class="token punctuation">.</span><span class="token method function property-access">resolve</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  success<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  data<span class="token operator">:</span> <span class="token string">\'Hello World!\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n<p>此时，运行如下命令便可以成功使用：</p>\n<pre class="language-bash"><code class="language-bash">$ rome run index.ts\n<span class="token comment"># ℹ Bundling index.ts</span>\n<span class="token comment"># success: true</span>\n<span class="token comment"># data: \'Hello World!\'</span>\n</code></pre>\n<h3 id="04%E3%80%81rome-lint-index.ts">04、rome lint index.ts<a class="anchor" href="#04%E3%80%81rome-lint-index.ts">§</a></h3>\n<p>由于我真的不喜欢在 JavaScript 应用里面写分号，这与主流规范有些不同，所以 rome lint 命令刚好派上了用场：rome 默认需要在 JavaScript 语句结尾写分号。同时在 api.ts 中故意不导出一个 interface 且在 index.ts 中故意将其错误导入，重构后的有错误 index.ts 和 api.ts 以及 rome lint 后执行过程如下：</p>\n<pre class="language-javascript"><code class="language-javascript"><span class="token comment">// 故意错误编写的 index.ts</span>\n<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> getData <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'./api\'</span>\n\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span>success<span class="token punctuation">,</span> data<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword control-flow">await</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">\'success:\'</span><span class="token punctuation">,</span> success<span class="token punctuation">)</span>\n  <span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token string">\'data:\'</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword control-flow">await</span> <span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token comment">// 故意错误不导出的 api.ts</span>\n<span class="token keyword">interface</span> <span class="token class-name">Params</span> <span class="token punctuation">{</span>\n  username<span class="token operator">:</span> string\n  token<span class="token operator">:</span> string\n<span class="token punctuation">}</span>\n\n<span class="token keyword module">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">params<span class="token operator">:</span> <span class="token maybe-class-name">Params</span></span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token known-class-name class-name">Promise</span><span class="token punctuation">.</span><span class="token method function property-access">resolve</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  success<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  data<span class="token operator">:</span> <span class="token string">\'Hello World!\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n<pre class="language-bash"><code class="language-bash">$ rome lint index.ts\n<span class="token comment">#  index.ts lint/pendingFixes ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</span>\n<span class="token comment"># </span>\n<span class="token comment">#   ✖ Pending fixes</span>\n<span class="token comment"># </span>\n<span class="token comment">#      1 │ + import {getData, Params} from \'./api.ts\';</span>\n<span class="token comment">#        │ - import {·getData, Params·} from \'./api.ts\'</span>\n<span class="token comment">#      2 │   </span>\n<span class="token comment">#     .. │ </span>\n<span class="token comment">#      4 │     const param: Params = {</span>\n<span class="token comment">#      5 │       username: \'hylerrix\',</span>\n<span class="token comment">#      6 │ +     token: \'ningowood\',</span>\n<span class="token comment">#      7 │ +   };</span>\n<span class="token comment">#      8 │ +   const {success, data} = await getData(param);</span>\n<span class="token comment">#      9 │ +   console.log(\'success:\', success);</span>\n<span class="token comment">#     10 │ +   console.log(\'data:\', data);</span>\n<span class="token comment">#     11 │   }</span>\n<span class="token comment">#     12 │   </span>\n<span class="token comment">#     13 │ + await setData();</span>\n<span class="token comment">#     14 │   </span>\n<span class="token comment"># </span>\n<span class="token comment">#  index.ts:1:18 resolver/unknownExport ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</span>\n<span class="token comment"># </span>\n<span class="token comment">#   ✖ Couldn\'t find export Params in api.ts</span>\n<span class="token comment"># </span>\n<span class="token comment">#   > 1 │ import { getData, Params } from \'./api.ts\'</span>\n<span class="token comment">#       │                   ^^^^^^ </span>\n<span class="token comment">#     2 │ </span>\n<span class="token comment">#     3 │ async function setData() {</span>\n<span class="token comment"># </span>\n<span class="token comment">#   ℹ However we found a matching local variable in api.ts. Did you forget to export it?</span>\n<span class="token comment"># </span>\n<span class="token comment">#   > 1 │ interface Params {</span>\n<span class="token comment">#       │           ^^^^^^ </span>\n<span class="token comment">#     2 │   username: string</span>\n<span class="token comment">#     3 │   token: string</span>\n<span class="token comment"># </span>\n<span class="token comment"># ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</span>\n<span class="token comment"># </span>\n<span class="token comment"># ℹ Fixes available. Run `rome lint --fix` to apply.</span>\n<span class="token comment"># ✖ Found 2 problems</span>\n$ rome lint index.ts --fix\n<span class="token comment"># ......</span>\n<span class="token comment"># ✔ 1 file fixed</span>\n<span class="token comment"># ✖ Found 2 problems</span>\n</code></pre>\n<p>rome lint 命令在这里提示我们需要加分号并需要在 api.ts 中成功导出 interface。前者可以使用 rome lint index.ts --fix 直接来修理（不会在 api.ts 中添加分号）；后者需要手动修理，但是提供了十分完善的友好提示。</p>\n<h3 id="05%E3%80%81rome-compile-index.ts">05、rome compile index.ts<a class="anchor" href="#05%E3%80%81rome-compile-index.ts">§</a></h3>\n<p>rome compile 命令将使用一组默认转换来编译文件。由于在开发中，当前此命令没有用于指定转换子集的选项。使用这条命令后，输出的结果已经没有了 interface 的存在。</p>\n<pre class="language-bash"><code class="language-bash">$ rome compile index.ts\n<span class="token comment"># import {getData, Params} from \'./api\';</span>\n<span class="token comment"># </span>\n<span class="token comment"># async function setData() {</span>\n<span class="token comment">#   const param = {</span>\n<span class="token comment">#     username: \'hylerrix\',</span>\n<span class="token comment">#     token: \'ningowood\',</span>\n<span class="token comment">#   };</span>\n<span class="token comment">#   const {success, data} = await getData(param);</span>\n<span class="token comment">#   console.log(\'success:\', success);</span>\n<span class="token comment">#   console.log(\'data:\', data);</span>\n<span class="token comment"># }</span>\n<span class="token comment"># </span>\n<span class="token comment"># await setData();</span>\n</code></pre>\n<h3 id="06%E3%80%81rome-parse-index.ts">06、rome parse index.ts<a class="anchor" href="#06%E3%80%81rome-parse-index.ts">§</a></h3>\n<p>rome parse 命令将解析文件并输出格式精美的 AST。</p>\n<pre class="language-bash"><code class="language-bash">$ rome parse index.ts\n<span class="token comment"># Program {</span>\n<span class="token comment">#   comments: Array []</span>\n<span class="token comment">#   corrupt: false</span>\n<span class="token comment">#   diagnostics: Array []</span>\n<span class="token comment">#   directives: Array []</span>\n<span class="token comment">#   filename: \'project-rome/index.ts\'</span>\n<span class="token comment">#   hasHoistedVars: false</span>\n<span class="token comment">#   mtime: 1_586_498_633_476.8486</span>\n<span class="token comment">#   sourceType: \'module\'</span>\n<span class="token comment">#   syntax: Array [\'ts\']</span>\n<span class="token comment">#   body: Array [</span>\n<span class="token comment">#     ImportDeclaration {</span>\n<span class="token comment">#       source: StringLiteral {value: \'./api\'}</span>\n<span class="token comment">#       namedSpecifiers: Array [</span>\n<span class="token comment">#         ......</span>\n</code></pre>\n<h3 id="07%E3%80%81rome-%E7%9A%84%E6%9B%B4%E5%A4%9A%E5%91%BD%E4%BB%A4">07、Rome 的更多命令<a class="anchor" href="#07%E3%80%81rome-%E7%9A%84%E6%9B%B4%E5%A4%9A%E5%91%BD%E4%BB%A4">§</a></h3>\n<p>除了官网展示的几个命令外，从源码可以看出还有很多内置的命令正在开发，可以从 rome --help 中寻找答案。</p>\n<pre class="language-bash"><code class="language-bash"><span class="token comment"># 分析并输出文件的依赖</span>\n$ rome analyzeDependencies index.ts\n<span class="token comment"># 把 JavaScript 打包为一个文件</span>\n$ rome bundle index.ts dist\n<span class="token comment"># 启动 Web 服务器</span>\n$ rome develop\n<span class="token comment"># 计算文件路径</span>\n$ rome resolve index.ts\n<span class="token comment"># 安全依赖，运行 Linter 和测试</span>\n$ rome ci\n<span class="token comment"># 运行测试</span>\n$ rome <span class="token builtin class-name">test</span>\n<span class="token comment"># ...restart/start/status/stop/web</span>\n<span class="token comment"># ...config/publish/run/evict/logs/rage</span>\n</code></pre>\n<h2 id="%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99">参考资料<a class="anchor" href="#%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99">§</a></h2>\n<ul>\n<li>[English] <a href="https://github.com/facebookexperimental/rome">Rome Github Project</a></li>\n<li>[English] <a href="https://jasonformat.com/rome-javascript-toolchain/">Rome, a new JavaScript Toolchain</a></li>\n<li>[English] <a href="https://twitter.com/sebmck/status/1232885861135421441">Rome Official Announcement</a></li>\n<li>[English] <a href="https://twitter.com/sebmck/status/1108407803545214977">Rome Timeline</a></li>\n<li>[English] <a href="https://www.infoq.com/news/2020/03/rome-experimental-js-toolchain/">Facebook Introduces Rome Experimental JavaScript Toolchain</a></li>\n<li>[English] <a href="https://podcast.babeljs.io/rome/">01: Sebastian McKenzie on Babel and the Road to Rome - The Babel Podcast</a></li>\n<li><a href="https://zhuanlan.zhihu.com/p/23928404">前端工具链课（一）—— 包管理工具</a></li>\n<li><a href="https://blog.csdn.net/qiwoo_weekly/article/details/104624223">Rome：Facebook 最新 JS 工具上手</a></li>\n</ul>\n<h2 id="%E6%80%BB%E7%BB%93-%26-%E8%AE%A2%E9%98%85">总结 &amp; 订阅<a class="anchor" href="#%E6%80%BB%E7%BB%93-%26-%E8%AE%A2%E9%98%85">§</a></h2>\n<p>经过近几年的蓬勃发展，JavaScript 早已不再局限于“前端开发”的领域中。因此本篇写作的角度并不是仅仅以前端开发为主体探索，而是将 JavaScript 本身抽离出来，这也是自己逐步理清职业发展的一个重要改变。</p>\n<p>本文通过学习和写作分享对 Rome 进行了简要的了解，但这还仅仅是入门。自己对 Babel 本身并不熟，还有很多学习过程中产生的疑惑都无法现在进行合适的解答，比如“Rome 和 Babel 的具体异同”、“如何看待 Rome 仓库使用 Git 跟踪 Node Modules”、“Rome 替代现有工具或进行集成方案的具体原理”以及“Rome 的打包流程有何特点”等，挖个坑可以一起交流。</p>\n<p>无论最终是否使用 Rome，能引发对 JavaScript 工具链的重新思考也会很有收获。</p>\n<p>最后，感谢你的阅读，公众号(@ningowood) 及配套群聊欢迎加入，同时欢迎给如期更新了三期，即将支持线上 UI 界面浏览并提供更多拓展功能的“开源爱好者月刊（<a href="https://github.com/ningowood/open-source-magazine">@ningowood/open-source-magazine</a>）”仓库点个 Star 吧！（Github 好久没涨粉丝了，也欢迎关注我~）</p>\n<p><img src="https://cdn.nlark.com/yuque/0/2020/png/86548/1586513640616-7cc6456c-66cd-441d-aa44-09c7567d2960.png#align=left&amp;display=inline&amp;height=258&amp;margin=%5Bobject%20Object%5D&amp;name=image.png&amp;originHeight=258&amp;originWidth=258&amp;size=46759&amp;status=done&amp;style=none&amp;width=258" alt=""></p>'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#rome%EF%BC%9A%E4%BB%8E%E4%B8%AA%E4%BA%BA%E9%A1%B9%E7%9B%AE%E5%88%B0-facebook-%E6%96%B0%E5%BC%80%E6%BA%90">Rome：从个人项目到 Facebook 新开源</a><ol><li><a href="#01%E3%80%81rome-%E7%9A%84%E4%B8%80%E4%BA%9B%E6%9D%A5%E6%BA%90%EF%BC%9F">01、Rome 的一些来源？</a></li><li><a href="#02%E3%80%81rome-%E7%9A%84%E7%BC%96%E7%A0%81%E6%9E%B6%E6%9E%84%EF%BC%9F">02、Rome 的编码架构？</a></li><li><a href="#03%E3%80%81rome-%E7%9A%84%E5%B7%A5%E4%BD%9C%E5%B1%95%E6%9C%9B%EF%BC%9F">03、Rome 的工作展望？</a></li></ol></li><li><a href="#%E5%BE%AE%E6%A0%8F%EF%BC%9A%E5%9B%9E%E7%9C%8B-javascript-%E5%B7%A5%E5%85%B7%E9%93%BE">微栏：回看 JavaScript 工具链</a></li><li><a href="#%E6%B5%85%E5%B0%9D%E5%88%9D%E8%AF%95-rome-(v0.0.52)">浅尝初试 Rome (v0.0.52)</a><ol><li><a href="#01%E3%80%81git-clone-rome">01、git clone rome</a></li><li><a href="#02%E3%80%81rome-init">02、rome init</a></li><li><a href="#03%E3%80%81rome-run-index.ts">03、rome run index.ts</a></li><li><a href="#04%E3%80%81rome-lint-index.ts">04、rome lint index.ts</a></li><li><a href="#05%E3%80%81rome-compile-index.ts">05、rome compile index.ts</a></li><li><a href="#06%E3%80%81rome-parse-index.ts">06、rome parse index.ts</a></li><li><a href="#07%E3%80%81rome-%E7%9A%84%E6%9B%B4%E5%A4%9A%E5%91%BD%E4%BB%A4">07、Rome 的更多命令</a></li></ol></li><li><a href="#%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99">参考资料</a></li><li><a href="#%E6%80%BB%E7%BB%93-%26-%E8%AE%A2%E9%98%85">总结 &amp; 订阅</a></li></ol></nav>'
        } })
};
