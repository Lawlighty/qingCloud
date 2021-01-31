import React, { useState } from 'react';
import { KeepAlive } from 'react-activation';
import { PageContainer } from '@ant-design/pro-layout';
import { connect, Dispatch } from 'umi';
import styles from './index.less';
import { Tabs, Button, notification, Card, Tooltip, Input, Progress } from 'antd';
import { Link } from 'umi';
import { ReadFilled } from '@ant-design/icons';
import { QuestionCircleFilled, SearchOutlined } from '@ant-design/icons';
const { Meta } = Card;
interface resourceType {
  name: string;
  percent: number;
  tips: string;
}
const Overview: React.FC<{}> = (props) => {
  const tips = () => {
    return (
      <div className="font_12_impor">
        <b style={{ fontWeight: 700 }}>计算基准时间：2020年12月22日 22:45 - 2021年1月21日 22:45 </b>
        <br />
        按需计费资源消费预估包含账户内按需计费资源。 <br />
        预留合约/包年包月资源消费预估包含账户合约、包月、包年、自动续费资源产生的续费预估。
      </div>
    );
  };
  const tipsTick = () => {
    return <div className="font_12_impor">各优惠券使用详情请前往优惠券列表查看</div>;
  };
  // ip定位资源
  const onPressEnter = (e) => {
    console.log('输入的ip', e);
    console.log('输入的ip', e.target.value);
  };
  // 资源配额使用情况
  // 计算
  const calDemo = [
    {
      name: '基础型主机 (个)',
      percent: 10,
      tips: '1/10 个',
    },
    {
      name: '基础型主机 (个)',
      percent: 20,
      tips: '1/10 个',
    },
    {
      name: '基础型主机 (个)',
      percent: 30,
      tips: '1/10 个',
    },
    {
      name: '基础型主机 (个)',
      percent: 40,
      tips: '1/10 个',
    },
    {
      name: '基础型主机 (个)',
      percent: 50,
      tips: '1/10 个',
    },
    {
      name: '基础型主机 (个)',
      percent: 60,
      tips: '1/10 个',
    },
  ];
  const [cal, setCal] = useState<resourceType[]>(calDemo);
  // const [cal, setCal] = useState<resourceType[]>(calDemo);
  return (
    <KeepAlive name="/overview" path="总览" saveScrollPosition="screen">
      <PageContainer>
        <div className="min_w_800 font_12">
          <div className="flex_start">
            <div className={styles.overview_main}>
              <div className={styles.overview_estimated}>
                <div style={{ paddingTop: 5 }}>
                  <div className={styles.sub}>
                    <div className={styles.sub_title}>
                      <div className={styles.sub_title_main}>30天 消费预估</div>

                      <Tooltip title={tips}>
                        <QuestionCircleFilled />
                      </Tooltip>
                    </div>
                    <div className={styles.sub_accounts}>
                      此处是以您目前资源对未来可能产生扣费的预估，会随着您资源删除和购买情况随时变化，具体扣费以实际为准，包括非独立计费子账户。
                    </div>
                  </div>
                  <div className={styles.sub}>
                    <div className={styles.sub_title}>
                      <div className={styles.sub_title_main}>按需计费资源 </div>

                      <div className="color_green">¥0.00</div>
                    </div>
                    <div className={styles.sub_accounts}>没有弹性消费类资源</div>
                  </div>
                  <div>
                    <div className={styles.sub_title}>
                      <div className={styles.sub_title_main}>预留合约/包年包月</div>

                      <div className="color_green">¥0.00</div>
                    </div>
                    <div className={styles.sub_accounts}>
                      没有30天内待自动续费的预留合约/包年包月资源
                    </div>
                  </div>
                </div>
              </div>
              {/* 通过IP快速定位资源 */}
              <div className={styles.overview_ips_inner}>
                <Input
                  className="ip_input"
                  allowClear
                  size="large"
                  onPressEnter={onPressEnter}
                  placeholder="通过IP快速定位资源"
                  prefix={<SearchOutlined className="" />}
                />
              </div>
              {/* 资源配额使用情况 */}
              {/* <div className={styles.overview_estimated}></div> */}
              <div className={styles.overview_quotas}>
                <div className={styles.quotas_title}>
                  <div>资源配额使用情况</div>
                  {/* tips */}
                  <div className={styles.alert_info}>
                    你离开始使用仅差一步：立即完成认证，即可享受相应数量的资源配额和测试费。
                    <a href="/account/profile/advanced/" data-permalink="">
                      前往认证
                    </a>
                  </div>
                </div>
                <div className="flex_start">
                  <div className="flex_1 margin_r_20">
                    <div className={styles.quota_inner}>
                      <div className={styles.quota_title}>计算</div>
                      {cal.map((item) => (
                        <div className={styles.quota_usage}>
                          <div className={styles.quota_usage_name}>{item.name}</div>
                          <Tooltip title={item.tips}>
                            <Progress percent={item.percent} showInfo={false} />
                          </Tooltip>
                        </div>
                      ))}
                    </div>
                    <div className={styles.quota_inner}>
                      <div className={styles.quota_title}>存储</div>
                      {cal.map((item) => (
                        <div className={styles.quota_usage}>
                          <div className={styles.quota_usage_name}>{item.name}</div>
                          <Tooltip title={item.tips}>
                            <Progress percent={item.percent} showInfo={false} />
                          </Tooltip>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex_1 margin_r_20">
                    <div className={styles.quota_inner}>
                      <div className={styles.quota_title}>网络与 CDN</div>
                      {cal.map((item) => (
                        <div className={styles.quota_usage}>
                          <div className={styles.quota_usage_name}>{item.name}</div>
                          <Tooltip title={item.tips}>
                            <Progress percent={item.percent} showInfo={false} />
                          </Tooltip>
                        </div>
                      ))}
                    </div>
                    <div className={styles.quota_inner}>
                      <div className={styles.quota_title}>安全</div>
                      {cal.map((item) => (
                        <div className={styles.quota_usage}>
                          <div className={styles.quota_usage_name}>{item.name}</div>
                          <Tooltip title={item.tips}>
                            <Progress percent={item.percent} showInfo={false} />
                          </Tooltip>
                        </div>
                      ))}
                    </div>
                    <div className={styles.quota_inner}>
                      <div className={styles.quota_title}>容器</div>
                      {cal.map((item) => (
                        <div className={styles.quota_usage}>
                          <div className={styles.quota_usage_name}>{item.name}</div>
                          <Tooltip title={item.tips}>
                            <Progress percent={item.percent} showInfo={false} />
                          </Tooltip>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* // 右侧 */}
            <div className={styles.overview_right}>
              {/* 广告 */}
              <div className="overview-promotions">
                <a
                  href="https://www.qingcloud.com/promotion202010/#security"
                  target="_blank"
                  zh-cn=""
                >
                  <img
                    className="width_100_percent"
                    src="https://s3.qingcloud.com/files/2020/08/31171608194518_.pic_.png"
                  />
                </a>
              </div>

              {/* 账户信息 */}
              <div className={styles.overview_consumptions}>
                <div className={styles.overview_consumptions_inner}>
                  <div className={styles.overview_card_title}>
                    <div className="flex_1">Hi, 13616859570</div>

                    <a className={styles.btn_link} href="/finance/statistic/">
                      消费统计
                    </a>
                  </div>
                  <div className={styles.balance}>
                    <div className={styles.balance_inner}>
                      <div className={styles.balance_title}>账户余额</div>
                      <div className={styles.balance_total}>
                        <span className={styles.currency}>¥</span>&nbsp;0.00
                      </div>
                      <div className={styles.balance_coupons}>
                        <div className={styles.items_title}>优惠券</div>
                        <Tooltip title={tipsTick}>
                          <a className={styles.items_value} href="/finance/coupons/">
                            ¥2.00
                          </a>
                        </Tooltip>
                      </div>
                      <div className={styles.balance_coupons}>
                        <div className={styles.items_title}>预计支持</div>
                        <div className={` ${styles.items_value} ${styles.estimated_value}`}>
                          <div className={styles.estimated_inner}>
                            <span className={styles.estimated_inner_success}>当前账户无预估</span>
                          </div>
                        </div>
                      </div>
                      <div className={styles.balance_charge}>
                        <a className={styles.btn_primary} href="/finance/wallet/" data-permalink="">
                          立即充值
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 最新产品动态 */}
              <div className={styles.overview_consumptions}>
                <div className={styles.overview_consumptions_inner}>
                  <div className={styles.overview_card_title}>
                    <div className="flex_1">最新产品动态</div>

                    <a className={styles.btn_link} href="/finance/statistic/">
                      查看全部
                    </a>
                  </div>
                  {[1, 2, 3, 4].map((item) => (
                    <div className={styles.item}>
                      <h6 className={styles.text_ellipsis}>
                        <a
                          href="https://log.qingcloud.com/archives/6165"
                          target="_blank"
                          title="AppCenter支持新计费模式&amp;新增主机类型等新功能上线"
                        >
                          AppCenter支持新计费模式&amp;新增主机类型等新功能上线
                        </a>
                      </h6>
                      <span className={styles.time}>20191030</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 广告 */}
              <div className="margin_lr_5">
                <a
                  href="https://www.qingcloud.com/promotion202010/#security"
                  target="_blank"
                  zh-cn=""
                >
                  <img
                    className="width_100_percent"
                    src="https://s3.qingcloud.com/files/2020/08/banner-thumbnail-双十一-2.jpg"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </KeepAlive>
  );
};
export default connect(() => ({}))(Overview);
