const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: '空中与传统互动教学AI',
        component: () => import('pages/Index.vue')
      },
      {
        path: 'wenda/',
        redirect: '/wenda/home',
        component: () => import('pages/Blank.vue'),
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
