import React, { useState, useRef } from 'react';
import { InputNumber, Select, Slider } from 'antd';
import styles from './index.less';
import ChoseDisk from '@/pages/Storage/Harddisk/components/ChoseDisk/index';

const { Option } = Select;
const Configuration: React.FC<{}> = (props) => {
  // 主机类型
  const [hostTypeIndex, setHostTypeIndex] = React.useState(0);
  const [hostType, setHostType] = React.useState([
    {
      value: 0,
      name: '基础形',
    },
    {
      value: 1,
      name: '企业形 e1',
    },
  ]);
  // CPU
  const [cpuTypeIndex, setCpuTypeIndex] = React.useState(0);
  const [cpuType, setCpuType] = React.useState([
    {
      value: 0,
      name: '2核',
    },
    {
      value: 1,
      name: '4核',
    },
    {
      value: 2,
      name: '8核',
    },
    {
      value: 3,
      name: '16核',
    },
    {
      value: 4,
      name: '32核',
    },
  ]);
  // CPU 高级选项
  const [showMoreOP, setShowMoreOP] = React.useState(false);
  const [cpuSlotNum, setCpuSlotNum] = React.useState(2);
  const [cpuCoreNum, setCpuCoreNum] = React.useState(1);
  const [cpuThreadNum, setCpuThreadNum] = React.useState(1);
  const [cpuSys, setCpuSys] = React.useState('');

  // 内存
  const [cpuStorageIndex, setCpuStorageIndex] = React.useState(0);
  const [cpuStorage, setCpuStorage] = React.useState([
    {
      value: 0,
      name: '4G',
    },
    {
      value: 1,
      name: '8G',
    },
    {
      value: 2,
      name: '16G',
    },
    {
      value: 3,
      name: '32核',
    },
    {
      value: 4,
      name: '64G',
    },
  ]);

  // 系统盘
  const [cpuDisk, setCpuDisk] = React.useState(20);
  const [showOtherDisk, setShowOtherDisk] = React.useState(false);

  return (
    <div>
      <div className={styles.step_inner}>
        <div className={styles.instances_type}>
          <div className={styles.title}>主机类型</div>
          <div className={styles.options}>
            {hostType.map((item) => (
              <div
                key={item.value}
                className={`${styles.option} ${hostTypeIndex === item.value ? styles.active : ''}`}
                onClick={() => {
                  if (hostTypeIndex !== item.value) {
                    setHostTypeIndex(item.value);
                  }
                }}
              >
                {item.name}
              </div>
            ))}
          </div>
          <div className={styles.help}>
            共享计算资源，适用各种企业级应用，具有高性能、低延迟、大带宽的特性
          </div>
        </div>
        <div className={styles.instances_type}>
          <div className={styles.title}>CPU</div>
          <div className={styles.options}>
            {cpuType.map((item) => (
              <div
                key={item.value}
                className={`${styles.option} ${styles.minW70} ${
                  cpuTypeIndex === item.value ? styles.active : ''
                }`}
                onClick={() => {
                  if (cpuTypeIndex !== item.value) {
                    setCpuTypeIndex(item.value);
                  }
                }}
              >
                {item.name}
              </div>
            ))}
          </div>
          <div className={styles.more_opt}>
            <div
              className={styles.help}
              onClick={() => {
                setShowMoreOP(!showMoreOP);
              }}
            >
              {showMoreOP ? '隐藏高级选项...' : '显示高级选项...'}
            </div>
            {showMoreOP && (
              <div className={styles.cpu_topology}>
                <div className={styles.cpu_topology_item}>
                  <div className={styles.title}>CPU 拓扑结构：</div>
                  <div className={styles.label}>插槽数:</div>
                  <div className={styles.info}>
                    <InputNumber
                      className={styles.value}
                      size="small"
                      min={1}
                      max={99}
                      defaultValue={cpuSlotNum}
                      onChange={(e) => {
                        setCpuSlotNum(e);
                      }}
                    />
                  </div>
                  <div className={styles.label}>核心数:</div>
                  <div className={styles.info}>
                    <InputNumber
                      className={styles.value}
                      size="small"
                      min={1}
                      max={99}
                      defaultValue={cpuCoreNum}
                      onChange={(e) => {
                        setCpuCoreNum(e);
                      }}
                    />
                  </div>
                  <div className={styles.label}>线程数:</div>
                  <div className={styles.info}>
                    <InputNumber
                      className={styles.value}
                      size="small"
                      min={1}
                      max={99}
                      defaultValue={cpuThreadNum}
                      onChange={(e) => {
                        setCpuThreadNum(e);
                      }}
                    />
                  </div>
                </div>
                <div className={styles.cpu_topology_item}>
                  <div className={styles.title}>CPU 体系架构：</div>
                  <div className={styles.info}>
                    <Select
                      size="small"
                      value={cpuSys}
                      style={{ width: 100 }}
                      onChange={(e) => {
                        setCpuSys(e);
                      }}
                    >
                      <Option value="">默认</Option>
                      <Option value="Westmere">Westmere</Option>
                      <Option value="SandyBridge">SandyBridge</Option>
                      <Option value="IvyBridge">IvyBridge</Option>
                      <Option value="Haswell">Haswell</Option>
                      <Option value="Broadwell">Broadwell</Option>
                    </Select>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={styles.instances_type}>
          <div className={styles.title}>内存</div>
          <div className={styles.options}>
            {cpuStorage.map((item) => (
              <div
                key={item.value}
                className={`${styles.option} ${styles.minW70} ${
                  cpuStorageIndex === item.value ? styles.active : ''
                }`}
                onClick={() => {
                  if (cpuStorageIndex !== item.value) {
                    setCpuStorageIndex(item.value);
                  }
                }}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.instances_type}>
          <div className={styles.title}>系统盘</div>
          <div className={styles.options} style={{ alignItems: 'center' }}>
            <Slider
              className="bold_slider"
              style={{ width: 300 }}
              min={20}
              max={300}
              onChange={(e) => {
                setCpuDisk(e);
              }}
              value={typeof cpuDisk === 'number' ? cpuDisk : 20}
            />
            <InputNumber
              min={20}
              max={300}
              style={{ margin: '0 16px', width: 60 }}
              value={cpuDisk}
              onChange={(e) => {
                setCpuDisk(e);
              }}
            />
            <div style={{ fontSize: 16 }}>GB</div>
          </div>
          <div className={styles.help}>20GB - 300GB</div>
          <div className={styles.help}>性能参考 IOPS: 11000</div>
          <div className={styles.more_opt}>
            <div
              className={styles.help}
              onClick={() => {
                setShowOtherDisk(true);
              }}
            >
              + 挂载其他硬盘
            </div>
            <ChoseDisk
              visible={showOtherDisk}
              onClose={() => {
                setShowOtherDisk(false);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configuration;
