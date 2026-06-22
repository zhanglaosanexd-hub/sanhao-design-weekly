# 三号设计周刊

当前版本：`v0.2.2`

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
- 订阅表单目前是视觉原型，不会实际收集邮箱。
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
