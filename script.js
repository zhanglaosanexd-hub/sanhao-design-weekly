const issues = {
  36: {
    issue: "ISSUE 036",
    range: "08.31—09.06",
    date: "2026 年 9 月 7 日 / 星期一",
    datetime: "2026-09-07",
    likes: 36,
    headline: "碎片带来灵感，<br />整理形成认知，连接构成体系。",
    note: "本刊记录每周体验设计中的发现与思考，为后续知识库建设和设计研究积累素材。",
    source:
      "https://www.yuque.com/zhanglaosan-bz7nq/blot0b/iifreikn94p0n60d?singleDoc",
    lead: {
      category: "01 / 业界动态",
      meta: "GOOGLE PICS",
      title: "Google Pics：Google 也正式做起了 AI 设计工具",
      description:
        "Google 推出原生集成在 Workspace 中的 AI 图片生成与编辑工具 Pics，面向营销素材、演示文稿、商品图片和社媒内容，也让 Google 有了一个更接近 Canva 与 Adobe Express 的轻量设计入口。",
      image: "./assets/vol36-google-pics.png",
      alt: "Google Pics AI 图片生成与编辑工具界面",
      url: "https://workspace.google.com/products/pics/",
    },
    briefing: [
      {
        title: "Webflow 一口气更新：AI 生成的组件，现在可以直接在画布上改了",
        tag: "业界动态",
        url: "https://webflow.com/updates",
      },
      {
        title: "GPT-6 Astra 正式发布",
        tag: "AI 资讯",
        url: "https://openai.com/products/release-notes/",
      },
      {
        title: "IconVectors 2.0：一个 SVG 编辑器，塞进了 155 个 MCP 工具",
        tag: "产品推荐",
        url: "https://iconvectors.io/",
      },
      {
        title: "Figma：终于可以统一管理颜色透明度了",
        tag: "设计细节",
        url: "https://www.figma.com/release-notes/?title=control-opacity-at-scale",
      },
      {
        title: "有人把埃菲尔铁塔掰弯，当成了一个巨大弹弓",
        tag: "互动实验",
        url: "https://tympanus.net/Development/EiffelCatapult/",
      },
    ],
    quote:
      "AI 正在从一个生成入口，变成真正理解上下文、操作工具并持续完成任务的工作伙伴。",
    stories: [
      {
        type: "wide",
        category: "02 / 业界动态",
        meta: "VISUAL AI COMPONENTS",
        title: "Webflow 一口气更新：AI 生成的组件，现在可以直接在画布上改了",
        description:
          "Webflow 的 AI Code Components 现在可以像普通元素一样在 Canvas 中直接调整样式；Agent 还能读取现有网站，自动整理品牌、设计系统、素材和 CMS 规则，并并排检查多个响应式尺寸。",
        image: "./assets/vol36-webflow-ai-components.png",
        alt: "Webflow AI 生成组件的可视化编辑界面",
        url: "https://webflow.com/updates",
      },
      {
        category: "03 / 业界动态",
        meta: "ADOBE × SLACK",
        title: "Adobe 把 70+ 个创意工具搬进了 Slack",
        description:
          "Adobe for Slack 让 Slackbot 可以调用 Firefly、Photoshop、Premiere、Acrobat、Illustrator、Lightroom 与 Adobe Express 等工具，根据对话上下文生成或继续修改图片、视频和 PDF。",
        image: "./assets/vol36-adobe-slack.png",
        alt: "Adobe 创意工具接入 Slack 的工作流界面",
        url: "https://blog.adobe.com/en/publish/2026/09/02/introducing-adobe-for-slack",
      },
      {
        category: "04 / AI 资讯",
        meta: "GPT-6 ASTRA",
        title: "GPT-6 Astra 正式发布",
        description:
          "GPT-6 Astra 重点强化 Coding、Research、Computer Use 和复杂多步骤任务，并更重视文档、表格与演示文稿等专业产出。Mid-turn steering 还允许用户在任务执行中途继续追加或修改要求。",
        image: "./assets/vol36-gpt6-astra.png",
        alt: "GPT-6 Astra 发布视觉",
        url: "https://openai.com/products/release-notes/",
      },
      {
        type: "wide",
        category: "05 / 产品推荐",
        meta: "NOTCH PUBLISHING",
        title: "PostBox：把 MacBook 刘海变成设计作品的发布入口",
        description:
          "把导出的图片拖到 MacBook 刘海，就能写一次文案并同步发布到多个设计与社交平台；发送前还可以套用展示 Preset 或 Mockup。",
        image: "./assets/vol36-postbox.png",
        alt: "PostBox 通过 MacBook 刘海发布设计作品的界面",
        url: "https://postbox.sh/",
      },
      {
        category: "06 / 产品推荐",
        meta: "SVG × MCP",
        title: "IconVectors 2.0：一个 SVG 编辑器，塞进了 155 个 MCP 工具",
        description:
          "新版加入 Icon Explorer、SVG 批处理和颜色面板，并内置 155 个本地 MCP 工具。连接 Agent 后，它们可以读取当前 SVG、选区和文件夹，直接修改、预览与导出图标。",
        image: "./assets/vol36-iconvectors.png",
        alt: "IconVectors 2.0 SVG 编辑器与 MCP 工具界面",
        url: "https://iconvectors.io/",
      },
      {
        type: "wide",
        category: "07 / 设计素材",
        meta: "STAMP EDGES",
        title: "Ravioli：一个只负责做邮票齿孔的小工具",
        description:
          "选择形状并调整尺寸、齿孔数量和圆角，就能导出透明 PNG 或 SVG，适合海报、贴纸、票券、复古视觉与拼贴设计。",
        image: "./assets/vol36-ravioli.png",
        alt: "Ravioli 邮票齿孔图形生成工具界面",
        url: "https://raviolitool.vercel.app/",
      },
      {
        type: "wide",
        category: "08 / 设计素材",
        meta: "REVIVED TYPEFACE",
        title: "Eska：一套跨越 50 年重新复活的免费字体",
        description:
          "Eska 源自 Maria Eska 在 1975 年设计的 Rugby 字体。50 年后，它被重新数字化为尊重原稿的 Eska Original 和现代化的 Eska Neue，两个版本均可免费下载。",
        image: "./assets/vol36-eska.png",
        alt: "Eska Original 与 Eska Neue 字体展示",
        url: "https://capitalics.wtf/en/font/eska",
      },
      {
        category: "09 / 设计细节",
        meta: "OPACITY VARIABLES",
        title: "Figma：终于可以统一管理颜色透明度了",
        description:
          "Figma 现在允许使用 Number Variable 控制 Opacity。颜色仍然保留 Library Link，同时叠加透明度变量，Disabled、Overlay 与 Scrim 等状态可以统一维护。",
        image: "./assets/vol36-figma-opacity.png",
        alt: "Figma 使用数值变量统一控制颜色透明度",
        url: "https://www.figma.com/release-notes/?title=control-opacity-at-scale",
      },
      {
        type: "feature",
        category: "10 / 随便看看",
        meta: "EIFFEL CATAPULT",
        title: "有人把埃菲尔铁塔掰弯，当成了一个巨大弹弓",
        description:
          "Yuri Artiukh 用 Three.js 做了一个可以拖拽弯曲埃菲尔铁塔的实验，并结合 Cesium ion 的真实世界 3D 数据，让用户从巴黎上空飞向 Three.js Conference 会场。",
        image: "./assets/vol36-eiffel-catapult.png",
        alt: "Three.js 埃菲尔铁塔弹弓互动实验",
        url: "https://tympanus.net/Development/EiffelCatapult/",
      },
    ],
  },
  35: {
    issue: "ISSUE 035",
    range: "08.24—08.30",
    date: "2026 年 9 月 1 日 / 星期二",
    datetime: "2026-09-01",
    likes: 35,
    headline: "碎片带来灵感，<br />整理形成认知，连接构成体系。",
    note: "本刊记录每周体验设计中的发现与思考，为后续知识库建设和设计研究积累素材。",
    source:
      "https://www.yuque.com/zhanglaosan-bz7nq/blot0b/bdy63vibvbtos1wk?singleDoc",
    lead: {
      category: "01 / 业界动态",
      meta: "CHATGPT SITES",
      title: "ChatGPT 开始直接做「网站」了",
      description:
        "ChatGPT Sites 进入 Public Beta。用户可以在 ChatGPT Work 或桌面端 Work / Codex 中描述需求，加入文件、数据和链接，生成可修改、分享甚至公开发布的网站或轻量应用。",
      image: "./assets/vol35-chatgpt-sites.png",
      alt: "ChatGPT Sites 生成并编辑网站的工作界面",
      url: "https://help.openai.com/en/articles/20001339-creating-and-managing-chatgpt-sites",
    },
    briefing: [
      {
        title: "Photoshop 开始支持「说一句 + 画两笔」让 AI 修图",
        tag: "业界动态",
        url: "https://blog.adobe.com/en/publish/2026/08/27/new-photoshop-innovations-bring-you-more-choice-control-at-every-stage-of-your-creative-process",
      },
      {
        title: "Webflow 正式接进 ChatGPT 和 Codex",
        tag: "AI 资讯",
        url: "https://webflow.com/blog/webflow-is-now-available-in-codex-and-chatgpt",
      },
      {
        title: "Sendra：Figma 画完邮件，直接导出能发的 HTML",
        tag: "产品推荐",
        url: "https://www.figma.com/community/plugin/1659319383372020095/sendra-figma-to-email-html-responsive-outlook-safe",
      },
      {
        title: "GeekLego：给 AI 用的开源设计系统来了",
        tag: "设计素材",
        url: "https://geeklego.io/",
      },
      {
        title: "AI Interface Museum：把 15 年 AI 界面放进一座线上博物馆",
        tag: "设计观察",
        url: "https://interfaces.kylejeong.com/",
      },
    ],
    quote:
      "设计师、Agent 和真实网站之间，可能会逐渐形成一条持续迭代的链路。",
    stories: [
      {
        type: "wide",
        category: "02 / 业界动态",
        meta: "PHOTOSHOP MARKUP",
        title: "Photoshop 开始支持「说一句 + 画两笔」让 AI 修图",
        description:
          "Photoshop 新增 AI Assisted Editor、Prompt to Edit 和 Markup。除了自然语言修改图片，用户还可以画圈、箭头、涂色或草图，结合 Mask 精确告诉 AI 要修改的位置。",
        image: "./assets/vol35-photoshop-markup.png",
        alt: "Photoshop 使用草图标记和自然语言进行 AI 修图",
        url: "https://blog.adobe.com/en/publish/2026/08/27/new-photoshop-innovations-bring-you-more-choice-control-at-every-stage-of-your-creative-process",
      },
      {
        category: "03 / 业界动态",
        meta: "DETACHED AGENT CHAT",
        title: "Figma Agent 终于可以单独浮出来了",
        description:
          "Figma 桌面端现在可以把 Agent Chat 从主界面独立出来，拖到屏幕任意位置。即使切换文件、Tab 或其他工具，它也能持续可见，逐渐从软件入口变成长期待在工作台旁的角色。",
        image: "./assets/vol35-figma-agent-window.png",
        alt: "Figma Agent Chat 独立窗口悬浮在工作台旁",
        url: "https://www.figma.com/release-notes/?title=open-the-agent-chat-panel-in-a-new-window",
      },
      {
        category: "04 / AI 资讯",
        meta: "WEBFLOW × AGENTS",
        title: "Webflow 正式接进 ChatGPT 和 Codex",
        description:
          "连接 Workspace 后，Agent 可以读取 Webflow 项目的真实上下文，并协助完成 CMS 内容更新、SEO 优化、代码部署和网站管理，让设计、Agent 与线上网站形成持续迭代链路。",
        image: "./assets/vol35-webflow-chatgpt-codex.png",
        alt: "Webflow 连接 ChatGPT 和 Codex 的网站工作流",
        url: "https://webflow.com/blog/webflow-is-now-available-in-codex-and-chatgpt",
      },
      {
        type: "wide",
        category: "05 / AI 资讯",
        meta: "DESIGN × CODE SYNC",
        title: "Figma 开始研究：怎样让设计和代码一直保持同步",
        description:
          "Figma 新一期 Workflow Lab 研究如何通过 MCP、Code Connect、FigJam 和 Coding Agent 传递设计上下文。当 Agent 能读取组件、Token 与设计系统规则时，首次生成结果才更接近 Production Ready。",
        image: "./assets/vol35-design-code-sync.png",
        alt: "Figma Workflow Lab 设计与代码同步工作流",
        url: "https://www.figma.com/blog/workflow-lab-moving-between-design-and-code-with-agents/",
      },
      {
        type: "wide",
        category: "06 / 产品推荐",
        meta: "FIGMA TO EMAIL",
        title: "Sendra：Figma 画完邮件，直接导出能发的 HTML",
        description:
          "在 Figma 中完成 Email 设计并选中 Frame，就能生成响应式 HTML。Sendra 还支持 Mobile Stacking、Dark Mode、图片托管、测试邮件和主流邮件客户端适配。",
        image: "./assets/vol35-sendra-email.png",
        alt: "Sendra 将 Figma 邮件设计导出为响应式 HTML",
        url: "https://www.figma.com/community/plugin/1659319383372020095/sendra-figma-to-email-html-responsive-outlook-safe",
      },
      {
        category: "07 / 产品推荐",
        meta: "DAILY DESIGN TAB",
        title: "Design Hunt：把浏览器新标签页变成每日设计灵感墙",
        description:
          "每次打开新标签页都会出现一批人工筛选的产品设计、品牌、字体、动效与数字体验作品，支持图片、视频、设计师主页、深浅色模式和离线缓存。",
        image: "./assets/vol35-design-hunt.png",
        alt: "Design Hunt 浏览器新标签页设计灵感墙",
        url: "https://designhunt.us/",
      },
      {
        category: "08 / 设计素材",
        meta: "AI-NATIVE SYSTEM",
        title: "GeekLego：给 AI 用的开源设计系统来了",
        description:
          "GeekLego 是一套开源 AI-native Design System。除 Token、组件和文档外，它还加入专门给 Coding Agent 使用的规则与 Skill，让生成组件遵循既定颜色、间距和可访问性规范。",
        image: "./assets/vol35-geeklego.png",
        alt: "GeekLego AI 原生开源设计系统界面",
        url: "https://geeklego.io/",
      },
      {
        type: "wide",
        category: "09 / 设计素材",
        meta: "HTML SHADERS",
        title: "Inspira UI：现在连 HTML 都可以直接套 Shader 了",
        description:
          "Inspira UI 新增 HTML in Canvas 效果，可将 ShaderToy 风格 Shader 应用到实时 HTML 内容。目前包含 Liquid、Chromatic、ASCII、Cloth、Blaze 和 Drag 等视觉效果。",
        image: "./assets/vol35-inspira-ui-shader.png",
        alt: "Inspira UI 为实时 HTML 内容应用 Shader 效果",
        url: "https://inspira-ui.com/docs/en",
      },
      {
        category: "10 / 设计细节",
        meta: "UNFURLING INTERFACES",
        title: "让浮层从它该来的地方长出来",
        description:
          "DuckDuckGo Design Engineer Karl Koch 在 On unfurling interfaces 中讨论 Menu、Toast 与卡片详情等局部界面应该如何从触发位置自然展开，让空间关系与交互来源保持连贯。",
        image: "./assets/vol35-unfurling-interfaces.png",
        alt: "On unfurling interfaces 界面展开动效文章封面",
        url: "https://karlkoch.me/writing/on-unfurling-interfaces/",
      },
      {
        type: "wide",
        category: "11 / 随便看看",
        meta: "AI INTERFACE HISTORY",
        title: "AI Interface Museum：把 15 年 AI 界面放进一座线上博物馆",
        description:
          "这座线上博物馆收集了从 2011 年 Siri 到 ChatGPT、Cursor、Claude Artifacts、Computer Use、Operator 与 Codex App 等代表性 AI 界面，可沿时间线观察交互范式的变化。",
        image: "./assets/vol35-ai-interface-museum.png",
        alt: "AI Interface Museum 十五年人工智能界面时间线",
        url: "https://interfaces.kylejeong.com/",
      },
      {
        type: "feature",
        category: "12 / 随便看看",
        meta: "3D PORTFOLIO CITY",
        title: "Persona Studio：把作品集直接做成了一座 3D 城市",
        description:
          "Persona Studio 把每个项目设计成城市中的一栋建筑，访问者通过探索城市进入对应项目。它在 8 月 29 日获得 CSS Winner Site of the Day，也让信息架构本身成为品牌表达。",
        image: "./assets/vol35-persona-studio.png",
        alt: "Persona Studio 三维城市作品集网站",
        url: "https://persona-studio.com/",
      },
    ],
  },
  34: {
    issue: "ISSUE 034",
    range: "08.17—08.23",
    date: "2026 年 8 月 24 日 / 星期一",
    datetime: "2026-08-24",
    likes: 34,
    headline: "碎片带来灵感，<br />整理形成认知，连接构成体系。",
    note: "本刊记录每周体验设计中的发现与思考，为后续知识库建设和设计研究积累素材。",
    source:
      "https://www.yuque.com/zhanglaosan-bz7nq/blot0b/dtq3kva2g4grote2?singleDoc",
    lead: {
      category: "01 / 业界动态",
      meta: "WECHAT AI EDITING",
      title: "微信 v8.0.76：AI 修图进入聊天，语音条也重新设计了",
      description:
        "微信 v8.0.76 把 AI 修图带进聊天场景，同时重新设计了语音条。AI 开始进入高频沟通入口，而一处看似细小的视觉变化也迅速引发了用户讨论。",
      image: "./assets/vol34-wechat-ai-edit.png",
      alt: "微信 v8.0.76 AI 修图与新版语音条界面",
      url: "https://mp.weixin.qq.com/s/6CB88U9LEct3AK26dSPq1A",
    },
    briefing: [
      {
        title: "Claude Code /design：先出设计方案，再进入实现",
        tag: "AI 资讯",
        url: "https://x.com/nateparrott/status/2089470636796059754?s=20",
      },
      {
        title: "Figma 开始把 AI Skill 纳入团队管理",
        tag: "业界动态",
        url: "https://www.figma.com/release-notes/?title=recommend-resources-you-want-users-to-discover-and-use",
      },
      {
        title: "Balsa UI：专门让人和 Agent 共用的设计系统",
        tag: "产品推荐",
        url: "https://balsa-ui.com/",
      },
      {
        title: "UI SFX：936 个 UI 音效",
        tag: "设计素材",
        url: "https://uisfx.com/",
      },
      {
        title: "Figma：Auto Layout 的间距终于和 CSS 对齐",
        tag: "设计细节",
        url: "https://www.figma.com/release-notes/?title=responsive-spacing",
      },
    ],
    quote:
      "不追完所有新闻资讯，只记录那些我认为，可能真的会改变设计师工作方式的变化。",
    stories: [
      {
        type: "wide",
        category: "02 / 业界动态",
        meta: "RECOMMENDED RESOURCES",
        title: "Figma 开始把 AI Skill 纳入团队管理",
        description:
          "Figma 新增 Recommended Resources，管理员可以向团队推荐 Skills、模板、组件库和 Make Kits。AI 工作方式开始从个人探索走向团队统一管理与复用。",
        image: "./assets/vol34-figma-resources.png",
        alt: "Figma Recommended Resources 团队资源管理界面",
        url: "https://www.figma.com/release-notes/?title=recommend-resources-you-want-users-to-discover-and-use",
      },
      {
        category: "03 / 业界动态",
        meta: "WINDOWS 11 MENU",
        title: "Windows 11 重新整理文件管理器右键菜单",
        description:
          "微软正在让文件管理器右键菜单更快、更简单，也更容易自定义。高频操作被重新分组，第三方扩展的呈现方式也得到调整。",
        image: "./assets/vol34-windows-menu.png",
        alt: "Windows 11 文件管理器新版右键菜单",
        url: "https://blogs.windows.com/windows-insider/2026/08/17/improving-file-explorer-context-menu-faster-simpler-and-more-customizable/",
      },
      {
        category: "04 / AI 资讯",
        meta: "CLAUDE CODE DESIGN",
        title: "Claude Code /design：先出设计方案，再进入实现",
        description:
          "Claude Code 的 /design 早期预览会先生成可编辑的 UI Artboards，用户选择和调整方案后再进入实现。设计探索与代码执行之间多了一层可见、可修改的中间态。",
        image: "./assets/vol34-claude-design.png",
        alt: "Claude Code design 命令生成可编辑设计方案",
        url: "https://x.com/nateparrott/status/2089470636796059754?s=20",
      },
      {
        type: "wide",
        category: "05 / AI 资讯",
        meta: "ANTHROPIC DESIGN TEAM",
        title: "Anthropic 的设计团队，现在几乎所有设计师都在写代码",
        description:
          "IDEO 采访 Anthropic 产品设计负责人后发现，这支约 30 人的团队里几乎所有设计师都在写代码。Agent 接手基础实现后，设计师更集中于判断、工作流、组件和最后一公里体验。",
        image: "./assets/vol34-anthropic-design-team.png",
        alt: "Anthropic 产品设计团队访谈页面",
        url: "https://www.ideo.com/journal/crafting-the-last-mile-of-delight",
      },
      {
        category: "06 / AI 资讯",
        meta: "DESIGN CONTEXT",
        title: "Figma：别再把时间都花在写 Prompt 上",
        description:
          "Figma 认为 Prompt 只是起点，生成质量更依赖真实设计上下文。参考图、组件、设计系统和画布中的持续调整，才是让 AI 结果真正可用的关键。",
        image: "./assets/vol34-figma-design-context.png",
        alt: "Figma AI 设计提示与真实设计上下文示例",
        url: "https://www.figma.com/resource-library/ai-design-prompts/",
      },
      {
        type: "wide",
        category: "07 / 产品推荐",
        meta: "HUMAN × AGENT UI",
        title: "Balsa UI：专门让人和 Agent 共用的设计系统",
        description:
          "Balsa UI 面向人类与 Agent 共用的界面场景，提供组件、模式和交互约定。它试图让 Agent 不只生成页面，也能在可预测的设计规则里持续操作产品。",
        image: "./assets/vol34-balsa-ui.png",
        alt: "Balsa UI 人类与 Agent 共用设计系统页面",
        url: "https://balsa-ui.com/",
      },
      {
        type: "wide",
        category: "08 / 设计素材",
        meta: "UI SOUND LIBRARY",
        title: "UI SFX：936 个 UI 音效",
        description:
          "UI SFX 收录 936 个适合按钮、通知、切换、成功与错误状态的界面音效，可按场景快速试听和下载，为产品交互补上一层听觉反馈。",
        image: "./assets/vol34-ui-sfx.png",
        alt: "UI SFX 界面音效素材库",
        url: "https://uisfx.com/",
      },
      {
        category: "09 / 设计素材",
        meta: "COLOR SYSTEM",
        title: "Rechroma：从一个颜色生成完整色彩系统",
        description:
          "Rechroma 可以从一个基础色生成完整的颜色阶梯、语义色和深浅模式方案，适合快速搭建品牌色板与产品设计系统。",
        image: "./assets/vol34-rechroma.png",
        alt: "Rechroma 自动生成的产品色彩系统",
        url: "https://rechroma.com/",
      },
      {
        category: "10 / 设计素材",
        meta: "PIXEL ICONS",
        title: "Pixelarticons：1036 个免费像素风图标",
        description:
          "Pixelarticons 提供 1036 个像素风图标，覆盖常见界面与品牌场景，可直接搜索、复制和下载，适合复古产品、游戏界面与实验视觉。",
        image: "./assets/vol34-pixelarticons.png",
        alt: "Pixelarticons 免费像素风图标库",
        url: "https://pixelarticons.com/",
      },
      {
        type: "wide",
        category: "11 / 设计素材",
        meta: "AI TO FIGMA",
        title: "AI to Figma：把 AI 生成的界面直接写回 Figma",
        description:
          "AI to Figma 是一个开源项目，可以把 AI 生成的 UI 结构直接导入 Figma，继续进行图层编辑、组件整理和团队协作。",
        image: "./assets/vol34-ai-to-figma.png",
        alt: "AI to Figma 将生成界面写回 Figma 的工作流",
        url: "https://github.com/Niall-Young/AItoFigma",
      },
      {
        type: "wide",
        category: "12 / 设计细节",
        meta: "RESPONSIVE SPACING",
        title: "Figma：Auto Layout 的间距终于和 CSS 对齐",
        description:
          "Figma 为 Auto Layout 增加更接近 CSS 的响应式间距控制，让设计稿中的布局规则更容易和前端实现对应，也减少固定数值带来的重复调整。",
        image: "./assets/vol34-auto-layout-spacing.png",
        alt: "Figma Auto Layout 响应式间距设置",
        url: "https://www.figma.com/release-notes/?title=responsive-spacing",
      },
      {
        category: "13 / 随便看看",
        meta: "NIANNIAN STICKERS",
        title: "念念打工记 1.0：我把自家橘猫做成了一套微信表情包",
        description:
          "老三把自家橘猫念念做成了一套打工主题微信表情包，从真实性格、日常动作到职场语境，整理成可以直接使用的角色表达。",
        image: "./assets/vol34-niannian-stickers.png",
        alt: "念念打工记橘猫微信表情包预览",
        url: "https://w.url.cn/s/AWRSSeq",
      },
      {
        type: "feature",
        category: "14 / 随便看看",
        meta: "PHYSICS WEBSITE",
        title: "TILToooTILT：把整个网页当成一个有重量的房间",
        description:
          "网站里放了 18 个具有不同质量、摩擦力、漂移速度和稳定性的物体。倾斜页面后，它们会按照各自的重量产生不同运动反应，适合做互动网页和创意 Coding 的设计师体验。",
        image: "./assets/vol34-tiltoootilt.png",
        alt: "TILToooTILT 物理互动网页中的漂浮物体",
        url: "https://tiltoootilt.tote.co.jp/",
      },
    ],
  },
  33: {
    issue: "ISSUE 033",
    range: "08.10—08.16",
    date: "2026 年 8 月 17 日 / 星期一",
    datetime: "2026-08-17",
    likes: 33,
    headline: "碎片带来灵感，<br />整理形成认知，连接构成体系。",
    note: "本刊记录每周体验设计中的发现与思考，为后续知识库建设和设计研究积累素材。",
    source:
      "https://www.yuque.com/zhanglaosan-bz7nq/blot0b/hwtbpgzf8tws430k?singleDoc",
    lead: {
      category: "01 / 业界动态",
      meta: "AGENT SKILLS",
      title: "Figma Agent Skills 的 Community 生态开始成型",
      description:
        "Figma 把 Agent Skills 正式接入 Community，目前已有 50+ 套设计工作流 Skill，覆盖研究、设计系统、交付、动效和组件检查。设计师还能根据当前文件创建 Skill，再发布给其他人复用。",
      image: "./assets/vol33-figma-skills.png",
      alt: "Figma Community 中的 Agent Skills 工作流示例",
      url: "https://www.figma.com/blog/try-these-10-skills-and-show-off-your-own/",
    },
    briefing: [
      {
        title: "Figma 用 100 人实验验证：AI 让设计任务平均快 20%",
        tag: "AI 资讯",
        url: "https://www.figma.com/blog/measuring-time-savings-from-figma-make/",
      },
      {
        title: "Instagram 时隔近 10 年更新 Wordmark",
        tag: "品牌动态",
        url: "https://www.theverge.com/tech/979583/this-is-instagrams-new-logo",
      },
      {
        title: "OpenMotion：截图 + Prompt 直接生成产品动效视频",
        tag: "产品推荐",
        url: "https://openmotion.design/",
      },
      {
        title: "Beautiful UI：专门给 AI 原生产品设计的组件库",
        tag: "设计素材",
        url: "https://www.beautifului.dev/",
      },
      {
        title: "Manus 限时免费，两个 Agent 暂时都不消耗积分",
        tag: "AI 工具",
        url: "https://manus.im/invitation/IVRFSDBXKAMJUD?utm_source=invitation&utm_medium=social&utm_campaign=copy_link",
      },
    ],
    quote:
      "设计经验开始从隐性的个人判断，变成可以安装、复用和共同迭代的工作流。",
    stories: [
      {
        type: "wide",
        category: "02 / 业界动态",
        meta: "INSTAGRAM WORDMARK",
        title: "Instagram 时隔近 10 年更新 Wordmark",
        description:
          "Instagram 更新了使用近十年的文字 Logo，把手写体和印刷体混合在一起，希望更干净、更现代，同时保留手工感。上线后的主要争议却是可读性，不少人第一眼把它读成了 Instagzam。",
        image: "./assets/vol33-instagram-wordmark.png",
        alt: "Instagram 新旧 Wordmark 视觉对比",
        url: "https://www.theverge.com/tech/979583/this-is-instagrams-new-logo",
      },
      {
        category: "03 / 业界动态",
        meta: "LIQUID GLASS",
        title: "iOS 27 Beta 5 又改了一轮 Liquid Glass 图标",
        description:
          "Apple 在 iOS 27 Beta 5 中继续调整 Safari、Siri、Settings 和 App Store 等系统图标，透明度、细节与视觉层次都有新的变化。",
        image: "./assets/vol33-ios-liquid-glass.png",
        alt: "iOS 27 Beta 5 Liquid Glass 系统图标",
        url: "https://www.tomsguide.com/phones/iphones/ios-27-beta-5-adds-new-app-icons-more-siri-voices-improved-search-and-more-everything-thats-changed",
      },
      {
        category: "04 / AI 资讯",
        meta: "FIGMA MAKE STUDY",
        title: "Figma 用 100 人实验验证：AI 让设计任务平均快 20%",
        description:
          "Figma 对 100 名参与者进行随机对照实验。使用 Figma Make 后，设计工作平均快 20%、主观难度降低 16%；PM 的任务速度提高 23%，主观难度降低 37%。",
        image: "./assets/vol33-figma-make-study.png",
        alt: "Figma Make 随机对照实验结果图表",
        url: "https://www.figma.com/blog/measuring-time-savings-from-figma-make/",
      },
      {
        type: "wide",
        category: "05 / AI 资讯",
        meta: "AGENT HARNESS",
        title: "DeepSeek 发布 Harness，Agent 基础设施又往前走了一步",
        description:
          "DeepSeek Harness 开发者预览版采用一切皆插件的思路，模型、工具、Skills、沙箱、存储和 UI 都能自由组合替换。概念值得关注，但对设计师的明确落地场景仍需要继续观察。",
        image: "./assets/vol33-deepseek-harness.png",
        alt: "DeepSeek Harness 开发者预览界面",
        url: "https://www.deepseek.com/harness/",
      },
      {
        category: "06 / 产品推荐",
        meta: "PRODUCT MOTION",
        title: "OpenMotion：截图 + Prompt 直接生成产品动效视频",
        description:
          "OpenMotion 能把产品截图、Logo 和品牌素材生成产品介绍视频，生成后的 Scene、Layer、Timing、Easing、颜色、镜头与声音仍可继续编辑，适合功能发布和官网动效 Demo。",
        image: "./assets/vol33-openmotion.png",
        alt: "OpenMotion 产品动效视频编辑界面",
        url: "https://openmotion.design/",
      },
      {
        type: "wide",
        category: "07 / 产品推荐",
        meta: "LIVE PRODUCT EDITING",
        title: "Remix：直接在已上线产品上画 Figma",
        description:
          "Remix 基于正在运行的真实产品创建安全副本，再通过 Prompt 修改 UI。团队成员可以分别制作 Variant、合并方案，并在确定后直接创建 GitHub PR，完整保留每一步修改记录。",
        image: "./assets/vol33-remix.png",
        alt: "Remix 在真实产品上创建和合并 UI 方案",
        url: "https://remix.one/product-hunt",
      },
      {
        type: "wide",
        category: "08 / 设计素材",
        meta: "CC0 ILLUSTRATIONS",
        title: "Kitbitz：2000+ 免费手绘素材，CC0 可商用",
        description:
          "Kitbitz 收录 2000+ 个手绘素材和 13 套主题包，支持下载 SVG、PNG 与完整 Figma Community 库。素材采用 CC0，可自由修改和商用，不要求署名。",
        image: "./assets/vol33-kitbitz.png",
        alt: "Kitbitz 手绘插画素材库界面",
        url: "https://kitbitz.art/",
      },
      {
        category: "09 / 设计素材",
        meta: "SAAS ILLUSTRATIONS",
        title: "GetIllustrations 更新 75 张 SaaS 插画",
        description:
          "GetIllustrations 新增一套包含 75 张图的 SaaS Illustrations。全站已有 17 万+ 插画和图标，并支持 Figma 插件、SVG 调色、API 与 MCP。",
        image: "./assets/vol33-getillustrations.png",
        alt: "GetIllustrations SaaS 插画包预览",
        url: "https://getillustrations.com/",
      },
      {
        category: "10 / 设计素材",
        meta: "AI-NATIVE UI",
        title: "Beautiful UI：专门给 AI 原生产品设计的组件库",
        description:
          "Beautiful UI 聚焦 Prompt 输入、生成状态、Thinking、Agent 执行过程、结果展示、引用和反馈等 AI 产品场景，提前整理了一套不同于传统 Design System 的交互语言。",
        image: "./assets/vol33-beautiful-ui.png",
        alt: "Beautiful UI 的 AI 原生产品组件示例",
        url: "https://www.beautifului.dev/",
      },
      {
        type: "wide",
        category: "11 / 设计细节",
        meta: "THINKING IN MOTION",
        title: "让 AI 回答像人的边想边写",
        description:
          "回答生成时逐步出现手写标记、圈选、划线与图表补充，让流式文字变成边思考、边整理、边修正的过程。用户等待结果时，也能感受到信息正在被组织。",
        image: "./assets/vol33-inspo-handwriting.png",
        alt: "AI 回答中逐步出现手写标记和图表的交互效果",
        url: "https://inspo-design.pages.dev/",
      },
      {
        type: "wide",
        category: "12 / 随便看看",
        meta: "NIULAI VISION SKILL",
        title: "老三把《牛来》做成了一套可安装的视觉 Skill",
        description:
          "LaoSan NiuLai Vision Skill 可以把人物、动物、产品或场景转成粗粝、低成本 CGI 与乡野舞台感的画面，同时尽量保留主体、姿态、构图和关键识别特征。",
        image: "./assets/vol33-niulai-skill.png",
        alt: "实拍吉娃娃与牛来视觉风格生成结果对比",
        url: "https://github.com/zhanglaosanexd-hub/LaoSan-NiuLaiVision-Skill",
      },
      {
        category: "13 / 随便看看",
        meta: "MANUS FREE WEEK",
        title: "Manus 限时免费，两个 Agent 暂时都不消耗积分",
        description:
          "截至 8 月 25 日，Manus 1.6 和 Manus 1.6 Lite 活动期间使用 Agent 不消耗积分，但每日免费用量仍有限额，高峰期任务可能需要排队。",
        image: "./assets/vol33-manus-free.png",
        alt: "Manus 1.6 限时免费活动页面",
        url: "https://manus.im/invitation/IVRFSDBXKAMJUD?utm_source=invitation&utm_medium=social&utm_campaign=copy_link",
      },
      {
        type: "feature",
        category: "14 / 随便看看",
        meta: "CODEX RESET TEST",
        title: "Codex 疑似内测 8 美元付费重置",
        description:
          "网上出现的截图显示，Codex 用量耗尽后可能出现 Pay $8 to reset 按钮。OpenAI 目前只确认了 Credits 付费续用机制，尚未公开说明这项 8 美元重置，因此暂按小范围测试看待。",
        image: "./assets/vol33-codex-reset.png",
        alt: "Codex 用量耗尽后的付费重置按钮截图",
        url: "https://www.yuque.com/zhanglaosan-bz7nq/blot0b/hwtbpgzf8tws430k?singleDoc",
      },
    ],
  },
  32: {
    issue: "ISSUE 032",
    range: "08.03—08.09",
    date: "2026 年 8 月 12 日 / 星期三",
    datetime: "2026-08-12",
    likes: 32,
    headline: "碎片带来灵感，<br />整理形成认知，连接构成体系。",
    note: "本刊记录每周体验设计中的发现与思考，为后续知识库建设和设计研究积累素材。",
    source:
      "https://www.yuque.com/zhanglaosan-bz7nq/blot0b/hglg8g9ztgac5cxm?singleDoc",
    lead: {
      category: "01 / 业界动态",
      meta: "MCP × CODE CONNECT",
      title: "Figma MCP × Code Connect：Agent 开始真正理解设计系统",
      description:
        "Figma 公布 Code Connect 在 MCP 工作流中的实际效果。Agent 接入组件对应关系和生产代码上下文后，可以减少 Token 消耗、缩短任务时间，并生成更贴近团队真实设计系统的代码。",
      image: "./assets/vol32-code-connect.png",
      alt: "Figma MCP 与 Code Connect 设计系统工作流示意图",
      url: "https://www.figma.com/blog/the-benefits-of-code-connect-in-mcp/",
    },
    briefing: [
      {
        title: "Figma Agent 开放范围继续扩大",
        tag: "业界动态",
        url: "https://www.figma.com/blog/the-figma-agent-is-here/",
      },
      {
        title: "Figma 开始给 AI Credits 加个人额度",
        tag: "AI 资讯",
        url: "https://www.figma.com/release-notes/?title=ai-credit-user-limits",
      },
      {
        title: "Appllama：研究高收入 iOS App 的案例库",
        tag: "产品推荐",
        url: "https://appllama.io/",
      },
      {
        title: "Awesome Design Skills 收录 67 套设计风格",
        tag: "设计素材",
        url: "https://github.com/bergside/awesome-design-skills",
      },
      {
        title: "ChatGPT 长文本自动转换成附件",
        tag: "设计细节",
        url: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
      },
    ],
    quote:
      "岗位边界正在变得模糊，设计师自己的审美、表达和判断反而更重要了。",
    stories: [
      {
        type: "wide",
        category: "02 / 业界动态",
        meta: "ADOBE FOR CHATGPT",
        title: "Adobe 把 70+ 专业创作工具带进 ChatGPT",
        description:
          "Adobe for ChatGPT 将 Photoshop、Illustrator、Firefly、Premiere、Express、Lightroom、InDesign、Acrobat 与 Stock 等能力整合进对话窗口，复杂编辑还可以继续回到 Adobe 应用处理。",
        image: "./assets/vol32-adobe-chatgpt.png",
        alt: "Adobe for ChatGPT 专业创作工具运行界面",
        url: "https://blog.adobe.com/en/publish/2026/08/06/introducing-adobe-chatgpt-create-edit-get-work-done-all-in-chatgpt",
      },
      {
        category: "03 / 业界动态",
        meta: "FIGMA AGENT BETA",
        title: "Figma Agent 开放范围继续扩大",
        description:
          "Figma Agent 仍处于公开 Beta，但越来越多用户已经拿到权限。到 7 月底、8 月初，Figma 超过一半的大客户每周都在使用 Agent，它正在快速进入真实团队工作流。",
        image: "./assets/vol32-figma-agent.png",
        alt: "Figma Agent 生成并编辑产品界面的演示画面",
        url: "https://www.figma.com/blog/the-figma-agent-is-here/",
      },
      {
        category: "04 / AI 资讯",
        meta: "AI CREDIT LIMITS",
        title: "Figma 开始给 AI Credits 加个人额度",
        description:
          "Figma 新增 AI Credits 管理能力，管理员可以给团队成员设置个人额度上限，用户用完后再申请提升。AI 在设计团队里开始正式进入资源管理阶段。",
        image: "./assets/vol32-ai-credits.png",
        alt: "Figma AI Credits 个人额度管理界面",
        url: "https://www.figma.com/release-notes/?title=ai-credit-user-limits",
      },
      {
        type: "wide",
        category: "05 / 产品推荐",
        meta: "APP UX RESEARCH",
        title: "Appllama：研究高收入 iOS App 的 UI / UX 案例库",
        description:
          "Appllama 收录 700+ 个高收入 iOS App 和 30,000+ 张真实界面，可以查看完整 onboarding、付费墙、首页与应用内流程，并结合收入、下载量、颜色和字体做竞品研究。",
        image: "./assets/vol32-appllama.png",
        alt: "Appllama iOS App 界面与商业数据案例库",
        url: "https://appllama.io/",
      },
      {
        category: "06 / 设计素材",
        meta: "VISUAL ARCHIVE",
        title: "老三整理了一份早期可视化设计素材合集",
        description:
          "一批 2021—2023 年间积累的大屏、数据展示和视觉探索素材已经整理到 Figma Community，适合做可视化项目或寻找旧素材灵感时直接复制使用。",
        image: "./assets/vol32-visual-assets.png",
        alt: "早期大屏与数据可视化设计素材合集",
        url: "https://www.figma.com/community/file/1666393685132654259",
      },
      {
        type: "wide",
        category: "07 / 设计素材",
        meta: "DESIGN SKILLS",
        title: "Awesome Design Skills：67 套可以直接喂给 Agent 的设计风格",
        description:
          "仓库收录 Minimal、Bento、Glassmorphism、Brutalism、Editorial、Material、Retro 和 Shadcn 等 67 套 Design Skill，用结构化规则描述字体、颜色、间距、组件与文案语气。",
        image: "./assets/vol32-design-skills.png",
        alt: "Awesome Design Skills 设计风格技能库封面",
        url: "https://github.com/bergside/awesome-design-skills",
      },
      {
        category: "08 / 设计细节",
        meta: "PROGRESSIVE COMPLEXITY",
        title: "ChatGPT 长文本不再塞满输入框，而是自动变成附件",
        description:
          "在 ChatGPT 中粘贴超过 10,000 字符的长文本时，内容会自动转换成附件，需要时仍可切回文本形式。这是让用户只表达意图、由产品选择承载容器的渐进式复杂度设计。",
        image: "./assets/vol32-chatgpt-paste.png",
        alt: "ChatGPT 将长文本自动转换成附件的界面提示",
        url: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
      },
      {
        category: "09 / 随便看看",
        meta: "ECHO-OS",
        title: "ECHO-OS：把个人作品集做成一套 Windows XP",
        description:
          "Echo Wang 把个人主页做成 Windows XP 风格桌面系统，开始菜单、窗口、Media Player、CRT 效果与小游戏都被放进网页。这个由 Echo 与 Claude Code 完成的网站，让个人审美直接变成可探索的交互体验。",
        image: "./assets/vol32-echo-os.png",
        alt: "Windows XP 风格的 ECHO-OS 个人作品集网站",
        url: "https://echoecho.space/",
      },
      {
        category: "10 / 随便看看",
        meta: "MAC OS 9 PORTFOLIO",
        title: "Charlie Dean：一个像老电脑系统一样的个人世界",
        description:
          "Charlie Dean 用 SvelteKit 把个人网站做成 Mac OS 9 风格桌面，窗口、文件夹、图标和音效共同构成浏览体验。它鼓励访客到处点击，而不是按项目卡片顺序阅读。",
        image: "./assets/vol32-charlie-dean.png",
        alt: "Mac OS 9 风格的 Charlie Dean 个人网站",
        url: "https://charliedean.com/portfolio",
      },
      {
        type: "feature",
        category: "11 / 随便看看",
        meta: "CODEX MILESTONE",
        title: "Codex 不再公布百万用户里程碑，“领鸡蛋”的时代可能结束了",
        description:
          "Codex 团队确认用户数早已超过 1100 万，但从 1000 万起不再公开里程碑。此前社区期待随百万用户节点出现的额度 Reset，可能也要从固定节目中退场。",
        image: "./assets/vol32-codex-milestone.png",
        alt: "Codex 用户里程碑相关社交媒体对话截图",
        url: "https://x.com/thsottiaux/status/2084739990471458869",
      },
    ],
  },
  31: {
    issue: "ISSUE 031",
    range: "07.27—08.02",
    date: "2026 年 8 月 4 日 / 星期二",
    datetime: "2026-08-04",
    likes: 31,
    headline: "碎片带来灵感，<br />整理形成认知，连接构成体系。",
    note: "本刊记录每周体验设计中的发现与思考，为后续知识库建设和设计研究积累素材。",
    source:
      "https://www.yuque.com/zhanglaosan-bz7nq/blot0b/qls8kbhvnt7ztf3l?singleDoc",
    lead: {
      category: "01 / AI 资讯",
      meta: "ROLE BOUNDARIES",
      title: "OpenAI 研究：设计师正在大量承担跨岗位任务",
      description:
        "OpenAI 分析超过 80 万条工作相关消息后发现，设计岗位中 75% 的职业特定消息涉及其他岗位工作。设计师正在更多地写代码、做分析和处理营销任务，岗位边界也随之变得模糊。",
      image: "./assets/vol31-openai-boundaries-cover.png",
      alt: "黄绿色抽象图形组成的 OpenAI 工作边界研究封面",
      url: "https://openai.com/index/how-ai-is-expanding-what-people-do-at-work/",
    },
    briefing: [
      {
        title: "Figma Make 加入属性面板和画布批注",
        tag: "设计工具",
        url: "https://www.figma.com/blog/properties-panel-and-annotations-now-in-figma-make/",
      },
      {
        title: "Framer Agents 开始补齐真实网站的设计细节",
        tag: "AI 建站",
        url: "https://www.framer.com/updates",
      },
      {
        title: "Google Earth 上线 AI 场景生成后次日暂停",
        tag: "AI 资讯",
        url: "https://www.reuters.com/business/media-telecom/alphabet-rolls-back-ai-image-generation-google-earth-over-policy-violations-2026-07-31/",
      },
      {
        title: "Obys 把未采用的设计方案做成互动档案",
        tag: "设计观察",
        url: "https://experiment.obys.agency/",
      },
      {
        title: "QQ 宠物时隔 8 年回归，并接入 AI",
        tag: "产品观察",
        url: "https://news.qq.com/rain/a/20260727A0BKFO00",
      },
    ],
    quote:
      "AI 正在打破各个岗位的边界线，设计师开始接管更多工作，也在重新定义自己的角色。",
    stories: [
      {
        type: "wide",
        category: "02 / 业界动态",
        meta: "VISUAL EDITING",
        title: "Figma Make 加入属性面板和画布批注",
        description:
          "Figma Make 现在可以直接选中元素，在属性面板中调整间距、排版与布局；遇到交互或动效需求，也能圈选画布上的具体位置，让 Agent 定点修改。",
        image: "./assets/vol31-figma-make.png",
        alt: "Figma Make 属性面板与画布批注功能界面",
        url: "https://www.figma.com/blog/properties-panel-and-annotations-now-in-figma-make/",
      },
      {
        category: "03 / 业界动态",
        meta: "FRAMER AGENTS",
        title: "Framer Agents 开始补齐真实网站的设计细节",
        description:
          "Framer Agents 新增页面动效、无障碍属性、拖拽交互、复杂浮层、CMS 视频和安全区域等能力，并改善长对话、变量与代码修改记录的稳定性。",
        image: "./assets/vol31-framer-agents.png",
        alt: "Framer Agents 产品更新界面",
        url: "https://www.framer.com/updates",
      },
      {
        category: "04 / 品牌设计",
        meta: "CONFIG IDENTITY",
        title: "Figma 公开 Config 2026 视觉体系",
        description:
          "Figma Brand Studio 围绕演化、流动与协作建立字形、颗粒、模糊渐变和动态构图系统，并使用 Figma Make 批量生成纹理、统一嘉宾素材。",
        image: "./assets/vol31-config-identity.png",
        alt: "Figma Config 2026 品牌视觉体系",
        url: "https://www.figma.com/blog/the-visual-identity-behind-config-2026/",
      },
      {
        type: "wide",
        category: "05 / AI 资讯",
        meta: "TRUST BOUNDARY",
        title: "Google Earth 上线 AI 场景生成，第二天就暂停了",
        description:
          "Google Earth 一度允许用户基于真实卫星、航拍与三维地图素材生成写实场景，但上线仅一天就因政策风险暂停。真实性产品需要比水印更清晰的生成内容边界。",
        image: "./assets/vol31-google-earth.png",
        alt: "Google Earth AI 场景生成能力示意图",
        url: "https://blog.google/products-and-platforms/products/earth/nano-banana-google-earth-image-generation/",
      },
      {
        category: "06 / 产品推荐",
        meta: "MOTION DESIGN",
        title: "Lottie Creator 2.0：浏览器里的轻量动效工作台",
        description:
          "Lottie Creator 2.0 提供时间轴、关键帧、状态机与 Motion Copilot，可在浏览器里制作可编辑的矢量动画，并直接用于网站和 App。",
        image: "./assets/vol31-lottie-creator.png",
        alt: "Lottie Creator 2.0 动效编辑界面",
        url: "https://lottiefiles.com/lottie-creator",
      },
      {
        category: "07 / 产品推荐",
        meta: "VIDEO REVIEW",
        title: "SceneNote：不用注册也能审视频",
        description:
          "SceneNote 支持粘贴视频链接或上传音频，让客户在具体时间点留言、圈选画面和录制语音反馈，还能管理版本并导出剪辑标记。",
        image: "./assets/vol31-scenenote.png",
        alt: "SceneNote 视频审阅与时间点批注界面",
        url: "https://scenenote.visual-tone.com/",
      },
      {
        category: "08 / 设计素材",
        meta: "GSAP SHOWCASE",
        title: "Made With GSAP：专门收集高质量网页动效案例",
        description:
          "Made With GSAP 收录滚动、拖拽、鼠标跟随与循环动画案例，可按交互类型寻找实现参考，适合 Framer、Webflow 和创意网页项目。",
        image: "./assets/vol31-made-with-gsap.png",
        alt: "Made With GSAP 网页动效案例库",
        url: "https://madewithgsap.com/",
      },
      {
        type: "wide",
        category: "09 / 设计素材",
        meta: "VISUAL MATERIALS",
        title: "Grainient v2：渐变、颗粒和 Shader 素材库",
        description:
          "Grainient v2 集合平滑渐变、颗粒纹理、动态背景、AI 背景与实时 Shader 工具，已经从渐变下载站升级为轻量视觉素材引擎。",
        image: "./assets/vol31-grainient.png",
        alt: "Grainient v2 渐变颗粒与 Shader 素材界面",
        url: "https://grainient.supply/",
      },
      {
        category: "10 / 随便看看",
        meta: "KFC × WORKBUDDY",
        title: "KFC 大神卡开始送 WorkBuddy 积分",
        description:
          "肯德基大神卡会员权益中出现 WorkBuddy 1000 积分兑换券。AI 编程工具开始进入餐饮品牌会员体系，跨界得突然，却也很符合“疯狂星期四”的气质。",
        image: "./assets/vol31-kfc-workbuddy.png",
        alt: "肯德基大神卡 WorkBuddy 积分兑换权益",
        url: "https://www.workbuddy.ai/",
      },
    ],
  },
  30: {
    issue: "ISSUE 030",
    range: "07.20—07.26",
    date: "2026 年 7 月 27 日 / 星期一",
    datetime: "2026-07-27",
    likes: 30,
    headline: "碎片带来灵感，<br />整理形成认知，连接构成体系。",
    note: "本刊记录每周体验设计中的发现与思考，为后续知识库建设和设计研究积累素材。",
    source:
      "https://www.yuque.com/zhanglaosan-bz7nq/blot0b/bew8s0rp9hmozr4n?singleDoc",
    lead: {
      category: "01 / 业界动态",
      meta: "AGENT SECURITY",
      title: "Figma 用 AI Agent 守护代码安全",
      description:
        "Figma 公开了 AI Agent 在内部安全研发中的实际应用：在代码编写阶段检查安全策略、审查 Pull Request，并对大型代码库进行自动化审计。",
      image: "./assets/vol30-figma-agent.png",
      alt: "Figma 使用 AI Agent 守护代码安全的视觉配图",
      url: "https://www.figma.com/blog/how-figma-stays-ahead-of-vulnerabilities-with-agents",
    },
    briefing: [
      {
        title: "设计究竟还存在于哪里？",
        tag: "设计观察",
        url: "https://www.designweek.co.uk/where-does-design-reside-now/",
      },
      {
        title: "OpenAI 推出 ChatGPT 小企业计划",
        tag: "AI 资讯",
        url: "https://openai.com/index/introducing-chatgpt-small-business-program/",
      },
      {
        title: "OpenAI Presence：面向企业的语音与聊天 Agent 平台",
        tag: "企业 Agent",
        url: "https://openai.com/index/introducing-openai-presence/",
      },
      {
        title: "LayerProof Mylar 从网页和文档生成可编辑产品动效视频",
        tag: "产品推荐",
        url: "https://layerproof.app/mylar",
      },
    ],
    quote:
      "设计的价值，最终可能还是回到同一个问题：什么应该被创造，什么其实不必存在。",
    stories: [
      {
        type: "wide",
        category: "02 / 设计观察",
        meta: "DESIGN ORG",
        title: "设计究竟还存在于哪里？",
        description:
          "Design Week 讨论 AI 和模板化工具普及后，设计在组织中的位置变化：设计正在进入系统、工具、模板、模型、提示词与约束规则之中。",
        image: "./assets/vol30-design-reside.png",
        alt: "Design Week 关于设计组织位置变化的文章配图",
        url: "https://www.designweek.co.uk/where-does-design-reside-now/",
      },
      {
        category: "03 / AI 资讯",
        meta: "OPENAI PRESENCE",
        title: "OpenAI Presence：面向企业的语音与聊天 Agent 平台",
        description:
          "OpenAI 发布 Presence，用于企业客户服务和内部工作流。未来设计师需要定义的不只是页面，还包括 Agent 的身份、语气、响应边界和人工接管机制。",
        image: "./assets/vol30-openai-presence.png",
        alt: "OpenAI Presence 企业语音与聊天 Agent 平台界面",
        url: "https://openai.com/index/introducing-openai-presence/",
      },
      {
        category: "04 / 产品推荐",
        meta: "WEBSITE TO CODE",
        title: "ditto.site：将网页转换成可编辑的前端代码",
        description:
          "ditto.site 可以读取公开网页的实际渲染结果，并生成组件化的 Next.js 或 Vite 项目，尽可能保留页面结构、设计变量、响应式布局和交互状态。",
        image: "./assets/vol30-ditto-site.png",
        alt: "ditto.site 将网页转换成前端代码的产品界面",
        url: "https://www.ditto.site/",
      },
      {
        type: "wide",
        category: "05 / 设计素材",
        meta: "STORY CANVAS",
        title: "Scriptyard：用无限画布规划故事、脚本与内容结构",
        description:
          "Scriptyard 可以在无限画布上组织人物、地点、场景和叙事结构，适合梳理品牌故事、产品演示脚本、用户旅程、交互叙事和长内容选题。",
        image: "./assets/vol30-scriptyard.png",
        alt: "Scriptyard 空间化故事规划工具界面",
        url: "https://www.minimalhumans.com/scriptyard/",
      },
      {
        type: "feature",
        category: "06 / 随便看看",
        meta: "PRODUCT RESTRAINT",
        title: "Light Flip：一台主动拒绝 AI 和信息流的翻盖手机",
        description:
          "当多数手机都在加入更多 AI、应用与推荐内容时，Light Flip 只保留通话、短信、导航、相机和音乐等基础功能，用克制提醒我们删减也是产品能力。",
        image: "./assets/vol30-light-flip.png",
        alt: "Light Flip 极简翻盖手机产品界面",
        url: "https://www.thelightphone.com/light-flip",
      },
    ],
  },
  29: {
    issue: "ISSUE 029",
    range: "07.13—07.19",
    date: "2026 年 7 月 20 日 / 星期一",
    datetime: "2026-07-20",
    likes: 29,
    headline: "碎片带来灵感，<br />整理形成认知，连接构成体系。",
    note: "本刊记录每周体验设计中的发现与思考，为后续知识库建设和设计研究积累素材。",
    source:
      "https://www.yuque.com/zhanglaosan-bz7nq/blot0b/pg3mz3ogecie3e9u?singleDoc",
    lead: {
      category: "01 / 业界动态",
      meta: "CHATGPT WORK",
      title: "OpenAI：Codex 正式并入 ChatGPT",
      description:
        "OpenAI 宣布将 Codex 正式整合进 ChatGPT，独立入口逐步退出。未来无需再单独使用 Codex，即可在 ChatGPT 中完成代码生成、项目协作与 Agent 工作流。",
      image: "./assets/vol29-openai-codex.webp",
      alt: "OpenAI 将 Codex 并入 ChatGPT 的产品工作流视觉",
      url: "https://openai.com/zh-Hans-CN/index/chatgpt-for-your-most-ambitious-work/",
    },
    briefing: [
      {
        title: "阿里 D20 2026 全球设计院长峰会举办",
        tag: "业界动态",
        url: "https://my.feishu.cn/wiki/W5wiwsm2giIzQckfYo2cUJJnnVh?from=from_copylink",
      },
      {
        title: "苹果开放 iOS 27 / iPadOS 27 官方设计资源",
        tag: "设计资源",
        url: "https://developer.apple.com/design/resources/",
      },
      {
        title: "Qwen3.8-Max Preview 上线，千问平台后台重构",
        tag: "AI 资讯",
        url: "https://platform.qianwenai.com/home",
      },
      {
        title: "Workbox 把 AI Skill 工具箱做成可逛书架",
        tag: "产品推荐",
        url: "https://workbox.xiaoerai.xyz/",
      },
    ],
    quote:
      "好的设计，很多时候不是多做一点，而是换一种更容易被理解、更愿意被体验的表达方式。",
    stories: [
      {
        type: "wide",
        category: "02 / 业界动态",
        meta: "DESIGN SUMMIT",
        title: "阿里 D20 2026 全球设计院长峰会举办",
        description:
          "D20 2026 全球设计院长峰会在杭州举办，AI 创意创作生态的重要玩家齐聚，讨论 AI 创作平台、Agent 工作流与设计生态的下一阶段。",
        image: "./assets/vol29-d20-summit.png",
        alt: "阿里 D20 2026 全球设计院长峰会现场视觉",
        url: "https://my.feishu.cn/wiki/W5wiwsm2giIzQckfYo2cUJJnnVh?from=from_copylink",
      },
      {
        category: "03 / 设计资源",
        meta: "IOS 27 UI KIT",
        title: "苹果开放 iOS 27 / iPadOS 27 官方设计资源",
        description:
          "Apple 更新 Design Resources，正式提供 iOS 27 与 iPadOS 27 的官方设计资源，并支持 Figma 与 Sketch 两种格式下载。",
        image: "./assets/vol29-ios-resources.png",
        alt: "Apple Design Resources 官方资源页面",
        url: "https://developer.apple.com/design/resources/",
      },
      {
        category: "04 / AI 资讯",
        meta: "QWEN PLATFORM",
        title: "Qwen3.8-Max Preview 上线，千问平台同步完成后台重构",
        description:
          "阿里千问上线 Qwen3.8-Max Preview，并完成新版平台后台重构，从模型管理到 API 使用流程都进行了重新设计。",
        image: "./assets/vol29-qwen-platform.png",
        alt: "千问 Qwen 平台后台界面",
        url: "https://platform.qianwenai.com/home",
      },
      {
        type: "wide",
        category: "05 / 产品推荐",
        meta: "AGENT WORKFLOW",
        title: "WorkBuddy：AI Agent 工作流实践教程",
        description:
          "WorkBuddy 通过真实项目展示 Agent 如何协同完成复杂任务，更偏向真实工作流程的拆解，适合希望搭建 AI 工作流的设计师和开发者参考。",
        image: "./assets/vol29-workbuddy.png",
        alt: "WorkBuddy AI Agent 工作流实践教程界面",
        url: "https://codebuddy.work/agents/share/NZrbRhTgtyn3cpj7nvjXbZwGSVD_977mJv3BZegE-gUMzlyfZHRgW5MtpRRToQHK?platform=workbuddy",
      },
      {
        type: "feature",
        category: "06 / 设计细节",
        meta: "COMMUNITY DESIGN",
        title: "VibeLoft：把整个社区设计成一架飞机",
        description:
          "VibeLoft 将社区比喻成一架飞机：用户拥有座位，产品发布成为登机展示，不同频道对应不同机舱功能，形成完整的主题化社区体验。",
        image: "./assets/vol29-vibeloft.png",
        alt: "VibeLoft 飞机主题社区产品界面",
        url: "https://vibeloft.ai/",
      },
    ],
  },
  27: {
    issue: "ISSUE 027",
    range: "06.29—07.05",
    date: "2026 年 7 月 6 日 / 星期一",
    datetime: "2026-07-06",
    likes: 27,
    headline: "碎片带来灵感，<br />整理形成认知，连接构成体系。",
    note: "本刊记录每周体验设计中的发现与思考，为后续知识库建设和设计研究积累素材。",
    source:
      "https://www.yuque.com/zhanglaosan-bz7nq/blot0b/cq88a9w1ng0v6b9g?singleDoc",
    lead: {
      category: "01 / 业界动态",
      meta: "FIGMA SKILLS",
      title: "Figma：用 Skills 让 Design Agent 更懂团队工作方式",
      description:
        "Figma 介绍如何用 Skills 把团队提示词、设计判断、品牌语气、组件规则和上下文沉淀进 Agent 协作流程，让工具逐渐成为承载团队知识与设计规范的协作系统。",
      image: "./assets/vol27-figma-skills.png",
      alt: "Figma Skills 与 Design Agent 协作视觉",
      url: "https://www.figma.com/blog/got-skills-make-the-figma-agent-a-better-collaborator/",
    },
    briefing: [
      {
        title: "阿里据称将禁用 Claude Code，AI 工具选择进入安全合规阶段",
        tag: "AI 合规",
        url: "https://www.reuters.com/world/china/alibaba-ban-claude-code-workplace-over-alleged-backdoor-risks-source-says-2026-07-03/",
      },
      {
        title: "茉莉奶白被判赔 LV 1030 万元",
        tag: "品牌侵权",
        url: "https://global.chinadaily.com.cn/a/202607/02/WS6a466e92a310986e2b4633a5.html",
      },
      {
        title: "Flowly 开源 Agent Core，个人 AI 助手继续向系统操作层演进",
        tag: "AI Agent",
        url: "https://useflowlyapp.com/",
      },
      {
        title: "Quick Sub 2 把视频字幕编辑做得更像设计工具",
        tag: "产品推荐",
        url: "https://apps.apple.com/us/app/quick-sub-2-video-subtitling/id6783561492?mt=12",
      },
    ],
    quote:
      "工具是服务于人的，该怎么用，如何去用，都要结合实际情况去落地。",
    stories: [
      {
        type: "wide",
        category: "02 / AI 资讯",
        meta: "WORKPLACE AI",
        title: "阿里据称将禁用 Claude Code，企业 AI 工具选择进入安全合规阶段",
        description:
          "据 Reuters 报道，阿里将禁止员工在办公环境下使用 Claude Code，并推荐自研工具 Qoder。企业 AI 工具选择开始进入安全、风控与合规共同决定的阶段。",
        image: "./assets/vol27-alibaba-claude.png",
        alt: "阿里据称将禁用 Claude Code 的新闻配图",
        url: "https://www.reuters.com/world/china/alibaba-ban-claude-code-workplace-over-alleged-backdoor-risks-source-says-2026-07-03/",
      },
      {
        category: "03 / 品牌观察",
        meta: "BRAND RISK",
        title: "茉莉奶白被判赔 LV 1030 万元，品牌视觉借势进入高风险区",
        description:
          "LV 诉茉莉奶白商标侵权案一审判决引发关注，茉莉奶白被判赔经济损失及合理开支共 1030 万元。品牌视觉借势的边界正在变得更硬。",
        image: "./assets/vol27-lv-moli.png",
        alt: "茉莉奶白与 LV 商标侵权案报道配图",
        url: "https://global.chinadaily.com.cn/a/202607/02/WS6a466e92a310986e2b4633a5.html",
      },
      {
        category: "04 / AI 资讯",
        meta: "AGENT CORE",
        title: "Flowly 开源 Agent Core，个人 AI 助手继续向系统操作层演进",
        description:
          "Flowly 定位为可运行在桌面和 iPhone 上的个人 AI Agent，并开源 Agent Core。AI 入口正在从网页聊天框迁移到桌面、菜单栏、全局唤起和跨应用操作。",
        image: "./assets/vol27-flowly.png",
        alt: "Flowly 个人 AI Agent 产品界面",
        url: "https://useflowlyapp.com/",
      },
      {
        type: "wide",
        category: "05 / 产品推荐",
        meta: "SUBTITLE TOOL",
        title: "Quick Sub 2：把视频字幕编辑做得更像设计工具",
        description:
          "Quick Sub 2 支持直接在视频画布上拖拽字幕对象，并控制样式、容器、旋转角度和时间轴精度，适合产品演示、教程片段和社媒内容制作。",
        image: "./assets/vol27-quick-sub.png",
        alt: "Quick Sub 2 视频字幕编辑工具界面",
        url: "https://apps.apple.com/us/app/quick-sub-2-video-subtitling/id6783561492?mt=12",
      },
      {
        type: "feature",
        category: "06 / 设计素材",
        meta: "DESIGN PSYCHOLOGY",
        title: "Product Design Psychology：面向产品设计师的心理学电子书",
        description:
          "这本在线电子书从心理学角度理解产品设计，讨论认知偏差、界面感知、用户行为和组织决策，适合作为设计复盘与体验分析资料。",
        image: "./assets/vol27-design-psychology.png",
        alt: "Product Design Psychology 在线电子书页面",
        url: "https://productdesignpsychology.com/",
      },
    ],
  },
  26: {
    issue: "ISSUE 026",
    range: "06.22—06.28",
    date: "2026 年 6 月 29 日 / 星期一",
    datetime: "2026-06-29",
    likes: 26,
    headline: "碎片带来灵感，<br />整理形成认知，连接构成体系。",
    note: "本刊记录每周体验设计中的发现与思考，为后续知识库建设和设计研究积累素材。",
    source:
      "https://www.yuque.com/zhanglaosan-bz7nq/blot0b/wxetrd322mxlctbg?singleDoc",
    lead: {
      category: "01 / 业界动态",
      meta: "CONFIG 2026",
      title: "Config 2026：Figma 将设计、代码、动效与 AI 带到同一画布",
      description:
        "Figma 在 Config 2026 发布 Motion、3D Transforms、Shaders、Code Layers、Agent Skills、Generative Plugins 与 Weave 等能力，设计、开发与 AI 工作流继续靠近。",
      image: "./assets/vol26-figma-config.png",
      alt: "Figma Config 2026 发布的新功能视觉",
      url: "https://www.figma.com/release-notes/?title=config-2026",
    },
    briefing: [
      {
        title: "法国阿尔卑斯 2030 冬奥会会徽发布",
        tag: "品牌识别",
        url: "https://www.olympics.com/ioc/alpes-2030",
      },
      {
        title: "video-use 让 Coding Agent 接管视频剪辑",
        tag: "AI 资讯",
        url: "https://github.com/browser-use/video-use",
      },
      {
        title: "Genspark Design 一句 Prompt 生成 UI 与代码",
        tag: "产品推荐",
        url: "https://www.genspark.ai/agents?type=design",
      },
      {
        title: "Secret 7 先看作品，再揭晓作者",
        tag: "设计细节",
        url: "https://secret-7.co.uk/",
      },
    ],
    quote:
      "好的设计和体验是需要细细打磨的，浏览过程中也会看到越来越多产品开始关注那些容易被忽略的体验细节。",
    stories: [
      {
        type: "wide",
        category: "02 / 品牌识别",
        meta: "ALPES 2030",
        title: "法国阿尔卑斯 2030 冬奥会会徽：把山峰与数字 30 合并",
        description:
          "会徽以连续、倾斜的光线勾勒山峰，并在负形中压缩出「30」，把地点、年份与雪山意象融合为一个可缩放的赛事品牌符号。",
        image: "./assets/vol26-alpes-2030.png",
        alt: "法国阿尔卑斯 2030 冬奥会会徽视觉",
        url: "https://www.olympics.com/ioc/alpes-2030",
      },
      {
        category: "03 / AI 资讯",
        meta: "VIDEO AGENT",
        title: "video-use：让 Coding Agent 接管视频剪辑",
        description:
          "GitHub Trending 项目 video-use 支持 Claude Code、Codex、Gemini CLI 等工具，通过 Python、MoviePy 与 Manim 自动完成剪辑、字幕、动画和导出。",
        image: "./assets/vol26-video-use.png",
        alt: "video-use 项目示意图",
        url: "https://github.com/browser-use/video-use",
      },
      {
        category: "04 / AI 资讯",
        meta: "MODEL PREVIEW",
        title: "OpenAI 预览 GPT-5.6 Sol",
        description:
          "GPT-5.6 Sol Preview 重点放在推理、长上下文理解与工具调用能力上，Sol、Terra、Luna 也开始形成新的模型层级叙事。",
        image: "./assets/vol26-gpt-sol.png",
        alt: "GPT-5.6 Sol Preview 信息视觉",
        url: "https://openai.com/index/previewing-gpt-5-6-sol/",
      },
      {
        type: "wide",
        category: "05 / 产品推荐",
        meta: "AI CANVAS",
        title: "Cowart：开源版 Codex AI 画布工具",
        description:
          "Cowart 将聊天、画布标注与图像编辑结合在一起，用户可以直接圈选和批注修改区域，让 AI 在保留上下文的情况下参与视觉创作。",
        image: "./assets/vol26-cowart.png",
        alt: "Cowart AI 画布工具界面",
        url: "https://github.com/zhongerxin/cowart",
      },
      {
        type: "feature",
        category: "06 / 设计素材",
        meta: "TYPE SYSTEM",
        title: "Rapha 新字体系统：从赛事文化中提炼品牌字体语言",
        description:
          "Rapha 与 Frost 合作推出全新字体系统，将骑行刊物、赛事传单、车衣与技术手册中的视觉语言转译为适用于品牌、界面和编辑设计的现代字体家族。",
        image: "./assets/vol26-rapha-type.png",
        alt: "Rapha 新字体系统视觉样张",
        url: "https://www.frostype.xyz/",
      },
    ],
  },
  25: {
    issue: "ISSUE 025",
    range: "06.15—06.21",
    date: "2026 年 6 月 22 日 / 星期一",
    datetime: "2026-06-22",
    likes: 25,
    headline: "碎片带来灵感，<br />整理形成认知，连接构成体系。",
    note: "本刊记录每周体验设计中的发现与思考，为后续知识库建设和设计研究积累素材。",
    source:
      "https://www.yuque.com/zhanglaosan-bz7nq/blot0b/dwbpgsfpsuu9vfkg?singleDoc",
    lead: {
      category: "01 / 业界动态",
      meta: "BRAND SYSTEM",
      title: "KFC「Bucketverse」补足了品牌系统升级的细节",
      description:
        "JKR 将 KFC 标志性的炸鸡桶从包装符号升级为品牌系统核心资产。新系统把 3D Logo、桶形语言、字体与 Colonel 形象串成可延展的品牌系统。",
      image: "./assets/vol25-kfc.png",
      alt: "KFC Bucketverse 品牌系统升级视觉",
      url: "https://www.jkrglobal.com/work/kfc",
    },
    briefing: [
      {
        title: "Figma Desktop Tab Groups 上线",
        tag: "设计工具",
        url: "https://mp.weixin.qq.com/s/dmuI61Yr5wv_ftNkcmtzzw",
      },
      {
        title: "Figma MCP Server 扩展到 Slides、字体与 Xcode",
        tag: "设计工具",
        url: "https://www.yuque.com/zhanglaosan-bz7nq/blot0b/dwbpgsfpsuu9vfkg?singleDoc",
      },
      {
        title: "支付宝 AI 版开启内测，「阿宝」亮相",
        tag: "AI 资讯",
        url: "https://mp.weixin.qq.com/s/sP5rmaVeG8JuKGVfwKYmbw",
      },
      {
        title: "Taste Lab 提取网站「设计 DNA」",
        tag: "产品推荐",
        url: "https://www.tastelab.xyz/",
      },
    ],
    quote:
      "AI Agent 不再只是读取设计稿，而开始参与演示文档、设计交付、字体还原以及开发协作流程。",
    stories: [
      {
        type: "wide",
        category: "02 / 业界动态",
        meta: "WORKFLOW TABS",
        title: "Figma Desktop Tab Groups：工作流收纳依然是高频需求",
        description:
          "Figma 桌面端 Tab Groups 让多文件、多项目的设计工作流获得更清晰的收纳结构。AI 时代之前，基础整理仍然决定效率。",
        image: "./assets/vol25-figma-tabs.png",
        alt: "Figma Desktop Tab Groups 工作流界面",
        url: "https://mp.weixin.qq.com/s/dmuI61Yr5wv_ftNkcmtzzw",
      },
      {
        category: "03 / 业界动态",
        meta: "MCP WORKFLOW",
        title: "Figma MCP Server 扩展到 Slides、字体、资产导出与 Xcode",
        description:
          "Figma MCP Server 新增 Slides 创建更新、本地字体渲染、download_assets 导出以及 Xcode 工作流支持，设计上下文继续向交付和开发环境靠近。",
        image: "./assets/vol25-figma-mcp.png",
        alt: "Figma MCP Server 更新说明视觉",
        url: "https://www.yuque.com/zhanglaosan-bz7nq/blot0b/dwbpgsfpsuu9vfkg?singleDoc",
      },
      {
        category: "04 / AI 资讯",
        meta: "AI ASSISTANT",
        title: "支付宝 AI 版开启内测，「阿宝」正式亮相",
        description:
          "支付宝 AI 版已支持搜索、问答与生活服务等场景，后续可能继续连接支付、出行、医疗等生态能力。",
        image: "./assets/vol25-alipay-ai.png",
        alt: "支付宝 AI 版阿宝助手界面",
        url: "https://mp.weixin.qq.com/s/sP5rmaVeG8JuKGVfwKYmbw",
      },
      {
        type: "wide",
        category: "05 / 产品推荐",
        meta: "DESIGN DNA",
        title: "Taste Lab：提取任意网站的「设计 DNA」",
        description:
          "Taste Lab 尝试从网站中识别颜色、字体、布局和视觉风格，并服务于 Vibe Coding。效率提升之外，也带来参考、复制与同质化边界的讨论。",
        image: "./assets/vol25-tastelab.png",
        alt: "Taste Lab 网站设计 DNA 提取界面",
        url: "https://www.tastelab.xyz/",
      },
      {
        type: "feature",
        category: "06 / 设计素材",
        meta: "GAME REFERENCE",
        title: "Game Maker’s Sketchbook 2026：游戏视觉参考集",
        description:
          "2026 Game Maker’s Sketchbook 收录游戏概念、环境、图标与 Storyboard 等优秀作品，可作为交互叙事和视觉氛围的参考库。",
        image: "./assets/vol25-game-sketchbook.png",
        alt: "Game Maker’s Sketchbook 2026 游戏视觉作品集",
        url: "https://www.gamemakerssketchbook.com/",
      },
    ],
  },
  24: {
    issue: "ISSUE 024",
    range: "06.08—06.14",
    date: "2026 年 6 月 15 日 / 星期一",
    datetime: "2026-06-15",
    likes: 24,
    headline: "碎片带来灵感，<br />整理形成认知，连接构成体系。",
    note: "本刊记录每周体验设计中的发现与思考，为后续知识库建设和设计研究积累素材。",
    source:
      "https://www.yuque.com/zhanglaosan-bz7nq/blot0b/fyale84a4dp04r2d?singleDoc",
    lead: {
      category: "01 / 业界动态",
      meta: "LOGO REFRESH",
      title: "山姆新 LOGO，更蓝了",
      description:
        "新标识继续保留菱形结构，但蓝色更重、识别更直接。山姆的品牌更新更像一次资产整理：保留熟悉度，同时把零售品牌的视觉触点做得更醒目。",
      image: "./assets/vol24-sams-club.png",
      alt: "山姆会员店新 Logo 与品牌形象",
      url: "https://www.logonews.cn/sams-club-new-logo.html",
    },
    briefing: [
      {
        title: "Apple 在 WWDC26 公布新一代系统与 Siri AI",
        tag: "业界动态",
        url: "https://www.apple.com/newsroom/2026/06/apple-unveils-next-generation-of-apple-intelligence-siri-ai-and-more/",
      },
      {
        title: "Figma MCP Server 进入 Xcode",
        tag: "设计工具",
        url: "https://x.com/figma/status/2064120455808888873?s=20",
      },
      {
        title: "Siri AI 转向屏幕理解与跨应用执行",
        tag: "AI 资讯",
        url: "https://www.apple.com/newsroom/2026/06/apple-introduces-siri-ai-a-profoundly-more-capable-and-personal-assistant/",
      },
      {
        title: "CliperX 把剪贴板历史放进灵动岛",
        tag: "产品推荐",
        url: "https://cliperx.com/",
      },
    ],
    quote:
      "自从开始恢复办公，发现每周的内容素材越来越充实了，逐渐开始用减法来做筛选。",
    stories: [
      {
        type: "wide",
        category: "02 / 业界动态",
        meta: "WWDC 2026",
        title: "Apple 公布新一代系统、Siri AI 与体验改进",
        description:
          "Apple 集中预览多端系统更新，并披露应用启动、照片加载和 AirDrop 等性能提升。系统 AI、跨应用动作与新交互框架被放进同一条产品叙事。",
        image: "./assets/vol24-wwdc26.png",
        alt: "Apple WWDC26 系统与 AI 更新视觉",
        url: "https://www.apple.com/newsroom/2026/06/apple-unveils-next-generation-of-apple-intelligence-siri-ai-and-more/",
      },
      {
        category: "03 / 业界动态",
        meta: "DESIGN TO CODE",
        title: "Figma MCP Server 进入 Xcode",
        description:
          "设计上下文继续靠近开发环境，AI 辅助开发不再只读取截图，而是开始理解组件、变量、资源与设计文件里的结构信息。",
        image: "./assets/vol24-figma-mcp.png",
        alt: "Figma MCP Server 进入 Xcode 的信息图",
        url: "https://x.com/figma/status/2064120455808888873?s=20",
      },
      {
        category: "04 / AI 资讯",
        meta: "SYSTEM AI",
        title: "Siri AI 转向屏幕理解、个人上下文与跨应用执行",
        description:
          "新的 Siri AI 叙事更强调屏幕理解、个人上下文与跨应用执行能力，系统级助手正在从问答入口转向行动入口。",
        image: "./assets/vol24-siri-ai.png",
        alt: "Siri AI 系统级能力升级视觉",
        url: "https://www.apple.com/newsroom/2026/06/apple-introduces-siri-ai-a-profoundly-more-capable-and-personal-assistant/",
      },
      {
        type: "wide",
        category: "05 / 产品推荐",
        meta: "CLIPBOARD FLOW",
        title: "CliperX：把剪贴板历史放进灵动岛",
        description:
          "CliperX 是一款 macOS 剪贴板历史工具，可在灵动岛中快速查看和调用复制内容。小工具的价值，常常来自高频动作的摩擦减少。",
        image: "./assets/vol24-cliperx.png",
        alt: "CliperX 灵动岛剪贴板历史工具界面",
        url: "https://cliperx.com/",
      },
      {
        type: "feature",
        category: "06 / 设计细节",
        meta: "ICON DETAILS",
        title: "WWDC26 后，Apple 系统图标发生了哪些微调",
        description:
          "系统图标的变化通常不是单点更新，而是围绕材质、光感、层级和跨端一致性的持续校准，值得作为设计细节观察样本。",
        image: "./assets/vol24-apple-icons.png",
        alt: "Apple 系统图标微调对比图",
        url: "https://mp.weixin.qq.com/s/w_6b85Y2LDY4kMVec7Y3tQ",
      },
    ],
  },
  23: {
    issue: "ISSUE 023",
    range: "06.01—06.07",
    date: "2026 年 6 月 8 日 / 星期一",
    datetime: "2026-06-08",
    likes: 23,
    headline: "碎片带来灵感，<br />整理形成认知，连接构成体系。",
    note: "本刊记录每周体验设计中的发现与思考，为后续知识库建设和设计研究积累素材。",
    source:
      "https://www.yuque.com/zhanglaosan-bz7nq/blot0b/gal1yi8v5lryn1bn?singleDoc",
    lead: {
      category: "01 / 业界动态",
      meta: "AI NATIVE DESIGN",
      title: "腾讯设计发布两款 AI 设计智能体：Ardot 与 Miora",
      description:
        "Ardot 聚焦企业级产研设协作，Miora 面向创意设计场景。AI 正从辅助工具逐步演变为设计流程中的核心生产力。",
      image: "./assets/vol23-tencent.png",
      alt: "腾讯 AI 开FUN夜与 Miora、Ardot 产品发布画面",
      url: "https://ardot.tencent.com",
    },
    briefing: [
      {
        title: "Figma 新增 Check Designs 设计检查功能",
        tag: "设计工具",
        url: "https://www.figma.com/release-notes/?title=check-designs-catch-whats-off-ship-whats-right",
      },
      {
        title: "苹果 WWDC 2026 预告 AI 将成为核心主题",
        tag: "AI 资讯",
        url: "https://economictimes.indiatimes.com/news/new-updates/apple-wwdc-2026-ios-27-a-smarter-siri-and-new-ai-features-expected/articleshow/131566174.cms?from=mdr",
      },
      {
        title: "QoderWork CN 推出 AI 生产力计划",
        tag: "产品推荐",
        url: "https://qoder.com.cn/referral?referral_code=zsNZa3XLSMV05E8eqPNyhl0ngqAR9p6S",
      },
      {
        title: "Lucky Graphics 综合设计资源库",
        tag: "设计素材",
        url: "https://lucky.graphics/",
      },
    ],
    quote:
      "不用一味追随新工具和新事物，需要自己去感受、理解，然后再运用。",
    stories: [
      {
        type: "wide",
        category: "02 / 业界动态",
        meta: "DESIGN QA",
        title: "Figma 新增 Check Designs 设计检查功能",
        description:
          "自动识别设计稿中的规范问题、组件异常与布局偏差，设计质量管理正在从人工 Review 转向系统化与自动化。",
        image: "./assets/vol23-figma.png",
        alt: "Figma Check Designs 设计检查功能界面",
        url: "https://www.figma.com/release-notes/?title=check-designs-catch-whats-off-ship-whats-right",
      },
      {
        category: "03 / AI 资讯",
        meta: "WWDC 2026",
        title: "Apple Intelligence 与 Siri 能力升级",
        description:
          "跨应用理解、任务执行与个人上下文感知，让 AI 从问答助手走向系统级智能助理。",
        image: "./assets/vol23-wwdc.png",
        alt: "WWDC 2026 预告视觉",
        url: "https://economictimes.indiatimes.com/news/new-updates/apple-wwdc-2026-ios-27-a-smarter-siri-and-new-ai-features-expected/articleshow/131566174.cms?from=mdr",
      },
      {
        category: "04 / AI 资讯",
        meta: "AGENT FIRST",
        title: "微软提出「Apps → Agents」新平台方向",
        description:
          "Project Solara 希望由 AI Agent 替代传统 App，成为用户与系统交互的主要入口。",
        image: "./assets/vol23-solara.png",
        alt: "微软 Project Solara 发布画面",
        url: "https://timesofindia.indiatimes.com/technology/tech-news/build-2026-microsoft-unveils-project-solara-platform-for-ai-agent-devices/articleshow/131475343.cms",
      },
      {
        type: "wide",
        category: "05 / 产品推荐",
        meta: "SCREENSHOT TO DESIGN",
        title: "Refore：截图一键转换为设计稿",
        description:
          "适用于竞品分析与界面研究场景。Screenshot to Design 正在成为设计师值得持续关注的工具方向。",
        image: "./assets/vol23-refore.png",
        alt: "Refore Screenshot to Design 产品页面",
        url: "https://reforeai.cn/screenshot-to-design",
      },
      {
        type: "feature",
        category: "06 / 设计细节",
        meta: "PHYSICAL TOUCHPOINT",
        title: "麦当劳把外卖小票变成了儿童节小游戏",
        description:
          "订单小票被赋予漫画剧情与迷宫玩法。体验设计不只存在于 App 和网页，也存在于用户接触品牌的每一个物理触点。",
        image: "./assets/vol23-mcdonalds.png",
        alt: "麦当劳儿童节迷宫主题互动小票",
        url: "https://www.yuque.com/zhanglaosan-bz7nq/blot0b/gal1yi8v5lryn1bn?singleDoc",
      },
    ],
  },
  22: {
    issue: "ISSUE 022",
    range: "05.25—05.31",
    date: "2026 年 6 月 1 日 / 星期一",
    datetime: "2026-06-01",
    likes: 17,
    headline: "从设计到构建，<br />工具之间的边界正在消失。",
    note: "业界动态、AI 资讯、产品推荐与设计素材，共同构成三号设计周刊 Vol.22。",
    source:
      "https://www.yuque.com/zhanglaosan-bz7nq/blot0b/uwyuq90npgquweg9?singleDoc",
    lead: {
      category: "01 / 业界动态",
      meta: "MATERIAL 3",
      title: "Gmail 图标基于 Material 3 色彩体系更新",
      description:
        "新图标引入 tonal color system，以更柔和的层级与光感统一 Google 产品视觉。品牌图标也在跟随设计系统持续演进。",
      image: "./assets/vol22-gmail.png",
      alt: "Gmail 图标与 Google Material 3 色彩更新",
      url: "https://m3.material.io/",
    },
    briefing: [
      {
        title: "Figma Dev Mode 与 AI 工作流继续收敛",
        tag: "业界动态",
        url: "https://www.yuque.com/zhanglaosan-bz7nq/blot0b/uwyuq90npgquweg9?singleDoc",
      },
      {
        title: "Claude Opus 4.8 强化动态工作流",
        tag: "AI 资讯",
        url: "https://www.yuque.com/zhanglaosan-bz7nq/blot0b/uwyuq90npgquweg9?singleDoc",
      },
      {
        title: "Google 进军 AI 设计工具赛道",
        tag: "AI 资讯",
        url: "https://www.yuque.com/zhanglaosan-bz7nq/blot0b/uwyuq90npgquweg9?singleDoc",
      },
      {
        title: "Phosphor Icons 图标资源库",
        tag: "设计素材",
        url: "https://phosphoricons.com/",
      },
    ],
    quote: "希望周刊对你有帮助。我是老三，我们下周一见。",
    stories: [
      {
        type: "wide",
        category: "02 / 业界动态",
        meta: "DESIGN TO BUILD",
        title: "Figma：从设计到构建的链路继续缩短",
        description:
          "Dev Mode 与 AI 辅助能力持续优化，让设计文件逐步成为可直接用于工程实现的结构化资产。",
        image: "./assets/vol22-figma.png",
        alt: "Figma 从构思到交付的产品工作流",
        url: "https://www.yuque.com/zhanglaosan-bz7nq/blot0b/uwyuq90npgquweg9?singleDoc",
      },
      {
        category: "03 / AI 资讯",
        meta: "DYNAMIC WORKFLOWS",
        title: "AI 开始进入动态工作流阶段",
        description:
          "模型能够根据任务自动规划步骤、调用工具并持续执行，复杂后台操作路径可能被 Agent 重新定义。",
        image: "./assets/vol22-claude.png",
        alt: "2026 年 5 月 AI 模型与 Claude Opus 4.8 数据图",
        url: "https://www.yuque.com/zhanglaosan-bz7nq/blot0b/uwyuq90npgquweg9?singleDoc",
      },
      {
        category: "04 / AI 资讯",
        meta: "GENERATIVE DESIGN",
        title: "Google 推出 AI 设计产品 Pics",
        description:
          "通过自然语言生成海报、营销素材与社交媒体设计稿，并支持后续编辑和协作。",
        image: "./assets/vol22-google-pics.png",
        alt: "Google Pics AI 设计产品视觉",
        url: "https://www.yuque.com/zhanglaosan-bz7nq/blot0b/uwyuq90npgquweg9?singleDoc",
      },
      {
        type: "wide",
        category: "05 / 产品推荐",
        meta: "SAAS DIRECTORY",
        title: "Direct2App：筛选 AI 与 SaaS 产品",
        description:
          "一个聚合和筛选 AI 工具与 SaaS 产品的导航站，也是观察新产品定位与落地页设计的窗口。",
        image: "./assets/vol22-direct2app.png",
        alt: "Direct2App AI 与 SaaS 产品导航页面",
        url: "https://www.yuque.com/zhanglaosan-bz7nq/blot0b/uwyuq90npgquweg9?singleDoc",
      },
      {
        type: "feature",
        category: "06 / 设计素材",
        meta: "DESIGN SYSTEM",
        title: "Figma to DESIGN.md：把设计图层整理成结构化文档",
        description:
          "插件将选中的 Figma 图层或页面整理成 DESIGN.md 草稿，服务于 AI 辅助设计、页面生成与设计系统梳理。",
        image: "./assets/vol22-design-md.png",
        alt: "Figma to DESIGN.md 插件生成的设计系统文档",
        url: "https://www.yuque.com/zhanglaosan-bz7nq/blot0b/uwyuq90npgquweg9?singleDoc",
      },
    ],
  },
};

