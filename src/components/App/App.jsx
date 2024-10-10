import { useEffect, useState } from "react";
import { getPhotos } from "../../apiService/apiService";

import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

export default function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState("1");
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const {
          results: photos,
          total_pages,
          per_page,
        } = await getPhotos(query, page);

        if (!photos.length) {
          setIsEmpty(true);
        }
        setImages(prevImages => [...prevImages, ...photos]);
        setIsEmpty(false);
        setIsVisible(page < Math.ceil(total_pages));
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [page, query]);

  const onHandleSubmit = value => {
    setQuery(value);
    setImages([]);
    setPage(1);
    setError(null);
    setIsEmpty(false);
    setIsVisible(false);
  };

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = image => {
    console.log("Opening modal with image:", image);
    setIsOpen(true);
    setModalImg(image);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalImg(null);
  };

  return (
    <div>
      <SearchBar onSubmit={onHandleSubmit} />

      {images.length > 0 && (
        <ImageGallery images={images} onClick={openModal} />
      )}
      {isVisible && (
        <LoadMoreBtn onClick={onLoadMore} disabled={isLoading}>
          {isLoading ? "loading" : "load more"}
        </LoadMoreBtn>
      )}
      {/* {images.length > 0 && !isVisible && (
        <LoadMoreBtn onClick={onLoadMore}>Load more</LoadMoreBtn>
      )} */}
      {!images.length && !isEmpty && (
        <ErrorMessage textAlign="center">Let`s begin search 🔎</ErrorMessage>
      )}
      {isLoading && <Loader />}
      {error && (
        <ErrorMessage textAlign="center">
          ❌ Something went wrong - {error.message}
        </ErrorMessage>
      )}
      {isEmpty && (
        <ErrorMessage textAlign="center">
          Sorry. There are no images ... 😭
        </ErrorMessage>
      )}
      <ImageModal isOpen={modalIsOpen} onClose={closeModal} image={modalImg} />
    </div>
  );
}
