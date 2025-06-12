// angular import
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

// bootstrap import
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { Auth } from 'src/app/theme/shared/service/auth';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-nav-right',
  imports: [SharedModule],
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavRightComponent {
  // public props

  // constructor
  constructor(private router: Router, private auth : Auth) {
    const config = inject(NgbDropdownConfig);
    config.placement = 'bottom-right';
  }

logout() {
  console.log('logout');
    this.auth.logout()
  this.router.navigate(['/auth/signin']);
  //window location reload apres 1.5 s
  setTimeout(() => {
    window.location.reload();
  }, 1500);
}


}
