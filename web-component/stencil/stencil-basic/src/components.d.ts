/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface ArrayReactiveData {

    }
  }

  interface HTMLArrayReactiveDataElement extends StencilComponents.ArrayReactiveData, HTMLStencilElement {}

  var HTMLArrayReactiveDataElement: {
    prototype: HTMLArrayReactiveDataElement;
    new (): HTMLArrayReactiveDataElement;
  };
  interface HTMLElementTagNameMap {
    'array-reactive-data': HTMLArrayReactiveDataElement;
  }
  interface ElementTagNameMap {
    'array-reactive-data': HTMLArrayReactiveDataElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'array-reactive-data': JSXElements.ArrayReactiveDataAttributes;
    }
  }
  namespace JSXElements {
    export interface ArrayReactiveDataAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface EventReciver {

    }
  }

  interface HTMLEventReciverElement extends StencilComponents.EventReciver, HTMLStencilElement {}

  var HTMLEventReciverElement: {
    prototype: HTMLEventReciverElement;
    new (): HTMLEventReciverElement;
  };
  interface HTMLElementTagNameMap {
    'event-reciver': HTMLEventReciverElement;
  }
  interface ElementTagNameMap {
    'event-reciver': HTMLEventReciverElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'event-reciver': JSXElements.EventReciverAttributes;
    }
  }
  namespace JSXElements {
    export interface EventReciverAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface EventSender {

    }
  }

  interface HTMLEventSenderElement extends StencilComponents.EventSender, HTMLStencilElement {}

  var HTMLEventSenderElement: {
    prototype: HTMLEventSenderElement;
    new (): HTMLEventSenderElement;
  };
  interface HTMLElementTagNameMap {
    'event-sender': HTMLEventSenderElement;
  }
  interface ElementTagNameMap {
    'event-sender': HTMLEventSenderElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'event-sender': JSXElements.EventSenderAttributes;
    }
  }
  namespace JSXElements {
    export interface EventSenderAttributes extends HTMLAttributes {
      'onEmailer'?: (event: CustomEvent) => void;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface MyName {

    }
  }

  interface HTMLMyNameElement extends StencilComponents.MyName, HTMLStencilElement {}

  var HTMLMyNameElement: {
    prototype: HTMLMyNameElement;
    new (): HTMLMyNameElement;
  };
  interface HTMLElementTagNameMap {
    'my-name': HTMLMyNameElement;
  }
  interface ElementTagNameMap {
    'my-name': HTMLMyNameElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-name': JSXElements.MyNameAttributes;
    }
  }
  namespace JSXElements {
    export interface MyNameAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface InnerHtml {

    }
  }

  interface HTMLInnerHtmlElement extends StencilComponents.InnerHtml, HTMLStencilElement {}

  var HTMLInnerHtmlElement: {
    prototype: HTMLInnerHtmlElement;
    new (): HTMLInnerHtmlElement;
  };
  interface HTMLElementTagNameMap {
    'inner-html': HTMLInnerHtmlElement;
  }
  interface ElementTagNameMap {
    'inner-html': HTMLInnerHtmlElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'inner-html': JSXElements.InnerHtmlAttributes;
    }
  }
  namespace JSXElements {
    export interface InnerHtmlAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface MyBackdrop {

    }
  }

  interface HTMLMyBackdropElement extends StencilComponents.MyBackdrop, HTMLStencilElement {}

  var HTMLMyBackdropElement: {
    prototype: HTMLMyBackdropElement;
    new (): HTMLMyBackdropElement;
  };
  interface HTMLElementTagNameMap {
    'my-backdrop': HTMLMyBackdropElement;
  }
  interface ElementTagNameMap {
    'my-backdrop': HTMLMyBackdropElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-backdrop': JSXElements.MyBackdropAttributes;
    }
  }
  namespace JSXElements {
    export interface MyBackdropAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface MyModalBundle {
      'content': string;
      'mytitle': string;
      'open': () => void;
    }
  }

  interface HTMLMyModalBundleElement extends StencilComponents.MyModalBundle, HTMLStencilElement {}

  var HTMLMyModalBundleElement: {
    prototype: HTMLMyModalBundleElement;
    new (): HTMLMyModalBundleElement;
  };
  interface HTMLElementTagNameMap {
    'my-modal-bundle': HTMLMyModalBundleElement;
  }
  interface ElementTagNameMap {
    'my-modal-bundle': HTMLMyModalBundleElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-modal-bundle': JSXElements.MyModalBundleAttributes;
    }
  }
  namespace JSXElements {
    export interface MyModalBundleAttributes extends HTMLAttributes {
      'content'?: string;
      'mytitle'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface MyModal {
      'content': string;
      'open': () => void;
      'title': string;
    }
  }

  interface HTMLMyModalElement extends StencilComponents.MyModal, HTMLStencilElement {}

  var HTMLMyModalElement: {
    prototype: HTMLMyModalElement;
    new (): HTMLMyModalElement;
  };
  interface HTMLElementTagNameMap {
    'my-modal': HTMLMyModalElement;
  }
  interface ElementTagNameMap {
    'my-modal': HTMLMyModalElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-modal': JSXElements.MyModalAttributes;
    }
  }
  namespace JSXElements {
    export interface MyModalAttributes extends HTMLAttributes {
      'content'?: string;
      'onOnClose'?: (event: CustomEvent) => void;
      'title'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface PropMutability {
      'name': string;
    }
  }

  interface HTMLPropMutabilityElement extends StencilComponents.PropMutability, HTMLStencilElement {}

  var HTMLPropMutabilityElement: {
    prototype: HTMLPropMutabilityElement;
    new (): HTMLPropMutabilityElement;
  };
  interface HTMLElementTagNameMap {
    'prop-mutability': HTMLPropMutabilityElement;
  }
  interface ElementTagNameMap {
    'prop-mutability': HTMLPropMutabilityElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'prop-mutability': JSXElements.PropMutabilityAttributes;
    }
  }
  namespace JSXElements {
    export interface PropMutabilityAttributes extends HTMLAttributes {
      'name'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface RefStencil {

    }
  }

  interface HTMLRefStencilElement extends StencilComponents.RefStencil, HTMLStencilElement {}

  var HTMLRefStencilElement: {
    prototype: HTMLRefStencilElement;
    new (): HTMLRefStencilElement;
  };
  interface HTMLElementTagNameMap {
    'ref-stencil': HTMLRefStencilElement;
  }
  interface ElementTagNameMap {
    'ref-stencil': HTMLRefStencilElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'ref-stencil': JSXElements.RefStencilAttributes;
    }
  }
  namespace JSXElements {
    export interface RefStencilAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface SlotComponents {

    }
  }

  interface HTMLSlotComponentsElement extends StencilComponents.SlotComponents, HTMLStencilElement {}

  var HTMLSlotComponentsElement: {
    prototype: HTMLSlotComponentsElement;
    new (): HTMLSlotComponentsElement;
  };
  interface HTMLElementTagNameMap {
    'slot-components': HTMLSlotComponentsElement;
  }
  interface ElementTagNameMap {
    'slot-components': HTMLSlotComponentsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'slot-components': JSXElements.SlotComponentsAttributes;
    }
  }
  namespace JSXElements {
    export interface SlotComponentsAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface SlotParent {

    }
  }

  interface HTMLSlotParentElement extends StencilComponents.SlotParent, HTMLStencilElement {}

  var HTMLSlotParentElement: {
    prototype: HTMLSlotParentElement;
    new (): HTMLSlotParentElement;
  };
  interface HTMLElementTagNameMap {
    'slot-parent': HTMLSlotParentElement;
  }
  interface ElementTagNameMap {
    'slot-parent': HTMLSlotParentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'slot-parent': JSXElements.SlotParentAttributes;
    }
  }
  namespace JSXElements {
    export interface SlotParentAttributes extends HTMLAttributes {

    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
