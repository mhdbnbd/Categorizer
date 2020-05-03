import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { AppComponent } from './app.component';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { BookState } from './state/book.state';
import { GenreState } from './state/genre.state';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReadComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([
      BookState,
      GenreState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
