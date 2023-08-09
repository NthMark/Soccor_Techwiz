import { InjectionToken } from "@angular/core";
import { IAppConfig } from "./appconfig.interface";
import { environment } from "src/environments/environment";

export const APP_SERVICE_CONFIG= new InjectionToken<IAppConfig>('appconfig');
export const APP_CONFIG: IAppConfig={
    apiEndPoint: environment.apiEndpoint
}