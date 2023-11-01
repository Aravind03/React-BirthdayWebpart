export interface IBirthdayWebPartProps {
  userInformation : IUserInformationProps[];
}

export interface IUserInformationProps {
  userPrincipalName : string;
  birthDate : string;
  displayName : string;
}
