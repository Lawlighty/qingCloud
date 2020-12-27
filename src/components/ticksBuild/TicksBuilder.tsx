import React, { useState } from 'react';
import { Modal, Select, Input, Upload } from 'antd';
import styles from './index.less';
import { PlusOutlined } from '@ant-design/icons';

const { Option } = Select;
const { TextArea } = Input;
interface formType {
  receiver: number;
  title: string;
  desc?: string;
  rele_id?: string;
  accessory?: string[];
}
const TicksBuilder: React.FC<{}> = (props) => {
  const { visible, onCancel, subTicks } = props;
  const [styleTop, setStyleTop] = useState<number>(100);
  const [styleLeft, setStyleLeft] = useState<number>(0);
  const [destroyOnClose, setDestroyOnClose] = useState<boolean>(true);

  const [form, setValues] = useState<formType>({
    receiver: 1,
    title: '',
    desc: '',
    rele_id: '',
    accessory: [],
  });
  // 附件
  const [previewVisible, setPreviewVisible] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<string>('');
  const [previewTitle, setPreviewTitle] = useState<string>('');
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-2',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-3',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-4',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-xxx',
      percent: 50,
      name: 'image.png',
      status: 'uploading',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-5',
      name: 'image.png',
      status: 'error',
    },
  ]);

  // 计算是否超出屏幕;超出后
  const inWindow = (left: number, top: number, startPosX: number, startPosY: number) => {
    const H = document.body.clientHeight;
    const W = document.body.clientWidth;
    if (
      (left < 100 && startPosX > left) ||
      (left > W - 100 && startPosX < left) ||
      (top < 20 && startPosY > top) ||
      (top > H - 20 && startPosY < top)
    ) {
      document.body.onmousemove = null;
      document.body.onmouseup = null;
      return 0;
    }
    return 1;
  };
  const onMouseDown = (e: any) => {
    console.log('onMouseDown');
    e.preventDefault(); // 记录初始移动的鼠标位置
    const startPosX = e.clientX;
    const startPosY = e.clientY;
    document.body.onmousemove = (e) => {
      const left = e.clientX - startPosX + styleLeft;
      const top = e.clientY - startPosY + styleTop;
      if (inWindow(e.clientX, e.clientY, startPosX, startPosY)) {
        console.log('每超出');
        setStyleTop(top);
        setStyleLeft(left);
      }
    }; // 鼠标放开时去掉移动事件
    document.body.onmouseup = function () {
      document.body.onmousemove = null;
    };
  };

  const selectChange = (e: any, name: string) => {
    setValues({
      ...form,
      [name]: e,
    });
  };
  const handleChange = (e: any, name: string) => {
    setValues({
      ...form,
      [name]: e.target.value,
    });
  };

  // 文件上传
  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };
  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };
  const fileHandleChange = ({ fileList }) => setFileList(fileList);
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <Modal
      maskClosable={false}
      destroyOnClose={destroyOnClose}
      visible={visible}
      onCancel={() => {
        onCancel(false);
      }}
      onOk={() => {
        const toForm = form;
        toForm.accessory = fileList;
        console.log('toForm', toForm);

        subTicks();
      }}
      style={{ left: styleLeft, top: styleTop }}
      width={700}
      okText="提交"
      cancelText="取消"
      title={
        <div style={{ width: '100%', cursor: 'move', fontWeight: '600' }} onMouseDown={onMouseDown}>
          创建工单
        </div>
      }
      className={styles.cc}
    >
      <div className={styles.form}>
        <p className={styles.tip}>
          创建工单前您可以先去文档中的{' '}
          <a href="https://docs.qingcloud.com/product/faq/" target="blank">
            「常见问题」
          </a>{' '}
          看看。
        </p>
        <h4 className={styles.content_title}>内容</h4>
        <div className={styles.content}>
          <div className={styles.content_inner}>
            <div className={styles.content_row}>
              <div className={styles.label}>接收者</div>
              <div className={styles.controls}>
                <Select
                  value={form.receiver}
                  style={{ width: 200 }}
                  onChange={(e) => {
                    selectChange(e, 'receiver');
                  }}
                >
                  <Option value={1}>QingCloud</Option>
                  <Option value={2}>AppCenter</Option>
                </Select>
              </div>
            </div>
            <div className={styles.content_row}>
              <div className={styles.label}>标题</div>
              <div className={styles.controls}>
                <Input
                  style={{ width: '400px' }}
                  value={form.title}
                  onChange={(e) => {
                    handleChange(e, 'title');
                  }}
                />
              </div>
            </div>
            <div className={`${styles.content_row} ${styles.content_row_start}`}>
              <div className={styles.label}>描述</div>
              <div className={styles.controls}>
                <TextArea
                  rows={10}
                  style={{ width: '400px' }}
                  value={form.desc}
                  onChange={(e) => {
                    handleChange(e, 'desc');
                  }}
                />
              </div>
            </div>
            <div className={styles.content_row}>
              <div className={styles.label}>相关资源 ID</div>
              <div className={styles.controls}>
                <Input
                  style={{ width: '400px' }}
                  value={form.rele_id}
                  onChange={(e) => {
                    handleChange(e, 'rele_id');
                  }}
                />
              </div>
            </div>
            <div className={styles.content_row}>
              <div className={styles.label} />
              <div className={styles.controls}>
                <div className={styles.help}>
                  如果问题涉及到具体资源，请提供这些资源的 ID，形如 i-xxxxxxxx
                  等，方便快速定位问题。
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.ticket_attachments}>
          <div className={styles.ticket_attachments_inner}>
            <h4 className={styles.content_title}>
              附件<span className="total">(0)</span>
              <div>
                <span className={styles.ticket_info}>
                  <span className={styles.tips}>
                    附件格式支持 TXT、JPG、JPEG 和 PNG，最多可以上传 12 个附件，单个文件大小不能超过
                    2 MB。
                  </span>
                </span>
              </div>
            </h4>
            <div className={styles.attachments_items}>
              <>
                <Upload
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  listType="picture-card"
                  fileList={fileList}
                  onPreview={handlePreview}
                  onChange={fileHandleChange}
                >
                  {fileList.length >= 12 ? null : uploadButton}
                </Upload>
                <Modal
                  visible={previewVisible}
                  title={previewTitle}
                  footer={null}
                  onCancel={handleCancel}
                >
                  <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
              </>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default TicksBuilder;
