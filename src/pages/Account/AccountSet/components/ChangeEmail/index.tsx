import React, { useState, useRef } from 'react';
import { Input, Button, Upload, message } from 'antd';
import styles from './index.less';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

const ChangeEmail: React.FC<{}> = (props) => {
  const [oldEmail, setOldEmail] = useState('13616859570@163.com');
  const [newEmail, setNewEmail] = useState('');

  return (
    <div className={styles.items}>
      <div className="alert_blue">
        现已支持发送系统通知到通知列表(可有多个接收邮箱)。设置通知列表, 会替代通知邮箱,
        但重置密码等帐号相关邮件依然只发给通知邮箱或注册邮箱,{' '}
        <span className="text_dec cursor_p">前往修改</span>
      </div>
      <div className={styles.item}>
        <div className={styles.label}>旧通知邮箱</div>
        <div className={styles.info}>
          <Input
            disabled
            value={oldEmail}
            onChange={(e) => {
              setOldEmail(e.target.value);
            }}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.label}>新通知邮箱</div>
        <div className={styles.info}>
          <Input
            value={newEmail}
            onChange={(e) => {
              setNewEmail(e.target.value);
            }}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.label} />
        <div className={styles.info}>
          <Button type="primary">修改</Button>
        </div>
      </div>
    </div>
  );
};
export default ChangeEmail;
