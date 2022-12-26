"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const microservices_1 = require("@nestjs/microservices");
const common_1 = require("@nestjs/common");
const logger = new common_1.Logger('Client');
const microserveiceOptions = {
    transport: microservices_1.Transport.TCP,
    options: {
        host: 'localhost',
        port: 8877,
    }
};
const client = microservices_1.ClientProxyFactory.create(microserveiceOptions);
client
    .send('add', [1, 2, 3])
    .subscribe(result => logger.log(result));
//# sourceMappingURL=main.js.map