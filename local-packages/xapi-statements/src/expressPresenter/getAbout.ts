import { Request, Response } from 'express';
import catchErrors from './utils/catchErrors';
import Config from './Config';
import { xapiHeaderVersion } from '../utils/constants';

export default (config: Config) => {
  return catchErrors(config, async (_req: Request, res: Response): Promise<void> => {
    res.status(200).json({
      'X-Experience-API-Version': xapiHeaderVersion,
      version: [xapiHeaderVersion]
    });
  });
};
