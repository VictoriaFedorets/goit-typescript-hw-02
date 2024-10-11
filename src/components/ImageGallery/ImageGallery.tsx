import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallary({ images, onClick }) {
  return (
    <ul className={css.gallery}>
      {/* {images.map(el => console.log(el))} */}

      {images.map(image => (
        <li key={image.id}>
          <ImageCard image={image} onClick={onClick} />
        </li>
      ))}
    </ul>
  );
}
