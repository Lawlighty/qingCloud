import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { connect, Dispatch } from 'umi';
import styles from './index.less';
import { Tabs, Button, notification, Card, Tooltip, Input } from 'antd';
import { Link } from 'umi';
import { ReadFilled } from '@ant-design/icons';
import { QuestionCircleFilled, SearchOutlined } from '@ant-design/icons';
const { Meta } = Card;
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
  // ip定位资源
  const onPressEnter = (e) => {
    console.log('输入的ip', e);
    console.log('输入的ip', e.target.value);
  };
  return (
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
                <div className={styles.alert_info}>
                  你离开始使用仅差一步：立即完成认证，即可享受相应数量的资源配额和测试费。
                  <a href="/account/profile/advanced/" data-permalink="">
                    前往认证
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* // 右侧 */}
          <div className={styles.overview_right}>
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
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
export default connect(() => ({}))(Overview);
