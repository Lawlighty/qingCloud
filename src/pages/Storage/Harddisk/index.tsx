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
  Badge,
} from 'antd';
import { Link } from 'umi';
import {
  RedoOutlined,
  PlusOutlined,
  DownOutlined,
  EditOutlined,
  AppstoreFilled,
  LaptopOutlined,
  DeleteOutlined,
  CameraOutlined,
  BellOutlined,
  TagsOutlined,
  ImportOutlined,
  RotateLeftOutlined,
  CopyOutlined,
} from '@ant-design/icons';
import NotificTips from '@/components/NotificList';
import CreateDisk from './components/CreateDisk/index';

const { TabPane } = Tabs;
const { Search } = Input;

// const operations = <Button>Extra Action</Button>;
const Harddisk: React.FC<{}> = (props) => {
  const operations = {
    left: <div style={{ width: '20px' }} />,
    // right: <Button>Right Extra Action</Button>,
  };
  // tab
  const [currentTabs, setCurrentTabs] = useState<string>('1');
  const [showBuid, setShowBuild] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState([
    {
      id: 'arch201310x64a',
      name: '硬盘1',
      area: 'beijin',
      state: 'usable',
      drive: 'D',
      cap: '20',
      type: '类型1',
      tack: '副本策略1',
      backupBy: '备份啊啊',
      project: '所属项目1',
      createTime: '2021-10-11-11',
    },
    {
      id: 'arch201310x64b',
      name: '硬盘2',
      area: 'shanghai',
      state: 'delete',
      drive: 'c',
      cap: '22',
      type: '类型1',
      tack: '副本策略1',
      backupBy: '备份啊啊',
      project: '所属项目1',
      createTime: '2021-10-11-11',
    },
    {
      id: 'arch201310x64c',
      name: '硬盘3',
      area: 'hangzhou',
      state: 'stop',
      drive: 'D',
      cap: '20',
      type: '类型1',
      tack: '副本策略1',
      backupBy: '备份啊啊',
      project: '所属项目1',
      createTime: '2021-10-11-11',
    },
    {
      id: 'arch201310x64d',
      name: '硬盘4',
      area: 'beijin',
      state: 'usable',
      drive: 'D',
      cap: '20',
      type: '类型1',
      tack: '副本策略1',
      backupBy: '备份啊啊',
      project: '所属项目1',
      createTime: '2021-10-11-11',
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
          <Link to={`/storage/harddisk/${text}`} className="span_line cursor_p color_blue">
            {text}
          </Link>
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
      title: '区域',
      dataIndex: 'area',
      key: 'area',
      filters: [
        { text: '北京', value: 'beijin' },
        { text: '上海', value: 'shanghai' },
        { text: '广州', value: 'guangzhou' },
        { text: '杭州', value: 'hangzhou' },
      ],
      onFilter: (value, record) => record.area.indexOf(value) === 0,
    },
    {
      title: '状态',
      dataIndex: 'state',
      key: 'state',
      filters: [
        { text: '可用', value: 'usable' },
        { text: '已弃用', value: 'unusable' },
        { text: '已暂停', value: 'stop' },
        { text: '已删除', value: 'delete' },
      ],
      onFilter: (value, record) => record.state.indexOf(value) === 0,
      render: (text) => {
        return (
          <div>
            {text === 'usable' && (
              <div className="succes_processing">
                <Badge status="processing" text="可用" />
              </div>
            )}
            {text === 'unusable' && (
              <div className="succes_default">
                <Badge status="default" text="已弃用" />
              </div>
            )}
            {text === 'stop' && (
              <div className="succes_warning">
                <Badge status="warning" text="已暂停" />
              </div>
            )}
            {text === 'delete' && (
              <div className="succes_err">
                <Badge status="error" text="已删除" />
              </div>
            )}
          </div>
        );
      },
    },
    {
      title: '资源/盘符',
      dataIndex: 'drive',
      key: 'drive',
    },
    {
      title: '容量(G)',
      dataIndex: 'cap',
      key: 'cap',
    },
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '副本策略',
      dataIndex: 'tack',
      key: 'tack',
    },
    {
      title: '备份于',
      dataIndex: 'backupBy',
      key: 'backupBy',
    },
    {
      title: '所属项目',
      dataIndex: 'project',
      key: 'project',
    },
    {
      title: '创建于',
      dataIndex: 'createTime',
      key: 'createTime',
    },
  ];

  //更多操作
  const menu = (
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
      <Menu.Item key="7" icon={<CameraOutlined />}>
        创建备份
      </Menu.Item>
      <Menu.Item key="14" icon={<BellOutlined />}>
        绑定事件警告策略
      </Menu.Item>
      <Menu.Item key="15" icon={<TagsOutlined />}>
        绑定标签
      </Menu.Item>
      <Menu.Item key="16" icon={<ImportOutlined />}>
        添加到项目
      </Menu.Item>
      <Menu.Item key="17" icon={<RotateLeftOutlined />}>
        从项目中移除
      </Menu.Item>
      <Menu.Item key="6" icon={<CopyOutlined />}>
        克隆硬盘
      </Menu.Item>
      <Menu.Item key="19" icon={<DeleteOutlined />}>
        删除
      </Menu.Item>
    </Menu>
  );
  return (
    <PageContainer>
      <div className="bg_div_white font_12">
        <NotificTips>
          <div>
            <b>硬盘（Volume）</b>
            为主机提供块存储设备，它独立于主机的生命周期而存在，可以被连接到任意运行中的主机上。注意，硬盘附加到主机上后，您还需要登录到您的主机的操作系统中去加载该硬盘。当然，也可以从主机上卸载硬盘、并转至其他主机。注意，请先在您的主机的操作系统中卸载硬盘，然后再在
            QingCloud 系统中卸载。
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
            <TabPane tab="硬盘" key="1" />
            <TabPane tab="预留合约" key="2" />
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
              <CreateDisk
                visible={showBuid}
                onClose={() => {
                  setShowBuild(false);
                }}
              />
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
  );
};
export default connect(() => ({}))(Harddisk);
