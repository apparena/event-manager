/*@flow*/
/*global document:false*/
import React from "react";
import { addLocaleData, IntlProvider } from "react-intl";
import Demo from "electrode-demo-index";


import * as libraryScope from "../src/index";

const locale = "en";
const messages = require(`../src/lang/${locale}.json`);
const localeData = require(`react-intl/locale-data/${locale}`);

addLocaleData(localeData);

const localScope = {IntlProvider, messages, locale};

const components = [
    {
        title: "EventWidget",
        examples: [
            {
                type: "playground",
                code: require("raw!./examples/event-widget.example"),
                noRender: true
            }
        ]
    },
    {
        title: "EventOverviewList",
        examples: [
            {
                type: "playground",
                code: require("raw!./examples/event-overview-list.example"),
                noRender: true
            }
        ]
    },
    {
        title: "EventOverviewListItem",
        examples: [
            {
                type: "playground",
                code: require("raw!./examples/event-overview-list-item.example"),
                noRender: true
            }
        ]
    },
    {
        title: "EventDetail",
        examples: [
            {
                type: "playground",
                code: require("raw!./examples/event-detail.example"),
                noRender: true
            }
        ]
    }
];

const demo = () => (
  <Demo scope={localScope} libraryScope={libraryScope} components={components} />
);

export default demo;
