import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewideaPage } from './newidea';

@NgModule({
  declarations: [
    NewideaPage,
  ],
  imports: [
    IonicPageModule.forChild(NewideaPage),
  ],
})
export class NewideaPageModule {}
