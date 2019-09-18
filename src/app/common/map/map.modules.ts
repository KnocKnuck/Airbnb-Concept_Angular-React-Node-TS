
import { NgModule } from '@angular/core';
import { MapComponent } from './map.component';
import { AgmCoreModule } from '@agm/core';
import { CamelizePipe } from 'ngx-pipes';
import { CommonModule } from '@angular/common';

import { MapService } from './map.service';

@NgModule({
  declarations: [
    MapComponent
  ],
  exports: [
    MapComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyAobbEyZjD-14NC6oMi2WmlE9BXDDRRooI'
      }),
      CommonModule
  ],
  providers: [
      MapService,
      CamelizePipe
  ]

})
export class MapModule { }
