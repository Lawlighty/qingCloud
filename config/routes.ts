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
                path: '/calculate',
                // name: 'admin',
                name: '计算',
                icon: 'calculator',
                routes: [
                  {
                    path: '/calculate/hosts',
                    // name: 'sub-page',
                    name: '主机',
                    component: './Calculate/Hosts',
                  },
                  {
                    path: '/calculate/mapping',
                    // name: 'sub-page',
                    name: '映像',
                    component: './Calculate/Mapping',
                  },
                  {
                    path: '/calculate/ssh',
                    // name: 'sub-page',
                    name: 'SSH 密钥',
                    component: './Welcome',
                  },
                  {
                    path: '/calculate/equip',
                    // name: 'sub-page',
                    name: '设备',
                    component: './Welcome',
                  },
                  {
                    path: '/calculate/network',
                    // name: 'sub-page',
                    name: '网卡',
                    component: './Welcome',
                  },
                ],
              },
              {
                path: '/storage',
                // name: 'admin',
                name: '存储',
                icon: 'dropbox',
                routes: [
                  {
                    path: '/storage/harddisk',
                    // name: 'sub-page',
                    name: '硬盘',
                    component: './Welcome',
                  },
                  {
                    path: '/storage/sharedstorage',
                    // name: 'sub-page',
                    name: '共享存储',
                    component: './Welcome',
                  },
                  {
                    path: '/storage/vnas',
                    // name: 'sub-page',
                    name: '文件存储vNAS',
                    component: './Welcome',
                  },
                  {
                    path: '/calculate/backup',
                    // name: 'sub-page',
                    name: '备份',
                    component: './Welcome',
                  },
                ],
              },
              {
                path: '/database',
                // name: 'admin',
                hideInMenu: true,
                name: '数据库与缓存',
                icon: 'database',

                routes: [
                  {
                    path: '/database/harddisk',
                    // name: 'sub-page',
                    name: '硬盘',
                    component: './Welcome',
                  },
                  {
                    path: '/storage/sharedstorage',
                    // name: 'sub-page',
                    name: '共享存储',
                    component: './Welcome',
                  },
                  {
                    path: '/storage/vnas',
                    // name: 'sub-page',
                    name: '文件存储vNAS',
                    component: './Welcome',
                  },
                  {
                    path: '/calculate/backup',
                    // name: 'sub-page',
                    name: '备份',
                    component: './Welcome',
                  },
                ],
              },
              {
                path: '/messagemiddleware',
                // name: 'admin',
                name: '消息列队与中间件',
                icon: 'wifi',

                routes: [
                  {
                    path: '/messagemiddleware/RabbitMq',
                    // name: 'sub-page',
                    name: 'RabbitMq',
                    component: './Welcome',
                  },
                  {
                    path: '/messagemiddleware/RocketMq',
                    // name: 'sub-page',
                    name: 'RocketMq',
                    component: './Welcome',
                  },
                ],
              },
              {
                path: '/admin',
                // name: 'admin',
                name: '管理页面',
                hideInMenu: true,
                icon: 'crown',
                component: './Admin',

                routes: [
                  {
                    path: '/admin/sub-page',
                    // name: 'sub-page',
                    name: '二级管理',
                    icon: 'smile',
                    component: './Welcome',
                  },
                ],
              },
              {
                // name: 'list.table-list',
                name: '查询表格',
                icon: 'table',
                hideInMenu: true,
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
