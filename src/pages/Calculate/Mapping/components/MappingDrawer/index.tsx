import React, { useState } from 'react';
import { connect, Dispatch } from 'umi';
import styles from './index.less';
import { Dropdown, Menu, message, Badge, Drawer } from 'antd';
import { Link } from 'umi';
import { PlusOutlined, BarsOutlined, CopyOutlined } from '@ant-design/icons';
import OperationLog from '@/pages/components/OperationLog/index';
import AddHost from '@/pages/Calculate/Hosts/components/AddHost/index';

const MappingDrawer: React.FC<{}> = (props) => {
  const { visible, onClose } = props;

  // 操作日志
  const [visibleLog, setVisibleLog] = useState(false);

  // 新建主机表单
  const [visibleHost, setVisibleHost] = useState<boolean>(false);

  const onCancel = () => {
    setVisibleHost(false);
  };
  const subHost = () => {
    console.log('提交主机表单信息');
    setVisibleHost(false);
  };
  // 更多操作
  const handleMenuClick = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
    console.log('click key', e.key);
    if (e.key === '1') {
      console.log('aaa');
      setVisibleHost(true);
    }
  };
  const menuDrawer = (
    <Menu onClick={handleMenuClick} className="dark_drop">
      <Menu.Item key="1" icon={<PlusOutlined />}>
        基于映像创建主机
      </Menu.Item>
      <Menu.Item key="2" icon={<CopyOutlined />}>
        克隆映像
      </Menu.Item>
    </Menu>
  );
  return (
    <Drawer
      style={{ zIndex: 50 }}
      width="350"
      placement="right"
      closable={false}
      onClose={() => onClose()}
      visible={visible}
    >
      <div className={styles.mapping_drawer}>
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
            <div className={`${styles.info} color_green`}>arch201310x64a</div>
          </div>
          <div className={styles.basic_info_item}>
            <div className={styles.label}>名称</div>
            <div className={styles.info}>Arch Linux 2013.10 64bit</div>
          </div>
          <div className={styles.basic_info_item}>
            <div className={styles.label}>描述</div>
            <div className={styles.info}>
              默认管理员 root，密码 p12cHANgepwD。新建主机后请务必修改密码！
            </div>
          </div>
          <div className={styles.basic_info_item}>
            <div className={styles.label}>状态</div>
            <div className={styles.info}>
              <div className="succes_processing">
                <Badge status="processing" text="可用" />
              </div>
            </div>
          </div>
          <div className={styles.basic_info_item}>
            <div className={styles.label}>容量</div>
            <div className={styles.info}>20 G</div>
          </div>
          <div className={styles.basic_info_item}>
            <div className={styles.label}>可见范围</div>
            <div className={styles.info}>公用</div>
          </div>
          <div className={styles.basic_info_item}>
            <div className={styles.label}>平台</div>
            <div className={styles.info}>linux</div>
          </div>
          <div className={styles.basic_info_item}>
            <div className={styles.label}>是否加密</div>
            <div className={styles.info}>否</div>
          </div>
          <div className={styles.basic_info_item}>
            <div className={styles.label}>创建时间</div>
            <div className={styles.info}>2014-03-19 10:58:28</div>
          </div>
          <div className={styles.basic_info_item}>
            <div className={styles.label}>创建于</div>
            <div className={styles.info}>7 年前</div>
          </div>
        </div>
        <div className={styles.title}>
          <div className={styles.title_name}>特性</div>
        </div>
        <div className={styles.basic_info}>
          <div className={styles.basic_info_item}>
            <div className={styles.label}>网卡热插拔</div>
            <div className={styles.info}>支持</div>
          </div>
          <div className={styles.basic_info_item}>
            <div className={styles.label}>硬盘热插拔</div>
            <div className={styles.info}>支持</div>
          </div>
          <div className={styles.basic_info_item}>
            <div className={styles.label}>User Data</div>
            <div className={styles.info}>支持</div>
          </div>
          <div className={styles.basic_info_item}>
            <div className={styles.label}>SSH 密钥</div>
            <div className={styles.info}>支持</div>
          </div>
        </div>
        <div style={{ marginTop: 20 }}>
          <div
            className="dark_btn"
            onClick={() => {
              setVisibleLog(true);
            }}
          >
            查看操作日志
          </div>
        </div>
      </div>
      {/* 操作日志 */}
      <OperationLog
        visible={visibleLog}
        onClose={() => {
          setVisibleLog(false);
        }}
      />
      {/* 添加主机 */}
      <AddHost visible={visibleHost} onCancel={onCancel} subHost={subHost} />
    </Drawer>
  );
};
export default connect(() => ({}))(MappingDrawer);
