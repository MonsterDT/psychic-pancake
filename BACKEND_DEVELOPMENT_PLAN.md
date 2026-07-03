# 妆伴 MakeupPal 后端开发计划与实施方案

## 文档信息

| 属性 | 值 |
|------|-----|
| 项目名称 | 妆伴 MakeupPal |
| 文档类型 | 后端开发计划 |
| 版本号 | V1.0 |
| 创建日期 | 2026-07-03 |
| 状态 | 正式版 |

---

## 1. 项目需求分析

### 1.1 功能模块概览

基于PRD文档，后端需要支持以下7大核心模块：

| 模块 | 核心功能 | API复杂度 | 优先级 |
|------|---------|-----------|--------|
| 用户管理 | 注册、登录、个人资料、面部特征管理 | 中 | P0 |
| 颜库管理 | 妆容模板CRUD、分类筛选、卡片浏览 | 高 | P0 |
| 商品管理 | 商品CRUD、分类、搜索、价格管理 | 中 | P0 |
| 购物车 | 添加/删除商品、数量修改、价格计算 | 低 | P0 |
| 订单系统 | 订单创建、支付、状态管理、地址管理 | 高 | P0 |
| 美妆闺蜜AI | 场景识别、智能推荐、对话记录 | 高 | P1 |
| 成分安全扫描 | 成分数据库、安全分析、风险评估 | 中 | P1 |

### 1.2 数据规模预估

| 数据类型 | 预估数量 | 增长速度 |
|---------|---------|---------|
| 用户 | 10万-50万 | 日均新增1000+ |
| 妆容模板 | 1000+ | 日均新增20+ |
| 商品 | 500+ | 日均新增5+ |
| 订单 | 10万+ | 日均新增500+ |
| AI对话记录 | 100万+ | 日均新增1万+ |

### 1.3 性能指标要求

| 指标 | 要求 |
|------|------|
| API响应时间 | P95 ≤ 200ms，P99 ≤ 500ms |
| 并发用户数 | 支持5000并发 |
| 数据库查询 | 单表查询 ≤ 50ms，联合查询 ≤ 100ms |
| 可用性 | 99.9% |

---

## 2. 技术栈选择

### 2.1 核心技术栈

| 层次 | 技术 | 版本 | 选型理由 |
|------|------|------|---------|
| 语言 | TypeScript | 5.4+ | 类型安全、成熟生态、与前端技术栈统一 |
| 框架 | NestJS | 10.x | 企业级架构、模块化设计、依赖注入、内置TypeORM |
| 数据库 | PostgreSQL | 16.x | 支持JSON、全文搜索、事务强一致性、社区成熟 |
| ORM | TypeORM | 0.3.x | 与NestJS深度集成、支持迁移、类型安全 |
| 缓存 | Redis | 7.x | 会话管理、热点数据缓存、消息队列 |
| 认证 | JWT | - | 无状态认证、跨平台支持、成熟方案 |
| API文档 | Swagger/OpenAPI | 7.x | 自动生成API文档、在线调试 |
| 部署 | Docker + Kubernetes | - | 容器化部署、弹性伸缩、环境一致性 |

### 2.2 辅助工具

| 工具 | 用途 |
|------|------|
| Winston | 日志记录 |
| Jest | 单元测试 |
| Supertest | 集成测试 |
| ESLint | 代码规范 |
| Prettier | 代码格式化 |
| Husky | Git钩子 |
| Commitlint | 提交规范 |

---

## 3. 数据库架构设计

### 3.1 数据库ER图

```
用户表 (users)                  妆容模板表 (makeup_templates)
├── id (PK)                    ├── id (PK)
├── phone (UK)                 ├── title
├── password_hash              ├── cover_image
├── name                       ├── category
├── avatar                     ├── tag
├── face_shape                 ├── likes
├── skin_type                  ├── collections
├── skin_tone                  ├── difficulty
├── gp_balance                 ├── duration
├── gp_recharged               ├── suitable_for (JSON)
├── gp_free                    ├── effect
├── gp_creator_earnings        ├── description
├── created_at                 ├── dynasty (国风)
├── updated_at                 ├── technique (国风)
└── deleted_at                 ├── scene (银发)
                               ├── skin_friendly (银发)
                               ├── brand_name (大牌)
                               ├── brand_logo (大牌)
                               ├── price_gp (大牌)
                               ├── celebrity_name (明星)
                               ├── celebrity_photo (明星)
                               ├── similarity (明星)
                               ├── creator_name (达人)
                               ├── creator_avatar (达人)
                               ├── type (模板类型)
                               ├── created_at
                               └── updated_at

商品表 (products)              分类表 (categories)
├── id (PK)                    ├── id (PK)
├── name                       ├── name
├── brand                      ├── parent_id
├── category                   ├── type (makeup/product)
├── price                      ├── sort_order
├── original_price             ├── created_at
├── rating                     └── updated_at
├── skin_types (JSON)
├── image
├── description
├── tags (JSON)
├── created_at
└── updated_at

购物车表 (carts)               订单表 (orders)
├── id (PK)                    ├── id (PK)
├── user_id (FK)               ├── user_id (FK)
├── product_id (FK)            ├── total_amount
├── quantity                   ├── status
├── created_at                 ├── create_time
└── updated_at                 ├── pay_time
                               ├── ship_time
                               ├── finish_time
                               ├── address_id (FK)
                               ├── created_at
                               └── updated_at

订单商品表 (order_items)       地址表 (addresses)
├── id (PK)                    ├── id (PK)
├── order_id (FK)              ├── user_id (FK)
├── product_id (FK)            ├── name
├── name                       ├── phone
├── price                      ├── province
├── quantity                   ├── city
├── image                      ├── district
└── created_at                 ├── detail
                               ├── is_default
                               ├── created_at
                               └── updated_at

收藏表 (favorites)             浏览记录表 (browse_history)
├── id (PK)                    ├── id (PK)
├── user_id (FK)               ├── user_id (FK)
├── template_id (FK)           ├── item_id
├── created_at                 ├── item_type
└── deleted_at                 ├── name
                               ├── category
                               ├── created_at
                               └── expires_at

AI对话记录表 (ai_conversations)    成分表 (ingredients)
├── id (PK)                    ├── id (PK)
├── user_id (FK)               ├── name
├── message                    ├── safety_level
├── response                   ├── risk_level
├── scene                      ├── description
├── created_at                 ├── side_effects
└── updated_at                 └── category

成分扫描记录 (ingredient_scans)
├── id (PK)
├── user_id (FK)
├── product_name
├── ingredients (JSON)
├── scan_result (JSON)
├── created_at
└── updated_at
```

### 3.2 核心表结构详细设计

#### 3.2.1 用户表 (users)

