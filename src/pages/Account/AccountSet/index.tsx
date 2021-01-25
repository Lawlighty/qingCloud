import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { connect, Dispatch } from 'umi';
import styles from './index.less';
import { Tabs, Button } from 'antd';
import { Link } from 'umi';
import { RedoOutlined } from '@ant-design/icons';
import NotificTips from '@/components/NotificList';
import BasicInfo from './components/BasicInfo/index';
import ChangePhoneNumber from './components/ChangePhoneNumber/index';
import ChangeEmail from './components/ChangeEmail/index';

// import MappingDrawer from './components/MappingDrawer';

const { TabPane } = Tabs;

// const operations = <Button>Extra Action</Button>;
const AccountSet: React.FC<{}> = (props) => {
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
            查看、完善 <b>账户信息</b>，进行账户认证。
          </div>
        </NotificTips>
        <div>
          <Tabs
            tabBarGutter={5}
            tabBarExtraContent={operations}
            activeKey={currentTabs}
            onChange={(key) => {
              setCurrentTabs(key);
            }}
            type="card"
            size="small"
            className="notification_tab"
          >
            <TabPane tab="基本信息" key="1" />
            <TabPane tab="认证信息" key="2" />
            <TabPane tab="开发者信息" key="3" />
            <TabPane tab="修改手机号" key="4" />
            <TabPane tab="修改通知邮箱" key="5" />
            <TabPane tab="通知列表" key="6" />
          </Tabs>
        </div>
        <div className={styles.table_form}>
          {currentTabs === '1' && <BasicInfo />}
          {currentTabs === '4' && <ChangePhoneNumber />}
          {currentTabs === '5' && <ChangeEmail />}
        </div>
      </div>
    </PageContainer>
  );
};
export default connect(() => ({}))(AccountSet);
