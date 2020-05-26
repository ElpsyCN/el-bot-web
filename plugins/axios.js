function handleStatusCode(code) {
  let msg = ''
  switch (code) {
    case 0:
      msg = '正常'
      break
    case 1:
      msg = '错误的 auth key'
      break
    case 2:
      msg = '指定的 Bot 不存在'
      break
    case 3:
      msg = 'Session 失效或不存在'
      break
    case 4:
      msg = 'Session 未认证(未激活)'
      break
    case 5:
      msg = '发送消息目标不存在(指定对象不存在)'
      break
    case 6:
      msg = '指定文件不存在，出现于发送本地图片'
      break
    case 10:
      msg = '无操作权限，指 Bot 没有对应操作的限权'
      break
    case 20:
      msg = 'Bot 被禁言，指 Bot 当前无法向指定群发送消息'
      break
    case 30:
      msg = '消息过长'
      break
    case 400:
      msg = '错误的访问，如参数错误等'
      break
    default:
      break
  }
  return msg
}

export default function({ app, $axios, store }) {
  if (store.state.auth.sessionKey) {
    $axios.onRequest((config) => {
      if (config.method === 'post' && config.data) {
        config.data.sessionKey = store.state.auth.sessionKey
      }
    })
  }

  $axios.onResponse((res) => {
    console.log(res)
    if (res.status === 200) {
      if (res.data.code) {
        const message = handleStatusCode(res.data.code)
        if (message) {
          app.$toast.error(message)
        }
      }
    }
  })
}
