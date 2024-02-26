[English documentation](README_EN.md)
## chrome 浏览器桌面通知

##

## 简介

用于其余B/S下的网络办公提醒功能。
页面最小化的状态下发送通知
依然显示在屏幕的右下角，马上可以看到内容

## 依赖

1. PC chrome浏览器。
2. 手机android 海豚浏览器
3. firefox 可用但是智能展示一个通知（不建议使用，不同版本存在差异）


## 注意事项

#### 1. 关于权限
通知权限是基于网站（或者域名），同一个网站下面的页面只需要获取一次权限即可。
如果在同一个域名下别的页面中禁用。将不会显示通知的，也无法再次获取权限了。
可以同浏览器的菜单查看权限。 
```HTML
设置-》隐私设选下面的 “内容设置”-》通知
```
如果你关闭或者刷新页面了。之前的通知就没法控制了 。

#### 2. 测试相关

直接在浏览器中直接打开测试页面，无法发送通知，请使用http 请求访问页面。



## 使用

1. 引用notify.js文件

```HTML
    <script src="notifiy.js"></script>
```

2. 浏览器配置,检查浏览器是否支持桌面通知功能
```HTML
    Notifier.HasSupport();
```

3. 获取允许桌面通知权限
```HTML
    Notifier.RequestPermission();
```


4. 设置通知显示方式（可选。不设置采用默认模式）
    
```HTML
     Notifier.ModelAll();       //默认方式，显示所有的。在linux一般为三个。在window显示在通知区域。

     Notifier.ModelUpdate();    //更新模式，显示在上一个通知的位置，

     Notifier.ModelCount(c);    //限制当前页面显示的通知个数，默认为三个(可以通过参数c改变个数)。超出限制时关闭最早的通知，

     Notifier.ModelTimeout(ct); //超时消失模式。显示一定时间自动消失。
```

5. 发送通知

```HTML
    Notifier.Notify(icon, title, message); //显示桌面通知，icon：图片的地址  title:通知的标题 message：通知的内容
    Notifier.Notify(icon, title, message, fnClick); //显示桌面通知，icon：图片的地址  title:通知的标题 message：通知的内容 fnClick: 单机事件函数
```

6. 关闭的方法
    
```HTML
     Notifier.Close(type);    //type=1 关闭上一个 其他值 关闭最早打开的

     Notifier.ClosePre();    //关闭最近个打开的通知

     Notifier.CloseLast();   //关闭最早显示的通知

     Notifier.CloseAll();    //关闭所有通知
```

7. 其他方法
    
```HTML
    Notifier.GetPermission();   //获取关于通知使用权限，0，已经得到权限 1，需要获取权限 2，禁止使用

    Notifier.IsGetPermission(); //是否已经获取通知的使用权限

    Notifier.Disable();         //是否禁用通知
```


