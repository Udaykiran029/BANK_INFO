import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone:true,
  imports: [RouterOutlet,RouterLink,CommonModule, RouterLinkActive,ReactiveFormsModule],
})
export class AppComponent implements OnInit {
  constructor(private router:Router){
    this.router.navigate(['/']);
  }
  title = 'bankAccountApp';
  ngOnInit(): void {
    console.log(this.router);
  }
  show(){
    this.router.navigate(['/add-customer']);
  }
}
