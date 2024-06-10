import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private readonly router: Router,
    private readonly authService: AuthService,
    private storage: Storage
  ) {}

  async canActivate(): Promise<boolean> {
    const isFirstTime = await this.storage.get('isFirstTime');
    if (isFirstTime === null || isFirstTime === undefined) {
      await this.storage.set('isFirstTime', true);
      return true;
    } else {
      this.router.navigate(['/payments']);
      return false;
    }
  }
}
