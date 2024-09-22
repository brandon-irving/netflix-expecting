import { NetflixRowProps } from "@/components/NetflixHome/NetflixRow";
import { Top10ItemProps } from "@/components/NetflixHome/NetflixTopTen";

const dimmedOpacity = 0.7;
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
        "He watches anime and programs computers, she likes to dress up and go on adventures. Watch as Lovie tries to break Brandon out of his shell and into the real world in this romantic comedy!",
    },
    {
      title: "Double the trouble!",
      src: "_doubleTheTrouble.png",
      opacity: dimmedOpacity,
      description:
        "Akari and Anela, twins ready to cause mayhem. 2 children, one objective. Watch as this lovable duo take the world by storm",
    },
    {
      title: "Black and Educated",
      src: "_educated.png",
      opacity: dimmedOpacity,
      objectFit: "fill",
      description:
        "A documentary following the academic challenges and success of Brandon and Lovie. Get to know the man who became an engineer and the woman who became the valedictorian",
    },
    {
      title: "Explore the world",
      src: "_exploreTheWorld.png",
      opacity: dimmedOpacity,
      description:
        "Brandon takes his son Akari around the world and teaches him lessons on life, love and everything in between. Watch this thought provoking tale of passion and love",
    },
    {
      title: "007-Irving",
      src: "lovie-13.jpg",
      description:
        "Senior operative Brandon Irving takes Lovie under his wing as a spy in training. She joins him on his toughest mission yet, will they overcome it together?",
    },
    {
      title: "Warriors in arms",
      src: "_warriorsDAA.JPG",
      opacity: dimmedOpacity,
      objectFit: "fill",
      description:
        "Brandon and his twin kids are trapped in a world much like their VR video game. Watch as this family overcome all obstacles in an attempt to make it back to their world!",
    },
    {
      title: "Strong like dad",
      src: "_strongLikeDad.png",
      objectFit: "fill",
      description:
        "Anela takes a liking to fighting and finds out her father is a trained combat specialist. Watch as she trains to become as deadly, if not even deadlier than her father!",
    },
    {
      title: "Thugs in training",
      src: "_theToughGues.png",
      opacity: dimmedOpacity,
      description:
        "Hardened thug Brandon Irving life changes once his twins come live with him. Watch as he tries to teach them the streets and they teach him to love!",
    },
    {
      title: "Dat's just my baby daddy",
      src: "_lnb.png",
      opacity: dimmedOpacity,
      objectFit: "fill",
      description:
        "In this fun loving romantic comedy, Lovie has one rule: No love. She's been hurt too many times to let another man get close. Her rule gets ignored by a man motivated by love.",
    },
    {
      title: "Of all the airs and graces ❤️",
      src: "bae1.png",
      opacity: dimmedOpacity,
      description:
        "Heartbreak, reunion, faith and love. We follow the intricate ups and downs of love and how Brandon and Lovie made it work against all odds",
    },
  ],
  top10: {
    title: "Our family!",
    data: [
      {
        title: "Brandon",
        src: "_brandon.JPG",
        priority: true,
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
