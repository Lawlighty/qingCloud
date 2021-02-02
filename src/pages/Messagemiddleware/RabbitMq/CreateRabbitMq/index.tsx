import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { connect, Dispatch } from 'umi';
import styles from './index.less';
import { Button, Input, Select, Radio, Slider, InputNumber, Checkbox } from 'antd';
import { Link } from 'umi';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import CreateResource from '@/pages/components/CreateResource/index';

const { TextArea } = Input;
const { Option } = Select;
const CreateRabbitMq: React.FC<{}> = (props) => {
  const [costInfo, setCostInfo] = useState({
    type: 0,
    node1: 3,
    node2: 1,
    node3: 2,
  });

  const [showSet1, setShowSet1] = useState(true);
  const [showSet2, setShowSet2] = useState(true);
  const [showSet3, setShowSet3] = useState(false);
  const [showSet4, setShowSet4] = useState(true);

  const [setpInfo1, setSetpInfo1] = useState({
    uuid: '95362219894467119',
    name: 'RabbitMQ',
    desc: '我是描述',
    version: 0,
    configuration: 1,
    way: 0,
  });
  const changeStep1 = (key, e) => {
    setSetpInfo1({ ...setpInfo1, [key]: e.target.value });
    if (key === 'configuration' && e.target.value === 2) {
      setShowSet2(true);
    }
  };
  const selectStep1 = (key, e) => {
    setSetpInfo1({ ...setpInfo1, [key]: e });
  };
  const [showBuid, setShowBuild] = useState<boolean>(false);
  const [setpInfo2, setSetpInfo2] = useState({
    persionNet: 0,
  });
  const [setpInfo2Diy, setSetpInfo2Diy] = useState({
    cpu: 0,
    memory: 0,
    type: 0,
    cup: 0,
    num: 0,
  });
  const changeStep2 = (key, e) => {
    setSetpInfo2({ ...setpInfo2, [key]: e.target.value });
  };
  const selectStep2 = (key, e) => {
    setSetpInfo2({ ...setpInfo2, [key]: e });
  };
  const changeStep2Diy = (key, e) => {
    setSetpInfo2Diy({ ...setpInfo2Diy, [key]: e.target.value });
  };
  const selectStep2Diy = (key, e) => {
    setSetpInfo2Diy({ ...setpInfo2Diy, [key]: e });
  };
  const [setpInfo3, setSetpInfo3] = useState({
    haproxy_balance_policy: 0,
    haproxy_web_port: '8100',
    haproxy_username: 'haproxy',
    haproxy_password: '',
    num_tcp_acceptors: 10,
    handshake_timeout: 10000,
    vm_memory_high_watermark: 0,
    vm_memory_high_watermark_paging_ratio: 0,
    disk_free_limit: 50000000,
    frame_max: 131072,
    channel_max: 0,
    heartbeat: 60,
    collect_statistics: 0,
    collect_statistics_interval: 5000,
    cluster_partition_handling: 0,
    hipe_compile: 0,
    cluster_keepalive_interval: 10000,
    background_gc_target_interval: 60000,
    background_gc_enabled: 0,
    reverse_dns_lookups: 0,
    tracing_user: 'guest',
    proxy_protocol: 0,
    switch_of_log_web_console: 0,
    username_of_log_web_console: 'admin',
    password_of_log_web_console: '',
  });
  const changeStep3 = (key, e) => {
    setSetpInfo3({ ...setpInfo3, [key]: e.target.value });
  };
  const selectStep3 = (key, e) => {
    setSetpInfo3({ ...setpInfo3, [key]: e });
  };
  const [read, setRead] = useState(false);
  return (
    <PageContainer>
      <CreateResource
        visible={showBuid}
        onClose={() => {
          setShowBuild(false);
        }}
      />
      <div className="bg_div_white font_12 margin_t_20 p_20">
        <div className="alert_blue  font_12">
          请填写实例基本信息，并选择应用版本。带 *
          标记的参数属于必填项，不带标记的属于可选项。请根据该版本在创建实例时需要的参数进行选择，应用产生的资源价格和服务价格随着参数变化而更新。
        </div>
        <div className={styles.content_div}>
          <div className={styles.step}>
            <div className={styles.title}>
              <div className={styles.info}>第1步: 基本设置</div>
              {showSet1 && (
                <div
                  className={`${styles.tag} color_green`}
                  onClick={() => {
                    setShowSet1(false);
                  }}
                >
                  <CaretUpOutlined />
                  收起配置
                </div>
              )}
              {!showSet1 && (
                <div
                  className={styles.tag}
                  onClick={() => {
                    setShowSet1(true);
                  }}
                >
                  <CaretDownOutlined />
                  展开配置
                </div>
              )}
            </div>
            {showSet1 && (
              <div className={styles.detail}>
                <div className={styles.item}>
                  <div className={styles.labe}>UUID</div>
                  <div className={styles.info}>{setpInfo1.uuid}</div>
                </div>
                <div className={styles.item}>
                  <div className={styles.labe} />
                  <div className={styles.info}>应用实例创建前，系统分配的全局唯一标识符</div>
                </div>
                <div className={styles.item}>
                  <div className={styles.labe}>名称</div>
                  <div className={styles.info}>
                    <Input
                      value={setpInfo1.name}
                      onChange={(e) => {
                        changeStep1('name', e);
                      }}
                    />
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.labe} />
                  <div className={styles.info}>RabbitMQ 服务名称</div>
                </div>
                <div className={styles.item} style={{ alignItems: 'flex-start' }}>
                  <div className={styles.labe}>描述</div>
                  <div className={styles.info} style={{ width: 400 }}>
                    <TextArea
                      rows={3}
                      value={setpInfo1.desc}
                      onChange={(e) => {
                        changeStep1('desc', e);
                      }}
                    />
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.labe} />
                  <div className={styles.info}>RabbitMQ 服务描述</div>
                </div>
                <div className={styles.item}>
                  <div className={`${styles.labe} key_require_after`}>版本</div>
                  <div className={styles.info}>
                    <Select
                      value={setpInfo1.version}
                      onChange={(e) => {
                        selectStep1('version', e);
                      }}
                    >
                      <Option value={0}>RabbitMQ 3.7.23 - QingCloud 1.4.1</Option>
                      <Option value={1}>RabbitMQ 3.6.10 - QingCloud 1.2.2</Option>
                      <Option value={2}>RabbitMQ 3.6.10 - QingCloud 1.2.1</Option>
                      <Option value={3}>RabbitMQ 3.6.10 - QingCloud 1.2.0</Option>
                    </Select>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.labe} />
                  <div className={styles.info}>选择想要部署的应用版本</div>
                </div>
                <div className={styles.item}>
                  <div className={styles.labe}>Resource Configuration</div>
                  <div className={styles.info}>
                    <Radio.Group
                      onChange={(e) => {
                        changeStep1('configuration', e);
                      }}
                      value={setpInfo1.configuration}
                    >
                      <Radio value={0}>测试环境</Radio>
                      <Radio value={1}>生产环境</Radio>
                      <Radio value={2}>自定义</Radio>
                    </Radio.Group>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.labe} />
                  <div className={styles.info}>
                    测试环境：1核1G磁盘节点 x 3 ，1核1G客户端节点 x 1，1核1G负载均衡节点 x
                    1；生产环境：2核4G超高性能型磁盘节点 x 3，1核1G客户端节点 x 1，2核2G负载均衡节点
                    x 2
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={`${styles.labe} key_require_after`}>计费方式</div>
                  <div className={styles.info}>
                    <Radio.Group
                      onChange={(e) => {
                        changeStep1('way', e);
                      }}
                      value={setpInfo1.way}
                    >
                      <Radio value={0}>小时</Radio>
                      <Radio value={1}>月</Radio>
                      <Radio value={2}>年</Radio>
                    </Radio.Group>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.labe} />
                  <div className={styles.info}>选择一种计费方式</div>
                </div>
              </div>
            )}
          </div>
          <div className={styles.step}>
            <div className={styles.title}>
              {setpInfo1.configuration === 2 && (
                <div className={styles.info}>第2步: 磁盘节点设置</div>
              )}
              {setpInfo1.configuration !== 2 && <div className={styles.info}>第2步: 网络设置</div>}

              {showSet2 && (
                <div
                  className={`${styles.tag} color_green`}
                  onClick={() => {
                    setShowSet2(false);
                  }}
                >
                  <CaretUpOutlined />
                  收起配置
                </div>
              )}
              {!showSet2 && (
                <div
                  className={styles.tag}
                  onClick={() => {
                    setShowSet2(true);
                  }}
                >
                  <CaretDownOutlined />
                  展开配置
                </div>
              )}
            </div>
            {setpInfo1.configuration !== 2 && showSet2 && (
              <div className={styles.detail}>
                <div className={styles.item}>
                  <div className={`${styles.labe} key_require_after`}>私有网络</div>
                  <div className={styles.info}>
                    <Select
                      value={setpInfo2.persionNet}
                      onChange={(e) => {
                        selectStep2('persionNet', e);
                      }}
                    >
                      <Option value={0} disabled>
                        没有私有网络，请先创建并加入 VPC 中
                      </Option>
                    </Select>
                    <div
                      className="dark_btn"
                      style={{ marginLeft: 10 }}
                      onClick={() => {
                        setShowBuild(true);
                      }}
                    >
                      创建
                    </div>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.labe} />
                  <div className={styles.info}>选择要加入的私有网络</div>
                </div>
              </div>
            )}
            {setpInfo1.configuration === 2 && showSet2 && (
              <div className={styles.detail}>
                <div className={styles.item}>
                  <div className={`${styles.labe} key_require_after`}>CPU</div>
                  <div className={styles.info}>
                    {setpInfo2Diy.type === 0 && (
                      <Radio.Group
                        onChange={(e) => {
                          changeStep2Diy('cpu', e);
                        }}
                        value={setpInfo2Diy.cpu}
                      >
                        <Radio value={0}>1 核</Radio>
                        <Radio value={1}>2 核</Radio>
                        <Radio value={2}>4 核</Radio>
                        <Radio value={3}>8 核</Radio>
                      </Radio.Group>
                    )}
                    {setpInfo2Diy.type === 1 && (
                      <Radio.Group
                        onChange={(e) => {
                          changeStep2Diy('cpu', e);
                        }}
                        value={setpInfo2Diy.cpu}
                      >
                        <Radio value={0}>2 核</Radio>
                        <Radio value={1}>4 核</Radio>
                        <Radio value={2}>8 核</Radio>
                        <Radio value={3}>16 核</Radio>
                        <Radio value={4}>32 核</Radio>
                      </Radio.Group>
                    )}
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.labe} />
                  <div className={styles.info}>每个节点的 CPU 数量</div>
                </div>
                <div className={styles.item}>
                  <div className={`${styles.labe} key_require_after`}>内存</div>
                  <div className={styles.info}>
                    {setpInfo2Diy.type === 0 && (
                      <Radio.Group
                        onChange={(e) => {
                          changeStep2Diy('memory', e);
                        }}
                        value={setpInfo2Diy.memory}
                      >
                        <Radio value={0}>2 G</Radio>
                        <Radio value={1}>4 G</Radio>
                        <Radio value={2}>8 G</Radio>
                      </Radio.Group>
                    )}
                    {setpInfo2Diy.type === 1 && (
                      <Radio.Group
                        onChange={(e) => {
                          changeStep2Diy('memory', e);
                        }}
                        value={setpInfo2Diy.memory}
                      >
                        <Radio value={0}>4 G</Radio>
                        <Radio value={1}>8 G</Radio>
                        <Radio value={2}>16 G</Radio>
                      </Radio.Group>
                    )}
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.labe} />
                  <div className={styles.info}>每个节点的内存</div>
                </div>
                <div className={styles.item}>
                  <div className={`${styles.labe} key_require_after`}>主机类型</div>
                  <div className={styles.info}>
                    <Radio.Group
                      onChange={(e) => {
                        changeStep2Diy('type', e);
                      }}
                      value={setpInfo2Diy.type}
                    >
                      <Radio value={0}>基础型</Radio>
                      <Radio value={1}>企业型 e1</Radio>
                    </Radio.Group>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.labe} />
                  <div className={styles.info}>节点实例类型，比如性能型与超高性能型。</div>
                </div>
                <div className={styles.item}>
                  <div className={`${styles.labe} key_require_after`}>存储容量</div>
                  <div className={styles.info}>
                    <Slider
                      className="bold_slider"
                      style={{ width: 300 }}
                      min={10}
                      max={1000}
                      onChange={(e) => {
                        selectStep2Diy('cup', e);
                      }}
                      value={typeof setpInfo2Diy.cup === 'number' ? setpInfo2Diy.cup : 10}
                    />
                    <InputNumber
                      min={10}
                      max={1000}
                      style={{ margin: '0 16px', width: 60 }}
                      value={setpInfo2Diy.cup}
                      onChange={(e) => {
                        selectStep2Diy('cup', e);
                      }}
                    />
                    <div style={{ fontSize: 16 }}>GB</div>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.labe} />
                  <div className={styles.info}>10GB - 1000GB, 每个实例的磁盘大小</div>
                </div>
                <div className={styles.item}>
                  <div className={`${styles.labe} key_require_after`}>节点个数</div>
                  <div className={styles.info}>
                    <InputNumber
                      min={1}
                      max={100}
                      style={{ width: 60 }}
                      value={setpInfo2Diy.num}
                      onChange={(e) => {
                        selectStep2Diy('num', e);
                      }}
                    />
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.labe} />
                  <div className={styles.info}>磁盘节点个数 (范围: 1 - 100)</div>
                </div>
              </div>
            )}
          </div>
          <div className={styles.step}>
            <div className={styles.title}>
              <div className={styles.info}>第3步: 服务环境参数设置</div>
              {showSet3 && (
                <div
                  className={`${styles.tag} color_green`}
                  onClick={() => {
                    setShowSet3(false);
                  }}
                >
                  <CaretUpOutlined />
                  收起配置
                </div>
              )}
              {!showSet3 && (
                <div
                  className={styles.tag}
                  onClick={() => {
                    setShowSet3(true);
                  }}
                >
                  <CaretDownOutlined />
                  展开配置
                </div>
              )}
            </div>

            {showSet3 && (
              <div className={styles.detail}>
                <div className={styles.item}>
                  <div className={`${styles.labe}`}>haproxy_balance_policy</div>
                  <div className={styles.info}>
                    <Select
                      style={{ minWidth: 150 }}
                      value={setpInfo3.haproxy_balance_policy}
                      onChange={(e) => {
                        selectStep3('haproxy_balance_policy', e);
                      }}
                    >
                      <Option value={0}>轮询</Option>
                      <Option value={1}>最小连接</Option>
                      <Option value={2}>静态权重</Option>
                      <Option value={3}>IP 哈希</Option>
                      <Option value={4}>uri 哈希</Option>
                      <Option value={5}>url_param 哈希</Option>
                    </Select>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.labe} />
                  <div className={styles.info}>
                    负载均衡策略(roundrobin:轮询, leastconn:最小连接, static-rr:静态权重, source:IP
                    哈希, uri:uri 哈希, url_param:url_param 哈希)
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={`${styles.labe}`}>haproxy_web_port</div>
                  <div className={styles.info}>
                    <InputNumber
                      style={{ width: 150 }}
                      value={setpInfo3.haproxy_web_port}
                      onChange={(e) => {
                        selectStep3('haproxy_web_port', e);
                      }}
                    />
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.labe} />
                  <div className={styles.info}>haproxy 监控界面端口</div>
                </div>
                <div className={styles.item}>
                  <div className={`${styles.labe}`}>haproxy_username</div>
                  <div className={styles.info}>
                    <Input
                      // style={{ width: 150 }}
                      value={setpInfo3.haproxy_username}
                      onChange={(e) => {
                        changeStep3('haproxy_username', e);
                      }}
                    />
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.labe} />
                  <div className={styles.info}>haproxy 监控界面用户名</div>
                </div>
                <div className={styles.item}>
                  <div className={`${styles.labe}`}>haproxy_password</div>
                  <div className={styles.info}>
                    <Input.Password
                      // style={{ width: 150 }}
                      value={setpInfo3.haproxy_password}
                      onChange={(e) => {
                        changeStep3('haproxy_password', e);
                      }}
                    />
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.labe} />
                  <div className={styles.info}>haproxy 监控界面密码</div>
                </div>
                <div className={styles.item}>
                  <div className={`${styles.labe}`}>num_tcp_acceptors</div>
                  <div className={styles.info}>
                    <InputNumber
                      // style={{ width: 150 }}
                      min={10}
                      max={200}
                      value={setpInfo3.num_tcp_acceptors}
                      onChange={(e) => {
                        selectStep3('num_tcp_acceptors', e);
                      }}
                    />
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.labe} />
                  <div className={styles.info}>
                    接受TCP侦听器连接的Erlang进程数 (范围: 10 - 200)
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={`${styles.labe}`}>handshake_timeout</div>
                  <div className={styles.info}>
                    <InputNumber
                      style={{ minWidth: 150 }}
                      min={5000}
                      value={setpInfo3.handshake_timeout}
                      onChange={(e) => {
                        selectStep3('handshake_timeout', e);
                      }}
                    />
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.labe} />
                  <div className={styles.info}>
                    AMQP 0-8/0-9/0-9-1 handshake (在 socket 连接和SSL 握手之后）的最大时间,
                    单位为毫秒 (范围: 5000 - )
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={`${styles.labe}`}>vm_memory_high_watermark</div>
                  <div className={styles.info}>
                    <Select
                      // style={{ minWidth: 150 }}
                      value={setpInfo3.vm_memory_high_watermark}
                      onChange={(e) => {
                        selectStep3('vm_memory_high_watermark', e);
                      }}
                    >
                      <Option value={0}>0.3</Option>
                      <Option value={1}>0.4</Option>
                      <Option value={2}>0.5</Option>
                      <Option value={3}>0.6</Option>
                      <Option value={4}>0.7</Option>
                    </Select>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.labe} />
                  <div className={styles.info}>流程控制触发的内存阀值</div>
                </div>
                <div className={styles.item}>
                  <div className={`${styles.labe}`}>disk_free_limit</div>
                  <div className={styles.info}>
                    <Select
                      // style={{ minWidth: 150 }}
                      value={setpInfo3.vm_memory_high_watermark_paging_ratio}
                      onChange={(e) => {
                        selectStep3('vm_memory_high_watermark_paging_ratio', e);
                      }}
                    >
                      <Option value={0}>0.3</Option>
                      <Option value={1}>0.4</Option>
                      <Option value={2}>0.5</Option>
                      <Option value={3}>0.6</Option>
                      <Option value={4}>0.7</Option>
                    </Select>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.labe} />
                  <div className={styles.info}>
                    高水位限制的分数，当达到阀值时，队列中消息会转移到磁盘上以释放内存
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={`${styles.labe}`}>disk_free_limit</div>
                  <div className={styles.info}>
                    <InputNumber
                      style={{ minWidth: 150 }}
                      // min={5000}
                      value={setpInfo3.disk_free_limit}
                      onChange={(e) => {
                        selectStep3('disk_free_limit', e);
                      }}
                    />
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.labe} />
                  <div className={styles.info}>
                    RabbitMQ存储数据分区的可用磁盘空间限制．当可用空间值低于阀值时，流程控制将被触发.默认情况下，可用磁盘空间必须超过50MB
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={`${styles.labe}`}>frame_max</div>
                  <div className={styles.info}>
                    <InputNumber
                      style={{ minWidth: 150 }}
                      min={0}
                      value={setpInfo3.frame_max}
                      onChange={(e) => {
                        selectStep3('frame_max', e);
                      }}
                    />
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.labe} />
                  <div className={styles.info}>
                    与客户端协商的允许最大frame大小.
                    设置为０表示无限制，但在某些QPid客户端会引发bug.
                    设置较大的值可以提高吞吐量;设置一个较小的值可能会提高延迟
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={`${styles.labe}`}>channel_max</div>
                  <div className={styles.info}>
                    <InputNumber
                      style={{ minWidth: 150 }}
                      min={0}
                      value={setpInfo3.channel_max}
                      onChange={(e) => {
                        selectStep3('channel_max', e);
                      }}
                    />
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.labe} />
                  <div className={styles.info}>
                    与客户端协商的允许最大chanel大小.
                    设置为０表示无限制．该数值越大，则broker使用的内存就越高
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={`${styles.labe}`}>heartbeat</div>
                  <div className={styles.info}>
                    <InputNumber
                      style={{ minWidth: 150 }}
                      min={0}
                      value={setpInfo3.heartbeat}
                      onChange={(e) => {
                        selectStep3('heartbeat', e);
                      }}
                    />
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.labe} />
                  <div className={styles.info}>
                    表示心跳延迟(单位为秒) ，服务器将在connection.tune frame中发送.如果设置为 0,
                    心跳将被禁用.
                    客户端可以不用遵循服务器的建议,禁用心跳可以在有大量连接的场景中提高性能，但可能会造成关闭了非活动连接的网络设备上的连接落下
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={`${styles.labe}`}>collect_statistics</div>
                  <div className={styles.info}>
                    <Select
                      // style={{ minWidth: 150 }}
                      value={setpInfo3.collect_statistics}
                      onChange={(e) => {
                        selectStep3('collect_statistics', e);
                      }}
                    >
                      <Option value={0}>none</Option>
                      <Option value={1}>coarse</Option>
                      <Option value={2}>fine</Option>
                    </Select>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.labe} />
                  <div className={styles.info}>统计收集模式。主要与管理插件相关</div>
                </div>
                <div className={styles.item}>
                  <div className={`${styles.labe}`}>collect_statistics_interval</div>
                  <div className={styles.info}>
                    <InputNumber
                      style={{ minWidth: 150 }}
                      min={0}
                      value={setpInfo3.collect_statistics_interval}
                      onChange={(e) => {
                        selectStep3('collect_statistics_interval', e);
                      }}
                    />
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.labe} />
                  <div className={styles.info}>
                    统计收集时间间隔(毫秒为单位)． 主要针对于 management plugin
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={`${styles.labe}`}>cluster_partition_handling</div>
                  <div className={styles.info}>
                    <Select
                      // style={{ minWidth: 150 }}
                      value={setpInfo3.cluster_partition_handling}
                      onChange={(e) => {
                        selectStep3('cluster_partition_handling', e);
                      }}
                    >
                      <Option value={0}>ignore</Option>
                      <Option value={1}>pause_minority</Option>
                      <Option value={2}>autoheal</Option>
                    </Select>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.labe} />
                  <div className={styles.info}>如何处理网络分区</div>
                </div>
                <div className={styles.item}>
                  <div className={`${styles.labe}`}>hipe_compile</div>
                  <div className={styles.info}>
                    <Select
                      // style={{ minWidth: 150 }}
                      value={setpInfo3.hipe_compile}
                      onChange={(e) => {
                        selectStep3('hipe_compile', e);
                      }}
                    >
                      <Option value={0}>false</Option>
                      <Option value={1}>true</Option>
                    </Select>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.labe} />
                  <div className={styles.info}>
                    将此选项设置为true,将会使用HiPE预编译部分RabbitMQ,Erlang的即时编译器.你可以看到花费几分钟延迟启动的成本，就可以带来20-50%
                    更好性能
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={`${styles.labe}`}>cluster_keepalive_interval</div>
                  <div className={styles.info}>
                    <InputNumber
                      style={{ minWidth: 150 }}
                      min={0}
                      value={setpInfo3.cluster_keepalive_interval}
                      onChange={(e) => {
                        selectStep3('cluster_keepalive_interval', e);
                      }}
                    />
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.labe} />
                  <div className={styles.info}>
                    节点向其它节点发送存活消息和频率(毫秒). 注意，这与 net_ticktime是不同的;
                    丢失存活消息不会引起节点掉线
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={`${styles.labe}`}>background_gc_target_interval</div>
                  <div className={styles.info}>
                    <InputNumber
                      style={{ minWidth: 150 }}
                      min={30000}
                      value={setpInfo3.background_gc_target_interval}
                      onChange={(e) => {
                        selectStep3('background_gc_target_interval', e);
                      }}
                    />
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.labe} />
                  <div className={styles.info}>
                    GC 实际间隔将根据执行操作所需的时间而有所不同 (范围: 30000 - )
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={`${styles.labe}`}>background_gc_enabled</div>
                  <div className={styles.info}>
                    <Select
                      // style={{ minWidth: 150 }}
                      value={setpInfo3.background_gc_enabled}
                      onChange={(e) => {
                        selectStep3('background_gc_enabled', e);
                      }}
                    >
                      <Option value={0}>false</Option>
                      <Option value={1}>true</Option>
                    </Select>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.labe} />
                  <div className={styles.info}>是否启用 GC，开启或许可以减少内存使用</div>
                </div>
                <div className={styles.item}>
                  <div className={`${styles.labe}`}>reverse_dns_lookups</div>
                  <div className={styles.info}>
                    <Select
                      // style={{ minWidth: 150 }}
                      value={setpInfo3.reverse_dns_lookups}
                      onChange={(e) => {
                        selectStep3('reverse_dns_lookups', e);
                      }}
                    >
                      <Option value={0}>false</Option>
                      <Option value={1}>true</Option>
                    </Select>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.labe} />
                  <div className={styles.info}>
                    设置为true,可让客户端在连接时让RabbitMQ 执行一个反向DNS查找, 然后通过
                    rabbitmqctl 和 管理插件来展现信息
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={`${styles.labe}`}>tracing_user</div>
                  <div className={styles.info}>
                    <Input
                      style={{ minWidth: 150 }}
                      value={setpInfo3.tracing_user}
                      onChange={(e) => {
                        changeStep3('tracing_user', e);
                      }}
                    />
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.labe} />
                  <div className={styles.info}>用于创建追踪队列的用户</div>
                </div>
                <div className={styles.item}>
                  <div className={`${styles.labe}`}>proxy_protocol</div>
                  <div className={styles.info}>
                    <Select
                      // style={{ minWidth: 150 }}
                      value={setpInfo3.proxy_protocol}
                      onChange={(e) => {
                        selectStep3('proxy_protocol', e);
                      }}
                    >
                      <Option value={0}>false</Option>
                      <Option value={1}>true</Option>
                    </Select>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.labe} />
                  <div className={styles.info}>
                    是否启用代理协议支持。一旦启用，客户端就不能直接连接到代理了。他们必须通过负载平衡器连接，此设置仅适用于AMQP客户端，其他协议类型的MQTT或STOMP有自己的设置来启用代理协议。有关更多信息，请参阅插件文档
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={`${styles.labe}`}>Switch of log web console</div>
                  <div className={styles.info}>
                    <Select
                      // style={{ minWidth: 150 }}
                      value={setpInfo3.switch_of_log_web_console}
                      onChange={(e) => {
                        selectStep3('switch_of_log_web_console', e);
                      }}
                    >
                      <Option value={0}>false</Option>
                      <Option value={1}>true</Option>
                    </Select>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.labe} />
                  <div className={styles.info}>文件管理控制台开关，true=开启，默认关闭</div>
                </div>
                <div className={styles.item}>
                  <div className={`${styles.labe}`}>Username of log web console</div>
                  <div className={styles.info}>
                    <Input
                      style={{ minWidth: 150 }}
                      value={setpInfo3.username_of_log_web_console}
                      onChange={(e) => {
                        changeStep3('username_of_log_web_console', e);
                      }}
                    />
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.labe} />
                  <div className={styles.info}>文件管理控制台登陆用户名，默认admin</div>
                </div>
                <div className={styles.item}>
                  <div className={`${styles.labe}`}>Password of log web console</div>
                  <div className={styles.info}>
                    <Input.Password
                      style={{ minWidth: 150 }}
                      value={setpInfo3['password_of_log_web_console']}
                      onChange={(e) => {
                        changeStep3('password_of_log_web_console', e);
                      }}
                    />
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.labe} />
                  <div className={styles.info}>文件管理控制台登陆密码，默认为空</div>
                </div>
              </div>
            )}
          </div>
          <div className={styles.step}>
            <div className={styles.title}>
              <div className={styles.info}>第4步: 用户协议</div>
              {showSet4 && (
                <div
                  className={`${styles.tag} color_green`}
                  onClick={() => {
                    setShowSet4(false);
                  }}
                >
                  <CaretUpOutlined />
                  收起配置
                </div>
              )}
              {!showSet4 && (
                <div
                  className={styles.tag}
                  onClick={() => {
                    setShowSet4(true);
                  }}
                >
                  <CaretDownOutlined />
                  展开配置
                </div>
              )}
            </div>
            {showSet4 && (
              <div className={styles.detail}>
                <div className={styles.item}>
                  <div className={`${styles.labe}`}>用户协议</div>
                  <div className={styles.info}>
                    <Checkbox
                      onChange={(e) => {
                        setRead(e.target.checked);
                      }}
                      checked={read}
                    >
                      请阅读
                      <a
                        href="https://pek3a.qingstor.com/appcenter-docs/terms/qingcloud-appcenter-user-terms.pdf"
                        target="_blank"
                      >
                        《青云QingCloud AppCenter 用户协议》
                      </a>{' '}
                      并确认接受该协议，以部署应用。
                    </Checkbox>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className={styles.price_wrapper}>
          <div className={styles.title_a}>费用预览</div>
          <div className={styles.price_details}>
            <ul className={styles.price_units}>
              <li className={styles.cur}>小时</li>
              <li>月</li>
              <li>年</li>
            </ul>
          </div>
          <div className="p_20">
            {' '}
            <div className={styles.price_res}>
              <div className={styles.title}>磁盘节点 3个</div>
              <div className={styles.info}>主机 企业型 e1 2核 4 G</div>
            </div>
            <div className={styles.price_res}>
              <div className={styles.title}>client 节点 1个</div>
              <div className={styles.info}>主机 基础型 1核 1 G</div>
            </div>
            <div className={styles.price_res}>
              <div className={styles.title}>负载均衡器 2个</div>
              <div className={styles.info}>主机 基础型 2核 2 G</div>
            </div>
            <div className={styles.total}>
              <div className={styles.total_price}>
                <div className={styles.label}>总价格</div>
                <div className={styles.info}>
                  <div className={styles.price}>12111.2442</div>{' '}
                  <div className={styles.unit}>¥ / 年</div>
                </div>
              </div>
              <div className={styles.tips}>(相比按需模式节省了：¥ 16308.82)</div>
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
    </PageContainer>
  );
};
export default connect(() => ({}))(CreateRabbitMq);
