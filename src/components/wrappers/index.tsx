import { cn } from "@digital-repo/lib/utils";

interface IMaxWidthWrapperProps {
  className?: string;
  children: React.ReactNode;
}

export const MaxWidthWrapper: React.FC<IMaxWidthWrapperProps> = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "w-full max-w-screen-xl mx-auto px-2.5 sm:px-20",
        className
      )}
    >
      {children}
    </div>
  );
};
