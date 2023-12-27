import { JumbotronContainer } from "./styles";

export default function HomeJumbotron() {
  return (
    <JumbotronContainer className="w-screen text-text-1 font-bold relative py-32 bg-gray-50 overflow-hidden">
      <div className="pl-4 w-[60%] sm:w-[70%] lg:w-[45%] md:pl-20 lg:pl-40">
        <div className="caption1 text-xl mb-2 md:mb-3 lg:mb-4">
          Kamu lapar atau haus?
        </div>
        <div className="caption2 mb-6 md:mb-8 lg:mb-10">
          Tenang... ada Hangry! yang siap mengatasi
        </div>
        <div className="w-fit flex flex-wrap gap-6 gap-y-2">
          <img
            src="/icons/button_playstore.svg"
            className="h-10 sm:h-12 md:h-14 lg:h-16 sm:block hidden"
          />
          <img
            src="/icons/button_appstore.svg"
            className="h-10 sm:h-12 md:h-14 lg:h-16 block"
          />
        </div>
      </div>
      <img
        src="/images/mockup.png"
        className="absolute lg:left-[60%]"
        data-aos="zoom-in-up"
      />
    </JumbotronContainer>
  );
}
