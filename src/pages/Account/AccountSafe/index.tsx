import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { connect, Dispatch } from 'umi';
import styles from './index.less';
import { Tabs, Divider } from 'antd';
import { Link } from 'umi';
import { LockOutlined } from '@ant-design/icons';
import NotificTips from '@/components/NotificList';
import SafeSet from './components/SafeSet/index';
import ChangePsw from './components/ChangePsw/index';
import SecondSert from './components/SecondSert/index';
import LoginLog from './components/LoginLog/index';

// import MappingDrawer from './components/MappingDrawer';

const { TabPane } = Tabs;

// const operations = <Button>Extra Action</Button>;
const AccountSafe: React.FC<{}> = (props) => {
  const operations = {
    left: <div style={{ width: '20px' }} />,
    // right: <Button>Right Extra Action</Button>,
  };
  // tab
  const [currentTabs, setCurrentTabs] = useState<string>('1');

  return (
    <PageContainer>
      <div className="bg_div_white font_12">
        <NotificTips>
          <div>
            青云QingCloud 提供了完备的<b>账户安全</b>
            服务，您可以修改密码、设置登录二次认证、查看登录记录等。
          </div>
        </NotificTips>
        <div>
          <Tabs
            tabBarGutter={5}
            tabBarExtraContent={operations}
            defaultActiveKey="1"
            onChange={(key) => {
              setCurrentTabs(key);
            }}
            type="card"
            size="small"
            className="notification_tab"
          >
            <TabPane tab="安全设置" key="1" />
            <TabPane tab="修改密码" key="2" />
            <TabPane tab="二次认证" key="3" />
            <TabPane tab="登录历史" key="4" />
          </Tabs>
        </div>
        <div className={styles.table_form}>
          {currentTabs === '1' && <SafeSet />}
          {currentTabs === '2' && <ChangePsw />}
          {currentTabs === '3' && <SecondSert />}
          {currentTabs === '4' && <LoginLog />}
        </div>
      </div>
    </PageContainer>
  );
};
export default connect(() => ({}))(AccountSafe);
