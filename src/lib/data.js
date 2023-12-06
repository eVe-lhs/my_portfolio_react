// import { gql } from "@apollo/client";

// export const getProfileAndSocialData = gql`
//   query getProfileAndSocialData {
//     profile {
//       Display_Name
//       email
//       PhoneNumber
//       DateOfBirth
//       school_email
//       profile_image {
//         url
//         height
//         width
//       }
//     }
//     social {
//       GitHub
//       Instagram
//       Twitter
//     }
//   }
// `;

// export const getProjects = gql`
//   query getProjects {
//     projects {
//       Title
//       Type
//       Cover {
//         url
//       }
//       tags {
//         name
//       }
//       GitLink
//     }
//   }
// `;
export const data = {
  profile: {
    primary_email: "linhtetswe2012@gmail.com",
    PhoneNumber: "+959785294393",
    secondary_email: "linhtetswe@uit.edu.mm",
    date_of_birth: "2001, June, 20",
    profile_image:
      "https://res.cloudinary.com/ds8acpjy1/image/upload/v1629370327/medium_FB_IMG_1629369937177_64a790c8e1.jpg",
  },

  social_media: {
    facebook: "www.facebook.com",
  },
};

export const projects = [
  {
    type: "Web",
    tags: ["Java-Script", "HTML/CSS", "PHP"],
    shortDes: "Entertainment Website for teens",
    title: "4 in 1",
    gitlink: "https://github.com/eVe-lhs/4teen",
    image:"projectCovers/4-teen.png"
  },
  {
    type: "Others",
    tags: ["Java-Script", "Prolog", "PHP"],
    shortDes: "Basic AI app using prolog",
    title: "find-ideal-love",
    gitlink: "https://github.com/eVe-lhs/find-ideal-love",
    image:"projectCovers/idealLove.jpg"
  },
  {
    type: "Web",
    tags: ["Java-Script", "HTML/CSS", "ReactJS"],
    shortDes: "My very own portfolio website",
    title: "My Portfolio",
    gitlink: "https://github.com/eVe-lhs/my_portfolio_react",
    project_link: "https://info.linhtetswe.online",
    image:"projectCovers/portfolio.png"
  },
  {
    type: "Web",
    tags: ["Web", "ReactJS", "Python", "Flask"],
    title: "Leaflet",
    shortDes: "A platform to share contents",
    gitlink: "https://github.com/eVe-lhs/blog-frontend",
    project_link: "https://leaflet-uit.netlify.app/home",
    image:"projectCovers/leaflet.png"
  },
  {
    type: "Native Apps",
    tags: ["Computer Vision", "Python"],
    shortDes:
      "2-steps campus entrance verification and license detection for Myanmar plates",
    title: "Campus Entrance Security",
    gitlink: "https://github.com/eVe-lhs/campus-entrance-verification-system",
    image:"projectCovers/cv.png"
  },
  {
    type: "Others",
    tags: ["Automation", "Ansible", "YAML"],
    shortDes: "Configuration management using ansible on linux server",
    title: "Automating user and mysql database",
    gitlink: "https://github.com/eVe-lhs/ansible",
    image:"projectCovers/ansible.png"
  },
  {
    type: "Web",
    tags: ["Java-Script", "HTML/CSS", "PHP", "Laravel"],
    shortDes: "A platform for tailors and customers",
    title: "At-htal",
    gitlink: "https://github.com/eVe-lhs/at-htal",
    image:"projectCovers/at-htel.png"
  },
  {
    type: "Others",
    tags: ["Data Analysis", "Python"],
    shortDes: "Analyst and predict classes on youtube video metadata",
    title: "Youtube Analysis",
    project_link:
      "https://colab.research.google.com/drive/1acoKctG-655YB952-Y90bwiSswj_2_3E",
    image:"projectCovers/python.png"
  },
];