| 字段名 | 类型 | 约束 | 说明 |
|--------|------|------|------|
| id | UUID | PRIMARY KEY | 用户唯一标识 |
| phone | VARCHAR(20) | UNIQUE | 手机号（微信登录用户可为空） |
| password_hash | VARCHAR(255) | - | 密码哈希值（微信登录用户可为空） |
| name | VARCHAR(50) | NOT NULL | 昵称 |
| avatar | VARCHAR(255) | - | 头像URL |
| face_shape | VARCHAR(20) | - | 脸型（鹅蛋脸/圆脸/方脸等） |
| skin_type | VARCHAR(20) | - | 肤质（油性/干性/混合/敏感） |
| skin_tone | VARCHAR(20) | - | 肤色（自然偏白/黄皮等） |
| gp_balance | INTEGER | DEFAULT 0 | 焕新值余额 |
| gp_recharged | INTEGER | DEFAULT 0 | 充值获得的焕新值 |
| gp_free | INTEGER | DEFAULT 0 | 免费获得的焕新值 |
| gp_creator_earnings | INTEGER | DEFAULT 0 | 创作收益焕新值 |
| wechat_openid | VARCHAR(100) | UNIQUE | 微信小程序OpenID |
| wechat_unionid | VARCHAR(100) | UNIQUE | 微信UnionID |
| wechat_session_key | VARCHAR(100) | - | 微信Session Key（用于解密用户信息） |
| login_type | VARCHAR(20) | DEFAULT 'phone' | 登录方式(phone/wechat) |
| is_active | BOOLEAN | DEFAULT true | 是否激活 |
| created_at | TIMESTAMP | DEFAULT NOW() | 创建时间 |
| updated_at | TIMESTAMP | DEFAULT NOW() | 更新时间 |
| deleted_at | TIMESTAMP | - | 删除时间（软删除） |

#### 3.2.2 妆容模板表 (makeup_templates)

采用通用字段 + JSONB metadata设计模式，消除大量NULL列，支持7种类型（creator/tutorial/qa/guofeng/silver/brand/celebrity）的灵活扩展。

| 字段名 | 类型 | 约束 | 说明 |
|--------|------|------|------|
| id | UUID | PRIMARY KEY | 模板唯一标识 |
| title | VARCHAR(100) | NOT NULL | 标题 |
| cover_image | VARCHAR(255) | NOT NULL | 封面图URL |
| category | VARCHAR(50) | NOT NULL | 分类 |
| tag | VARCHAR(50) | - | 标签 |
| likes | INTEGER | DEFAULT 0 | 点赞数 |
| collections | INTEGER | DEFAULT 0 | 收藏数 |
| difficulty | INTEGER | - | 难度等级(1-5) |
| duration | VARCHAR(20) | - | 时长 |
| suitable_for | JSONB | - | 适合人群 |
| effect | VARCHAR(100) | - | 效果描述 |
| description | TEXT | - | 详细描述 |
| type | VARCHAR(20) | NOT NULL | 模板类型(creator/tutorial/qa/guofeng/silver/brand/celebrity) |
| metadata | JSONB | - | 类型特有元数据，存储各类型独有的字段 |
| is_official | BOOLEAN | DEFAULT false | 是否官方内容 |
| created_at | TIMESTAMP | DEFAULT NOW() | 创建时间 |
| updated_at | TIMESTAMP | DEFAULT NOW() | 更新时间 |

**metadata字段结构示例:**

```json
// creator (达人精选)
{
  "creatorName": "小鹿美妆",
  "creatorAvatar": "url"
}

// tutorial (局部拆解)
{
  "difficulty": 2,
  "duration": "5分钟",
  "suitableFor": ["新手", "手残党"],
  "effect": "自然放大双眼"
}

// guofeng (国风专区)
{
  "dynasty": "唐代",
  "technique": "花钿、斜红、面靥"
}

// silver (银发专区)
{
  "scene": "日常",
  "skinFriendly": true
}

// brand (大牌精选)
{
  "brandName": "YSL",
  "brandLogo": "url",
  "templateCount": 28,
  "priceGP": 120,
  "isOfficial": true
}

// celebrity (明星同款)
{
  "celebrityName": "赵露思",
  "celebrityPhoto": "url",
  "similarity": 92
}

// qa (美妆问答)
{
  "question": "油皮夏天怎么定妆不脱妆？",
  "summary": "控油妆前+烘焙定妆+定妆喷雾三步法",
  "answerCount": 156,
  "viewCount": 128000,
  "authorName": "油皮救星",
  "authorAvatar": "url"
}
```

#### 3.2.3 商品表 (products)

| 字段名 | 类型 | 约束 | 说明 |
|--------|------|------|------|
| id | UUID | PRIMARY KEY | 商品唯一标识 |
| name | VARCHAR(100) | NOT NULL | 商品名称 |
| brand | VARCHAR(50) | NOT NULL | 品牌 |
| category | VARCHAR(50) | NOT NULL | 分类 |
| price | DECIMAL(10,2) | NOT NULL | 现价 |
| original_price | DECIMAL(10,2) | - | 原价 |
| rating | DECIMAL(3,1) | DEFAULT 0 | 评分 |
| skin_types | JSONB | - | 适用肤质 |
| image | VARCHAR(255) | NOT NULL | 商品图片 |
| description | TEXT | - | 商品描述 |
| tags | JSONB | - | 标签 |
| stock | INTEGER | DEFAULT 0 | 库存 |
| is_active | BOOLEAN | DEFAULT true | 是否上架 |
| created_at | TIMESTAMP | DEFAULT NOW() | 创建时间 |
| updated_at | TIMESTAMP | DEFAULT NOW() | 更新时间 |

#### 3.2.4 订单表 (orders)

| 字段名 | 类型 | 约束 | 说明 |
|--------|------|------|------|
| id | UUID | PRIMARY KEY | 订单唯一标识 |
| user_id | UUID | FOREIGN KEY | 用户ID |
| total_amount | DECIMAL(10,2) | NOT NULL | 订单总额 |
| status | VARCHAR(20) | DEFAULT 'pending' | 订单状态(pending/paid/shipped/delivered/completed/cancelled) |
| create_time | TIMESTAMP | DEFAULT NOW() | 创建时间 |
| pay_time | TIMESTAMP | - | 支付时间 |
| ship_time | TIMESTAMP | - | 发货时间 |
| finish_time | TIMESTAMP | - | 完成时间 |
| address_id | UUID | FOREIGN KEY | 收货地址ID |
| payment_method | VARCHAR(20) | - | 支付方式 |
| transaction_id | VARCHAR(100) | - | 支付交易ID |
| created_at | TIMESTAMP | DEFAULT NOW() | 创建时间 |
| updated_at | TIMESTAMP | DEFAULT NOW() | 更新时间 |

### 3.3 索引设计

