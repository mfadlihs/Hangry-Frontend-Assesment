import Loading from "@/components/Loading";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";

const HomePage: NextPage = dynamic(() => import("@/partials/home"), {
  loading: () => <Loading />,
});

export default HomePage;
