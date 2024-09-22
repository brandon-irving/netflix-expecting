export const defaultUrl =
  "https://storage.googleapis.com/mega-coders.appspot.com/baby-announcement";

export const getVideoUrl = (name: string) => `${defaultUrl}/videos/${name}`;

export const getImageUrl = (name: string) => `${defaultUrl}/images/${name}`;
