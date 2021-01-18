export default function ({ store, redirect }) {
  // has logged in
  if (store.state.auth.verify) {
    return redirect('/dashboard')
  }
}
