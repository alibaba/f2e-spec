---
group: 工程实践
order: 2.3
---

# HTTP JSON API 规范

HTTP JSON API 是一种基于 HTTP 协议的 API 规范，使用 JSON 作为数据交换格式。本规范基于阿里巴巴实践经验编写。

## 响应格式

### 成功响应

成功响应的响应体必须包含：

- `success` 字段，且值为 `true`
- `data` 字段，且值为 JSON 对象
  - 请不要在数据中包含未解码的 JSON 字符串，如 `{"name":"John Doe"}` 等，请直接返回 JSON 对象。

```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com"
  }
}
```

### 失败响应

失败响应的响应体必须包含：

- `success` 字段，且值为 `false`
- `code` 字段，且值为数字或字符串，具体含义由业务决定，注意不要与 HTTP 状态码混淆
- `message` 字段，且值为字符串，具体内容由业务决定

以及以下可选字段：

- `errors` 字段，且值为数组类型，数组中每个元素为 JSON 对象，表示一个错误，可选，如果包含了多个错误，则用此数组提供
  - `message` 字段，且值为字符串，表示错误消息
  - `field` 字段，且值为字符串，表示错误字段，可选，如果错误字段可以定位，则用此字段定位

```json
{
  "success": false,
  "code": 10001,
  "message": "Parameter error",
  "errors": [
    {
      "message": "Name is required",
      "field": "name"
    }
  ]
}
```

## 分页接口

通常，分页接口必须是 GET 请求，使用 `SearchParams` 作为请求参数。

### 分页接口请求格式

必须包含 `currentPage` 和 `pageSize` 字段，分别表示当前页码和每页条数。其中 `currentPage` 必须从 1 开始，`pageSize` 必须大于 0。

```json
{
  "currentPage": 1,
  "pageSize": 10
}
```

```http
GET /api/v1/users?currentPage=1&pageSize=10
```

如果要启用排序功能，则必须包含 `orderBy` 和 `order` 字段，分别表示排序字段和排序方向。其中 `orderBy` 必须为字符串，`order` 必须为字符串，可选值为 `asc` (升序) 或 `desc` (降序)。

```json
{
  "currentPage": 1,
  "pageSize": 10,
  "orderBy": "createdAt",
  "order": "desc"
}
```

```http
GET /api/v1/users?currentPage=1&pageSize=10&orderBy=createdAt&order=desc
```

其他参数可以自由扩展，但不要影响分页功能。

```json
{
  "currentPage": 1,
  "pageSize": 10,
  "search": "John"
}
```

```http
GET /api/v1/users?currentPage=1&pageSize=10&search=John
```

复杂数据结构的参数使用 JSON 编码，而不是 URL 编码。

```json
{
  "currentPage": 1,
  "pageSize": 10,
  "serviceIds": "[1,2,3]"
}
```

```http
GET /api/v1/users?currentPage=1&pageSize=10&serviceIds=%5B1%2C2%2C3%5D
```

### 分页接口响应格式

分页响应的 `data` 中包含以下必须字段：

- `data` 字段，且值为数组类型，数组中每个元素为 JSON 对象，表示一条数据。
- `total` 字段，且值为数字，表示数据总数。

以及以下可选字段（由于客户端已经传递了 `currentPage` 和 `pageSize`，所以不是必须的）：

- `currentPage` 字段，且值为数字，表示当前页码。
- `pageSize` 字段，且值为数字，表示每页条数。

```json
{
  "success": true,
  "data": {
    "data": [
      {
        "id": 1,
        "name": "John Doe",
        "email": "john.doe@example.com"
      }
    ],
    "total": 100,
    "current": 1,
    "pageSize": 10
  }
}
```
