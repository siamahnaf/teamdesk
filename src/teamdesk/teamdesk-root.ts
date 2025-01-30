import { Axios } from "axios";

//Tables Types
import { SDescribeTable } from "./describeTable/types";
import { SSelectTable } from "./selectTable/types";
import { SSelectView } from "./selectView/types";
import { SRetrieve } from "./retrieve/types";
import { SCreate } from "./create/types";
import { SDelete } from "./delete/types";

//Controller
import { DescribeTableController } from "./describeTable/controller";
import { SelectTableController } from "./selectTable/controller";
import { SelectViewController } from "./selectView/controller";
import { RetrieveController } from "./retrieve/controller";
import { CreateController } from "./create/controller";
import { DeleteController } from "./delete/controller";

interface STeamdeskRoot<M> {
    describeTable: SDescribeTable<M>;
    selectTable: SSelectTable<M>;
    selectView: SSelectView<M>;
    retrieve: SRetrieve<M>;
    create: SCreate<M>;
    update: SCreate<M>;
    upsert: SCreate<M>;
    delete: SDelete<M>;
}

export class TeamdeskRoot<M> implements STeamdeskRoot<M> {
    //State
    private describeTableController: DescribeTableController;
    private selectTableController: SelectTableController;
    private selectViewController: SelectViewController;
    private retrieveController: RetrieveController;
    private createController: CreateController;
    private deleteController: DeleteController;

    //Construct
    constructor(apiClient: Axios, baseUrl: string) {
        this.describeTableController = new DescribeTableController(baseUrl, apiClient);
        this.selectTableController = new SelectTableController(baseUrl, apiClient);
        this.selectViewController = new SelectViewController(baseUrl, apiClient);
        this.retrieveController = new RetrieveController(baseUrl, apiClient);
        this.createController = new CreateController(baseUrl, apiClient);
        this.deleteController = new DeleteController(baseUrl, apiClient);
    }

    //Describe Table
    describeTable: SDescribeTable<M> = {
        uri: (props) => this.describeTableController.getUri(props),
        request: (props) => this.describeTableController.doRequest(props),
    }

    //Select Table
    selectTable: SSelectTable<M> = {
        uri: (props) => this.selectTableController.getUri(props),
        request: (props) => this.selectTableController.doRequest(props),
    }

    //Select View
    selectView: SSelectView<M> = {
        uri: (props) => this.selectViewController.getUri(props),
        request: (props) => this.selectViewController.doRequest(props),
    }

    //Retrieve
    retrieve: SRetrieve<M> = {
        uri: (props) => this.retrieveController.getUri(props),
        request: (props) => this.retrieveController.doRequest(props),
    }

    //Create
    create: SCreate<M> = {
        uri: (props) => this.createController.getUri(props, "create.json"),
        request: (props) => this.createController.doRequest(props, "create.json"),
    }

    //Update
    update: SCreate<M> = {
        uri: (props) => this.createController.getUri(props, "update.json"),
        request: (props) => this.createController.doRequest(props, "update.json"),
    }

    //Upsert
    upsert: SCreate<M> = {
        uri: (props) => this.createController.getUri(props, "upsert.json"),
        request: (props) => this.createController.doRequest(props, "upsert.json"),
    }

    //Delete
    delete: SDelete<M> = {
        uri: (props) => this.deleteController.getUri(props),
        request: (props) => this.deleteController.doRequest(props),
    }
}

//Create Teamdesk
export const teamdesk = <M>(apiClient: Axios, baseUrl: string): TeamdeskRoot<M> => {
    return new TeamdeskRoot<M>(apiClient, baseUrl);
}