# WebAnea

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.5.

## Development server

Run `npm start` for the Angular dev server at `http://localhost:4200/`. To use the Instagram feed while developing, build and start the SSR server in a second terminal with `npm run build` followed by `npm run serve:ssr:web-anea`. The dev server forwards `/api` requests to that server on port 4000.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Instagram feed

The home page requests the four latest media items from the server endpoint `/api/instagram`. To enable it, connect the Instagram professional account to a Meta app with Instagram Graph API access and set these environment variables on the server:

- `INSTAGRAM_USER_ID`: the connected Instagram professional account ID.
- `INSTAGRAM_ACCESS_TOKEN`: a valid server-side access token with permission to read account media.
- `INSTAGRAM_GRAPH_API_VERSION`: optional Graph API version; defaults to `v23.0`.

Never put the access token in Angular environment files or browser code. Without the server variables, the home page shows a link to ANEA's Instagram profile instead of an empty feed.
