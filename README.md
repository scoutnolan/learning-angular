# LearningAngular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

my-angular-app/
├── .angular/                  // Angular-specific cache and configuration files
├── node_modules/              // Contains all project dependencies (npm packages)
├── src/                       // Source code of your application
│   ├── app/                   // Core application logic and components
│   │   ├── app.component.ts   // Main component logic
│   │   ├── app.component.html // Main component template
│   │   ├── app.component.css  // Main component styles
│   │   ├── app.module.ts      // Root module of the application
│   │   └── ... (other components, modules, services, etc.)
│   ├── assets/                // Static assets like images, fonts, etc.
│   ├── environments/          // Environment-specific configuration files (e.g., development, production)
│   │   ├── environment.ts
│   │   └── environment.development.ts
│   ├── favicon.ico            // Application favicon
│   ├── index.html             // Main HTML file loaded by the browser
│   ├── main.ts                // Main entry point for the application, bootstraps the root module
│   ├── polyfills.ts           // Imports polyfills for browser compatibility
│   └── styles.css             // Global styles for the entire application
├── .editorconfig              // Editor configuration for consistent coding styles
├── .gitignore                 // Specifies files and folders to be ignored by Git
├── angular.json               // Angular CLI configuration for the workspace and projects
├── package.json               // Defines project metadata and lists npm dependencies
├── package-lock.json          // Records exact versions of installed dependencies
├── README.md                  // Project documentation
├── tsconfig.json              // TypeScript compiler configuration for the entire project
├── tsconfig.app.json          // TypeScript configuration specific to the application
├── tsconfig.spec.json         // TypeScript configuration specific to unit tests
└── karma.conf.js              // Karma configuration for unit tests