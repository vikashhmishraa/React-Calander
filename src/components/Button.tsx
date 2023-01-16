import clsx from "clsx";

interface Props extends React.PropsWithChildren {
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<Props> = ({ onClick, className, children }) => (
  <button
    onClick={onClick}
    className={clsx(
      "text-white bg-yellow-600 active:bg-red-700 text-sm px-4 py-1.5 rounded",
      className
    )}
  >
    {children}
  </button>
);

export default Button;
