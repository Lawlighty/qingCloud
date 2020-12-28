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
  Popconfirm,
} from 'antd';
import { Link } from 'umi';
import {
  SearchOutlined,
  FormOutlined,
  LeftOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons';
// import RightContent from '@/components/GlobalHeader/RightContent;
import TicksBuilder from '@/components/ticksBuild/TicksBuilder';

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
const TicksDetail: React.FC<{}> = (props) => {
  const [activeKye, setActiveKye] = useState<string>('1');
  const [visible, setVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [pagination, setPagination] = useState<paginationType>({ current: 1, pageSize: 10 });
  const callback = (key) => {
    console.log('key', key);
    setActiveKye(key);
  };
  const searchTicks = (e: any) => {
    console.log('e', e.target.value);
  };
  const handleOk = () => {
    setVisible(false);
  };
  // 工单模态框
  const onCancel = (target: boolean) => {
    setVisible(target);
  };
  const subTicks = (form) => {
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
      <TicksBuilder visible={visible} onCancel={onCancel} subTicks={subTicks} />
      <div className="bg_div_white font_12">
        <div className={`${styles.notification_tips} ${styles.c_notifications_bg}`}>
          <div>
            工单系统是您与 QingCloud
            最直接有效的沟通平台。您可以通过工单系统来询问任何问题，我们的工作人员会第一时间为您解决问题。同时我们也欢迎您通过工单向
            QingCloud 提出反馈建议。aaaa这是详情
          </div>
        </div>
        <div className="flex padding_10_20 border_b_e4ebf1">
          <Button
          // onClick={() => {
          //   router.push('/ticks');
          // }}
          // onClick={() => {
          //   props.dispatch(routerRedux).push('/ticks');
          // }}
          >
            <LeftOutlined />
            返回工单列表
          </Button>
          <div className="flex_1" />
          <Button type="primary" className="margin_r_20">
            标记为已解决
          </Button>
          <Button>
            <UsergroupAddOutlined className="font_16" />
            分享
          </Button>
        </div>
        <div className="my_tabs_600">
          <Tabs
            activeKey={activeKye}
            tabBarExtraContent={OperationsSlot}
            centered
            onChange={callback}
          >
            <TabPane tab="由我创建" key="1"></TabPane>
            <TabPane tab="与我共享" key="2"></TabPane>
          </Tabs>
        </div>
        <div>
          {activeKye === '2' ? (
            <div className={styles.tickets_items}>
              {[1, 2, 3, 4].map((item, index) => (
                <div
                  className={styles.tickets_item}
                  style={{ borderBottom: index === 3 ? '' : '1px solid #e4ebf1' }}
                >
                  <div className={styles.ticket_details}>
                    <div className={styles.summary}>
                      用户 13616859570 (usr-V1l8PRHR) 邀请你参与处理一条工单。
                    </div>
                    <Button type="primary" style={{ marginRight: 10 }}>
                      接受
                    </Button>
                    <Button>拒绝</Button>
                  </div>
                </div>
              ))}
            </div>
          ) : null}
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
    </PageContainer>
  );
};
export default connect(() => ({}))(TicksDetail);
