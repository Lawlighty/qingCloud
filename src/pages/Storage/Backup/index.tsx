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
  TagsOutlined,
  DownOutlined,
  ImportOutlined,
  AppstoreFilled,
  RotateLeftOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import NotificTips from '@/components/NotificList';
import { KeepAlive } from 'react-activation';

const { TabPane } = Tabs;
const { Search } = Input;

// const operations = <Button>Extra Action</Button>;
const Backup: React.FC<{}> = (props) => {
  const operations = {
    left: <div style={{ width: '20px' }} />,
    // right: <Button>Right Extra Action</Button>,
  };
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
    <Menu onClick={handleMenuClick} className="dark_drop">
      <Menu.Item key="1" icon={<TagsOutlined />}>
        绑定标签
      </Menu.Item>
      <Menu.Item key="2" icon={<ImportOutlined />}>
        添加到项目
      </Menu.Item>
      <Menu.Item key="3" icon={<RotateLeftOutlined />}>
        从项目中移除
      </Menu.Item>

      <Menu.Item key="4" icon={<DeleteOutlined />}>
        删除
      </Menu.Item>
    </Menu>
  );
  return (
    <KeepAlive name="/storage/backup" path="备份" saveScrollPosition="screen">
      <PageContainer>
        <div className="bg_div_white font_12">
          <NotificTips>
            <div>
              <b>备份（Snapshot） </b>用于在块设备级别 (block device level)
              上进行硬盘的备份与恢复，可以同时对多张硬盘做备份（包括系统盘和数据盘），也可以对正在运行的主机做在线备份。一张硬盘可以有多个备份链，每条备份链包括一个全量备份点以及多个增量备份点，您可以随时从任意一个备份点恢复数据。
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
              <TabPane tab="自有" key="1" />
              <TabPane tab="共享" key="2" />
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
export default connect(() => ({}))(Backup);
