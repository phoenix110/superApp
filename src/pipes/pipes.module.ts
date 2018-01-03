import { NgModule } from '@angular/core';
import { ArrsPipe } from './arrs/arrs';
import { ObjArrPipe } from './obj-arr/obj-arr';
@NgModule({
	declarations: [ArrsPipe,
    ObjArrPipe],
	imports: [],
	exports: [ArrsPipe,
    ObjArrPipe]
})
export class PipesModule {}
