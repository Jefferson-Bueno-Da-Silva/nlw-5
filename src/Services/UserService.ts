import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from '../repositories/UsersRepository';

export class UserService {
  private usersRepository: Repository<User>;

  constructor(){
    this.usersRepository = getCustomRepository(UsersRepository);
  }
  
  async create(email : string){
    // Se o usuario já existe :
    const userExists = await this.usersRepository.findOne({
      email
    });
    if(userExists){
      return userExists
    }
    // Se não: 
    const user = this.usersRepository.create({
      email
    });
    await this.usersRepository.save(user);

    return user;
  }

  async findByEmail(email: string) {
    console.log("service");
    
    const user = await this.usersRepository.findOne({ 
      email,
    });
    return user;
  }
}