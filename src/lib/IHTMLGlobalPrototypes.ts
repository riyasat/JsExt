export {};
interface IPosProps {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}
declare global {
  interface HTMLElement {
    /**@param className can have multiple classes with spaces in between e.g btn btn-success */
    addClass(className: string): void;
    /**@param className can have multiple classes with spaces in between e.g btn btn-success */
    removeClass(className: string): void;
    /**@param className will check if css class exist on the provided HTML Element and return true or false */
    hasClass(className: string): boolean;
    /**@param className will toggle one or multiple classes */
    toggleClass(className: string): void;
    /**@param element insert element in the selected HTML Element */
    appendTo(element: HTMLElement): void;
    /**@param element delete element from the selected HTML Element */
    removeElement(element: HTMLElement): void;
    /**@param selector You can provide HTML Element id, name, class or TagName e.g. #id,name,.classname or body */
    getElement(selector: string): HTMLElement | null;
    /**Provides previous element of referenced HTML element*/
    prev(): HTMLElement | null;
    /**Provides next element of referenced HTML element*/
    next(): HTMLElement | null;
    /**Provides immidiate parent element of referenced HTML element*/
    parent(): HTMLElement | null;
    /**Provides immidiate parent element of referenced HTML element*/
    getOffSetParent(): HTMLElement | null;
    /**Provides all children elements under referenced HTML element*/
    getChildren(): HTMLElement[] | null;
    /**Fade in selected HTML element*/
    fadeIn(duration: "slow" | "fast" | number): HTMLElement | null;
    /**Fade out selected HTML element*/
    fadeOut(duration: "slow" | "fast" | number): HTMLElement | null;
    /**Hide selected HTML element*/
    hide(): HTMLElement | null;
    /**Show selected HTML element*/
    show(): HTMLElement | null;
    /**@param el Insert HTML element after selected HTML element**/
    after(el: HTMLElement): HTMLElement | null;
    /**@param el Insert HTML element within selected HTML element**/
    append(el: HTMLElement): HTMLElement | null;
    /**@param el Insert HTML element after selected HTML element**/
    before(el: HTMLElement): HTMLElement | null;
    /**@param el Insert HTML element before selected HTML element**/
    /** Create new instance of selected HTML element**/
    clone(): HTMLElement | null;
    /**@param child Checks if element exist under selected HTML element**/
    contains(child: HTMLElement): boolean;
    /** Removes selected HTML element**/
    empty(): null;
    /**@param attName @param value Get/Set the attribute value of selected HTML element**/
    attr(attName: string, value?: any): any | null;
    /**@param propName @param value Get/Set the property value of selected HTML element**/
    prop(propName: string, value?: any): any | null;
    /**@param str Get/Set html string of selected HTML element**/
    html(str?: string): string | null;
    /**@param ruleName @param value Get/Set the css property value of selected HTML element**/
    css(ruleName: CSSStyleDeclaration, value?: any): HTMLElement | null;
    /**@param str Get/Set text string of selected HTML element**/
    text(str?: string): string | null;
    /** Returns width of selected HTML element**/
    width(): number | string | null;
    /** Returns index of selected HTML element**/
    index(): number | null;
    /**@param selector Checks if the seletor exist or not**/
    is(selector: string): boolean | null;
    /**@returns IPosProps Returns offset values of selected HTML element**/
    offset(): IPosProps | null;
    /**@returns IPosProps Returns offset values of parent of selected HTML element**/
    parentOffset(): HTMLElement | null;
    /**@param withMargin returns height of selected HTML element**/
    outerHeight(withMargin: boolean): number | null;
    /**@param withMargin returns width of selected HTML element**/
    outerWidth(withMargin: boolean): number | null;
    /**@returns IPosProps Returns position values of  selected HTML element**/
    position(): IPosProps | null;
    /**@param el insert element directly under opening tag of selected HTML element**/
    prepend(el: HTMLElement): HTMLElement | null;
    /**@param selector removes attribute from HTML element**/
    removeAttr(selector: string): HTMLElement | null;
    /**@param str replace string within HTML element**/
    replaceWith(str: string): HTMLElement | null;
    /**@param el swap selected HTML element with provided HTML element**/
    //swap(el: HTMLElement): HTMLElement | null;
    /** Returns height of selected HTML element**/
    height(height?: number | string): number | string | null;
    /** Returns all sblings of selected HTML element**/
    siblings(): HTMLElement | Element[] | null;
    /**@param eventName @param handler attaches a one time event to selected HTML element**/
    one(eventName: string, handler: EventHandlerNonNull): void;
    /**@param eventName @param handler attaches a custom event to selected HTML element**/
    on(eventName: string, handler: EventHandlerNonNull): void;
    /**@param eventName @param handler removes an event to selected HTML element**/
    off(eventName: string, handler: EventHandlerNonNull): void;
    trigger(eventName: string, data?: any): void;
    extend(objA: any, objB: any): void;
    inArray(item: any, array: any[]): boolean;
    isArray(): boolean;
    now(): Date;
    parseHTML(str: string): HTMLCollection;
    parseJSON(str: string): object;
  }
  interface Document {
    /**@param selector You can provide HTML Element id, name, class or TagName e.g. #id,name,.classname or body */
    getElement(selector: string): HTMLElement | null;
    getElements(selector: string): NodeListOf<HTMLElement> | null;
    ready(fn: EventListener | EventListenerObject): void;
  }
  interface String {
    capitalize(): string;
  }
}
