import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { connect, Dispatch } from 'umi';
import styles from './index.less';
import { Button, Table, Dropdown, Menu, message, Input, Spin } from 'antd';
import { Link } from 'umi';
import {
  RedoOutlined,
  PlusOutlined,
  DownOutlined,
  AppstoreFilled,
  CloseSquareOutlined,
  TagsOutlined,
  NodeIndexOutlined,
  ThunderboltOutlined,
  RotateLeftOutlined,
  ImportOutlined,
  DeleteOutlined,
  LaptopOutlined,
  EditOutlined,
} from '@ant-design/icons';
import NotificTips from '@/components/NotificList';
import AskNetwork from './components/AskNetwork/index';
import { KeepAlive } from 'react-activation';

const { Search } = Input;

// const operations = <Button>Extra Action</Button>;
const Network: React.FC<{}> = (props) => {
  const [loading, setLoading] = useState<boolean>(false);

  // 申请网卡
  const [askVisible, setAskVisible] = useState<boolean>(false);
  const onCancel = () => {
    setAskVisible(false);
  };
  const [data, setData] = useState([
    {
      mac: 'arch201310x64a',
      name: '地址1',
      state: 'usable',
      network: '网络1',
      innerip: '192.168.0.12',
      ipv6: '192.168.0.12',
      outerip: '172.5.0.25',
      project: '我的项目1',
      warningState: 'all',
      createTime: '2021-01-21 13:10:10',
    },
    {
      mac: 'arch201310x64b',
      name: '地址1',
      state: 'using',
      network: '网络1',
      innerip: '192.168.0.12',
      ipv6: '192.168.0.12',
      outerip: '172.5.0.25',
      project: '我的项目1',
      warningState: 'all',
      createTime: '2021-01-21 13:10:10',
    },
    {
      mac: 'arch201310x64c',
      name: '地址1',
      state: 'usable',
      network: '网络2',
      innerip: '192.168.0.12',
      ipv6: '192.168.0.12',
      outerip: '172.5.0.25',
      project: '我的项目1',
      warningState: 'all',
      createTime: '2021-01-21 13:10:10',
    },
    {
      mac: 'arch201310x64d',
      name: '地址1',
      state: 'usable',
      network: '网络3',
      innerip: '192.168.0.12',
      ipv6: '192.168.0.12',
      outerip: '172.5.0.25',
      project: '我的项目1',
      warningState: 'all',
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
      title: 'MAC 地址',
      dataIndex: 'mac',
      key: 'mac',
      render: (text, record) => {
        return (
          <Link to={`/storage/vnas/rootgroup/${text}`} className="span_line cursor_p color_blue">
            {text}'tips暂无跳转页面'
          </Link>
        );
      },
    },
    {
      title: '名称 / 角色',
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
      ],
      onFilter: (value, record) => record.state.indexOf(value) === 0,
    },
    {
      title: '网络',
      dataIndex: 'network',
      key: 'network',
    },
    {
      title: '主机 / 内网 IP',
      dataIndex: 'innerip',
      key: 'innerip',
    },
    {
      title: 'IPv6 地址',
      dataIndex: 'ipv6',
      key: 'ipv6',
    },
    {
      title: '外部 IP',
      dataIndex: 'outerip',
      key: 'outerip',
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

  // 更多操作
  const menu = (
    <Menu onClick={handleMenuClick} className="dark_drop">
      <Menu.Item key="1" disabled icon={<EditOutlined />}>
        修改
      </Menu.Item>
      <Menu.Item key="2" icon={<LaptopOutlined />}>
        分配到主机
      </Menu.Item>
      <Menu.Item key="3" icon={<CloseSquareOutlined />}>
        解绑
      </Menu.Item>
      <Menu.Item key="4" icon={<ThunderboltOutlined />}>
        修改安全组
      </Menu.Item>
      <Menu.Item key="5" icon={<EditOutlined />}>
        修改内网 IP
      </Menu.Item>
      <Menu.Item key="6" icon={<NodeIndexOutlined />}>
        绑定公网 IPV4
      </Menu.Item>
      <Menu.Item key="7" icon={<NodeIndexOutlined />}>
        绑定基础网络 IP
      </Menu.Item>
      <Menu.Item key="8" icon={<TagsOutlined />}>
        绑定标签
      </Menu.Item>
      <Menu.Item key="9" icon={<ImportOutlined />}>
        添加到项目
      </Menu.Item>
      <Menu.Item key="10" icon={<RotateLeftOutlined />}>
        从项目中移除
      </Menu.Item>
      <Menu.Item key="11" icon={<DeleteOutlined />}>
        删除
      </Menu.Item>
    </Menu>
  );
  return (
    <KeepAlive name="/calculate/network" path="网卡" saveScrollPosition="screen">
      <PageContainer>
        <div className="bg_div_white font_12">
          <NotificTips>
            <div>
              <b>网卡（Nic）</b> 是一种虚拟网卡，可以分配到主机，一个主机最多可以绑定 64
              张网卡（其中主网卡 1 张，从网卡 63 张），一个网络最多可以有 252 张网卡。
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
                    setAskVisible(true);
                  }}
                >
                  <PlusOutlined />
                  申请
                </Button>
                <div>
                  <Dropdown overlay={menu} trigger={['click']}>
                    <Button className={`${styles.mybtn} ${styles.height_36}`}>
                      <AppstoreFilled />
                      更多操作 <DownOutlined />
                    </Button>
                  </Dropdown>
                </div>
                <Search
                  placeholder=""
                  placeholder="名称/mac地址/内网"
                  onSearch={onSearch}
                  style={{ width: 200 }}
                />
              </div>
              <div className="flex">
                <div className={styles.pagination}>合计:0</div>
              </div>
            </div>
            <Spin tip="数据加载中..." spinning={loading}>
              <Table
                columns={columns}
                rowSelection={rowSelection}
                rowKey={(record) => record.mac}
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
          {/* 申请网卡 */}
          <AskNetwork visible={askVisible} onClose={onCancel} />
        </div>
      </PageContainer>
    </KeepAlive>
  );
};
export default connect(() => ({}))(Network);
