let plugin_websocket = (() => {
    try {
      return plugins.load('com.tony.websocket')
    } catch (e) {
      toastLog('当前未安装websocket插件，加载失败' + e)
      exit()
    }
  })()
  // 创建websocket服务端
  let socketServer = plugin_websocket.createServer(8080/*指定监听端口*/, {
      onOpen: function (conn, handshake) {
        // 监听连接创建成功的消息
      },
      onClose: function (conn, code, reason, remote) {
        // 监听连接断开消息
      },
      onMessage: function (conn, message) {
        // 监听收到消息的操作，这里简易demo 直接返回收到的消息给客户端
        conn.send("Echo: " + message);
      },
     onByteMessage: function (conn, bytes) {
        // 监听二进制数据
      },
      onError: function (conn, ex) {
        // 监听连接异常信息
      },
      onStart: function () {
        // 监听服务启动消息
        toastLog('服务已启动')
      }
    }
  )
  // 启动websocket服务
  socketServer.start()
  setInterval(()=> {
    // 避免脚本自动退出
  }, 20000)
  
  events.on('exit', function () {
    // 脚本退出时主动断开服务
    socketServer.stop()
  })
