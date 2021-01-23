import React, { useState, useRef } from 'react';
import { InputNumber, Select } from 'antd';
import styles from './index.less';
import { CheckOutlined } from '@ant-design/icons';

const Network: React.FC<{}> = (props) => {
  // 自管网络
  const [showSelfNet, setShowSelfNet] = useState(false);
  const [selfNetIndex, setSelfNetIndex] = useState(0);
  const [basicNetList, setBasicNetList] = useState([
    {
      value: 0,
      name: '基础网络1',
    },
    {
      value: 1,
      name: '基础网络2',
    },
  ]);

  return (
    <div>
      <div className={styles.step_inner}>
        <div className={styles.private}>
          <div className={styles.private_a}>
            <div className={styles.private_b}>
              <div className={styles.title}>VPC 私有网络</div>
              <div>
                保证用户之间 100% 隔离的专属网络，推荐使用{' '}
                <div className={styles.buildVpc}>[创建]</div>
              </div>
            </div>
            <div className={styles.vpc}>无</div>
          </div>
          <div className={styles.private_a}>
            {!showSelfNet && (
              <div
                style={{ marginTop: 20 }}
                className={styles.choseNetwork}
                onClick={() => {
                  setShowSelfNet(true);
                }}
              >
                {' >> 选择自管网络 '}
              </div>
            )}
            {showSelfNet && (
              <div>
                <div className={styles.private_b} style={{ marginTop: 20 }}>
                  <div className={styles.title_small}>自管</div>
                  <div>您自己管理的私有网络（可多选）</div>
                </div>
                <div className={styles.vpc}>无</div>
              </div>
            )}
          </div>
          <div className={styles.private_a} style={{ marginTop: 20 }}>
            <div className={styles.private_b}>
              <div className={styles.title}>基础网络</div>
              <div>默认内网互通，需要配置安全组跟其他用户隔离</div>
            </div>
            <div className={styles.network_items}>
              {basicNetList.map((item) => (
                <div
                  key={item.value}
                  className={styles.network_item}
                  onClick={() => {
                    if (selfNetIndex !== item.value) {
                      setSelfNetIndex(item.value);
                    }
                  }}
                >
                  <CheckOutlined className={selfNetIndex === item.value ? styles.active : ''} />
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Network;
