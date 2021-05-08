import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DiscordModule } from 'discord-nestjs';
import { AppService } from './app.service';
import { DiscordConfigService } from './environment/discord-config.service';
import { AlexModule } from './alexjs/alexjs.module';

@Module({
  imports: [
    AlexModule,
    DiscordModule.forRootAsync({ useClass: DiscordConfigService }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [AppService, DiscordConfigService],
})
export class AppModule {}
