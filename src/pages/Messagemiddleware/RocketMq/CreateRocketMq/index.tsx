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
const CreateRocketMq: React.FC<{}> = (props) => {
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
    name: 'RocketMQ',
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
    copy_mode: 0,
    switch_of_log_web_console: 0,
    file_look_username: 'admin',
    file_look_password: '123',
    mq_name: 'DefaultCluster',
    save_time: 72,
    delete_time: 4,
    keep_way: 1,
    console_username: 'admin',
    console_password: '123',
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
                      <Option value={0}>RocketMQ 4.7.1 - QingCloud 1.1.0</Option>
                      <Option value={1}>RocketMQ 4.3.1 - QingCloud 1.0.0</Option>
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
                  <div className={`${styles.labe} key_require_after`}>Broker 主从复制模式</div>
                  <div className={styles.info}>
                    <Select
                      // style={{ minWidth: 150 }}
                      value={setpInfo3.copy_mode}
                      onChange={(e) => {
                        selectStep3('copy_mode', e);
                      }}
                    >
                      <Option value={0}>ASYNC</Option>
                      <Option value={1}>SYNC</Option>
                    </Select>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.labe} />
                  <div className={styles.info}>
                    SYNC（同步模式）：每条消息数据复制到所有从节点才会通知客户端；ASYNC（异步模式）：每条消息数据在主节点处理完成就立即通知给客户端
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={`${styles.labe}`}>开启文件查看</div>
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
                  <div className={`${styles.labe}`}>文件查看用户名</div>
                  <div className={styles.info}>
                    <Input
                      style={{ minWidth: 150 }}
                      value={setpInfo3.file_look_username}
                      onChange={(e) => {
                        changeStep3('file_look_username', e);
                      }}
                    />
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.labe} />
                  <div className={styles.info}>
                    文件管理控制台登陆用户名，默认admin，可以包含小写字母、数字、半角句点（.）和短横线（-)，不会重启
                    broker
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={`${styles.labe}`}>文件查看密码</div>
                  <div className={styles.info}>
                    <Input.Password
                      style={{ minWidth: 150 }}
                      value={setpInfo3.file_look_password}
                      onChange={(e) => {
                        changeStep3('file_look_password', e);
                      }}
                    />
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.labe} />
                  <div className={styles.info}>
                    文件管理控制台登陆密码，可由数字、字母、下划线组成，默认为空表示不需要密码，可以直接访问，不会重启
                    broker
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={`${styles.labe}`}>MQ 集群名称</div>
                  <div className={styles.info}>
                    <Input
                      style={{ minWidth: 150 }}
                      value={setpInfo3.mq_name}
                      onChange={(e) => {
                        changeStep3('mq_name', e);
                      }}
                    />
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.labe} />
                  <div className={styles.info}>RocketMQ 集群名称</div>
                </div>
                <div className={styles.item}>
                  <div className={`${styles.labe}`}>数据文件保存时长</div>
                  <div className={styles.info}>
                    <InputNumber
                      style={{ minWidth: 150 }}
                      min={1}
                      value={setpInfo3.save_time}
                      onChange={(e) => {
                        selectStep3('save_time', e);
                      }}
                    />
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.labe} />
                  <div className={styles.info}>
                    数据文件（commitlog）在服务器上可保存的最长时间，以小时数表示 (范围: 1 - )
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={`${styles.labe}`}>过期数据文件删除时间</div>
                  <div className={styles.info}>
                    <InputNumber
                      style={{ minWidth: 150 }}
                      min={0}
                      max={23}
                      value={setpInfo3.delete_time}
                      onChange={(e) => {
                        selectStep3('delete_time', e);
                      }}
                    />
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.labe} />
                  <div className={styles.info}>
                    清除过期数据文件（commitlog）的时间，以 24 小时制（整点）表示 (范围: 0 - 23)
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.labe} />
                  <div className={styles.info}>
                    数据文件（commitlog）在服务器上可保存的最长时间，以小时数表示 (范围: 1 - )
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={`${styles.labe}`}>数据持久化方式</div>
                  <div className={styles.info}>
                    <Select
                      // style={{ minWidth: 150 }}
                      value={setpInfo3.keep_way}
                      onChange={(e) => {
                        selectStep3('keep_way', e);
                      }}
                    >
                      <Option value={0}>ASYNC_FLUSH</Option>
                      <Option value={1}>SYNC_FLUSH</Option>
                    </Select>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.labe} />
                  <div className={styles.info}>
                    消息数据持久化（刷盘）模式，SYNC（同步模式）：每条消息成功写入磁盘后才通知客户端；ASYNC（异步模式）：消息批量写到磁盘，可以有更好的性能
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={`${styles.labe}`}>RocketMQ 控制台用户名</div>
                  <div className={styles.info}>
                    <Input
                      style={{ minWidth: 150 }}
                      value={setpInfo3.console_username}
                      onChange={(e) => {
                        changeStep3('console_username', e);
                      }}
                    />
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.labe} />
                  <div className={styles.info}>网页控制台用户名，默认为 admin 拥有管理者权限</div>
                </div>
                <div className={styles.item}>
                  <div className={`${styles.labe}`}>RocketMQ 控制台密码</div>
                  <div className={styles.info}>
                    <Input.Password
                      style={{ minWidth: 150 }}
                      value={setpInfo3['console_password']}
                      onChange={(e) => {
                        changeStep3('console_password', e);
                      }}
                    />
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.labe} />
                  <div className={styles.info}>
                    网页控制台登陆密码，默认为 password 当且仅当密码不为空时开启密码登陆
                  </div>
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
              <div className={styles.title}>名称服务器 2个</div>
              <div className={styles.info}>主机 企业型 e1 2核 4 G</div>
            </div>
            <div className={styles.price_res}>
              <div className={styles.title}>Broker 3个 副本数量1</div>
              <div className={styles.info}>主机 企业型 e1 4核 8 G</div>
            </div>
            <div className={styles.price_res}>
              <div className={styles.title}>网页控制台 1个</div>
              <div className={styles.info}>主机 企业型 e1 2核</div>
            </div>
            <div className={styles.price_res}>
              <div className={styles.title}>客户端 1个</div>
              <div className={styles.info}>主机 基础型 1核 1 G</div>
            </div>
            <div className={styles.total}>
              <div className={styles.total_price}>
                <div className={styles.label}>总价格</div>
                <div className={styles.info}>
                  <div className={styles.price}>11.8112</div>{' '}
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
export default connect(() => ({}))(CreateRocketMq);
