import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { ReviewEntity } from "./review.entity";
import { ReviewController } from "./review.controller";
import { ReviewService } from "./review.service";
import { ItemEntity } from "../item/item.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ItemEntity, ReviewEntity])],
  controllers: [ReviewController],
  exports: [ReviewService],
  providers: [ReviewService],
})
export class ReviewModule {}
