import classNames from 'classnames/bind'
import React, { useEffect, useState } from 'react'
import styles from './UserMessage.module.css'

export const UserMessage = ({ data, ...props }) => {
  const {speaker, speakerName, messageText, messageType, isSameSpeakerAsPrevious } = data;
  const isCustomer = speaker === 'CUSTOMER';
  const cx = classNames.bind(styles);

  const createContent = () => {
    switch(messageType)
    {
      case 'TEXT':
      {
        return <div className={cx('text')}>{messageText}</div>
      }
      case 'IMAGE':
      {
        return <div className={cx('text')}>{messageText}</div>
      }
      case 'AUDIO':
      {
        return <div className={cx('text')}>{messageText}</div>
      }
      case 'VIDEO':
      {
        return <div className={cx('text')}>{messageText}</div>
      }
      case 'FILE':
      {
        return <div className={cx('text')}>{messageText}</div>
      }
      case 'LINK':
      {
        return <div className={cx('text')}>{messageText}</div>
      }
    }
  }

  return (
    <div className={cx('container', isCustomer ? 'customer':'user', isSameSpeakerAsPrevious && 'continue')}>
      {isCustomer&&!isSameSpeakerAsPrevious&&<div className={cx('name')}>{speakerName}</div>}
      <div className={cx('message')}>
        {!isCustomer&&<p className={cx('subName')}>{`${speakerName} 답변`}</p>}
        <div className={cx('content')}>{createContent()}</div>
      </div>
    </div>
  )
}
