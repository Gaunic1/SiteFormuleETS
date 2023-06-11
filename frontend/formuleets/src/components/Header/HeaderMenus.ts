type SimpleMenu = {
  name: string;
  to: string;
};

type DropDownMenu = {
  name: string;
  type: "dropdown";
  menus: SimpleMenu[];
};

type HeaderMenu = SimpleMenu | DropDownMenu;

const HeaderMenus: HeaderMenu[] = [
  {
    name: "message.header.aboutus",
    to: "/",
  },
  {
    name: "message.header.project",
    to: "/project",
  },
  {
    name: "message.header.team",
    to: "/team",
  },
  {
    name: "message.header.sponsors",
    to: "/sponsors",
  },
  {
    name: "message.header.donate",
    to: "/donate",
  },
  {
    name: "message.header.media",
    type: "dropdown",
    menus: [
      {
        name: "message.header.pictures",
        to: "/media/photos",
      },
      {
        name: "message.header.movies",
        to: "/media/videos",
      },
    ],
  },
  {
    name: "message.header.contact-us",
    to: "/contact-us",
  },
];

export default HeaderMenus;
export { HeaderMenu, SimpleMenu, DropDownMenu };
