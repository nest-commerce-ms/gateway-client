import 'dotenv/config';
import * as Joi from 'joi';

interface EnvVars {
  PORT: number;
  PRODUCTS_MS_HOST: string;
  PRODUCTS_MS_PORT: number;
  ORDERS_MS_HOST: string;
  ORDERS_MS_PORT: number;
}

const envSchema = Joi.object({
  PORT: Joi.number().required(),
  PRODUCTS_MS_HOST: Joi.string().required(),
  PRODUCTS_MS_PORT: Joi.number().required(),
  ORDERS_MS_HOST: Joi.string().required(),
  ORDERS_MS_PORT: Joi.number().required(),
}).unknown(true);

const { error, value } = envSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
  PORT: envVars.PORT,
  PRODUCTS_MS_HOST: envVars.PRODUCTS_MS_HOST,
  PRODUCTS_MS_PORT: envVars.PRODUCTS_MS_PORT,
  ORDERS_MS_HOST: envVars.ORDERS_MS_HOST,
  ORDERS_MS_PORT: envVars.ORDERS_MS_PORT,
};
