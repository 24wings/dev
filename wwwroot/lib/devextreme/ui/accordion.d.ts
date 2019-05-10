/**
* DevExtreme (ui/accordion.d.ts)
* Version: 18.2.8
* Build date: Tue Apr 23 2019
*
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import DevExpress from '../bundles/dx.all';

declare global {
interface JQuery {
    dxAccordion(): JQuery;
    dxAccordion(options: "instance"): DevExpress.ui.dxAccordion;
    dxAccordion(options: string): any;
    dxAccordion(options: string, ...params: any[]): any;
    dxAccordion(options: DevExpress.ui.dxAccordionOptions): JQuery;
}
}
export default DevExpress.ui.dxAccordion;
export type Options = DevExpress.ui.dxAccordionOptions;

/** @deprecated use Options instead */
export type IOptions = DevExpress.ui.dxAccordionOptions;