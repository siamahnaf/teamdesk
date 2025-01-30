<br/>
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://res.cloudinary.com/dub0dpenl/image/upload/v1731780157/Personal%20Logo/logo-white_e6fujz.png">
  <source media="(prefers-color-scheme: light)" srcset="https://res.cloudinary.com/dub0dpenl/image/upload/v1731780152/Personal%20Logo/logo-dark_qqwrqu.png">
  <img alt="Siam Ahnaf" src="https://res.cloudinary.com/dub0dpenl/image/upload/v1731780152/Personal%20Logo/logo-dark_qqwrqu.png" height="auto" width="240">
</picture> 
<br/> <br/>

# @siamf/teamdesk
A Node.js TeamDesk API client for placing API requests directly to TeamDesk from Node.js. It supports almost all teamdesk api method and query params

<a href="https://www.buymeacoffee.com/siamahnaf" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

- Small Size
- All Available Teamdesk Method
- Place request or create URI

# Installation

```bash
$ npm i @siamf/teamdesk
```

```javascript
import { initTeamdesk } from "@siamf/teamdesk";

type Table = "GYM" | "Siam Test";

const teamdesk = initTeamdesk<Table>({
    baseUrl: "https://teamdesk.net/secure/api/v2", //Teamdesk Base URL
    databaseNo: 96301, //Teamdesk Database Number
    token: "teamdesk api token", //Teamdesk API token
});

interface Generated {
    id?: string;
    name?: string;
    description?: string;
    culture?: string;
    timeZone?: string;
    logo?: number;
}

//Generate URL
const url = teamdesk.describeTable.uri({
    table: "Table Name"
})
console.log(url);

//Place API Request
const { data, error } = await teamdesk.describeTable.request<Generated>({
    table: "Table Name"
});

console.log(data);
console.log(error);

```

# Documentations

Please see the teamdesk API [docs](https://www.teamdesk.net/help/rest-api/) for details use.

# Stay in touch

- Author - [Siam Ahnaf](https://www.siamahnaf.com/)
- Website - [https://www.siamahnaf.com/](https://www.siamahnaf.com/)
- Github - [https://github.com/siamahnaf](https://github.com/siamahnaf)
