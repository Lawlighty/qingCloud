import React, { useState, useRef } from 'react';
import { Input, Button, Upload, message } from 'antd';
import styles from './index.less';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

const ChangePhoneNumber: React.FC<{}> = (props) => {
  const [oldPhone, setOldPhone] = useState('13616859570');
  const [newPhone, setNewPhone] = useState('');
  const [code, setCode] = useState('');

  return (
    <div className={styles.items}>
      <div className={styles.item}>
        <div className={styles.label}>旧手机号</div>
        <div className={styles.info}>
          <Input
            disabled
            value={oldPhone}
            onChange={(e) => {
              setOldPhone(e.target.value);
            }}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.label}>新手机号</div>
        <div className={styles.info}>
          <Input
            value={newPhone}
            onChange={(e) => {
              setNewPhone(e.target.value);
            }}
          />
          <div className="dark_btn_small">获取验证码</div>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.label}>手机验证码</div>
        <div className={styles.info}>
          <Input
            className={styles.input}
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
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
export default ChangePhoneNumber;
