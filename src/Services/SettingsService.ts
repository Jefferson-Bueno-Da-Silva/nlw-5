import { getCustomRepository, Repository } from 'typeorm';
import { Setting } from '../entities/Setting';
import { SettingsRepository } from "../repositories/SettingsRepository";


interface ISettingsCreate{
  chat : boolean,
  username : string,
}

class SettingsService {
  private settingsRepository: Repository<Setting>;

  constructor(){
    this.settingsRepository = getCustomRepository(SettingsRepository);
  }

  async Create( {chat, username} : ISettingsCreate){
    //SELECT * FROM settings WHERE username = `${username}`;
    const UserAlreadyExist =  await this.settingsRepository.findOne({
      username
    }); //Limit 1

    if(UserAlreadyExist){
      throw new Error("User Already Exists!");
    }

    const settings = this.settingsRepository.create({
      chat,
      username
    })

    await this.settingsRepository.save(settings);
    return settings;
  }
}

export { SettingsService };
