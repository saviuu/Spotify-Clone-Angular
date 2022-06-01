import { Router } from '@angular/router';
import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private spotifyService: SpotifyService,
    private router: Router) { }

  ngOnInit(): void {
    this.verifyTokenUrlCallback();
  }

  verifyTokenUrlCallback(){
    const token = this.spotifyService.getTokenUrlCallback();
    if(!!token){
      this.spotifyService.setAccessToken(token);
      this.router.navigate(['/player']);
    }
  }

  openPageLogin(){
   window.location.href = this.spotifyService.getLoginUrl();
  }

}
