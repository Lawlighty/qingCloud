import React, { useState, useRef } from 'react';
import { Modal, Input, Button, Checkbox, Tooltip } from 'antd';
import styles from './index.less';
import { QuestionCircleFilled } from '@ant-design/icons';
import MoveTitle from '@/components/moveTitle/moveTitle';

const AccountLock: React.FC<{}> = (props) => {
  const { visible, onClose } = props;
  const [styleTop, setStyleTop] = useState<number>(100);
  const [styleLeft, setStyleLeft] = useState<number>(0);
  const [destroyOnClose, setDestroyOnClose] = useState<boolean>(true);

  const [psw, setPsw] = useState('');
  const [check1, setCheck1] = useState(true);
  const [check2, setCheck2] = useState(true);
  const onChange1 = (e) => {
    setCheck1(e.target.checked);
  };
  const onChange2 = (e) => {
    setCheck2(e.target.checked);
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
            title="创建账户锁"
            setStyleTop={setStyleTop}
            setStyleLeft={setStyleLeft}
          />
        }
        className={styles.cc}
      >
        <div className={styles.form}>
          <div className="flex margin_t_b_20 font_12">
            <div className={styles.label}>密码</div>
            <div className={styles.info}>
              <Input.Password
                value={psw}
                onChange={(e) => {
                  setPsw(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex margin_b_20 ">
            <div className={styles.label} />
            <div className={styles.info}>
              <Checkbox checked={check1} onChange={onChange1}>
                控制台{' '}
                <Tooltip placement="top" title="锁定控制台后,无法在控制台执行写操作">
                  <QuestionCircleFilled />
                </Tooltip>
              </Checkbox>
              <Checkbox checked={check2} onChange={onChange2}>
                API{' '}
                <Tooltip placement="top" title="锁定API后,无法在API执行写操作">
                  <QuestionCircleFilled />
                </Tooltip>
              </Checkbox>
            </div>
          </div>
          <div className={styles.footer}>
            <Button type="primary">修改</Button>

            <div className={`dark_btn_small ${styles.cancel}`}>取消</div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default AccountLock;
