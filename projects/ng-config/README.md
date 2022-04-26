# NgConfig

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.0.

## Installation
```sh
$ npm install @cg/ng-config
```

## How to use

Add following to `app.module.ts`
```ts
import { NgConfigModule } from '@cg/ng-config';
@NgModule({
  // ...
  imports: [
    NgConfigModule
  ]
  // ...
})
```
Put config.json to `/assets`
```json
{
  "coreUrl": "http://docform.changingtec.com:9090/docform_core",
  "pdfDesignerUrl": "http://docform.changingtec.com:9090/PDFDesigner"
}
```

In your service
```ts
import { NgConfigService } from '@cg/ng-config';
constructor(
  private configService: NgConfigService
) {
  const coreUrl = this.configService.get('coreUrl');
}
```

## Code scaffolding

Run `ng generate component component-name --project ng-config` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project ng-config`.
> Note: Don't forget to add `--project ng-config` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build ng-config` to build the project. The build artifacts will be stored in the `dist/` directory.
```sh
$ ng build ng-config
```

## Publishing

1.  修改 `ng-config\projects\cg\ng-config\package.json` 中的版本號 `version`(下一個版本號，給使用lib的人看的) 
2.  執行指令，npm給project下版本號並壓上tag  
```sh
$ npm version [major|minor|patch]
```
3.  包版
```sh
$ npm run package
```
4.  發佈
```sh
$ npm publish dist/ng-config
```

## Running unit tests

Run `ng test ng-config` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
