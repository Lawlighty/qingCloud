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
  CaretRightOutlined,
  AppstoreFilled,
  CloseSquareOutlined,
  EditOutlined,
  TagsOutlined,
  ImportOutlined,
  RotateLeftOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import NotificTips from '@/components/NotificList';
import CreateResource from '@/pages/components/CreateResource/index';

const { Search } = Input;

// const operations = <Button>Extra Action</Button>;
const VnasTable: React.FC<{}> = (props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState([
    {
      id: 's2g-87jrjjby',
      name: '文件存储 vNAS1',
      state: 'usable',
      type: 'type1',
      config: '',
      net: '',
      ip: '',
      project: '所属项目',
      createby: '2010-10-10-10',
    },
    {
      id: 's2g-87jrjjby2',
      name: '文件存储 vNAS2',
      state: 'stop',
      type: 'type1',
      config: '',
      net: '',
      ip: '',
      project: '所属项目',
      createby: '2010-10-10-10',
    },
    {
      id: 's2g-87jrjjby3',
      name: '文件存储 vNAS3',
      state: 'stop',
      type: 'type1',
      config: '',
      net: '',
      ip: '',
      project: '所属项目',
      createby: '2010-10-10-10',
    },
    {
      id: 's2g-87jrjjby4',
      name: '文件存储 vNAS4',
      state: 'stop',
      type: 'type1',
      config: '',
      net: '',
      ip: '',
      project: '所属项目',
      createby: '2010-10-10-10',
    },
  ]);
  const [pagination, setPagination] = useState<object>({ current: 1, pageSize: 10 });

  const [showBuid, setShowBuild] = useState<boolean>(false);
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
      render: (text, record) => {
        return (
          <Link to={`/storage/vnas/rootgroup/${text}`} className="span_line cursor_p color_blue">
            {text}
          </Link>
        );
      },
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
      title: '类型',
      dataIndex: 'type',
      key: 'type',
      sorter: true,
    },
    {
      title: '配置',
      dataIndex: 'config',
      key: 'config',
    },
    {
      title: '网络',
      dataIndex: 'net',
      key: 'net',
    },
    {
      title: '内网ip',
      dataIndex: 'ip',
      key: 'ip',
    },
    {
      title: '所属项目',
      dataIndex: 'project',
      key: 'project',
    },
    {
      title: '创建于',
      dataIndex: 'createby',
      key: 'createby',
    },
  ];

  // 更多操作
  const menu = (
    <Menu onClick={handleMenuClick} className="dark_drop">
      <Menu.Item key="1" icon={<CaretRightOutlined />}>
        启动
      </Menu.Item>
      <Menu.Item key="2" icon={<CloseSquareOutlined />}>
        关闭
      </Menu.Item>
      <Menu.Item key="3" icon={<EditOutlined />}>
        修改
      </Menu.Item>
      <Menu.Item key="4" icon={<TagsOutlined />}>
        绑定标签
      </Menu.Item>
      <Menu.Item key="5" icon={<ImportOutlined />}>
        添加到项目
      </Menu.Item>
      <Menu.Item key="6" icon={<RotateLeftOutlined />}>
        从项目中移除
      </Menu.Item>
      <Menu.Item key="7" icon={<DeleteOutlined />}>
        删除
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="bg_div_white font_12">
      <CreateResource
        visible={showBuid}
        onClose={() => {
          setShowBuild(false);
        }}
      />
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
      <div>
        <div>
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
    </div>
  );
};
export default connect(() => ({}))(VnasTable);
