import { HttpClient } from "@angular/common/http";
import { Component, Inject, Injector, NgZone, OnInit } from "@angular/core";
import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from "./bar.config";
import { BarFactory, BarServices, BebidaService } from "./bar.service";

@Component({
  selector: "bar",
  templateUrl: "bar.component.html",
  providers: [
    { provide: BarServices, useClass: BarServices },
    {
      provide: BarServices,
      useFactory: BarFactory,
      deps: [HttpClient, Injector],
    },
    { provide: BebidaService, useExisting: BarServices },
  ],
})
export class BarComponent implements OnInit {
  configManual: BarUnidadeConfig;
  config: BarUnidadeConfig;

  barBebida1: string;
  barBebida2: string;
  dadosUnidade: string;

  constructor(
    private barServices: BarServices,
    @Inject("ConfigManualUnidade") private apiConfigManual: BarUnidadeConfig,
    @Inject(BAR_UNIDADE_CONFIG) private apiConfig: BarUnidadeConfig,
    private bebidaService: BebidaService,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.barBebida1 = this.barServices.obterBebidas();
    this.configManual = this.apiConfigManual;
    this.config = this.apiConfig;
    this.dadosUnidade = this.barServices.obterUnidade();

    this.barBebida2 = this.bebidaService.obterBebidas();
  }
  public progress: number = 0;
  public label: string;

  processWithinAngularZone() {
    this.label = "dentro";
    this.progress = 0;
    this._increaseProgress(() =>
      console.log("Finalizando por dentro do Angular")
    );
  }

  processOutsideOfAngularZone() {
    this.label = "fora";
    this.progress = 0;
    this.ngZone.runOutsideAngular(() => {
      this._increaseProgress(() => {
        this.ngZone.run(() => {
          console.log("Finalizando fora!");
        });
      });
    });
  }

  _increaseProgress(doneCallback: () => void) {
    this.progress += 1;
    console.log(`Progresso atual: ${this.progress}`);

    if (this.progress < 100) {
      window.setTimeout(() => this._increaseProgress(doneCallback), 10);
    } else {
      doneCallback();
    }
  }
}
