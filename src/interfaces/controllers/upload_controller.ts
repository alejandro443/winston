import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiInternalServerErrorResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Auth } from '@src/core/decorators/auth.decorator';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { v4 as uuidv4 } from 'uuid';
import { ImageDto } from '../request_dto/UploadDto/image_dto';

@ApiTags('Upload')
@Controller('upload')
@ApiInternalServerErrorResponse({ description: 'Error upload.' })
export class UploadController {
  @Auth()
  @Post('/image')
  @ApiOperation({ summary: 'Subir una imagen' })
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: `dist/public/images`,
      filename: (req, file, cb) => {
        const randomName = uuidv4();
        cb(null, `${randomName}${extname(file.originalname)}`);
      },
    }),
    fileFilter: (req, file, cb) => {
      if (!file.mimetype.match(/\/(jpg|jpeg|png)$/)) {
        return cb(new Error('Solo se permiten archivos de imagen estatica. [.jpg, .jpeg, .png]'), false);
      }
      cb(null, true);
    },
  }))

  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Subida de imagen',
    required: true,
    type: ImageDto
  })
  @ApiResponse({ status: 201, description: 'Imagen subida con éxito' })
  uploadFile(@UploadedFile() image: Express.Multer.File) {
    console.log(image)
    return {
      message: 'Imagen subida con éxito',
      fileName: image.filename
    };
  }
}
