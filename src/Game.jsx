import { useRef, useState } from "react";
import Card from "./Card";
import Message from "./Message";

// const images = [1, 2, 3, 4, 5, 6, 7, 8];
const images = [];

for (let i = 1; i <= 8; i++) {
  images.push({
    id: i,
    src: `./assets/images/${i}.jpeg`,
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
  const [finished, setFinished] = useState("no");
  randomize(images);
  const score = useRef(0);
  const highScore = useRef(0);
  console.log(clickedImages);

  function clickEvent(id) {
    if (clickedImages.includes(id)) {
      setClickedImages([]);

      if (score.current > highScore.current) highScore.current = score.current;
      score.current = 0;
      setFinished("lost");
    } else {
      const newClickedImage = [...clickedImages];
      newClickedImage.push(id);
      setClickedImages(newClickedImage);
      score.current++;
      if (score.current === 8) {
        setFinished("won");
        setClickedImages([]);
      }
    }
  }

  if (finished === "won") {
    return <Message text="won" clickEvent={() => setFinished("no")} />;
  } else if (finished === "lost") {
    return <Message text="lost" clickEvent={() => setFinished("no")} />;
  }

  return (
    <>
      <div className="flex flex-col gap-5 rounded-lg bg-red-500 p-4 text-center text-xl text-white">
        <h2 className="text-3xl">
          اضغط على كل إنجاز <b>مرة واحدة فقط</b>
        </h2>
        <div className="flex justify-between">
          <p className="flex justify-center ">
            {"السكور الحالي " + score.current}
          </p>
          <p className="flex justify-center">
            {"أعلى سكور " + highScore.current}
          </p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-4">
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
