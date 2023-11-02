import * as React from 'react';
import styles from './BirthdayWebPart.module.scss';
import type { IBirthdayWebPartProps } from './IBirthdayWebPartProps';
import { Person } from '@microsoft/mgt-react/dist/es6/spfx';
import { PersonCardInteraction, ViewType } from '@microsoft/mgt-spfx';
import { MgtTemplateProps } from '@microsoft/mgt-react';
export default class BirthdayWebPart extends React.Component<IBirthdayWebPartProps, {}> {
  public render(): React.ReactElement<IBirthdayWebPartProps> {
    return (
      <section className={`${styles.birthdayWebPart}`}>
        <>
        <div style={{ backgroundColor : "powderblue" , width : "100%" ,fontSize: 20, textAlign : 'center', fontFamily : 'var(--default-font-family, "Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif)'}} ><b>Upcoming Birthdays</b></div>
        </>
        {
          this.props.userInformation.map((user)=>
          {
            const DisplayBirthDay = (props: MgtTemplateProps) => {
              return(
                <>
                <table>
                  <tr>
                    <td>
                    <img alt="" src={require('./candle.png')} width={25} height={25}/>
                    </td>
                    <td>
                    <div style={{color : 'black', paddingTop: -10}}>{user.birthDate}</div>
                    </td>
                  </tr>
                </table>
                </>
              )
            };
            return(
              <>
                <br></br>
                <Person personQuery={user.userPrincipalName} personCardInteraction={PersonCardInteraction.hover} view={ViewType.twolines} showPresence >
                  <DisplayBirthDay template='line2' />
                </Person>
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
