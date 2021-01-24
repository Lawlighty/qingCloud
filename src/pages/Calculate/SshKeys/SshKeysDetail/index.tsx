import React, { useState } from 'react';
import { connect, Dispatch } from 'umi';
import styles from './index.less';
import { Dropdown, Menu, Alert, Tooltip, Typography } from 'antd';
import { Link } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import {
  EditOutlined,
  BarsOutlined,
  RotateLeftOutlined,
  KeyOutlined,
  TagsOutlined,
  ImportOutlined,
  DeleteOutlined,
  CopyOutlined,
} from '@ant-design/icons';
import OperationLog from '@/pages/components/OperationLog/index';
import AddHost from '@/pages/Calculate/Hosts/components/AddHost/index';

const { Paragraph } = Typography;

const SshKeysDetail: React.FC<{}> = (props) => {
  const { visible, onClose } = props;

  // 操作日志
  const [visibleLog, setVisibleLog] = useState(false);
  // 公钥
  const [key, setKey] = useState(
    'AAAAB3NzaC1yc2EAAAADAQABAAABAQCWjmdnHQr02rDZvP/4amJqIYXuK3dbdK0r1zPoXkG9MvcoawLrAMM7ssilLh53HhBH2pC1VjrDjGB3Askxb9GHxEUOI8NRFLTwKNlz+EV5FEi1Kinf2DlJaQoCQs/MqYDhgQpHqLF69Vofnc3pDo0MxXN5WpB+UKowH668G2q3St2qI7wPD46Y91SjkvLFD1SFVpqHgizjwpxFl4LKykeKMa4S3XewGDT4afAHH19iqWF/5HZvXa2lWZE3UhV/avrKJb1W1Nh0TsZ5gH+hnT/UJZXafyp0jAfbD/0Yy5CC2mZwpApVwQLkw19f1lFF2wWGSmC3WhFg9YZj/EaKkjxr',
  );

  // 新建主机表单
  const [visibleHost, setVisibleHost] = useState<boolean>(false);
  const onCancel = () => {
    setVisibleHost(false);
  };
  const subHost = () => {
    setVisibleHost(false);
  };
  // 更多操作
  const handleMenuClick = (e) => {
    if (e.key === '1') {
      setVisibleHost(true);
    }
  };
  const menuDrawer = (
    <Menu onClick={handleMenuClick} className="dark_drop">
      <Menu.Item key="1" icon={<EditOutlined />}>
        修改
      </Menu.Item>
      <Menu.Item key="2" icon={<KeyOutlined />}>
        加载到主机
      </Menu.Item>
      <Menu.Item key="3" icon={<TagsOutlined />}>
        绑定标签
      </Menu.Item>
      <Menu.Item key="4" icon={<ImportOutlined />}>
        添加到项目
      </Menu.Item>
      <Menu.Item key="5" icon={<RotateLeftOutlined />}>
        从项目中移除
      </Menu.Item>
      <Menu.Item key="6" icon={<DeleteOutlined />}>
        删除
      </Menu.Item>
    </Menu>
  );
  return (
    <PageContainer>
      <div className={styles.body_div}>
        <div className={styles.left_div}>
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
                  <div className={`${styles.info} color_green`}>arch201310x64a</div>
                </div>
                <div className={styles.basic_info_item}>
                  <div className={styles.label}>名称</div>
                  <div className={styles.info}>主机名称ssh</div>
                </div>
                <div className={styles.basic_info_item}>
                  <div className={styles.label}>标签</div>
                  <div className={styles.info}>主机名称ssh</div>
                </div>
                <div className={styles.basic_info_item}>
                  <div className={styles.label}>描述</div>
                  <div className={styles.info}>主机名称ssh的描述信息</div>
                </div>
                <div className={styles.basic_info_item}>
                  <div className={styles.label}>加密方法</div>
                  <div className={styles.info}>ssh-rsa</div>
                </div>
                <div className={styles.basic_info_item}>
                  <div className={styles.label}>主机</div>
                  <div className={styles.info}>arch201310x64a主机</div>
                </div>
                <div className={styles.basic_info_item}>
                  <div className={styles.label}>创建时间</div>
                  <div className={styles.info}>2021-01-23 21:44:57</div>
                </div>
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
        </div>
        <div className={styles.right}>
          <div className={styles.title}>公钥</div>
          <div className={styles.content}>
            <Alert className="dark_alert" message="" description={key} type="info" />
          </div>
          <div className={styles.btn}>
            <Paragraph
              style={{ color: '#fff' }}
              className="dark_btn"
              copyable={{
                text: key,
              }}
            >
              复制到剪切板
            </Paragraph>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
export default connect(() => ({}))(SshKeysDetail);
