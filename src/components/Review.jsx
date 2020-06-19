import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Review = ({ match, postReview }) => {
  console.log(postReview);
  console.log(match);
  const movieId = match.params.id;

  const [review, setReview] = useState({
    movieId: movieId,
    score: 0,
    comment: '',
    tag: '',
    condition: 'public',
    spoiler: false,
    record: '',
  });

  const handleChangeCheck = () => {
    setReview({
      ...review,
      spoiler: !review.spoiler,
    });
    console.log(review);
  };

  const handleChangeRadio = (e) => {
    setReview({
      ...review,
      [e.target.id]: e.target.value,
    });
  };

  const handleChange = (e) => {
    console.log(review.record);
    e.preventDefault();
    setReview({
      ...review,
      [e.target.id]: e.target.value,
    });
    console.log(review);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postReview(review);
    setReview('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Score</p>
        <input input type="text" id="score" onChange={handleChange} />
        <p>Review comment</p>
        <input type="text" id="comment" onChange={handleChange} />
        <p>Tags</p>
        <input type="text" id="tag" onChange={handleChange} />
        <div>
          <p>Conditions</p>
          <input
            type="radio"
            name="radio"
            id="condition"
            value="public"
            defaultChecked={review.condition === 'public'}
            onChange={handleChangeRadio}
          />
          <label>Public</label>
          <input
            type="radio"
            name="radio"
            id="condition"
            value="private"
            defaultChecked={review.condition === 'private'}
            onChange={handleChangeRadio}
          />
          <label>Private</label>
        </div>
        <input
          type="checkbox"
          name="spoiler"
          id="spoiler"
          defaultChecked={review.spoiler}
          onChange={handleChangeCheck}
        />
        <label>Spoiler</label>
        <select
          name="record"
          id="record"
          value={review.record}
          onChange={handleChange}
        >
          <option value="-----">--- Select ---</option>
          <option value="theater">Theater</option>
          <option value="DVD/Blueray">DVD/Blueray</option>
          <option value="Netflix">Netflix</option>
        </select>
        <div>
          <Link to={'/' + movieId}>
            <button>Cancel</button>
          </Link>
          <button>Publish</button>
        </div>
      </form>
    </div>
  );
};

export default Review;
