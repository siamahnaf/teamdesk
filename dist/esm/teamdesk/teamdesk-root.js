//Controller
import { DescribeTableController } from "./describeTable/controller";
import { SelectTableController } from "./selectTable/controller";
import { SelectViewController } from "./selectView/controller";
import { RetrieveController } from "./retrieve/controller";
import { CreateController } from "./create/controller";
import { DeleteController } from "./delete/controller";
export class TeamdeskRoot {
    //Construct
    constructor(apiClient, baseUrl) {
        //Describe Table
        this.describeTable = {
            uri: (props) => this.describeTableController.getUri(props),
            request: (props) => this.describeTableController.doRequest(props),
        };
        //Select Table
        this.selectTable = {
            uri: (props) => this.selectTableController.getUri(props),
            request: (props) => this.selectTableController.doRequest(props),
        };
        //Select View
        this.selectView = {
            uri: (props) => this.selectViewController.getUri(props),
            request: (props) => this.selectViewController.doRequest(props),
        };
        //Retrieve
        this.retrieve = {
            uri: (props) => this.retrieveController.getUri(props),
            request: (props) => this.retrieveController.doRequest(props),
        };
        //Create
        this.create = {
            uri: (props) => this.createController.getUri(props, "create.json"),
            request: (props) => this.createController.doRequest(props, "create.json"),
        };
        //Update
        this.update = {
            uri: (props) => this.createController.getUri(props, "update.json"),
            request: (props) => this.createController.doRequest(props, "update.json"),
        };
        //Upsert
        this.upsert = {
            uri: (props) => this.createController.getUri(props, "upsert.json"),
            request: (props) => this.createController.doRequest(props, "upsert.json"),
        };
        //Delete
        this.delete = {
            uri: (props) => this.deleteController.getUri(props),
            request: (props) => this.deleteController.doRequest(props),
        };
        this.describeTableController = new DescribeTableController(baseUrl, apiClient);
        this.selectTableController = new SelectTableController(baseUrl, apiClient);
        this.selectViewController = new SelectViewController(baseUrl, apiClient);
        this.retrieveController = new RetrieveController(baseUrl, apiClient);
        this.createController = new CreateController(baseUrl, apiClient);
        this.deleteController = new DeleteController(baseUrl, apiClient);
    }
}
//Create Teamdesk
export const teamdesk = (apiClient, baseUrl) => {
    return new TeamdeskRoot(apiClient, baseUrl);
};
//# sourceMappingURL=teamdesk-root.js.map