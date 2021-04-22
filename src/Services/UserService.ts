import { getCustomRepository } from "typeorm";
import { UsersRepository } from '../repositories/UsersRepository';

export class UserService {
  async create(email : string){
    const usersRepository = getCustomRepository(UsersRepository);
    // Se o usuario já existe :
    const userExists = await usersRepository.findOne({
      email
    });
    if(userExists){
      return userExists
    }
    // Se não: 
    const user = usersRepository.create({
      email
    });
    await usersRepository.save(user);

    return user;
  }
}