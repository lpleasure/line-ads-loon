# LINE 去广告（Loon）

安装地址：https://raw.githubusercontent.com/lpleasure/line-tabs-loon/main/line-ads.plugin

在 Loon 的插件页面添加上述链接并启用。开启 MitM，安装并信任 Loon 证书。旧的 line-tabs.lpx 底部标签实验插件可停用，这两个插件互不依赖。重新打开 LINE 后查看广告变化，不要卸载 LINE 或清除聊天数据。

此版本使用 Loon 原生拦截规则，无需另装 JavaScript。针对广告素材域 ad.line-scdn.net 和明确的广告 API、Smart Channel 广告路径、广告 SDK。保留 Shopping、新闻、Apps 等入口，不保证消除广告占位空白、官方账号消息或所有推广内容。未覆盖的地区网关需要实际请求证据后再增加。

不整域拦截 line.me、line-apps.com、line-scdn.net、lan.line.me 或 obs.line-scdn.net；不拦截 S4、通用主页模块服务、头像和聊天图片路径。URL 规则依赖 HTTPS 解密成功及规则命中；本地优先放行规则可能使插件规则不命中。

验证：已检查 8 个正向广告 URL 样例和 7 个负向样例（聊天网关、通用图片、普通静态资源及相似非目标路径），全部符合预期。这不是 Loon 真机测试，不能保证当前 LINE 各地区版本都有效。启用后检查消息收发、图片、通话与主页；若异常，关闭此插件并重新打开 LINE。已有缓存可能延迟刷新。

如果仍有广告，请提供 Loon 中对应请求的主机名和路径（删除查询参数、Cookie、Authorization 和令牌），用于进一步定位；不要公开 HAR 或聊天数据。

端点参考（2026-10-24 查阅）：https://github.com/jkgtw/Surge/blob/master/Modules/LINE-ADs.sgmodule 。仅选取明确广告端点，未引入其通用主页模块和遥测拦截。
Loon URL 规则文档：https://nsloon.app/docs/Rule/http_rule/
