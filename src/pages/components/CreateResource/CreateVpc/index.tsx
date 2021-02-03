import React, { useState, useRef } from 'react';
import { Modal, Input, Select, Button, Radio, InputNumber } from 'antd';
import styles from './index.less';
import MoveTitle from '@/components/moveTitle/moveTitle';

const { TextArea } = Input;
const { Option } = Select;
const CreateVpc: React.FC<{}> = (props) => {
  const { visible, onClose } = props;
  const [styleTop, setStyleTop] = useState<number>(100);
  const [styleLeft, setStyleLeft] = useState<number>(0);
  const [destroyOnClose, setDestroyOnClose] = useState<boolean>(true);

  const [name, setName] = useState<string>('');
  const [ipv4, setIpv4] = useState<string>('192.168.0.0/16');
  const [type, setType] = useState<number>(0);
  const [safeGroup, setSafeGroup] = useState<number>(0);

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
            title="创建VPC网络"
            setStyleTop={setStyleTop}
            setStyleLeft={setStyleLeft}
          />
        }
        className={styles.cc}
      >
        <div>
          <div className="alert_blue font_12 margin_20">
            <div className="price_show">
              <h6>
                <span className="total">总价格:</span>
                <span className="price">¥0.0625</span>
                <span className="unit">每小时</span>&nbsp;× 1 = &nbsp;
                <span className="price">¥0.06</span>
                <span className="unit">每小时</span>&nbsp;
                <span className="none">
                  (<span className="unit">合</span>
                  <span className="price">¥45.00</span>
                  <span className="unit">每月</span>
                </span>
                <span className="none">)</span>
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
              <div className={styles.title}>IPv4 地址范围</div>
              <div className={styles.options}>
                <Select
                  value={ipv4}
                  onChange={(e) => {
                    setIpv4(e);
                  }}
                >
                  <Option value="192.168.0.0/16">192.168.0.0/16</Option>
                  <Option value="172.16.0.0/16">172.16.0.0/16</Option>
                  <Option value="172.17.0.0/16">172.17.0.0/16</Option>
                  <Option value="172.18.0.0/16">172.18.0.0/16</Option>
                  <Option value="172.19.0.0/16">172.19.0.0/16</Option>
                  <Option value="172.20.0.0/16">172.20.0.0/16</Option>
                  <Option value="172.21.0.0/16">172.21.0.0/16</Option>
                  <Option value="172.22.0.0/16">172.22.0.0/16</Option>
                  <Option value="172.23.0.0/16">172.23.0.0/16</Option>
                  <Option value="172.24.0.0/16">172.24.0.0/16</Option>
                  <Option value="172.25.0.0/16">172.25.0.0/16</Option>
                  <Option value="172.26.0.0/16">172.26.0.0/16</Option>
                  <Option value="172.27.0.0/16">172.27.0.0/16</Option>
                  <Option value="172.28.0.0/16">172.28.0.0/16</Option>
                  <Option value="172.29.0.0/16">172.29.0.0/16</Option>
                  <Option value="172.30.0.0/16">172.30.0.0/16</Option>
                  <Option value="172.31.0.0/16">172.31.0.0/16</Option>
                </Select>
              </div>
            </div>
            <div className={styles.item}>
              <div className={`${styles.title} font_bold color_green`}>管理路由器属性</div>
              <div className="line_gray"></div>
            </div>
            <div className={styles.item}>
              <div className={styles.title}>类型</div>
              <div className={styles.options}>
                <Radio.Group
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                  value={type}
                >
                  <Radio value={0}>小型</Radio>
                  <Radio value={1}>中型</Radio>
                  <Radio value={2}>大型</Radio>
                  <Radio value={3}>超大型</Radio>
                </Radio.Group>
              </div>
            </div>
            <div className={styles.help}>
              {type === 0 && '管理流量转发能力： 100kpps.'}
              {type === 1 && '管理流量转发能力： 150kpps.'}
              {type === 2 && '管理流量转发能力： 200kpps.'}
              {type === 3 && '管理流量转发能力： 250kpps.'}
            </div>
            <div className={styles.item}>
              <div className={styles.title}>安全组</div>
              <div className={styles.options}>
                <Select
                  value={safeGroup}
                  onChange={(e) => {
                    setSafeGroup(e);
                  }}
                >
                  <Option value={0}>(缺省安全组)</Option>
                </Select>
              </div>
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
export default CreateVpc;
