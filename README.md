# Nordic Rose Blog Frontend

This is the frontend of a blog website built according to the Figma template [here](https://www.figma.com/file/mKgFeKSmc10YarS9f0XNZG/A-blog-template-(Community)).

**Note**: This frontend project is part of a larger blog website project. The backend of the blog is available in the [Nordic Rose Blog Backend](https://github.com/DipanshuShukla/Blog-Backend-Springboot) repository.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Environment Configuration

This project uses environment files to configure settings for both the development and production environments. To configure the environment accordingly, you need to understand the global variables used in these files.

### Development Environment

In the development environment, you can configure the settings by understanding the following global variables used in `environment.development.ts`:

- `HOSTNAME`: The hostname or IP address of the backend server.
- `PORT_NUMBER`: The port number on which the backend server is running.
- `URL`: The base URL for API endpoints, constructed using `HOSTNAME` and `PORT_NUMBER`.

### Production Environment

In the production environment, you can configure the settings by understanding the following global variables used in `environment.ts`:

- `URL`: The base URL for API endpoints in the production environment.

Please edit the appropriate environment file (`environment.development.ts` for development and `environment.ts` for production) to set the global variables according to your deployment requirements.

## Building

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more information on using Angular CLI or for additional assistance, please refer to the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
