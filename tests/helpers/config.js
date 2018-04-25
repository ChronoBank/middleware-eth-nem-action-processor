'use strict';

require('dotenv').config();

const config = {
    nem_address: process.env.NEM_ADDRESS || 'TADSJV736MEIBHTCRPY4GR6HONMYO2ROX423GJOD',
    maxXemAmount: 0,
    currentAmount: process.env.CURRENT_AMOUNT || 0,
    depositMaxAmount: process.env.DEPOSIT_MAX_AMOUNT || 2000000,
    amount: process.env.AMMOUNT_TEST || 0
};

module.exports = config;
