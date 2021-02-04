import React, { useState, useRef } from 'react';
import { Modal, Input, Select, Button, Radio } from 'antd';
import styles from './index.less';
import MoveTitle from '@/components/moveTitle/moveTitle';

const { TextArea } = Input;

const EditSsh: React.FC<{}> = (props) => {
  const { visible, onClose } = props;
  const [styleTop, setStyleTop] = useState<number>(100);
  const [styleLeft, setStyleLeft] = useState<number>(0);
  const [destroyOnClose, setDestroyOnClose] = useState<boolean>(true);

  const [name, setName] = useState<string>('主机名称ssh');
  const [desc, setDesc] = useState<string>('修改啊啊');
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
            title="修改SSH密钥的属性"
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
            <div className={`${styles.item} flex_a_f_s`}>
              <div className={styles.title}>描述</div>
              <div className={`${styles.options} `}>
                <TextArea
                  style={{ minWidth: '300px' }}
                  rows={3}
                  value={desc}
                  onChange={(e) => {
                    setDesc(e.target.value);
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
export default EditSsh;
