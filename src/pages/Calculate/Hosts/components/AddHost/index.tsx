import React, { useState, useRef } from 'react';
import { Modal, Steps, Button } from 'antd';
import styles from './index.less';
import MoveTitle from '@/components/moveTitle/moveTitle';
import ChoseMapping from '../ChoseMapping/index';
import Configuration from '../Configuration/index';
import Network from '../NetWork/index';
import BasicInfo from '../BasicInfo/index';

const { Step } = Steps;
interface formType {
  receiver: number;
  title: string;
  desc?: string;
  rele_id?: string;
  accessory?: string[];
}
const AddHost: React.FC<{}> = (props) => {
  const { visible, onCancel, subHost } = props;
  const [styleTop, setStyleTop] = useState<number>(100);
  const [styleLeft, setStyleLeft] = useState<number>(0);
  const [destroyOnClose, setDestroyOnClose] = useState<boolean>(true);

  const [form, setValues] = useState<formType>({
    receiver: 1,
    title: '',
    desc: '',
    rele_id: '',
    accessory: [],
  });

  const steps = [
    {
      title: '选择映像',
    },
    {
      title: '配置选择',
    },
    {
      title: '网络设置',
    },
    {
      title: '基本信息',
    },
  ];
  // 步骤
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const toBuild = () => {
    console.log('点击创建');
    subHost();
  };
  return (
    <div className="dark_modal">
      <Modal
        getContainer={() => document.getElementsByClassName('dark_modal')[0]}
        maskClosable={false}
        footer={null}
        bodyStyle={{ padding: 0 }}
        destroyOnClose={destroyOnClose}
        visible={visible}
        onCancel={() => {
          onCancel(false);
        }}
        onOk={() => {
          const toForm = form;
          console.log('toForm', toForm);
          subHost();
        }}
        style={{ left: styleLeft, top: styleTop }}
        width={950}
        okText="提交"
        cancelText="取消"
        title={
          <MoveTitle
            styleTop={100}
            styleLeft={0}
            title="创建主机"
            setStyleTop={setStyleTop}
            setStyleLeft={setStyleLeft}
          />
        }
        className={styles.cc}
      >
        <div className={styles.form}>
          <div className={styles.wizard}>
            <div className={styles.wizard_nav}>
              <Steps labelPlacement="vertical" current={current}>
                {steps.map((item) => (
                  <Step key={item.title} title={item.title} />
                ))}
              </Steps>
            </div>
            {/* // 映像 */}
            {current === 0 && <ChoseMapping />}
            {current === 1 && <Configuration />}
            {current === 2 && <Network />}
            {current === 3 && <BasicInfo />}

            <div className={styles.step_action}>
              {current > 0 && (
                <div className="flex_1">
                  <div className="dark_btn_small" onClick={() => prev()}>
                    上一步
                  </div>
                </div>
              )}
              {current < steps.length - 1 && (
                <div className="flex_1" style={{ textAlign: 'right' }}>
                  <div className="dark_btn_small" onClick={() => next()}>
                    下一步
                  </div>
                </div>
              )}

              {current === steps.length - 1 && (
                <div className="flex_1" style={{ textAlign: 'right' }}>
                  <Button type="primary" className="flex_1" onClick={() => toBuild()}>
                    创建
                  </Button>
                </div>
              )}
            </div>
          </div>
          <div className={styles.illustrate}>
            <h4 className={styles.title}>配置详情</h4>
            <div className={styles.table}>
              <div className={styles.items}>
                <div className={styles.label}>映像</div>
                <div className={styles.info}>CentOS 7.7 64bit</div>
              </div>
              <div className={styles.items}>
                <div className={styles.label}>支持物理机</div>
                <div className={styles.info}>是</div>
              </div>
              <div className={styles.items}>
                <div className={styles.label}>主机类型</div>
                <div className={styles.info}>企业型 e2 </div>
              </div>
              <div className={styles.items}>
                <div className={styles.label}>CPU</div>
                <div className={styles.info}>2 核 </div>
              </div>
              <div className={styles.items}>
                <div className={styles.label}>内存</div>
                <div className={styles.info}>4 G</div>
              </div>
              <div className={styles.items}>
                <div className={styles.label}>GPU</div>
                <div className={styles.info}>0</div>
              </div>
              <div className={styles.items}>
                <div className={styles.label}>系统盘</div>
                <div className={styles.info}>20 GB</div>
              </div>
              <div className={styles.items}>
                <div className={styles.label}>带宽</div>
                <div className={styles.info}> 1.5 Gbps</div>
              </div>
              <div className={styles.items}>
                <div className={styles.label}>数量</div>
                <div className={styles.info}> 1</div>
              </div>
            </div>
            <div className={styles.price_div}>
              <span className={styles.total}>总价格:&nbsp;</span>
              <span className={styles.price}>¥0.63</span>
              <span className={styles.unit}>每小时</span>
              <span className={styles.none}>
                (合
                <span className={styles.small_price}>
                  <span className={styles.currency}>¥</span>
                  452.88
                </span>
                每月
              </span>
              <span className={styles.none}>)</span>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddHost;
