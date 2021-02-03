import React, { useState, useRef } from 'react';
import { Modal, Input, Select, Button, Radio, InputNumber } from 'antd';
import styles from './index.less';
import MoveTitle from '@/components/moveTitle/moveTitle';

const { TextArea } = Input;
const { Option } = Select;
const CreatePersionNet: React.FC<{}> = (props) => {
  const { visible, onClose } = props;
  const [styleTop, setStyleTop] = useState<number>(100);
  const [styleLeft, setStyleLeft] = useState<number>(0);
  const [destroyOnClose, setDestroyOnClose] = useState<boolean>(true);

  const [name, setName] = useState<string>('');
  const [num, setNum] = useState<number>(0);
  const [type, setType] = useState<number>(0);

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
            title="创建私有网络"
            setStyleTop={setStyleTop}
            setStyleLeft={setStyleLeft}
          />
        }
        className={styles.cc}
      >
        <div>
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
              <div className={styles.title}>数量</div>
              <div className={styles.options}>
                <InputNumber
                  min={1}
                  value={num}
                  onChange={(e) => {
                    setNum(e);
                  }}
                />
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.title}>管理方式</div>
              <div className={styles.options}>
                <Radio.Group
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                  value={type}
                >
                  <Radio value={0}>受管</Radio>
                  <Radio value={1}>自管</Radio>
                </Radio.Group>
              </div>
            </div>
            <div className={styles.help}>
              {type === 0 && '受管私有网络可以使用 VPC 网络 来配置和管理其网络。'}
              {type === 1 && '自管私有网络需要您自行配置和管理其网络。'}
            </div>
          </div>
          <div className={styles.footer}>
            <Button type="primary">创建</Button>
            <div className="dark_btn" style={{ marginLeft: 10 }}>
              取消
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default CreatePersionNet;
