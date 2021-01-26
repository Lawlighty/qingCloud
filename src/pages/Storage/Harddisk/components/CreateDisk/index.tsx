import React, { useState, useRef } from 'react';
import { Modal, Input, InputNumber, Select, Button, Slider, Radio } from 'antd';
import styles from './index.less';
import MoveTitle from '@/components/moveTitle/moveTitle';

const { Option } = Select;
const CreateDisk: React.FC<{}> = (props) => {
  const { visible, onClose } = props;
  const [styleTop, setStyleTop] = useState<number>(100);
  const [styleLeft, setStyleLeft] = useState<number>(0);
  const [destroyOnClose, setDestroyOnClose] = useState<boolean>(true);

  const [way, setWay] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [num, setNum] = useState<number>(1);
  const [area, setArea] = useState<number>(0);
  const [type, setType] = useState<number>(0);
  // 是否 加密
  const [isEncry, setIsEncry] = useState<boolean>(false);
  // 容量
  const [cpuDisk, setCpuDisk] = React.useState(20);
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
            title="创建硬盘"
            setStyleTop={setStyleTop}
            setStyleLeft={setStyleLeft}
          />
        }
        className={styles.cc}
      >
        <div>
          <div className="alert_blue margin_20_10 font_12">
            <div className={styles.price_div}>
              <span className={styles.total}>总价格:&nbsp;</span>
              <span className={styles.price}>¥0.63</span>
              <span className={styles.unit}>每小时&nbsp;*&nbsp;</span>
              <span>{num}&nbsp;=&nbsp;</span>

              <span className={styles.price}>¥0.63</span>
              <span>&nbsp;每小时</span>
              <span className={styles.none}>
                (合
                <span className={styles.price}>
                  <span className={styles.currency}>¥</span>
                  452.88
                </span>
                每月
              </span>
              <span className={styles.none}>)</span>
            </div>
          </div>
          {type === 2 && (
            <div className="alert_yellow margin_20_10 font_12">
              警告：为保证容量型硬盘的性能最优，请确保分区起点从1开始，命令参考：mkpart primary 1
              -1。
            </div>
          )}

          <div className={styles.form}>
            <div className={styles.item}>
              <div className={styles.title}>计费方式</div>
              <div className={styles.options}>
                <Radio.Group
                  onChange={(e) => {
                    setWay(e.target.value);
                  }}
                  value={way}
                >
                  <Radio value={0}>按需计费</Radio>
                </Radio.Group>
              </div>
            </div>
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
                  max={100}
                  value={num}
                  onChange={(e) => {
                    setNum(e);
                  }}
                />
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.title}>可用区</div>
              <div className={styles.options}>
                <Select
                  value={area}
                  style={{ width: 120 }}
                  onChange={(e) => {
                    setArea(e);
                  }}
                >
                  <Option value={0}>上海</Option>
                </Select>
              </div>
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
                  <Radio value={0}>基础型</Radio>
                  <Radio value={1}>SSD企业级</Radio>
                  <Radio value={2}>容量型</Radio>
                  <Radio value={3}>企业级分布式 SAN (NeonSAN)</Radio>
                </Radio.Group>
              </div>
            </div>
            {type === 1 && (
              <div className={styles.item}>
                <div className={styles.title}>是否加密</div>
                <div className={styles.options}>
                  <Radio.Group
                    onChange={(e) => {
                      setIsEncry(e.target.value);
                    }}
                    value={isEncry}
                  >
                    <Radio value={false}>否</Radio>
                    <Radio value={true}>是</Radio>
                  </Radio.Group>
                </div>
              </div>
            )}
            {isEncry && <div className={styles.help}>不影响硬盘的挂载和读写</div>}

            <div className={styles.item}>
              <div className={styles.title}>容量</div>
              <div className={styles.options} style={{ alignItems: 'center' }}>
                <Slider
                  className="bold_slider"
                  style={{ width: 300 }}
                  min={10}
                  max={2000}
                  onChange={(e) => {
                    setCpuDisk(e);
                  }}
                  value={typeof cpuDisk === 'number' ? cpuDisk : 10}
                />
                <InputNumber
                  min={10}
                  max={2000}
                  style={{ margin: '0 16px', width: 60 }}
                  value={cpuDisk}
                  onChange={(e) => {
                    setCpuDisk(e);
                  }}
                />
                <div style={{ fontSize: 16 }}>GB</div>
              </div>
            </div>
            <div className={styles.help}>10GB - 2000GB</div>
            <div className={styles.help}>性能参考：IO吞吐 37.5MB/s IOPS 580</div>
          </div>
          <div className={styles.footer}>
            <Button type="primary">提交</Button>
            <div className="dark_btn" style={{ padding: '5px 16px', marginLeft: 10 }}>
              取消
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default CreateDisk;
