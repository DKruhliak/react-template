import { FC, SVGProps } from "react";
import LocationIcon from "./icons/location.svg?react";


const icons = {
  location: LocationIcon,

} as const;

type IconType = keyof typeof icons;

type SvgIconProps = SVGProps<SVGSVGElement> & { type: IconType };

const SvgIcon: FC<SvgIconProps> = ({ type, ...svgProps }) => {
  const Icon = icons[type] ?? null;
  return Icon && <Icon {...svgProps} />;
};

export { SvgIcon };
