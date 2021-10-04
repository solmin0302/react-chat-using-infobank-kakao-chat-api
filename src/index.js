import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react'
import styles from './index.css'
import { Messenger } from './src/Messenger/Messenger';
import { debounce } from 'lodash';

export const ExampleComponent = ({ text }) => {

  const [connectedPopup,setConnectedPopup] = useState([]);
  const [maximumPopupCount, setMaximumPopupCount] = useState(0);

  const onWindowResize = debounce(()=>{
    console.log(`Window Resized  ${window.innerWidth}`);
  },500)

  useEffect(()=>{
    console.log("INITIALIZED");

    console.log("INITIALIZED");
    window.addEventListener('resize',onWindowResize);
    return ()=>{
      window.removeEventListener('resize',onWindowResize);
    }
  },[]);

  const cx = classNames.bind(styles);
  const onChatPopupRequest = (data)=>{
    console.log(data);

    if(maximumPopupCount < connectedPopup.length + 1)
    {
      setConnectedPopup([...connectedPopup, data]);
    }
    else 
    {
      let [first, ...remained] = connectedPopup
      setConnectedPopup([...remained, data]);
    }
  }

  return (
    <div className={cx('main')}>
      <Messenger onChatPopupRequest={onChatPopupRequest} />
      {connectedPopup.map(()=><div></div>)}
    </div>
  )
}
