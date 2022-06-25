import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { StudentService } from '../services/student.service';

@Injectable({
  providedIn: 'root',
})
export class AuthStudentGuard implements CanActivate {
  activate: boolean = false;

  constructor(private studentService: StudentService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (localStorage.getItem('type') == 'student') {
      this.studentService.fetchStudent().subscribe(
        (e: any) => {
          if (
            e.username === localStorage.getItem('username') &&
            e.password === localStorage.getItem('password')
          ) {
            console.table(e);
            // console.log("ok");

            this.activate = true;
            this.router.navigate(['student']);
          }
        },
        (err) => {
          this.activate = false;
          console.error(err);
          this.router.navigate(['login']);
        }
      );
      // console.log("outside subscribe : "+String(this.activate));

      return this.activate;
    }
    return false;
  }
}

/**
return this.studentService.fetchStudent().pipe(
      map((e: any) => {
        if (
          e.username === localStorage.getItem('username') &&
          e.password === localStorage.getItem('password')
        ) {
          console.table(e);
          console.log('ok');

          console.table(e);
          console.log('ok');

          return true;
        } else {
          this.router.navigate(['login']);
          console.log("not there");
          
          return false;
        }
      })
    );
 */
