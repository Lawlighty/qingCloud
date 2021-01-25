import React, { useState } from 'react';
import { connect, Dispatch } from 'umi';
import styles from './index.less';
import { Spin, Table } from 'antd';
import { LockOutlined } from '@ant-design/icons';

// const operations = <Button>Extra Action</Button>;
const LoginLog: React.FC<{}> = (props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [pagination, setPagination] = useState<object>({ current: 1, pageSize: 10 });
  const handleTableChange = (pagination, filters, sorter) => {
    fetch({
      sortField: sorter.field,
      sortOrder: sorter.order,
      pagination,
      ...filters,
    });
  };
  const [data, setData] = useState([
    {
      id: 1,
      dateTime: '2021-01-25 11:30:58',
      ip: '122.236.32.37',
      plat: 'QingCloud 控制台',
      equip: '无',
    },
    {
      id: 2,
      dateTime: '2021-01-24 10:51:31',
      ip: '122.236.32.37',
      plat: 'QingCloud 控制台',
      equip: '无',
    },
    {
      id: 3,
      dateTime: '2021-01-25 11:30:20',
      ip: '122.236.32.37',
      plat: 'QingCloud 控制台',
      equip: '无',
    },
    {
      id: 4,
      dateTime: '2021-01-25 06:30:58',
      ip: '122.236.32.37',
      plat: 'QingCloud 控制台',
      equip: '无',
    },
    {
      id: 5,
      dateTime: '2021-01-22 11:30:58',
      ip: '122.236.32.37',
      plat: 'QingCloud 控制台',
      equip: '无',
    },
  ]);

  const columns = [
    {
      title: '登录时间',
      dataIndex: 'dateTime',
      key: 'dateTime',
    },
    {
      title: '登录IP',
      dataIndex: 'ip',
      key: 'ip',
    },
    {
      title: '登录平台',
      dataIndex: 'plat',
      key: 'plat',
    },
    {
      title: '登录设备',
      dataIndex: 'equip',
      key: 'equip',
    },
  ];
  return (
    <div>
      <div className="alert_blue">
        <div className="flex">登录历史保留至多最近100次登录 QingCloud 的记录。。</div>
      </div>
      <div className="margin_t_20">
        <Spin tip="数据加载中..." spinning={loading}>
          <Table
            size="small"
            columns={columns}
            rowKey={(record) => record.id}
            dataSource={data}
            pagination={pagination}
            loading={loading}
            onChange={handleTableChange}
          />
        </Spin>
      </div>
    </div>
  );
};
export default connect(() => ({}))(LoginLog);
