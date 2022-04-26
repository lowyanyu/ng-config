# NgConfig

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.16.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the library. The build artifacts will be stored in the `dist/` directory.
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

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
