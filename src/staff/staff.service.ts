
import { Injectable } from '@nestjs/common';
// import { Find } from '../../src/client/client.controller'


export type Staff = {
  userId: number;
  username: string;
  password: string;
};


@Injectable()
export class StaffService {
  private readonly staff = [
    {
      userId: 1,
      username: 'john',
      password: 'jonhsenha',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'mariasenha',
    }
  ];

  async findOne(username: string): Promise<Staff | undefined> {
    return this.staff.find((user) => user.username === username);
  }
}
