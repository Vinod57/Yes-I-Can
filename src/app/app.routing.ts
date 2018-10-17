import { RouterModule, Routes } from '@angular/router';

import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import { WebshopComponent } from './webshop/webshop.component';
import { ProjectsEventsComponent } from './projects-events/projects-events.component';
import { ContactusComponent } from './contactus/contactus.component';







const routes: Routes = [
    { path: '',  redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'header', component: HeaderComponent },
    { path: 'about', component: AboutComponent },
    { path: 'footer', component: FooterComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'webshop', component: WebshopComponent },
    { path: 'projectsEvents', component: ProjectsEventsComponent },
    { path: 'contact', component: ContactusComponent }
];
export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
