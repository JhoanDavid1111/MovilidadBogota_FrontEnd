import { Component, OnInit } from '@angular/core';
import { TransporteService } from './transporte.service';


@Component({
  selector: 'app-transporte',
  templateUrl: './transporte.component.html'
})
export class TransporteComponent {
title = 'http-client';

constructor(private transporte: TransporteService) {
this.transporte.getTransporte('https://40.117.41.11:8243/gabomovility/movility/api/v1/conveyances/').subscribe((res: any) => {
  console.log(res);
});

}
}
