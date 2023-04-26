import React from "react";

interface BlogBoxProps {
  title: string;
  children: string;
  promotionalLink?: string;
}

const BlogBox: React.FC<BlogBoxProps> = ({
  title,
  children,
  promotionalLink,
}) => {
  return (
    <div className="w-full bg-slate-200 px-4 py-4 rounded-lg">
      <div className="flex justify-between items-center">
        <h1 className="text-black font-sans font-bold capitalize">{title}</h1>
        {promotionalLink && (
          <a
            className="text-primary font-sans font-semibold underline"
            href={promotionalLink}
            target="_blank"
          >
            Tap me
          </a>
        )}
      </div>
      <p className="text-gray-01 font-sans font-normal">{children}</p>
    </div>
  );
};
export default React.memo(BlogBox);
