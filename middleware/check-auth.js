export default function (context) {
  console.log('[Middleware chek-auth]');
  context.store.dispatch('initAuth', context.req);
}
