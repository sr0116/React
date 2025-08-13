import React from "react";

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '12px',
    padding: '16px',
    color: '#333',
  },
  greeting: {
    color: '#007bff',
    fontWeight: '500',
    fontSize: '16px',
    paddingBottom: '4px',
    borderBottom: '2px solid #ccc', // 얇은 줄
  },
  button: {
    padding: '8px 16px',
    border: '1px solid #007bff',
    borderRadius: '6px',
    backgroundColor: 'transparent',
    color: '#007bff',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'all 0.2s ease',
  },
  buttonHover: {
    backgroundColor: '#007bff',
    color: '#fff',
  },
};

function Toolbar({ isLoggedIn, onClickLogin, onClickLogout }) {
  const handleMouseOver = (e) =>
    Object.assign(e.target.style, styles.button, styles.buttonHover);

  const handleMouseOut = (e) =>
    Object.assign(e.target.style, styles.button);

  return (
    <div style={styles.wrapper}>
      {isLoggedIn && <span style={styles.greeting}>Welcome!</span>}
      {isLoggedIn ? (
        <button
          style={styles.button}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={onClickLogout}
        >
          로그아웃
        </button>
      ) : (
        <button
          style={styles.button}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={onClickLogin}
        >
          로그인
        </button>
      )}
    </div>
  );
}

export default Toolbar;
