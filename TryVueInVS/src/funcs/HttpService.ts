import { Axios } from "axios";
const axios: Axios = require("axios").default;
import 'localforage'
const localForge: LocalForage = require("localforage");
import { ISiteConfig } from '../Configurations/SiteConfig'
import { IPropertyDTO } from "../Dtos/PropertyDTO";


export class HttpFunc {
  public static async Get<T>(url: string, isLocal: boolean = false): Promise<T> {
    let config = null;
    if (!isLocal) {
      config = await HttpFunc.GetWebConfig();
    }
    const urls = `${url}`;
    const value = await axios.get<T>(urls,
      {
        baseURL: (isLocal ? undefined : config?.ApiBaseUrl)
      });
    return value.data;
  }

  public static async GetWebConfig(reset: boolean = false): Promise<ISiteConfig | null> {
    const key = "/appsettings.json";
    let value = reset ? await HttpFunc.Get<ISiteConfig>(key, true) : await localForge.getItem<ISiteConfig>(key);
    if (reset) {
      await localForge.setItem(key, value);
    } else {
      if (!value) {
        value = await HttpFunc.Get<ISiteConfig>(key, true);
        localForge.setItem(key, value);
      }
    }
    return value;
  }


}