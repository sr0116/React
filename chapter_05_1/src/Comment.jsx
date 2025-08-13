import React from 'react';

const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: 'flex',
    flexDirection: 'row',
    border : "1px solid grey",
    borderRadius : 16,
  },
  imageContainer: {},
    image :{
    margin : 7,
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  contentContainer: {
    marginLeft: '8',
    display: 'flex',
    flexDirection: 'column',
    justifyContent :"center",
  },
  nameText: {
    color: 'black',
    fontSize: '16',
    fontWeight: 'bold',
  },
  commentText: {
    color: 'black',
    fontSize: '16',
  },
};

function Comment(props) {
  // props.name = "고냥이";// 오류
  const rename = "고냥이" ;
  return (
    <div style={styles.wrapper} >
      <div style={styles.imageContainer}>
        <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEyMTRfNzQg%2FMDAxNzM0MTY5MTE3MzQ5.zP8jpFylqms_1LJHKTaqLsyPNf7EiqAd8aVR7r1iYAAg.TlAsBZcY9o8Kc21zdZ1VKovEfsrmCS5-U4Kbbk_K5Wkg.JPEG%2Fartworks%25A3%25ADo8qBUuV9ksMl4sLY%25A3%25ADYJvgCA%25A3%25ADt500x500.jpg&type=a340"
           style={styles.image} />
      </div>
      <div style={styles.contentContainer}>
        <span style={styles.nameText}>{props.name}</span>
        <span style={styles.commentText}>
          {props.comment}
        </span>
      </div>
    </div>
  );
}
export default Comment;