/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: '/trips',
    view: 'Trips',
    name: 'Reiseübersicht'
  },
  {
    path: '/login',
    view: 'Login'
  },
  {
    path: '/register/:hash',
    view: 'Register'
  }
]
