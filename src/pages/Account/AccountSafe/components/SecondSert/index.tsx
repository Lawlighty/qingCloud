import React, { useState } from 'react';
import { connect, Dispatch } from 'umi';
import styles from './index.less';
import { Button } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import SertForm from './components/SertForm/index';
// const operations = <Button>Extra Action</Button>;
const SecondSert: React.FC<{}> = (props) => {
  // 当前密码
  const [showSec, setShowSec] = useState<boolean>(false);

  return (
    <div>
      <div className="alert_blue">
        <div className={styles.info}>
          启用二次认证，可以加强登录时的身份验证，更有效地保护您的账号。
          <div
            className="span_line color_blue flex margin_l_200 cursor_p"
            onClick={() => {
              setShowSec(true);
            }}
          >
            <LockOutlined className="color_plam margin_r_10" />
            启用
          </div>
        </div>
        <SertForm
          visible={showSec}
          onClose={() => {
            setShowSec(false);
          }}
        />
      </div>
    </div>
  );
};
export default connect(() => ({}))(SecondSert);
