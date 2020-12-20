import {
  Component,
  ComponentFactoryResolver,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { registry } from '../registry';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent implements OnInit, OnDestroy {
  @Input() remoteComponent!: string;
  @Input() componentName!: string;
  @ViewChild('wrapper', { read: ViewContainerRef, static: true })
  wrapper: ViewContainerRef | any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    this.load();
  }

  ngOnDestroy(): void {
    this.wrapper.clear();
  }

  async load() {
    const importComponent = registry[this.remoteComponent];
    const component = await importComponent().then(
      (m: { [x: string]: any }) => m[this.componentName]
    );

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      component
    );
    this.wrapper.createComponent(componentFactory);
  }
}
