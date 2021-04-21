import { Request, Response } from 'express'
import { SettingsService } from '../Services/SettingsService';

export class SettingsController {
  async create(request : Request, response : Response){
    const { chat, username } = request.body;

    const settingsService = new SettingsService();
    try{
      const settings = await settingsService.Create({ chat, username });
      return response.json(settings);
    }catch(err){
      return response.status(400).json({ 
        message : err.message,
      });
    }
  }
}