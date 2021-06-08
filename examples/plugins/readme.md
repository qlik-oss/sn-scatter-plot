# Plugin examples

Demonstrating creating new `component-definition` or overriding/extending `component-definition` that are already available in `sn-scatter-plot`.

## Setup

Copy the `Executive_Dashboard.qvf` app from the repo's `data/apps` to your local apps folder (`Qlik/Sense/Apps`).

## Run

Simple copy path of the `*.html` file and paste it to your browser.

## Chart internals testing

The properties used in the `configurable` and `lines` examples.

| Property             | Value            | Conf. 1 | Conf. 2 | Lines |
| -------------------- | ---------------- | ------- | ------- | ----- |
| Scale key            | "x"              |         |         | x     |
| Scale key            | "y"              |         |         | x     |
| Scale key            | "size"           |         |         |       |
| Component key        | "x-axis"         |         | x       |       |
| Component key        | "y-axis"         |         | x       |       |
| Component key        | "point"          | x       |         |       |
| Data property: x     | { value, label } |         |         | x     |
| Data property: y     | { value, label } |         |         |       |
| Data property: size  | { value, label } | x       |         |       |
| Data property: value | Number           |         |         |       |
| Data property: label | String           |         |         |       |
| Layout               | Object           | x       |         |       |
