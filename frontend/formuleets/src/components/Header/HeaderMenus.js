const HeaderMenus = [
    {
        name: "À propos de nous",
        to: "/"
    },
    {
        name: "Le projet",
        to: "/project"
    },
    {
        name: "L'équipe",
        to: "/team"
    },
    {
        name: "Commanditaires",
        to: "/sponsors"
    },
    {
        name: "Faire un don",
        to: "/donate"
    },
    {
        name: "Nous rejoindre",
        to: "/join-us"
    },
    {
        name: "Média",
        type: "dropdown",
        menus: [
            {
                name: "Photos",
                to: "/media/photos"
            },
            {
                name: "Videos",
                to: "/media/videos"
            },
        ]
    },
    {
        name: "Blog",
        to: "/blog"
    }
];

export default HeaderMenus;