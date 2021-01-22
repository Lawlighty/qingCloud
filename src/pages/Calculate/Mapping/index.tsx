import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { connect, Dispatch } from 'umi';
import styles from './index.less';
import { Tabs, Button, Table, Dropdown, Menu, message, Input, Spin, Badge, Drawer } from 'antd';
import { Link } from 'umi';
import {
  RedoOutlined,
  PlusOutlined,
  DownOutlined,
  UserOutlined,
  AppstoreFilled,
  BarsOutlined,
  CopyOutlined,
} from '@ant-design/icons';
import NotificTips from '@/components/NotificList';

const { TabPane } = Tabs;
const { Search } = Input;

// const operations = <Button>Extra Action</Button>;
const Mapping: React.FC<{}> = (props) => {
  const operations = {
    left: <div style={{ width: '20px' }} />,
    // right: <Button>Right Extra Action</Button>,
  };
  // tab
  const [currentTabs, setCurrentTabs] = useState<string>('1');
  // view
  const [currentView, setCurrentView] = useState<string>('1');
  //抽屉
  const [visibleDriver, setVisibleDriver] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState([
    {
      id: 'arch201310x64a',
      name: '	Arch Linux 2013.10 64bit',
      state: 'usable',
      cap: 20,
      plat: 'linux',
      suppPhy: true,
      suppIpv6: true,
    },
    {
      id: 'arch201609x64a',
      name: '	Arch Linux 2016.09 64bit',
      state: 'usable',
      cap: 20,
      plat: 'linux',
      suppPhy: true,
      suppIpv6: true,
    },
    {
      id: 'arch20180701x64',
      name: '	Arch Linux 2018.07.01 64bit',
      state: 'unusable',
      cap: 19,
      plat: 'linux',
      suppPhy: true,
      suppIpv6: true,
    },
    {
      id: 'bio8x64',
      name: '	Bio-Linux 8.0 64bit',
      state: 'usable',
      cap: 12,
      plat: 'linux',
      suppPhy: true,
      suppIpv6: true,
    },
    {
      id: 'arch201310x64a2',
      name: '	Arch Linux 2013.10.01 64bit',
      state: 'usable',
      cap: 20,
      plat: 'linux',
      suppPhy: true,
      suppIpv6: true,
    },
  ]);
  const [pagination, setPagination] = useState<object>({ current: 1, pageSize: 10 });

  // table
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(selectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const fetch = (params = {}) => {};
  const handleTableChange = (pagination, filters, sorter) => {
    fetch({
      sortField: sorter.field,
      sortOrder: sorter.order,
      pagination,
      ...filters,
    });
  };
  // 更多操作
  const handleMenuClick = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
  };
  // 查询
  const onSearch = (value) => {
    console.log(value);
  };

  // 刷新
  const toRefush = () => {
    console.log('点击刷新');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      sorter: (a, b) => a.id.length - b.id.length,
      render: (text) => {
        return (
          <div className="span_line cursor_p color_green" onClick={() => setVisibleDriver(true)}>
            {text}
          </div>
        );
      },
    },
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: '状态',
      dataIndex: 'state',
      key: 'state',
      filters: [
        { text: '可用', value: 'usable' },
        { text: '已弃用', value: 'unusable' },
      ],
      onFilter: (value, record) => record.state.indexOf(value) === 0,
      render: (text) => {
        return text === 'usable' ? (
          <div className="succes_processing">
            <Badge status="processing" text="可用" />
          </div>
        ) : (
          <div className="succes_default">
            <Badge status="default" text="已弃用" />
          </div>
        );
      },
    },
    {
      title: '容量(G)',
      dataIndex: 'cap',
      key: 'cap',
      sorter: (a, b) => a.cap - b.cap,
    },
    {
      title: '平台',
      dataIndex: 'plat',
      key: 'plat',
    },
    {
      title: '支持物理机',
      dataIndex: 'suppPhy',
      key: 'suppPhy',
      render: (text) => {
        return text ? '是' : '否';
      },
    },
    {
      title: '支持 IPv6',
      dataIndex: 'suppIpv6',
      key: 'suppIpv6',
      render: (text) => {
        return text ? '是' : '否';
      },
    },
  ];

  //更多操作
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" disabled icon={<UserOutlined />}>
        1st menu item
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        2nd menu item
      </Menu.Item>
    </Menu>
  );
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
    <PageContainer>
      <div className="bg_div_white font_12">
        <NotificTips>
          <div>
            <b>映像（Image）</b>
            是带有操作系统的主机模板。用户可以基于已有映像创建主机，也可以将自有主机捕获为新映像，以备后用。
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
            <TabPane tab="系统" key="1" />
            <TabPane tab="自有" key="2" />
            <TabPane tab="共享" key="3" />
            <TabPane tab="市场" key="4" />
          </Tabs>
        </div>
        <div className={styles.table_form}>
          <div className={styles.table_fun}>
            <div className="flex flex_1">
              <div
                className={`${styles.mybtn} ${styles.padd_7_16} ${styles.height_36} ${
                  loading ? 'mydisabled' : ''
                }`}
                onClick={toRefush}
              >
                <RedoOutlined />
              </div>
              <Button
                type="primary"
                className={styles.height_36}
                style={{ marginRight: 4 }}
                disabled={!selectedRowKeys.length}
              >
                <PlusOutlined />
                基于映像创建主机
              </Button>
              {(currentTabs === '2' || currentTabs === '3') && (
                <div>
                  <Dropdown overlay={menu} trigger={['click']}>
                    <Button className={`${styles.mybtn} ${styles.height_36}`}>
                      <AppstoreFilled />
                      更多操作 <DownOutlined />
                    </Button>
                  </Dropdown>
                </div>
              )}
              <Search placeholder="" onSearch={onSearch} style={{ width: 200 }} />
            </div>
            <div className="flex">
              <div className={styles.pagination}>合计:0</div>
            </div>
          </div>
          <Spin tip="数据加载中..." spinning={loading}>
            <Table
              columns={columns}
              rowSelection={rowSelection}
              rowKey={(record) => record.id}
              dataSource={data}
              pagination={pagination}
              loading={loading}
              onChange={handleTableChange}
            />
          </Spin>
          {/* 抽屉 */}
          <Drawer
            width="350"
            placement="right"
            closable={false}
            onClose={() => setVisibleDriver(false)}
            visible={visibleDriver}
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
                <div className="dark_btn">查看操作日志</div>
              </div>
            </div>
          </Drawer>
          <p className="tips">
            * 提示：可通过在各个资源上点击「右键」来进行常用操作，以及「双击」来修改基本属性。
          </p>
          {currentTabs === '1' && (
            <p className="tips">
              * 如果 Windows 映像标明为“未激活”，请自行购买 Windows
              授权，常规渠道有微软商店或者淘宝。
            </p>
          )}
        </div>
      </div>
    </PageContainer>
  );
};
export default connect(() => ({}))(Mapping);
