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
import RootGroups from './components/RootGroups/index';
import VnasTable from './components/VnasTable/index';
import { KeepAlive } from 'react-activation';

const { TabPane } = Tabs;
const { Search } = Input;

// const operations = <Button>Extra Action</Button>;
const Vnas: React.FC<{}> = (props) => {
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

  //更多操作
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
  const menu1 = (
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
    <KeepAlive name="/storage/vnas" path="文件存储vNAS" saveScrollPosition="screen">
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
              <b>NAS </b>是支持基于 NFS 和 Samba(CIFS) 协议的网络共享存储服务。你可以将硬盘挂载到
              NAS 服务器上，让多个客户端通过网络连接进行共享，同时支持可访问服务的账号的控制管理。
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
              <TabPane tab="文件存储 vNAS" key="1" />
              <TabPane tab="权限组" key="2" />
              <TabPane tab="账户" key="3" />
            </Tabs>
          </div>
          <div className={styles.table_form}>
            {currentTabs === '2' && (
              <div className="pane_intro">
                为了方便用户对账户 (Account) 的管理，可以创建 NFS 和 Samba
                类型的账户组，并将同类型的 Account
                绑定到账户组中。账户组可以和共享目标直接绑定，账户组之间不可相互绑定。
              </div>
            )}
            <div>
              {currentTabs === '1' && <VnasTable />}
              {currentTabs === '2' && <RootGroups />}
            </div>
          </div>
        </div>
      </PageContainer>
    </KeepAlive>
  );
};
export default connect(() => ({}))(Vnas);
