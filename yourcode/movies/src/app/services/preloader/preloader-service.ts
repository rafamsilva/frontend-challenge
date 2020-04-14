import { Injectable } from '@angular/core';

@Injectable()
export class PreloaderService {
  public state = false;
  getPreloader(): boolean {
    return this.state;
  }

  showPreloader(): void {
    this.state = true;
  }

  hidePreloader(): void {
    this.state = false;
  }
}
