import { Xior } from "xior";
import { SDescribeTable } from "./describeTable/types";
import { SSelectTable } from "./selectTable/types";
import { SSelectView } from "./selectView/types";
import { SRetrieve } from "./retrieve/types";
import { SCreate } from "./create/types";
import { SDelete } from "./delete/types";
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
export declare class TeamdeskRoot<M> implements STeamdeskRoot<M> {
    private describeTableController;
    private selectTableController;
    private selectViewController;
    private retrieveController;
    private createController;
    private deleteController;
    constructor(apiClient: Xior, baseUrl: string);
    describeTable: SDescribeTable<M>;
    selectTable: SSelectTable<M>;
    selectView: SSelectView<M>;
    retrieve: SRetrieve<M>;
    create: SCreate<M>;
    update: SCreate<M>;
    upsert: SCreate<M>;
    delete: SDelete<M>;
}
export declare const teamdesk: <M>(apiClient: Xior, baseUrl: string) => TeamdeskRoot<M>;
export {};
