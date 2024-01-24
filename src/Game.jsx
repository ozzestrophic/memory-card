import { useRef, useState } from "react";
import Card from "./Card";

const images = [1, 2, 3, 4, 5, 6, 7, 8];

export default function Game() {
  const [clickedImages, setClickedImages] = useState([]);
  const score = useRef(0);

  function clickEvent(e) {
    if (clickedImages.includes(e.target.id)) {
      setClickedImages([]);
      alert("your score is " + score.current);
      score.current = 0;
    } else {
      const newClickedImage = [...clickedImages];
      newClickedImage.push(e.target.id);
      setClickedImages(newClickedImage);
      score.current++;
    }
  }
  return (
    <>
      <p>{"score is " + score.current}</p>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image) => {
          return <Card key={image} url={image} onClick={clickEvent} />;
        })}
      </div>
    </>
  );
}
