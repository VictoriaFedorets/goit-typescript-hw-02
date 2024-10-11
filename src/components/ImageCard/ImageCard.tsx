import css from "./ImageCard.module.css";
import { IPhoto } from "../../apiService/apiService";

interface ImageCardProps {
  image: IPhoto;
  onClick: (image: IPhoto) => void;
}

export default function ImageCard({ image, onClick }: ImageCardProps) {
  return (
    <div className={css.imgСard}>
      <img
        className={css.image}
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => onClick(image)}
      />
    </div>
  );
}
