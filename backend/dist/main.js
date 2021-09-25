"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrap = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: true
    });
    app.enableCors({
        origin: '*'
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        validateCustomDecorators: true,
        transformOptions: {
            excludeExtraneousValues: true
        }
    }));
    app.setGlobalPrefix('api');
    const options = new swagger_1.DocumentBuilder()
        .setVersion('1.0')
        .setBasePath('api')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('/docs', app, document);
    const configService = app.get('ConfigService');
    await app.listen(configService.get('app.port'));
    console.log(`Application is running on: ${await app.getUrl()}`);
}
exports.bootstrap = bootstrap;
bootstrap();
//# sourceMappingURL=main.js.map