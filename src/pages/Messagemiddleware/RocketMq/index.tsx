import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { connect, Dispatch, history } from 'umi';
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
  CaretRightOutlined,
  AppstoreFilled,
  IssuesCloseOutlined,
  DeleteOutlined,
  CloseSquareOutlined,
} from '@ant-design/icons';
import NotificTips from '@/components/NotificList';
import { KeepAlive } from 'react-activation';

const { Search } = Input;

// const operations = <Button>Extra Action</Button>;
const RocketMq: React.FC<{}> = (props) => {
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
      id: 'arch201310x64a',
      name: '我的密钥1',
      way: 'ssh-dss',
      project: '项目1',
      createTime: '2021-01-21 13:10:10',
    },
    {
      id: 'arch201310x64b',
      name: '我的密钥2',
      way: 'ssh-rsa',
      project: '项目1',
      createTime: '2021-01-21 13:10:10',
    },
    {
      id: 'arch201310x64c',
      name: '我的密钥3',
      way: 'ssh-rsa',
      project: '项目2',
      createTime: '2021-01-21 13:10:10',
    },
    {
      id: 'arch201310x64d',
      name: '我的密钥4',
      way: 'ssh-dss',
      project: '项目2',
      createTime: '2021-01-21 13:10:10',
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
    },
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: '加密方法',
      dataIndex: 'way',
      key: 'way',
      filters: [
        { text: 'ssh-rsa', value: 'ssh-rsa' },
        { text: 'ssh-dss', value: 'ssh-dss' },
        { text: 'ecdsa-sha2-nispt521', value: 'ecdsa-sha2-nispt521' },
        { text: 'ssh-ed25519', value: 'ssh-ed25519' },
      ],
      onFilter: (value, record) => record.way.indexOf(value) === 0,
    },
    {
      title: '所属项目',
      dataIndex: 'project',
      key: 'project',
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
    },
  ];

  //更多操作
  const menu = (
    <Menu onClick={handleMenuClick} className="dark_drop">
      <Menu.Item key="1" disabled icon={<CaretRightOutlined />}>
        启动
      </Menu.Item>
      <Menu.Item key="2" icon={<CloseSquareOutlined />}>
        关闭
      </Menu.Item>
      <Menu.Item key="3" icon={<IssuesCloseOutlined />}>
        重启
      </Menu.Item>
      <Menu.Item key="4" icon={<DeleteOutlined />}>
        删除
      </Menu.Item>
    </Menu>
  );
  return (
    <KeepAlive name="/messagemiddleware/RocketMq" path="RocketMq" saveScrollPosition="screen">
      <PageContainer>
        <div className="bg_div_white font_12">
          <NotificTips>
            <div>
              RocketMQ (http://rocketmq.apache.org/) 是一个基于 Apache 2.0 协议
              (https://github.com/apache/rocketmq/blob/master/LICENSE)
              开源的分布式消息和流数据平台，具有低延时、高吞吐、可审计、可几乎无限水平扩展等优点。
              RocketMQ on QingCloud 提供可一键部署的 RocketMQ 集群服务，以 AppCenter
              云应用的形式交付给用户使用。在青云上，您可以很方便的创建和管理一个 RocketMQ
              集群。集群支持横向与纵向在线伸缩，还提供了监控告警等功能，使得管理集群非常方便。
            </div>
          </NotificTips>
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
                    history.push('/messagemiddleware/RocketMq/CreateRocketMq');
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
export default connect(() => ({}))(RocketMq);
