import { Tooltip, Tag, Menu, Dropdown, Badge } from 'antd';
import { Settings as ProSettings } from '@ant-design/pro-layout';
import {
  QuestionCircleFilled,
  TagsOutlined,
  FormOutlined,
  RocketOutlined,
  AlertOutlined,
  DatabaseFilled,
  SecurityScanFilled,
  BugFilled,
  CreditCardOutlined,
  PieChartFilled,
  SlidersFilled,
  FundFilled,
  ReconciliationFilled,
  RedEnvelopeFilled,
  TagsFilled,
  BellFilled,
  RadarChartOutlined,
  CaretUpFilled,
  CaretDownFilled,
  ScheduleFilled,
  PlusOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { connect, ConnectProps, SelectLang } from 'umi';
import { ConnectState } from '@/models/connect';
import Avatar from './AvatarDropdown';
import HeaderSearch from '../HeaderSearch';
import styles from './index.less';
import { Link } from 'umi';
export interface GlobalHeaderRightProps extends Partial<ConnectProps>, Partial<ProSettings> {
  theme?: ProSettings['navTheme'] | 'realDark';
}

const ENVTagColor = {
  dev: 'orange',
  test: 'green',
  pre: '#87d068',
};

interface msgCountType {
  info: string;
  datetime: string;
}

const GlobalHeaderRight: React.SFC<GlobalHeaderRightProps> = (props) => {
  const { theme, layout } = props;
  let className = styles.right;
  // 项目选择
  const [showMore, setShowMore] = useState(false);
  // 通知--未读数量
  const [msgCount, setMsgCount] = useState<number>(1);
  // 通知-- 通知信息
  const [msgCountInfo, setMsgCountInfo] = useState<msgCountType[]>([
    {
      info: '13616859570，您刚刚获得代金券一张 [cpi-1xv2v3cu]',
      datetime: '2020-08-07',
    },
    {
      info: '13616859570，您刚刚获得代金券一张 [cpi-1xv2v3cu]',
      datetime: '2020-08-07',
    },
    {
      info: '13616859570，您刚刚获得代金券一张 [cpi-1xv2v3cu]',
      datetime: '2020-08-07',
    },
    {
      info: '13616859570，您刚刚获得代金券一张 [cpi-1xv2v3cu]',
      datetime: '2020-08-07',
    },
    {
      info: '13616859570，您刚刚获得代金券一张 [cpi-1xv2v3cu]',
      datetime: '2020-08-07',
    },
  ]);
  // const [msgCountInfo, setMsgCountInfo] = useState([]);
  // 卡券
  const [card_tip, setCard_tip] = useState<string>('券');

  if (theme === 'dark' && layout === 'top') {
    className = `${styles.right}  ${styles.dark}`;
  }

  // 资源项目
  const sorce_menu = (
    <Menu className="project_menu">
      <Menu.Item key="0">
        <a href="http://www.alipay.com/">
          <RadarChartOutlined />
          全部资源
        </a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1">
        <Tooltip placement="top" title="我的项目">
          <a
            href="http://www.alipay.com/"
            style={{ display: 'flex', alignItems: 'center', width: '164px' }}
          >
            <ScheduleFilled />
            <div className="ellipse_row">我的项目</div>
          </a>
        </Tooltip>
      </Menu.Item>
      <Menu.Item key="2">
        <Tooltip placement="top" title="我的项目2">
          <a
            href="http://www.alipay.com/"
            style={{ display: 'flex', alignItems: 'center', width: '164px' }}
          >
            <ScheduleFilled />
            <div className="ellipse_row">我的项目2</div>
          </a>
        </Tooltip>
      </Menu.Item>

      <Menu.Item key="3">
        <a href="http://www.alipay.com/">
          <UnorderedListOutlined />
          查看全部...
        </a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="43">
        <a href="http://www.alipay.com/">
          <PlusOutlined className="font_14" />
          创建新的项目
        </a>
      </Menu.Item>
    </Menu>
  );
  // 通知
  const msg = (
    <Menu className={styles.msg}>
      <div className={styles.msg_head}>
        <div className={`${styles.head_boyd}`}>
          共有{' '}
          <span className={`${styles.bold}`}>{msgCountInfo.length ? msgCountInfo.length : 0}</span>{' '}
          条未读通知
        </div>
        <Link to="/notifications">查看全部</Link>
      </div>
      <div
        style={{
          margin: '5px 0',
          width: '100%',
          height: '1px',
          background: 'rgba(0, 0, 0, 0.1)',
        }}
      />
      {/* <Divider /> */}
      <div className={styles.info_item}>
        {msgCountInfo.length > 0 ? (
          msgCountInfo.map((item, index) => (
            <div className={styles.info_items} key={index + item.datetime}>
              <div>{item.info}</div>
              <div className={styles.time}>{item.datetime}</div>
            </div>
          ))
        ) : (
          <div className={styles.nomsg}>
            <BellFilled className={styles.nobell} />
            <div>没有未读通知</div>
          </div>
        )}
      </div>
    </Menu>
  );
  // 工单
  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          <TagsOutlined /> 我的工单
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          <FormOutlined />
          <span style={{ marginLeft: 4 }}>创建工单</span>
        </a>
      </Menu.Item>
    </Menu>
  );

  // 问题
  const q_menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.qingcloud.com/product/quick_start/"
        >
          <RocketOutlined /> 快速上手
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://docs.qingcloud.com/product/faq/">
          <AlertOutlined />
          <span>常见问题</span>
        </a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://docs.qingcloud.com/product/">
          <DatabaseFilled />
          <span>平台产品文档</span>
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://docs.qingcloud.com/qingstor/">
          <DatabaseFilled />
          <span>对象储存文档</span>
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.qingcloud.com/appcenter/docs/README.html"
        >
          <DatabaseFilled />
          <span>AppCenter 文档</span>
        </a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://beian.qingcloud.com/icp">
          <SecurityScanFilled />
          <span>ICP备案</span>
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://status.qingcloud.com/">
          <BugFilled />
          <span>服务健康状态</span>
        </a>
      </Menu.Item>
    </Menu>
  );

  // 卡券
  const cards_1 = (
    <Menu style={{ padding: 10 }} className={styles.card}>
      <div>
        <div>
          账户余额
          <div className={styles.now_money}>￥2.00</div>
        </div>
        <div>
          优惠券
          <div className={styles.coupons}>
            <Tooltip title="各优惠券使用详情请前往优惠券列表查看">￥2.00</Tooltip>
          </div>
        </div>
        <div>
          预计支持
          <div className={styles.support}>当前账户无预估</div>
        </div>
      </div>
      <div
        style={{
          margin: '5px 0',
          width: '100%',
          height: '1px',
          background: 'rgba(0, 0, 0, 0.1)',
        }}
      />
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.qingcloud.com/product/quick_start/"
        >
          <PieChartFilled /> 账单总览
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://docs.qingcloud.com/product/faq/">
          <SlidersFilled />
          <span>消费统计</span>
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://docs.qingcloud.com/product/">
          <FundFilled />
          <span>消费预估</span>
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://docs.qingcloud.com/qingstor/">
          <ReconciliationFilled />
          <span>续约管理</span>
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.qingcloud.com/appcenter/docs/README.html"
        >
          <RedEnvelopeFilled />
          <span>钱包</span>
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://beian.qingcloud.com/icp">
          <CreditCardOutlined />
          <span>优惠券</span>
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://status.qingcloud.com/">
          <TagsFilled />
          <span>发票</span>
        </a>
      </Menu.Item>
    </Menu>
  );

  // 查看资源切换
  const chosePorject = (e) => {
    e.preventDefault();
    setShowMore(!showMore);
  };
  const handleVisibleChange = (flag: Boolean) => {
    setShowMore(flag);
  };
  return (
    <div className={className}>
      {/* <div className="rightContent"> */}
      <div>
        <Dropdown overlay={sorce_menu} trigger={['click']} onVisibleChange={handleVisibleChange}>
          <div
            className={`g_more_div flex ${showMore ? 'active' : ''}`}
            onClick={(e) => {
              chosePorject(e);
            }}
          >
            <RadarChartOutlined className="margin_lr_10" />
            <div className="flex_1 font_12">全部资源</div>

            {showMore ? (
              <CaretUpFilled className="margin_lr_10 " />
            ) : (
              <CaretDownFilled className="margin_lr_10" />
            )}
          </div>
        </Dropdown>
      </div>
      <div className="flex_1" />
      {/* <HeaderSearch
        className={`${styles.action} ${styles.search}`}
        placeholder="站内搜索"
        defaultValue="umi ui"
        options={[
          { label: <a href="https://umijs.org/zh/guide/umi-ui.html">umi ui</a>, value: 'umi ui' },
          {
            label: <a href="next.ant.design">Ant Design</a>,
            value: 'Ant Design',
          },
          {
            label: <a href="https://protable.ant.design/">Pro Table</a>,
            value: 'Pro Table',
          },
          {
            label: <a href="https://prolayout.ant.design/">Pro Layout</a>,
            value: 'Pro Layout',
          },
        ]}
        // onSearch={value => {
        //   //console.log('input', value);
        // }}
      /> */}
      <Dropdown overlay={msg} placement="bottomCenter" className={styles.bell}>
        {msgCountInfo.length ? (
          <Badge dot>
            <BellFilled className={styles.action} />
          </Badge>
        ) : (
          <BellFilled className={styles.action} />
        )}
      </Dropdown>
      <Dropdown overlay={menu} placement="bottomCenter">
        <TagsOutlined className={styles.action} />
      </Dropdown>
      <Dropdown overlay={cards_1} placement="bottomCenter">
        {card_tip ? (
          <Badge count={<div className={styles.card_tip}>{card_tip}</div>}>
            <CreditCardOutlined className={styles.action} />
          </Badge>
        ) : (
          <CreditCardOutlined className={styles.action} />
        )}
        {/* <Badge count={<div className={styles.card_tip}>{card_tip}</div>}>
          <CreditCardOutlined className={styles.action} />
        </Badge> */}
      </Dropdown>
      <Dropdown overlay={q_menu} placement="bottomCenter">
        <QuestionCircleFilled className={styles.action} />
      </Dropdown>
      {/* <Tooltip title="使用文档">
        <a
          style={{
            color: 'inherit',
          }}
          target="_blank"
          href="https://pro.ant.design/docs/getting-started"
          rel="noopener noreferrer"
          className={styles.action}
        >
          <QuestionCircleOutlined />
        </a>
      </Tooltip> */}
      <Avatar />
      {REACT_APP_ENV && (
        <span>
          <Tag color={ENVTagColor[REACT_APP_ENV]}>{REACT_APP_ENV}</Tag>
        </span>
      )}
      {/* //国际化 */}
      {/* <SelectLang className={styles.action} /> */}
    </div>
  );
};

export default connect(({ settings }: ConnectState) => ({
  theme: settings.navTheme,
  layout: settings.layout,
}))(GlobalHeaderRight);
