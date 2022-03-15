const project = {
    //animation speed
    speed: 8,
    phoneSpeed: 10,

    //Speed of scroll when automatic button is pressed
    autoSpeed: 100,
    
    //dont show at the start the 3d model
    appearAndDisapear: true,

    //3d model
    images: {
        directory: "/static/formule/",

        startWith: "Render",
        padStart: false,

        nbImgs: 938,
        extension: "png"
    },

    //text to display
    //always start  at 1
    text: [
        {
            title: "message.project.text.chassis.title",
            label: "message.project.text.chassis.label",
            imageCount: 1,
        },
        {
            title: "message.project.text.chassis.title",
            label: "message.project.text.chassis.label",
            imageCount: 125,
        },
        {
            title: "message.project.text.power_drive.title",
            label: "message.project.text.power_drive.label",
            imageCount: 285,
        },
        {
            title: "message.project.text.dynamics.title",
            label: "message.project.text.dynamics.label",
            imageCount: 465,
        },
        {
            title: "message.project.text.electronics.title",
            label: "message.project.text.electronics.label",
            imageCount: 630,
        },
        {
            title: "message.project.text.aerodynamics.title",
            label: "message.project.text.aerodynamics.label",
            imageCount: 790,
        },
    ]
}

export default project;