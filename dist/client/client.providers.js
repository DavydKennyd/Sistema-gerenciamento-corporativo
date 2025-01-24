"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientProviders = void 0;
const client_entity_1 = require("./entities/client.entity");
exports.ClientProviders = [
    {
        provide: 'CLIENT_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(client_entity_1.Client),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=client.providers.js.map