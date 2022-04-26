import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { NgConfigService } from './ng-config.service';

export function ConfigFactory(configService: NgConfigService) {
  const res = () => configService.load();
  return res;
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [],
  providers: [
    NgConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: ConfigFactory,
      deps: [NgConfigService],
      multi: true
    }
  ]
})
export class NgConfigModule {

  constructor(@Optional() @SkipSelf() parentModule: NgConfigModule) {
    if (parentModule) {
      throw new Error(
          'NgConfigModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders<NgConfigModule> {
    return {
      ngModule: NgConfigModule
    };
  }
}
