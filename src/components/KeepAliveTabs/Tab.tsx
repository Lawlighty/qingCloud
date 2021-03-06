import { useHistory, useLocation } from 'umi';
import { useAliveController } from 'react-activation';
import { CloseOutlined } from '@ant-design/icons';

import styles from './index.less';

export default function Tab({ node }) {
  const history = useHistory();
  const location = useLocation();
  const { getCachingNodes, dropScope } = useAliveController();
  const cachingNodes = getCachingNodes();
  const closable = cachingNodes.length > 1;

  function dropTab(e) {
    e.stopPropagation();
    const currentName = node.name;

    // 如果关闭激活中的 KeepAlive Tab，需要先离开当前路由
    // 触发 KeepAlive unactivated 后再进行 drop
    if (location.pathname === node.name) {
      const unlisten = history.listen(() => {
        setTimeout(() => {
          dropScope(currentName);
        }, 60);
      });

      // 前往排除当前 node 后的最后一个 tab
      history.push(cachingNodes.filter((node) => node.name !== currentName).pop().name);
    } else {
      dropScope(currentName);
    }
  }

  return (
    <li
      className={location.pathname === node.name ? `${styles.active} my_li active` : ` my_li`}
      onClick={() => {
        history.push(node.name);
      }}
    >
      {node.path}
      {closable && <CloseOutlined className={styles['close-btn']} onClick={dropTab} />}
    </li>
  );
}
