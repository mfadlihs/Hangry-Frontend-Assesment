import HomeBrand from "./brand";
import HomeFound from "./found";
import HomeJumbotron from "./jumbotron";
import HomeOrder from "./order";
import { HomePadding } from "./styles";

export default function HomePage() {
  return (
    <div>
      <HomeJumbotron />
      <HomePadding>
        <HomeBrand />
        <HomeFound />
        <HomeOrder />
      </HomePadding>
    </div>
  );
}
