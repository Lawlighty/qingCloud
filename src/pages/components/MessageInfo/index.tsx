import React, { useState, useRef, useEffect } from 'react';
import { Modal } from 'antd';
import styles from './index.less';
import MoveTitle from '@/components/moveTitle/moveTitle';

const MessageInfo: React.FC<{}> = (props) => {
  const { children, visible, onClose } = props;
  const [styleTop, setStyleTop] = useState<number>(100);
  const [styleLeft, setStyleLeft] = useState<number>(0);
  const [destroyOnClose, setDestroyOnClose] = useState<boolean>(true);

  return (
    <div className="dark_modal">
      <Modal
        getContainer={() => document.getElementsByClassName('dark_modal')[0]}
        maskClosable={false}
        bodyStyle={{ padding: 0 }}
        destroyOnClose={destroyOnClose}
        visible={visible}
        onCancel={() => {
          onClose();
        }}
        onOk={() => {}}
        style={{ left: styleLeft, top: styleTop, zIndex: 99 }}
        width={600}
        okText="确认"
        cancelText="取消"
        title={
          <MoveTitle
            styleTop={100}
            styleLeft={0}
            title="提示"
            setStyleTop={setStyleTop}
            setStyleLeft={setStyleLeft}
          />
        }
        className={styles.cc}
      >
        <div className={styles.form}>
          <div className="alert_blue margin_20_10 font_12">{children}</div>
        </div>
      </Modal>
    </div>
  );
};
export default MessageInfo;
