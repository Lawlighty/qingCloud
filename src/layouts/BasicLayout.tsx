/**
 * Ant Design Pro v4 use `@ant-design/pro-layout` to handle Layout.
 * You can view component api by:
 * https://github.com/ant-design/ant-design-pro-layout
 */
import KeepAliveTabs from '@/components/KeepAliveTabs';

import ProLayout, {
  MenuDataItem,
  BasicLayoutProps as ProLayoutProps,
  Settings,
  DefaultFooter,
} from '@ant-design/pro-layout';
import React, { useEffect, useMemo, useRef } from 'react';
import { Link, useIntl, connect, Dispatch, history } from 'umi';
import {
  GithubOutlined,
  SmileOutlined,
  HeartOutlined,
  DashboardOutlined,
  CalculatorOutlined,
  DropboxOutlined,
  WifiOutlined,
} from '@ant-design/icons';
import { Result, Button } from 'antd';
import Authorized from '@/utils/Authorized';
import RightContent from '@/components/GlobalHeader/RightContent';
import { ConnectState } from '@/models/connect';
import { getMatchMenu } from '@umijs/route-utils';
import logo from '../assets/logo.svg';
import logo2 from '../assets/geek.png';

const IconMap = {
  smile: <SmileOutlined />,
  heart: <HeartOutlined />,
  dashboard: <DashboardOutlined />,
  calculator: <CalculatorOutlined />,
  dropbox: <DropboxOutlined />,
  wifi: <WifiOutlined />,
};

const defaultMenus = [
  {
    path: '/welcome',
    name: '欢迎',
    icon: 'smile',
  },
  {
    path: '/overview',
    name: '总览',
    icon: 'dashboard',
  },
  {
    path: '/calculate',
    name: '计算',
    icon: 'calculator',
    // routes: [
    //   {
    //     path: '/calculate/hosts',
    //     name: '主机',
    //   },
    //   {
    //     path: '/calculate/mapping',
    //     // name: 'sub-page',
    //     name: '映像',
    //   },
    // ],
  },
  {
    path: '/storage',
    name: '存储',
    icon: 'dropbox',
  },
  {
    path: '/messagemiddleware',
    name: '消息列队与中间件',
    icon: 'wifi',
  },
];
const loopMenuItem = (menus: MenuDataItem[]): MenuDataItem[] =>
  menus.map(({ icon, children, ...item }) => ({
    ...item,
    icon: icon && IconMap[icon as string],
    children: children && loopMenuItem(children),
  }));
const noMatch = (
  <Result
    status={403}
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={
      <Button type="primary">
        <Link to="/user/login">Go Login</Link>
      </Button>
    }
  />
);
export interface BasicLayoutProps extends ProLayoutProps {
  breadcrumbNameMap: {
    [path: string]: MenuDataItem;
  };
  route: ProLayoutProps['route'] & {
    authority: string[];
  };
  settings: Settings;
  dispatch: Dispatch;
}
export type BasicLayoutContext = { [K in 'location']: BasicLayoutProps[K] } & {
  breadcrumbNameMap: {
    [path: string]: MenuDataItem;
  };
};
/**
 * use Authorized check all menu item
 */

const menuDataRender = (menuList: MenuDataItem[]): MenuDataItem[] =>
  menuList.map((item) => {
    const localItem = {
      ...item,
      children: item.children ? menuDataRender(item.children) : undefined,
    };
    return Authorized.check(item.authority, localItem, null) as MenuDataItem;
  });

const defaultFooterDom = (
  <DefaultFooter
    copyright={`${new Date().getFullYear()} 蚂蚁集团体验技术部出品`}
    links={[
      {
        key: 'Ant Design Pro',
        title: 'Ant Design Pro',
        href: 'https://pro.ant.design',
        blankTarget: true,
      },
      {
        key: 'github',
        title: <GithubOutlined />,
        href: 'https://github.com/ant-design/ant-design-pro',
        blankTarget: true,
      },
      {
        key: 'Ant Design',
        title: 'Ant Design',
        href: 'https://ant.design',
        blankTarget: true,
      },
    ]}
  />
);

