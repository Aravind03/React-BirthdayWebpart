# spfx-react-birthday-webpart

## Summary

This React-based SPFx web part is designed to showcase employees' birthdays within the organization, with birthdates sourced from their Microsoft 365 user profiles.

![image](https://github.com/Aravind03/React-BirthdayWebpart/assets/10475751/5d3a1488-ef84-4cd0-a2d8-942efb1a6cdc)



## Framework Used

SharePoint Framework ![version](https://img.shields.io/badge/version-1.18.0-green.svg)  NodeJS ![version](https://img.shields.io/badge/version-18.18.2-yellow.svg)
microsoft-graph-toolkit ![version](https://img.shields.io/badge/version-3.1.3-green.svg)


## Applies to

- [SharePoint Framework](https://aka.ms/spfx)
- [Microsoft 365 tenant](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)

> Get your own free development tenant by subscribing to [Microsoft 365 developer program](http://aka.ms/o365devprogram)

## Prerequisites

> Deploy the microsoft graph toolkit to the Microsoft 365 Tenant as mentioned in the below article
> https://learn.microsoft.com/en-us/graph/toolkit/get-started/build-a-sharepoint-web-part#deploy-the-microsoft-graph-toolkit-sharepoint-framework-package
>
> Also, make sure the user profile properties are set as in the below article
> https://support.shortpoint.com/support/solutions/articles/1000264659-shortpoint-people-search-upcoming-birthdays-configuration

## Solution

| Solution    | Author(s)                                               |
| ----------- | ------------------------------------------------------- |
| SPFx React webpart | Aravind Ganesan |

## Version history

| Version | Date             | Comments        |
| ------- | ---------------- | --------------- |
| 1.0     | November 1, 2023 | Initial release |

## Disclaimer

**THIS CODE IS PROVIDED _AS IS_ WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

## Minimal Path to Awesome

- Install the sharepoint graph toolkit in the Tenant
- Clone this repository
- Ensure that you are at the solution folder
- in the command-line run:
  - **npm install**
  - **gulp bundle --ship**
  - **gulp package-solution --ship**
- Deploy the sppkg file within the App Catalog
- Approve the API access
- Add the webpart to the site 

## Features

> Notice that better pictures and documentation will increase the sample usage and the value you are providing for others. Thanks for your submissions advance.

> Share your web part with others through Microsoft 365 Patterns and Practices program to get visibility and exposure. More details on the community, open-source projects and other activities from http://aka.ms/m365pnp.

## References
- https://learn.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-development-environment
- https://learn.microsoft.com/en-us/graph/toolkit/get-started/build-a-sharepoint-web-part
- https://learn.microsoft.com/en-us/graph/toolkit/get-started/mgt-spfx#react
- https://learn.microsoft.com/en-us/graph/toolkit/get-started/mgt-react#templates
- https://learn.microsoft.com/en-us/graph/toolkit/components/person#microsoft-graph-permissions
