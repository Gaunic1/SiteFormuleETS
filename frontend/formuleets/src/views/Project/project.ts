const project = {
  //animation speed
  speed: 10,
  phoneSpeed: 10,

  //Speed of scroll when automatic button is pressed
  autoSpeed: 100,

  //dont show at the start the 3d model
  appearAndDisapear: true,

  //3d model
  images: {
    directory: "/static/formule/",

    startWith: "",
    padStart: false,

    nbImgs: 770,
    extension: "png",
  },

  //text to display
  //always start  at 1
  text: [
    //Never delete this one
    {
      title: "message.project.default.animation",
      label: "message.project.default.label",
      imageCount: 0,
    },
    //end

    {
      title: "message.project.text.dynamics.title",
      label: "message.project.text.dynamics.label",
      imageCount: 1,
    },
    {
      title: "message.project.text.electronics.title",
      label: "message.project.text.electronics.label",
      imageCount: 113,
    },
    {
      title: "message.project.text.chassis.title",
      label: "message.project.text.chassis.label",
      imageCount: 250,
    },
    {
      title: "message.project.text.power_drive.title",
      label: "message.project.text.power_drive.label",
      imageCount: 386,
    },
    {
      title: "message.project.text.aerodynamics.title",
      label: "message.project.text.aerodynamics.label",
      imageCount: 533,
    },
    {
      title: "message.project.text.thank.title",
      label: "message.project.text.thank.label",
      imageCount: 653,
    },
  ],
};

export default project;
