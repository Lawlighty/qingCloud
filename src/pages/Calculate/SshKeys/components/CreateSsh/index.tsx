import React, { useState, useRef } from 'react';
import { Modal, Input, Select, Button, Radio } from 'antd';
import styles from './index.less';
import MoveTitle from '@/components/moveTitle/moveTitle';

const { TextArea } = Input;
const { Option } = Select;
const CreateSsh: React.FC<{}> = (props) => {
  const { visible, onClose } = props;
  const [styleTop, setStyleTop] = useState<number>(100);
  const [styleLeft, setStyleLeft] = useState<number>(0);
  const [destroyOnClose, setDestroyOnClose] = useState<boolean>(true);

  const [name, setName] = useState<string>('');
  const [way, setWay] = useState<number>(0);
  // 公钥
  const [pubkey, setPubkey] = useState<string>('');
  // 加密方法
  const [encrypt, setEncrypt] = useState<number>(0);

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
            title="创建SSH密钥"
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
              <div className={styles.title}>方式</div>
              <div className={styles.options}>
                <Radio.Group
                  onChange={(e) => {
                    setWay(e.target.value);
                  }}
                  value={way}
                >
                  <Radio value={0}>创建新密钥对</Radio>
                  <Radio value={1}>使用已有公钥</Radio>
                </Radio.Group>
              </div>
            </div>
            {way === 0 && (
              <div className={styles.item}>
                <div className={styles.title}>加密方法</div>
                <div className={styles.options}>
                  <Select
                    value={encrypt}
                    style={{ width: 176 }}
                    onChange={(e) => {
                      setEncrypt(e);
                    }}
                  >
                    <Option value={0}>ssh-rsa</Option>
                    <Option value={1}>ssh-dss</Option>
                    <Option value={2}>ecdsa-sha2-nistp521</Option>
                    <Option value={3}>ssh-ed25519</Option>
                  </Select>
                </div>
              </div>
            )}
            {way === 1 && (
              <div className={styles.item}>
                <div className={styles.title}>公钥</div>
                <div className={styles.options}>
                  <TextArea
                    style={{ width: '400px' }}
                    rows={6}
                    value={pubkey}
                    onChange={(e) => {
                      setPubkey(e.target.value);
                    }}
                  />
                </div>
              </div>
            )}

            {encrypt === 3 && (
              <div className={styles.help}>
                若要使用加密算法 ssh-ed25519 , 请先确保主机内 OpenSSH 版本大于等于 6.5
              </div>
            )}
            {way === 1 && (
              <div className={styles.help}>
                格式：ssh-rsa AAAAB3NzaC1ycEAAArwtrqwerJAsdfdgjUTEEHh...
              </div>
            )}
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
export default CreateSsh;
