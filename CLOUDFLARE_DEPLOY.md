# Cloudflare Pages 部署配置

## 自动部署（推荐）

### 步骤 1：登录 Cloudflare

访问 https://pages.cloudflare.com/ 并登录

### 步骤 2：连接 GitHub 仓库

1. 点击 "Create a project"
2. 选择 "Connect to Git"
3. 选择 `rao5201/CHXWAI` 仓库
4. 点击 "Begin setup"

### 步骤 3：配置构建设置

| 设置项 | 值 |
|--------|-----|
| Project name | `chxwai` |
| Production branch | `main` |
| Build command | 留空（静态网站无需构建） |
| Build output directory | `/` (根目录) |

### 步骤 4：环境变量（可选）

如需自定义域名，可在设置中添加：

```
CUSTOM_DOMAIN=chxwai.yourdomain.com
```

### 步骤 5：保存并部署

点击 "Save and Deploy"，Cloudflare Pages 会自动：
- 检测 HTML/CSS/JS 文件
- 部署到全球 CDN
- 分配免费域名：`chxwai.pages.dev`

---

## 手动部署

### 使用 Wrangler CLI

```bash
# 安装 Wrangler
npm install -g wrangler

# 登录 Cloudflare
wrangler login

# 部署项目
cd CHXWAI
wrangler pages deploy . --project-name=chxwai
```

---

## 自定义域名

### 步骤 1：在 Cloudflare Pages 设置中添加域名

1. 进入项目设置
2. 点击 "Custom domains"
3. 输入你的域名（如 `chxwai.example.com`）
4. 按照提示配置 DNS

### 步骤 2：配置 DNS 记录

在域名 DNS 设置中添加 CNAME 记录：

```
类型：CNAME
名称：chxwai
目标：chxwai.pages.dev
TTL: Auto
```

---

## 部署后的 URL

- **生产环境**: https://chxwai.pages.dev
- **预览环境**: 每次推送都会生成预览 URL

---

## 自动预览部署

Cloudflare Pages 会为每个 Git 推送创建预览部署：

1. Push 到分支 → 生成预览 URL
2. 创建 Pull Request → 自动评论预览链接
3. 合并到 main → 自动部署到生产环境

---

## 性能优化建议

### 1. 启用缓存

在 `index.html` 的 `<head>` 中添加：

```html
<meta http-equiv="Cache-Control" content="max-age=31536000, public">
```

### 2. 启用压缩

Cloudflare Pages 自动启用 Gzip/Brotli 压缩

### 3. 配置 CDN 缓存规则

在 Cloudflare 仪表板设置：
- HTML 文件：缓存 1 小时
- CSS/JS 文件：缓存 1 年
- 图片：缓存 1 年

---

## 监控与分析

### 1. Cloudflare Analytics

访问 https://pages.cloudflare.com/ 查看：
- 访问量统计
- 带宽使用
- 请求分布

### 2. 添加 Google Analytics

在 `index.html` 的 `<head>` 中添加：

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 故障排查

### 问题 1：页面显示 404

**原因**：文件路径错误
**解决**：检查 HTML 文件中的相对路径

### 问题 2：样式不加载

**原因**：CSS 文件路径错误
**解决**：确保 `styles.css` 与 HTML 文件在同一目录

### 问题 3：部署失败

**原因**：仓库权限问题
**解决**：重新授权 Cloudflare 访问 GitHub 仓库

---

## 部署检查清单

- [ ] GitHub 仓库已连接
- [ ] 构建配置已设置（Build command: 空，Output directory: /）
- [ ] 生产分支设置为 `main`
- [ ] 项目名称设置为 `chxwai`
- [ ] 自定义域名（可选）
- [ ] Google Analytics（可选）
- [ ] 测试所有页面链接
- [ ] 测试移动端响应式

---

**部署完成后访问**: https://chxwai.pages.dev

**最后更新**: 2026-04-08
