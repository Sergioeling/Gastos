import { inject, Injectable, signal, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, Observable } from "rxjs";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { HttpService } from "../http/http.service";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public role = new BehaviorSubject<string>('GENERAL');
  private route = inject(Router);
  private toastr = inject(ToastrService);
  private http = inject(HttpService);
  private platformId = inject(PLATFORM_ID);
  readonly panelOpenState = signal(false);
  private appReady = signal(false);
  
}
