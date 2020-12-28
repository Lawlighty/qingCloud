export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/login',
          },
          {
            name: 'register',
            path: '/user/register',
            component: './user/register',
          },
        ],
      },
      {
        path: '/',
        component: '../layouts/SecurityLayout',
        routes: [
          {
            path: '/',
            component: '../layouts/BasicLayout',
            authority: ['admin', 'user'],
            routes: [
              {
                path: '/',
                redirect: '/welcome',
              },
              {
                path: '/welcome',
                // name: 'welcome',
                name: '欢迎',
                icon: 'smile',
                component: './Welcome',
              },
              {
                path: '/overview',
                // name: 'welcome',
                name: '总览',
                icon: 'dashboard',
                component: './overview',
              },
              {
                path: '/admin',
                // name: 'admin',
                name: '管理页面',
                icon: 'crown',
                component: './Admin',
                authority: ['admin'],
                routes: [
                  {
                    path: '/admin/sub-page',
                    // name: 'sub-page',
                    name: '二级管理',
                    icon: 'smile',
                    component: './Welcome',
                    authority: ['admin'],
                  },
                ],
              },
              {
                // name: 'list.table-list',
                name: '查询表格',
                icon: 'table',
                path: '/list',
                component: './ListTableList',
              },
              //通知
              {
                path: '/notifications',
                name: '通知',
                hideInMenu: true,
                component: './notifications',
              },
              {
                path: '/ticks',
                // name: 'welcome',
                name: '工单列表',
                icon: 'dashboard',
                hideInMenu: true,
                component: './ticks',
              },
              {
                path: '/ticks/:page',
                // name: 'welcome',
                name: '工单详情',
                icon: 'dashboard',
                hideInMenu: true,
                component: './ticks/detail',
              },
              {
                component: './404',
              },
            ],
          },
          {
            component: './404',
          },
        ],
      },
    ],
  },
  {
    component: './404',
  },
];
