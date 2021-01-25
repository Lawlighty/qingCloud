import React, { useState, useRef } from 'react';
import { Modal, Select, Button } from 'antd';
import styles from './index.less';
import MoveTitle from '@/components/moveTitle/moveTitle';

const { Option } = Select;
const OnlineNumber: React.FC<{}> = (props) => {
  const { visible, onClose } = props;
  const [styleTop, setStyleTop] = useState<number>(100);
  const [styleLeft, setStyleLeft] = useState<number>(0);
  const [destroyOnClose, setDestroyOnClose] = useState<boolean>(true);

  const [key, setKey] = useState(0);
  const handleChange = (e) => {
    setKey(e);
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
          onClose();
        }}
        onOk={() => {}}
        style={{ left: styleLeft, top: styleTop, zIndex: 99 }}
        width={600}
        okText="提交"
        cancelText="取消"
        title={
          <MoveTitle
            styleTop={100}
            styleLeft={0}
            title="周期跟新密码"
            setStyleTop={setStyleTop}
            setStyleLeft={setStyleLeft}
          />
        }
        className={styles.cc}
      >
        <div className={styles.form}>
          <div className="alert_blue margin_20_10">
            您可以设置同时打开控制台的浏览器、终端最大数量。如果无须设置，请选择不启用。
          </div>
          <div className="flex margin_b_20">
            <div className={styles.label}>同时在线数</div>
            <div className={styles.info}>
              <Select style={{ width: 120, marginLeft: 20 }} value={key} onChange={handleChange}>
                <Option value={0}>不启用</Option>
                <Option value={1}>1</Option>
                <Option value={2}>2</Option>
                <Option value={3}>3</Option>
                <Option value={4}>4</Option>
                <Option value={5}>5</Option>
                <Option value={6}>6</Option>
                <Option value={7}>7</Option>
                <Option value={8}>8</Option>
                <Option value={9}>9</Option>
                <Option value={10}>10</Option>
              </Select>
            </div>
          </div>
          <div className={styles.footer}>
            <Button type="primary">修改</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default OnlineNumber;
