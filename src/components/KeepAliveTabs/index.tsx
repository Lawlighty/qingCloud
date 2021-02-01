import { useAliveController } from 'react-activation';
import { useHistory, useLocation } from 'umi';

import Tab from './Tab';
import styles from './index.less';
import { Tabs } from 'antd';
const { TabPane } = Tabs;
export default function KeepAliveTabs() {
  const history = useHistory();
  const location = useLocation();
  const { getCachingNodes, dropScope } = useAliveController();
  const cachingNodes = getCachingNodes();
  const closable = cachingNodes.length > 1;

  console.log('cachingNodes', cachingNodes);

  const onChange = (node) => {
    console.log('node.name', node);
    history.push(node);
  };

  return (
    // <ul className={styles['alive-tabs']}>
    //   {cachingNodes.map((node, idx) => (
    //     <Tab key={idx} node={node} />
    //   ))}
    // </ul>
    <Tabs
      className={closable ? 'my_Head_Tabs my_Head_Tabs_closable' : 'my_Head_Tabs'}
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
