import React, { useRef } from 'react';
import './feedback.css';
export default function Comment() {
  const commentRef = useRef('');
  const handleSubmit = (event) => {
    event.preventDefault();
    const comment = commentRef.current;
    // Perform necessary actions with the comment (e.g., save it, display it, etc.)
    console.log(comment);
    alert(comment);
  };

  return (
    <div className='con'>
    <form onSubmit={handleSubmit}>
    <textarea ref={commentRef} />
    <button type="submit">Submit</button>
    </form>
    </div>
  );
}
