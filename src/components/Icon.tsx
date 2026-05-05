import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  icon: string;
};

const Icon = ({ icon, ...attrs }: IconProps) => {
  return (
    <svg {...attrs}>
      <use href={`/__spritemap#sprite-${icon}`}></use>
    </svg>
  );
};

export default Icon;
