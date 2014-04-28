(function(window){
 /**
  * @brief Notifier 
  *
  * @param type 1. 一直提示 2，更新提示内容  3， 控制显示上限。超过个数删除最早的  4，超时更新
  * @param para  本参数在type为3，4时才有效， type为3表示可以最多显示通知的个数  4， 表示多少秒后删除了
  *
  * @return 
  */
    function Notifier() {};

    window.Notifier = Notifier;
      

    type = 1;
    queue = [];
    t = 5;
    c = 3;

    window.Notifier.ModelAll = function() {
        type = 1;
    }

    window.Notifier.ModelUpdate =  function() {
        type = 2;
    }

    window.Notifier.ModelCount = function(ct) {
        if(ct !== undefined) c = ct;
        type = 3;
    }

    window.Notifier.ModelTimeout = function(timeout) {
        if(timeout !== undefined) t = timeout;
        type = 4;
    }



    window.Notifier.HasSupport = function() {
        if(window.webkitNotifications) {
            return true;
        } else {
            return false;
        }
    }

    window.Notifier.GetPermission = function() {
        return window.webkitNotifications.checkPermission();
    }

    window.Notifier.IsGetPermission = function() {
        return (window.webkitNotifications.checkPermission() === 0);
    }

    window.Notifier.Disable = function() {
        return (window.webkitNotifications.checkPermission() === 2);
    }

    window.Notifier.RequestPermission = function(cb) {
        window.webkitNotifications.requestPermission(function() {
            if(cb) {cb(window.webkitNotifications.checkPermission() == 0)}
        });
    }


    window.Notifier.RequestPermission = function(cb) {
        window.webkitNotifications.requestPermission(function() {
            if(cb) {cb(window.webkitNotifications.checkPermission() == 0)}
        });
    }

    //type = 1;关闭上一个
    window.Notifier.Close = function(type) {
        if(type = 1) {
            tmp = queue.pop();
            tmp.cancel();
        } else {
            tmp = queue.shift();
            tmp.cancel();
        }
    }

    window.Notifier.ClosePre = function () {
        tmp = queue.pop();
        tmp.cancel();
    }

    window.Notifier.CloseLast = function () {
        tmp = queue.shift();
        tmp.cancel();
    }

    window.Notifier.CloseAll = function() {
        while(queue.length > 0) {
            var tmp =  queue.shift();
            tmp.cancel();
        }
    }


    window.Notifier.Notify = function(icon, title, body) {
      if (window.webkitNotifications.checkPermission() == 0) {

        switch(type) {
            case 2:
                if(queue.length > 0) {
                    tmp = queue.pop();
                    tmp.cancel();
                }
                break;
            case 3:
                while(queue.length >= c) {
                    tmp = queue.shift();
                    tmp.cancel();
                }
                break;
             case 4:
                setTimeout(function(){popup.cancel();},  t*1000); 
                break;
        }
        var popup = window.webkitNotifications.createNotification(icon, title, body);
        popup.show();
        var q = queue;
        popup.onclose = function(){
            var cur = q.indexOf(popup);
            if(cur >= 0) {
                q.splice(cur, 1);
            }
        };

        queue.push(popup);
        return true;
      } else {
		RequestPermission();
		
	    }

      return false;
    }
})(window);

