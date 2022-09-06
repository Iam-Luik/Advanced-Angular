import { APP_BASE_HREF, registerLocaleData } from "@angular/common";
import { LOCALE_ID, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { NgBrazil, TextMask } from "ng-brazil";
import { CustomFormsModule } from "ng2-validation";

import { AppComponent } from "./app.component";

import localePt from "@angular/common/locales/pt";
import { AppRoutingModule } from "./app.routes";
import { CadastroComponent } from "./demos/reactiveForms/cadastro/cadastro.component";
import { SobreComponent } from "./institucional/sobre/sobre.component";
import { NavegacaoModule } from "./navegacao/navegacao.module";
registerLocaleData(localePt);

@NgModule({
  declarations: [AppComponent, SobreComponent, CadastroComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TextMask.TextMaskModule,
    NgBrazil,
    CustomFormsModule,
    NavegacaoModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: "/" },
    { provide: LOCALE_ID, useValue: "pt-BR" },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