| 表名 | 索引名 | 字段 | 类型 | 说明 |
|------|--------|------|------|------|
| users | idx_users_phone | phone | UNIQUE | 手机号快速查找 |
| users | idx_users_face_shape | face_shape | INDEX | 脸型筛选 |
| users | idx_users_skin_type | skin_type | INDEX | 肤质筛选 |
| makeup_templates | idx_templates_category | category | INDEX | 分类筛选 |
| makeup_templates | idx_templates_type | type | INDEX | 类型筛选 |
| makeup_templates | idx_templates_tag | tag | INDEX | 标签筛选 |
| makeup_templates | idx_templates_likes | likes | INDEX | 热门排序 |
| products | idx_products_category | category | INDEX | 分类筛选 |
| products | idx_products_brand | brand | INDEX | 品牌筛选 |
| products | idx_products_rating | rating | INDEX | 评分排序 |
| orders | idx_orders_user_id | user_id | INDEX | 用户订单查询 |
| orders | idx_orders_status | status | INDEX | 状态筛选 |
| orders | idx_orders_create_time | create_time | INDEX | 时间排序 |
| favorites | idx_favorites_user_template | user_id, template_id | UNIQUE | 用户收藏去重 |
| browse_history | idx_history_user | user_id | INDEX | 用户浏览记录 |
| ai_conversations | idx_conversations_user | user_id | INDEX | 用户对话记录 |

---

## 4. API接口规划

### 4.1 API设计规范

| 规范项 | 规则 |
|--------|------|
| 路径前缀 | `/api/v1` |
| HTTP方法 | GET/POST/PUT/DELETE |
| 版本控制 | URL路径版本化 |
| 命名风格 | 小写字母+连字符 |
| 响应格式 | JSON |
| 分页参数 | `page`, `limit` |
| 排序参数 | `sort`, `order` |
| 错误码 | 统一错误码体系 |

### 4.2 用户管理接口

| API路径 | 方法 | 描述 | 认证 |
|---------|------|------|------|
| `/api/v1/users/register` | POST | 用户注册 | 否 |
| `/api/v1/users/login` | POST | 用户登录 | 否 |
| `/api/v1/users/logout` | POST | 用户退出 | 是 |
| `/api/v1/users/me` | GET | 获取当前用户信息 | 是 |
| `/api/v1/users/me` | PUT | 更新用户信息 | 是 |
| `/api/v1/users/me/face` | PUT | 更新面部特征 | 是 |
| `/api/v1/users/me/gp` | GET | 获取焕新值详情 | 是 |
| `/api/v1/users/phone/verify` | POST | 手机验证码 | 否 |

### 4.3 认证模块接口

支持多种登录方式：手机号密码登录、微信小程序登录、微信扫码登录。

| API路径 | 方法 | 描述 | 认证 |
|---------|------|------|------|
| `/api/v1/auth/wechat-miniprogram` | POST | 微信小程序登录 | 否 |
| `/api/v1/auth/wechat-web` | POST | 微信网页扫码登录 | 否 |
| `/api/v1/auth/refresh` | POST | 刷新Token | 是 |
| `/api/v1/auth/logout` | POST | 退出登录 | 是 |

#### 4.3.1 微信小程序登录

**请求体:**
```json
{
  "code": "wx.login返回的临时code",
  "encryptedData": "用户信息加密数据（可选）",
  "iv": "加密算法的初始向量（可选）"
}
```

**响应:**
```json
{
  "code": 200,
  "message": "登录成功",
  "data": {
    "id": "uuid",
    "name": "微信用户",
    "avatar": "url",
    "token": "jwt_token",
    "refreshToken": "refresh_token",
    "isNewUser": true,
    "openId": "wx_openid"
  }
}
```

**登录流程:**
```
1. 小程序调用 wx.login() 获取临时code
2. 将code发送到后端 /api/v1/auth/wechat-miniprogram
3. 后端调用微信API: https://api.weixin.qq.com/sns/jscode2session
   - appid: 小程序appid
   - secret: 小程序secret
   - js_code: 前端传入的code
   - grant_type: authorization_code
4. 获取 openid 和 session_key
5. 查询数据库是否存在该openid对应的用户
   - 存在: 更新登录信息，返回token
   - 不存在: 创建新用户，返回token并标记isNewUser
6. 如果传入了encryptedData，使用session_key解密获取用户信息
```

#### 4.3.2 刷新Token

**请求体:**
```json
{
  "refreshToken": "刷新令牌"
}
```

**响应:**
```json
{
  "code": 200,
  "message": "刷新成功",
  "data": {
    "token": "new_jwt_token",
    "refreshToken": "new_refresh_token"
  }
}
```

### 4.4 微信支付接口

| API路径 | 方法 | 描述 | 认证 |
|---------|------|------|------|
| `/api/v1/pay/wechat/unified-order` | POST | 创建微信支付订单 | 是 |
| `/api/v1/pay/wechat/notify` | POST | 微信支付回调 | 否 |
| `/api/v1/pay/wechat/query` | GET | 查询支付状态 | 是 |

#### 4.4.1 创建微信支付订单

**请求体:**
```json
{
  "orderId": "订单ID",
  "payType": "miniprogram"
}
```

**响应:**
```json
{
  "code": 200,
  "message": "创建成功",
  "data": {
    "prepayId": "wx_prepay_id",
    "payParams": {
      "timeStamp": "1620000000",
      "nonceStr": "random_string",
      "package": "prepay_id=wx_prepay_id",
      "signType": "RSA",
      "paySign": "signature"
    }
  }
}
```

#### 4.4.2 微信支付回调

**请求体:**
```xml
<xml>
  <appid><![CDATA[wx_appid]]></appid>
  <mch_id><![CDATA[mch_id]]></mch_id>
  <nonce_str><![CDATA[nonce_str]]></nonce_str>
  <sign><![CDATA[signature]]></sign>
  <result_code><![CDATA[SUCCESS]]></result_code>
  <out_trade_no><![CDATA[order_id]]></out_trade_no>
  <transaction_id><![CDATA[wx_transaction_id]]></transaction_id>
  <total_fee>62000</total_fee>
</xml>
```

**响应:**
```xml
<xml>
  <return_code><![CDATA[SUCCESS]]></return_code>
  <return_msg><![CDATA[OK]]></return_msg>
</xml>
```

#### 4.2.1 用户注册

**请求体:**
```json
{
  "phone": "13800138000",
  "password": "password123",
  "name": "沈婉清",
  "faceShape": "鹅蛋脸",
  "skinType": "混合皮",
  "skinTone": "自然偏白"
}
```

**响应:**
```json
{
  "code": 200,
  "message": "注册成功",
  "data": {
    "id": "uuid",
    "name": "沈婉清",
    "phone": "138****8000",
    "token": "jwt_token"
  }
}
```

#### 4.2.2 用户登录

**请求体:**
```json
{
  "phone": "13800138000",
  "password": "password123"
}
```

**响应:**
```json
{
  "code": 200,
  "message": "登录成功",
  "data": {
    "id": "uuid",
    "name": "沈婉清",
    "phone": "138****8000",
    "token": "jwt_token",
    "avatar": "url",
    "faceShape": "鹅蛋脸",
    "skinType": "混合皮",
    "skinTone": "自然偏白",
    "gpBalance": 2680
  }
}
```

### 4.3 颜库管理接口

