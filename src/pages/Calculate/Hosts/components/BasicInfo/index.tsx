import React, { useState, useRef } from 'react';
import { Radio, Input, InputNumber } from 'antd';
import styles from './index.less';
import { CheckOutlined } from '@ant-design/icons';

const BasicInfo: React.FC<{}> = (props) => {
  // 主机名
  const [hostName, setHostName] = useState('');
  const [hostNum, setHostNum] = useState(1);
  const [sshWay, setSshWay] = useState(0);

  const [sshWayList, setSshWayList] = useState([
    {
      value: 0,
      name: 'SSH密钥',
    },
    {
      value: 1,
      name: '密码',
    },
  ]);
  const [password, setPassword] = useState('');
  // 高级选项
  const [showHigh, setShowHigh] = useState(false);
  // 用户数据
  const [dataWay, setDataWay] = useState(0);
  const [dataWayList, setDataWayList] = useState([
    {
      value: 0,
      name: '无',
    },
    {
      value: 1,
      name: '文本',
    },
    {
      value: 2,
      name: '压缩包',
    },
    {
      value: 3,
      name: '执行文件',
    },
  ]);
  // 网卡多队列
  const [netWay, setNetWay] = useState(0);
  const [netWayList, setNetWayList] = useState([
    {
      value: 0,
      name: '启用',
    },
    {
      value: 1,
      name: '禁用',
    },
  ]);
  // Hostname
  const [Hostname, setHostname] = useState('');
  return (
    <div>
      <div className={styles.step_inner}>
        <div className={styles.info_item}>
          <div className={styles.label}>计费方式</div>
          <div className={styles.controls}>
            <Radio checked>Radio</Radio>
          </div>
        </div>
        <div className={styles.info_item}>
          <div className={styles.label}>主机名称</div>
          <div className={styles.controls}>
            <Input
              value={hostName}
              onChange={(e) => {
                setHostName(e.target.value);
              }}
            />
          </div>
        </div>
        <div className={styles.info_item}>
          <div className={styles.label}>主机数量</div>
          <div className={styles.controls}>
            <InputNumber
              min={1}
              max={10}
              value={hostNum}
              onChange={(e) => {
                setHostNum(e);
              }}
            />
          </div>
        </div>
        <div className={styles.info_item}>
          <div className={styles.label}>SSH登录方式</div>
          <div className={styles.controls}>
            <Radio.Group
              onChange={(e) => {
                setSshWay(e.target.value);
              }}
              value={sshWay}
            >
              {sshWayList.map((item) => (
                <Radio value={item.value} key={item.value}>
                  {item.name}
                </Radio>
              ))}
            </Radio.Group>
          </div>
        </div>
        <div className={styles.info_item}>
          <div className={styles.label}>用户名</div>
          <div className={styles.controls}>
            <Input disabled value="root" />
          </div>
        </div>
        {sshWay === 0 && (
          <div className={styles.info_item}>
            <div className={styles.label}>SSH密钥</div>
            <div className={styles.controls}>
              目前没有可选的 SSH 密钥，请先<div className={styles.add}>+ 创建一个</div>
            </div>
          </div>
        )}
        {sshWay === 1 && (
          <div>
            <div className={styles.info_item}>
              <div className={styles.label}>密码</div>
              <div className={styles.controls}>
                <Input.Password
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className={styles.info_item}>
              <div className={styles.alert}>密码至少8位，并包括大小写字母及数字。</div>
            </div>
          </div>
        )}

        {!showHigh && (
          <div className={styles.info_item}>
            <div
              className={styles.showHigh}
              onClick={() => {
                setShowHigh(true);
              }}
            >
              显示高级选项
            </div>
          </div>
        )}
        {showHigh && (
          <div>
            <div className={styles.info_item}>
              <div className={styles.label}>Hostname</div>
              <div className={styles.controls}>
                <Input
                  value={Hostname}
                  onChange={(e) => {
                    setHostname(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className={styles.info_item}>
              <div className={styles.tips}>若不填则 hostname 与主机 ID 相同，形如：i-1234abcd</div>
            </div>
            <div className={styles.info_item}>
              <div className={styles.label}>用户数据</div>
              <div className={styles.controls}>
                <Radio.Group
                  onChange={(e) => {
                    setDataWay(e.target.value);
                  }}
                  value={dataWay}
                >
                  {dataWayList.map((item) => (
                    <Radio value={item.value} key={item.value}>
                      {item.name}
                    </Radio>
                  ))}
                </Radio.Group>
              </div>
            </div>
            <div className={styles.info_item}>
              <div className={styles.label}>网卡多队列</div>
              <div className={styles.controls}>
                <Radio.Group
                  onChange={(e) => {
                    setNetWay(e.target.value);
                  }}
                  value={netWay}
                >
                  {netWayList.map((item) => (
                    <Radio value={item.value} key={item.value}>
                      {item.name}
                    </Radio>
                  ))}
                </Radio.Group>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BasicInfo;
