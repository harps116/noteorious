import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ICreateBoard, IUpdateBoard } from './types/dto';

@Controller('boards')
export class BoardsController {
  @Get()
  findAll(): string {
    return 'all items';
  }

  @Get(':id')
  findOne(@Param('') param): string {
    return `${param.id}`;
  }

  @Post()
  create(@Body() createBoardDto: ICreateBoard): string {
    return `${JSON.stringify(createBoardDto)}`;
  }

  @Put(':id')
  update(@Body() updateBoardDto: IUpdateBoard, @Param('id') id): string {
    return `${JSON.stringify(updateBoardDto)}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `delete ${id}`;
  }
}