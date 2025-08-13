import React, {useState, useEffect} from 'react';

function UserStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    ServerAPI.subscribeStatus(props.user.id, handleStatusChange);
    return () => {
      ServerAPI.unsubscribeStatus(props.user.id, handleStatusChange);
    };
  }, []);

if (isOnline == null){
  return '대기중';
}
return isOnline ? '온라인' : '오프라인';
}

