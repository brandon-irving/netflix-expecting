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
      title: "Pride and joy",
      src: "_prideAndJoy.png",
      description:
        "Follow Asia Irving as her journey from Highschool to College athlete begins. With her Brothers support and guidance she's ready for any challenge!",
    },
    {
      title: "How to become a millionaire",
      src: "christianAndBrandon1.png",
      description:
        "These 2 brilliant minds come together and take the world by storm, in this serious drama. Watch as Brandon and Christian take on the coorporate elites and become Millionaires!",
    },
    {
      title: "Life of the party",
      src: "_lifeOfTheParty.png",
      description:
        "Can't nobody party like an Irving! Watch as the older Irving kids get litty!",
    },
    {
      title: "My brothers keeper",
      src: "_myBrothersKeeper.JPG",
      description:
        "Shawana gives it her all to keep her brother Brandon out of trouble in this action packed comedy!",
    },
    {
      title: "Orlando's finest",
      src: "_orlandosFinest.png",
      description:
        "Orlando is not ready for the dynamic duo, Brandon and Alyssa. In this nail biting suspense, watch as this brother and sister take control of the city!",
    },
    {
      title: "A family made of diamonds",
      src: "_familyOfDiamonds.png",
      description:
        "From talent, to brains. From brawn to beauty. This family has it all! Watch as you get to know the family of diamonds in this heart warming documentary",
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
