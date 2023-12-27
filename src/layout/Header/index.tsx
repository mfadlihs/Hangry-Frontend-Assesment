import Button from "@/components/Button";
import Dropdown from "@/components/Dropdown";
import LinkButton from "./LinkButton";
import { HeaderContainer } from "./styles";
import Link from "next/link";
import OverlayDownload from "./OverlayDownload";
import HeaderMobile from "./HeaderMobile";
import useContainerDimensions from "@/hooks/useContainerDimensions";
import { useRef } from "react";

export default function Header() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { height } = useContainerDimensions(containerRef);
  return (
    <>
      <HeaderContainer
        ref={containerRef}
        className="shadow-md text-sm md:text-base lg:py-6 md:py-4 py-3 md:px-12 px-4 xs:px-8 sm:px-12 lg:px-28 xl:px-40"
      >
        <Link href="/">
          <img
            className="h-6 sm:h-8 md:h-10 lg:h-11 xl:h-12 block"
            src="/logo.svg"
          />
        </Link>
        <HeaderMobile />
        <div className="hidden md:flex md:gap-x-6 lg:gap-x-8 xl:gap-x-12 text-text-1 font-medium">
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
      <div style={{ height }} />
    </>
  );
}
