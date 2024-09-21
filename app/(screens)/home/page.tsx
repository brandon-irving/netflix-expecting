import NetflixLoader from "@/components/NetflixLoader";
import dynamic from "next/dynamic";

const NetflixHome = dynamic(() => import("@/components/NetflixHome"), {
  loading: () => <NetflixLoader />,
});

export default function Page() {
  return <NetflixHome />;
}
