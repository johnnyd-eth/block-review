import { ReactNode } from "react";

export const InfoCard: React.FC<{
  children?: ReactNode;
  title: ReactNode;
  icon: ReactNode;
}> = ({ title, icon, children }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 text-center">
      <div className="rounded-full bg-swatch-100 p-1.5">
        <div className="rounded-full bg-swatch-200 p-1">
          <div className="h-6 w-6 text-swatch-400">{icon}</div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="text-2xl font-medium">{title}</div>
        <div className="text-base text-gray-500">{children}</div>
      </div>
    </div>
  );
};