const select = document.querySelector("#issue-select");
const issueLabel = document.querySelector("[data-issue]");
const rangeLabel = document.querySelector("[data-range]");
const dateLabel = document.querySelector("[data-date]");
const headline = document.querySelector("[data-headline]");
const note = document.querySelector("[data-note]");
const leadLayout = document.querySelector("#lead-layout");
const storyGrid = document.querySelector("#story-grid");
const status = document.querySelector("#issue-status");
const subscribeForm = document.querySelector(".subscribe-form");
const subscribeInput = subscribeForm?.querySelector('input[name="email"]');
const subscribeButton = subscribeForm?.querySelector('button[type="submit"]');
const subscribeMessage = document.querySelector("[data-subscribe-message]");
const subscribeDialog = document.querySelector(".subscribe-dialog");
const subscribeDialogOpen = document.querySelector("[data-open-subscribe]");
const subscribeDialogClose = document.querySelector("[data-close-subscribe]");
const subscribeFrame = document.querySelector("[data-subscribe-frame]");
const storyPreviewDialog = document.querySelector(".story-preview-dialog");
const storyPreviewClose = document.querySelector("[data-preview-close]");
const storyPreviewMedia = document.querySelector("[data-preview-media]");
const storyPreviewCategory = document.querySelector("[data-preview-category]");
const storyPreviewTitle = document.querySelector("[data-preview-title]");
const storyPreviewAuthor = document.querySelector("[data-preview-author]");
const storyPreviewDescription = document.querySelector("[data-preview-description]");
const storyPreviewSource = document.querySelector("[data-preview-source]");
const storyPreviewModule = document.querySelector("[data-preview-module]");
const storyPreviewStyle = document.querySelector("[data-preview-style]");
const storyPreviewLink = document.querySelector("[data-preview-link]");
const reactionPanel = document.querySelector(".reaction-panel");
const reactionButton = document.querySelector(".reaction-button");
const reactionEffects = document.querySelector("[data-reaction-effects]");
const likeLabel = document.querySelector("[data-like-label]");
const likeHint = document.querySelector("[data-like-hint]");

