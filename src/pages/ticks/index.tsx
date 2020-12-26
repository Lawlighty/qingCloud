import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { connect, Dispatch } from 'umi';
import styles from './index.less';
import {
  Tabs,
  Button,
  notification,
  Card,
  Tooltip,
  Input,
  Progress,
  Modal,
  Table,
  Space,
  Badge,
} from 'antd';
import { Link } from 'umi';
import { SearchOutlined, FormOutlined } from '@ant-design/icons';

interface paginationType {
  current: number;
  pageSize: number;
  total?: number;
}
const { TabPane } = Tabs;

const tickType = {
  undo: {
    name: '未处理',
    color: '#f50',
  },
  doing: {
    name: '处理中',
    color: '#2db7f5',
  },
  loading: {
    name: '待您确认',
    color: 'gold',
  },
  done: {
    name: '已解决',
    color: '#87d068',
  },
};
const Ticks: React.FC<{}> = (props) => {
  const [visibel, setVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [pagination, setPagination] = useState<paginationType>({ current: 1, pageSize: 10 });
  const searchTicks = (e: any) => {
    console.log('e', e.target.value);
  };
  const handleOk = () => {
    setVisible(false);
  };
  const OperationsSlot = {
    left: (
      <Button
        type="primary"
        style={{ position: 'relative', left: '20px' }}
        onClick={() => setVisible(true)}
      >
        <FormOutlined />
        创建工单
      </Button>
    ),
    right: (
      <Input
        onPressEnter={searchTicks}
        placeholder="工单标题、内容"
        prefix={<SearchOutlined />}
        style={{ borderRadius: '20px', position: 'relative', right: '20px' }}
      />
    ),
  };
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  const locale = {
    filterConfirm: '确定',
    filterReset: '重置',
    emptyText: (
      <div className="ticket-empty-notice">
        <img src="https://console.qingcloud.com//static/images/ticket/icon-tickets.svg" />
        <p className="title">没有我创建的工单</p>
      </div>
    ),
  };

  const columns = [
    {
      title: '工单编号',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '工单内容',
      dataIndex: 'info',
      key: 'info',
    },
    {
      title: '状态',
      dataIndex: 'state',
      key: 'state',
      filters: [
        {
          text: '全部',
          value: 'all',
        },
        {
          text: '未处理',
          value: 'undo',
        },
        {
          text: '待您确认',
          value: 'loading',
        },
        {
          text: '已解决',
          value: 'done',
        },
      ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.state.indexOf(value) === 0,
      // sortDirections: ['descend'],
      render: (text) => (
        <div>
          <Badge color={tickType[text].color} text={tickType[text].name} />
        </div>
      ),
    },
    {
      title: '创建时间',
      dataIndex: 'createtime',
      key: 'createtime',
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>查看 {record.name}</a>
          <a>删除</a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      name: '202012238518',
      info: '我的工单测试',
      state: 'loading',
      createtime: '2020-12-20 23:39:25',
    },
  ];
  return (
    <PageContainer>
      <div className="bg_div_white font_12">
        <div className={`${styles.notification_tips} ${styles.c_notifications_bg}`}>
          <div>
            工单系统是您与 QingCloud
            最直接有效的沟通平台。您可以通过工单系统来询问任何问题，我们的工作人员会第一时间为您解决问题。同时我们也欢迎您通过工单向
            QingCloud 提出反馈建议。
          </div>
        </div>
        <div className="my_tabs_600">
          <Tabs tabBarExtraContent={OperationsSlot} centered>
            <TabPane tab="由我创建" key="1"></TabPane>
            <TabPane tab="与我共享" key="2"></TabPane>
          </Tabs>
        </div>
        <div>
          <Table
            className="font_12_impor"
            locale={locale}
            columns={columns}
            dataSource={data}
            onChange={onChange}
          />
        </div>
      </div>
      <Modal
        title="创建工单"
        visible={visibel}
        okText="提交"
        cancelText="取消"
        onOk={handleOk}
        onCancel={() => setVisible(false)}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </PageContainer>
  );
};
export default connect(() => ({}))(Ticks);
