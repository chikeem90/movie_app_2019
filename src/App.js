import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} />
    </div>
  )
}

const foodILike = [
  {
    name: "Kimchi",
    image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FBidDD%2FbtqBOCQXvd5%2FYZTfAzhqnP7rfds0qJTYt0%2Fimg.png"
  },
  {
    name: "Samgyeopsal",
    image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FBidDD%2FbtqBOCQXvd5%2FYZTfAzhqnP7rfds0qJTYt0%2Fimg.png"
  },
  {
    name: "Bibimbap",
    image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FBidDD%2FbtqBOCQXvd5%2FYZTfAzhqnP7rfds0qJTYt0%2Fimg.png"
  },
  {
    name: "Doncasu",
    image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FBidDD%2FbtqBOCQXvd5%2FYZTfAzhqnP7rfds0qJTYt0%2Fimg.png"
  },
  {
    name: "Kimbap",
    image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FBidDD%2FbtqBOCQXvd5%2FYZTfAzhqnP7rfds0qJTYt0%2Fimg.png"
  }
]

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodILike.map(dish => <Food name={dish.name} picture={dish.image}/>)}
    </div>
  );
}

export default App;
