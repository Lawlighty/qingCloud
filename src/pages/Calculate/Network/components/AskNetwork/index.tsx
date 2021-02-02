import React, { useState, useRef } from 'react';
import { Modal, Input, InputNumber, Badge, Button } from 'antd';
import styles from './index.less';
import MoveTitle from '@/components/moveTitle/moveTitle';
import { NodeIndexOutlined } from '@ant-design/icons';
import limitNumber from '@/utils/limitNumber';

const AskNetwork: React.FC<{}> = (props) => {
  const { visible, onClose } = props;
  const [styleTop, setStyleTop] = useState<number>(100);
  const [styleLeft, setStyleLeft] = useState<number>(0);
  const [destroyOnClose, setDestroyOnClose] = useState<boolean>(true);

  // 网卡
  const [name, setName] = useState<string>('');
  const [num, setNum] = useState<number>(1);
  const [net, setNet] = useState<string>('');
  const [netList, setNetList] = useState(['192.168.5.252']);
  const onSearch = (value) => console.log(value);

  // 动态修改 netList
  const changeNetList = () => {
    console.log('动态修改 netList');
    console.log('netList.length', netList.length);
    console.log('num', num);
    const target = num - netList.length;
    // 浅拷贝
    let nowNetList = Object.assign([], netList);

    if (netList.length < num) {
      // 添加 元素
      console.log('添加几个元素', num - netList.length);
      for (let a = 0; a < target; a += 1) {
        nowNetList.push('...');
      }
    } else {
      // 删除元素
      nowNetList = netList.splice(0, num);
    }
    console.log('动态修改后的 nowNetList', nowNetList);
    setNetList(nowNetList);
  };
  // 动态修改 netList 中的地址
  const changeNetListItem = (e, tindex: number, lindex: number) => {
    const nowNetList = Object.assign([], netList);
    const currentItem = nowNetList[tindex];
    const list = currentItem.split('.');
    list[lindex] = e;
    const newcurrentItem = list.join('.');
    nowNetList.splice(tindex, 1, newcurrentItem);
    setNetList(nowNetList);
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
        width={700}
        okText="提交"
        cancelText="取消"
        title={
          <MoveTitle
            styleTop={100}
            styleLeft={0}
            title="申请网卡"
            setStyleTop={setStyleTop}
            setStyleLeft={setStyleLeft}
          />
        }
        className={styles.cc}
      >
        <div>
          <div className={styles.form}>
            <div className={styles.item}>
              <div className={styles.label}>名称</div>
              <div className={styles.controls}>
                <Input value={name} onChange={(e) => setName(e.target.value)} />
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.label}>数量</div>
              <div className={styles.controls}>
                <InputNumber
                  min={1}
                  max={252}
                  value={num}
                  onBlur={() => {
                    if (!num) {
                      setNum(1);
                    }
                    changeNetList();
                    // console.log('选择的数量', num);
                  }}
                  formatter={limitNumber}
                  onChange={(e) => {
                    setNum(e);
                  }}
                />
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.label}>网络</div>
              <div className={styles.controls}>
                <Input
                  disabled
                  style={{ width: 100 }}
                  value={net}
                  onChange={(e) => setNet(e.target.value)}
                />
                <div className="dark_btn" style={{ marginLeft: 10 }}>
                  <NodeIndexOutlined />
                  选择私有网络
                </div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.label}>内网 IP</div>
              <div>
                {netList.map((item, index) => (
                  <div className={`${styles.controls} ${styles.but_10}`} key={item + '' + index}>
                    <InputNumber
                      disabled
                      min={2}
                      max={253}
                      value={parseInt(netList[index].split('.')[0])}
                      formatter={limitNumber}
                      onChange={(e) => {
                        changeNetListItem(e, index, 0);
                      }}
                    />
                    <div className={styles.dotDiv}>
                      <Badge status="default" />
                    </div>

                    <InputNumber
                      disabled
                      min={2}
                      max={253}
                      value={num}
                      value={parseInt(netList[index].split('.')[1])}
                      formatter={limitNumber}
                      onChange={(e) => {
                        changeNetListItem(e, index, 1);
                      }}
                    />
                    <div className={styles.dotDiv}>
                      <Badge status="default" />
                    </div>
                    <InputNumber
                      min={2}
                      max={253}
                      value={parseInt(netList[index].split('.')[2])}
                      formatter={limitNumber}
                      onChange={(e) => {
                        changeNetListItem(e, index, 2);
                      }}
                    />
                    <div className={styles.dotDiv}>
                      <Badge status="default" />
                    </div>
                    <InputNumber
                      min={2}
                      max={253}
                      value={parseInt(netList[index].split('.')[3])}
                      formatter={limitNumber}
                      onChange={(e) => {
                        changeNetListItem(e, index, 3);
                      }}
                    />
                  </div>
                ))}
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
export default AskNetwork;
