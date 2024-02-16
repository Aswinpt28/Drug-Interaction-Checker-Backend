const crypto = require('crypto');

const generateRandomString = (length) => {
  return crypto.randomBytes(length).toString('hex');
};

module.exports = {
    // secretKey: 'd3dd7d353852a7fb1dbc2ff9feaddeb90e86ae99de4563f5af0ce7884db3ad4ee786e5d6accde17b4de364830b2313a81c861976b9f590c8d2226212c65addaf',
    adminSecretKey: generateRandomString(32),
    userSecretKey: generateRandomString(32),
  };
  