| API路径 | 方法 | 描述 | 认证 |
|---------|------|------|------|
| `/api/v1/templates` | GET | 获取妆容模板列表 | 否 |
| `/api/v1/templates/:id` | GET | 获取妆容模板详情 | 否 |
| `/api/v1/templates/:id/like` | POST | 点赞妆容模板 | 是 |
| `/api/v1/templates/categories` | GET | 获取分类列表 | 否 |

#### 4.3.1 获取妆容模板列表

**请求参数:**
| 参数 | 类型 | 说明 |
|------|------|------|
| page | INTEGER | 页码，默认1 |
| limit | INTEGER | 每页数量，默认20 |
| type | STRING | 模板类型(creator/tutorial/qa/guofeng/silver/brand/celebrity) |
| category | STRING | 分类名称 |
| tag | STRING | 标签 |
| sort | STRING | 排序字段(likes/createdAt) |
| order | STRING | 排序方向(asc/desc) |

**响应:**
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "items": [
      {
        "id": "uuid",
        "title": "早八通勤妆3分钟搞定",
        "coverImage": "url",
        "category": "日常妆",
        "tag": "通勤",
        "likes": 12800,
        "collections": 3400,
        "type": "creator",
        "creatorName": "小鹿美妆",
        "creatorAvatar": "url"
      }
    ],
    "total": 100,
    "page": 1,
    "limit": 20
  }
}
```

### 4.6 商品管理接口

| API路径 | 方法 | 描述 | 认证 |
|---------|------|------|------|
| `/api/v1/products` | GET | 获取商品列表 | 否 |
| `/api/v1/products/:id` | GET | 获取商品详情 | 否 |
| `/api/v1/products/search` | GET | 搜索商品 | 否 |
| `/api/v1/products/categories` | GET | 获取商品分类 | 否 |

#### 4.4.1 搜索商品

**请求参数:**
| 参数 | 类型 | 说明 |
|------|------|------|
| keyword | STRING | 搜索关键词 |
| category | STRING | 分类 |
| brand | STRING | 品牌 |
| minPrice | DECIMAL | 最低价格 |
| maxPrice | DECIMAL | 最高价格 |
| skinType | STRING | 适用肤质 |

### 4.7 购物车接口

| API路径 | 方法 | 描述 | 认证 |
|---------|------|------|------|
| `/api/v1/cart` | GET | 获取购物车 | 是 |
| `/api/v1/cart` | POST | 添加商品到购物车 | 是 |
| `/api/v1/cart/:itemId` | PUT | 更新购物车商品数量 | 是 |
| `/api/v1/cart/:itemId` | DELETE | 删除购物车商品 | 是 |
| `/api/v1/cart/clear` | DELETE | 清空购物车 | 是 |

#### 4.7.1 添加商品到购物车

**请求体:**
```json
{
  "productId": "uuid",
  "quantity": 1
}
```

**响应:**
```json
{
  "code": 200,
  "message": "添加成功",
  "data": {
    "id": "uuid",
    "productId": "uuid",
    "name": "YSL 恒久无瑕持妆粉底液",
    "price": 620,
    "quantity": 1,
    "image": "url"
  }
}
```

### 4.8 订单接口

| API路径 | 方法 | 描述 | 认证 |
|---------|------|------|------|
| `/api/v1/orders` | GET | 获取订单列表 | 是 |
| `/api/v1/orders/:id` | GET | 获取订单详情 | 是 |
| `/api/v1/orders` | POST | 创建订单 | 是 |
| `/api/v1/orders/:id/pay` | POST | 支付订单 | 是 |
| `/api/v1/orders/:id/cancel` | POST | 取消订单 | 是 |
| `/api/v1/orders/:id/confirm` | POST | 确认收货 | 是 |

#### 4.8.1 创建订单

**请求体:**
```json
{
  "items": [
    {
      "productId": "uuid",
      "quantity": 1
    }
  ],
  "addressId": "uuid"
}
```

**响应:**
```json
{
  "code": 200,
  "message": "订单创建成功",
  "data": {
    "id": "uuid",
    "totalAmount": 620,
    "status": "pending",
    "createTime": "2026-07-03 10:30:00",
    "items": [
      {
        "productId": "uuid",
        "name": "YSL 恒久无瑕持妆粉底液",
        "price": 620,
        "quantity": 1,
        "image": "url"
      }
    ]
  }
}
```

### 4.9 地址管理接口

| API路径 | 方法 | 描述 | 认证 |
|---------|------|------|------|
| `/api/v1/addresses` | GET | 获取地址列表 | 是 |
| `/api/v1/addresses/:id` | GET | 获取地址详情 | 是 |
| `/api/v1/addresses` | POST | 添加地址 | 是 |
| `/api/v1/addresses/:id` | PUT | 更新地址 | 是 |
| `/api/v1/addresses/:id` | DELETE | 删除地址 | 是 |
| `/api/v1/addresses/:id/default` | POST | 设置默认地址 | 是 |

### 4.10 收藏管理接口

| API路径 | 方法 | 描述 | 认证 |
|---------|------|------|------|
| `/api/v1/favorites` | GET | 获取收藏列表 | 是 |
| `/api/v1/favorites` | POST | 添加收藏 | 是 |
| `/api/v1/favorites/:id` | DELETE | 删除收藏 | 是 |

### 4.11 美妆闺蜜AI接口

| API路径 | 方法 | 描述 | 认证 |
|---------|------|------|------|
| `/api/v1/ai/chat` | POST | AI对话 | 是 |
| `/api/v1/ai/conversations` | GET | 获取对话历史 | 是 |
| `/api/v1/ai/conversations/:id` | DELETE | 删除对话 | 是 |
| `/api/v1/ai/recommend` | POST | 获取推荐内容 | 是 |

**速率限制策略:**

| 接口 | 限制规则 | 重置时间 |
|------|---------|---------|
| `/api/v1/ai/chat` | 每用户每分钟10次 | 60秒 |
| `/api/v1/ai/chat` | 每用户每小时60次 | 3600秒 |
| `/api/v1/ai/recommend` | 每用户每分钟5次 | 60秒 |

**超限响应:**
```json
{
  "code": 429,
  "message": "请求过于频繁，请稍后再试",
  "error": "Rate limit exceeded",
  "retryAfter": 60,
  "timestamp": "2026-07-03 10:30:00"
}
```

**防滥用策略:**
1. 使用Redis实现令牌桶算法进行速率限制
2. 对异常请求模式（如短时间大量重复请求）进行IP封禁
3. 记录用户对话频率，对异常用户进行人工审核
4. 对话内容进行敏感词过滤

#### 4.11.1 AI对话

**请求体:**
```json
{
  "message": "帮我推荐一款适合约会的口红"
}
```

**响应:**
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "id": "uuid",
    "message": "帮我推荐一款适合约会的口红",
    "response": "约会当然要选显白又温柔的口红啦！推荐你试试YSL小金条21号复古正红，气场全开又不会太夸张~",
    "scene": "date",
    "recommendations": {
      "templates": [
        {
          "id": "uuid",
          "title": "约会蜜桃妆",
          "coverImage": "url",
          "category": "甜美妆"
        }
      ],
      "products": [
        {
          "id": "uuid",
          "name": "YSL小金条细管口红 21",
          "price": 390,
          "rating": 4.8,
          "image": "url"
        }
      ]
    },
    "createdAt": "2026-07-03 10:30:00"
  }
}
```