const externalLinkAttributes = 'target="_blank" rel="noreferrer"';
const requestedIssue = new URLSearchParams(window.location.search).get("issue");
const initialIssue =
  requestedIssue && issues[requestedIssue]
    ? requestedIssue
    : select?.value || "36";
if (select) {
  select.value = initialIssue;
}
let currentIssue = initialIssue;
let reactionRequest;
let reactionBusy = false;
let holdAnimationFrame;
let holdStartedAt = 0;
let holdTriggered = false;
let suppressReactionClick = false;
const FEISHU_SUBSCRIBE_URL =
  "https://my.feishu.cn/share/base/form/shrcnYT1QRX7SJYfxSk32tAgblg";
const BASE_LIKE_TOTAL = Object.values(issues).reduce(
  (total, issue) => total + issue.likes,
  0,
);
const HOLD_DURATION = 900;
const CONFETTI_COLORS = [
  "#f54a20",
  "#ffc928",
  "#20bfa9",
  "#4d7cff",
  "#f173b7",
  "#8acb4a",
];

function getStoryModule(category = "") {
  return String(category).replace(/^\d+\s*\/\s*/, "").trim() || "精选内容";
}

function getStorySourceLabel(url = "") {
  try {
    return new URL(url, window.location.href).hostname.replace(/^www\./, "");
  } catch {
    return "原始链接";
  }
}

