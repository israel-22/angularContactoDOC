/* eslint-disable @typescript-eslint/no-unused-vars */
import { CanDeactivateFn } from '@angular/router';
import { ProductosComponent } from '../pages/productos/productos.component';

export const warningGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  const currentComponent = component as ProductosComponent;

  if (currentComponent.form.invalid && currentComponent.form.dirty) {
    return window.confirm('¿Deseas abandonar la página? Los cambios se eliminaran si no los guardas.');
  }
  return true;
};