import { gql } from "@apollo/client";

export const getProfileAndSocialData = gql`
  query getProfileAndSocialData {
    profile {
      Display_Name
      email
      PhoneNumber
      DateOfBirth
      school_email
      profile_image {
        url
        height
        width
      }
    }
    social {
      GitHub
      Instagram
      Twitter
    }
  }
`;

export const getProjects = gql`
  query getProjects {
    projects {
      Title
      Type
      Cover {
        url
      }
      tags {
        name
      }
      GitLink
    }
  }
`;
