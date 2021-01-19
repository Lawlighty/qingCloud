import React from 'react';
import styles from './index.less';

const NotificTips: React.FC<{}> = (props) => {
  const { children } = props;
  return (
    <div className={`${styles.notification_tips} ${styles.c_notifications_bg}`}>{children}</div>
  );
};
export default NotificTips;