### 4.12 成分安全扫描接口

| API路径 | 方法 | 描述 | 认证 |
|---------|------|------|------|
| `/api/v1/ingredients/scan` | POST | 扫描成分 | 是 |
| `/api/v1/ingredients/search` | GET | 搜索成分 | 否 |
| `/api/v1/ingredients/:id` | GET | 获取成分详情 | 否 |

#### 4.12.1 扫描成分

**请求体:**
```json
{
  "productName": "YSL恒久无瑕持妆粉底液",
  "ingredients": ["水", "聚二甲基硅氧烷", "二氧化钛", "香精"]
}
```

**响应:**
```json
{
  "code": 200,
  "message": "扫描完成",
  "data": {
    "id": "uuid",
    "productName": "YSL恒久无瑕持妆粉底液",
    "safetyLevel": "medium",
    "riskIngredients": [
      {
        "name": "香精",
        "riskLevel": "high",
        "sideEffects": ["可能引起过敏", "敏感肌慎用"]
      }
    ],
    "safeIngredients": [
      {
        "name": "水",
        "riskLevel": "low"
      }
    ],
    "suggestion": "敏感肌建议先做皮肤测试，香精含量较高可能引起不适"
  }
}
```

### 4.13 统一错误响应格式

```json
{
  "code": 400,
  "message": "参数错误",
  "error": "具体错误信息",
  "timestamp": "2026-07-03 10:30:00"
}
```

**错误码体系:**

| 错误码 | 含义 |
|--------|------|
| 200 | 成功 |
| 400 | 参数错误 |
| 401 | 未授权 |
| 403 | 无权限 |
| 404 | 资源不存在 |
| 409 | 冲突 |
| 429 | 请求过于频繁 |
| 500 | 服务器错误 |
| 1001 | 用户不存在 |
| 1002 | 密码错误 |
| 1003 | 用户已存在 |
| 2001 | 商品不存在 |
| 2002 | 库存不足 |
| 3001 | 订单不存在 |
| 3002 | 订单状态错误 |
| 4001 | 模板不存在 |

### 4.14 文件上传接口

| API路径 | 方法 | 描述 | 认证 |
|---------|------|------|------|
| `/api/v1/upload/image` | POST | 上传图片 | 是 |
| `/api/v1/upload/file` | POST | 上传文件 | 是 |

**文件存储方案:**

| 方案 | 说明 |
|------|------|
| 对象存储 | 阿里云OSS |
| CDN加速 | 阿里云CDN |
| 图片处理 | 阿里云图片服务（缩放、裁剪、水印） |

**图片URL格式:**
```
https://cdn.makeuppal.com/{bucket}/{folder}/{hash}.{ext}
```

**文件类型限制:**
- 图片格式: jpg, jpeg, png, gif, webp
- 图片大小: 最大10MB
- 文件格式: pdf, doc, docx, xlsx, csv
- 文件大小: 最大50MB

#### 4.14.1 上传图片

**请求体:**
```multipart/form-data
file: <图片文件>
folder: templates (可选，默认assets)
```

**响应:**
```json
{
  "code": 200,
  "message": "上传成功",
  "data": {
    "url": "https://cdn.makeuppal.com/assets/templates/abc123.jpg",
    "size": 1024000,
    "width": 1080,
    "height": 1920
  }
}
```

---

## 5. 项目架构设计

### 5.1 模块划分

```
src/
├── main.ts                    # 应用入口
├── app.module.ts              # 根模块
├── common/                    # 公共模块
│   ├── guards/                # 守卫（JWT认证等）
│   ├── interceptors/          # 拦截器（日志、响应格式化等）
│   ├── filters/               # 过滤器（异常处理等）
│   ├── decorators/            # 装饰器
│   ├── utils/                 # 工具函数
│   ├── constants/             # 常量定义
│   └── rate-limiter/          # 速率限制中间件
├── users/                     # 用户模块
│   ├── users.module.ts
│   ├── users.controller.ts
│   ├── users.service.ts
│   ├── users.entity.ts
│   ├── users.dto.ts
│   └── users.repository.ts
├── auth/                      # 认证模块
│   ├── auth.module.ts
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   ├── auth.dto.ts
│   ├── jwt-auth.guard.ts
│   └── wechat-auth.service.ts # 微信小程序认证服务
├── templates/                 # 妆容模板模块
│   ├── templates.module.ts
│   ├── templates.controller.ts
│   ├── templates.service.ts
│   ├── templates.entity.ts
│   ├── templates.dto.ts
│   └── templates.repository.ts
├── products/                  # 商品模块
│   ├── products.module.ts
│   ├── products.controller.ts
│   ├── products.service.ts
│   ├── products.entity.ts
│   ├── products.dto.ts
│   └── products.repository.ts
├── carts/                     # 购物车模块
│   ├── carts.module.ts
│   ├── carts.controller.ts
│   ├── carts.service.ts
│   ├── carts.entity.ts
│   └── carts.dto.ts
├── orders/                    # 订单模块
│   ├── orders.module.ts
│   ├── orders.controller.ts
│   ├── orders.service.ts
│   ├── orders.entity.ts
│   ├── order-items.entity.ts
│   └── orders.dto.ts
├── addresses/                 # 地址模块
│   ├── addresses.module.ts
│   ├── addresses.controller.ts
│   ├── addresses.service.ts
│   ├── addresses.entity.ts
│   └── addresses.dto.ts
├── favorites/                 # 收藏模块
│   ├── favorites.module.ts
│   ├── favorites.controller.ts
│   ├── favorites.service.ts
│   ├── favorites.entity.ts
│   └── favorites.dto.ts
├── ai/                        # AI模块
│   ├── ai.module.ts
│   ├── ai.controller.ts
│   ├── ai.service.ts
│   ├── ai.entity.ts
│   ├── ai.dto.ts
│   └── scene-recognition.ts   # 场景识别逻辑
├── ingredients/               # 成分扫描模块
│   ├── ingredients.module.ts
│   ├── ingredients.controller.ts
│   ├── ingredients.service.ts
│   ├── ingredients.entity.ts
│   └── ingredients.dto.ts
├── pay/                       # 支付模块
│   ├── pay.module.ts
│   ├── pay.controller.ts
│   ├── pay.service.ts
│   ├── pay.dto.ts
│   └── wechat-pay.service.ts  # 微信支付服务
├── upload/                    # 文件上传模块
│   ├── upload.module.ts
│   ├── upload.controller.ts
│   ├── upload.service.ts
│   └── oss.service.ts         # OSS存储服务
├── config/                    # 配置模块
│   ├── configuration.ts
│   └── env.validation.ts
├── migrations/                # 数据库迁移
└── seed/                      # 数据种子
    ├── seed.module.ts
    ├── seed.service.ts
    └── data/                  # 种子数据（从makeuppal-demo-data.json迁移）
```

