import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { connect, Dispatch } from 'umi';
import styles from './index.less';
import { Button } from 'antd';
import { Link } from 'umi';

const CreateRabbitMq: React.FC<{}> = (props) => {
  return (
    <PageContainer>
      <div className="bg_div_white font_12 margin_t_20 p_20">
        <div className="alert_blue  font_12">
          请填写实例基本信息，并选择应用版本。带 *
          标记的参数属于必填项，不带标记的属于可选项。请根据该版本在创建实例时需要的参数进行选择，应用产生的资源价格和服务价格随着参数变化而更新。
        </div>
        <div>aaaaadas da</div>
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
