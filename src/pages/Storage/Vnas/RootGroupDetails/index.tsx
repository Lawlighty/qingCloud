import React, { useState } from 'react';
import { connect, Dispatch } from 'umi';
import styles from './index.less';
import { Dropdown, Menu, Tabs, Badge, Button } from 'antd';
import { Link } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import {
  EditOutlined,
  BarsOutlined,
  RotateLeftOutlined,
  BulbOutlined,
  TagsOutlined,
  ImportOutlined,
  DeleteOutlined,
  LaptopOutlined,
  BulbFilled,
  ContactsFilled,
  CameraOutlined,
  UsbFilled,
  BellOutlined,
} from '@ant-design/icons';
import EditRootGroup from '../components/EditRootGroup/index';

// import ModifyDisk from '../components/ModifyDisk/index';

const { TabPane } = Tabs;

const RootGroupDetails: React.FC<{}> = (props) => {
  const { visible, onClose } = props;

  // tab
  const [currentTabs, setCurrentTabs] = useState('1');

  // 修改
  const [visibleMod, setVisibleMod] = useState<boolean>(false);
  const onClosModal = () => {
    setVisibleMod(false);
  };

  // 更多操作
  const handleMenuClick = (e) => {
    if (e.key === '1') {
      setVisibleMod(true);
    }
  };
  const menuDrawer = (
    <Menu onClick={handleMenuClick} className="dark_drop">
      <Menu.Item key="1" icon={<EditOutlined />}>
        修改
      </Menu.Item>
      <Menu.Item key="2" icon={<TagsOutlined />}>
        绑定账号
      </Menu.Item>
      <Menu.Item key="3" icon={<ImportOutlined />}>
        添加到项目
      </Menu.Item>
      <Menu.Item key="4" icon={<RotateLeftOutlined />}>
        从项目中移除
      </Menu.Item>
      <Menu.Item key="5" icon={<DeleteOutlined />}>
        删除
      </Menu.Item>
    </Menu>
  );

  const callback = (key) => {
    setCurrentTabs(key);
  };
  return (
    <PageContainer>
      <EditRootGroup
        visible={visibleMod}
        onClose={() => {
          setVisibleMod(false);
        }}
      />
      <div className={styles.body_div}>
        <div className={styles.left_div}>
          {/* 编辑 */}
          {/* <ModifyDisk visible={visibleMod} onClose={onClosModal} /> */}
          <div className={styles.mapping_drawer}>
            <div className={styles.mapping_item}>
              <div className={styles.title}>
                <div className={styles.title_name}>基本属性</div>
                <div className="flex_1"></div>
                <Dropdown overlay={menuDrawer} trigger={['click']} className="myDropdown">
                  <BarsOutlined />
                </Dropdown>
              </div>
              <div className={styles.basic_info}>
                <div className={styles.basic_info_item}>
                  <div className={styles.label}>ID</div>
                  <div className={`${styles.info} color_blue`}>
                    s2g-gedvep1f <BulbFilled className="color_green" />
                  </div>
                </div>

                <div className={styles.basic_info_item}>
                  <div className={styles.label}>名称</div>
                  <div className={styles.info}>缺省权限组</div>
                </div>
                <div className={styles.basic_info_item}>
                  <div className={styles.label}>描述</div>
                  <div className={styles.info}></div>
                </div>
                <div className={styles.basic_info_item}>
                  <div className={styles.label}>类型</div>
                  <div className={styles.info}>Samba</div>
                </div>
                <div className={styles.basic_info_item}>
                  <div className={styles.label}>创建时间</div>
                  <div className={styles.info}>2021-01-26 09:37:10</div>
                </div>
                <div className={styles.basic_info_item}>
                  <div className={styles.label}>创建于</div>
                  <div className={styles.info}>1 小时前</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <Tabs size="large" activeKey={currentTabs} onChange={callback}>
            <TabPane
              tab={
                <span>
                  <ContactsFilled />
                  账户
                </span>
              }
              key="1"
            >
              <div>
                <div className="alert_yellow margin_b_20 font_12">
                  提示：添加、修改或是删除账户的操作都有可能需要更新所关联的 NAS 服务器，请前往 NAS
                  服务器详情页进行确认和操作。
                </div>
              </div>
            </TabPane>
            <TabPane
              tab={
                <span>
                  <UsbFilled />
                  文件存储 vNAS
                </span>
              }
              key="2"
            >
              <div>
                <div className="dark_btn display_in_b">
                  <BellOutlined className="margin_r_10" />
                  绑定事件告警策略
                </div>
                <div className="help">该资源没有绑定告警策略</div>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </div>
    </PageContainer>
  );
};
export default connect(() => ({}))(RootGroupDetails);
