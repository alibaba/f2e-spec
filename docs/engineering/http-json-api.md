---
group: Engineering
order: 2.3
---

# HTTP JSON API Specification

HTTP JSON API is a RESTful API specification based on HTTP protocol and JSON format. This specification is based on Alibaba's practical experience.

## Common API

### Common API Request Format

### Common API Response Format

#### Success Response

The response body must contain the following fields:

- `success` field, and the value must be `true`
- `data` field, and the value must be a JSON object
  - Please do not include undecoded JSON strings in the data, such as `{"name":"John Doe"}`, please return the JSON object directly.

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

#### Error Response

The response body must contain the following fields:

- `success` field, and the value must be `false`
- `code` field, and the value must be a number or string, the meaning of the code is determined by the business, please do not confuse it with HTTP status codes
- `message` field, and the value must be a string, the meaning of the message is determined by the business

And the following optional fields:

- `errors` field, and the value must be an array of JSON objects, each element is an error object, optional, if multiple errors are included, use this array to provide
  - `message` field, and the value must be a string, the message of the error
  - `field` field, and the value must be a string, the field of the error, optional, if the error field can be located, use this field to locate

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

## Pagination API

Usually, pagination interfaces must be GET requests, using `SearchParams` as the request parameters.

### Pagination API Request Format

The request body must contain the following fields:

- `currentPage` field, and the value must be a number, the current page number, must be greater than 0
- `pageSize` field, and the value must be a number, the number of items per page, must be greater than 0

```json
{
  "currentPage": 1,
  "pageSize": 10
}
```

```http
GET /api/v1/users?currentPage=1&pageSize=10
```

If sorting is enabled, the request body must contain the following fields:

- `orderBy` field, and the value must be a string, the field to order by
- `order` field, and the value must be a string, the order direction, must be `asc` or `desc`

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

Other parameters can be freely extended, but do not affect the pagination function.

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

### Pagination API Response Format

The response body must contain the following fields:

- `success` field, and the value must be `true`
- `data` field, and the value must be a JSON object
  - The `data` field must be an array of JSON objects, each element is a data object
  - The `total` field must be a number, the total number of data
  - The `currentPage` field must be a number, the current page number
  - The `pageSize` field must be a number, the number of items per page

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
    "currentPage": 1,
    "pageSize": 10
  }
}
```
