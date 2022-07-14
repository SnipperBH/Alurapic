import { NgModule } from "@angular/core";

import { photoFormModule } from "./photo-form/photo-form.module";
import { PhotoListModule } from "./photo-list/photo-list.module";
import { PhotoModule } from "./photo/photo.module";

@NgModule({
  imports: [PhotoListModule, photoFormModule, PhotoModule],
})
export class PhotosModule {}
