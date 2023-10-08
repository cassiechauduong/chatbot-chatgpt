import openai from './config/open-ai.js';
import readlineSync from 'readline-sync';
import colors from 'colors';

async function main() {
    const userName = readlineSync.question('What would you like to know about internet access disparity among genders?');
    console.log(`Hello ${userName}`)
}

main();