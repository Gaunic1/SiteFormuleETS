const project = {
    //animation speed
    speed: 5,
    phoneSpeed: 7,
    
    //dont show at the start the 3d model
    appearAndDisapear: true,

    //3d model
    images: {
        directory: "/static/formule/",
        nbImgs: 35,
        extension: "jpg"
    },

    //text to display
    //always start  at 2
    text: [
        {
            title: "message.project.text.1.title",
            label: "message.project.text.1.label",
            imageCount: 1,
        },
        {
            title: "message.project.text.2.title",
            label: "message.project.text.2.label",
            imageCount: 17,
        },
    ]
}

export default project;