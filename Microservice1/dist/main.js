"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const path_1 = require("path");
const logger = new common_1.Logger('Microservice1');
const microserviceOptions = {
    transport: microservices_1.Transport.GRPC,
    options: {
        package: 'app',
        protoPath: (0, path_1.join)(__dirname, '../src/app.proto')
    }
};
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, microserviceOptions);
    app.listen().then(() => {
        logger.log('Microservice1 is running...');
    });
}
bootstrap();
//# sourceMappingURL=main.js.map