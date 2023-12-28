import { Brand } from "@/models/brand";
import Image from "next/image";
import { CardBrandContainer } from "../styles";
import Icon from "@/components/Icon";

interface CardBrandProps {
  data: Brand;
}

export default function CardBrand({ data }: CardBrandProps) {
  return (
    <CardBrandContainer className={`${data.id == 4 && "block md:hidden"}`}>
      <div className="relative">
        <Image
          quality={80}
          src={data.thumbnail}
          fill
          alt={data.title}
          loading="lazy"
        />
      </div>
      <div className="flex items-center gap-x-1">
        <div className="title">{data.title}</div>
        <Icon name="arrow-right" />
      </div>
      <p>
        {data.food} · {data.country}
      </p>
    </CardBrandContainer>
  );
}
