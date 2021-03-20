import React from "react";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FBidDD%2FbtqBOCQXvd5%2FYZTfAzhqnP7rfds0qJTYt0%2Fimg.png"
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FBidDD%2FbtqBOCQXvd5%2FYZTfAzhqnP7rfds0qJTYt0%2Fimg.png"
  },
  {
    id: 3,
    name: "Bibimbap",
    image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FBidDD%2FbtqBOCQXvd5%2FYZTfAzhqnP7rfds0qJTYt0%2Fimg.png"
  },
  {
    id: 4,
    name: "Doncasu",
    image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FBidDD%2FbtqBOCQXvd5%2FYZTfAzhqnP7rfds0qJTYt0%2Fimg.png"
  },
  {
    id: 5,
    name: "Kimbap",
    image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FBidDD%2FbtqBOCQXvd5%2FYZTfAzhqnP7rfds0qJTYt0%2Fimg.png"
  }
]

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={name} />
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image}/>)}
    </div>
  );
}

export default App;
