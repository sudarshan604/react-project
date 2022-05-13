import { context } from "../Context";
import { useContext } from "react";
import Image from "../components/Image";
import "../style.css";
import { getClass } from "../utils";

function Photos() {
  let { allPhotos } = useContext(context);
  const imageElement = allPhotos.map((img, i) => (
    <Image key={img.id} img={img} className={getClass(i)} />
  ));
  // console.log(allPhotos);
  return <main className="photos">{imageElement}</main>;
}

export default Photos;
