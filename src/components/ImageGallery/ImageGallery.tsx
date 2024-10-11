import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { IPhoto } from "../../apiService/apiService";

interface ImageGallaryProps {
  images: IPhoto[];
  onClick: (image: IPhoto) => void;
}

export default function ImageGallary({ images, onClick }: ImageGallaryProps) {
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
