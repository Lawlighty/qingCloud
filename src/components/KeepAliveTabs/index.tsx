import { useAliveController } from 'react-activation';

import Tab from './Tab';
import styles from './index.less';
import { Tabs } from 'antd';
const { TabPane } = Tabs;
export default function KeepAliveTabs() {
  const { getCachingNodes } = useAliveController();
  const cachingNodes = getCachingNodes();

  // console.log(cachingNodes)

  return (
    <ul className={styles['alive-tabs']}>
      {cachingNodes.map((node, idx) => (
        <Tab key={idx} node={node} />
      ))}
    </ul>
    // <Tabs style={{ height: 220 }}>
    //   {cachingNodes.map((node, idx) => (
    //     <TabPane tab={node} key={idx} />
    //   ))}
    // </Tabs>
  );
}
