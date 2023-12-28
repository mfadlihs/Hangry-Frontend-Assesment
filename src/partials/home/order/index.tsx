import Icon from "@/components/Icon";
import { OrderContainer } from "./styles";
import Image from "next/image";
import Button from "@/components/Button";

export default function HomeOrder() {
  return (
    <OrderContainer className="md:flex-row gap-y-4 md:items-center flex-col-reverse gap-x-2">
      <div className="basis-[50%]">
        <h2>Makin rame, makin hemat!</h2>
        <div data-aos="fade" className="caption">
          Nikmati keuntungan dengan minimum pembelian 20 porsi menu apa aja.
          Cocok untuk hidangan segala acara!
        </div>
        <div className="diskon flex flex-col gap-y-7">
          <div data-aos="zoom-out-right" className="flex items-start gap-x-1">
            <Icon size={24} name="check" />
            <div>
              <div className="opp">Beragam pilihan menu</div>
            </div>
          </div>
          <div data-aos="zoom-out-right" className="flex items-start gap-x-1">
            <Icon size={24} name="check" />
            <div>
              <div className="opp">Semua menu diskon 20%</div>
            </div>
          </div>
          <div data-aos="zoom-out-right" className="flex items-start gap-x-1">
            <Icon size={24} name="check" />
            <div>
              <div className="opp">Gratis biaya kirim</div>
              <div>*Syarat & ketentuan berlaku</div>
            </div>
          </div>
        </div>
        <Button className="md:w-auto w-full">Pesan Sekarang</Button>
      </div>
      <div className="relative w-full md:w-auto h-[200px] sm:h-[300px] xs:h-[280px] lg:h-[320px] md:h-[280px] xl:h-[400px] rounded-lg md:rounded-2xl lg:rounded-3xl overflow-hidden md:basis-[50%]">
        <Image
          fill
          src="/images/order.jpg"
          className="object-cover"
          alt="order"
          data-aos="fade-in"
        />
      </div>
    </OrderContainer>
  );
}
