import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectModel } from '@nestjs/sequelize';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private readonly userEntity: typeof User) { }

  // 회원가입
  async create(createUserDto: CreateUserDto): Promise<User> {
    const { email, uid, upw } = createUserDto;
    return await this.userEntity.create({ email, uid, upw });
  }

  // 로그인
  async login(loginUserDto: LoginUserDto): Promise<User> {
    const { uid, upw } = loginUserDto;
    const data = await this.userEntity.findOne({ where: { uid } }) // ID로 검색
    if (upw === data.upw) {
      // console.log(data)
      // console.log("++++++++++++++++++++++++++++++++++++++++++++++")
      return data
    } else {
      throw new UnauthorizedException
    }

  }

  // findAll() {
  //   return `This action returns all user`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
