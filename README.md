
# JsExt
The aim of this project is to have jQuery equivalent methods without JQuery. You can use most of the jQuery functions directly over the HTML Element.

 *How to Use:*

    npm install @riyasat/jsext --save
In any of your JavaScript/TypeScript project add:

    import '@riyasat/jsext';
Start using supported functions e.g.

    document.getElement('#firstName').addClass('bold');

**Supported Function Are:**

`addClass(className: string)`

`hasClass(className: string): boolean`

`removeClass(className: string): void`

`toggleClass(className: string): void`

`appendTo(element: HTMLElement): void`

`removeElement(element: HTMLElement): void`

`getElement(selector: string): HTMLElement | null`

`getElements(selector: string): NodeListOf<HTMLElement> | null`

`prev(): HTMLElement | null`

`next(): HTMLElement | null`

`parent(): HTMLElement | null`

`getOffSetParent(): HTMLElement | null`

`getChildren(): HTMLElement[] | null`

`fadeIn(duration: "slow" | "fast" | number): HTMLElement | null`

`fadeOut(duration: "slow" | "fast" | number): HTMLElement | null`

`hide(): HTMLElement | null`

`show(): HTMLElement | null`

`after(el: HTMLElement): HTMLElement | null`

`append(el: HTMLElement): HTMLElement | null`

`before(el: HTMLElement): HTMLElement | null`

`clone(): HTMLElement | null`

`contains(child: HTMLElement): boolean`

`empty(): null`

`attr(attName: string, value?: any): any | null`

`prop(propName: string, value?: any): any | null`

`html(str?: string): string | null`

`css(ruleName: CSSStyleDeclaration, value?: any): HTMLElement | null`

`text(str?: string): string | null`

`width(): number | string | null`

`index(): number | null`

`is(selector: string): boolean | null`

`offset(): IPosProps | null`

`parentOffset(): HTMLElement | null`

`outerHeight(withMargin: boolean): number | null`

`outerWidth(withMargin: boolean): number | null`

`position(): IPosProps | null`

`prepend(el: HTMLElement): HTMLElement | null`

`removeAttr(selector: string): HTMLElement | null`

`replaceWith(str: string): HTMLElement | null`

`animation(anim: IAnimations[]): HTMLElement | null`

`height(height?: number | string): number | string | null`

`siblings(): HTMLElement | Element[] | null`

`one(eventName: string, handler: EventHandlerNonNull): void`

`on(eventName: string, handler: EventHandlerNonNull): void`

`off(eventName: string, handler: EventHandlerNonNull): void`

`extend(objA: any, objB: any): void`

`inArray(item: any, array: any[]): boolean`

`isArray(): boolean`

`data(key: string, value?: any): any`

`now(): Date`

`parseHTML(str: string): HTMLCollection`

`parseJSON(str: string): object`


**LICENSE**

**JsExt**

Copyright (C) Since 2020, Riy Technologies AB.  

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
