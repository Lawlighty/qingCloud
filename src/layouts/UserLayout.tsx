import { DefaultFooter, MenuDataItem, getMenuData, getPageTitle } from '@ant-design/pro-layout';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link, SelectLang, useIntl, ConnectProps, connect, FormattedMessage } from 'umi';
import React from 'react';
import { ConnectState } from '@/models/connect';
import logo from '../assets/logo.svg';
import styles from './UserLayout.less';

export interface UserLayoutProps extends Partial<ConnectProps> {
  breadcrumbNameMap: {
    [path: string]: MenuDataItem;
  };
}

const UserLayout: React.FC<UserLayoutProps> = (props) => {
  const {
    route = {
      routes: [],
    },
  } = props;
  const { routes = [] } = route;
  const {
    children,
    location = {
      pathname: '',
    },
  } = props;
  const { formatMessage } = useIntl();
  const { breadcrumb } = getMenuData(routes);
  const title = getPageTitle({
    pathname: location.pathname,
    formatMessage,
    breadcrumb,
    ...props,
  });
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={title} />
      </Helmet>

      <div className={styles.container}>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1 }}>
            {/* <div className={styles.lang}>
              国际化
              <SelectLang />
            </div> */}
            <div className={styles.q_header}>
              <a href="https://www.qingcloud.com">
                <img
                  className={styles.q_header_logo}
                  src="https://console.qingcloud.com/static/images/qingcloud-logo.svg?v=1"
                  alt=""
                />
              </a>
              <div className="flex_1"></div>
              <div className={styles.header_account}>
                <span>没有 QingCloud 账号？</span>
                <a href="/signup">&nbsp;立即注册</a>
              </div>
            </div>
            <div className={styles.content}>
              {/* <div className={styles.top}>
                <div className={styles.header}>
                  <Link to="/">
                    <img alt="logo" className={styles.logo} src={logo} />
                    <span className={styles.title}>Ant Design</span>
                  </Link>
                </div>
                <div className={styles.desc}>
                  <FormattedMessage
                    id="pages.layouts.userLayout.title"
                    defaultMessage="Ant Design 是西湖区最具影响力的 Web 设计规范"
                  />
                </div>
              </div> */}
              {children}
            </div>
            <DefaultFooter />
          </div>
          <div style={{ flex: 1 }}>
            <div
              className="column__container"
              style={{ backgroundSize: 'cover', display: 'flex', cursor: 'pointer' }}
            >
              <img
                src="https://s3.qingcloud.com/files/2020/08/console-@2x.jpg"
                alt=""
                style={{ objectFit: 'cover', width: '100%', height: '100vh' }}
              />
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default connect(({ settings }: ConnectState) => ({ ...settings }))(UserLayout);
