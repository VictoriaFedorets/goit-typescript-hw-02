import ClipLoader from "react-spinners/ClipLoader";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.loader}>
      <ClipLoader
        color="blue"
        // cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
