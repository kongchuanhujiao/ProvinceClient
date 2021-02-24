const routes = [
  {
    path: '/',
    component: () => import('src/EntryPoint.vue'),
    children: [
      {
        path: '',
        name: '空中与传统互动教学AI',
        component: () => import('pages/Index.vue')
      },
      {
        path: 'home',
        name: '欢迎',
        component: () => import('pages/Home.vue')
      },
      {
        path: 'wenda/',
        redirect: '/wenda/home',
        component: () => import('src/EntryPoint.vue'),
        children: [
          {
            path: 'home',
            name: '问答 数+控制台',
            component: () => import('pages/wenda/Home.vue')
          },
          {
            path: 'list',
            name: '问答列表',
            component: () => import('pages/wenda/List.vue')
          },
          {
            path: 'questions/:id',
            name: '问答详情',
            component: () => import('pages/wenda/Details.vue')
          },
          {
            path: 'new',
            name: '新建问答',
            component: () => import('pages/wenda/Home.vue')
          },
          {
            path: 'markets',
            name: '问题市场',
            component: () => import('pages/wenda/Home.vue')
          }
        ]
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
