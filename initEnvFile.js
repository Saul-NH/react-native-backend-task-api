  
const { readFileSync, writeFileSync, existsSync } = require('fs');
const Path = require('path');

const envFilePath = Path.join(process.cwd(), '.env');

const newEnvVariables = [
    {
        name: 'NODE_ENV',
        value: '',
    },
    {
        name: 'PORT_DEV',
        value: 4000,
    },
    {
        name: 'PORT_PRODUCTION',
        value: '',
    },
    {
        name: 'MONGODB_URL_DEV',
        value: 'mongodb://localhost/db-development',
    },
    {
        name: 'MONGODB_URL_PRODUCTION',
        value: '',
    },
    {
        name: 'JWT_SECRET',
        value: 'a secret phrase',
    },
    {
        name: 'DATABASE_DEV',
        value: ''
    },
    {
        name: 'USER_DEV',
        value: ''
    },
    {
        name: 'PASSWORD_DEV',
        value: ''
    },
    {
        name: 'DATABASE_HOST_DEV',
        value: ''
    },
    {
        name: 'DIALECT',
        value: ''
    },
    {
        name: 'DATABASE_PORT',
        value: ''
    },
    {
        name: 'NODE_CONFIG_DIR',
        value: Path.join(process.cwd(), 'src/config'),
    },
];

try {
    //A .env file will be created if it doesn't exist
    if (!existsSync(envFilePath)) {
        writeFileSync(envFilePath, '');
    }

    //Getting the original data from the .env file
    let envDataFile = readFileSync(envFilePath, 'utf8');

    //Adding the new environment variables to the envDataFile string
    newEnvVariables.forEach((variable) => {
        envDataFile.includes(variable.name)
            ? envDataFile
            : (envDataFile +=
                  '\n' + variable.name + '=' + variable.value + '\n');
    });

    //Writting the new .env file
    writeFileSync(envFilePath, envDataFile);

    console.log('.env file built successfully');
} catch (error) {
    console.log(error.message);
}