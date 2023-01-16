import clsx from "clsx";

interface Props extends React.PropsWithChildren {
  className?: string;
  isActive?: boolean;
  onClick?: () => void;
}

const Cell: React.FC<Props> = ({
  onClick,
  children,
  className,
  isActive = false,
}) => {
  return (
    <div
      onClick={!isActive ? onClick : undefined}
      className={clsx(
        "h-12 rounded-full flex items-center justify-center select-none transition-colors",
        {
          "cursor-pointer hover:bg-gray-100 active:bg-gray-200":
            !isActive && onClick,
          "font-bold text-white rounded-full bg-green-600": isActive,
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export default Cell;
