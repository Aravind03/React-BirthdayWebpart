import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import {
  SPHttpClient,
  SPHttpClientResponse,
} from "@microsoft/sp-http";

import * as strings from 'BirthdayWebPartWebPartStrings';
import BirthdayWebPart from './components/BirthdayWebPart';
import { IBirthdayWebPartProps , IUserInformationProps} from './components/IBirthdayWebPartProps';

import { Providers, SharePointProvider } from "@microsoft/mgt-spfx";

export interface IBirthdayWebPartWebPartProps {
  description: string;
}

const birthdayUserInformation : IUserInformationProps[] = [] ;
let allBirthdayUserInformation : IUserInformationProps[] = [] ;
export default class BirthdayWebPartWebPart extends BaseClientSideWebPart<IBirthdayWebPartWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IBirthdayWebPartProps> = React.createElement(
      BirthdayWebPart,
      {
        userInformation : allBirthdayUserInformation
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected async onInit(): Promise<void> 
  {
    if (!Providers.globalProvider) {
      Providers.globalProvider = new SharePointProvider(this.context);
    }
    const rootSiteUrl=this.context.pageContext.web.absoluteUrl.toString();
    const today = new Date();
    const dateFilter = today.getMonth()+"-"+today.getDate() ;
    const uri = `${rootSiteUrl}/_api/search/query?querytext=%27Birthday%3E%222000-${dateFilter}%22%27&sourceid=%27B09A7990-05EA-4AF9-81EF-EDFAB16C4E31%27&selectproperties=%27Title,AccountName,Birthday,Path%27&sortlist=%27Birthday:ascending%27&rowlimit=12`;
    console.log(uri);
    let birthDate: string ;
    let userPrincipalName: string ;
    const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
    await this.getSearchResult(uri)
      .then((response) => {   
        console.log(response);
        const rowCount = parseInt(response.PrimaryQueryResult.RelevantResults.RowCount);
        if(rowCount > 0)
        {
        (response.PrimaryQueryResult.RelevantResults.Table.Rows).forEach((eachRow: { Cells: any[]; }) =>
          {
            eachRow.Cells.forEach((eachCell: { Key: { toString: () => string; }; Value: { toString: () => string; }; }) => {
              if(eachCell.Key.toString() === "AccountName")
              {
                userPrincipalName = eachCell.Value.toString().replace("i:0#.f|membership|","");
              }
              if(eachCell.Key.toString() === "Birthday" )
              {
                const tempBirthday = new Date(eachCell.Value.toString());
                birthDate = tempBirthday.getUTCDate()+" "+ monthNames[tempBirthday.getMonth()]
              }
            });
            const userProperty: IUserInformationProps = {userPrincipalName : userPrincipalName , birthDate : birthDate};
            console.log(userProperty.userPrincipalName+" "+ userProperty.birthDate);
            birthdayUserInformation.push(userProperty);
        });
        allBirthdayUserInformation = birthdayUserInformation;
        }
    });
  }

  private getSearchResult(uri:string):Promise<any>
  {
    return this.context.spHttpClient
      .get(uri, SPHttpClient.configurations.v1)
      .then((res: SPHttpClientResponse): Promise<any> => {
        return res.json();
      })
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
