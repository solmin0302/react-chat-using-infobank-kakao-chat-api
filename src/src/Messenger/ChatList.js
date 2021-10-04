import classNames from 'classnames/bind';
import React, { useState } from 'react';
import { ChatItem } from './ChatItem';
import styles from './ChatList.module.css';

export const ChatList = ({onItemClick, data, ...props}) => {
  const cx = classNames.bind(styles);

  return (
    <div className={cx('container')}>
      {data?.map((chatItemData)=>
        <ChatItem key={chatItemData.id} onItemClick={onItemClick} data={chatItemData} />
      )}
    </div>
  )
}
