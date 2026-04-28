import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SidebarComponent, NavbarComponent, BottomNavComponent, FooterComponent],
  imports: [CommonModule, RouterModule,FormsModule],
  exports: [SidebarComponent, NavbarComponent, FooterComponent,BottomNavComponent],
})
export class SharedModule {}
