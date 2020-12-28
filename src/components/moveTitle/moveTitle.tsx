import React, { useState } from 'react';

const MoveTitle: React.FC<{}> = (props) => {
  const { styleTop, styleLeft, title, setStyleTop, setStyleLeft } = props;

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
  return (
    <div style={{ width: '100%', cursor: 'move', fontWeight: '600' }} onMouseDown={onMouseDown}>
      {title}
    </div>
  );
};
export default MoveTitle;
