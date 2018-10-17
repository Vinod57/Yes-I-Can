
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import { WebshopComponent } from './webshop/webshop.component';
import { ProjectsEventsComponent } from './projects-events/projects-events.component';

import {MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSelectModule, MatListModule, MatSidenavModule, MatTableModule} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule, MatCardModule} from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { routingModule } from './app.routing';
import { ContactusComponent } from './contactus/contactus.component';
@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    FooterComponent,
    BlogComponent,
    WebshopComponent,
    ProjectsEventsComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    routingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatListModule,
    MatSidenavModule,
    MatGridListModule,
    MatCheckboxModule,
    MatTableModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
