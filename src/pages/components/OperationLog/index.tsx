import React, { useState, useRef } from 'react';
import { Modal, Input, Timeline } from 'antd';
import styles from './index.less';
import MoveTitle from '@/components/moveTitle/moveTitle';

const { Search } = Input;
const OperationLog: React.FC<{}> = (props) => {
  const { visible, onClose } = props;
  const [styleTop, setStyleTop] = useState<number>(100);
  const [styleLeft, setStyleLeft] = useState<number>(0);
  const [destroyOnClose, setDestroyOnClose] = useState<boolean>(true);

  const onSearch = (value) => console.log(value);
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
            title="操作日志"
            setStyleTop={setStyleTop}
            setStyleLeft={setStyleLeft}
          />
        }
        className={styles.cc}
      >
        <div className={styles.form}>
          <div className={styles.title}>
            <Search placeholder="相关资源ID" onSearch={onSearch} style={{ width: 200 }} />
          </div>
          <div className={styles.log}>
            <Timeline>
              <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
              <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
              <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
              <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
            </Timeline>
            ,
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default OperationLog;
