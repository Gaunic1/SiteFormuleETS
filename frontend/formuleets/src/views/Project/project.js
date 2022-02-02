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

        startWith: "Chassis with dynamics_animations.133_",
        padStart: true,

        nbImgs: 280,
        extension: "png"
    },

    //text to display
    //always start  at 1
    text: [
        {
            title: "message.project.text.1.title",
            label: "message.project.text.1.label",
            imageCount: 1,
        },
        {
            title: "message.project.text.2.title",
            label: "message.project.text.2.label",
            imageCount: 100,
        },
        {
            title: "message.project.text.3.title",
            label: "message.project.text.3.label",
            imageCount: 200,
        },
    ]
}

export default project;