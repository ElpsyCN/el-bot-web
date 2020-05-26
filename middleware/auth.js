export default function({ store, redirect }) {
  store.dispatch('auth/verify')
  if (!store.state.auth.verify) {
    return redirect('/login')
  }
}
