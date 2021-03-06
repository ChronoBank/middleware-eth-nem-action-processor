const _ = require('lodash'),
  bunyan = require('bunyan'),
  log = bunyan.createLogger({name: 'nemActionProcessor.runActions'}),
  config = require('../config'),
  actions = require('./actions');

module.exports = (event) => {

  let obj = _.chain(config.nem.actions)
    .intersection(_.keys(actions))
    .map(async a => {
      const action = actions[a];
      const events = _.get(action, 'events', []);

      if (events.indexOf(event.name) !== -1)
        return await action.run(event);

    })
    .value();

  return Promise.all(obj)
    .then(statuses => {
      for (let status of statuses)
        if (status)
          log.info(status);
    });
};