function createStoryPreviewPayload(item, options = {}) {
  const category = item.category || options.category || item.tag || "Design";
  const url = item.url || options.url || "#";

  return {
    title: item.title || options.title || "未命名内容",
    category: getStoryModule(category),
    author: item.author || options.author || "整理 / 张老三",
    description:
      item.description ||
      options.description ||
      "这条内容来自三号设计周刊，点击跳转入口可查看原始页面。",
    source: item.sourceLabel || options.sourceLabel || getStorySourceLabel(url),
    module: item.module || options.module || getStoryModule(category),
    style: item.meta || item.tag || options.style || "SANHAO WEEKLY",
    image: item.image || options.image || "",
    video: item.video || options.video || "",
    alt: item.alt || item.title || options.alt || "内容预览图",
    url,
  };
}

function getStoryPreviewAttribute(item, options = {}) {
  const payload = createStoryPreviewPayload(item, options);
  return `data-preview-story="${encodeURIComponent(JSON.stringify(payload))}"`;
}

function setStoryPreviewText(node, value) {
  if (node) {
    node.textContent = value || "";
  }
}

function renderStoryPreviewMedia(payload) {
  if (!storyPreviewMedia) return;

  storyPreviewMedia.innerHTML = "";

  if (payload.video) {
    const video = document.createElement("video");
    video.src = payload.video;
    video.controls = true;
    video.playsInline = true;
    video.preload = "metadata";
    if (payload.image) {
      video.poster = payload.image;
    }
    storyPreviewMedia.append(video);
    return;
  }

  if (payload.image) {
    const image = document.createElement("img");
    image.src = payload.image;
    image.alt = payload.alt || payload.title || "内容预览图";
    storyPreviewMedia.append(image);
    return;
  }

  const fallback = document.createElement("div");
  fallback.className = "story-preview__media-empty";
  const label = document.createElement("span");
  label.className = "story-preview__media-empty-label";
  label.textContent = payload.category || "SHORT SIGNALS";
  const title = document.createElement("strong");
  title.className = "story-preview__media-empty-title";
  title.textContent = payload.title || "三号设计周刊";
  const source = document.createElement("small");
  source.className = "story-preview__media-empty-source";
  source.textContent = payload.source || "SANHAO DESIGN WEEKLY";
  fallback.append(label, title, source);
  storyPreviewMedia.append(fallback);
}

