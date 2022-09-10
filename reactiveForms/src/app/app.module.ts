import { NgModule, Provider } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { NgBrazil, TextMask } from "ng-brazil";
import { CustomFormsModule } from "ng2-validation";

import { AppComponent } from "./app.component";
import { CadastroComponent } from "./demos/reactiveForms/cadastro/cadastro.component";
import { SobreComponent } from "./institucional/sobre/sobre.component";
import { NavegacaoModule } from "./navegacao/navegacao.module";

import { AppRoutingModule } from "./app.routes";
import { BarModule } from "./demos/bar-di-zones/bar.module";
import { BarServices } from "./demos/bar-di-zones/bar.service";
import { AuthGuard } from "./services/app.guard";
import { CadastroGuard } from "./services/cadastro.guard";
import { HttpClientModule } from "@angular/common/http";
import { TodoModule } from "./demos/todo-list/todo.module";

export const BAR_PROVIDERS: Provider[] = [BarServices];

@NgModule({
  declarations: [AppComponent, SobreComponent, CadastroComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NavegacaoModule,
    TextMask.TextMaskModule,
    NgBrazil,
    CustomFormsModule,
    AppRoutingModule,
    BarModule.forRoot({
      unidadeId: 1000,
      unidadeToken: "ce5sop4dm5w4i1h2",
    }),
    HttpClientModule,
    TodoModule,
  ],
  providers: [AuthGuard, CadastroGuard, BAR_PROVIDERS],
  bootstrap: [AppComponent],
})
export class AppModule {}
