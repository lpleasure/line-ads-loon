# LINE tabs Loon experiment

实验脚本，未实机验证。默认不修改。只改 getConfigurations 的已知 Compact Thrift 配置映射；结构不符、目标键缺失或异常时原样放行。不修改主页和聊天配置，不记录或上传响应。

Loon 添加响应脚本，URL 匹配 ^https://legy-jp\.line-apps\.com/S4$，启用完整 Body、二进制 Body，为该主机启用 MITM 并信任证书。选择 line-tabs.js。

参数为 JSON。先分别测试 {"shopping":true}、{"news":true}、{"apps":true}，有效后再组合。默认 {} 不修改。

Shopping 对应 function.maintab.commercetab；新闻对应 main_tab.newstab；Apps 候选为 function.maintab.minitab，尚未证实。只将 Y 改为 N。客户端可能忽略、缓存配置或补回默认标签，不能保证两标签布局。

每次完全退出并打开 LINE，确认产生新的 getConfigurations 请求，再检查入口及主页、聊天收发是否正常。不要卸载 LINE 或清除聊天数据。禁用脚本后等待重新获取原始配置可回退，缓存可能延迟恢复。

仓库不得包含 HAR、账号或令牌。脚本无网络调用。Loon 文档：https://nsloon.app/docs/Script/script_api/