function openStoryPreview(payload) {
  if (!storyPreviewDialog) return;

  renderStoryPreviewMedia(payload);
  setStoryPreviewText(storyPreviewCategory, payload.category);
  setStoryPreviewText(storyPreviewTitle, payload.title);
  setStoryPreviewText(storyPreviewAuthor, payload.author);
  setStoryPreviewText(storyPreviewDescription, payload.description);
  setStoryPreviewText(storyPreviewSource, payload.source);
  setStoryPreviewText(storyPreviewModule, payload.module);
  setStoryPreviewText(storyPreviewStyle, payload.style);

  if (storyPreviewLink) {
    storyPreviewLink.href = payload.url || "#";
  }

  if (typeof storyPreviewDialog.showModal === "function") {
    storyPreviewDialog.showModal();
  } else {
    storyPreviewDialog.setAttribute("open", "");
  }
  document.body.classList.add("story-preview-open");
}

function closeStoryPreview() {
  if (!storyPreviewDialog) return;

  if (typeof storyPreviewDialog.close === "function") {
    storyPreviewDialog.close();
  } else {
    storyPreviewDialog.removeAttribute("open");
    document.body.classList.remove("story-preview-open");
  }
}

function normalizeStoryIdentity(value = "") {
  return String(value)
    .toLocaleLowerCase()
    .replace(/[^\p{Letter}\p{Number}]+/gu, "");
}