### 5.2 核心设计模式

| 设计模式 | 应用场景 |
|---------|---------|
| Repository模式 | 数据访问层，封装数据库操作 |
| Service模式 | 业务逻辑层，处理核心业务 |
| Controller模式 | 控制层，处理HTTP请求 |
| DTO模式 | 数据传输对象，验证和转换 |
| Guard模式 | 认证和权限控制 |
| Interceptor模式 | 请求/响应拦截和处理 |
| Module模式 | 模块化组织，依赖注入 |

### 5.3 安全设计

| 安全措施 | 实现方式 |
|---------|---------|
| JWT认证 | passport-jwt + 自定义守卫 |
| 密码加密 | bcryptjs (盐值10轮) |
| 参数校验 | class-validator + class-transformer |
| XSS防护 | DTO中自动转义 |
| SQL注入 | TypeORM参数化查询 |
| 速率限制 | nestjs-rate-limiter |
| HTTPS | Nginx反向代理配置 |
| CORS | NestJS内置CORS配置 |
| 敏感信息脱敏 | 响应拦截器处理 |

---

## 6. 开发环境搭建

### 6.1 环境要求

| 工具 | 版本 |
|------|------|
| Node.js | ≥ 20.x |
| npm | ≥ 10.x |
| PostgreSQL | ≥ 16.x |
| Redis | ≥ 7.x |
| Docker | ≥ 24.x |

### 6.2 项目初始化

```bash
# 创建项目目录
mkdir makeuppal-backend && cd makeuppal-backend

# 初始化NestJS项目
npx nest new . --package-manager npm

# 安装核心依赖
npm install @nestjs/typeorm typeorm pg @nestjs/jwt @nestjs/passport passport passport-jwt bcryptjs class-validator class-transformer @nestjs/swagger swagger-ui-express redis @nestjs/redis

# 安装开发依赖
npm install -D @types/pg @types/bcryptjs @types/passport-jwt @types/node typescript ts-node jest @nestjs/testing supertest eslint prettier husky commitlint
```

### 6.3 配置文件

**`.env` 文件:**
```env
# 应用配置
APP_PORT=3000
APP_ENV=development

# 数据库配置
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=password
DB_DATABASE=makeuppal

# Redis配置
REDIS_HOST=localhost
REDIS_PORT=6379

# JWT配置
JWT_SECRET=your_secret_key_here
JWT_EXPIRES_IN=7d

# 文件上传配置
UPLOAD_PATH=./uploads
MAX_FILE_SIZE=10485760

# API文档配置
SWAGGER_ENABLE=true
SWAGGER_PATH=/api/docs
```

**`ormconfig.ts`:**
```typescript
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_DATABASE || 'makeuppal',
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  synchronize: process.env.APP_ENV === 'development',
  logging: process.env.APP_ENV === 'development',
};
```

### 6.4 Docker Compose

**`docker-compose.yml`:**
```yaml
version: '3.8'

services:
  postgres:
    image: postgres:16-alpine
    container_name: makeuppal-postgres
    ports:
      - '5432:5432'
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
      POSTGRES_DB: makeuppal
    volumes:
      - postgres_data:/var/lib/postgresql/data
    networks:
      - makeuppal-network

  redis:
    image: redis:7-alpine
    container_name: makeuppal-redis
    ports:
      - '6379:6379'
    volumes:
      - redis_data:/data
    networks:
      - makeuppal-network

  app:
    build: .
    container_name: makeuppal-api
    ports:
      - '3000:3000'
    environment:
      - DB_HOST=postgres
      - REDIS_HOST=redis
      - JWT_SECRET=your_secret_key_here
    depends_on:
      - postgres
      - redis
    networks:
      - makeuppal-network

volumes:
  postgres_data:
  redis_data:

networks:
  makeuppal-network:
    driver: bridge
```

---

## 7. 代码规范与版本控制

### 7.1 ESLint配置

**`.eslintrc.js`:**
```javascript
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
};
```

### 7.2 Prettier配置

**`.prettierrc`:**
```json
{
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 120,
  "tabWidth": 2,
  "semi": true,
  "arrowParens": "always"
}
```

### 7.3 Git提交规范

**`commitlint.config.js`:**
```javascript
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'chore',
        'revert',
      ],
    ],
  },
};
```

**提交信息格式:**
```
<type>(<scope>): <description>

<body>

<footer>
```

| Type | 说明 |
|------|------|
| feat | 新功能 |
| fix | 修复Bug |
| docs | 文档更新 |
| style | 代码格式 |
| refactor | 重构 |
| perf | 性能优化 |
| test | 测试 |
| build | 构建 |
| ci | CI配置 |
| chore | 杂项 |
| revert | 回滚 |

### 7.4 Git分支策略

