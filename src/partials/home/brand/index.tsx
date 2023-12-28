import { BrandContainer } from "./styles";
import data from "./dummy.json";
import CardBrand from "./CardBrand";

export default function HomeBrand() {
  return (
    <BrandContainer>
      <h2>Hangry! adalah restoran dengan beragam brand</h2>
      <div className="caption mb-6 md:mb-8">
        Kami menyajikan beragam brand untuk menemani setiap waktu santapmu
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 sm:gap-x-8 gap-y-4 md:gap-x-5 gap-x-3 lg:gap-x-7">
        {data.map((e) => (
          <CardBrand data={e} key={e.id} />
        ))}
      </div>
    </BrandContainer>
  );
}
