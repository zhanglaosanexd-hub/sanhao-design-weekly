# 三号设计周刊

当前版本：`v0.4.0`

纯 HTML、CSS、JavaScript 静态网站，不依赖框架、数据库或付费服务器。

## 本地预览

在终端进入项目目录：

```bash
cd /Users/laosan/Documents/demo/sanhao-design-weekly
python3 -m http.server 4173
```

浏览器访问：

```text
http://localhost:4173
```

结束预览时在终端按 `Control + C`。

## 推荐上线方式

使用“GitHub 私有仓库 + Cloudflare Pages Git 自动部署”。

### 1. 创建独立 GitHub 仓库

建议仓库名称：`sanhao-design-weekly`

仓库可设置为 Private。不要把上一级 `demo` 目录整体上传，因为其中还有其他工程。

首次上传时，在本项目目录执行：

```bash
git init
git add .
git commit -m "release: v0.2.0"
git branch -M main
git remote add origin https://github.com/你的用户名/sanhao-design-weekly.git
git push -u origin main
git tag v0.2.0
git push origin v0.2.0
```

### 2. 连接 Cloudflare Pages

1. 登录 Cloudflare，进入 `Workers & Pages`。
2. 选择 `Create application` > `Pages` > `Import an existing Git repository`。
3. 授权 GitHub，并选择 `sanhao-design-weekly`。
4. Production branch 填写 `main`。
5. Build command 填写 `exit 0`。
6. Build output directory 填写 `.`。
7. 保存并部署。

部署完成后会获得免费地址：

```text
https://你的项目名.pages.dev
```

以后每次向 `main` 分支推送代码，Cloudflare 会自动更新线上网站。

## 点赞累计配置

点赞数据由 Cloudflare D1 保存，Pages 项目需要配置生产环境绑定：

```text
变量名：REACTIONS_DB
数据库：sanhao-weekly-reactions
```

`functions/api/reactions.js` 会用匿名设备 Cookie 与期数组成唯一记录，因此同一浏览器每一期只保留一条点赞记录。用户可以再次轻点取消当前期点赞，取消后也可以重新点赞。页面显示的“周刊累计收到 xxx 个赞”是各期基础点赞数与 D1 真实点赞记录之和。新增期数时，需要同步更新该文件中的 `BASE_LIKE_TOTAL`。

## 飞书订阅收集配置

订阅链路：

```text
网站页面内订阅弹窗 → 飞书多维表格表单 → 飞书多维表格
```

当前线上版本采用飞书多维表格的表单视图收集邮箱。访问者点击网站底部的“填写邮箱订阅”后，飞书表单会在当前页面的弹窗中打开，不需要跳转新标签页。这样不需要额外服务器，也不会把订阅名单公开给访问者。

项目仍保留备用 API：

- `POST /api/subscribe`：新增或更新订阅记录。
- `GET /api/unsubscribe?token=...`：将订阅状态改为已退订。

如果以后要恢复 API 写入，不要在前端直接请求飞书接口，因为 `app_secret` 会暴露给所有访问者。

### 1. 飞书多维表格

在飞书中新建或维护一个多维表格，表名可用：`三号设计周刊订阅表`。

建议字段如下，字段名需要保持一致：

| 字段名 | 类型建议 | 说明 |
| --- | --- | --- |
| 邮箱 | 文本 | 订阅邮箱 |
| 订阅时间 / 创建时间 | 日期 | 首次订阅时间 |
| 订阅状态 | 单选或文本 | `已订阅` / `已退订` |
| 是否退订 | 复选框 | 退订后为 true |
| 退订时间 | 日期 | 用户退订时间 |
| 来源 | 文本 | 可选，用于区分来自网站或其他渠道 |

### 2. 飞书表单视图

在订阅表中创建一个表单视图：

1. 表单至少包含 `邮箱` 字段，并设为必填。
2. 表单不要向访问者展示 `订阅状态` 和 `订阅时间`。
3. 创建“添加新记录时”的自动化，将 `订阅状态` 写为 `已订阅`，将 `订阅时间` 写为 `NOW()`。
4. 表单发布后复制分享链接。
5. 将 `script.js` 中的 `FEISHU_SUBSCRIBE_URL` 改成新的表单链接。

当前表单链接：

```txt
https://my.feishu.cn/share/base/form/shrcnYT1QRX7SJYfxSk32tAgblg
```

## 51.LA 访问统计

页面通过 `/analytics` Pages Function 加载 51.LA V6 官方统计 SDK。统计标识不写入仓库，需要在 Cloudflare Pages 的生产环境配置：

```text
LA51_ID
LA51_CK
```

未配置这两个变量时，统计功能保持关闭，因此公开仓库被他人克隆后不会把访问计入本站。变量值仍会在访问者浏览器运行时可见，这是前端统计 SDK 的正常工作方式，不应把它当作密码使用。

当前仅启用基础访问统计，未开启事件分析、SPA 模式和屏幕录制。

## RSS 订阅

RSS 地址：

```text
https://sanhao-design-weekly.pages.dev/feed.xml
```

网页 `<head>` 已配置 RSS 自动发现，底部也提供可见订阅入口。每一期使用 `https://sanhao-design-weekly.pages.dev/?issue=期数` 作为固定链接。

## 日常维护流程

### 发布新一期

1. 将新图片放入 `assets/`，使用 `vol24-名称.png` 这样的命名。
2. 在 `script.js` 的 `issues` 对象顶部新增一期数据。
3. 在 `index.html` 的 `#issue-select` 中新增选项，并设置为 `selected`。
4. 修改页面初始标题、日期与默认期数。
5. 在 `feed.xml` 顶部追加新一期 `<item>`，并更新 `lastBuildDate`。
6. 本地预览并检查桌面端、手机端、RSS 和外部链接。
7. 提交并推送：

```bash
git add .
git commit -m "content: publish vol.24"
git push
```

### 发布新版本

同时修改：

- `VERSION`
- `index.html` 中的 `application-version`
- `CHANGELOG.md`

然后创建版本标签：

```bash
git tag v0.3.0
git push origin v0.3.0
```

## 当前功能边界

- 点赞数保存在访客浏览器的 `localStorage`，不是所有访客共享的真实总数。
- 订阅表单已接入 Cloudflare Pages Function；需要配置飞书环境变量后才会实际写入表格。
- 网站内容和图片会公开访问，不要提交隐私资料或无授权素材。
- `assets/qr-official-account-code.png` 使用公众号二维码，并与微信入群卡保持一致比例。
- `assets/qr-wechat-personal.png` 使用个人微信二维码，用户发送“设计交流”后入群。

如果以后需要真实点赞或邮件订阅，可以继续使用 Cloudflare Workers、D1 等带免费额度的服务扩展。

## 文件结构

```text
.
├── assets/        # 周刊图片
│   └── fonts/     # 网站内嵌字体
├── functions/     # Cloudflare Pages Functions
│   └── analytics.js # 从环境变量加载 51.LA
├── index.html     # 页面结构和期数选项
├── feed.xml       # RSS 2.0 订阅源
├── styles.css     # 页面视觉和响应式样式
├── script.js      # 周刊数据和交互逻辑
├── VERSION        # 当前版本
└── CHANGELOG.md   # 版本记录
```
