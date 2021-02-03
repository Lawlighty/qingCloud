import React, { useState, useRef } from 'react';
import { Modal, Input, InputNumber, Select, Button, Slider, Radio } from 'antd';
import styles from './index.less';
import MoveTitle from '@/components/moveTitle/moveTitle';
import CreateVpc from './CreateVpc/index';
import CreatePersionNet from './CreatePersionNet/index';
import ChoseVpc from './ChoseVpc/index';

const { Option } = Select;
const CreateResource: React.FC<{}> = (props) => {
  const { visible, onClose } = props;
  const [styleTop, setStyleTop] = useState<number>(100);
  const [styleLeft, setStyleLeft] = useState<number>(0);
  const [destroyOnClose, setDestroyOnClose] = useState<boolean>(true);

  const [showCreateVpc, setShowCreateVpc] = useState<boolean>(false);
  const [showCreatePersion, setShowCreatePersion] = useState<boolean>(false);
  const [showChosevpc, setShowChosevpc] = useState<boolean>(false);

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
              <div
                className={styles.option}
                onClick={(e) => {
                  setShowCreateVpc(true);
                }}
              >
                操作
              </div>
              <CreateVpc
                visible={showCreateVpc}
                onClose={() => {
                  setShowCreateVpc(false);
                }}
              />
            </div>
            <div className={styles.item}>
              <div className={styles.label}>2. 创建私有网络</div>
              <div
                className={styles.option}
                onClick={(e) => {
                  setShowCreatePersion(true);
                }}
              >
                操作
              </div>
              <CreatePersionNet
                visible={showCreatePersion}
                onClose={() => {
                  setShowCreatePersion(false);
                }}
              />
            </div>
            <div className={styles.item}>
              <div className={styles.label}>3. 连接私有网络到 VPC 网络</div>
              <div
                className={styles.option}
                onClick={(e) => {
                  setShowChosevpc(true);
                }}
              >
                操作
              </div>
              <ChoseVpc
                visible={showChosevpc}
                onClose={() => {
                  setShowChosevpc(false);
                }}
              />
            </div>
          </div>
          <div className={styles.footer}>
            <Button type="primary">下一步</Button>
            <div className="dark_btn" style={{ marginLeft: 10 }}>
              取消
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default CreateResource;