const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  const {
    dispatch,
    children,
    settings,
    location = {
      pathname: '/',
    },
  } = props;

  const menuDataRef = useRef<MenuDataItem[]>([]);

  useEffect(() => {
    if (dispatch) {
      dispatch({
        type: 'user/fetchCurrent',
      });
    }
  }, []);
  /**
   * init variables
   */

  const handleMenuCollapse = (payload: boolean): void => {
    if (dispatch) {
      dispatch({
        type: 'global/changeLayoutCollapsed',
        payload,
      });
    }
  };
  // get children authority
  const authorized = useMemo(
    () =>
      getMatchMenu(location.pathname || '/', menuDataRef.current).pop() || {
        authority: undefined,
      },
    [location.pathname],
  );

  const { formatMessage } = useIntl();

  return (
    <ProLayout
      className="aaamy"
      logo={<div style={{ background: '#000000' }} />}
      collapsedButtonRender={false}
      collapsed
      menuItemRender={(menuItemProps, defaultDom) => {
        if (menuItemProps.isUrl || !menuItemProps.path) {
          return defaultDom;
        }
        return <Link to={menuItemProps.path}>{defaultDom}</Link>;
      }}
      postMenuData={(menuData) => {
        menuDataRef.current = menuData || [];
        return menuData || [];
      }}
      iconfontUrl="//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js"
      menuDataRender={() => loopMenuItem(defaultMenus)}
      // menuDataRender={menuDataRender}
      // route={{
      //   routes: [
      //     {
      //       path: '/welcome',
      //       name: '欢迎',
      //       icon: 'smile',
      //     },
      //     {
      //       path: '/overview',
      //       name: '总览',
      //       icon: 'icon-facebook',
      //     },
      //     {
      //       path: '/calculate',
      //       name: '计算',
      //       icon: 'icon-twitter',
      //     },
      //     {
      //       path: '/storage',
      //       name: '存储',
      //       icon: 'icon-twitter',
      //     },
      //     {
      //       path: '/database',
      //       name: '数据库与缓存',
      //       icon: 'icon-twitter',
      //     },
      //     {
      //       path: '/messagemiddleware',
      //       name: '消息列队与中间件',
      //       icon: 'icon-twitter',
      //     },
      //   ],
      // }}
      headerRender={false}
      disableContentMargin
    >
      <ProLayout
        logo="https://console.qingcloud.com/static/images/logo.svg?v=1"
        // logo={<div />}
        // 国际化
        formatMessage={formatMessage}
        {...props}
        {...settings}
        onCollapse={handleMenuCollapse}
        onMenuHeaderClick={() => history.push('/')}
        menuItemRender={(menuItemProps, defaultDom) => {
          if (menuItemProps.isUrl || !menuItemProps.path) {
            return defaultDom;
          }
          return <Link to={menuItemProps.path}>{defaultDom}</Link>;
        }}
        breadcrumbRender={(routers = []) => [
          {
            path: '/',
            breadcrumbName: formatMessage({ id: 'menu.home' }),
          },
          ...routers,
        ]}
        itemRender={(route, params, routes, paths) => {
          const first = routes.indexOf(route) === 0;
          return first ? (
            <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
          ) : (
            <span>{route.breadcrumbName}</span>
          );
        }}
        // headerRender={<KeepAliveTabs />}
        // headerRender={() => <KeepAliveTabs />}
        // footerRender={() => defaultFooterDom}
        menuDataRender={menuDataRender}
        rightContentRender={() => <RightContent />}
        postMenuData={(menuData) => {
          menuDataRef.current = menuData || [];
          return menuData || [];
        }}
      >
        <Authorized authority={authorized!.authority} noMatch={noMatch}>
          <div>
            <KeepAliveTabs />
            {children}
            <div>{defaultFooterDom}</div>
          </div>
          {/* {children} */}
        </Authorized>
      </ProLayout>
    </ProLayout>

    /* <ProLayout
  // logo={logo}
  logo="https://console.qingcloud.com/static/images/logo.svg?v=1"
  // logo={logo2}
  // 国际化
  formatMessage={formatMessage}
  {...props}
  {...settings}
  onCollapse={handleMenuCollapse}
  onMenuHeaderClick={() => history.push('/')}
  menuItemRender={(menuItemProps, defaultDom) => {
    if (menuItemProps.isUrl || !menuItemProps.path) {
      return defaultDom;
    }
    return <Link to={menuItemProps.path}>{defaultDom}</Link>;
  }}
  breadcrumbRender={(routers = []) => [
    {
      path: '/',
      breadcrumbName: formatMessage({ id: 'menu.home' }),
    },
    ...routers,
  ]}
  itemRender={(route, params, routes, paths) => {
    const first = routes.indexOf(route) === 0;
    return first ? (
      <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
    ) : (
      <span>{route.breadcrumbName}</span>
    );
  }}
  footerRender={() => defaultFooterDom}
  menuDataRender={menuDataRender}
  rightContentRender={() => <RightContent />}
  postMenuData={(menuData) => {
    menuDataRef.current = menuData || [];
    return menuData || [];
  }}
>
  <Authorized authority={authorized!.authority} noMatch={noMatch}>
    {children}
  </Authorized>
</ProLayout>; */
  );
};

export default connect(({ global, settings }: ConnectState) => ({
  collapsed: global.collapsed,
  settings,
}))(BasicLayout);
