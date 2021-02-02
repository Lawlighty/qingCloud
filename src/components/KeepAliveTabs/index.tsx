import { useAliveController } from 'react-activation';
import { useHistory, useLocation } from 'umi';

import Tab from './Tab';
import styles from './index.less';
import { Tabs, Button, Menu, Dropdown } from 'antd';
import { MoreOutlined, CloseOutlined, PicCenterOutlined, MinusOutlined } from '@ant-design/icons';
const { TabPane } = Tabs;
export default function KeepAliveTabs() {
  const history = useHistory();
  const location = useLocation();
  const { getCachingNodes, dropScope } = useAliveController();
  const cachingNodes = getCachingNodes();
  const closable = cachingNodes.length > 1;

  const onChange = (node) => {
    history.push(node);
  };

  const dropTab = (e) => {
    e.stopPropagation();
    const currentName = location.pathname;
    const unlisten = history.listen(() => {
      setTimeout(() => {
        dropScope(currentName);
      }, 60);
    });

    // 前往排除当前 node 后的最后一个 tab
    history.push(cachingNodes.filter((node) => node.name !== currentName).pop().name);
  };
  const dropTabOthers = (e) => {
    e.stopPropagation();
    cachingNodes.map((item) => {
      dropScope(item.name);
    });
  };
  const menu = (
    <Menu>
      <Menu.Item disabled={!closable}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            dropTab(e);
          }}
        >
          <CloseOutlined />
          关闭标签页
        </a>
      </Menu.Item>
      <Menu.Item disabled={!closable}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            dropTabOthers(e);
          }}
        >
          <PicCenterOutlined />
          关闭其他标签页
        </a>
      </Menu.Item>
      {/* <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          <MinusOutlined />
          关闭全部标签页
        </a>
      </Menu.Item> */}
    </Menu>
  );
  const operations = (
    <Dropdown overlay={menu} placement="bottomCenter" arrow>
      <Button>
        <MoreOutlined />
      </Button>
    </Dropdown>
  );
  return (
    // <ul className={styles['alive-tabs']}>
    //   {cachingNodes.map((node, idx) => (
    //     <Tab key={idx} node={node} />
    //   ))}
    // </ul>
    <Tabs
      className={closable ? 'my_Head_Tabs my_Head_Tabs_closable' : 'my_Head_Tabs'}
      tabBarExtraContent={operations}
      activeKey={location.pathname}
      type="card"
      onChange={(e) => {
        onChange(e);
      }}
    >
      {cachingNodes.map((node, idx) => (
        // <TabPane tab={node.path} key={node.name}></TabPane>
        <TabPane tab={<Tab key={idx} node={node} />} key={node.name} />
      ))}
    </Tabs>
  );
}
