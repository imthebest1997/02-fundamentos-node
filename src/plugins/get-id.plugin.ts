import { v4 as uuidv4 } from 'uuid';
import * as crypto from 'crypto';

export const getIdWithUUID = () => {
    return uuidv4();
}

export const getIdWithCrypto = () => {
    return crypto.randomUUID();
}

