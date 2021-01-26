import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { connect, Dispatch } from 'umi';
import styles from './index.less';
import { Button, Table, Dropdown, Menu, message, Input, Spin } from 'antd';
import { Link } from 'umi';
import {
  KeyOutlined,
  RedoOutlined,
  PlusOutlined,
  DownOutlined,
  AppstoreFilled,
  CopyOutlined,
  TagsOutlined,
  RotateLeftOutlined,
  ImportOutlined,
  IssuesCloseOutlined,
  DeleteOutlined,
  EditOutlined,
} from '@ant-design/icons';
import NotificTips from '@/components/NotificList';
import CreateSsh from './components/CreateSsh/index';

const { Search } = Input;

// const operations = <Button>Extra Action</Button>;
const SshKeys: React.FC<{}> = (props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [showCreate, setShowCreate] = useState<boolean>(false);
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
      render: (text) => {
        return (
          <Link to={`/calculate/ssh/${text}`} className="span_line cursor_p color_green">
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
      <Menu.Item key="1" disabled icon={<EditOutlined />}>
        修改
      </Menu.Item>
      <Menu.Item key="2" icon={<TagsOutlined />}>
        绑定标签
      </Menu.Item>
      <Menu.Item key="3" icon={<ImportOutlined />}>
        添加到项目
      </Menu.Item>
      <Menu.Item key="4" icon={<RotateLeftOutlined />}>
        从项目中移除
      </Menu.Item>
      <Menu.Item key="5" icon={<IssuesCloseOutlined />}>
        重置系统
      </Menu.Item>
      <Menu.Item key="6" icon={<DeleteOutlined />}>
        删除
      </Menu.Item>
    </Menu>
  );
  return (
    <PageContainer>
      <div className="bg_div_white font_12">
        <NotificTips>
          <div>
            如果您使用的是 Linux 主机，强烈建议使用 <b> SSH 公钥/私钥 （Keypair）</b>
            进行远程登录身份验证。您可以创建一个 SSH 密钥，并立刻下载其私钥。请保管好私钥，因为
            QingCloud 是不保存您的私钥的。
          </div>
        </NotificTips>
        {/* 创建SSH密钥 */}
        <CreateSsh
          visible={showCreate}
          onClose={() => {
            setShowCreate(false);
          }}
        />
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
                  setShowCreate(true);
                }}
              >
                <PlusOutlined />
                创建
              </Button>
              <Button
                type="primary"
                className={styles.height_36}
                style={{ marginRight: 4 }}
                disabled={!selectedRowKeys.length}
              >
                <CopyOutlined />
                复制
              </Button>
              <Button
                type="primary"
                className={styles.height_36}
                style={{ marginRight: 4 }}
                disabled={!selectedRowKeys.length}
              >
                <KeyOutlined />
                加载到主机
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
  );
};
export default connect(() => ({}))(SshKeys);
