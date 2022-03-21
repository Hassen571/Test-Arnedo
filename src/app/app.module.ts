import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FeedComponent } from './feed/feed.component';
import { FavoritelistComponent } from './favoritelist/favoritelist.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {MatFormFieldModule} from '@angular/material/form-field';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxSpinnerModule} from 'ngx-spinner';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FeedComponent,
    FavoritelistComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule,
    MatCardModule,
    NgxSpinnerModule,
    ScrollingModule,
    MatFormFieldModule,
    FormsModule,
    Ng2SearchPipeModule,
    InfiniteScrollModule,
    MatMenuModule
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
