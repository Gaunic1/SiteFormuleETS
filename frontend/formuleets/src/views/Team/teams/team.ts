type Team = {
  title: string;
  categories: {
    name: "message.team.management";
    members: {
      img: string;
      fullName: string;
      role: string;
      mail: string;
      linkedin: string;
    }[];
  }[];
};

export default Team;
