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
import { IBoard } from './types/interfaces';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  constructor(private readonly service: BoardsService) {}

  @Get()
  findAll(): Promise<IBoard[]> {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('') param): Promise<IBoard> {
    return this.service.findOne(param.id);
  }

  @Post()
  create(@Body() createDto: ICreateBoard): IBoard {
    return this.service.create(createDto);
  }

  @Put(':id')
  update(@Body() updateDto: IUpdateBoard, @Param('id') id): Promise<IBoard> {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<IBoard> {
    return this.service.delete(id);
  }
}
