import React from 'react';
import './comment.scss';
import UserInfo from './UserInfo';
import moment from 'moment';


const formatDate = date => moment(date).format('DD MMM YYYY');

function Comment(props) {
  return (
    <div className="comment">
      <UserInfo user={props.author} />

      {/* <div className="user-info">
        <img className="avatar" src={props.author.avatarUrl} alt={props.author.name} />
        <div className="user-info__name">{props.author.name}</div>
      </div> */}

      <div className="comment__text">{props.text}</div>
      <div className="comment__date">{formatDate(props.date)}</div>
    </div>
  );
}

export default Comment;
