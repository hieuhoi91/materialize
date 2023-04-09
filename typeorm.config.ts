import { DataSource } from "typeorm";
import { ConfigService } from "@nestjs/config";
import { config } from "dotenv";

config();

const configService = new ConfigService();
console.log(__dirname + "/../../database/migrations/*{.ts,.js}");

export default new DataSource({
  type: "postgres",
  host: configService.get("DB_HOST"),
  port: configService.get("DB_PORT"),
  username: configService.get("DB_USERNAME"),
  password: configService.get("DB_PASSWORD"),
  database: configService.get("DB_DATABASE"),
  entities: [__dirname + "/src/modules/**/*.entity{.ts,.js}"],
  migrations: [__dirname + "/src/database/migrations/*{.ts,.js}"],
  synchronize: true,
  ssl: true,
});