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
} from '@ant-design/icons';
import React from 'react';
import { connect, ConnectProps, SelectLang } from 'umi';
import { ConnectState } from '@/models/connect';
import Avatar from './AvatarDropdown';
import HeaderSearch from '../HeaderSearch';
import styles from './index.less';

export interface GlobalHeaderRightProps extends Partial<ConnectProps>, Partial<ProSettings> {
  theme?: ProSettings['navTheme'] | 'realDark';
}

const ENVTagColor = {
  dev: 'orange',
  test: 'green',
  pre: '#87d068',
};

const GlobalHeaderRight: React.SFC<GlobalHeaderRightProps> = (props) => {
  const { theme, layout } = props;
  let className = styles.right;

  if (theme === 'dark' && layout === 'top') {
    className = `${styles.right}  ${styles.dark}`;
  }

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

  const cards = (
    <div>
      <div>账户余额</div>
      {/* <Divider /> */}
      <Menu className={styles.card}>
        <Menu.Item className={styles.card_item}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.qingcloud.com/product/quick_start/"
          >
            <RocketOutlined /> 账单总览
          </a>
        </Menu.Item>
        <Menu.Item className={styles.card_item}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.qingcloud.com/product/faq/"
          >
            <AlertOutlined />
            <span>消费统计</span>
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="https://docs.qingcloud.com/product/">
            <DatabaseFilled />
            <span>消费预估</span>
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="https://docs.qingcloud.com/qingstor/">
            <DatabaseFilled />
            <span>续约管理</span>
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.qingcloud.com/appcenter/docs/README.html"
          >
            <DatabaseFilled />
            <span>钱包</span>
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="https://beian.qingcloud.com/icp">
            <SecurityScanFilled />
            <span>优惠券</span>
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://status.qingcloud.com/">
            <BugFilled />
            <span>发票</span>
          </a>
        </Menu.Item>
      </Menu>
    </div>
  );
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
  return (
    <div className={className}>
      <HeaderSearch
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
      />
      <Dropdown overlay={menu} placement="bottomCenter">
        <TagsOutlined className={styles.action} />
      </Dropdown>

      <Dropdown overlay={cards_1} placement="bottomCenter">
        <Badge status="warning" text="券券">
          <CreditCardOutlined className={styles.action} />
        </Badge>
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
      <SelectLang className={styles.action} />
    </div>
  );
};

export default connect(({ settings }: ConnectState) => ({
  theme: settings.navTheme,
  layout: settings.layout,
}))(GlobalHeaderRight);
