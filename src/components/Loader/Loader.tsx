import ClipLoader from "react-spinners/ClipLoader";
import css from "./Loader.module.css";

interface LoaderProps {
  color?: string;
  size?: number;
}

export default function Loader({
  color = "blue",
  size = 100,
}: LoaderProps): JSX.Element {
  return (
    <div className={css.loader}>
      <ClipLoader
        color={color}
        // cssOverride={override}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
