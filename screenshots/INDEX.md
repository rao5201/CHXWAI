# CHXWAI 项目截图索引

## 占位图文件（当前使用）

| 文件 | 尺寸 | 说明 | 使用位置 |
|------|------|------|----------|
| `placeholder-cli.svg` | 800x600 | 命令行界面占位图 | [首页](index.html) |
| `placeholder-web.svg` | 800x600 | 网页界面占位图 | [首页](index.html) |
| `placeholder-config.svg` | 800x600 | 配置管理界面占位图 | [首页](index.html) |
| `placeholder-knowledge.svg` | 800x600 | 知识库管理界面占位图 | [首页](index.html) |

---

## 如何替换为真实截图

### 步骤 1：截取真实界面

参考 [SCREENSHOTS.md](../SCREENSHOTS.md) 的指南截取真实界面。

### 步骤 2：保存截图

将截图保存到本目录，建议命名：
- `screenshot-cli.png` - 命令行界面
- `screenshot-web.png` - 网页界面
- `screenshot-config.png` - 配置管理界面
- `screenshot-knowledge.png` - 知识库管理界面

### 步骤 3：更新 HTML

编辑 [index.html](../index.html)，将占位图替换为真实截图：

```html
<!-- 替换前 -->
<img src="screenshots/placeholder-cli.svg" alt="命令行界面">

<!-- 替换后 -->
<img src="screenshots/screenshot-cli.png" alt="命令行界面">
```

### 步骤 4：提交到 GitHub

```bash
git add screenshots/
git commit -m "feat: 添加真实项目截图"
git push
```

---

## 截图要求

### 格式
- **推荐**: PNG（无损压缩，适合界面截图）
- **备选**: JPG（文件更小，但有损）
- **矢量**: SVG（仅用于占位图）

### 尺寸
- **最小**: 800x600
- **推荐**: 1920x1080 或更高
- **比例**: 16:9 或 4:3

### 质量
- 文字清晰可读
- 色彩真实
- 无模糊或锯齿

---

## 截图内容建议

### 1. 命令行界面
**展示内容**:
- 启动成功提示
- 2-3 轮对话
- 插件调用示例
- 知识库操作

**示例对话**:
```
🦞 茶海虾王 V3.1 启动成功...

你：你好
AI: 你好！我是茶海虾王 AI 助手，有什么可以帮助你的吗？

你：帮我查一下北京的天气
AI: 正在查询北京天气...
    北京今天晴朗，气温 15-25°C，空气质量优。

你：记住了，我喜欢蓝色
AI: 好的，我已经记住你喜欢的颜色是蓝色。
```

### 2. 网页界面
**展示内容**:
- 完整的浏览器窗口
- 对话区域和输入框
- 至少 2 轮对话
- 发送按钮可见

### 3. 配置管理界面
**展示内容**:
- API Key 配置（请打码）
- 模型选择（本地/云端）
- 语言设置
- 温度参数
- 保存按钮

### 4. 知识库管理界面
**展示内容**:
- 知识列表（3-5 条）
- 添加知识按钮
- 删除操作按钮
- 统计信息

---

## 截图工具推荐

### Windows
- **Snipaste** - 免费、轻量、功能强大
- **Windows 自带截图** - Win+Shift+S
- **OBS Studio** - 可录制 GIF 动图

### macOS
- **截图** - Cmd+Shift+4
- **CleanShot X** - 付费但功能强大
- **Gifski** - 录制 GIF

### Linux
- **Flameshot** - 功能丰富的截图工具
- **Shutter** - 老牌的截图工具
- **Spectacle** - KDE 截图工具

---

## 截图优化建议

### 1. 清理敏感信息
- API Key 打码
- 个人信息打码
- 路径中的用户名打码

### 2. 调整终端主题
- 使用深色主题
- 字体大小适中（14-16px）
- 对比度适中

### 3. 调整浏览器窗口
- 隐藏书签栏（更多展示空间）
- 使用开发者工具模拟尺寸
- 关闭无关的标签页

### 4. 统一风格
- 所有截图使用相同的终端主题
- 所有截图使用相同的浏览器
- 保持光线和角度一致

---

## 高级截图技巧

### 添加标注
使用工具添加箭头、文字说明：
- Snipaste（Windows）
- Sketch（macOS）
- GIMP（跨平台）

### 添加阴影
给截图添加阴影效果，提升质感：
```bash
# 使用 ImageMagick
convert screenshot.png \( +clone -background black -shadow 80x5+5+5 \) +swap -background none -layers merge +repage screenshot-shadow.png
```

### 组合截图
将多张截图组合成一张：
- Photoshop
- GIMP
- Canva（在线）

---

## 截图更新日志

| 日期 | 操作 | 文件 |
|------|------|------|
| 2026-04-08 | 创建 SVG 占位图 | placeholder-*.svg |
| TBD | 替换为真实截图 | screenshot-*.png |

---

**最后更新**: 2026-04-08
