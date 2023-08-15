# Angular NestJS Messenger App

Este es un proyecto que implementa una aplicación de mensajería utilizando Angular en el frontend y NestJS en el backend. Permite a los usuarios enviar mensajes y ver los mensajes anteriores en tiempo real.

## Características

- Interfaz de usuario para ver y enviar mensajes.
- Los mensajes se almacenan en una base de datos MySQL.
- Uso de Angular para el frontend y NestJS para el backend.

## 🚀 Quick start

1.  **Install dependencies frontend.**

    ```shell
    cd frontend-angular
    npm i
    ```
    
2.  **Install dependencies backend and frontend**

    ```shell
    cd backend-nestjs
    npm i
    ```

2.  **Start developing.**

    From the frontend-angular folder
    ```shell
    ng serve
    ```
    
    Desde la carpeta backend-nestjs
    ```shell
    npm run start:dev
    ```

3.  **Open the source code and start editing!**

    The site is now running at `http://localhost:4200` and backend `http://localhost:3000`!

    Open the `angular-nestjs-messenger` directory in your code editor of choice and edit. Save your changes and the browser will update in real time!

    ## Enviroment variables

    | Variable    | Usage                                                         |
    | ------------| ------------------------------------------------------------- |
    | PORT        | The port of the application that will be used, default `5000` |
    | DB_NAME     | name of the main database                                     |
    | DB_USERNAME | user to authenticate in database                              |
    | DB_PASSWORD | password to authenticate in database                          |
    | DB_HOST     | host where the connection to the database will be made        |
    | DB_PORT     | database connection port                                      |

## use

- The application displays a list of messages on the main screen.
- You can type a new message in the text field and click the "Create Message" button to send it.
- New messages will be automatically added to the list as they are created.

## Contribuciones

Contributions are welcome. If you'd like to improve this project, feel free to open a Pull Request.

## Contacto

If you have any questions or comments, you can reach me at [jorgnv@gmail.com](mailto:tu-email@example.com).
