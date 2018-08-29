import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { MaterialModule } from '../material.module';

// Componets
import { MessageComponent } from './toolbar/message/message.component';
import { NotificationComponent } from './toolbar/notification/notification.component';
import { ProfileComponent } from './toolbar/profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    MessageComponent,
    NotificationComponent,
    ProfileComponent
  ],
  exports: [
    MessageComponent,
    NotificationComponent,
    ProfileComponent
  ]
})
export class ComponentsModule { }
