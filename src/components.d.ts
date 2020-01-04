/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface SButton {
    /**
    * Set to true to draw a circle button.
    */
    'circle': boolean;
    /**
    * Set to true to disable the button.
    */
    'disabled': boolean;
    /**
    * Set to true to draw the button in a loading state.
    */
    'loading': boolean;
    /**
    * Set to true to draw an outlined button.
    */
    'outline': boolean;
    /**
    * Removes focus from the button.
    */
    'removeFocus': () => Promise<void>;
    /**
    * Set to true to draw a rounded button.
    */
    'round': boolean;
    /**
    * Sets focus on the button.
    */
    'setFocus': () => Promise<void>;
    /**
    * The button's size, one of `small`, `medium`, or `large`.
    */
    'size': string;
    /**
    * The button's type, one of `default`, `primary`, `success`, `info`, `warning`, `danger`, or `text`.
    */
    'type': string;
  }
  interface SInput {
    /**
    * The input's autocomplete attribute.
    */
    'autocomplete': string;
    /**
    * The input's autofocus attribute.
    */
    'autofocus': boolean;
    /**
    * Set to true to disable the input.
    */
    'disabled': boolean;
    /**
    * The input's max attribute.
    */
    'max': number;
    /**
    * The input's maxlength attribute.
    */
    'maxlength': number;
    /**
    * The input's min attribute.
    */
    'min': number;
    /**
    * The input's minlength attribute.
    */
    'minlength': number;
    /**
    * The input's name attribute.
    */
    'name': string;
    /**
    * The input's placeholder text.
    */
    'placeholder': string;
    /**
    * Set to true to disable the input.
    */
    'readonly': boolean;
    /**
    * Removes focus from the input.
    */
    'removeFocus': () => Promise<void>;
    /**
    * Sets focus on the input.
    */
    'setFocus': () => Promise<void>;
    /**
    * The input's size, one of `small`, `medium`, or `large`.
    */
    'size': string;
    /**
    * The input's step attribute.
    */
    'step': number;
    /**
    * The input's type, one of `text`, `number`, `email`, etc.
    */
    'type': string;
    /**
    * The input's value attribute.
    */
    'value': string;
  }
}

declare global {


  interface HTMLSButtonElement extends Components.SButton, HTMLStencilElement {}
  var HTMLSButtonElement: {
    prototype: HTMLSButtonElement;
    new (): HTMLSButtonElement;
  };

  interface HTMLSInputElement extends Components.SInput, HTMLStencilElement {}
  var HTMLSInputElement: {
    prototype: HTMLSInputElement;
    new (): HTMLSInputElement;
  };
  interface HTMLElementTagNameMap {
    's-button': HTMLSButtonElement;
    's-input': HTMLSInputElement;
  }
}

declare namespace LocalJSX {
  interface SButton {
    /**
    * Set to true to draw a circle button.
    */
    'circle'?: boolean;
    /**
    * Set to true to disable the button.
    */
    'disabled'?: boolean;
    /**
    * Set to true to draw the button in a loading state.
    */
    'loading'?: boolean;
    /**
    * Set to true to draw an outlined button.
    */
    'outline'?: boolean;
    /**
    * Set to true to draw a rounded button.
    */
    'round'?: boolean;
    /**
    * The button's size, one of `small`, `medium`, or `large`.
    */
    'size'?: string;
    /**
    * The button's type, one of `default`, `primary`, `success`, `info`, `warning`, `danger`, or `text`.
    */
    'type'?: string;
  }
  interface SInput {
    /**
    * The input's autocomplete attribute.
    */
    'autocomplete'?: string;
    /**
    * The input's autofocus attribute.
    */
    'autofocus'?: boolean;
    /**
    * Set to true to disable the input.
    */
    'disabled'?: boolean;
    /**
    * The input's max attribute.
    */
    'max'?: number;
    /**
    * The input's maxlength attribute.
    */
    'maxlength'?: number;
    /**
    * The input's min attribute.
    */
    'min'?: number;
    /**
    * The input's minlength attribute.
    */
    'minlength'?: number;
    /**
    * The input's name attribute.
    */
    'name'?: string;
    /**
    * The input's placeholder text.
    */
    'placeholder'?: string;
    /**
    * Set to true to disable the input.
    */
    'readonly'?: boolean;
    /**
    * The input's size, one of `small`, `medium`, or `large`.
    */
    'size'?: string;
    /**
    * The input's step attribute.
    */
    'step'?: number;
    /**
    * The input's type, one of `text`, `number`, `email`, etc.
    */
    'type'?: string;
    /**
    * The input's value attribute.
    */
    'value'?: string;
  }

  interface IntrinsicElements {
    's-button': SButton;
    's-input': SInput;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      's-button': LocalJSX.SButton & JSXBase.HTMLAttributes<HTMLSButtonElement>;
      's-input': LocalJSX.SInput & JSXBase.HTMLAttributes<HTMLSInputElement>;
    }
  }
}


