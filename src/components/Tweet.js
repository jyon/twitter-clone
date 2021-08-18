import { dbService, storageService } from "fbase";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

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
    <div className="tweet">
      {editing ? (
          <>
          <form onSubmit={onSubmit} className="container tweetEdit">
            <input 
              text="text" 
              placeholder="Edit your tweet" 
              value={newTweet} 
              onChange={onChange}
              required 
              autoFocus
              className="formInput"
            />
            <input type="submit" value="Update Tweet" className="formBtn"/>
          </form>
          <button onClick={toggleEditing}>Cancel</button>
          </>
        ) : (
          <>
          <h4>{tweetObj.text}</h4>
          {tweetObj.attachmentUrl && <img src={tweetObj.attachmentUrl} />}
          {isOwner && (
            <div class="tweet__actions">
            <span onClick={onDeleteClick}>
              <FontAwesomeIcon icon={faTrash} />
            </span>
            <span onClick={toggleEditing}>
              <FontAwesomeIcon icon={faPencilAlt} />
            </span>
            </div>
          )}
          </>
        )
      }
    </div>
  );
};

export default Tweet;