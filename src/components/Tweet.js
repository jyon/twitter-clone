import { dbService, storageService } from "fbase";
import React, { useState } from "react";
import { StaticRouter } from "react-router-dom";

const Tweet = ({ tweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newTweet, setNewTweet] = useState(tweetObj.text);

  const onDeleteClick =  async () => {
    const del = window.confirm("Are you sure delete this tweet?");
    if (del) {
      await dbService.doc(`tweets/${tweetObj.id}`).delete();
      await storageService.refFromURL(tweetObj.attachmentUrl).delete();
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.doc(`tweets/${tweetObj.id}`).update({
      text: newTweet,
    });
    setEditing(false);
  }

  const onChange = (event) => {
    const {
      target: { value }
    } = event;
    setNewTweet(value);
  }

  const toggleEditing = () => setEditing(prev => !prev);

  return (
    <div>
      {editing ? (
          <>
          <form onSubmit={onSubmit}>
            <input 
              text="text" 
              placeholder="Edit your tweet" 
              value={newTweet} 
              onChange={onChange}
              required 
            />
            <input type="submit" value="Update Tweet" />
          </form>
          <button onClick={toggleEditing}>Cancel</button>
          </>
        ) : (
          <>
          <h4>{tweetObj.text}</h4>
          {tweetObj.attachmentUrl && <img src={tweetObj.attachmentUrl} width="50px" height="50px" />}
          {isOwner && (
            <>
            <button onClick={onDeleteClick}>Delete Tweet</button>
            <button onClick={toggleEditing}>Edit Tweet</button>
            </>
          )}
          </>
        )
      }
    </div>
  );
};

export default Tweet;