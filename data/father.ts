import { NetflixRowProps } from "@/components/NetflixHome/NetflixRow";
import { Top10ItemProps } from "@/components/NetflixHome/NetflixTopTen";

export const fatherRowData: {
  rowTitle: string;
  rowPosters: NetflixRowProps["data"];
  top10: { title: string; data: Top10ItemProps[] };
} = {
  rowTitle: "Daddy's Home",
  rowPosters: [
    {
      priority: true,
      title: "Irving Boys",
      src: "brothers1.png",
      description:
        "Brandon, Chris, Christian and Los makes up the world's greatest team of brothers. In this action packed adventure",
    },
    {
      title: "Never too old to turn up!",
      src: "bAndAriAndNiyah.png",
      description:
        "In this light hearted film, watch as Aniyah and Arianna teach Brandon how to turn up!",
    },
    {
      title: "A mother's love",
      src: "momAndB.png",
      description:
        "In this light hearted film, watch as Aniyah and Arianna teach Brandon how to turn up!",
    },
    {
      title: "Pride and joy", // asia
      src: "_prideAndJoy.png",
      description:
        "In this light hearted film, watch as Aniyah and Arianna teach Brandon how to turn up!",
    },
    {
      title: "How to become a millionaire", // christian
      src: "christianAndBrandon1.png",
      description:
        "In this light hearted film, watch as Aniyah and Arianna teach Brandon how to turn up!",
    },
    {
      title: "Life of the party", // los
      src: "_lifeOfTheParty.png",
      description:
        "In this light hearted film, watch as Aniyah and Arianna teach Brandon how to turn up!",
    },
    {
      title: "My brothers keeper", // Shawana
      src: "_myBrothersKeeper.JPG",
      description:
        "In this light hearted film, watch as Aniyah and Arianna teach Brandon how to turn up!",
    },
    {
      title: "Orlando's finest", // Alyssa
      src: "_orlandosFinest.png",
      description:
        "In this light hearted film, watch as Aniyah and Arianna teach Brandon how to turn up!",
    },
    {
      title: "A family made of diamonds", // Family
      src: "_familyOfDiamonds.png",
      description:
        "In this light hearted film, watch as Aniyah and Arianna teach Brandon how to turn up!",
    },
  ],
  top10: {
    title: "Meet the family!",
    data: [
      {
        title: "Mommy",
        src: "mommy1.png",

        tidbit: "The GOAT",
      },
      {
        title: "Brandon",
        src: "_brandon.MOV",

        tidbit: "The Tech Head",
      },
      {
        title: "Shawana",
        src: "_shawana.JPG",

        tidbit: "The Firecracker",
      },
      {
        title: "Alyssa",
        src: "alyssa.JPG",

        tidbit: "The Smarty",
      },
      {
        title: "Chris",
        src: "_chris.jpeg",

        tidbit: "The Free Spirit",
      },
      {
        title: "Christian",
        src: "_christian.png",

        tidbit: "The Focused One",
      },
      {
        title: "Carlos",
        src: "_los.JPG",

        tidbit: "The Baby Boy",
      },
      {
        title: "Aaliyah",
        src: "_liyah.JPG",

        tidbit: "The Fun One",
      },
      {
        title: "Asia",
        src: "_asia.png",

        tidbit: "The Talented One",
      },
      {
        title: "Aniyah",
        src: "_aniyah.png",

        tidbit: "The Lovable One",
      },
      {
        title: "Arianna",
        src: "_ariana.png",

        tidbit: "The Baby Girl",
      },
    ],
  },
};
