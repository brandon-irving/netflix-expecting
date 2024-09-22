import { getImageUrl, getVideoUrl } from "@/data/bucket";
import Image from "next/image";

export type Top10ItemProps = {
  rank?: number;
  title: string;
  src: string;
  tidbit: string;
};
const Top10Item = ({ rank, title, src, tidbit }: Top10ItemProps) => (
  <div className="relative flex-shrink-0 w-[230px] h-[260px] mr-2">
    <div
      id="rank"
      className="absolute inset-y-0 left-0 w-[40%] flex items-center justify-center z-10"
    >
      <span
        className="text-[180px] font-bold leading-none text-black opacity-90"
        style={{ WebkitTextStroke: "2px #404040" }}
      >
        {rank}
      </span>
    </div>
    <div id="src" className=" z-2 absolute inset-y-0 right-0 w-[75%]">
      {src.includes(".MOV") ? (
        <video
          src={getVideoUrl(src)}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          Your browser does not support the video tag.
        </video>
      ) : (
        <Image
          height={260}
          width={173}
          src={getImageUrl(src)}
          alt={title}
          className="w-full h-full object-cover rounded-md"
        />
      )}

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
        <h3 className="text-white text-lg font-bold">{title}</h3>
        {tidbit && (
          <span className="bg-red-600 text-white text-xs px-2 py-1 rounded  inline-block">
            {tidbit}
          </span>
        )}
      </div>
    </div>
  </div>
);

export default function NetflixTop10({
  top10,
}: {
  top10: { title: string; data: Top10ItemProps[] };
}) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-white">{top10.title}</h2>
      <div className="relative">
        <div className="flex overflow-x-auto pb-8 pt-4">
          {top10.data.map((item, index) => (
            <Top10Item
              key={index + item.title}
              rank={index + 1}
              title={item.title}
              src={item.src}
              tidbit={item.tidbit}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
