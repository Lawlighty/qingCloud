import React, { useState } from 'react';
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout';
import { connect, Dispatch, useIntl, FormattedMessage } from 'umi';
import styles from './index.less';
import { Tabs, Button, notification } from 'antd';
import { Link } from 'umi';
import { ReadFilled } from '@ant-design/icons';
const { TabPane } = Tabs;
// const operations = <Button>Extra Action</Button>;
const Notifications: React.FC<{}> = (props) => {
  const operations = {
    left: <div style={{ width: '20px' }} />,
    // right: <Button>Right Extra Action</Button>,
  };
  const [notificList, setNotificList] = useState([1, 2]);

  const markAllRead = () => {
    notification.success({
      message: '标记成功!',
      placement: 'bottomRight',
    });
  };

  return (
    <PageContainer>
      <div className="bg_div_white font_12">
        <div className={`${styles.notification_tips} ${styles.c_notifications_bg}`}>
          <div>
            系统发出公告、产品消息、安全通知、故障通知等信息时，会实时推送到您的
            <span className="font_w_600">消息中心（Notification Center）</span>
            ，您也可以在这里查看系统发送的历史信息。
          </div>
          <div>
            您可以在 <Link to="/notifications">这里</Link> 修改接收消息的通知列表.
          </div>
        </div>
        <div>
          <Tabs
            tabBarGutter={5}
            tabBarExtraContent={operations}
            defaultActiveKey="1"
            type="card"
            size="small"
            className="notification_tab"
          >
            <TabPane tab="全部" key="1" />
            <TabPane tab="产品消息" key="2" />
            <TabPane tab="运维通知" key="3" />
            <TabPane tab="安全通知" key="4" />
            <TabPane tab="财务相关" key="5" />
            <TabPane tab="AppCenter" key="6" />
            <TabPane tab="其他" key="7" />
          </Tabs>
          <div className={`p_20 notification_div ${styles.notification_div}`}>
            {notificList.length ? (
              <div className="flex">
                <div className={styles.notifications_list}>
                  {/* 抬头 */}
                  <div className="flex">
                    <div className="flex_1">
                      <Button className={styles.all_read} onClick={markAllRead}>
                        <ReadFilled />
                        全部标记已读
                      </Button>
                    </div>

                    <div>合计 : 1</div>
                  </div>
                  {/* 列表项 */}
                  <div className={styles.msg_items}>
                    {[1, 2, 3, 4, 5].map((item) => (
                      <div className={styles.msg_item}>
                        <div className={styles.msg_item_title}>
                          {' '}
                          13616859570，您刚刚获得代金券一张 [cpi-1xv2v3cu]
                        </div>
                        <div>发布于: 2020-12-17 18:47:35</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 详情页',' */}
                <div className={styles.notification_main}>
                  <div className={styles.notification_title}>
                    13616859570，您刚刚获得代金券一张 [cpi-1xv2v3cu]
                  </div>
                  <div className={styles.time}>发布于: 2020-12-17 18:47:35</div>
                  <div className={styles.notification_content}>
                    您刚刚获得了一张面额为 ¥ 2.00 元的代金券 [{' '}
                    <a href="https://console.qingcloud.com/finance/coupons/">cpi-1xv2v3cu</a> ]，
                    有效期从 2020-12-17 18:47:35 到 2021-03-17 18:47:35，请点击代金券查看详情。
                  </div>
                </div>
              </div>
            ) : (
              <div className={styles.notification_no}>没有历史消息</div>
            )}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
export default connect(() => ({}))(Notifications);
