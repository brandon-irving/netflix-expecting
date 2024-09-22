import { NetflixRowProps } from "@/components/NetflixHome/NetflixRow";
import { Top10ItemProps } from "@/components/NetflixHome/NetflixTopTen";

export const ourFamilyRowData: {
  rowTitle: string;
  rowPosters: NetflixRowProps["data"];
  top10: { title: string; data: Top10ItemProps[] };
} = {
  rowTitle: "Our journey",
  rowPosters: [
    {
      title: "The ratchet and nerdy",
      src: "_nerdyAndRatchet.jpeg",
      description:
        "Brandon, Chris, Christian and Los makes up the world's greatest team of brothers. In this action packed adventure",
    },
    {
      title: "Double the trouble!",
      src: "_doubleTheTrouble.png",
      description:
        "In this light hearted film, watch as Aniyah and Arianna teach Brandon how to turn up!",
    },
    {
      title: "Black and Educated",
      src: "_educated.png",
      opacity: 75,
      objectFit: "fill",
      description:
        "In this light hearted film, watch as Aniyah and Arianna teach Brandon how to turn up!",
    },
    {
      title: "Explore the world",
      src: "_exploreTheWorld.png",
      description:
        "In this light hearted film, watch as Aniyah and Arianna teach Brandon how to turn up!",
    },
    {
      title: "Irving Elegance", // asia
      src: "lovie-13.jpg",
      description:
        "In this light hearted film, watch as Aniyah and Arianna teach Brandon how to turn up!",
    },
    {
      title: "Warriors in arms", // christian
      src: "_warriorsDAA.JPG",
      opacity: 75,
      objectFit: "fill",
      description:
        "In this light hearted film, watch as Aniyah and Arianna teach Brandon how to turn up!",
    },
    {
      title: "A daughters love",
      src: "_strongLikeDad.png",
      objectFit: "fill",
      description:
        "In this light hearted film, watch as Aniyah and Arianna teach Brandon how to turn up!",
    },
    {
      title: "Thugs in training",
      src: "_theToughGues.png",
      description:
        "In this light hearted film, watch as Aniyah and Arianna teach Brandon how to turn up!",
    },
    {
      title: "Dat's just my baby daddy",
      src: "_lnb.png",
      opacity: 75,
      objectFit: "fill",
      description:
        "In this light hearted film, watch as Aniyah and Arianna teach Brandon how to turn up!",
    },
    {
      title: "Of all the airs and graces ❤️",
      src: "bae1.png",
      opacity: 75,
      description:
        "In this light hearted film, watch as Aniyah and Arianna teach Brandon how to turn up!",
    },
  ],
  top10: {
    title: "Our family!",
    data: [
      {
        title: "Brandon",
        src: "_brandon.JPG",

        tidbit: "Da Pappy",
      },

      {
        title: "Lovie",
        src: "lovie-14.jpg",

        tidbit: "The Mom",
      },

      {
        title: "Akari",
        src: "_akari.png",

        tidbit: "The Ninja",
      },
      {
        title: "Anela",
        src: "_anela.png",

        tidbit: "The Princess",
      },
      {
        title: "?????",
        src: "_mainCharacter.webp",

        tidbit: "The Main Character",
      },
    ],
  },
};
