"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const math_service_1 = require("./math.service");
const microservices_1 = require("@nestjs/microservices");
let AppController = class AppController {
    constructor(appService, mathService) {
        this.appService = appService;
        this.mathService = mathService;
    }
    getHello() {
        return this.appService.getHello();
    }
    accumulate_remote(numberArray, metadata) {
        console.log('Adding' + numberArray.data.toString());
        return { sum: this.mathService.accumulate(numberArray.data) };
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, microservices_1.GrpcMethod)('AppController', 'Accumulate'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Object)
], AppController.prototype, "accumulate_remote", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService, math_service_1.MathService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map