function getSharedPrefixLength(first, second) {
  const limit = Math.min(first.length, second.length);
  let index = 0;
  while (index < limit && first[index] === second[index]) {
    index += 1;
  }
  return index;
}

function hydrateBriefingItem(item, issue) {
  const candidates = [issue.lead, ...issue.stories];
  const normalizedTitle = normalizeStoryIdentity(item.title);
  let match = candidates.find(
    (candidate) => normalizeStoryIdentity(candidate.title) === normalizedTitle,
  );

  if (!match) {
    match = candidates.find((candidate) => {
      const candidateTitle = normalizeStoryIdentity(candidate.title);
      return (
        (normalizedTitle && candidateTitle && normalizedTitle.includes(candidateTitle)) ||
        (normalizedTitle && candidateTitle && candidateTitle.includes(normalizedTitle)) ||
        getSharedPrefixLength(normalizedTitle, candidateTitle) >= 12
      );
    });
  }

  if (!match && item.url !== issue.source) {
    match = candidates.find((candidate) => candidate.url === item.url);
  }

  if (!match) return item;

  return {
    ...match,
    ...item,
    description: item.description || match.description,
    image: item.image || match.image,
    video: item.video || match.video,
    alt: item.alt || match.alt,
    meta: item.meta || item.tag || match.meta,
  };
}

