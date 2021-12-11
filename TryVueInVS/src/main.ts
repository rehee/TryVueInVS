
import { MyVue } from "./MyVue";
import App from "./App.vue";
import { ISiteConfig } from "./Configurations/SiteConfig";
import { HttpFunc } from "./funcs/HttpService";


MyVue.config.productionTip = false;

const vue = new MyVue({
  render: h => h(App),
  beforeMount: async function () {

  }
});
async function Init() {
  const config = await HttpFunc.GetWebConfig(true);
  vue.$mount("#app");
}
Init();


