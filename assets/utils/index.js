// https://github.com/ElpsyCN/el-bot-web/wiki/More-API/
function getAvatarById(id, type, size) {
  let url = 'https://cdn.jsdelivr.net/gh/YunYouJun/cdn/img/avatar/none.jpg'
  if (type === 'qq') {
    url = `https://q1.qlogo.cn/g?b=qq&nk=${id}&s=${size}`
  } else if (type === 'group') {
    url = `https://p.qlogo.cn/gh/${id}/${id}/${size}/`
  }
  return url
}

export { getAvatarById }
