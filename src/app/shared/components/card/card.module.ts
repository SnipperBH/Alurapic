import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { CardCompenent } from "./card.component";

@NgModule({
  declarations: [CardCompenent],
  exports: [CardCompenent],
  imports: [CommonModule],
})
export class CardModule {}
