import React from 'react'
import './forum-comments.css'
const ForumPostComponents = () => {
    return (
        <div className="chat-container">
        <ul className="chat-thread">
          <li>Are we meeting today?</li>
          <li>yes, what time suits you?</li>
          <li>I was thinking after lunch, I have a meeting in the morning</li>
        </ul>
        <form className="chat-window">
          <input
            className="chat-window-message"
            name="chat-window-message"
            type="text"
            autocomplete="off"
            autofocus
            placeholder='הקלד כאן...'
          />
        </form>
      </div>
    )
}

export default ForumPostComponents
