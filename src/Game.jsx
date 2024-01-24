import { useRef, useState } from "react";
import Card from "./Card";

// const images = [1, 2, 3, 4, 5, 6, 7, 8];
const images = [];

for (let i = 1; i <= 8; i++) {
  images.push({
    id: i,
    src: `./src/assets/images/${i}.jpeg`,
  });
}

function randomize(array) {
  let currentIndex = array.length - 1;

  while (currentIndex > 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];

    currentIndex--;
  }
  return array;
}

export default function Game() {
  const [clickedImages, setClickedImages] = useState([]);
  randomize(images);
  const score = useRef(0);
  const highScore = useRef(0);
  console.log(clickedImages);

  function clickEvent(id) {
    if (clickedImages.includes(id)) {
      setClickedImages([]);
      alert("your score is " + score.current);
      if (score.current > highScore.current) highScore.current = score.current;
      score.current = 0;
    } else {
      const newClickedImage = [...clickedImages];
      newClickedImage.push(id);
      setClickedImages(newClickedImage);
      score.current++;
    }
  }
  return (
    <>
      <p>{"Current Score is " + score.current}</p>
      <p>{"High Score is " + highScore.current}</p>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image) => {
          return (
            <Card
              key={image.id}
              url={image.src}
              onClick={() => clickEvent(image.id)}
            />
          );
        })}
      </div>
    </>
  );
}
