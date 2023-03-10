# 计算机网络五层模型: 
## 应用层(HTTP、FTP) -> 
## 传输层(TCP三次握手四次挥手、UDP实时通讯) -> 
## 网络层 -> 
## 数据链路层 ->
## 物理层（硬件、光缆）

### http 0.9 没有header

### http1.0 
-----------------------------------
1. 增加了请求指令 GET POST 和HEAD
2. status code
3. header
4. 缓存
...

1.0缺点: TCP链接只能发送一个请求链接关闭；
------------------------------------

### http1.1
* 增加了OPTIONS PUT PATCH DELETE 
* 持久连接
* 增加host

1.1缺点: 队头堵塞（请求只能一个一个回应，客户端最多6个请求一次);
避免队头堵塞的方法:
* 减少请求数
* 同时多开持久连接
这里衍生了很多优化技能：
* 合并脚本和样式
* 图片嵌入CSS
* 域名分片 domain sharding
----------------------------------------

### http2:
* 二进制传输
* 信道复用
*  

## 三次握手
🤝 --->：发送SYN "我想建立连接"
🤝 <---：发送SYN+ACK "可以建立连接"
🤝 --->：回传ACK "好的,那我们连接"
### 为什么需要三次握手
网络传输有延迟，服务端直接返回客户端请求可能丢包导致客户端接收不到数据

## 四次挥手
👋🏻 --->： 客户端和服务器说通话即将结束
👋🏻 <---： 客户端“我没啥说的了” 服务端“我知道了” 此时服务端可能还有话说
👋🏻 <---： 客户端不能要求服务端跟着自己的节奏结束，服务端又说了话最后“我说完了”
👋🏻 --->： 客户端 “好的”
为什么四次挥手？
“数据传送结束后发出的释放通知，待对方确认后进入半关闭状态，当另一方没有数据再发时，发出链接释放通知，对方确认后完全关闭TCP 总归防止最后数据没传完丢失”

### HTTP 报文
* HTTP 请求： 请求行、消息报头、请求正文
* HTTP 响应： 状态行、消息报头、响应正文

状态行： HTTP/1.1 200 OK
消息报头: 
1. Date: Sat, 31 Dec 2022 23:23:23 GMT
2. Content-Type: text/html; charset=xxxx
3. Content-Length: 122;          

### HTTP请求
* GET: 请求获取Request URI标识的资源
* POST: 在Request URI标识的资源后附件新数据
* PUT: 请求存储资源，并用Request URI 作为标识
* DELTE: 请求删除Request URI标识的资源
* OPTIONS: 请求查询服务器性能或者查询资源相关的选项和需求

### HTTP 状态码
* 1xx: 指示信息--表示请求已接收，继续处理
* 2xx: 成功--请求数据返回被接收
* 3xx: 重定向--要完成请求必须进行进一步操作   301 永久重定向（走缓存，需要强制刷新） 302 临时跳转
* 4xx: 客户端错误--请求有语法错误或者请求无法实现
* 5xx: 服务器错误--未能实现合法的请求

### 跨域CORS
由于浏览器的同源策略限制导致了跨域的产生 1-协议 2-域名 3-端口 任意一个不同
* Access-Control-Allow-Origin 只允许get post head跨域，不允许类如delete put等
* Access-Control-Allow-Methods 解决上一行的问题

跨域限制（预请求options)
* 默认允许Content-type以下3个，其他option预请求preflight通过才可以发送
1. text/plain
2. multipart/form-data
3. apploication/x-www-form-urlencoded
* Access-Control-Allow-Headers 允许的自定义请求头，不然预检不通过
* Access-Control-Max-Age: '1000' Methods和Headers可以被缓存多久不用options预请求Preflight

### HTTP缓存 Cache-Control
* 可缓存性
1. no-cache 去服务端验证才能使用
2. no-store 不能走缓存
3. public 随便缓存
4. private 只有它发起浏览器可以缓存

* 到期时间 (秒)
1. max-age 最大过期时间
2. s-maxage 只有代理服务器生效
3. max-stale 只能在发起端设置 就算 max-age过期 max-stale没过期也会走缓存

* 验证头（不走本地缓存 发送请求头带上验证头 验证决定走不走缓存 基于no-cahe）
1. last-modified
  a. 配个if-Modified-Since和in-Unmodified-Since
  b. 对比上次修改时间验证资源是否需要更新
2. Etag
  a. 数据签名
  b. 配合if-Match 或 if-None-Match
  c. 对比资源的签名判断是否走缓存
------------------------------------------

### Cookie 键值对 可设置多个
* Cookie 客户端将服务器设置的Cookie返回到服务器
* Set-Cookie 服务器向客户端设置Cookies

服务器在响应消息中用Set-Cookie 头把Cookie内容发送给客户端，客户端在新的请求头中自动将同样的内容携带在Cookie 头中发送给服务端，从而实现会话保持

属性：
1. max-age 和 expires设置过期时间
2. Secure只在https发送
⭐️3. 服务端设置HttpOnly，导致前端无法document.cookie访问 
------------------------------------------

### HTTP长连接
* TCP Connection
 1. Connection: keep-alive/close  (开启或者关闭)
 2. HTTP2 只需要建立一个TCP长连接（同域名下）

### 数据协商
* 请求：
 1. Accept 客户端期望接受什么时类型
 2. Accept-Encoding 压缩方式 gzip, deflate, br
 3. Accept-language 语言  zh-CN,zh;
 4. user-Agent 用户设备信息  处理浏览器兼容需要的 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36
* 返回
 1. Content-type 服务端对客户端的实际返回内容类型
 2. Content-Encoding
 3. Content-Language

### CSP content-secure-policy 内容安全策略(解决XSS攻击)
* 资源类型 'script-src \'self\'; form-action \'self\'; report-uri/report'

### HTTPS
* http是明文传输
* https 通过握手进行加密
 1. 加密-公钥
 2. 解密-私钥
![https](./https.png "http")

1. 客户端请求服务器获取证书公钥
2. 客户端（SSL/TLS）解析证书（无效弹出警告）
3. 生成随机值
4. 用公钥加密随机值生成秘钥
5. 客户端用私钥解密得到随机值
6. 服务端用私钥解密秘钥得到随机值
7. 将信息和随机值混在一起进行对称加密
8. 将加密的内容发送给客户端
9. 客户端用秘钥解密信息

## HTTP2
带宽（100m宽带理论峰值为12.5m/s http1.1,发送请求速度为上行带宽,服务端速度返回为下行带宽）
http 痛点
* http0.9 只传输html 数据简单 只有请求行 没有请求头响应头
* http1.0 解决多种类型文件下载 通过请求头和响应头交互 新增cache缓存 状态码 用户代理
* http1.1 对文件的传输速度-新增持久化连接connection（默认open打开），用于提升连接效率（但是http1.1对带宽利用不理想，不能占满带宽，上面的带宽解释）

* http2.2

为什么http1.1 很难占满带宽
1. tcp的慢启动（首屏渲染时间多少都会降低 因为html css js 本来就不算大）
2. 多个tcp链接，会竞争带宽，不同tcp不能协商哪些资源先下载
3. http1.1队头阻塞问题

* 基于以上问题  提出http2.0 的多路复用 --- 一个域名只使用一个tcp长连接进行（只慢启动一次）
* https://www.yuque.com/i_geek/rules/hld2k8