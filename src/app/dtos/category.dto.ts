import { AccessType, Category } from '../models/product.model';
import {
  IsEnum,
  IsNotEmpty,
  IsUrl,
  Length,
  validateOrReject,
} from 'class-validator';

export interface TCreateCategoryDto extends Omit<Category, 'id'> {}

export class CreateCategoryDto implements TCreateCategoryDto {
  @IsNotEmpty()
  @Length(4, 100)
  name!: string;

  @IsUrl()
  @IsNotEmpty()
  image!: string;

  @IsNotEmpty()
  @IsEnum(AccessType)
  access?: AccessType | undefined;
}

(async () => {
  try {
    const dto = new CreateCategoryDto();
    dto.name = 'aaaaaaaa';
    dto.image = 'https://api.escuelajs.co/api/v1/products';
    dto.access = AccessType.PRIVATE;
    await validateOrReject(dto);
  } catch (error) {
    console.log(error);
  }
})();
