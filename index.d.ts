// Type definitions for password-generator v2.0.2
// Project: https://github.com/bermi/password-generator
// Definitions by: Maxime LUCE <https://github.com/SomaticIT>
// Definitions: https://github.com/typed-contrib/password-generator

/**
 * Generate a memorable password with default settings (10 letters)
 */
declare function generatePassword(): string;
/**
 * Generate a memorable password of given length
 */
declare function generatePassword(length: number): string;
/**
 * Generate a password of given length.
 * Allow to disable memorability
 */
declare function generatePassword(length: number, memorable: boolean): string;
/**
 * Generate a password of given length and with given pattern
 * Allow to disable memorability
 */
declare function generatePassword(length: number, memorable: boolean, pattern: RegExp): string;
/**
 * Generate a prefixed password of given length and with given pattern and prefix
 * Allow to disable memorability
 */
declare function generatePassword(length: number, memorable: boolean, pattern: RegExp, prefix: string): string;

export = generatePassword;