import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FileSectionComponent } from './app/item-page/simple/field-components/file-section/file-section.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { RootModule } from '../../app/root.module';
import { AdminSidebarComponent } from './app/admin/admin-sidebar/admin-sidebar.component';
import { LoginPageComponent } from './app/login-page/login-page.component';
import { EmailRequestCopyComponent } from './app/request-copy/email-request-copy/email-request-copy.component';


const DECLARATIONS = [
  FileSectionComponent,
  AdminSidebarComponent,
  LoginPageComponent,
  EmailRequestCopyComponent,
];

@NgModule({
  imports: [
    RootModule,
    CommonModule,
    DragDropModule,
    FormsModule,
    NgbModule,
    RouterModule,
    ScrollToModule,
    StoreModule,
    StoreRouterConnectingModule,
    TranslateModule,
    FormsModule,
    NgxGalleryModule,
    ...DECLARATIONS
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
  ],
})

  /**
   * This module serves as an index for all the components in this theme.
   * It should import all other modules, so the compiler knows where to find any components referenced
   * from a component in this theme
   * It is purposefully not exported, it should never be imported anywhere else, its only purpose is
   * to give lazily loaded components a context in which they can be compiled successfully
   */
class LazyThemeModule {
}
