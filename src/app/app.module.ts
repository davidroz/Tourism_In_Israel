import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { VideoComponent } from './video/video.component';
import {RouterModule, Routes} from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  { path: '', component: CardComponent},
  { path: 'video', component: VideoComponent},
  { path: 'about', component: AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    VideoComponent,
    FooterComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
