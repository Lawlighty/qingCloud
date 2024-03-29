﻿export default [
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
                redirect: '/overview',
              },
              {
                path: '/welcome',
                // name: 'welcome',
                name: '欢迎',
                hideInMenu: true,
                icon: 'smile',
                component: './Welcome',
              },
              {
                path: '/overview',
                // name: 'welcome',
                name: '总览',
                hideInMenu: true,
                icon: 'dashboard',
                component: './overview',
              },
              {
                path: '/account',
                // name: 'welcome',
                name: '账户',
                // icon: 'dashboard',
                hideInMenu: true,
                routes: [
                  {
                    path: '/account/account_set',
                    // name: 'sub-page',
                    name: '账户设置',
                    component: './Account/AccountSet/index',
                  },
                  {
                    path: '/account/account_safe',
                    // name: 'sub-page',
                    name: '账户安全',
                    component: './Account/AccountSafe/index',
                  },
                ],
              },
              {
                path: '/calculate',
                // redirect: '/calculate/hosts',
                // name: 'admin',
                name: '计算',
                icon: 'calculator',
                routes: [
                  {
                    path: '/calculate',
                    redirect: '/calculate/hosts',
                  },
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
                    path: '/calculate/mapping/:page',
                    hideInMenu: true,
                    name: '映像详情',
                    component: './Calculate/Mapping/MappingDetail',
                  },
                  {
                    path: '/calculate/ssh',
                    // name: 'sub-page',
                    name: 'SSH 密钥',
                    component: './Calculate/SshKeys',
                  },
                  {
                    path: '/calculate/ssh/:page',
                    hideInMenu: true,
                    name: 'SSH 密钥详情',
                    component: './Calculate/SshKeys/SshKeysDetail',
                  },
                  {
                    path: '/calculate/equip',
                    // name: 'sub-page',
                    name: '设备',
                    component: './Calculate/Equipment',
                  },
                  {
                    path: '/calculate/network',
                    // name: 'sub-page',
                    name: '网卡',
                    component: './Calculate/Network',
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
                    path: '/storage',
                    redirect: '/storage/harddisk',
                  },
                  {
                    path: '/storage/harddisk',
                    // name: 'sub-page',
                    name: '硬盘',
                    component: './Storage/Harddisk',
                  },
                  {
                    path: '/storage/harddisk/:page',
                    // name: 'sub-page',
                    hideInMenu: true,
                    name: '硬盘详情',
                    component: './Storage/Harddisk/HarddiskDetail',
                  },
                  {
                    path: '/storage/objstorage',
                    // name: 'sub-page',
                    name: '对象存储',
                    component: './Storage/Objstorage',
                  },
                  {
                    path: '/storage/sharedstorage',
                    // name: 'sub-page',
                    name: '共享存储',
                    component: './Storage/Sharedstorage',
                  },
                  {
                    path: '/storage/vnas',
                    // name: 'sub-page',
                    name: '文件存储vNAS',
                    component: './Storage/Vnas',
                  },
                  {
                    path: '/storage/vnas/rootgroup/:page',
                    // name: 'sub-page',
                    hideInMenu: true,
                    name: '权限组详情',
                    component: './Storage/Vnas/RootGroupDetails',
                  },
                  {
                    path: '/storage/backup',
                    // name: 'sub-page',
                    name: '备份',
                    component: './Storage/Backup',
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
                    path: '/messagemiddleware',
                    redirect: '/messagemiddleware/RabbitMq',
                  },
                  {
                    path: '/messagemiddleware/RabbitMq',
                    // name: 'sub-page',
                    name: 'RabbitMq',
                    component: './Messagemiddleware/RabbitMq',
                  },
                  {
                    path: '/messagemiddleware/RabbitMq/CreateRabbitMq',
                    hideInMenu: true,
                    // name: 'sub-page',
                    name: '创建RabbitMq',
                    component: './Messagemiddleware/RabbitMq/CreateRabbitMq/index',
                  },

                  {
                    path: '/messagemiddleware/RocketMq',
                    // name: 'sub-page',
                    name: 'RocketMq',
                    component: './Messagemiddleware/RocketMq',
                  },
                  {
                    path: '/messagemiddleware/RocketMq/CreateRocketMq',
                    hideInMenu: true,
                    // name: 'sub-page',
                    name: '创建RocketMq',
                    component: './Messagemiddleware/RocketMq/CreateRocketMq/index',
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