function renderBriefing(issue) {
  const items = issue.briefing;
  return `
    <aside class="briefing" aria-labelledby="briefing-title">
      <div class="briefing__head">
        <p class="section-label">SHORT SIGNALS</p>
        <h2 id="briefing-title">本期速览</h2>
      </div>
      <ol class="briefing__list">
        ${items
          .map((item, index) => {
            const previewItem = hydrateBriefingItem(item, issue);
            const previewCategory = `短讯 / ${item.tag}`;
            const previewPayload = { ...previewItem, category: previewCategory };
            const thumbnail = previewItem.image
              ? `<img src="${previewItem.image}" alt="" loading="lazy" decoding="async" />`
              : `<i>${String(index + 1).padStart(2, "0")}</i>`;

            return `
              <li>
                <a
                  href="${item.url}"
                  ${externalLinkAttributes}
                  ${getStoryPreviewAttribute(previewPayload, {
                    category: previewCategory,
                    description:
                      "这条内容来自本期速览，点击跳转入口可查看原始页面。",
                    style: "SHORT SIGNALS",
                  })}
                >
                  <span class="briefing__index">${String(index + 1).padStart(2, "0")}</span>
                  <span class="briefing__thumb" aria-hidden="true">${thumbnail}</span>
                  <span class="briefing__copy">
                    <time>${item.tag}</time>
                    <strong>${item.title}</strong>
                  </span>
                </a>
              </li>
            `;
          })
          .join("")}
      </ol>
    </aside>
  `;
}

function renderLead(lead) {
  return `
    <article class="story story--lead">
      <a href="${lead.url}" class="story__link" ${externalLinkAttributes} ${getStoryPreviewAttribute(lead)}>
        <div class="story__media story__media--lead">
          <img
            src="${lead.image}"
            alt="${lead.alt}"
            decoding="async"
            fetchpriority="high"
          />
        </div>
        <div class="story__content">
          <p class="story__eyebrow">
            <span>${lead.category}</span>
            <span>${lead.meta}</span>
          </p>
          <h2>${lead.title}</h2>
          <p class="story__dek">${lead.description}</p>
          <p class="story__byline">整理 / 张老三</p>
        </div>
      </a>
    </article>
  `;
}

function renderStory(story) {
  const typeClass = story.type ? ` story--${story.type}` : "";
  const media = `
    <div class="story__media">
      <img
        src="${story.image}"
        alt="${story.alt}"
        loading="lazy"
        decoding="async"
      />
    </div>
  `;
  const content = `
    <div class="story__content">
      <p class="story__eyebrow">
        <span>${story.category}</span>
        <span>${story.meta}</span>
      </p>
      <h3>${story.title}</h3>
      <p>${story.description}</p>
      ${story.type === "feature" ? '<span class="story__arrow" aria-hidden="true">↗</span>' : ""}
    </div>
  `;

  return `
    <article class="story${typeClass}">
      <a href="${story.url}" class="story__link" ${externalLinkAttributes} ${getStoryPreviewAttribute(story)}>
        ${story.type === "feature" ? `${content}${media}` : `${media}${content}`}
      </a>
    </article>
  `;
}

function renderQuote(text, source) {
  return `
    <article class="story story--quote">
      <a href="${source}" class="story__link" ${externalLinkAttributes}>
        <p class="story__eyebrow">
          <span>LAOSAN'S NOTE</span>
          <span>老三碎碎念</span>
        </p>
        <blockquote>“${text}”</blockquote>
        <span class="story__arrow" aria-hidden="true">↗</span>
      </a>
    </article>
  `;
}

function renderIndex(issue) {
  const topics = [...new Set(issue.briefing.map((item) => item.tag))].join(" · ");
  const featuredCount = String(issue.stories.length + 1).padStart(2, "0");
  const briefingCount = String(issue.briefing.length).padStart(2, "0");

  return `
    <article class="story story--index">
      <p class="section-label">WEEKLY INDEX</p>
      <h3>本期内容索引</h3>
      <div class="weekly-index">
        <div>
          <strong>${featuredCount}</strong>
          <span>篇精选内容</span>
        </div>
        <div>
          <strong>${briefingCount}</strong>
          <span>条短讯速览</span>
        </div>
        <div class="weekly-index__topics">
          <span>覆盖主题</span>
          <strong>${topics}</strong>
        </div>
      </div>
    </article>
  `;
}

