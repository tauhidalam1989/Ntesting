import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {
  constructor(private router: Router) {}
  
    navigateToAbout(path:any) {
      this.router.navigate([path]);
    }
}
