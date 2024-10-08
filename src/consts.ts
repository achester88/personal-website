// This is your config file, place any global data here.
// You can import this data from anywhere in your site by using the `import` keyword.

type Config = {
  title: string;
  description: string;
  lang: string;
  profile: {
    author: string;
    description?: string;
  }
}

type SocialLink = {
  icon: string;
  friendlyName: string; // for accessibility
  link: string;
}

export const siteConfig: Config = {
  title: "achester88",
  description: "",
  lang: "en-US",
  profile: {
    author: "Anthony Chester",
    description: "High School Senior, Programmer, and More"
  }
}

/** 
  These are you social media links. 
  It uses https://github.com/natemoo-re/astro-icon#readme
  You can find icons @ https://icones.js.org/
*/
export const socialLinks: Array<SocialLink> = [
  {
    icon: "mdi:github",
    friendlyName: "Github",
    link: "https://github.com/achester88",
  },
  /*{
    icon: "mdi:linkedin",
    friendlyName: "LinkedIn",
    link: "#",
  },*/
  {
    icon: "mdi:email",
    friendlyName: "email",
    link: "mailto:anthonychester71@gmail.com",
  },
  {
    icon: "mdi:rss",
    friendlyName: "rss",
    link: "/rss.xml"
  }
];

export const NAV_LINKS: Array<{ title: string, path: string }> = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Projects",
    path: '/projects'
  },
  {
    title: "Archive",
    path: '/archive'
  }
];
