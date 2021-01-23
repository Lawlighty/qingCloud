import React, { useState } from 'react';
import { Table, Tooltip } from 'antd';
import styles from './index.less';

const ChoseMapping: React.FC<{}> = (props) => {
  // 映像提供方
  const [mappProvider, setMappProvider] = React.useState(0);
  // 系统
  const [system, setSystem] = React.useState(0);
  // 市场
  const [bazrra, setBazrra] = React.useState('all');
  const bazrraList = [
    { value: 'all', name: '全部' },
    { value: 'database', name: '数据库与中间件' },
    { value: 'bigdata', name: '大数据' },
    { value: 'container', name: '容器' },
    { value: 'develop', name: '研发与运维' },
    { value: 'shield', name: '安全管理' },
    { value: 'enterprise', name: '企业管理' },
    { value: 'iot', name: '物联网 (IoT)' },
    { value: 'ai', name: '人工智能 (AI)' },
    { value: 'blockchain', name: '区块链 (BlockChain)' },
    { value: 'cdn', name: 'CDN 与视频' },
    { value: 'growth', name: '行业增值' },
  ];
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    position: ['topRight'],
  });
  const [loading, setLoading] = useState(false);
  const [rowId, setRowId] = useState(null);
  const handleTableChange = (pagination, filters, sorter) => {};
  const onClickRow = (record) => {
    return {
      onClick: () => {
        setRowId(record.id);
      },
    };
  };
  const setRowClassName = (record) => {
    return record.id === rowId ? 'clickRowStyl' : '';
  };

  const columns = [
    {
      title: '映像',
      dataIndex: 'name',
      key: 'name',
      render: (text) => {
        return <div style={{ fontWeight: 'bold', maxWidth: 300 }}>{text}</div>;
      },
    },
    {
      title: 'ID',
      key: 'id',
      dataIndex: 'id',
      render: (text) => {
        return <div>ID: {text}</div>;
      },
    },
    {
      title: 'ip',
      key: 'ip',
      dataIndex: 'ip',
      render: (text) => {
        return <div style={{ fontWeight: 'bold', maxWidth: 300, color: '#000' }}>{text}</div>;
      },
    },
  ];
  const data = [
    {
      id: 'centos77x64a',
      name: 'CentOS 7.7 64bit  ',
      ip: 'IPv6',
    },
    {
      id: 'centos77x64b',
      name: 'Ubuntu Server 18.04.1 LTS 64bit  ',
      ip: 'IPv6',
    },
    {
      id: 'centos77x64c',
      name: 'Windows Server 2012 R2 简体中文 标准版 64位  ',
      ip: '',
    },
    {
      id: 'centos77x64d',
      name: 'CentOS 7.7 64bit  ',
      ip: 'IPv6',
    },
    {
      id: 'centos77x64e',
      name: 'Windows Server 2012 R2 简体中文 标准版 64位  ',
      ip: '',
    },
    {
      id: 'centos77x64f',
      name: 'CentOS 7.7 64bit  ',
      ip: 'IPv6',
    },
  ];
  return (
    <div>
      <div className={styles.step_inner}>
        <div className={styles.provider}>
          <div>映像提供方：</div>
          <div
            className={`${styles.provider_filter} ${mappProvider === 0 ? styles.active : ''}`}
            onClick={() => {
              if (mappProvider !== 0) {
                setMappProvider(0);
              }
            }}
          >
            常用
          </div>
          <div
            className={`${styles.provider_filter} ${mappProvider === 1 ? styles.active : ''}`}
            onClick={() => {
              if (mappProvider !== 1) {
                setMappProvider(1);
              }
            }}
          >
            系统
          </div>
          <div
            className={`${styles.provider_filter} ${mappProvider === 2 ? styles.active : ''}`}
            onClick={() => {
              if (mappProvider !== 2) {
                setMappProvider(2);
              }
            }}
          >
            自有
          </div>
          <div
            className={`${styles.provider_filter} ${mappProvider === 3 ? styles.active : ''}`}
            onClick={() => {
              if (mappProvider !== 3) {
                setMappProvider(3);
              }
            }}
          >
            共享
          </div>
          <div
            className={`${styles.provider_filter} ${mappProvider === 4 ? styles.active : ''}`}
            onClick={() => {
              if (mappProvider !== 4) {
                setMappProvider(4);
              }
            }}
          >
            市场
          </div>
        </div>
        {mappProvider === 1 && (
          <div className={styles.provider}>
            <div>操作系统：</div>
            <Tooltip placement="top" title="CentOS">
              <div
                className={`${styles.provider_filter} ${system === 0 ? styles.active : ''}`}
                onClick={() => {
                  if (system !== 0) {
                    setSystem(0);
                  }
                }}
              >
                <span className={`${styles.os_family} ${styles.os_cent}`} />
              </div>
            </Tooltip>
            <Tooltip placement="top" title="Debian">
              <div
                className={`${styles.provider_filter} ${system === 1 ? styles.active : ''}`}
                onClick={() => {
                  if (system !== 1) {
                    setSystem(1);
                  }
                }}
              >
                <span className={`${styles.os_family} ${styles.os_debian}`} />
              </div>
            </Tooltip>
            <Tooltip placement="top" title="Ubuntu">
              <div
                className={`${styles.provider_filter} ${system === 2 ? styles.active : ''}`}
                onClick={() => {
                  if (system !== 2) {
                    setSystem(2);
                  }
                }}
              >
                <span className={`${styles.os_family} ${styles.os_ubuntu}`} />
              </div>
            </Tooltip>
            <Tooltip placement="top" title="Fedora">
              <div
                className={`${styles.provider_filter} ${system === 3 ? styles.active : ''}`}
                onClick={() => {
                  if (system !== 3) {
                    setSystem(3);
                  }
                }}
              >
                <span className={`${styles.os_family} ${styles.os_fedora}`} />
              </div>
            </Tooltip>
            <Tooltip placement="top" title="SUSE">
              <div
                className={`${styles.provider_filter} ${system === 4 ? styles.active : ''}`}
                onClick={() => {
                  if (system !== 4) {
                    setSystem(4);
                  }
                }}
              >
                <span className={`${styles.os_family} ${styles.os_suse}`} />
              </div>
            </Tooltip>
            <Tooltip placement="top" title="Arch">
              <div
                className={`${styles.provider_filter} ${system === 5 ? styles.active : ''}`}
                onClick={() => {
                  if (system !== 5) {
                    setSystem(5);
                  }
                }}
              >
                <span className={`${styles.os_family} ${styles.os_arch}`} />
              </div>
            </Tooltip>
            <Tooltip placement="top" title="Windows">
              <div
                className={`${styles.provider_filter} ${system === 6 ? styles.active : ''}`}
                onClick={() => {
                  if (system !== 6) {
                    setSystem(6);
                  }
                }}
              >
                <span className={`${styles.os_family} ${styles.os_windows}`} />
              </div>
            </Tooltip>
            <Tooltip placement="top" title="CoreOS">
              <div
                className={`${styles.provider_filter} ${system === 7 ? styles.active : ''}`}
                onClick={() => {
                  if (system !== 7) {
                    setSystem(7);
                  }
                }}
              >
                <span className={`${styles.os_family} ${styles.os_coreOS}`} />
              </div>
            </Tooltip>

            <Tooltip placement="top" title="FreeBSD">
              <div
                className={`${styles.provider_filter} ${system === 8 ? styles.active : ''}`}
                onClick={() => {
                  if (system !== 8) {
                    setSystem(8);
                  }
                }}
              >
                <span className={`${styles.os_family} ${styles.os_freeBSD}`} />
              </div>
            </Tooltip>
            <Tooltip placement="top" title="Clear Linux">
              <div
                className={`${styles.provider_filter} ${system === 9 ? styles.active : ''}`}
                onClick={() => {
                  if (system !== 9) {
                    setSystem(9);
                  }
                }}
              >
                <span className={`${styles.os_family} ${styles.os_clearLinux}`} />
              </div>
            </Tooltip>
          </div>
        )}
        {mappProvider === 4 && (
          <div className={styles.provider}>
            <div>类别：</div>
            {bazrraList.map((item) => (
              <div
                className={`${styles.provider_filter} ${
                  bazrra === item.value ? styles.active : ''
                }`}
                onClick={() => {
                  if (bazrra !== item.value) {
                    setBazrra(item.value);
                  }
                }}
              >
                {item.name}
              </div>
            ))}
          </div>
        )}
        <div className="my_build_table">
          <Table
            columns={columns}
            rowKey={(record) => record.id}
            dataSource={data}
            pagination={pagination}
            loading={loading}
            onChange={handleTableChange}
            onRow={onClickRow}
            rowClassName={setRowClassName}
            showHeader={false}
            size="small"
          />
        </div>
      </div>
    </div>
  );
};

export default ChoseMapping;
