import React, { useState } from 'react';

function ConfirmButton() {
  const [isConfirm, setIsConfirm] = useState(false);

  const handleConfirm = () => {
    const check = window.confirm("확인하시겠습니까?");
    setIsConfirm(check);
  };

  return (
    <button onClick={handleConfirm} disabled={isConfirm}>
      {isConfirm ? "확인됨" : "확인하기"}
    </button>
  );
}

export default ConfirmButton;
