import {
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
  SettingFilled,
  PropertySafetyFilled,
  ApartmentOutlined,
  GoldenFilled,
  InsuranceFilled,
  KeyOutlined,
  ToolFilled,
  DropboxSquareFilled,
} from '@ant-design/icons';
import { Avatar, Menu, Spin } from 'antd';
import React from 'react';
import { history, ConnectProps, connect } from 'umi';
import { ConnectState } from '@/models/connect';
import { CurrentUser } from '@/models/user';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';

export interface GlobalHeaderRightProps extends Partial<ConnectProps> {
  currentUser?: CurrentUser;
  menu?: boolean;
}

class AvatarDropdown extends React.Component<GlobalHeaderRightProps> {
  onMenuClick = (event: {
    key: React.Key;
    keyPath: React.Key[];
    item: React.ReactInstance;
    domEvent: React.MouseEvent<HTMLElement>;
  }) => {
    const { key } = event;

    if (key === 'logout') {
      const { dispatch } = this.props;

      if (dispatch) {
        dispatch({
          type: 'login/logout',
        });
      }

      return;
    }

    history.push(`/account/${key}`);
  };

  render(): React.ReactNode {
    const {
      currentUser = {
        avatar: '',
        name: '',
      },
      menu,
    } = this.props;
    const menuHeaderDropdown = (
      <Menu className={styles.menu} selectedKeys={[]} onClick={this.onMenuClick}>
        {menu && (
          <Menu.Item key="center">
            <UserOutlined />
            个人中心
          </Menu.Item>
        )}
        {menu && (
          <Menu.Item key="settings">
            <SettingOutlined />
            个人设置
          </Menu.Item>
        )}
        {menu && <Menu.Divider />}
        <Menu.Item key="account_set">
          <SettingFilled />
          账户设置
        </Menu.Item>
        <Menu.Item key="account_safe">
          <PropertySafetyFilled />
          账户安全
        </Menu.Item>
        <Menu.Item key="account_child">
          <ApartmentOutlined />
          子账户
        </Menu.Item>
        <Menu.Item key="account_manage">
          <GoldenFilled />
          管理账户组
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="root_manage">
          <InsuranceFilled />
          访问鉴权管理
        </Menu.Item>
        <Menu.Item key="api">
          <KeyOutlined />
          API密钥
        </Menu.Item>
        <Menu.Item key="app_dev">
          <ToolFilled />
          应用开发
        </Menu.Item>
        <Menu.Item key="down_move">
          <DropboxSquareFilled />
          下载移动客户端
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout">
          <LogoutOutlined />
          退出登录
        </Menu.Item>
      </Menu>
    );
    return currentUser && currentUser.name ? (
      <HeaderDropdown overlay={menuHeaderDropdown}>
        <span className={`${styles.action} ${styles.account}`}>
          <Avatar size="small" className={styles.avatar} src={currentUser.avatar} alt="avatar" />
          <span className={`${styles.name} anticon`}>{currentUser.name}</span>
        </span>
      </HeaderDropdown>
    ) : (
      <span className={`${styles.action} ${styles.account}`}>
        <Spin
          size="small"
          style={{
            marginLeft: 8,
            marginRight: 8,
          }}
        />
      </span>
    );
  }
}

export default connect(({ user }: ConnectState) => ({
  currentUser: user.currentUser,
}))(AvatarDropdown);
