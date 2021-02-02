import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { connect, Dispatch } from 'umi';
import styles from './index.less';
import {
  Tabs,
  Button,
  notification,
  Table,
  Dropdown,
  Menu,
  message,
  Input,
  Tooltip,
  Spin,
} from 'antd';
import { Link } from 'umi';
import {
  RedoOutlined,
  PlusOutlined,
  DownOutlined,
  UserOutlined,
  AppstoreFilled,
  EyeFilled,
  DatabaseFilled,
  FundFilled,
  ControlFilled,
} from '@ant-design/icons';
import NotificTips from '@/components/NotificList';
import CreateResource from '@/pages/components/CreateResource/index';
import { KeepAlive } from 'react-activation';

const { TabPane } = Tabs;
const { Search } = Input;

// const operations = <Button>Extra Action</Button>;
const Sharedstorage: React.FC<{}> = (props) => {
  const operations = {
    left: <div style={{ width: '20px' }} />,
    // right: <Button>Right Extra Action</Button>,
  };

  const [showBuid, setShowBuild] = useState<boolean>(false);
  // tab
  const [currentTabs, setCurrentTabs] = useState<string>('1');
  // view
  const [currentView, setCurrentView] = useState<string>('1');
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState([
    {
      id: 1,
      name: '企业级分布式 SAN 1',
      state: 'usable',
      drive: 'D',
      cap: '10',
      type: 'type1',
      tack: '副本策略1',
      project: '所属项目',
      backup: '备份于1aaa',
      createby: '2010-10-10-10',
    },
    {
      id: 2,
      name: '企业级分布式 SAN 2',
      state: 'stop',
      drive: 'D',
      cap: '12',
      type: 'type3',
      tack: '副本策略1',
      project: '所属项目',
      backup: '备份于1aaa',
      createby: '2010-10-10-10',
    },
    {
      id: 3,
      name: '企业级分布式 SAN 2',
      state: 'stop',
      drive: 'D',
      cap: '12',
      type: 'type3',
      tack: '副本策略1',
      project: '所属项目',
      backup: '备份于1aaa',
      createby: '2010-10-10-10',
    },
    {
      id: 4,
      name: '企业级分布式 SAN 2',
      state: 'stop',
      drive: 'D',
      cap: '12',
      type: 'type3',
      tack: '副本策略1',
      project: '所属项目',
      backup: '备份于1aaa',
      createby: '2010-10-10-10',
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
    },
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '状态',
      dataIndex: 'state',
      key: 'state',
      filters: [
        { text: '可用', value: 'usable' },
        { text: '使用中', value: 'using' },
        { text: '已暂停', value: 'stop' },
        { text: '已删除', value: 'delete' },
      ],
      onFilter: (value, record) => record.state.indexOf(value) === 0,
    },
    {
      title: '资源/盘符',
      dataIndex: 'drive',
      key: 'drive',
    },
    {
      title: '容量 (GB)',
      dataIndex: 'cap',
      key: 'cap',
    },
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
      sorter: true,
    },
    {
      title: '副本策略',
      dataIndex: 'tack',
      key: 'tack',
    },
    {
      title: '所属项目',
      dataIndex: 'project',
      key: 'project',
    },
    {
      title: '备份于',
      dataIndex: 'backup',
      key: 'backup',
    },
    {
      title: '创建于',
      dataIndex: 'createby',
      key: 'createby',
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
      <Menu.Item key="3" icon={<UserOutlined />}>
        3rd menu item
      </Menu.Item>
    </Menu>
  );
  return (
    <KeepAlive name="/storage/sharedstorage" path="共享存储" saveScrollPosition="screen">
      <PageContainer>
        <CreateResource
          visible={showBuid}
          onClose={() => {
            setShowBuild(false);
          }}
        />
        <div className="bg_div_white font_12">
          <NotificTips>
            {currentTabs === '1' && (
              <div>
                <b>企业级分布式 SAN (NeonSAN) </b>是基于全闪存架构提供的分布式 SAN 服务，适用于对
                IOPS、吞吐、容量和稳定性要求很高的业务，例如：企业核心数据库 Oracle RAC 及 SQL
                Server 故障转移集群等、企业级分布式数据库
                RadonDB、物理主机高可用架构、大数据分析与计算、以及搭建高可用容器集群等。
              </div>
            )}
            {currentTabs === '2' && (
              <div>
                你可以在 QingCloud 上快速搭建基于 iSCSI 的 <b>Virtual SAN</b>
                服务，在你的应用系统之间共享数据。注意，如果将一块硬盘通过 Virtual SAN
                服务挂载到多台主机上，那么必须通过共享型文件系统（Shared File
                System）的支持才可以并行读写。
              </div>
            )}
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
              <TabPane tab="企业级分布式 SAN (NeonSAN)" key="1" />
              <TabPane tab="vSAN" key="2" />
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
                  onClick={() => {
                    setShowBuild(true);
                  }}
                >
                  <PlusOutlined />
                  创建
                </Button>
                <div>
                  <Dropdown overlay={menu} trigger={['click']}>
                    <Button className={`${styles.mybtn} ${styles.height_36}`}>
                      <AppstoreFilled />
                      更多操作 <DownOutlined />
                    </Button>
                  </Dropdown>
                </div>

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
            <p className="tips">
              * 提示：可通过在各个资源上点击「右键」来进行常用操作，以及「双击」来修改基本属性。
            </p>
          </div>
        </div>
      </PageContainer>
    </KeepAlive>
  );
};
export default connect(() => ({}))(Sharedstorage);
