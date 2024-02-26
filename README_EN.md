[中文文档](README.md)
## chrome browser desktop notification

##

## Introduction

For the rest of the B / S network office reminder function.
Send notification when the page is minimized
Still displayed in the lower right corner of the screen, you can immediately see the content

## dependent

1. PC chrome browser
2. Mobile phone dolphin browser
3. firefox but smart to display a notification (not recommended, there are differences between different versions)


## Precautions

#### 1. About permissions
Notification of permissions is based on the site (or domain name), the same site below the page just need to get permission once.
If the other in the same domain name in the page is disabled. Will not be notified, nor can I get permission again.
Can view the permissions with the browser's menu.
```HTML
Settings -> content settings -> notice
```
If you close or refresh the page. Before the notice can not control.

#### 2. Test related

Directly open the test page directly in the browser, can not send notification, please use the http request to access the page.



## use

1. reference notify.js file

```HTML
    <script src="notifiy.js"></script>
 ```

2. Browser configuration. Check whether the browser supports desktop notification feature

```HTML
    Notifier.HasSupport();
```

3. Get allowed desktop notification
 
```HTML
    Notifier.RequestPermission ();
```


4. Set the notification display (optional. Do not set the default mode)

```HTML
    Notifier.ModelAll (); // default mode, showing all. In linux generally three. The window is displayed in the notification area.
     
    Notifier.ModelUpdate (); // Update mode, displayed at the last notification location,
     
    Notifier.ModelCount (c); / / limit the number of notifications displayed on the current page, the default is three (you can change the number of parameters c). Close the earliest notice when exceeding the limit,
     
    Notifier.ModelTimeout (ct); // Timeout disappear mode. Display a certain time automatically disappear.
```

5. Send notification

```HTML
    Notifier.Notify (icon, title, message); // Show desktop notification, icon: Address of the image title: Title of the notification message: Content of the notification
    Notifier.Notify (icon, title, message, fnClick); // Show desktop notification, icon: Address of the image title: Title of the notification message: Content of the notification
```
    
6. Close the method

```HTML
    Notifier.Close (type); // type = 1 Close previous value Close the earliest open
     
    Notifier.ClosePre (); // Close the most recently opened notification
     
    Notifier.CloseLast (); // Turn off the earliest displayed notification
     
    Notifier.CloseAll (); // Close all notifications
```
     
7. Other ways

```HTML
    Notifier.GetPermission (); // Get notification on the use of permissions, 0, has been given permission 1, need to obtain permission 2, prohibit the use of
    
    Notifier.IsGetPermission (); / / Has access to the notification been obtained
    
    Notifier.Disable (); // Whether to disable the notification
```


