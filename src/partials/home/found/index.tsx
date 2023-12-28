import { FoundContainer } from "./styles";

export default function HomeFound() {
  return (
    <FoundContainer>
      <h2>Hangry! dapat kamu temukan di</h2>
      <div className="grid grid-cols-4">
        <img data-aos="flip-left" src="/images/gofood.png" />
        <img data-aos="flip-left" src="/images/grabfood.png" />
        <img data-aos="flip-left" src="/images/zomato.png" />
        <img data-aos="flip-left" src="/images/traveloka.png" />
      </div>
    </FoundContainer>
  );
}
