let logplease = require('logplease');

const logger = logplease.create('logger');

logger.debug('Hola Mundo de Node');
logger.info('Información de último momento, Node.js es lo más!!');
logger.warn('Tirando warnings como campeones');
logger.error('Algo no está bien!!!');