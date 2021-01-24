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
  AppstoreFilled,
  DatabaseFilled,
  FundFilled,
  ControlFilled,
  CaretRightOutlined,
  CloseSquareOutlined,
  UndoOutlined,
  SettingOutlined,
  CameraOutlined,
  TagsOutlined,
  NodeIndexOutlined,
  PrinterOutlined,
  KeyOutlined,
  ThunderboltOutlined,
  BellOutlined,
  CopyOutlined,
  RotateLeftOutlined,
  ImportOutlined,
  IssuesCloseOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import NotificTips from '@/components/NotificList';
import AddHost from './components/AddHost/index';

const { TabPane } = Tabs;
const { Search } = Input;

// const operations = <Button>Extra Action</Button>;
const Hosts: React.FC<{}> = (props) => {
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
      name: '主机1',
      state: '状态',
      type: 'type',
      mapping: 'mapping',
      warningState: 'all',
    },
    {
      id: 2,
      name: '主机2',
      state: '状态',
      type: 'type',
      mapping: 'mapping',
      warningState: 'normal',
    },
    {
      id: 3,
      name: '主机3',
      state: '状态',
      type: 'type',
      mapping: 'mapping',
      warningState: 'warning',
    },
    {
      id: 4,
      name: '主机4',
      state: '状态',
      type: 'type',
      mapping: 'mapping',
      warningState: 'warning',
    },
    {
      id: 5,
      name: '主机5',
      state: '状态',
      type: 'type',
      mapping: 'mapping',
      warningState: 'normal',
    },
  ]);
  const [pagination, setPagination] = useState<object>({ current: 1, pageSize: 10 });

  // table
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  // 新建主机表单
  const [visible, setVisible] = useState<boolean>(false);

  const onCancel = () => {
    setVisible(false);
  };
  const subHost = () => {
    console.log('提交主机表单信息');
    setVisible(false);
  };

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
      sorter: true,
    },
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
      sorter: true,
    },
    {
      title: '映像',
      dataIndex: 'mapping',
      key: 'mapping',
    },
    {
      title: '配置',
      dataIndex: 'config',
      key: 'config',
    },
    {
      title: '网络',
      dataIndex: 'network',
      key: 'network',
    },
    {
      title: '公网 IPv4',
      dataIndex: 'ipv4',
      key: 'ipv4',
    },
    {
      title: '告警状态',
      dataIndex: 'warningState',
      key: 'warningState',
      filters: [
        { text: '全部', value: 'all' },
        { text: '正常', value: 'normal' },
        { text: '告警', value: 'warning' },
        { text: '无监控', value: 'none' },
      ],
      onFilter: (value, record) => record.warningState.indexOf(value) === 0,
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
      <Menu.Item key="1" disabled icon={<CaretRightOutlined />}>
        启动
      </Menu.Item>
      <Menu.Item key="2" icon={<CloseSquareOutlined />}>
        关机
      </Menu.Item>
      <Menu.Item key="3" icon={<UndoOutlined />}>
        重启
      </Menu.Item>
      <Menu.Item key="4" icon={<SettingOutlined />}>
        更改配置
      </Menu.Item>
      <Menu.Item key="5" icon={<CameraOutlined />}>
        创建备份
      </Menu.Item>
      <Menu.Item key="6" icon={<CopyOutlined />}>
        克隆主机
      </Menu.Item>
      <Menu.Item key="7" icon={<NodeIndexOutlined />}>
        加入网络
      </Menu.Item>
      <Menu.Item key="8" icon={<PrinterOutlined />}>
        加载硬盘
      </Menu.Item>
      <Menu.Item key="9" icon={<KeyOutlined />}>
        加载ssh 密钥
      </Menu.Item>
      <Menu.Item key="10" icon={<ThunderboltOutlined />}>
        加入安全组规则
      </Menu.Item>
      <Menu.Item key="11" icon={<PlusOutlined />}>
        加入安置策略组
      </Menu.Item>
      <Menu.Item key="12" icon={<PlusOutlined />}>
        加入隔离策略组
      </Menu.Item>
      <Menu.Item key="13" icon={<BellOutlined />}>
        绑定指定警告策略
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
      <Menu.Item key="18" icon={<IssuesCloseOutlined />}>
        重置系统
      </Menu.Item>
      <Menu.Item key="19" icon={<DeleteOutlined />}>
        删除
      </Menu.Item>
    </Menu>
  );
  return (
    <PageContainer>
      <AddHost visible={visible} onCancel={onCancel} subHost={subHost} />
      {/* <TicksBuilder visible={visible} onCancel={onCancel} subTicks={subHost} /> */}
      <div className="bg_div_white font_12">
        <NotificTips>
          {currentTabs === '1' && (
            <div>
              QingCloud 为您提供一种随时获取的、弹性的计算能力，这种计算能力的体现就是
              <b>主机（Instance）</b>
              。主机就是一台配置好了的服务器，它有您期望的硬件配置、操作系统和网络配置。通常情况下，您的请求可以在10秒到60秒的时间之内
              完成，所以您完全可以动态地、按需使用计算能力。
            </div>
          )}
          {currentTabs === '2' && (
            <div>
              针对用户长期、稳定的 IT 需求，青云QingCloud
              推出『预留资源』计费模式，目前此模式仅适用于主机、专属宿主机 (详情参看
              <Link to="/notifications"> [专属宿主机]</Link>
              )，和关系型数据库，相对于按需付费可享有更优惠价格。更多详情请查看
              <Link to="/notifications">[预留合约指南]</Link>
            </div>
          )}
          {currentTabs === '3' && (
            <div>
              安置策略组功能为用户提供了虚拟主机分组功能，用户可以通过创建合适关系的安置策略组并将部署的主机加入相应的分组，从而将一组主机实例按照分组关系部署到合适的物理节点上，来提高资源的可用性，业务的连续性。
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
            <TabPane tab="主机" key="1" />
            <TabPane tab="预留合约" key="2" />
            <TabPane tab="安置策略组" key="3" />
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
                  setVisible(true);
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
              {/* <div className={`${styles.mybtn} ${styles.padd_7_16} ${styles.height_36}`} >
                <EyeFilled />
              </div> */}
              <Search placeholder="" onSearch={onSearch} style={{ width: 200 }} />
            </div>
            <div className="flex">
              <div className={styles.pagination}>合计:0</div>
              <Tooltip title="详细视图">
                <div
                  style={{ marginLeft: 10 }}
                  className={`${styles.tool_div} ${
                    currentView === '1' ? styles.tool_div_focus : null
                  }`}
                  onClick={() => {
                    if (currentView !== '1') setCurrentView('1');
                  }}
                >
                  <DatabaseFilled />
                  详细
                </div>
              </Tooltip>
              <Tooltip title="监控视图, 该视图下不支持部分操作">
                <div
                  className={`${styles.tool_div} ${
                    currentView === '2' ? styles.tool_div_focus : null
                  }`}
                  onClick={() => {
                    if (currentView !== '2') setCurrentView('2');
                  }}
                >
                  <FundFilled />
                  监控
                </div>
              </Tooltip>
              <Tooltip title="目录视图">
                <div
                  className={`${styles.tool_div} ${
                    currentView === '3' ? styles.tool_div_focus : null
                  }`}
                  onClick={() => {
                    if (currentView !== '3') setCurrentView('3');
                  }}
                >
                  <ControlFilled />
                  目录
                </div>
              </Tooltip>
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
export default connect(() => ({}))(Hosts);
