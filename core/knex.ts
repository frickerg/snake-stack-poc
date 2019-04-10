import * as connection from 'knex'
import config from './database';

export const knex = connection(config)

export default knex
