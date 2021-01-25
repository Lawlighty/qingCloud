import React, { useState, useRef } from 'react';
import { Input, Button, Upload, message } from 'antd';
import styles from './index.less';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

const BasicInfo: React.FC<{}> = (props) => {
  const [userInfo, setUserInfo] = useState({
    id: 'usr-V1l8PRHR',
    email: '13616859570@163.com',
    username: '炼狱杏寿郎',
    avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
  });
  const [loading, setLoading] = useState(false);

  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const changeAccountInfo = (key: string, value: any) => {
    const new_account = Object.assign({}, userInfo);
    new_account[key] = value;
    setUserInfo(new_account);
  };
  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };
  const handleChange = (info) => {
    console.log(info);
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) => {
        setLoading(false);
        const new_account = Object.assign({}, userInfo);
        new_account['avatar'] = imageUrl;
        setUserInfo(new_account);
      });
    }
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('只能上传JPG/PNG格式文件!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('图片大小不能大于2M!');
    }
    return isJpgOrPng && isLt2M;
  };

  const getBase64NoBack = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64NoBack(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewVisible(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };
  return (
    <div className={styles.items}>
      <div className={styles.item}>
        <div className={styles.label}>用户ID</div>
        <div className={styles.info}>
          <Input
            disabled
            value={userInfo.id}
            onChange={(e) => {
              changeAccountInfo('id', e.target.value);
            }}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.label}>邮箱</div>
        <div className={styles.info}>
          <Input
            disabled
            value={userInfo.email}
            onChange={(e) => {
              changeAccountInfo('email', e.target.value);
            }}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.label}>用户名</div>
        <div className={styles.info}>
          <Input
            value={userInfo.username}
            onChange={(e) => {
              console.log('aa');
              changeAccountInfo('username', e.target.value);
            }}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.label} />
        <div className={styles.info}>
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            beforeUpload={beforeUpload}
            onChange={handleChange}
            onPreview={handlePreview}
          >
            {userInfo.avatar ? (
              <img src={userInfo.avatar} alt="avatar" style={{ width: '100%' }} />
            ) : (
              <div>
                {loading ? <LoadingOutlined /> : <PlusOutlined />}
                点击上传
              </div>
            )}
          </Upload>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.label} />
        <div className={styles.info}>
          <Button type="primary">修改</Button>
        </div>
      </div>
    </div>
  );
};
export default BasicInfo;
