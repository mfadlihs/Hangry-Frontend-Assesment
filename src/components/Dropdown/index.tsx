import React, {
  LegacyRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

import { usePopper } from "react-popper";

import { ComponentWraper, OverlayContainer, OverlayContent } from "./style";
import { DropdownProps } from "./types";
import useClickOutside from "@/hooks/useClickOutside";
import useContainerDimensions from "@/hooks/useContainerDimensions";

function Dropdown({
  overlay,
  children,
  className = "",
  trigger = "click",
  overlayWidth = "auto",
  overlayHeight = "auto",
  onChange,
  placement = "bottom",
  show,
  fitContent = true,
  disabled = false,
  zIndex = 1000,
}: DropdownProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [wrapperComponentRef, setWrapperComponentRef] =
    useState<HTMLDivElement>();
  const [wrapperOverlayRef, setWrapperOverlayRef] = useState<HTMLDivElement>();
  const componentRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const isControlled = show !== undefined;

  const isOpen = useMemo(() => {
    return isControlled ? show : open;
  }, [show, open, isControlled]);

  const popper = usePopper(wrapperComponentRef, wrapperOverlayRef, {
    placement,
  });

  const { width } = useContainerDimensions<HTMLDivElement>(componentRef);

  const handleOpen = (status: boolean) => {
    setOpen(status);
  };

  useClickOutside(
    [componentRef, overlayRef],
    () => {
      handleOpen(false);
    },
    trigger !== "click"
  );

  const handleTriggerCLick = useCallback(() => {
    if (disabled) return;
    if (trigger === "hover") return;
    setOpen(!open);
  }, [open, trigger, disabled]);

  const onMouseEnter = useCallback(() => {
    if (disabled) return;
    if (trigger !== "hover") return;
    setOpen(true);
  }, [trigger, disabled]);

  const onMouseLeave = useCallback(() => {
    if (disabled) return;
    if (trigger !== "hover") return;
    setOpen(false);
  }, [trigger, disabled]);

  useEffect(() => {
    if (onChange) onChange(open);
  }, [open, onChange]);

  useEffect(() => {
    if (!isControlled) return;
    setOpen(show);
  }, [show, isControlled]);

  return (
    <>
      <ComponentWraper
        ref={setWrapperComponentRef as LegacyRef<HTMLDivElement>}
        className={className}
        aria-hidden
        onClick={handleTriggerCLick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        fitContent={fitContent}
      >
        <div ref={componentRef}>{children}</div>
      </ComponentWraper>
      {isOpen &&
        createPortal(
          <OverlayContainer
            ref={setWrapperOverlayRef as LegacyRef<HTMLDivElement>}
            style={popper.styles.popper}
            width={width}
            placement={popper.state?.placement}
            overlayWidth={overlayWidth}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            zIndex={zIndex}
          >
            <OverlayContent ref={overlayRef} overlayHeight={overlayHeight}>
              {overlay}
            </OverlayContent>
          </OverlayContainer>,
          document?.body
        )}
    </>
  );
}

export default Dropdown;