| 分支 | 用途 |
|------|------|
| main | 主分支，生产环境 |
| develop | 开发分支，集成所有功能 |
| feature/* | 功能分支，开发新功能 |
| bugfix/* | Bug修复分支 |
| hotfix/* | 紧急修复分支 |
| release/* | 发布分支 |

**工作流程:**
1. 从develop分支创建feature分支
2. 完成开发后提交PR到develop
3. Code Review通过后合并到develop
4. 发布前从develop创建release分支
5. 测试通过后合并到main和develop

---

## 8. 开发阶段与任务分配

### 8.1 开发阶段划分

| 阶段 | 周期 | 任务 | 产出 |
|------|------|------|------|
| 第一阶段 | 第1-2周 | 项目初始化、基础架构搭建 | 项目框架、数据库连接、认证模块 |
| 第二阶段 | 第3-4周 | 用户管理、妆容模板、商品模块 | 用户CRUD、模板CRUD、商品CRUD |
| 第三阶段 | 第5-6周 | 购物车、订单、地址模块 | 购物车功能、订单系统、地址管理 |
| 第四阶段 | 第7-8周 | 美妆闺蜜AI、成分安全扫描 | AI对话、场景识别、成分分析 |
| 第五阶段 | 第9周 | 测试、优化、文档完善 | 测试报告、性能优化、API文档 |
| 第六阶段 | 第10周 | 部署、上线 | Docker镜像、K8s配置 |

### 8.2 详细任务分解

#### 第一阶段：基础架构搭建

| 任务 | 负责人 | 天数 | 依赖 |
|------|--------|------|------|
| 项目初始化 | 后端开发 | 1 | - |
| Docker环境配置 | 后端开发 | 1 | - |
| TypeORM配置 | 后端开发 | 1 | Docker |
| JWT认证模块 | 后端开发 | 2 | TypeORM |
| 统一响应格式 | 后端开发 | 1 | - |
| 全局异常处理 | 后端开发 | 1 | - |

#### 第二阶段：核心业务模块

| 任务 | 负责人 | 天数 | 依赖 |
|------|--------|------|------|
| 用户实体与Repository | 后端开发 | 2 | TypeORM |
| 用户注册/登录API | 后端开发 | 2 | 认证模块 |
| 用户信息管理API | 后端开发 | 2 | 用户实体 |
| 妆容模板实体与Repository | 后端开发 | 2 | TypeORM |
| 模板CRUD API | 后端开发 | 3 | 模板实体 |
| 商品实体与Repository | 后端开发 | 2 | TypeORM |
| 商品CRUD API | 后端开发 | 3 | 商品实体 |
| 分类管理 | 后端开发 | 1 | 模板+商品 |

#### 第三阶段：交易模块

| 任务 | 负责人 | 天数 | 依赖 |
|------|--------|------|------|
| 购物车实体与API | 后端开发 | 3 | 用户+商品 |
| 地址实体与API | 后端开发 | 2 | 用户 |
| 订单实体与API | 后端开发 | 4 | 购物车+地址 |
| 支付接口对接 | 后端开发 | 2 | 订单 |
| 订单状态流转 | 后端开发 | 2 | 订单API |

#### 第四阶段：AI模块

| 任务 | 负责人 | 天数 | 依赖 |
|------|--------|------|------|
| AI对话实体与API | 后端开发 | 3 | 用户 |
| 场景识别逻辑 | 后端开发 | 2 | AI对话 |
| 智能推荐算法 | 后端开发 | 3 | 场景识别 |
| 成分数据库初始化 | 后端开发 | 2 | - |
| 成分扫描API | 后端开发 | 3 | 成分数据库 |

#### 第五阶段：测试与优化

| 任务 | 负责人 | 天数 | 依赖 |
|------|--------|------|------|
| 单元测试 | 后端开发 | 5 | 所有模块 |
| 集成测试 | 后端开发 | 3 | 单元测试 |
| 性能测试 | 后端开发 | 2 | 集成测试 |
| 代码优化 | 后端开发 | 3 | 测试结果 |
| API文档完善 | 后端开发 | 2 | 所有API |

#### 第六阶段：部署上线

| 任务 | 负责人 | 天数 | 依赖 |
|------|--------|------|------|
| Docker镜像构建 | 后端开发 | 1 | 代码完成 |
| Kubernetes配置 | 后端开发 | 2 | Docker |
| 数据库迁移 | 后端开发 | 1 | K8s |
| 灰度发布 | 后端开发 | 2 | 数据库迁移 |
| 全量上线 | 后端开发 | 1 | 灰度验证 |

---

## 9. 测试计划

### 9.1 测试策略

| 测试类型 | 工具 | 覆盖范围 |
|---------|------|---------|
| 单元测试 | Jest | 服务层、工具函数 |
| 集成测试 | Supertest | API接口、数据库交互 |
| 端到端测试 | Playwright | 完整业务流程 |
| 性能测试 | Artillery | API响应时间、并发能力 |
| 安全测试 | OWASP ZAP | 安全漏洞扫描 |

### 9.2 测试覆盖率目标

| 模块 | 语句覆盖率 | 分支覆盖率 |
|------|-----------|-----------|
| 用户模块 | ≥80% | ≥70% |
| 模板模块 | ≥80% | ≥70% |
| 商品模块 | ≥80% | ≥70% |
| 订单模块 | ≥85% | ≥75% |
| AI模块 | ≥70% | ≥60% |

### 9.3 测试用例示例

**用户登录测试:**
```typescript
describe('UsersController', () => {
  let app: INestApplication;
  let service: UsersService;

  beforeEach(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [TypeOrmModule.forRoot(typeOrmConfig), UsersModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    service = moduleFixture.get<UsersService>(UsersService);
    await app.init();
  });

  it('/api/v1/users/login (POST) - 成功登录', async () => {
    const response = await request(app.getHttpServer())
      .post('/api/v1/users/login')
      .send({ phone: '13800138000', password: 'password123' });

    expect(response.status).toBe(200);
    expect(response.body.code).toBe(200);
    expect(response.body.data.token).toBeDefined();
  });

  it('/api/v1/users/login (POST) - 密码错误', async () => {
    const response = await request(app.getHttpServer())
      .post('/api/v1/users/login')
      .send({ phone: '13800138000', password: 'wrongpassword' });

    expect(response.status).toBe(400);
    expect(response.body.code).toBe(1002);
  });
});
```

---

## 10. 部署方案

### 10.1 部署架构

```
                    ┌──────────────────┐
                    │   Load Balancer  │
                    │     (Nginx)      │
                    └────────┬─────────┘
                             │
          ┌──────────────────┼──────────────────┐
          │                  │                  │
    ┌─────▼─────┐      ┌─────▼─────┐      ┌─────▼─────┐
    │  API Pod  │      │  API Pod  │      │  API Pod  │
    │   (Node)  │      │   (Node)  │      │   (Node)  │
    └─────┬─────┘      └─────┬─────┘      └─────┬─────┘
          │                  │                  │
          └──────────────────┼──────────────────┘
                             │
          ┌──────────────────┼──────────────────┐
          │                  │                  │
    ┌─────▼─────┐      ┌─────▼─────┐      ┌─────▼─────┐
    │ PostgreSQL│      │  Redis    │      │  MinIO    │
    │   (HA)    │      │ (Cluster) │      │(Object St)│
    └───────────┘      └───────────┘      └───────────┘
```

### 10.2 Dockerfile

```dockerfile
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

ENV NODE_ENV=production
EXPOSE 3000

CMD ["node", "dist/main"]
```

### 10.3 Kubernetes配置

**`deployment.yaml`:**
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: makeuppal-api
  labels:
    app: makeuppal-api
spec:
  replicas: 3
  selector:
    matchLabels:
      app: makeuppal-api
  template:
    metadata:
      labels:
        app: makeuppal-api
    spec:
      containers:
        - name: api
          image: makeuppal-api:latest
          ports:
            - containerPort: 3000
          env:
            - name: DB_HOST
              valueFrom:
                configMapKeyRef:
                  name: makeuppal-config
                  key: db-host
            - name: JWT_SECRET
              valueFrom:
                secretKeyRef:
                  name: makeuppal-secrets
                  key: jwt-secret
          resources:
            requests:
              cpu: '200m'
              memory: '256Mi'
            limits:
              cpu: '500m'
              memory: '512Mi'
          livenessProbe:
            httpGet:
              path: /health
              port: 3000
            initialDelaySeconds: 30
            periodSeconds: 10
          readinessProbe:
            httpGet:
              path: /health
              port: 3000
            initialDelaySeconds: 10
            periodSeconds: 5
```

### 10.4 CI/CD流程

```
代码提交 → GitHub Actions → 代码检查(ESLint) → 测试(Jest) → 构建Docker镜像 → 推送到镜像仓库 → 部署到Kubernetes → 健康检查 → 完成
```

**`.github/workflows/deploy.yml`:**
```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Lint
        run: npm run lint
        
      - name: Test
        run: npm test
        
      - name: Build
        run: npm run build
        
      - name: Build Docker image
        run: docker build -t makeuppal-api:${{ github.sha }} .
        
      - name: Push to registry
        run: |
          docker login -u ${{ secrets.DOCKER_USER }} -p ${{ secrets.DOCKER_PASSWORD }}
          docker tag makeuppal-api:${{ github.sha }} makeuppal-api:latest
          docker push makeuppal-api:latest
          
      - name: Deploy to Kubernetes
        uses: steebchen/kubectl@v2
        with:
          config: ${{ secrets.KUBE_CONFIG }}
          command: set image deployment/makeuppal-api api=makeuppal-api:${{ github.sha }}
```

---

## 11. 监控与运维

### 11.1 日志系统

| 组件 | 用途 |
|------|------|
| Winston | 应用日志记录 |
| Elasticsearch | 日志存储 |
| Kibana | 日志可视化 |
| Filebeat | 日志采集 |

### 11.2 监控指标

| 指标 | 监控方式 | 告警阈值 |
|------|---------|---------|
| API响应时间 | Prometheus + Grafana | P95 > 500ms |
| CPU使用率 | Prometheus + Grafana | > 80% |
| 内存使用率 | Prometheus + Grafana | > 85% |
| 数据库连接数 | Prometheus + Grafana | > 90% |
| 错误率 | Prometheus + Grafana | > 5% |
| 服务可用性 | UptimeRobot | < 99.9% |

### 11.3 告警机制

| 告警级别 | 触发条件 | 通知方式 |
|---------|---------|---------|
| P0-紧急 | 服务宕机、数据库连接失败 | 电话 + 短信 + 钉钉 |
| P1-严重 | API错误率>10%、响应时间>1s | 短信 + 钉钉 |
| P2-警告 | CPU>80%、内存>85% | 钉钉 |
| P3-提示 | 日志异常、配置变更 | 钉钉 |

---

## 12. 风险评估与应对

### 12.1 技术风险

| 风险 | 概率 | 影响 | 应对措施 |
|------|------|------|---------|
| 数据库性能瓶颈 | 中 | 高 | 索引优化、读写分离、缓存策略 |
| API响应慢 | 中 | 高 | 代码优化、Redis缓存、CDN加速 |
| 并发请求过高 | 中 | 高 | 负载均衡、水平扩展、限流熔断 |
| AI推荐准确率低 | 低 | 中 | 持续优化算法、用户反馈收集 |
| 组件安全漏洞 | 低 | 高 | 定期安全扫描、依赖更新 |

### 12.2 业务风险

| 风险 | 概率 | 影响 | 应对措施 |
|------|------|------|---------|
| 用户量增长超预期 | 中 | 高 | 弹性伸缩、容量规划 |
| 数据量激增 | 中 | 中 | 数据库分区、归档策略 |
| 第三方服务不可用 | 低 | 中 | 降级方案、多供应商 |

### 12.3 项目风险

| 风险 | 概率 | 影响 | 应对措施 |
|------|------|------|---------|
| 开发进度延迟 | 中 | 中 | 里程碑监控、每日站会 |
| 需求变更频繁 | 中 | 高 | 需求冻结期、变更管理流程 |
| 人员流动 | 低 | 高 | 代码评审、文档完善、知识共享 |

---

## 13. 附录

### 13.1 API文档访问

| 环境 | 地址 |
|------|------|
| 开发环境 | http://localhost:3000/api/docs |
| 测试环境 | http://test.makeuppal.com/api/docs |
| 生产环境 | http://api.makeuppal.com/api/docs |

### 13.2 健康检查接口

| 接口 | 方法 | 描述 |
|------|------|------|
| `/health` | GET | 服务健康检查 |
| `/health/db` | GET | 数据库连接检查 |
| `/health/redis` | GET | Redis连接检查 |

### 13.3 数据种子迁移策略

将现有 `makeuppal-demo-data.json` 中的演示数据映射到新数据库表结构。

**数据映射关系:**

| JSON字段 | 数据库表 | 字段映射 |
|---------|---------|---------|
| libraryFeed.creators | makeup_templates | type='creator', metadata={creatorName, creatorAvatar} |
| libraryFeed.tutorials | makeup_templates | type='tutorial', metadata={difficulty, duration, suitableFor, effect} |
| libraryFeed.qa | makeup_templates | type='qa', metadata={question, summary, answerCount, viewCount, authorName, authorAvatar} |
| libraryFeed.guofeng | makeup_templates | type='guofeng', metadata={dynasty, technique} |
| libraryFeed.silver | makeup_templates | type='silver', metadata={scene, skinFriendly} |
| libraryFeed.brands | makeup_templates | type='brand', metadata={brandName, brandLogo, templateCount, priceGP, isOfficial} |
| libraryFeed.celebrities | makeup_templates | type='celebrity', metadata={celebrityName, celebrityPhoto, similarity} |
| products | products | 直接映射 |

**种子脚本结构:**

```
src/seed/
├── seed.module.ts
├── seed.service.ts
└── data/
    ├── creators.seed.ts        # 达人精选数据
    ├── tutorials.seed.ts       # 局部拆解数据
    ├── qa.seed.ts              # 美妆问答数据
    ├── guofeng.seed.ts         # 国风专区数据
    ├── silver.seed.ts          # 银发专区数据
    ├── brands.seed.ts          # 大牌精选数据
    ├── celebrities.seed.ts     # 明星同款数据
    └── products.seed.ts        # 商品数据
```

**种子脚本示例 (src/seed/data/creators.seed.ts):**

```typescript
import { MakeupTemplate } from '../../templates/templates.entity';

export const creatorSeeds = [
  {
    id: 'c001',
    title: '早八通勤妆3分钟搞定',
    coverImage: 'assets/images/covers/creator_001.jpg',
    category: '日常妆',
    tag: '通勤',
    likes: 12800,
    collections: 3400,
    type: 'creator',
    metadata: {
      creatorName: '小鹿美妆',
      creatorAvatar: 'assets/images/avatars/ava_001.jpg',
    },
  },
];
```

**执行命令:**

```bash
# 执行数据库迁移
npm run migration:run

# 导入初始数据
npm run seed

# 生成迁移文件
npm run migration:generate -- src/migrations/<migration-name>

# 清空并重新导入数据
npm run seed:refresh
```

**package.json 脚本配置:**

```json
{
  "scripts": {
    "seed": "nest run seed",
    "seed:refresh": "nest run seed -- --refresh",
    "migration:run": "typeorm migration:run",
    "migration:generate": "typeorm migration:generate"
  }
}
```

### 13.4 图片资源迁移

现有项目中的图片资源需要迁移到阿里云OSS，路径映射如下：

| 旧路径 | 新路径 |
|--------|--------|
| assets/images/covers/ | https://cdn.makeuppal.com/assets/covers/ |
| assets/images/avatars/ | https://cdn.makeuppal.com/assets/avatars/ |
| assets/images/products/ | https://cdn.makeuppal.com/assets/products/ |
| assets/images/brands/ | https://cdn.makeuppal.com/assets/brands/ |
| assets/images/celebrities/ | https://cdn.makeuppal.com/assets/celebrities/ |

---

**文档结束**