import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProdutoDetalheComponent } from "./componentes/produto-card-detalhe.component";
import { ProdutoCountComponent } from "./componentes/produto-count.component";
import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";
import { ProdutoRoutingModule } from "./produto.route";

@NgModule({
  declarations: [
    ProdutoDashboardComponent,
    ProdutoDetalheComponent,
    ProdutoCountComponent,
  ],
  imports: [CommonModule, ProdutoRoutingModule],
  exports: [],
})
export class ProdutoModule {}
