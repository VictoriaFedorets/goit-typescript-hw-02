import css from "./ImageCard.module.css"; // Optional, for styling

export default function ImageCard({ image, onClick }) {
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
