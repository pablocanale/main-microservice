import { NestFactory } from "@nestjs/core";
import { Transport } from "@nestjs/microservices";
import { AppModule } from "./app.module";


async function bootstrap() {
    const app = await NestFactory.createMicroservice(AppModule, {
        transport: Transport.RMQ,
        options: {
            urls: ['amqps://pdzyxeek:ypOgNzSZKMWK0OQ5xVOJs64stuCtc0yu@jackal.rmq.cloudamqp.com/pdzyxeek'],
            queue: 'main_queue',
            queueOptions: {
                durable: false
            },
        }
    });
}
bootstrap();