export default function({ store, redirect }) {
  if (!store.state.auth.verify) {
    return redirect('/login')
  }
}
