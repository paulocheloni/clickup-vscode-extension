import { LocalStorageService } from '../localStorageService';

export class TokenService {
    storageManager?: LocalStorageService;

    init(storageManager: LocalStorageService): void {
        this.storageManager = storageManager;
    }

    async setToken(token: String | undefined): Promise<boolean> {
        this.storageManager?.setValue('token', token);
        return true;
    }

    async getToken() {
        return this.storageManager?.getValue('token');
    }
}

export const tokenService: TokenService = new TokenService();

