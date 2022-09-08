import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { MenuComponent } from "./menu/menu.component";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { FileSizePipe } from "../demos/pipes/filmes/filesize.pipe";
import { ImageFormaterPipe } from "../demos/pipes/filmes/image.pipe";
import { FilmesComponent } from "../demos/pipes/filmes/filmes.component";

@NgModule({
  declarations: [
    MenuComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponent,
    FileSizePipe,
    ImageFormaterPipe,
    FilmesComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    MenuComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponent,
    FileSizePipe,
    ImageFormaterPipe,
    FilmesComponent,
  ],
})
export class NavegacaoModule {}
