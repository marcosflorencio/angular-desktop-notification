(function() {
  'use strict';
  angular
  .module('DesktopNotification', [])
  .factory('notification', notification);
  
   notification.$injec = [];
   function notification(){
    var factory = {
      push : push,
    };
    return factory;
   
    function push(title, options, onClickCallBack) {
      Notification.requestPermission(function() {
        var notification = new Notification(title, options);
        notification.onclick = function(){
          if (onClickCallBack)
            onClickCallBack();
          if (!options.closeOnClick == true)
            notification.close();
        };
      });
    };  
  };
})();