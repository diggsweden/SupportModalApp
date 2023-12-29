# SupportModalApp

Welcome to the SupportModalApp project! This repository houses a small web application designed to enhance user experience with interactive support actions.

The app is designed to be scalable, allowing it to handle a growing number of users efficiently. It's made available through a [JavaScript drop-in library](https://github.com/diggsweden/InclusionToolbox), please review the [repository](https://github.com/diggsweden/InclusionToolbox) for more detailed documentation of how to utilize it.

## Project Setup
Get started by cloning our project
```sh
git clone git@github.com:diggsweden/SupportModalApp.git
```

Install the necessary dependencies:
```sh
npm install
```

### Development
For development purposes, you can compile and hot-reload with:
```sh
npm run dev
```

### Production
To compile and minify for production, run:
```sh
npm run build
```

## Testing
Our project embraces rigorous testing to ensure quality and reliability.

### Unit Tests with [Vitest](https://vitest.dev/)
Run unit tests using:
```sh
npm run test:unit
```

### End-to-End Tests with [Cypress](https://www.cypress.io/)
For end-to-end testing, use the following commands:

Against the Vite development server (Faster):
```sh
npm run test:e2e:dev
```

Against the production build (Recommended before deployment):
```sh
npm run build
npm run test:e2e
```

### Linting
Maintain code quality and consistency with [ESLint](https://eslint.org/):
```sh
npm run lint
```

## Docker Integration
The SupportModalApp is Docker-ready for easy deployment and testing.

### Build the Docker Image
Build a Docker image named `digg-support-modal-app-image`:
```sh
make build-supportmodalapp
```

### Run and Manage the Docker Container
To run, stop, or remove the Docker container, use the respective commands:

Run:
```sh
make run-supportmodalapp
```

Stop:
```sh
make stop
```

Remove container:
```sh
make rm
```

Remove image:
```sh
make rmi
```

## Contributing

Contributions to the UserFeedbackApp are welcome and encouraged! To contribute, follow these steps:

1. Fork the repository to your GitHub account.
2. Create a new branch based on the `main` branch for your changes:
   ```
   git checkout -b feature/your-feature-name
   ```
3. Make your desired changes and commit them with descriptive commit messages.
4. Push the changes to your forked repository.
5. Submit a pull request from your branch to the `main` branch of this repository.
6. Your pull request will be reviewed, and once approved, it will be merged.

Please ensure to follow the [Code of Conduct](CODE_OF_CONDUCT.md) when contributing.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code for personal or commercial projects.
