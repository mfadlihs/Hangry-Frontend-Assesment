import LinkButton from "../LinkButton";
import { Hamburger, NavContainer } from "./styles";
import { useState } from "react";

export default function HeaderMobile() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <NavContainer
        active={open}
        className="text-slate-50 text-xl flex justify-center items-center flex-col gap-y-4 font-medium"
      >
        <div>Tentang Kami</div>
        <div>Kontak Kami</div>
        <div>Lokasi Outlet</div>
        <div>Kemitraan</div>
        <div>Investasi</div>
        <div>Karir</div>
        <div>Download App</div>
      </NavContainer>
      <div className="md:hidden flex">
        <LinkButton className="text-primary hidden xs:block font-bold">
          Download
        </LinkButton>
        <Hamburger
          onClick={() => {
            setOpen(!open);
          }}
          active={open}
          name={open ? "add" : "menu"}
          size={24}
        />
      </div>
    </>
  );
}
