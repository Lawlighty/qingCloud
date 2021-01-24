import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { connect, Dispatch } from 'umi';
import styles from './index.less';
import { Tabs, Button } from 'antd';
import { Link } from 'umi';
import { RedoOutlined } from '@ant-design/icons';
import NotificTips from '@/components/NotificList';

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
          你离开始使用仅差一步：立即完成认证，即可享受相应数量的资源配额和测试费
        </div>
      </div>
    </PageContainer>
  );
};
export default connect(() => ({}))(AccountSafe);
