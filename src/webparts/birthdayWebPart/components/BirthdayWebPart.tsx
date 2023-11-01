import * as React from 'react';
import styles from './BirthdayWebPart.module.scss';
import type { IBirthdayWebPartProps } from './IBirthdayWebPartProps';
import { Person } from '@microsoft/mgt-react/dist/es6/spfx';
import { PersonCardInteraction, ViewType } from '@microsoft/mgt-spfx';
//import { ViewType } from '@microsoft/mgt-spfx';
import { MgtTemplateProps } from '@microsoft/mgt-react';

export default class BirthdayWebPart extends React.Component<IBirthdayWebPartProps, {}> {
  public render(): React.ReactElement<IBirthdayWebPartProps> {
    
    return (
      <section className={`${styles.birthdayWebPart}`}>
        <>
        <div><h4 style={{ backgroundColor : "powderblue" , width : "100%" ,fontSize: 20, textAlign : 'center'}} >Upcoming Birthdays</h4></div>
        </>
        {
          this.props.userInformation.map((user)=>
          {
            const DisplayBirthDay = (props: MgtTemplateProps) => {
              return <div>{user.birthDate}</div>
            };
            return(
              <>
                <Person personQuery={user.userPrincipalName} personCardInteraction={PersonCardInteraction.hover} view={ViewType.twolines}>
                  <DisplayBirthDay template='line2' />
                </Person>
                <br></br>
              </>
            );
          })
        }
        <div>
        </div>
      </section>
    );
  }
}
