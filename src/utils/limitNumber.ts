/* 限制数字输入框只能输入整数 */
const limitNumber = (value) => {
  if (typeof value === 'string') {
    return !isNaN(Number(value)) ? value.replace(/^(0+)|[^\d]/g, '') : '1';
  }
  if (typeof value === 'number') {
    return !isNaN(value) ? String(value).replace(/^(0+)|[^\d]/g, '') : '';
  }
  return '';
};
export default limitNumber;
