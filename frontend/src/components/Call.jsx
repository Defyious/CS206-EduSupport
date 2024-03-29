import React, { useState } from 'react';
import MyNavbar from './Navbar';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useNavigate } from 'react-router-dom';

function randomID(len) {
  let result = '';
  if (result) return result;
  var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

export default function Call() {
  const navigate = useNavigate();
  const roomID = "EduSupport";
  const [showRatingPopup, setShowRatingPopup] = useState(false); // State to control the visibility of the rating popup
  const [rating, setRating] = useState(0); // State to store the rating
  const [comment, setComment] = useState(''); // State to store the comment

  let myMeeting = async (element) => {
    // generate Kit Token
    const appID = 432976396;
    const serverSecret = "cfe37b8baa8a2b481181b5c3641e4f74";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, randomID(5), "User");

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
    zp.joinRoom({
      onLeaveRoom: () => {
        setShowRatingPopup(true); // Show rating popup when leaving the room
      },
      onReturnToHomeScreenClicked: () => {
        navigate('/mentoring');
      },
      container: element,
      sharedLinks: [
        {
          name: 'Personal link',
          url:
            window.location.protocol + '//' +
            window.location.host + window.location.pathname +
            '?roomID=' +
            roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall]. or GroupCall
      },
    });
  };

  const handleSubmit = async () => {
    try {
        const url = `http://ad554d9e8589547b0a334504cf45a06e-694130236.ap-southeast-1.elb.amazonaws.com/api/matching/mentee/1/giverating/1?rating=${rating}&comments=${comment}`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                rating: rating,
                comments: comment
            })
        });

        if (!response.ok) {
            throw new Error('Failed to add rating');
        }

        console.log("Rating added successfully");
    } catch (error) {
        console.error("Error adding rating:", error);
    }
    setRating(0);
    setComment('');

    // Close the popup
    setShowRatingPopup(false);
  };

  return (
    <>
      <MyNavbar />
      <div className="myCallContainer" ref={myMeeting} style={{ width: '100vw', height: '100vh' }}></div>
      {showRatingPopup && (
        <div className="ratingPopup">
          <h2>Rate the call</h2>
          <label>
            Rating:
            <input type="number" min="1" max="5" value={rating} onChange={(e) => setRating(parseInt(e.target.value))} />
          </label>
          <label>
            Comment:
            <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
          </label>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </>
  );
}
