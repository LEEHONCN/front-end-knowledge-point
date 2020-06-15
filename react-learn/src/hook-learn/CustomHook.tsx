/*
 * @Author: Li Hang
 * @Date: 2020-05-08 17:43:45
 * @LastEditTime: 2020-05-08 18:50:20
 */
import React, { useState } from 'react';

export default function() {
  const [isSubscribe, func] = useSubscribeDashboard(true);
  
  return (
    <div>
      <button onClick={() => {
        func()
      }}> 
        { isSubscribe ? 
          <span>取消订阅</span> :
          <span>订阅成功</span>
        }
      </button>
    </div>
  );
}     

function useSubscribeDashboard(isSubscribe: Boolean): [Boolean, Function]{
  const [_isSubscribe, setSubscribeState] = useState<Boolean>(isSubscribe);
  return [_isSubscribe, () => {
    if(_isSubscribe){
      return new Promise((resolver) => {
        setTimeout(() => {
          resolver()
        }, 3000);
        
      }).then(() => {
        setSubscribeState(false);
      });
    }
    return new Promise((resolver) => {
      setTimeout(() => {
        resolver()
      }, 3000);
    }).then(() => {
      setSubscribeState(true);
    });
  }];
}
