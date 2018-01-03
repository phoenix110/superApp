import { NgModule } from '@angular/core';
import { ArrsPipe } from './arrs/arrs';
import { ObjArrPipe } from './obj-arr/obj-arr';
import { DelArrfirstPipe } from './del-arrfirst/del-arrfirst';
@NgModule({
	declarations: [ArrsPipe,
    ObjArrPipe,
    DelArrfirstPipe],
	imports: [],
	exports: [ArrsPipe,
    ObjArrPipe,
    DelArrfirstPipe]
})
export class PipesModule {}
