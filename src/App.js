import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FBidDD%2FbtqBOCQXvd5%2FYZTfAzhqnP7rfds0qJTYt0%2Fimg.png",
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FBidDD%2FbtqBOCQXvd5%2FYZTfAzhqnP7rfds0qJTYt0%2Fimg.png",
    rating: 4
  },
  {
    id: 3,
    name: "Bibimbap",
    image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FBidDD%2FbtqBOCQXvd5%2FYZTfAzhqnP7rfds0qJTYt0%2Fimg.png",
    rating: 3.5
  },
  {
    id: 4,
    name: "Doncasu",
    image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FBidDD%2FbtqBOCQXvd5%2FYZTfAzhqnP7rfds0qJTYt0%2Fimg.png",
    rating: 3.2
  },
  {
    id: 5,
    name: "Kimbap",
    image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FBidDD%2FbtqBOCQXvd5%2FYZTfAzhqnP7rfds0qJTYt0%2Fimg.png",
    rating: 4.7
  }
]

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  )
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />)}
    </div>
  );
}

export default App;
