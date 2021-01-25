import React, { useState } from 'react';
import { connect, Dispatch } from 'umi';
import styles from './index.less';
import { Input, Button } from 'antd';

// const operations = <Button>Extra Action</Button>;
const ChangePsw: React.FC<{}> = (props) => {
  // 当前密码
  const [currentPsw, setCurrentPsw] = useState<string>('');
  //  新密码
  const [newPsw, setNewPsw] = useState<string>('');

  return (
    <div>
      <div className={styles.item}>
        <div className={styles.label}>当前密码</div>
        <div className={styles.controls}>
          <Input.Password
            value={currentPsw}
            onChange={(e) => {
              setCurrentPsw(e.target.value);
            }}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.label}>新密码</div>
        <div className={styles.controls}>
          <Input.Password
            value={newPsw}
            onChange={(e) => {
              setNewPsw(e.target.value);
            }}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.label}></div>
        <div className={styles.controls}>
          <Button type="primary">修改</Button>
        </div>
      </div>
    </div>
  );
};
export default connect(() => ({}))(ChangePsw);
