import React, { useState, useRef } from 'react';
import { Modal, Input, InputNumber, Select, Button, Slider, Radio } from 'antd';
import styles from './index.less';
import MoveTitle from '@/components/moveTitle/moveTitle';

const { Option } = Select;
const CreateResource: React.FC<{}> = (props) => {
  const { visible, onClose } = props;
  const [styleTop, setStyleTop] = useState<number>(100);
  const [styleLeft, setStyleLeft] = useState<number>(0);
  const [destroyOnClose, setDestroyOnClose] = useState<boolean>(true);

  const [way, setWay] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [num, setNum] = useState<number>(1);
  const [area, setArea] = useState<number>(0);
  const [type, setType] = useState<number>(0);
  // 是否 加密
  const [isEncry, setIsEncry] = useState<boolean>(false);
  // 容量
  const [cpuDisk, setCpuDisk] = React.useState(20);
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
          onClose();
        }}
        onOk={() => {}}
        style={{ left: styleLeft, top: styleTop, zIndex: 99 }}
        width={400}
        okText="提交"
        cancelText="取消"
        title={
          <MoveTitle
            styleTop={100}
            styleLeft={0}
            title="创建依赖资源"
            setStyleTop={setStyleTop}
            setStyleLeft={setStyleLeft}
          />
        }
        className={styles.cc}
      >
        <div>
          <div className="alert_blue margin_20_10 font_12">
            首先您需要有一个已连接到 VPC 网络 的私有网络。您可以按照以下步骤获取所需资源。
          </div>

          <div className={styles.form}>
            <div className={styles.item}>
              <div className={styles.label}>1. 创建 VPC 网络</div>
              <div className={styles.option}>操作</div>
            </div>
            <div className={styles.item}>
              <div className={styles.label}>2. 创建私有网络</div>
              <div className={styles.option}>操作</div>
            </div>
            <div className={styles.item}>
              <div className={styles.label}>3. 连接私有网络到 VPC 网络</div>
              <div className={styles.option}>操作</div>
            </div>
          </div>
          <div className={styles.footer}>
            <Button type="primary">下一步</Button>
            <div className="dark_btn" style={{ padding: '5px 16px', marginLeft: 10 }}>
              取消
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default CreateResource;
