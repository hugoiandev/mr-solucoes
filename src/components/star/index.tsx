import { Image } from "react-bootstrap";
import StarIcon from "../../assets/icons/star.svg";

const Star = (): JSX.Element => {
  return (
    <div className="d-flex gap-2">
      <Image width={20} src={StarIcon} />
      <Image width={20} src={StarIcon} />
      <Image width={20} src={StarIcon} />
      <Image width={20} src={StarIcon} />
      <Image width={20} src={StarIcon} />
    </div>
  );
};

export default Star;
