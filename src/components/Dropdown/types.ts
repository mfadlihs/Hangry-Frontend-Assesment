import type { Placement } from '@popperjs/core';
import { ReactNode } from 'react';

type OverlayWidthType = 'auto' | 'fit-container' | string;

type OverlayHeightType = 'auto' | string;

export interface DropdownProps {
  overlay: ReactNode;
  children: ReactNode;
  className?: string;
  trigger?: 'click' | 'hover';
  overlayWidth?: OverlayWidthType;
  overlayHeight?: OverlayHeightType;
  onChange?: (status: boolean) => void;
  show?: boolean;
  fitContent?: boolean;
  placement?: Placement;
  disabled?: boolean;
  zIndex?: number;
}

export interface OverlayContainerProps {
  width: number;
  overlayWidth: OverlayWidthType;
  placement?: Placement;
  zIndex: number;
}

export interface OverlayContentProps {
  overlayHeight: OverlayHeightType;
}

export interface ComponentWraperProps {
  fitContent?: boolean;
}
