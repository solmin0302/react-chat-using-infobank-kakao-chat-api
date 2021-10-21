import classNames from 'classnames/bind';
import React, { useState } from 'react';
import { ChatList } from './ChatList';
import styles from './Messenger.module.css';
import { ReactComponent as MsgIcon } from '../../resources/images/msg-icon.svg';
import { ReactComponent as ArrowIcon } from '../../resources/images/arrow-icon.svg';
import { ReactComponent as SearchIcon } from '../../resources/images/search-icon.svg';

export const Messenger = ({onChatPopupRequest, ...props}) => {
  const cx = classNames.bind(styles);
  const [minimized, setIsMinimized] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const mockData = [
    {'id':1,'name':'김수은1', 'date':'2021-10-04T12:30:00','latestMessage':'문의 채팅 ','unleadMessagecCount':3},
    {'id':2,'name':'김수은2', 'date':'2021-10-03T00:30:00','latestMessage':'문의 채팅 내용 문의 채팅 내용 문의 채팅 내용 문의 채팅 내용 문의 채팅 내용 문의 채팅 내용','unleadMessagecCount':3},
    {'id':3,'name':'김수은3', 'date':'2021-10-02T23:59:99','latestMessage':'문의 채팅 내용 문의 채팅 내용 문의 채팅 내용 문의 채팅 내용 문의 채팅 내용 문의 채팅 내용','unleadMessagecCount':3},
    {'id':4,'name':'김수은4', 'date':'2021-09-20T12:30:00','latestMessage':'문의 채팅 내용 문의 채팅 내용 문의 채팅 내용 문의 채팅 내용 문의 채팅 내용 문의 채팅 내용','unleadMessagecCount':3},
    {'id':5,'name':'김수은5', 'date':'2021-09-20T12:30:00','latestMessage':'문의 채팅 내용 문의 채팅 내용 문의 채팅 내용 문의 채팅 내용 문의 채팅 내용 문의 채팅 내용','unleadMessagecCount':3},
    {'id':6,'name':'김수은6', 'date':'2021-09-20T12:30:00','latestMessage':'문의 채팅 내용 문의 채팅 내용 문의 채팅 내용 문의 채팅 내용 문의 채팅 내용 문의 채팅 내용','unleadMessagecCount':3},
    {'id':7,'name':'김수은7', 'date':'2021-09-20T12:30:00','latestMessage':'문의 채팅 내용 문의 채팅 내용 문의 채팅 내용 문의 채팅 내용 문의 채팅 내용 문의 채팅 내용','unleadMessagecCount':3},
    {'id':8,'name':'김수은8', 'date':'2021-09-20T12:30:00','latestMessage':'문의 채팅 내용 문의 채팅 내용 문의 채팅 내용 문의 채팅 내용 문의 채팅 내용 문의 채팅 내용','unleadMessagecCount':3},
    {'id':9,'name':'김수은9', 'date':'2021-09-20T12:30:00','latestMessage':'문의 채팅 내용 문의 채팅 내용 문의 채팅 내용 문의 채팅 내용 문의 채팅 내용 문의 채팅 내용','unleadMessagecCount':3},
    {'id':10,'name':'김수은10', 'date':'2021-09-20T12:30:00','latestMessage':'문의 채팅 내용 문의 채팅 내용 문의 채팅 내용 문의 채팅 내용 문의 채팅 내용 문의 채팅 내용','unleadMessagecCount':3},
    {'id':11,'name':'김수은11', 'date':'2021-09-20T12:30:00','latestMessage':'문의 채팅 내용 문의 채팅 내용 문의 채팅 내용 문의 채팅 내용 문의 채팅 내용 문의 채팅 내용','unleadMessagecCount':3},
    {'id':12,'name':'김수은12', 'date':'2021-09-20T12:30:00','latestMessage':'문의 채팅 내용 문의 채팅 내용 문의 채팅 내용 문의 채팅 내용 문의 채팅 내용 문의 채팅 내용','unleadMessagecCount':3},
    {'id':13,'name':'김수은13', 'date':'2021-09-20T12:30:00','latestMessage':'문의 채팅 내용 문의 채팅 내용 문의 채팅 내용 문의 채팅 내용 문의 채팅 내용 문의 채팅 내용','unleadMessagecCount':3},
    {'id':14,'name':'김수은14', 'date':'2021-09-20T12:30:00','latestMessage':'문의 채팅 내용 문의 채팅 내용 문의 채팅 내용 문의 채팅 내용 문의 채팅 내용 문의 채팅 내용','unleadMessagecCount':3},
    {'id':15,'name':'김수은15', 'date':'2021-09-20T12:30:00','latestMessage':'문의 채팅 내용 문의 채팅 내용 문의 채팅 내용 문의 채팅 내용 문의 채팅 내용 문의 채팅 내용','unleadMessagecCount':3},
    {'id':16,'name':'김수은16', 'date':'2021-09-20T12:30:00','latestMessage':'문의 채팅 내용 문의 채팅 내용 문의 채팅 내용 문의 채팅 내용 문의 채팅 내용 문의 채팅 내용','unleadMessagecCount':3},
    {'id':17,'name':'김수은17', 'date':'2021-09-20T12:30:00','latestMessage':'문의 채팅 내용 문의 채팅 내용 문의 채팅 내용 문의 채팅 내용 문의 채팅 내용 문의 채팅 내용','unleadMessagecCount':3},
  ];

  const onMinimizeIconClicked = ()=>{
    let toggleValue = !minimized;
    setIsMinimized(toggleValue);
  };

  return (
    <div className={cx('container',minimized?'minimized':'')}>
      <div className={cx('header')} onClick={onMinimizeIconClicked}>
        <MsgIcon className={cx('msg-icon')}/>
        <div className={cx('content')}>
          <p className={cx('name')}>Discovery</p>
          {true && minimized && <p className={cx('newMsgCount')}>{`답변대기 3`}</p>}
        </div>
        <ArrowIcon className={cx('minimize-icon',minimized?'flip':'')}/>
      </div>
      <div className={cx('search')}>
        <SearchIcon className={cx('search-icon')}/>
        <input className={cx('search-input')} type="text" placeholder="이름 또는 핸드폰번호 검색"/>
      </div>
      <ChatList onItemClick={onChatPopupRequest} data={mockData}/>
    </div>
  )
}
