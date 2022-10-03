import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';
import { MediaItemFormComponent } from './media-item-form.component';
// import { MediaItemService } from './media-item-service';
import { lookupListToken, lookupLists } from './providers';

// const lookupLists = {
//   mediums: ['Movies', 'Series']
// };
// Move this to providers.js file in teh app

@NgModule({
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective,
    CategoryListPipe,
    MediaItemFormComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: lookupListToken, useValue: lookupLists }
    // { provide: 'lookupListToken', useValue: lookupLists } - We no longer need this after providers.js. We use the { provide: lookupListToken, useValue: lookupLists } instead
    // MediaItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
