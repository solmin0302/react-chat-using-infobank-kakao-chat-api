import classNames from 'classnames/bind';
import React, { useState } from 'react';
import styles from './ChatItem.module.css';

export const ChatItem = ({onItemClick, data, ...props}) => {
  const cx = classNames.bind(styles);

  const getToday = ()=> {
    let today = new Date();
    let todayString = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()>9?today.getDate():`0${today.getDate()}`}T00:00:00`;
    console.log(todayString);
    return new Date(todayString);
  };

  const getTimeString = (dateString) => {
    let today = getToday();
    let targetDate = new Date(`${dateString.split('T')[0]}T00:00:00`);
    let dateDiff = (today - targetDate)/(1000*3600*24);

    if(dateDiff < 1)
    {
      return `${targetDate.toLocaleTimeString([],{ hour: '2-digit', minute: '2-digit' })}`;
    }
    else if(dateDiff < 2) {
      return `어제`;
    }
    else {
      return `${targetDate.getMonth()+1}월 ${targetDate.getDate()}일`;
    }
  }

  return (
    <div className={cx('container')} onClick={()=>{
      onItemClick(data)
    }}>
      <div className={cx('header')}>
        <p className={cx('name')}>{data.name}</p>
        <p className={cx('date')}>{getTimeString(data.date)}</p>
      </div>
      <div className={cx('content')}>
        <p className={cx('latestMessage')}>{data.latestMessage}</p>
        <div className={cx('newMsgCount')}><p>{data.unleadMessagecCount}</p></div>
      </div>
    </div>
  )
}
