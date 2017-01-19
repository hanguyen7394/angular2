import { Injectable } from '@angular/core';
@Injectable()
export class LoggerService {
    thong_bao: string; // capture logs for testing
    log(message: string) {
        this.thong_bao = message;
        console.log(this.thong_bao);
    }
}