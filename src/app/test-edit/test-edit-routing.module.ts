import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestEditPage } from './test-edit.page';

const routes: Routes = [
  {
    path: '',
    component: TestEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestEditPageRoutingModule {}
