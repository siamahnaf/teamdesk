"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teamdesk = exports.TeamdeskRoot = void 0;
//Controller
const controller_1 = require("./describeTable/controller");
const controller_2 = require("./selectTable/controller");
const controller_3 = require("./selectView/controller");
const controller_4 = require("./retrieve/controller");
const controller_5 = require("./create/controller");
const controller_6 = require("./delete/controller");
class TeamdeskRoot {
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
        this.describeTableController = new controller_1.DescribeTableController(baseUrl, apiClient);
        this.selectTableController = new controller_2.SelectTableController(baseUrl, apiClient);
        this.selectViewController = new controller_3.SelectViewController(baseUrl, apiClient);
        this.retrieveController = new controller_4.RetrieveController(baseUrl, apiClient);
        this.createController = new controller_5.CreateController(baseUrl, apiClient);
        this.deleteController = new controller_6.DeleteController(baseUrl, apiClient);
    }
}
exports.TeamdeskRoot = TeamdeskRoot;
//Create Teamdesk
const teamdesk = (apiClient, baseUrl) => {
    return new TeamdeskRoot(apiClient, baseUrl);
};
exports.teamdesk = teamdesk;
//# sourceMappingURL=teamdesk-root.js.map