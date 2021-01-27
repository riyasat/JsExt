import "./IHTMLGlobalPrototypes";
(() => {
  let fadeInterval: any;
  HTMLElement.prototype.addClass = function (className: string) {
    let _classes = className.split(" ");
    _classes.forEach((cls: string) => {
      this.classList.add(cls);
    });
  };
  HTMLElement.prototype.removeClass = function (className: string) {
    let _classes = className.split(" ");
    _classes.forEach((cls: string) => {
      this.classList.remove(cls);
    });
  };
  HTMLElement.prototype.hasClass = function (className: string): boolean {
    return this.classList.contains(className);
  };
  HTMLElement.prototype.toggleClass = function (className: string) {
    let _classes = className.split(" ");
    _classes.forEach((cls: string) => {
      this.classList.toggle(cls);
    });
  };
  HTMLElement.prototype.appendTo = function (element: Element) {
    if (!element)
      throw new Error(
        "Element not found. You must have to specify HTML element"
      );
    this.innerHTML += element.outerHTML;
  };
  HTMLElement.prototype.removeElement = function (element: Element) {
    if (!element)
      throw new Error(
        "Element not found. You must have to specify HTML element"
      );
    element.remove();
  };
  HTMLElement.prototype.getElement = function (selector: string) {
    return document.querySelector(selector);
  };
  HTMLElement.prototype.prev = function () {
    return this.previousElementSibling as HTMLElement;
  };
  HTMLElement.prototype.next = function () {
    return this.nextElementSibling as HTMLElement;
  };
  HTMLElement.prototype.getChildren = function () {
    return (this.children as unknown) as HTMLElement[];
  };
  HTMLElement.prototype.parent = function () {
    return this.parentElement;
  };
  HTMLElement.prototype.fadeIn = function (duration: "slow" | "fast" | number) {
    if (fadeInterval !== null) {
      clearInterval(fadeInterval);
    }
    let opacity = parseFloat(
      this.style.opacity !== "" ? this.style.opacity : "0"
    );
    this.style.display =
      this.style.display != "none" ? this.style.display : "block";

    let interval = 0;
    if (opacity >= 0) {
      console.log(opacity, "Opacity of ", this);
      if (duration === "slow") {
        interval = 100;
      } else if (duration === "fast") {
        interval = 50;
      } else {
        interval = duration;
      }
      let _opacity = 0.1;
      fadeInterval = setInterval(() => {
        opacity = opacity + _opacity;
        this.style.opacity = `${opacity}`;
        if (opacity >= 1) {
          clearInterval(fadeInterval);
          fadeInterval = null;
          this.style.opacity = "1;";
        }
      }, interval);
    }
    return this;
  };
  HTMLElement.prototype.fadeOut = function (
    duration: "slow" | "fast" | number
  ) {
    if (fadeInterval !== null) {
      clearInterval(fadeInterval);
    }
    let opacity = parseFloat(
      this.style.opacity !== "" ? this.style.opacity : "1"
    );
    let interval = 0;
    if (opacity) {
      console.log(opacity, "Opacity of ", this);
      if (duration === "slow") {
        interval = 100;
      } else if (duration === "fast") {
        interval = 50;
      } else {
        interval = duration;
      }
      let _opacity = 0.1;
      fadeInterval = setInterval(() => {
        opacity = opacity - _opacity;
        this.style.opacity = `${opacity}`;
        if (opacity <= 0) {
          clearInterval(fadeInterval);
          fadeInterval = null;
          this.style.opacity = "0";
          this.style.display = "none";
        }
      }, interval);
    }
    return this;
  };

  HTMLElement.prototype.getOffSetParent = function () {
    return this.offsetParent as HTMLElement;
  };

  HTMLElement.prototype.hide = function () {
    this.setAttribute("prev-display", this.style.display);
    this.style.display = "none";
    return this;
  };
  HTMLElement.prototype.show = function () {
    let displayProp = this.getAttribute("prev-display");
    this.style.display = displayProp ? displayProp : "block";
    return this;
  };
  HTMLElement.prototype.after = function (el: HTMLElement) {
    this.insertAdjacentElement("afterend", el);
    return this;
  };
  HTMLElement.prototype.append = function (el: HTMLElement) {
    this.appendChild(el);
    return this;
  };
  HTMLElement.prototype.before = function (el: HTMLElement) {
    this.insertAdjacentElement("beforebegin", el);
    return this;
  };
  HTMLElement.prototype.clone = function () {
    return this.cloneNode(true) as HTMLElement;
  };
  HTMLElement.prototype.contains = function (child: HTMLElement) {
    return this !== child && this.contains(child);
  };
  HTMLElement.prototype.empty = function () {
    while (this.firstChild) this.removeChild(this.firstChild);
    return null;
  };
  HTMLElement.prototype.attr = function (attName: string, value?: any) {
    if (value) {
      this.setAttribute(attName, value);
    }
    return this.getAttribute(attName);
  };
  HTMLElement.prototype.prop = function (propName: string, value?: any) {
    if (value) {
      this.setAttribute(propName, value);
    }
    return this.getAttribute(propName);
  };
  HTMLElement.prototype.html = function (str?: string) {
    if (str) {
      this.innerHTML = str;
    }
    return this.innerHTML;
  };
  HTMLElement.prototype.css = function (
    ruleName: CSSStyleDeclaration,
    value?: any
  ) {
    if (value) {
      this.style[`${ruleName}`] = value;
    }
    return this.style[`${ruleName}`];
  };
  HTMLElement.prototype.text = function (str?: string) {
    if (str) {
      this.textContent = str;
    }
    return this.textContent;
  };
  HTMLElement.prototype.width = function () {
    return this.style.width.replace("px", "");
  };
  HTMLElement.prototype.index = function () {
    function index(el: Element | null) {
      if (!el) return -1;
      var i = 0;
      do {
        i++;
      } while ((el = el.previousElementSibling));
      return i;
    }
    return index(this);
  };
  HTMLElement.prototype.is = function (selector: string) {
    return this === document.querySelector(selector);
  };
  HTMLElement.prototype.offset = function () {
    var rect = this.getBoundingClientRect();
    return {
      top: rect.top + document.body.scrollTop,
      left: rect.left + document.body.scrollLeft,
    };
  };
  HTMLElement.prototype.parentOffset = function () {
    return (this.offsetParent as HTMLElement) || this;
  };
  HTMLElement.prototype.outerHeight = function (withMargin: boolean) {
    var height = this.offsetHeight;
    if (withMargin) {
      height +=
        parseInt(this.style.marginTop) + parseInt(this.style.marginBottom);
    }
    return height;
  };
  HTMLElement.prototype.outerWidth = function (withMargin: boolean) {
    var width = this.offsetWidth;
    if (withMargin) {
      width +=
        parseInt(this.style.marginRight) + parseInt(this.style.marginLeft);
    }
    return width;
  };
  HTMLElement.prototype.position = function () {
    return { left: this.offsetLeft, top: this.offsetTop };
  };
  HTMLElement.prototype.prepend = function (el: HTMLElement) {
    return this.insertBefore(el, this.firstChild);
  };
  HTMLElement.prototype.removeAttr = function (selector: string) {
    this.removeAttribute(selector);
    return this;
  };
  HTMLElement.prototype.replaceWith = function (str: string) {
    this.outerHTML = str;
    return this;
  };
  HTMLElement.prototype.height = function (height?: number | string) {
    if (height) {
      if (typeof height === "string") {
        this.setAttribute("height", height);
      }
    }
    return this.height();
  };
  HTMLElement.prototype.siblings = function () {
    var _this = this;
    if (!_this.parentElement) return null;
    return Array.prototype.filter.call(
      _this.parentElement.children,
      function (child: HTMLElement) {
        return child !== _this;
      }
    );
  };
  HTMLElement.prototype.on = function (
    eventName: string,
    handler: EventHandlerNonNull
  ) {
    this.addEventListener(eventName, handler, false);
  };
  HTMLElement.prototype.off = function (
    eventName: string,
    handler: EventHandlerNonNull
  ) {
    this.removeEventListener(eventName, handler);
  };

  HTMLElement.prototype.trigger = function (eventName: string, data?: any) {
    if (window.CustomEvent && typeof window.CustomEvent === "function") {
      var event = new CustomEvent(eventName, data);
      this.dispatchEvent(event);
    } else {
      var customEvent = document.createEvent(eventName);
      customEvent.initEvent(eventName, true, true);
      this.dispatchEvent(customEvent);
    }
  };
  HTMLElement.prototype.extend = function (objA: any, objB: any) {
    return Object.assign(objA, objB);
  };
  HTMLElement.prototype.inArray = function (item: any, array: any[]) {
    return array.indexOf(item) >= 0;
  };
  HTMLElement.prototype.isArray = function (obj: any) {
    return Array.isArray(obj);
  };
  HTMLElement.prototype.now = function () {
    return new Date();
  };
  HTMLElement.prototype.parseHTML = function (htmlStr: string) {
    var pHtml = function (str: string) {
      var tmp = document.implementation.createHTMLDocument();
      tmp.body.innerHTML = str;
      return tmp.body.children;
    };

    return pHtml(htmlStr);
  };
  HTMLElement.prototype.parseJSON = function (str: string) {
    return JSON.parse(str);
  };

  Document.prototype.getElement = function (selector: string) {
    return document.querySelector(selector) as HTMLElement;
  };
  Document.prototype.ready = function (
    fn: EventListener | EventListenerObject
  ) {
    document.addEventListener("DOMContentLoaded", fn);
  };
  // eslint-disable-next-line no-extend-native
  String.prototype.capitalize = function (): string {
    return this.charAt(0).toUpperCase() + this.slice(1);
  };
  //#endregion
})();
