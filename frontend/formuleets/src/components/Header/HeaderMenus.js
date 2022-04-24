const HeaderMenus = [
    {
        name: "message.header.aboutus",
        to: "/"
    },
    {
        name: "message.header.project",
        to: "/project"
    },
    {
        name: "message.header.team",
        to: "/team"
    },
    {
        name: "message.header.sponsors",
        to: "/sponsors"
    },
    {
        name: "message.header.donate",
        to: "/donate"
    },
    {
        name: "message.header.media",
        type: "dropdown",
        menus: [
            {
                name: "message.header.pictures",
                to: "/media/photos"
            },
            {
                name: "message.header.movies",
                to: "/media/videos"
            },
        ]
    },
    {
        name: "message.header.contact-us",
        to: "/contact-us"
    },
    // {
    //     name: "message.header.model",
    //     to: "/3d-model"
    // }
];

export default HeaderMenus;