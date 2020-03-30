import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FilmeService } from '../core/services/filme.service';
import { LoadingComponent } from './components/loading/loading.component';
import { BlockUiTemplateComponent } from './components/block-ui-template/block-ui-template.component';
import { BlockUIModule } from 'ng-block-ui';

@NgModule({
  declarations: [LoadingComponent, BlockUiTemplateComponent],
  entryComponents: [
    BlockUiTemplateComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BlockUIModule.forRoot({
      template: BlockUiTemplateComponent
    })
  ],
  exports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoadingComponent,
    BlockUIModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        FilmeService
      ]
    };
  }
}
