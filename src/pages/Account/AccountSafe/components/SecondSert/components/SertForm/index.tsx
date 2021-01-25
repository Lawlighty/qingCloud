import React, { useState, useRef } from 'react';
import { Modal, Input, Button, Checkbox, Tooltip } from 'antd';
import styles from './index.less';
import { TabletOutlined } from '@ant-design/icons';
import MoveTitle from '@/components/moveTitle/moveTitle';

const SertForm: React.FC<{}> = (props) => {
  const { visible, onClose } = props;
  const [styleTop, setStyleTop] = useState<number>(100);
  const [styleLeft, setStyleLeft] = useState<number>(0);
  const [destroyOnClose, setDestroyOnClose] = useState<boolean>(true);

  const [code, setCode] = useState('');
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
            title="启用二次认证"
            setStyleTop={setStyleTop}
            setStyleLeft={setStyleLeft}
          />
        }
        className={styles.cc}
      >
        <div className={styles.form}>
          <div className="alert_yellow margin_20_10 font_12">
            <div>1. 启用二次认证，需要您的注册手机号能接收到短信，以获取验证码。</div>
            <div>2. 启用后，请尽快绑定验证码到手机，登录时您将需要输入动态口令。</div>
          </div>
          <div className="flex margin_b_20 font_12">
            <div className={styles.label}>
              <div className={`dark_btn_small ${styles.cancel}`}>
                <TabletOutlined className="margin_r_5" />
                发送验证码
              </div>
            </div>
            <div className={styles.info}>
              <Input
                value={code}
                placeholder="四位手机验证码"
                onChange={(e) => {
                  setCode(e.target.value);
                }}
              />
            </div>
          </div>

          <div className={styles.footer}>
            <Button type="primary">提交</Button>

            <div className={`dark_btn_small ${styles.cancel}`}>取消</div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default SertForm;
