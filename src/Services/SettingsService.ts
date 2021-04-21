import { getCustomRepository } from 'typeorm';
import { SettingsRepository } from "../repositories/SettingsRepository";


interface ISettingsCreate{
  chat : boolean,
  username : string,
}

class SettingsService {

  async Create( {chat, username} : ISettingsCreate){
    const settingsRepository = getCustomRepository(SettingsRepository);

    //SELECT * FROM settings WHERE username = `${username}`;
    const UserAlreadyExist =  await settingsRepository.findOne({
      username
    }); //Limit 1

    if(UserAlreadyExist){
      throw new Error("User Already Exists!");
    }

    const settings = settingsRepository.create({
      chat,
      username
    })

    await settingsRepository.save(settings);
    return settings;
  }
}

export { SettingsService };
