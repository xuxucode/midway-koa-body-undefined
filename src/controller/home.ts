import { ALL, Body, Controller, Post, Provide } from '@midwayjs/decorator';
import { User } from '../interface';

@Provide()
@Controller('/api/user')
export class HomeController {

  @Post('/')
  async updateUser(@Body(ALL) user: User ) {
    console.log('=== user: ', user);
    return {
      user,
    }
  }
}