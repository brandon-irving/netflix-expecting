import NetflixHomeScreenLoader from "@/components/NetflixHome/NetflixHomeScreenLoader";
import dynamic from "next/dynamic";

const NetflixHome = dynamic(() => import("@/components/NetflixHome"), {
  loading: () => <NetflixHomeScreenLoader />,
});

export default function Page() {
  return <NetflixHome />;
}
