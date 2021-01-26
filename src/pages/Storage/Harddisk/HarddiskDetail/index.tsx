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
  SettingOutlined,
  CopyOutlined,
  CameraOutlined,
  AppstoreOutlined,
  BellOutlined,
} from '@ant-design/icons';
import OperationLog from '@/pages/components/OperationLog/index';
import AddHost from '@/pages/Calculate/Hosts/components/AddHost/index';
import ModifyDisk from '../components/ModifyDisk/index';

const { TabPane } = Tabs;

const HarddiskDetail: React.FC<{}> = (props) => {
  const { visible, onClose } = props;

  // 操作日志
  const [visibleLog, setVisibleLog] = useState(false);
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
      <Menu.Item key="2" icon={<LaptopOutlined />}>
        加载硬盘到主机
      </Menu.Item>
      <Menu.Item key="3" icon={<DeleteOutlined />}>
        卸载硬盘
      </Menu.Item>
      <Menu.Item key="4" icon={<SettingOutlined />}>
        扩容
      </Menu.Item>
      <Menu.Item key="5" icon={<CopyOutlined />}>
        克隆硬盘
      </Menu.Item>
      <Menu.Item key="6" icon={<TagsOutlined />}>
        绑定标签
      </Menu.Item>
      <Menu.Item key="7" icon={<CameraOutlined />}>
        创建备份
      </Menu.Item>
      <Menu.Item key="8" icon={<ImportOutlined />}>
        添加到项目
      </Menu.Item>
      <Menu.Item key="9" icon={<RotateLeftOutlined />}>
        从项目中移除
      </Menu.Item>
      <Menu.Item key="10" icon={<BulbOutlined />}>
        恢复
      </Menu.Item>
      <Menu.Item key="11" icon={<DeleteOutlined />}>
        删除
      </Menu.Item>
    </Menu>
  );
  const menuDrawer2 = (
    <Menu onClick={handleMenuClick} className="dark_drop">
      <Menu.Item key="1" icon={<AppstoreOutlined />}>
        查看详情
      </Menu.Item>
    </Menu>
  );
  const callback = (key) => {
    setCurrentTabs(key);
  };
  return (
    <PageContainer>
      <div className={styles.body_div}>
        {/* 编辑 */}
        <ModifyDisk visible={visibleMod} onClose={onClosModal} />
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
                  <div className={styles.label}>状态</div>
                  <div className={styles.info}>
                    <div className="succes_processing">
                      <Badge status="processing" text="可用" />
                    </div>
                  </div>
                </div>
                <div className={styles.basic_info_item}>
                  <div className={styles.label}>区域</div>
                  <div className={styles.info}>上海</div>
                </div>
                <div className={styles.basic_info_item}>
                  <div className={styles.label}>名称</div>
                  <div className={styles.info}>无</div>
                </div>
                <div className={styles.basic_info_item}>
                  <div className={styles.label}>标签</div>
                  <div className={styles.info}></div>
                </div>
                <div className={styles.basic_info_item}>
                  <div className={styles.label}>资源/盘符</div>
                  <div className={styles.info}></div>
                </div>
                <div className={styles.basic_info_item}>
                  <div className={styles.label}>容量</div>
                  <div className={styles.info}>10 GB</div>
                </div>
                <div className={styles.basic_info_item}>
                  <div className={styles.label}>硬盘 IOPS</div>
                  <div className={styles.info}>580</div>
                </div>
                <div className={styles.basic_info_item}>
                  <div className={styles.label}>类型</div>
                  <div className={styles.info}>基础型</div>
                </div>
                <div className={styles.basic_info_item}>
                  <div className={styles.label}>是否加密</div>
                  <div className={styles.info}>否</div>
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

            <div className={styles.mapping_drawer}>
              <div className={styles.mapping_item}>
                <div className={styles.title}>
                  <div className={styles.title_name}>租赁信息</div>
                  <div className="flex_1"></div>
                  <Dropdown overlay={menuDrawer2} trigger={['click']} className="myDropdown">
                    <BarsOutlined />
                  </Dropdown>
                </div>
                <div className={styles.basic_info}>
                  <div className={styles.basic_info_item}>
                    <div className={styles.label}>开始计费时间</div>
                    <div className={styles.info}>2021-01-26 09:37:10</div>
                  </div>
                  <div className={styles.basic_info_item}>
                    <div className={styles.label}>停止计费时间</div>
                    <div className={styles.info}></div>
                  </div>
                  <div className={styles.basic_info_item}>
                    <div className={styles.label}>价格</div>
                    <div className={styles.info}>¥ 0.0099 每小时</div>
                  </div>
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
        </div>
        <div className={styles.right}>
          <Tabs size="large" activeKey={currentTabs} onChange={callback}>
            <TabPane
              tab={
                <span>
                  <CameraOutlined />
                  备份
                </span>
              }
              key="1"
            >
              <div>
                <Button type="primary">
                  <CameraOutlined className="margin_r_10" />
                  创建备份
                </Button>
                <div className="help">没有备份</div>
              </div>
            </TabPane>
            <TabPane
              tab={
                <span>
                  <BellOutlined />
                  告警
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
export default connect(() => ({}))(HarddiskDetail);
