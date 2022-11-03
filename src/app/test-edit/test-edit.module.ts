import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestEditPageRoutingModule } from './test-edit-routing.module';

import { TestEditPage } from './test-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestEditPageRoutingModule
  ],
  declarations: [TestEditPage]
})
export class TestEditPageModule {}
