import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { MaterialModule } from '../material.module';

// ===== COMPONENTS ======
// Toolbar
import { MessageComponent } from './toolbar/message/message.component';
import { NotificationComponent } from './toolbar/notification/notification.component';
import { ProfileComponent } from './toolbar/profile/profile.component';
import { LoaderPageComponent } from './shared/loader-page/loader-page.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    MessageComponent,
    NotificationComponent,
    ProfileComponent,
    LoaderPageComponent
  ],
  exports: [
    MessageComponent,
    NotificationComponent,
    ProfileComponent,
    LoaderPageComponent
  ]
})
export class ComponentsModule { }
