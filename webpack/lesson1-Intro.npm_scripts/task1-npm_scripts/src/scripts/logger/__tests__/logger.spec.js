import {createLogger} from '../logger.js';

it ('should return stored logs', () => {
    const logger = createLogger('user login');

    expect(logger.getlogs()).toEqual([]);
});

it('should save log message', () => {
  const logger = createLogger('user login');
  logger.log('login success');

  expect(logger.getlogs()).toEqual(['log - user - login success']);
});

it('should save errors', () => {
  const logger = createLogger('user login');
  logger.error('login failed');

  expect(logger.getlogs()).toEqual(['error - user - login failed']);
});