import React, { useState } from 'react';
import { connect, Dispatch } from 'umi';
import styles from './index.less';
import { Divider } from 'antd';
import { Link } from 'umi';
import { LockOutlined } from '@ant-design/icons';

// const operations = <Button>Extra Action</Button>;
const SafeSet: React.FC<{}> = (props) => {
  // 登录密码
  const [loginPswStart, setLoginPswStart] = useState<boolean>(true);
  // 二次认证
  const [secCert, setSecCert] = useState<boolean>(false);
  // 周期更新密码
  const [updatePswCycle, setUpdatePswCycle] = useState<boolean>(false);
  // 登录失败通知
  const [loginFailNote, setLoginFailNote] = useState<boolean>(false);
  // 登录失败锁定
  const [loginFailLock, setLoginFailLock] = useState<boolean>(false);
  // 禁用会话保持
  const [disabledSessionKeep, setDisabledSessionKeep] = useState<boolean>(false);
  // 同时在线数量
  const [onlieNum, setOnlieNum] = useState<boolean>(false);
  // 账户锁
  const [accountLock, setAccountLock] = useState<boolean>(false);

  return (
    <div>
      <div className={styles.table_form}>
        <div className={styles.table_item}>
          <div className={styles.label}>登录密码</div>
          <div className={styles.content}>
            建议使用混合大、小写字母、符号及数字的高强度密码，并定期修改密码，以保护账户安全。
          </div>
          <div className={styles.option}>
            {loginPswStart && (
              <div className={styles.option_item}>
                <div className="color_green">
                  <LockOutlined />
                  已启用
                </div>
                <Divider type="vertical" />
                <div className="color_blue span_line cursor_p">修改</div>
              </div>
            )}
            {!loginPswStart && <div className="color_blue span_line cursor_p">启用</div>}
          </div>
        </div>
        <div className={styles.table_item}>
          <div className={styles.label}>二次认证</div>
          <div className={styles.content}>
            除密码之外，设置一个账号登录时需要二次验证的策略，以防密码丢失。
          </div>
          <div className={styles.option}>
            {secCert && (
              <div className={styles.option_item}>
                <div className="color_green">
                  <LockOutlined />
                  已启用
                </div>
                <Divider type="vertical" />
                <div className="color_blue span_line cursor_p">修改</div>
              </div>
            )}
            {!secCert && <div className="color_blue span_line cursor_p">启用</div>}
          </div>
        </div>
        <div className={styles.table_item}>
          <div className={styles.label}>周期更新密码</div>
          <div className={styles.content}>
            设置一个周期，当超过这个周期后，控制台密码必须重新设置，才能继续使用。
          </div>
          <div className={styles.option}>
            {updatePswCycle && (
              <div className={styles.option_item}>
                <div className="color_green">
                  <LockOutlined />
                  已启用
                </div>
                <Divider type="vertical" />
                <div className="color_blue span_line cursor_p">修改</div>
              </div>
            )}
            {!updatePswCycle && <div className="color_blue span_line cursor_p">启用</div>}
          </div>
        </div>
        <div className={styles.table_item}>
          <div className={styles.label}>登录失败通知</div>
          <div className={styles.content}>
            启用之后，账号多次尝试登录失败时，会发送通知短信到手机。
          </div>
          <div className={styles.option}>
            {loginFailNote && (
              <div className={styles.option_item}>
                <div className="color_green">
                  <LockOutlined />
                  已启用
                </div>
                <Divider type="vertical" />
                <div className="color_blue span_line cursor_p">修改</div>
              </div>
            )}
            {!loginFailNote && <div className="color_blue span_line cursor_p">启用</div>}
          </div>
        </div>
        <div className={styles.table_item}>
          <div className={styles.label}>登录失败锁定</div>
          <div className={styles.content}>
            启用之后，当账户多次登录失败，相同 IP 的终端访问控制台将锁定一段时间。
          </div>
          <div className={styles.option}>
            {loginFailLock && (
              <div className={styles.option_item}>
                <div className="color_green">
                  <LockOutlined />
                  已启用
                </div>
                <Divider type="vertical" />
                <div className="color_blue span_line cursor_p">修改</div>
              </div>
            )}
            {!loginFailLock && <div className="color_blue span_line cursor_p">启用</div>}
          </div>
        </div>
        <div className={styles.table_item}>
          <div className={styles.label}>禁用会话保持</div>
          <div className={styles.content}>
            启用之后，系统不记录登录状态，当用户上一次操作完成退出浏览器后，需要重新登录。
          </div>
          <div className={styles.option}>
            {disabledSessionKeep && (
              <div className={styles.option_item}>
                <div className="color_green">
                  <LockOutlined />
                  已启用
                </div>
                <Divider type="vertical" />
                <div className="color_blue span_line cursor_p">修改</div>
              </div>
            )}
            {!disabledSessionKeep && <div className="color_blue span_line cursor_p">启用</div>}
          </div>
        </div>
        <div className={styles.table_item}>
          <div className={styles.label}>同时在线数量</div>
          <div className={styles.content}>设置同时打开控制台的浏览器、终端最大数量。</div>
          <div className={styles.option}>
            {onlieNum && (
              <div className={styles.option_item}>
                <div className="color_green">
                  <LockOutlined />
                  已启用
                </div>
                <Divider type="vertical" />
                <div className="color_blue span_line cursor_p">修改</div>
              </div>
            )}
            {!onlieNum && <div className="color_blue span_line cursor_p">启用</div>}
          </div>
        </div>
        <div className={styles.table_item}>
          <div className={styles.label}>账户锁</div>
          <div className={styles.content}>启用后，将限制控制台的操作或者API执行写操作</div>
          <div className={styles.option}>
            {accountLock && (
              <div className={styles.option_item}>
                <div className="color_green">
                  <LockOutlined />
                  已启用
                </div>
                <Divider type="vertical" />
                <div className="color_blue span_line cursor_p">修改</div>
              </div>
            )}
            {!accountLock && <div className="color_blue span_line cursor_p">启用</div>}
          </div>
        </div>
      </div>
    </div>
  );
};
export default connect(() => ({}))(SafeSet);
