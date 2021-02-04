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
  BulbFilled,
} from '@ant-design/icons';
import CreateRootGroup from '../CreateRootGroup/index';

// const operations = <Button>Extra Action</Button>;
const { Search } = Input;
const RootGroups: React.FC<{}> = (props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState([
    {
      id: 's2g-87jrjjby',
      isbase: 0,
      name: 'aaa',
      type: 'NFS',
      account: '',
      project: '所属项目',
      createTime: '2010-10-10-10',
    },
    {
      id: 's2g-gedvep1f',
      isbase: 0,
      name: 'aaa2',
      type: 'Samba',
      account: '',
      project: '所属项目',
      createTime: '2010-10-10-10',
    },
    {
      id: 's2g-gedvep1f2',
      isbase: 1,
      name: '缺省权限组',
      type: 'Samba',
      account: '',
      project: '所属项目',
      createTime: '2010-10-10-10',
    },
    {
      id: 's2g-0098kdni',
      isbase: 1,
      name: '缺省权限组',
      type: 'NFS',
      account: '',
      project: '所属项目',
      createTime: '2010-10-10-10',
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
        if (record.isbase) {
          return (
            <Link to={`/storage/vnas/rootgroup/${text}`} className="span_line cursor_p color_blue">
              {text}{' '}
              <Tooltip placement="top" title="缺省权限组,不可删除">
                <BulbFilled className="color_green" />
              </Tooltip>
            </Link>
          );
        }
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
      title: '类型',
      dataIndex: 'type',
      key: 'type',
      filters: [
        { text: 'NFS', value: 'NFS' },
        { text: 'Samba', value: 'Samba' },
      ],
      onFilter: (value, record) => record.type.indexOf(value) === 0,
    },
    {
      title: '账户',
      dataIndex: 'account',
      key: 'account',
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
  const menu = (
    <Menu onClick={handleMenuClick} className="dark_drop">
      <Menu.Item key="1" icon={<EditOutlined />}>
        修改
      </Menu.Item>
      <Menu.Item key="2" icon={<TagsOutlined />}>
        绑定账户
      </Menu.Item>
      <Menu.Item key="3" icon={<ImportOutlined />}>
        添加到项目
      </Menu.Item>
      <Menu.Item key="4" icon={<RotateLeftOutlined />}>
        从项目中移除
      </Menu.Item>
      <Menu.Item key="5" icon={<DeleteOutlined />}>
        删除
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <CreateRootGroup
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
  );
};
export default connect(() => ({}))(RootGroups);
