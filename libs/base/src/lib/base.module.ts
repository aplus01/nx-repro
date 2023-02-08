import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './hello/hello.component';
import { WorldComponent } from './world/world.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HelloComponent, WorldComponent],
  exports: [HelloComponent, WorldComponent],
})
export class BaseModule {}
