# 三号设计周刊

当前版本：`v0.3.0`

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

## 飞书订阅收集配置

订阅链路：

```text
网站订阅表单 → Cloudflare Pages Function → 飞书多维表格
```

不要在前端直接请求飞书接口，因为 `app_secret` 会暴露给所有访问者。当前项目已经内置：

- `POST /api/subscribe`：新增或更新订阅记录。
- `GET /api/unsubscribe?token=...`：将订阅状态改为已退订。

### 1. 建议使用飞书多维表格

在飞书中新建一个多维表格，表名可用：`三号设计周刊订阅表`。

建议字段如下，字段名需要保持一致：

| 字段名 | 类型建议 | 说明 |
| --- | --- | --- |
| 邮箱 | 文本 | 订阅邮箱 |
| 订阅时间 | 日期 | 首次或最近一次订阅时间 |
| 订阅状态 | 单选或文本 | `已订阅` / `已退订` |
| 是否退订 | 复选框 | 退订后为 true |
| 退订时间 | 日期 | 用户退订时间 |
| 退订令牌 | 文本 | 用于退订链接匹配记录 |
| 来源页面 | 文本 | 用户订阅时所在页面 |
| 来源期数 | 文本 | 用户订阅时正在浏览的期数 |
| 用户代理 | 文本 | 浏览器信息，用于排查异常提交 |
| 更新时间 | 日期 | 最近一次写入时间 |

如果想在“飞书文档”中查看，可以把这个多维表格嵌入到文档里；数据仍然由多维表格承接，更稳定。

### 2. 创建飞书自建应用

在飞书开放平台创建企业自建应用，获取：

- `App ID`
- `App Secret`

同时给应用开通多维表格相关权限，并把应用添加到目标多维表格的协作者中，确保它有编辑权限。

### 3. 在 Cloudflare Pages 配环境变量

进入 Cloudflare Pages 项目：

```text
Settings → Environment variables → Production
```

添加以下变量：

```text
FEISHU_APP_ID=你的飞书 App ID
FEISHU_APP_SECRET=你的飞书 App Secret
FEISHU_BITABLE_APP_TOKEN=多维表格 app_token
FEISHU_BITABLE_TABLE_ID=表格 table_id
```

保存后重新部署一次。配置完成前，表单会提示“订阅服务正在配置中”，不会把密钥暴露到前端。

后续发送邮件时，可以把退订链接写成：

```text
https://你的域名/api/unsubscribe?token=退订令牌
```

用户打开后，飞书表格中的 `订阅状态`、`是否退订`、`退订时间` 会被更新。

## 日常维护流程

### 发布新一期

1. 将新图片放入 `assets/`，使用 `vol24-名称.png` 这样的命名。
2. 在 `script.js` 的 `issues` 对象顶部新增一期数据。
3. 在 `index.html` 的 `#issue-select` 中新增选项，并设置为 `selected`。
4. 修改页面初始标题、日期与默认期数。
5. 本地预览并检查桌面端、手机端和外部链接。
6. 提交并推送：

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
├── index.html     # 页面结构和期数选项
├── styles.css     # 页面视觉和响应式样式
├── script.js      # 周刊数据和交互逻辑
├── VERSION        # 当前版本
└── CHANGELOG.md   # 版本记录
```
