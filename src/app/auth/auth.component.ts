import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'acc-auth',
  templateUrl: './auth.component.html'
})

export class AuthComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(['/login']);
  }
}
