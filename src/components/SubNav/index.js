import React from 'react';

import { SubNavItem } from '../SubNavItem';

export function SubNav() {
  return (
    <div>
      <SubNavItem label="Restaurantes" icon="fa-utensils" />
      <SubNavItem label="Entregas" icon="fa-utensils" />
      <SubNavItem label="Serviços" icon="fa-utensils" />
      <SubNavItem label="Mais" icon="fa-utensils" />
    </div>
  );
}
