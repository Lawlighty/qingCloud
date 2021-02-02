import React, { useState, useRef } from 'react';
import { Modal, Input, InputNumber, Select, Button, Slider, Radio } from 'antd';
import styles from './index.less';
import MoveTitle from '@/components/moveTitle/moveTitle';
import CreateDisk from '../CreateDisk/index';

const { Search } = Input;
const ChoseDisk: React.FC<{}> = (props) => {
  const { visible, onClose } = props;
  const [styleTop, setStyleTop] = useState<number>(100);
  const [styleLeft, setStyleLeft] = useState<number>(0);
  const [destroyOnClose, setDestroyOnClose] = useState<boolean>(true);

  const [showBuid, setShowBuild] = useState<boolean>(false);
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
        width={750}
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
          <div className="alert_yellow margin_20_10 font_12">
            注意：
            <br />• 如果你需要在Linux系统启动时自动挂载硬盘，请不要使用在 /etc/fstab 中直接指定
            /dev/sdc1 这样的写法， 因为在云中设备的顺序编码在关机、开机过程中可能发生改变，推荐使用
            UUID 或者 LABEL 的方式来指定。
            <br />
            •如果您把一块容量盘绑定到多个主机上，请确保使用集群文件系统，例如OCFS2，否则磁盘可能会损坏。
            <br />• 硬盘副本策略必须和主机副本策略一致。
            <br />• 基础型主机能够挂载基础型硬盘、性能型硬盘和容量型硬盘；企业型 e1 主机、企业型 e2
            主机和专业增强型主机能够挂载超高性能型、企业级SSD硬盘和容量型硬盘；性能型主机能够挂载性能型硬盘、容量型硬盘和基础型硬盘；超高性能型主机能够挂载超高性能型硬盘、容量型硬盘和企业级SSD硬盘。
            <br />• GPU 主机仅能够挂载容量型和企业级分布式 SAN（NeonSAN）类型的硬盘。
          </div>

          <div className={styles.form}>
            <div className="flex">
              <Button
                type="primary"
                className="margin_r_10"
                onClick={() => {
                  setShowBuild(true);
                }}
              >
                创建
              </Button>
              <CreateDisk
                visible={showBuid}
                onClose={() => {
                  setShowBuild(false);
                }}
              />
              <Search onSearch={onSearch} style={{ width: 200 }} />
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
export default ChoseDisk;
