import Environment from '@/core/types/env';

/**
 * Gets the value of an environment variable and process.exit()'s
 * if the environment variable is not defined.
 */
const getEnv = (name: keyof Environment) => {
  const value = process.env[name];
  if (value === undefined) {
    console.error(`[!] Environment variable ${name} is required`);
    process.exit();
  }

  return value;
};

export default getEnv;
