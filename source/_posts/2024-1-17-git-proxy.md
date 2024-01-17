---
title: GITHUB 代理设置
---

# 1. 设置代理

``` shell
# 注意修改成自己的IP和端口号
git config --global http.proxy socks5://127.0.0.1:10808
git config --global https.proxy socks5://127.0.0.1:10808
```

# 2. 取消代理

``` shell
# 取消代理
git config --global --unset http.proxy
git config --global --unset https.proxy
```

# 3. 查看代理

``` shell
# 查看代理
git config --global --get http.proxy
git config --global --get https.proxy
```