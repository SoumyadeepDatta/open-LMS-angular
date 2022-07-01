import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from '../services/admin.service';

@Injectable({
  providedIn: 'root',
})
export class AuthAdminGuard implements CanActivate {
  activate: boolean = false;

  constructor(private adminService: AdminService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (localStorage.getItem('type') == 'admin') {
      this.adminService.fetchAdmin().subscribe(
        (e: any) => {
          if (
            e.username === localStorage.getItem('username') &&
            e.password === localStorage.getItem('password')
          ) {
            console.table(e);
            // console.log("ok");

            this.activate = true;
            this.router.navigate(['admin']);
          }
        },
        (err) => {
          this.activate = false;
          console.error(err);
          this.adminService.logoutAdmin();
          this.router.navigate(['login']);
        }
      );
      // console.log("outside subscribe : "+String(this.activate));

      return this.activate;
    }
    return false;
  }
}