function markStoryGridEdges() {
  let occupiedColumns = 0;

  storyGrid.querySelectorAll(":scope > .story").forEach((card) => {
    card.classList.remove("story--row-end");
    const span = card.classList.contains("story--feature")
      ? 3
      : card.classList.contains("story--wide")
        ? 2
        : 1;

    if (occupiedColumns + span > 3) {
      occupiedColumns = 0;
    }
    occupiedColumns += span;

    if (occupiedColumns === 3) {
      card.classList.add("story--row-end");
      occupiedColumns = 0;
    }
  });
}

function renderSourceCard(issue, value) {
  return `
    <article class="story story--source-card">
      <a href="${issue.source}" class="story__link" ${externalLinkAttributes}>
        <p class="story__eyebrow">
          <span>ORIGINAL EDITION</span>
          <span>VOL.${value}</span>
        </p>
        <h3>阅读语雀完整原刊</h3>
        <p>查看全部正文、原始链接与图片说明，保留本期周刊的完整阅读脉络。</p>
        <span class="story__arrow" aria-hidden="true">↗</span>
      </a>
    </article>
  `;
}

function getReactionState(value) {
  const fallback = { liked: false, count: BASE_LIKE_TOTAL };

  try {
    const saved = localStorage.getItem(`sanhao-weekly-like-${value}`);
    const parsed = saved ? JSON.parse(saved) : null;
    const liked = parsed === true || parsed?.liked === true;
    const savedCount = Number(localStorage.getItem("sanhao-weekly-like-total"));
    return {
      liked,
      count:
        Number.isFinite(savedCount) && savedCount >= BASE_LIKE_TOTAL
          ? savedCount
          : BASE_LIKE_TOTAL,
    };
  } catch {
    return fallback;
  }
}

function saveReactionState(value, state) {
  try {
    localStorage.setItem(`sanhao-weekly-like-${value}`, JSON.stringify(state.liked));
    localStorage.setItem("sanhao-weekly-like-total", String(state.count));
  } catch {
    // The interaction still works when storage is unavailable.
  }
}

function normalizeReactionCount(value, fallback = BASE_LIKE_TOTAL) {
  const count = Number(value);
  return Number.isFinite(count) ? Math.max(BASE_LIKE_TOTAL, count) : fallback;
}

function renderReaction(value) {
  const state = getReactionState(value);
  reactionButton?.setAttribute("aria-pressed", String(state.liked));
  const actionLabel = reactionButton?.querySelector("strong");
  if (actionLabel) {
    actionLabel.textContent = state.liked ? "本期已点赞" : "给本期点个赞";
  }
  if (likeLabel) {
    likeLabel.textContent = `周刊累计收到${state.count}个赞`;
  }
  if (likeHint) {
    likeHint.textContent = state.liked
      ? "再次轻点可取消本期点赞"
      : "轻点点赞 · 长按触发礼花";
  }
}

async function syncReaction(value) {
  const request = fetch(`/api/reactions?issue=${encodeURIComponent(value)}`, {
    headers: { accept: "application/json" },
  });
  reactionRequest = request;

  try {
    const response = await request;
    const result = await response.json();
    if (reactionRequest !== request || !response.ok || !result.ok) return;

    saveReactionState(value, {
      liked: Boolean(result.liked),
      count: normalizeReactionCount(result.count),
    });
    if (currentIssue === value) {
      renderReaction(value);
    }
  } catch {
    // Keep the local fallback visible if the shared counter is unavailable.
  }
}

function launchReactionEffect(mode = "small") {
  if (
    !reactionEffects ||
    !reactionPanel ||
    !reactionButton ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return;
  }

  const layerRect = reactionEffects.getBoundingClientRect();
  const iconRect = reactionButton
    .querySelector(".reaction-button__icon")
    ?.getBoundingClientRect();
  if (!iconRect) return;

  const originX = iconRect.left - layerRect.left + iconRect.width / 2;
  const originY = iconRect.top - layerRect.top + iconRect.height / 2;
  const particleCount = mode === "large" ? 72 : 18;
  const fragment = document.createDocumentFragment();
  const shockwave = document.createElement("span");
  shockwave.className = "reaction-shockwave";
  shockwave.style.left = `${originX}px`;
  shockwave.style.top = `${originY}px`;
  fragment.append(shockwave);

  for (let index = 0; index < particleCount; index += 1) {
    const particle = document.createElement("i");
    const isLarge = mode === "large";
    const size = isLarge ? 5 + Math.random() * 8 : 5 + Math.random() * 6;
    particle.className = `reaction-confetti reaction-confetti--${
      isLarge ? "rain" : "burst"
    }`;
    particle.style.setProperty(
      "--color",
      CONFETTI_COLORS[index % CONFETTI_COLORS.length],
    );
    particle.style.setProperty("--size", `${size}px`);
    particle.style.setProperty(
      "--radius",
      Math.random() > 0.78 ? "50%" : "2px",
    );
    particle.style.setProperty(
      "--rotation",
      `${180 + Math.round(Math.random() * 720)}deg`,
    );

    if (isLarge) {
      const startY = 20 + Math.random() * 110;
      particle.style.left = `${4 + Math.random() * 92}%`;
      particle.style.top = `${startY}px`;
      particle.style.setProperty("--drift", `${-90 + Math.random() * 180}px`);
      particle.style.setProperty(
        "--fall-distance",
        `${Math.max(260, originY - startY + Math.random() * 140)}px`,
      );
      particle.style.setProperty("--delay", `${Math.random() * 420}ms`);
      particle.style.setProperty(
        "--duration",
        `${1450 + Math.random() * 850}ms`,
      );
    } else {
      const angle = (-155 + Math.random() * 130) * (Math.PI / 180);
      const distance = 50 + Math.random() * 75;
      particle.style.left = `${originX}px`;
      particle.style.top = `${originY}px`;
      particle.style.setProperty(
        "--burst-x",
        `${Math.cos(angle) * distance}px`,
      );
      particle.style.setProperty(
        "--burst-y",
        `${Math.sin(angle) * distance}px`,
      );
      particle.style.setProperty("--delay", `${Math.random() * 80}ms`);
      particle.style.setProperty(
        "--duration",
        `${600 + Math.random() * 320}ms`,
      );
    }

    fragment.append(particle);
  }

  reactionEffects.append(fragment);
  reactionButton.classList.add("is-celebrating");
  window.setTimeout(
    () => {
      reactionEffects.replaceChildren();
      reactionButton.classList.remove("is-celebrating");
    },
    mode === "large" ? 2800 : 1200,
  );
}

function triggerReactionHaptic() {
  if (!reactionButton) return;

  reactionButton.blur();
  reactionButton.classList.remove("is-tactile");
  void reactionButton.offsetWidth;
  reactionButton.classList.add("is-tactile");
  window.setTimeout(() => {
    reactionButton.classList.remove("is-tactile");
  }, 320);

  try {
    navigator.vibrate?.(18);
  } catch {
    // Desktop browsers use the visual press-and-release feedback instead.
  }
}

function resetHoldState() {
  window.cancelAnimationFrame(holdAnimationFrame);
  holdAnimationFrame = undefined;
  holdStartedAt = 0;
  reactionButton?.classList.remove("is-holding");
}

function startHold(event) {
  if (
    !reactionButton ||
    reactionBusy ||
    getReactionState(currentIssue).liked ||
    (event.pointerType === "mouse" && event.button !== 0)
  ) {
    return;
  }

  holdTriggered = false;
  holdStartedAt = performance.now();
  reactionButton.classList.add("is-holding");
  reactionButton.setPointerCapture?.(event.pointerId);

  const update = (now) => {
    const progress = Math.min(1, (now - holdStartedAt) / HOLD_DURATION);
    if (progress >= 1) {
      holdTriggered = true;
      suppressReactionClick = true;
      resetHoldState();
      updateReaction("large");
      return;
    }

    holdAnimationFrame = window.requestAnimationFrame(update);
  };

  holdAnimationFrame = window.requestAnimationFrame(update);
}

function endHold(event) {
  if (holdStartedAt) {
    resetHoldState();
  }
  if (holdTriggered) {
    event.preventDefault();
  }
}

async function updateReaction(celebration = "small") {
  if (!reactionButton || reactionBusy) return;

  const issue = currentIssue;
  const state = getReactionState(issue);
  const removing = state.liked;
  const optimisticState = {
    liked: !removing,
    count: Math.max(
      BASE_LIKE_TOTAL,
      state.count + (removing ? -1 : 1),
    ),
  };
  reactionBusy = true;
  reactionButton.classList.add("is-busy");
  reactionButton.setAttribute("aria-disabled", "true");
  saveReactionState(issue, optimisticState);
  if (currentIssue === issue) {
    renderReaction(issue);
  }
  if (!removing) {
    triggerReactionHaptic();
    launchReactionEffect(celebration);
  }

  try {
    const response = await fetch("/api/reactions", {
      method: removing ? "DELETE" : "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ issue }),
    });
    const result = await response.json();

    if (!response.ok || !result.ok) {
      throw new Error(result.message || "点赞暂时没有成功，请稍后再试。");
    }

    saveReactionState(issue, {
      liked: Boolean(result.liked),
      count:
        !removing && result.added !== false
          ? Math.max(
              normalizeReactionCount(result.count, optimisticState.count),
              optimisticState.count,
            )
          : normalizeReactionCount(
              result.count,
              Math.max(BASE_LIKE_TOTAL, state.count),
            ),
    });
    if (currentIssue === issue) {
      renderReaction(issue);
    }
  } catch (error) {
    saveReactionState(issue, state);
    if (currentIssue === issue) {
      renderReaction(issue);
    }
    console.error(error);
  } finally {
    reactionBusy = false;
    reactionButton.classList.remove("is-busy");
    reactionButton.removeAttribute("aria-disabled");
  }
}

function renderIssue(value, announce = false) {
  const issue = issues[value];
  currentIssue = value;

  issueLabel.textContent = issue.issue;
  rangeLabel.textContent = issue.range;
  dateLabel.textContent = issue.date;
  dateLabel.dateTime = issue.datetime;
  headline.innerHTML = issue.headline;
  note.textContent = issue.note;
  leadLayout.innerHTML = `${renderLead(issue.lead)}${renderBriefing(issue)}`;
  const openingStories = issue.stories.slice(0, 3).map(renderStory);
  const remainingStories = issue.stories.slice(3).map(renderStory);
  storyGrid.innerHTML = [
    ...openingStories,
    renderQuote(issue.quote, issue.source),
    renderIndex(issue),
    remainingStories[0] || "",
    renderSourceCard(issue, value),
    ...remainingStories.slice(1),
  ].join("");
  markStoryGridEdges();
  status.textContent = `${announce ? "已切换至" : "当前展示"} Vol.${value} · 2026.${issue.range}`;
  document.title = `三号设计周刊 · Vol.${value}`;
  renderReaction(value);
  syncReaction(value);
}

select?.addEventListener("change", (event) => {
  const value = event.target.value;
  const url = new URL(window.location.href);
  url.searchParams.set("issue", value);
  window.history.replaceState({}, "", url);
  renderIssue(value, true);
});

subscribeForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  submitSubscription();
});

subscribeDialogOpen?.addEventListener("click", () => {
  if (!subscribeDialog || !subscribeFrame) return;
  if (!subscribeFrame.src) {
    subscribeFrame.src = FEISHU_SUBSCRIBE_URL;
  }
  subscribeDialog.showModal();
});

subscribeDialogClose?.addEventListener("click", () => {
  subscribeDialog?.close();
});

subscribeDialog?.addEventListener("click", (event) => {
  if (event.target === subscribeDialog) {
    subscribeDialog.close();
  }
});

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-preview-story]");
  if (!trigger) return;
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return;
  }

  event.preventDefault();

  try {
    openStoryPreview(JSON.parse(decodeURIComponent(trigger.dataset.previewStory)));
  } catch (error) {
    console.error("Unable to open story preview.", error);
    window.open(trigger.href, "_blank", "noopener,noreferrer");
  }
});

storyPreviewClose?.addEventListener("click", closeStoryPreview);

storyPreviewDialog?.addEventListener("click", (event) => {
  if (event.target === storyPreviewDialog) {
    closeStoryPreview();
  }
});

storyPreviewDialog?.addEventListener("close", () => {
  document.body.classList.remove("story-preview-open");
  if (storyPreviewMedia) {
    storyPreviewMedia.innerHTML = "";
  }
});

async function submitSubscription() {
  if (!subscribeForm || !subscribeInput || !subscribeButton) return;

  const formData = new FormData(subscribeForm);
  const email = String(formData.get("email") || "").trim();
  const website = String(formData.get("website") || "").trim();

  if (website) {
    setSubscribeMessage("订阅成功，下一期更新会发到这个邮箱。");
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    setSubscribeMessage("请填写有效的邮箱地址。", true);
    subscribeInput.focus();
    return;
  }

  const endpoint = subscribeForm.dataset.subscribeEndpoint || "/api/subscribe";
  const originalButtonText = subscribeButton.textContent;
  subscribeButton.disabled = true;
  subscribeButton.textContent = "提交中...";
  setSubscribeMessage("");

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        issue: currentIssue,
        source: window.location.href,
      }),
    });
    const result = await response.json().catch(() => ({}));

    if (!response.ok || !result.ok) {
      throw new Error(result.message || "订阅暂时没有成功，请稍后再试。");
    }

    subscribeForm.reset();
    setSubscribeMessage(result.message || "订阅成功，下一期更新会发到这个邮箱。");
    status.textContent = "订阅成功，邮箱已写入订阅列表。";
  } catch (error) {
    setSubscribeMessage(error.message, true);
  } finally {
    subscribeButton.disabled = false;
    subscribeButton.textContent = originalButtonText;
  }
}

function setSubscribeMessage(message, isError = false) {
  if (!subscribeMessage) return;
  subscribeMessage.textContent = message;
  subscribeMessage.classList.toggle("is-error", Boolean(isError));
}

reactionButton?.addEventListener("pointerdown", startHold);
reactionButton?.addEventListener("pointerup", endHold);
reactionButton?.addEventListener("pointercancel", endHold);
reactionButton?.addEventListener("lostpointercapture", endHold);
reactionButton?.addEventListener("contextmenu", (event) => {
  if (holdStartedAt || holdTriggered) {
    event.preventDefault();
  }
});
reactionButton?.addEventListener("click", (event) => {
  if (suppressReactionClick) {
    suppressReactionClick = false;
    holdTriggered = false;
    event.preventDefault();
    return;
  }
  updateReaction("small");
});

renderIssue(initialIssue);
