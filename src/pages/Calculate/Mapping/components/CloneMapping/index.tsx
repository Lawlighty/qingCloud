import React, { useState, useRef } from 'react';
import { Modal, Input, Select, Button, Radio, InputNumber } from 'antd';
import styles from './index.less';
import MoveTitle from '@/components/moveTitle/moveTitle';

const { TextArea } = Input;
const { Option } = Select;
const CloneMapping: React.FC<{}> = (props) => {
  const { visible, onClose } = props;
  const [styleTop, setStyleTop] = useState<number>(100);
  const [styleLeft, setStyleLeft] = useState<number>(0);
  const [destroyOnClose, setDestroyOnClose] = useState<boolean>(true);

  const [name, setName] = useState<string>('');
  const [num, setNum] = useState<number>(1);

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
        width={700}
        okText="提交"
        cancelText="取消"
        title={
          <MoveTitle
            styleTop={100}
            styleLeft={0}
            title="克隆映像"
            setStyleTop={setStyleTop}
            setStyleLeft={setStyleLeft}
          />
        }
        className={styles.cc}
      >
        <div>
          <div className="alert_blue font_12 margin_20">
            <div>
              您可以将当前选择的系统、自有或共享映像创建一份或多份拷贝。新拷贝创建后属于您名下的自有映像，按映像标准费用收取。
            </div>
            <br />
            <div className="price_show">
              <h6>
                <span className="total">合计:</span>
                <span className="price">
                  <span className="currency">¥</span>0.0282
                </span>
                <span className="unit">每小时</span>
                <span className="none">
                  (<span className="unit">合</span>
                  <span className="price">
                    <span className="currency">¥</span>20.30
                  </span>
                  <span className="unit">每月）</span>
                </span>
              </h6>
            </div>
          </div>

          <div className={styles.form}>
            <div className={styles.item}>
              <div className={styles.title}>名称</div>
              <div className={styles.options}>
                <Input
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.title}>拷贝数量</div>
              <div className={styles.options}>
                <InputNumber
                  value={num}
                  min={1}
                  onChange={(e) => {
                    setNum(e);
                  }}
                />
              </div>
            </div>
          </div>
          <div className={styles.footer}>
            <Button type="primary">提交</Button>
            <div className="dark_btn" style={{ marginLeft: 10 }}>
              取消
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default CloneMapping;
