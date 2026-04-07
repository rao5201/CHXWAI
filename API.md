# CHXWAI API 文档

完整的 API 接口说明，帮助开发者集成和扩展功能。

---

## 基础信息

**Base URL**: `http://localhost:5000/api`

**认证方式**: 目前无需认证（生产环境建议添加 API Key）

**数据格式**: JSON

---

## 对话接口

### POST /api/chat

发送消息并获取 AI 回复

**请求参数**:

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| message | string | 是 | 用户发送的消息内容 |
| conversation_id | string | 否 | 会话 ID，用于多轮对话上下文 |
| stream | boolean | 否 | 是否启用流式输出（默认 false） |

**请求示例**:

```bash
curl -X POST http://localhost:5000/api/chat \
  -H "Content-Type: application/json" \
  -d '{
    "message": "你好",
    "conversation_id": "550e8400-e29b-41d4-a716-446655440000",
    "stream": false
  }'
```

**响应示例**:

```json
{
  "success": true,
  "data": {
    "reply": "你好！我是茶海虾王 AI 助手，有什么可以帮助你的吗？",
    "conversation_id": "550e8400-e29b-41d4-a716-446655440000",
    "timestamp": "2026-04-08T03:00:00Z",
    "model": "cloud",
    "tokens_used": 45
  }
}
```

**错误响应**:

```json
{
  "success": false,
  "error": {
    "code": "INVALID_MESSAGE",
    "message": "消息内容不能为空"
  }
}
```

---

## 知识库接口

### GET /api/knowledge

获取知识库中的所有条目

**请求参数**: 无

**响应示例**:

```json
{
  "success": true,
  "data": {
    "entries": [
      {
        "id": 1,
        "key": "user_name",
        "value": "小明",
        "created_at": "2026-04-08T02:00:00Z"
      },
      {
        "id": 2,
        "key": "user_preference",
        "value": "喜欢蓝色",
        "created_at": "2026-04-08T02:05:00Z"
      }
    ],
    "total": 2
  }
}
```

---

### GET /api/knowledge/:key

根据键名获取知识库条目

**请求参数**:

| 参数 | 类型 | 位置 | 说明 |
|------|------|------|------|
| key | string | path | 知识的键名 |

**请求示例**:

```bash
curl http://localhost:5000/api/knowledge/user_name
```

**响应示例**:

```json
{
  "success": true,
  "data": {
    "id": 1,
    "key": "user_name",
    "value": "小明",
    "created_at": "2026-04-08T02:00:00Z"
  }
}
```

---

### POST /api/knowledge

添加或更新知识库条目（原子写入）

**请求参数**:

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| key | string | 是 | 知识的键名 |
| value | string | 是 | 知识的值 |

**请求示例**:

```bash
curl -X POST http://localhost:5000/api/knowledge \
  -H "Content-Type: application/json" \
  -d '{
    "key": "user_age",
    "value": "25"
  }'
```

**响应示例**:

```json
{
  "success": true,
  "data": {
    "id": 3,
    "key": "user_age",
    "value": "25",
    "created_at": "2026-04-08T03:10:00Z"
  },
  "message": "知识已成功保存"
}
```

---

### DELETE /api/knowledge/:key

删除知识库条目

**请求参数**:

| 参数 | 类型 | 位置 | 说明 |
|------|------|------|------|
| key | string | path | 知识的键名 |

**请求示例**:

```bash
curl -X DELETE http://localhost:5000/api/knowledge/user_name
```

**响应示例**:

```json
{
  "success": true,
  "message": "知识已成功删除"
}
```

---

## 插件接口

### GET /api/plugins

获取所有已安装的插件列表

**响应示例**:

```json
{
  "success": true,
  "data": {
    "plugins": [
      {
        "name": "weather",
        "version": "1.0.0",
        "enabled": true,
        "description": "天气查询插件"
      },
      {
        "name": "price",
        "version": "1.0.0",
        "enabled": true,
        "description": "价格查询插件"
      }
    ],
    "total": 2
  }
}
```

---

### GET /api/plugins/:name

获取指定插件的详细信息

**请求示例**:

```bash
curl http://localhost:5000/api/plugins/weather
```

**响应示例**:

```json
{
  "success": true,
  "data": {
    "name": "weather",
    "version": "1.0.0",
    "enabled": true,
    "description": "天气查询插件",
    "author": "CHXWAI Team",
    "commands": ["天气", "气温", "forecast"],
    "settings": {
      "default_city": "北京",
      "unit": "celsius"
    }
  }
}
```

---

### POST /api/plugins/:name/toggle

启用/禁用插件

**请求参数**:

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| enabled | boolean | 是 | true=启用，false=禁用 |

**请求示例**:

```bash
curl -X POST http://localhost:5000/api/plugins/weather/toggle \
  -H "Content-Type: application/json" \
  -d '{"enabled": false}'
```

**响应示例**:

```json
{
  "success": true,
  "message": "插件 weather 已禁用"
}
```

---

## 系统接口

### GET /api/status

获取系统状态信息

**响应示例**:

```json
{
  "success": true,
  "data": {
    "version": "3.1.0",
    "status": "running",
    "uptime": 3600,
    "model": {
      "type": "cloud",
      "status": "connected"
    },
    "memory": {
      "used": "45MB",
      "total": "512MB"
    }
  }
}
```

---

### GET /api/logs

获取系统日志（需要管理员权限）

**请求参数**:

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| level | string | 否 | 日志级别 (info/warn/error) |
| limit | number | 否 | 返回条数（默认 50） |

**响应示例**:

```json
{
  "success": true,
  "data": {
    "logs": [
      {
        "level": "info",
        "message": "系统启动成功",
        "timestamp": "2026-04-08T02:00:00Z"
      },
      {
        "level": "info",
        "message": "插件 weather 已加载",
        "timestamp": "2026-04-08T02:00:01Z"
      }
    ],
    "total": 2
  }
}
```

---

## 错误码说明

| 错误码 | 说明 | HTTP 状态码 |
|--------|------|------------|
| INVALID_MESSAGE | 消息内容无效 | 400 |
| CONVERSATION_NOT_FOUND | 会话不存在 | 404 |
| KNOWLEDGE_NOT_FOUND | 知识条目不存在 | 404 |
| PLUGIN_NOT_FOUND | 插件不存在 | 404 |
| INTERNAL_ERROR | 服务器内部错误 | 500 |
| RATE_LIMIT_EXCEEDED | 请求频率超限 | 429 |

---

## 使用示例

### Python 示例

```python
import requests

# 发送对话
response = requests.post('http://localhost:5000/api/chat', json={
    'message': '你好'
})
data = response.json()
print(data['data']['reply'])

# 添加知识
requests.post('http://localhost:5000/api/knowledge', json={
    'key': 'user_name',
    'value': '小明'
})

# 查询知识
response = requests.get('http://localhost:5000/api/knowledge/user_name')
print(response.json()['data']['value'])
```

### JavaScript 示例

```javascript
// 发送对话
const response = await fetch('http://localhost:5000/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: '你好' })
});
const data = await response.json();
console.log(data.data.reply);

// 添加知识
await fetch('http://localhost:5000/api/knowledge', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ key: 'user_name', value: '小明' })
});
```

---

**最后更新**: 2026-04-08
