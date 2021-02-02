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
  DeleteOutlined,
  PlusOutlined,
  ProfileFilled,
  AppstoreFilled,
} from '@ant-design/icons';
import NotificTips from '@/components/NotificList';
import CreateResource from '@/pages/components/CreateResource/index';
import { KeepAlive } from 'react-activation';

const { Search } = Input;

// const operations = <Button>Extra Action</Button>;
const Objstorage: React.FC<{}> = (props) => {
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
      id: 'arch201310x64a',
      name: '对象存储1',
      url: 'www.baidu.com',
      files: '10',
      size: '20',
      root: 'admin',
      createTime: '2021-01-21 13:10:10',
    },
    {
      id: 'arch201310x64b',
      name: '对象存储2',
      url: 'www.baidu.com',
      files: '2',
      size: '30',
      root: 'admin',
      createTime: '2021-01-21 13:10:10',
    },
    {
      id: 'arch201310x64c',
      name: '对象存储3',
      url: 'www.baidu.com',
      files: '52',
      size: '20',
      root: 'admin',
      createTime: '2021-01-21 13:10:10',
    },
    {
      id: 'arch201310x64d',
      name: '对象存储4',
      url: 'www.baidu.com',
      files: '10',
      size: '20',
      root: 'admin',
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
      title: '名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Url (API访问用)',
      dataIndex: 'url',
      key: 'url',
    },
    {
      title: '文件数',
      dataIndex: 'files',
      key: 'files',
    },
    {
      title: '空间大小',
      dataIndex: 'size',
      key: 'size',
    },
    {
      title: '权限',
      dataIndex: 'root',
      key: 'root',
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
    },
  ];
  return (
    <KeepAlive name="/storage/objstorage" path="对象存储" saveScrollPosition="screen">
      <PageContainer>
        <CreateResource
          visible={showBuid}
          onClose={() => {
            setShowBuild(false);
          }}
        />
        <div className="bg_div_white font_12">
          <NotificTips>
            <div>
              <b>对象存储服务（QingStor）</b>
              提供了一个无限容量的在线文件存储和访问平台。每个用户可创建多个存储空间
              (Bucket)；您可以将任意类型文件通过控制台或 QingStor API 上传至一个存储空间 (Bucket)
              中；存储空间 (Bucket) 支持访问控制，您可以将自己的存储空间(Bucket)
              开放给指定的用户，或所有用户。
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
                    setShowBuild(true);
                  }}
                >
                  <PlusOutlined />
                  创建 Bucket
                </Button>
                <Button
                  danger
                  type="primary"
                  className={styles.height_36}
                  style={{ marginRight: 4 }}
                  disabled={!selectedRowKeys.length}
                >
                  <DeleteOutlined />
                  删除
                </Button>
                <Search placeholder="" onSearch={onSearch} style={{ width: 200 }} />
              </div>
              <div className="flex">
                <div className={styles.pagination}>合计:0</div>
                <Tooltip title="列表视图">
                  <div
                    style={{ marginLeft: 10 }}
                    className={`${styles.tool_div} ${
                      currentView === '1' ? styles.tool_div_focus : null
                    }`}
                    onClick={() => {
                      if (currentView !== '1') setCurrentView('1');
                    }}
                  >
                    <div
                      className={`${styles.mybtn} ${styles.padd_7_16} ${styles.height_36} ${
                        currentView !== '1' ? 'mydisabled' : ''
                      }`}
                    >
                      <ProfileFilled />
                    </div>
                  </div>
                </Tooltip>
                <Tooltip title="文件视图">
                  <div
                    style={{ marginLeft: 10 }}
                    className={`${styles.tool_div} ${
                      currentView === '1' ? styles.tool_div_focus : null
                    }`}
                    onClick={() => {
                      if (currentView !== '2') setCurrentView('2');
                    }}
                  >
                    <div
                      className={`${styles.mybtn} ${styles.padd_7_16} ${styles.height_36} ${
                        currentView !== '2' ? 'mydisabled' : ''
                      }`}
                    >
                      <AppstoreFilled />
                    </div>
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
    </KeepAlive>
  );
};
export default connect(() => ({}))(Objstorage);
