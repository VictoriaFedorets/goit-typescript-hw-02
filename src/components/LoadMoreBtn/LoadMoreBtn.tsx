import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
  disabled: boolean;
  children: React.ReactNode;
}

export default function LoadMoreBtn({
  onClick,
  disabled,
  children,
}: LoadMoreBtnProps) {
  return (
    <button
      className={css.button}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      {/* Load more */}
    </button>
  );
}
