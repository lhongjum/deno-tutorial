import Gitalk from '/_gitalk.js';
import projectConfig from '/pagic.config.js';
var _a, _b;
export default {
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'prev': {
        "link": "articles/basic/index.html",
        "text": "基础篇"
    },
    'next': {
        "link": "articles/architecture/index.html",
        "text": "架构篇"
    },
    'gitalk': React.createElement(Gitalk, { admin: [
            'hylerrix'
        ], clientID: "60180eea2c09238f8998", clientSecret: "e9ea0ff6555185eda28eff4dfd4b755b1764abf3", id: "articles/basic/install-and-hello-world.html", owner: "hylerrix", pagerDirection: "first", repo: "deno-tutorial", title: "Hello\uFF0C\u4ECE\u591A\u6837\u5316\u5B89\u88C5\u5230\u7B80\u5355\u5B9E\u6218" }),
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
    'pagePath': "articles/basic/install-and-hello-world.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/basic/install-and-hello-world.html",
    'title': "Hello，从多样化安装到简单实战",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Hello，从多样化安装到简单实战</h1>\n<blockquote>\n<p>《Deno 钻研之术》系列于 Deno v1 正式发售之日全新推出，每周不定期更新在 Github 中（<a href="https://github.com/hylerrix/deno-tutorial">https://github.com/hylerrix/deno-tutorial</a>）。让我们一起循序渐进学 Deno，先易后难补 Node，面向未来开发属于自己的 Deno Web App。欢迎订阅，欢迎交流。</p>\n</blockquote>\n<p><img src="http://qiniu.ningo.cloud/articles/1a8-01.jpg" alt=""></p>\n<h2 id="%E5%AD%A6%E4%B9%A0-deno-%E7%9A%84-n%2B-%E7%A7%8D%E7%90%86%E7%94%B1">学习 Deno 的 N+ 种理由<a class="anchor" href="#%E5%AD%A6%E4%B9%A0-deno-%E7%9A%84-n%2B-%E7%A7%8D%E7%90%86%E7%94%B1">§</a></h2>\n<p>时隔 Deno 开源两年整，万众期待的 Deno v1 正式版今日正式登场。或许你已经听过 Deno 的大名、或许你在项目中已经大量使用 Deno 作者的上一个明星项目 Node.js，亦或许今天才刚刚接触这一切...总之现在上车，背后是业界多年 Web App 开发经验的累加，面前是一片充满未知与惊喜的 Deno 蓝海。</p>\n<h3 id="%E7%AE%80%E5%8D%95%E5%9C%B0%E4%BB%8B%E7%BB%8D%E4%B8%80%E4%B8%8B-deno%EF%BC%9F">简单地介绍一下 Deno？<a class="anchor" href="#%E7%AE%80%E5%8D%95%E5%9C%B0%E4%BB%8B%E7%BB%8D%E4%B8%80%E4%B8%8B-deno%EF%BC%9F">§</a></h3>\n<p>Deno 是一个基于 Chrome V8 引擎开发的一个安全的 JavaScript 和 TypeScript 运行时，底层由 Rust 语言编写（最初选型为 Go），发起人是 Ryan Dahl。Ry 也是 Node.js 的发起人，当 Ry 将 Node 交付给社区一段时间后回看 Node 的现状，提出了很多无法忽视的缺陷，于是带来了全新的项目，Deno。</p>\n<p>正是 2011 年左右 Node.js 的出现，将 JavaScript 正式带入服务端应用开发领域；也通过彼时领先的模块化思想，促进了 Web 前端工程化的火速发展。同时验证并促进了 Atwood 定律的发展——任何可以用 JavaScript 来写的应用，最终都将用 JavaScript 来写。</p>\n<p>雨后春笋，纵使如今在 Node.js 上构建的各大基础设施（开源库、框架、脚手架等）支撑着从创业公司到各大主流互联网公司的数以万计的核心业务发展，但在 Node 本身不那么容易抛开的历史包袱下，新生的 Deno 依然拥有着很多前瞻性的理念，比如：</p>\n<ul>\n<li><strong>底层使用 Rust 语言开发</strong>：有很多 Rust 的优良特性支持；</li>\n<li><strong>原生支持编译 TypeScript 语言</strong>：无需额外进行繁琐的手动配置；</li>\n<li><strong>核心标准库维护在 Deno 自身中</strong>：无需纠结在各大第三方库中如何选型的同时无需担心这些库的无保障维护问题；</li>\n<li><strong>独特的安全沙箱支持</strong>：默认情况下脚本不具有读写权限，需要授权；</li>\n<li><strong>尽可能地支持 Web 标准</strong>：无需更多的手动配置，绝大部分功能开箱即用；</li>\n<li><strong>支持 ES 模块标准</strong>：无需再承担 Node.js 的 CommonJS “历史包袱”；</li>\n<li><strong>重新设计的包管理器</strong>：抛弃繁重的 Node Modules，甚至可以很方便地从 URL 中导入模块；</li>\n<li><strong>重新思考 package.json</strong>：让逐渐庞大的 package.json 能得到合理的“释放”；</li>\n<li><strong>原生支持 JSDoc</strong>：并将其用于内置的文档系统；</li>\n<li><strong>更好的工具链支持</strong>：开发者真的不想再忙于各种配置过程之中了；</li>\n<li><strong>内置监视文件功能</strong>：让热更新更加方便简单。</li>\n</ul>\n<p>这就是 Deno，一个令人激动的项目。更多具体的知识点，会在本系列后期逐步展开。</p>\n<p>下方 Deno 知识体系示意图的截图来自基于机器学习的信息抽取和检索系统 <a href="https://magi.com/search?q=deno">Magi.com</a>，“它能将任何领域的自然语言文本中的知识提取成结构化的数据，通过终身学习持续聚合和纠错，进而为人类用户和其他人工智能提供可解析、可检索、可溯源的知识体系”。图中内容仅供参考。</p>\n<p><img src="http://qiniu.ningo.cloud/articles/1a8-02.jpg" alt=""></p>\n<h3 id="%E4%BC%98%E7%A7%80%E7%9A%84%E7%94%9F%E6%80%81%EF%BC%8Cstar-%E9%87%8F%E7%A0%B4-50k%2B">优秀的生态，Star 量破 50k+<a class="anchor" href="#%E4%BC%98%E7%A7%80%E7%9A%84%E7%94%9F%E6%80%81%EF%BC%8Cstar-%E9%87%8F%E7%A0%B4-50k%2B">§</a></h3>\n<p>在 <a href="https://star-history.t9t.io/">Star History 网站</a>上，我们可以看到这两年来社区对 Deno 的关注度稳增不减。从发布一个月多便接近 20k+，到现在已经达到了 50k+ 的 Star 数量，这意味着 Deno 已经跻身 Github 项目全球排行榜至少前 70 位。</p>\n<p>截止目前，诞生两年的 Deno 贡献者数量达到 270+ 位，有 3k+ 的 commit、416/1920 的 issues 解决比例和 42/3273 的 PR 解决比例（2020-05-12）。与此同时，诞生近十年的 Node 有 2690+ 位贡献者，30k+ 的 commit、977/11585 的 issues 解决比例和 316/21192 的 PR 解决比例。</p>\n<p>下图即为 Deno 目前的 Star History 趋势图。</p>\n<p><img src="http://qiniu.ningo.cloud/articles/1a8-03.jpg" alt=""></p>\n<h3 id="%E6%8A%BC%E5%AE%9D-deno%EF%BC%9F">押宝 Deno？<a class="anchor" href="#%E6%8A%BC%E5%AE%9D-deno%EF%BC%9F">§</a></h3>\n<p>关于为什么学习 Deno，每个人都会有自己的理由。社区中有一种有趣的声音：学习 Deno 是一种“押宝”，希望通过学习 Deno 能彻底放弃 Node 并在未来通过 Deno 获得更好的编程机会。</p>\n<p>实则 Deno 还是处于早期阶段，且 Node.js 的成功是有时代背景选择而不可复制。因此将所有学习重心都押宝在 Deno 上尚且过早。</p>\n<p>那么如何对待 Deno？Deno 是在开源社区的“礼物文化”环境下诞生的，我们一起将 Deno 看成是加入大家庭的新生命，一起从整个 Web 领域的进程中取长补短共同建设 Deno，才是现阶段对待这份“礼物”最好的状态。</p>\n<p>要知道，从 Node 到 Deno，其中有太多的中国开发者的积极贡献融入其中。</p>\n<h3 id="%E5%8F%AA%E6%98%AF%E4%B8%BA%E4%BA%86%E5%A5%BD%E7%8E%A9">只是为了好玩<a class="anchor" href="#%E5%8F%AA%E6%98%AF%E4%B8%BA%E4%BA%86%E5%A5%BD%E7%8E%A9">§</a></h3>\n<p>以 Ecma 成员名义发起，阿里巴巴、腾讯等公司领衔的最新《<a href="https://mp.weixin.qq.com/s/KmgkLgqq7QzZX7Krq1LfoQ">Node.js 开发者 2020 年度报告</a>》中指出，越年轻的同学越关注 Deno。因此，这里着重引用一位年轻的谷歌华人实习生，Deno 核心贡献者之一的 @kevinkassimo 的一句话来看，为什么学习 Deno？</p>\n<blockquote>\n<p>平心而论，我最初参与的主要目的其实最早是想着“我一直在用 Node 但不了解它真实背后的工作原理”，所以最早看到 Deno 的时候在想“了解 Node 原理的比较好的一个方法是干脆自己去做一个新的 Node”。\n——@kevinkassimo</p>\n</blockquote>\n<p><img src="http://qiniu.ningo.cloud/articles/1a8-04.jpg" alt=""></p>\n<p>这也正是我对于 Deno 的重要心态。大学初入校园期间正值 Node.js 最火的时刻，自己因为对 Node.js 的喜欢选择了大前端领域，接下来的几年也参加、举办过很多前端相关活动，但对于 Node.js 的了解因为自己的身份局限一直没有得到更好的突破。</p>\n<p>毕业这一年来看，Node.js 已经发展出一个十分庞大的生态，我们畅游其中能找到大量解决自身编程需求的 NPM 库——这也更显示出自己对于 Node.js 的熟悉差距越来越大。现在 Deno 崭新一片，为了更好的了解 Deno，包括了解 Node.js，更包括跟上整个 Web 的发展进程，我也开始了我的 Deno 之旅。</p>\n<p>同时，另一个更大的心态就像 Linux 之父 Linus Torvalds 的自传名一样，“只是为了好玩”。在自身于职场负责的各种各样前端业务外，出于好玩的心态，出于尝鲜的心态，出于一种“Uncharted（神秘海域）”的心态，开启了这一切。</p>\n<p>那么：你，为什么学 Deno？</p>\n<h2 id="deno-%E5%9C%A8-macos-%E4%B8%8A%E7%9A%84%E5%A4%9A%E7%A7%8D%E5%AE%89%E8%A3%85%E6%96%B9%E5%BC%8F">Deno 在 MacOS 上的多种安装方式<a class="anchor" href="#deno-%E5%9C%A8-macos-%E4%B8%8A%E7%9A%84%E5%A4%9A%E7%A7%8D%E5%AE%89%E8%A3%85%E6%96%B9%E5%BC%8F">§</a></h2>\n<p>在开发者群体中，除了最常见的 Windows 操作系统外，Linux 和 MacOS 环境也占重大的比重。Deno 的安装方式在各个平台都有相关的解决方案，本节包括以后所有章节均将默认在 MacOS 上学习 Deno，未来可能会涉及在 Linux 云服务器上部署 Deno Web App。</p>\n<p>因此如果你的操作系统是 MacOS，那很方便通过本文进行实战学习。如果你的本地环境是 Linux 或者 Windows，除了一些包管理器的不同、安装目录的不同、环境变量的配置方式不太相同外，并不会阻止你深入学习 Deno 的脚步。可以根据自身操作系统来在 Deno 官方、Deno 社区或者《Deno 钻研之术》系列仓库的 issues 区进行搜寻、讨论 Deno 的其它多种安装方式。</p>\n<p>从命令行安装一个软件包需要注意什么？当然是该软件包是否安装成功、安装的过程有哪些日志、是否能运行成功、是否简单配置来升级和卸载......基于这个角度，以下的安装方式会选取 deno -V 来验证是否安装成功（产生了个 idea：“命令行安装软件检查清单”，有趣）。</p>\n<p>本节内容专注安装过程，更加深入的安装原理篇未来会有所涉及，正式开始吧！</p>\n<h3 id="%E5%AE%89%E8%A3%85%E6%96%B9%E5%BC%8F-1%EF%BC%9A%E4%BD%BF%E7%94%A8-curl-%E7%9B%B4%E6%8E%A5%E5%AE%89%E8%A3%85">安装方式 1：使用 curl 直接安装<a class="anchor" href="#%E5%AE%89%E8%A3%85%E6%96%B9%E5%BC%8F-1%EF%BC%9A%E4%BD%BF%E7%94%A8-curl-%E7%9B%B4%E6%8E%A5%E5%AE%89%E8%A3%85">§</a></h3>\n<p><img src="http://qiniu.ningo.cloud/articles/1a8-05.jpg" alt=""></p>\n<p>curl 在命令行或脚本中用于传输数据。这里，第一种安装方式便是通过 curl 下载远程的安装脚本 <a href="http://install.sh">install.sh</a> 中的 deno.zip 压缩包到本地并立即执行，如下。</p>\n<pre class="language-bash"><code class="language-bash">$ <span class="token function">curl</span> -fsSL <a class="token url-link" href="https://deno.land/x/install/install.sh">https://deno.land/x/install/install.sh</a> <span class="token operator">|</span> <span class="token function">sh</span>\n<span class="token comment"># ######################################################################## 100.0%-#O#- #   #                                                                 ######################################################################## 100.0%</span>\n<span class="token comment"># Archive:  /Users/${USER_NAME}/.deno/bin/deno.zip</span>\n<span class="token comment">#   inflating: deno</span>\n<span class="token comment"># Deno was installed successfully to /Users/${USER_NAME}/.deno/bin/deno</span>\n<span class="token comment"># Manually add the directory to your $HOME/.bash_profile (or similar)</span>\n<span class="token comment">#   export DENO_INSTALL="/Users/${USER_NAME}/.deno"</span>\n<span class="token comment">#   export PATH="$DENO_INSTALL/bin:$PATH"</span>\n<span class="token comment"># Run \'/Users/${USER_NAME}/.deno/bin/deno --help\' to get started</span>\n$ deno -V\n<span class="token comment"># zsh: command not found: deno</span>\n</code></pre>\n<p>此时安装便成功了一半。从安装成功后的终端日志可以看出，Deno 成功安装在了用户的 ~/.deno 下，并且进入这个目录可以看出里面只剩下二进制软件 ~/.deno/bin/deno，解压前的 deno.zip 已被删除。接下来输入 deno -V 并不能运行成功 deno 命令，需要我们手动配置环境变量来让终端知道 deno 命令该在哪执行。</p>\n<p>注意：${USER_NAME} 是你在自己操作系统下的用户名，需要手动改为自己的用户名。</p>\n<p>根据日志提示，执行如下命令后，输入 deno -V 便能看出 deno 命令已成功配置。</p>\n<pre class="language-bash"><code class="language-bash">$ <span class="token builtin class-name">export</span> <span class="token assign-left variable">DENO_INSTALL</span><span class="token operator">=</span><span class="token string">"/Users/<span class="token variable">${USER_NAME}</span>/.deno"</span>\n$ <span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token string">"<span class="token variable">$DENO_INSTALL</span>/bin:<span class="token environment constant">$PATH</span>"</span>\n$ deno -V\n<span class="token comment"># deno 1.0.0-rc2</span>\n$ <span class="token function">which</span> deno\n<span class="token comment"># /Users/${USER_NAME}/.deno/bin/deno</span>\n$ <span class="token builtin class-name">echo</span> <span class="token environment constant">$PATH</span>\n<span class="token comment"># /Users/${USER_NAME}/.deno/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/...</span>\n</code></pre>\n<p>这里安装到的 Deno 版本是 1.0.0-rc2，截止 2020-05-13 早上最新的版本是 1.0.0-rc3，让 Deno 自更新版本的命令如下。</p>\n<pre class="language-bash"><code class="language-bash">$ deno upgrade\n<span class="token comment"># Checking for latest version</span>\n<span class="token comment"># Version has been found</span>\n<span class="token comment"># Deno is upgrading to version 1.0.0-rc3</span>\n<span class="token comment"># downloading <a class="token url-link" href="https://github.com/denoland/deno/releases/download/v1.0.0-rc3/deno-x86_64-apple-darwin.zip">https://github.com/denoland/deno/releases/download/v1.0.0-rc3/deno-x86_64-apple-darwin.zip</a></span>\n<span class="token comment"># downloading <a class="token url-link" href="https://github-production-release-asset-2e65be.s3.amazonaws.com/133442384/...">https://github-production-release-asset-2e65be.s3.amazonaws.com/133442384/...</a></span>\n</code></pre>\n<h3 id="%E5%AE%89%E8%A3%85%E6%96%B9%E5%BC%8F-2%EF%BC%9A%E4%BB%8E-homebrew-%E4%B8%AD%E5%AE%89%E8%A3%85">安装方式 2：从 Homebrew 中安装<a class="anchor" href="#%E5%AE%89%E8%A3%85%E6%96%B9%E5%BC%8F-2%EF%BC%9A%E4%BB%8E-homebrew-%E4%B8%AD%E5%AE%89%E8%A3%85">§</a></h3>\n<p><img src="http://qiniu.ningo.cloud/articles/1a8-06.jpg" alt=""></p>\n<p>如果你刚才通过 curl 已经将 Deno 安装成功了，现在想尝试 Homebrew 的安装，可以根据已知的 deno 目录和环境变量值，手动卸载 deno，确保相关目录（~/.deno）和相关环境变量（export -p | grep deno 来验收）都清空。</p>\n<pre class="language-bash"><code class="language-bash"><span class="token comment"># 安装 Homebrew</span>\n$ /bin/bash -c <span class="token string">"<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh<span class="token variable">)</span></span>"</span>\n</code></pre>\n<p>现在我们来使用 MacOS 上最知名的包管理器之一 Homebrew 来安装 Deno。由于 Homebrew 默认每次执行都会自动检查更新，显示超慢的 Updating Homebrew...，而且还不显示具体进度，需要先临时关闭 Homebrew 自动更新后正式安装 Deno。</p>\n<pre class="language-bash"><code class="language-bash">$ <span class="token builtin class-name">export</span> <span class="token assign-left variable">HOMEBREW_NO_AUTO_UPDATE</span><span class="token operator">=</span>true\n$ brew <span class="token function">install</span> deno\n<span class="token comment"># ==> Downloading <a class="token url-link" href="https://homebrew.bintray.com/bottles/deno-0.42.0.catalina.bottle.tar.gz">https://homebrew.bintray.com/bottles/deno-0.42.0.catalina.bottle.tar.gz</a></span>\n<span class="token comment"># ==> Downloading from <a class="token url-link" href="https://akamai.bintray.com/b4/b4f91dd079eee18b85b157bb03b1535935a37d9fb6f078e271a7b48b2afd34ea?__gda__=exp=15">https://akamai.bintray.com/b4/b4f91dd079eee18b85b157bb03b1535935a37d9fb6f078e271a7b48b2afd34ea?__gda__=exp=15</a></span>\n<span class="token comment"># ######################################################################## 100.0%</span>\n<span class="token comment"># ==> Pouring deno-0.42.0.catalina.bottle.tar.gz</span>\n<span class="token comment"># ==> Caveats</span>\n<span class="token comment"># Bash completion has been installed to:</span>\n<span class="token comment">#   /usr/local/etc/bash_completion.d</span>\n\n<span class="token comment"># zsh completions have been installed to:</span>\n<span class="token comment">#   /usr/local/share/zsh/site-functions</span>\n<span class="token comment"># ==> Summary</span>\n<span class="token comment"># 🍺  /usr/local/Cellar/deno/0.42.0: 9 files, 41.4MB</span>\n<span class="token comment"># ==> `brew cleanup` has not been run in 30 days, running now...</span>\n<span class="token comment"># Error: Permission denied @ apply2files - /usr/local/lib/node_modules/expo-cli/node_modules/.bin/detect-libc</span>\n</code></pre>\n<p>从如上终端日志和 <a href="https://formulae.brew.sh/formula/deno#default">https://formulae.brew.sh/formula/deno</a> 中可以看出，Homebrew 上的 Deno 最新版不支持 deno-v1.0.0-rcx 版，只支持 0.42.0。且 Homebrew 会将 Deno 软件放置在 /usr/local/Cellar/deno 下，并在 /usr/local/bin 中自动更新了环境变量。</p>\n<pre class="language-bash"><code class="language-bash">$ deno -V\n<span class="token comment"># deno 0.42.0</span>\n$ <span class="token function">which</span> deno\n<span class="token comment"># /usr/local/bin/deno</span>\n$ ll /usr/local/bin/deno\n<span class="token comment"># lrwxr-xr-x  1 ${USER_NAME}  admin    30B May 13 10:53</span>\n<span class="token comment"># /usr/local/bin/deno -> ../Cellar/deno/0.42.0/bin/deno</span>\n</code></pre>\n<h3 id="%E5%AE%89%E8%A3%85%E6%96%B9%E5%BC%8F-3%EF%BC%9A%E4%BB%8E-asdf-%E4%B8%AD%E5%AE%89%E8%A3%85">安装方式 3：从 ASDF 中安装<a class="anchor" href="#%E5%AE%89%E8%A3%85%E6%96%B9%E5%BC%8F-3%EF%BC%9A%E4%BB%8E-asdf-%E4%B8%AD%E5%AE%89%E8%A3%85">§</a></h3>\n<p><img src="http://qiniu.ningo.cloud/articles/1a8-07.jpg" alt=""></p>\n<p>ASDF 的体验还不错，ASDF 是可扩展的版本管理器，支持 Ruby、Node.js、Elixir 和 Erlang 等，我们可以通过 ASDF 来安装 Deno，包括进行快速的管理 Deno 的多版本。首先安装 ASDF，可以使用通过 Git 安装并手动配置环境变量，也可以通过 Homebrew 来安装。</p>\n<pre class="language-bash"><code class="language-bash">$ brew <span class="token function">install</span> asdf\n<span class="token comment"># ==> Downloading <a class="token url-link" href="https://github.com/asdf-vm/asdf/archive/v0.7.8.tar.gz">https://github.com/asdf-vm/asdf/archive/v0.7.8.tar.gz</a></span>\n<span class="token comment"># Already downloaded: /Users/${USER_NAME}/Library/Caches/Homebrew/downloads/34d73b51ece171e6c4ffe51147d4599c5b7f78749b379dec98ab7dd9174bd595--asdf-0.7.8.tar.gz</span>\n<span class="token comment"># ==> Caveats</span>\n<span class="token comment"># Bash completion has been installed to:</span>\n<span class="token comment">#   /usr/local/etc/bash_completion.d</span>\n<span class="token comment"># </span>\n<span class="token comment"># zsh completions have been installed to:</span>\n<span class="token comment">#   /usr/local/share/zsh/site-functions</span>\n<span class="token comment"># ==> Summary</span>\n<span class="token comment"># 🍺  /usr/local/Cellar/asdf/0.7.8: 104 files, 219.6KB, built in 18 seconds</span>\n</code></pre>\n<p>以上需要安装 Deno 前先配置 Deno 的 ASDF 地址。ASDF 可以很方便的进行 Deno 多版本控制。</p>\n<pre class="language-bash"><code class="language-bash">$ asdf plugin-add deno <a class="token url-link" href="https://github.com/asdf-community/asdf-deno.git">https://github.com/asdf-community/asdf-deno.git</a>\n$ asdf plugin list --urls\n<span class="token comment"># deno  <a class="token url-link" href="https://github.com/asdf-community/asdf-deno.git">https://github.com/asdf-community/asdf-deno.git</a></span>\n$ asdf <span class="token function">install</span> deno <span class="token number">1.0</span>.0-rc3\n<span class="token comment"># /Users/${USER_NAME}/.asdf/plugins/deno/bin/install: line 27: [: 100-rc3: integer expression expected</span>\n<span class="token comment"># ∗ Downloading and installing deno...</span>\n<span class="token comment"># Archive:  /Users/${USER_NAME}/.asdf/installs/deno/1.0.0-rc3/bin/deno.zip</span>\n<span class="token comment">#   inflating: /Users/${USER_NAME}/.asdf/installs/deno/1.0.0-rc3/bin/deno</span>\n<span class="token comment"># The installation was successful!</span>\n$ <span class="token function">which</span> deno\ndeno not found\n</code></pre>\n<p>可见，通过 ASDF 已经成功安装 Deno，但需要创建软链接，即绑定环境变量。</p>\n<pre class="language-bash"><code class="language-bash"><span class="token comment"># 创建软链接</span>\n$ <span class="token function">ln</span> -s /Users/<span class="token variable">${USER_NAME}</span>/.asdf/installs/deno/1.0.0-rc3/bin/deno /usr/local/bin\n$ deno -V\n<span class="token comment"># deno 1.0.0-rc3</span>\n$ <span class="token function">which</span> deno\n<span class="token comment"># /usr/local/bin/deno</span>\n$ ll /usr/local/bin/deno\n<span class="token comment"># lrwxr-xr-x  1 ${USER_NAME}  admin    50B May 11 18:37</span>\n<span class="token comment"># /usr/local/bin/deno -> /Users/${USER_NAME}/.asdf/installs/deno/1.0.0-rc3/bin/deno</span>\n<span class="token comment"># 全局配置 Deno 版本</span>\n$ asdf global deno <span class="token number">1.0</span>.0-rc3\n<span class="token comment"># 在当前目录下设置 Deno 版本</span>\n$ asdf <span class="token builtin class-name">local</span> deno <span class="token number">1.0</span>.0-rc3\n<span class="token comment"># 查看所有可以安装的 Deno 版本</span>\n$ asdf list all deno\n<span class="token comment"># 查看当前 Deno 版本</span>\n$ asdf current deno <span class="token comment"># 1.0.0-rc3 (set by /Users/${USER_NAME}/.tool-versions)</span>\n</code></pre>\n<h3 id="%E5%AE%89%E8%A3%85%E6%96%B9%E5%BC%8F-4%EF%BC%9A%E4%BB%8E%E6%BA%90%E7%A0%81%E4%B8%AD%E5%AE%89%E8%A3%85">安装方式 4：从源码中安装<a class="anchor" href="#%E5%AE%89%E8%A3%85%E6%96%B9%E5%BC%8F-4%EF%BC%9A%E4%BB%8E%E6%BA%90%E7%A0%81%E4%B8%AD%E5%AE%89%E8%A3%85">§</a></h3>\n<p>由于篇幅所限，从源码中安装可以引申出很多知识，本文先不涉及，未来会有所更新。</p>\n<h3 id="%E8%AF%A5%E9%80%89%E6%8B%A9%E6%80%8E%E6%A0%B7%E7%9A%84%E5%AE%89%E8%A3%85%E6%96%B9%E5%BC%8F%EF%BC%9F">该选择怎样的安装方式？<a class="anchor" href="#%E8%AF%A5%E9%80%89%E6%8B%A9%E6%80%8E%E6%A0%B7%E7%9A%84%E5%AE%89%E8%A3%85%E6%96%B9%E5%BC%8F%EF%BC%9F">§</a></h3>\n<p><img src="http://qiniu.ningo.cloud/articles/1a8-08.jpg" alt=""></p>\n<p>基于自身所要使用的操作系统和想要学习 Deno 的方式，从“命令行快速安装”、“包管理器单版本安装”、“包管理器多版本安装并控制”、“源码上安装”等角度决定不同安装方式即可。</p>\n<h2 id="deno-%E7%9A%84%E7%AE%80%E5%8D%95%E5%AE%9E%E6%88%98">Deno 的简单实战<a class="anchor" href="#deno-%E7%9A%84%E7%AE%80%E5%8D%95%E5%AE%9E%E6%88%98">§</a></h2>\n<h3 id="%E5%87%86%E5%A4%87%E4%B8%80%E4%B8%AA-hello-world-%E7%A8%8B%E5%BA%8F">准备一个 Hello World 程序<a class="anchor" href="#%E5%87%86%E5%A4%87%E4%B8%80%E4%B8%AA-hello-world-%E7%A8%8B%E5%BA%8F">§</a></h3>\n<p>Brian Kernighan 于 1978 年写了一本名叫《C 程序设计语言》的编程书，该书中第一次引用了 Hello World 程序，这个传统便被传承至今。在此，关于 Deno 的第一个程序也可以从 Hello World 开始。</p>\n<p><img src="http://qiniu.ningo.cloud/articles/1a8-09.jpg" alt=""></p>\n<p>因为 Deno 内置 TypeScript 运行时，这里的示例便是官网提供的 welcome.ts，具体如下。</p>\n<pre class="language-typescript"><code class="language-typescript"><span class="token comment">// welcome.ts</span>\n<span class="token comment">// 从 URL 上导入 server.ts 模块，并提取（ES6 解构赋值）出 serve 对象</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> serve <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"<a class="token url-link" href="https://deno.land/std/http/server.ts">https://deno.land/std/http/server.ts</a>"</span><span class="token punctuation">;</span>\n<span class="token comment">// 实例化一个 serve 对象</span>\n<span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token function">serve</span><span class="token punctuation">(</span><span class="token punctuation">{</span> port<span class="token operator">:</span> <span class="token number">8000</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 在终端上打印程序监听的端口地址</span>\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"<a class="token url-link" href="http://localhost:8000/">http://localhost:8000/</a>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 使用 ES9 新特性 for await 语法，当访问监听端口时，返回一句“Hello World”</span>\n<span class="token keyword">for</span> <span class="token keyword">await</span> <span class="token punctuation">(</span><span class="token keyword">const</span> req <span class="token keyword">of</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  req<span class="token punctuation">.</span><span class="token function">respond</span><span class="token punctuation">(</span><span class="token punctuation">{</span> body<span class="token operator">:</span> <span class="token string">"Hello World\n"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>如果如上的 welcome.ts 能成功在 Deno 中直接运行成功，说明了什么？短短的几行代码，便能看出 Deno 自身提供官方标准库（解决了寻找对比学习第三方库的成本），Deno 的模块可以从 URL 上直接导入（独特的导入方式），Deno 支持最新的 ES 标准（不用忙于配置各种 ES6+ 语法的转移器），Deno 内置 TypeScript 运行时（无需手动安装配置 TypeScript 转移器）。</p>\n<h3 id="hello-world">Hello World<a class="anchor" href="#hello-world">§</a></h3>\n<p>现在来执行 welcome.ts，由于代码中引入了远程的 server.ts，server.ts 又引入了其它文件，deno 现在会统一下载到全局目录上并执行文件。</p>\n<pre class="language-bash"><code class="language-bash">$ deno-tutorial git:<span class="token punctuation">(</span>master<span class="token punctuation">)</span> deno run --allow-net demos/welcome.ts\n<span class="token comment"># Compile <a class="token url-link" href="file:///Users/">file:///Users/</a>${USER_NAME}/WorkSpace/Hylerrix/deno-tutorial/demos/welcome.ts</span>\n<span class="token comment"># Download <a class="token url-link" href="https://deno.land/std@0.50.0/http/server.ts">https://deno.land/std@0.50.0/http/server.ts</a></span>\n<span class="token comment"># Download <a class="token url-link" href="https://deno.land/std@0.50.0/encoding/utf8.ts">https://deno.land/std@0.50.0/encoding/utf8.ts</a></span>\n<span class="token comment"># Download <a class="token url-link" href="https://deno.land/std@0.50.0/io/bufio.ts">https://deno.land/std@0.50.0/io/bufio.ts</a></span>\n<span class="token comment"># Download <a class="token url-link" href="https://deno.land/std@0.50.0/testing/asserts.ts">https://deno.land/std@0.50.0/testing/asserts.ts</a></span>\n<span class="token comment"># Download <a class="token url-link" href="https://deno.land/std@0.50.0/async/mod.ts">https://deno.land/std@0.50.0/async/mod.ts</a></span>\n<span class="token comment"># Download <a class="token url-link" href="https://deno.land/std@0.50.0/http/_io.ts">https://deno.land/std@0.50.0/http/_io.ts</a></span>\n<span class="token comment"># Download <a class="token url-link" href="https://deno.land/std@0.50.0/io/util.ts">https://deno.land/std@0.50.0/io/util.ts</a></span>\n<span class="token comment"># Download <a class="token url-link" href="https://deno.land/std@0.50.0/path/mod.ts">https://deno.land/std@0.50.0/path/mod.ts</a></span>\n<span class="token comment"># Download <a class="token url-link" href="https://deno.land/std@0.50.0/path/win32.ts">https://deno.land/std@0.50.0/path/win32.ts</a></span>\n<span class="token comment"># Download <a class="token url-link" href="https://deno.land/std@0.50.0/path/posix.ts">https://deno.land/std@0.50.0/path/posix.ts</a></span>\n<span class="token comment"># Download <a class="token url-link" href="https://deno.land/std@0.50.0/path/common.ts">https://deno.land/std@0.50.0/path/common.ts</a></span>\n<span class="token comment"># Download <a class="token url-link" href="https://deno.land/std@0.50.0/path/separator.ts">https://deno.land/std@0.50.0/path/separator.ts</a></span>\n<span class="token comment"># Download <a class="token url-link" href="https://deno.land/std@0.50.0/path/interface.ts">https://deno.land/std@0.50.0/path/interface.ts</a></span>\n<span class="token comment"># Download <a class="token url-link" href="https://deno.land/std@0.50.0/path/glob.ts">https://deno.land/std@0.50.0/path/glob.ts</a></span>\n<span class="token comment"># Download <a class="token url-link" href="https://deno.land/std@0.50.0/path/_constants.ts">https://deno.land/std@0.50.0/path/_constants.ts</a></span>\n<span class="token comment"># Download <a class="token url-link" href="https://deno.land/std@0.50.0/path/_util.ts">https://deno.land/std@0.50.0/path/_util.ts</a></span>\n<span class="token comment"># Download <a class="token url-link" href="https://deno.land/std@0.50.0/fmt/colors.ts">https://deno.land/std@0.50.0/fmt/colors.ts</a></span>\n<span class="token comment"># Download <a class="token url-link" href="https://deno.land/std@0.50.0/testing/diff.ts">https://deno.land/std@0.50.0/testing/diff.ts</a></span>\n<span class="token comment"># Download <a class="token url-link" href="https://deno.land/std@0.50.0/path/_globrex.ts">https://deno.land/std@0.50.0/path/_globrex.ts</a></span>\n<span class="token comment"># Download <a class="token url-link" href="https://deno.land/std@0.50.0/async/deferred.ts">https://deno.land/std@0.50.0/async/deferred.ts</a></span>\n<span class="token comment"># Download <a class="token url-link" href="https://deno.land/std@0.50.0/async/delay.ts">https://deno.land/std@0.50.0/async/delay.ts</a></span>\n<span class="token comment"># Download <a class="token url-link" href="https://deno.land/std@0.50.0/async/mux_async_iterator.ts">https://deno.land/std@0.50.0/async/mux_async_iterator.ts</a></span>\n<span class="token comment"># Download <a class="token url-link" href="https://deno.land/std@0.50.0/textproto/mod.ts">https://deno.land/std@0.50.0/textproto/mod.ts</a></span>\n<span class="token comment"># Download <a class="token url-link" href="https://deno.land/std@0.50.0/http/http_status.ts">https://deno.land/std@0.50.0/http/http_status.ts</a></span>\n<span class="token comment"># Download <a class="token url-link" href="https://deno.land/std@0.50.0/bytes/mod.ts">https://deno.land/std@0.50.0/bytes/mod.ts</a></span>\n</code></pre>\n<p>此时打开 localhost:8000 提示成功。</p>\n<p><img src="http://qiniu.ningo.cloud/articles/1a8-10.jpg" alt=""></p>\n<h3 id="deno-%E7%9A%84%E6%9B%B4%E5%A4%9A%E5%AE%9E%E6%88%98">Deno 的更多实战<a class="anchor" href="#deno-%E7%9A%84%E6%9B%B4%E5%A4%9A%E5%AE%9E%E6%88%98">§</a></h3>\n<p>未来持续更新在<a href="https://github.com/hylerrix/deno-tutorial/">《Deno 钻研之术》开源电子书仓库</a>中。</p>\n<h2 id="%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99">参考资料<a class="anchor" href="#%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99">§</a></h2>\n<ul>\n<li><a href="https://www.ruanyifeng.com/blog/2020/01/deno-intro.html">Deno 运行时入门教程：Node.js 的替代品</a></li>\n<li><a href="https://star-history.t9t.io/">https://star-history.t9t.io/</a></li>\n<li><a href="http://magi.com">magi.com</a></li>\n<li><a href="http://product.dangdang.com/27880000.html">《狼书：更了不起的 Node.js》</a></li>\n<li><a href="https://blog.logrocket.com/deno-1-0-what-you-need-to-know/">deno-1-0-what-you-need-to-know</a></li>\n<li><a href="https://gitstar-ranking.com/">https://gitstar-ranking.com/</a></li>\n<li><a href="https://mp.weixin.qq.com/s/KmgkLgqq7QzZX7Krq1LfoQ">Node.js 开发者 2020 年度报告</a></li>\n<li><a href="http://blog.fujiji.com/the-history-of-hello-world/">Hello World 程序的起源与历史</a></li>\n<li><a href="https://curl.haxx.se/">https://curl.haxx.se/</a></li>\n</ul>\n<h2 id="%E8%AE%A2%E9%98%85-%26-%E5%BE%85%E7%BB%AD">订阅 &amp; 待续<a class="anchor" href="#%E8%AE%A2%E9%98%85-%26-%E5%BE%85%E7%BB%AD">§</a></h2>\n<p>本文属于<a href="https://github.com/hylerrix/deno-tutorial/">《Deno 钻研系列》</a>的基础篇，未来计划逐步展开添加的章节并填充更多的文章，如：</p>\n<ul>\n<li>基础篇：循序渐进学 Deno 基础知识；</li>\n<li>Node 篇：先易后难补 Node 知识，探索与 Deno 的异与同；</li>\n<li>Rust 篇：探索 Deno 底层有关 Rust 的更多知识；</li>\n<li>前端篇：探索 Deno Web 前端应用开发的方式；</li>\n<li>后端篇：探索 Deno Web 后端应用开发的方式；</li>\n<li>架构篇：深入到 Deno 底层读 V8，学架构。</li>\n</ul>\n<p>欢迎订阅，一起成长，敬请 Star, Watch &amp; Issue 开源仓库<a href="https://github.com/hylerrix/deno-tutorial/">《Deno 钻研之术》</a>！三连一下。</p>\n<ul>\n<li><a href="https://github.com/hylerrix/deno-tutorial/">https://github.com/hylerrix/deno-tutorial/</a></li>\n<li><a href="https://github.com/hylerrix/deno-tutorial/">https://github.com/hylerrix/deno-tutorial/</a></li>\n<li><a href="https://github.com/hylerrix/deno-tutorial/">https://github.com/hylerrix/deno-tutorial/</a></li>\n</ul>'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E5%AD%A6%E4%B9%A0-deno-%E7%9A%84-n%2B-%E7%A7%8D%E7%90%86%E7%94%B1">学习 Deno 的 N+ 种理由</a><ol><li><a href="#%E7%AE%80%E5%8D%95%E5%9C%B0%E4%BB%8B%E7%BB%8D%E4%B8%80%E4%B8%8B-deno%EF%BC%9F">简单地介绍一下 Deno？</a></li><li><a href="#%E4%BC%98%E7%A7%80%E7%9A%84%E7%94%9F%E6%80%81%EF%BC%8Cstar-%E9%87%8F%E7%A0%B4-50k%2B">优秀的生态，Star 量破 50k+</a></li><li><a href="#%E6%8A%BC%E5%AE%9D-deno%EF%BC%9F">押宝 Deno？</a></li><li><a href="#%E5%8F%AA%E6%98%AF%E4%B8%BA%E4%BA%86%E5%A5%BD%E7%8E%A9">只是为了好玩</a></li></ol></li><li><a href="#deno-%E5%9C%A8-macos-%E4%B8%8A%E7%9A%84%E5%A4%9A%E7%A7%8D%E5%AE%89%E8%A3%85%E6%96%B9%E5%BC%8F">Deno 在 MacOS 上的多种安装方式</a><ol><li><a href="#%E5%AE%89%E8%A3%85%E6%96%B9%E5%BC%8F-1%EF%BC%9A%E4%BD%BF%E7%94%A8-curl-%E7%9B%B4%E6%8E%A5%E5%AE%89%E8%A3%85">安装方式 1：使用 curl 直接安装</a></li><li><a href="#%E5%AE%89%E8%A3%85%E6%96%B9%E5%BC%8F-2%EF%BC%9A%E4%BB%8E-homebrew-%E4%B8%AD%E5%AE%89%E8%A3%85">安装方式 2：从 Homebrew 中安装</a></li><li><a href="#%E5%AE%89%E8%A3%85%E6%96%B9%E5%BC%8F-3%EF%BC%9A%E4%BB%8E-asdf-%E4%B8%AD%E5%AE%89%E8%A3%85">安装方式 3：从 ASDF 中安装</a></li><li><a href="#%E5%AE%89%E8%A3%85%E6%96%B9%E5%BC%8F-4%EF%BC%9A%E4%BB%8E%E6%BA%90%E7%A0%81%E4%B8%AD%E5%AE%89%E8%A3%85">安装方式 4：从源码中安装</a></li><li><a href="#%E8%AF%A5%E9%80%89%E6%8B%A9%E6%80%8E%E6%A0%B7%E7%9A%84%E5%AE%89%E8%A3%85%E6%96%B9%E5%BC%8F%EF%BC%9F">该选择怎样的安装方式？</a></li></ol></li><li><a href="#deno-%E7%9A%84%E7%AE%80%E5%8D%95%E5%AE%9E%E6%88%98">Deno 的简单实战</a><ol><li><a href="#%E5%87%86%E5%A4%87%E4%B8%80%E4%B8%AA-hello-world-%E7%A8%8B%E5%BA%8F">准备一个 Hello World 程序</a></li><li><a href="#hello-world">Hello World</a></li><li><a href="#deno-%E7%9A%84%E6%9B%B4%E5%A4%9A%E5%AE%9E%E6%88%98">Deno 的更多实战</a></li></ol></li><li><a href="#%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99">参考资料</a></li><li><a href="#%E8%AE%A2%E9%98%85-%26-%E5%BE%85%E7%BB%AD">订阅 &amp; 待续</a></li></ol></nav>'
        } })
};
