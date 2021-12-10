"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpFunc = void 0;
var axios = require('axios').default;
var HttpFunc = /** @class */ (function () {
    function HttpFunc() {
    }
    HttpFunc.get = function () {
        axios.get("https://reheene6.herokuapp.com/api/property/type/0")
            .then(function (r) {
            console.log(r);
        });
    };
    return HttpFunc;
}());
exports.HttpFunc = HttpFunc;
//# sourceMappingURL=HttpService.js.map