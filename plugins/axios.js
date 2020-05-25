export default function({ $axios, store }) {
  console.log(store.state.auth)
  if (store.state.auth.sessionKey) {
    $axios.onRequest((config) => {
      config.data.sessionKey = store.state.auth.sessionKey
    })
  }
}
