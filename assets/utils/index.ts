// https://github.com/ElpsyCN/el-bot-web/wiki/More-API/
import { AvatarSize, getAvatarById as getAvatar } from 'mirai-ts'

export function getAvatarById(
  id: number,
  type: 'friend' | 'group',
  size: AvatarSize
) {
  return (
    getAvatar(id, type, size) ||
    'https://cdn.jsdelivr.net/gh/YunYouJun/cdn/img/avatar/none.jpg'
  )
}
