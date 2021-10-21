import classNames from 'classnames/bind'
import React, { createRef, useEffect, useState } from 'react'
import { ReactComponent as CloseIcon } from '../../resources/images/close-icon.svg'
import { ReactComponent as ImageIcon } from '../../resources/images/image-icon.svg'
import { ReactComponent as EmojiIcon } from '../../resources/images/emoji-icon.svg'
import { ReactComponent as Dots } from '../../resources/images/dotdotdot.svg'
import styles from './ChatPopup.module.css'
import { createMockMessage } from '../utils/util'
import { lowerCase } from 'lodash'
import { SystemMessage } from './SystemMessage'
import { UserMessage } from './UserMessage'

export const ChatPopup = ({ onClose, data, ...props }) => {
  const cx = classNames.bind(styles)
  const [inputValue, setInputValue] = useState('');
  const [inputHeight, setInputHeight] = useState(22);
  const [messageList, setMessageList] = useState([]);
  const [scrollInitialized, setScrollInitialized] = useState(false);
  const contentContainer = createRef(null);

  const onInputChange = (e) => {
    const targetHeight = Math.min(e.target.scrollHeight, 126);
    setInputHeight(e.target.value === '' ? 22 : targetHeight);
    setInputValue(e.target.value);
  }

  const getPreviousMessageList = () => {
    // 서버 Response로 바뀌어야?
    let response = createMockMessage(20);

    let previousChat = null;
    let result = [...messageList, ...response];

    result = result.map((chat)=>{
      chat.isSameSpeakerAsPrevious = previousChat && previousChat.speaker === chat.speaker;
      previousChat = chat;
      return chat;
    });

    setMessageList(result);
  }

  const createMessage = (chat) => {
    return chat.speaker === 'SYSTEM' ? (
      <SystemMessage data={chat} />
    ) : (
      <UserMessage data={chat} />
    )
  }

  useEffect(() => {
    getPreviousMessageList();
    // 스크롤 상태가 최 하단이 아니면 내려가는거 보여주기
    // 현재 스크롤 상태가 최 하단이면 내려야됨
  }, [])


  useEffect(() => {
    // 첫 메시지 불러왔을 때만 아래로 내려버림
    if (messageList.length > 0 && !scrollInitialized) {
      contentContainer.current.scrollTop = Number.MAX_SAFE_INTEGER;
      console.log(contentContainer.current.scrollTop)
      setScrollInitialized(true);
    }
  }, [messageList, scrollInitialized]);

  return (
    <div className={cx('container')}>
      <div className={cx('header')}>
        <p className={cx('name')}>{data.name}</p>
        <div className={cx('iconButton')} onClick={() => onClose(data)}>
          <CloseIcon />
        </div>
      </div>
      <div className={cx('content')} ref={contentContainer}>
        {messageList.map((chat) => createMessage(chat))}
      </div>
      <div className={cx('footer')}>
        <div className={cx('toolbar')}>
          <div className={cx('iconButton')}>
            <ImageIcon />
          </div>
          <div className={cx('iconButton')}>
            <EmojiIcon />
          </div>
        </div>
        <div className={cx('chatInputArea')}>
          <textarea
            style={{ height: `${inputHeight}px` }}
            value={inputValue}
            onChange={onInputChange}
            className={cx('chatInput')}
            placeholder='값을 입력 해 주세요'
          />
          <button className={cx('submit', inputValue !== '' && 'enable')}>
            전송
          </button>
        </div>
        <div className={cx('ingText')}>
          {false && (
            <>
              <p>zzz님이 입력중입니다</p>
              <Dots/>
            </>
          )}
        </div>
        <div className={cx('newMessageBar',false&&'active')}>
          
        </div>
      </div>
    </div>
  )
}
