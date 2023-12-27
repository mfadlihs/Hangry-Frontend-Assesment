import Button from "@/components/Button";
import Dropdown from "@/components/Dropdown";
import LinkButton from "./LinkButton";
import { HeaderContainer } from "./styles";
import Link from "next/link";
import OverlayDownload from "./OverlayDownload";

export default function Header() {
  return (
    <HeaderContainer className="shadow-md py-6 px-40">
      <Link href="/">
        <img className="h-12 block" src="/logo.svg" />
      </Link>
      <div className="flex gap-x-12 text-text-1 font-medium">
        <LinkButton>Tentang Kami</LinkButton>
        <LinkButton>Semua Outlet</LinkButton>
        <LinkButton>Promo</LinkButton>
        <LinkButton>Karier</LinkButton>
        <Dropdown
          overlay={<OverlayDownload />}
          placement="bottom-start"
          trigger="hover"
        >
          <LinkButton className="text-primary font-bold">
            Download App
          </LinkButton>
        </Dropdown>
      </div>
    </HeaderContainer>
  );
}
