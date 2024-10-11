import { useState } from "react";
import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps): JSX.Element {
  const [query, setQuery] = useState<string>("");

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(evt.target.value);
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    if (query.trim() === "") {
      toast.error("Search query cannot be empty");
      return;
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
        <button className={css.btnSearch} type="submit">
          Search
        </button>
      </form>
      <Toaster
        position="top-center"
        toastOptions={{
          className: "",
          style: {
            border: "1px solid #713200",
            padding: "16px",
            margin: "80px",
            color: "#713200",
          },
        }}
      />
    </header>
  );
}
