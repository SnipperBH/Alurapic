import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { DarkenOnHoverModule } from "src/app/shared/directives/dark-on-hover/darken-on-hover.module";
import { CardModule } from "./../../shared/components/card/card.module";
import { PhotoModule } from "./../photo/photo.module";
import { FilterByDescription } from "./filter-by-description.pipe";
import { LoadButtonComponent } from "./load-button/load-button.component";
import { PhotoListComponent } from "./photo-list.component";
import { PhotosComponent } from "./photos/photos.component";
import { SearchComponent } from "./search/search.component";

@NgModule({
  declarations: [
    PhotoListComponent,
    PhotosComponent,
    LoadButtonComponent,
    FilterByDescription,
    SearchComponent,
  ],
  imports: [CommonModule, PhotoModule, CardModule, DarkenOnHoverModule],
})
export class PhotoListModule {}
