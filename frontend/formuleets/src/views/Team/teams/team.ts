type Team = {
  title: string;
  categories: {
    name: string;
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
