# NestJS Server

Этот проект представляет собой серверное приложение, разработанное с использованием NestJS, TypeScript и MongoDB. Он включает в себя основные модули для управления пользователями и аутентификацией.

## Структура проекта

```
nestjs-server
├── src
│   ├── app.module.ts          # Основной модуль приложения
│   ├── main.ts                # Точка входа в приложение
│   ├── common                 # Общие компоненты (фильтры, интерсепторы, пайпы)
│   │   ├── filters
│   │   │   └── http-exception.filter.ts  # Обработка исключений
│   │   ├── interceptors
│   │   │   └── logging.interceptor.ts     # Логирование запросов и ответов
│   │   └── pipes
│   │       └── validation.pipe.ts         # Валидация входящих данных
│   ├── modules                  # Модули приложения
│   │   ├── user
│   │   │   ├── user.controller.ts        # Контроллер для пользователей
│   │   │   ├── user.module.ts            # Модуль пользователей
│   │   │   ├── user.service.ts           # Сервис для работы с пользователями
│   │   │   └── dto
│   │   │       └── create-user.dto.ts   # DTO для создания пользователя
│   │   └── auth
│   │       ├── auth.controller.ts        # Контроллер для аутентификации
│   │       ├── auth.module.ts            # Модуль аутентификации
│   │       ├── auth.service.ts           # Сервис для аутентификации
│   │       └── dto
│   │           └── login.dto.ts          # DTO для входа пользователя
│   └── database                   # Модуль базы данных
│       ├── database.module.ts           # Модуль для подключения к базе данных
│       └── database.providers.ts        # Провайдеры для MongoDB
├── test                           # Тесты приложения
│   ├── app.e2e-spec.ts            #
├── package.json                   # Конфигурация npm
├── tsconfig.json                  # Конфигурация TypeScript
├── tsconfig.build.json            # Параметры сборки проекта
└── README.md                      # Документация проекта
```

## Установка

1. Клонируйте репозиторий:

   ```
   git clone <URL>
   cd nestjs-server
   ```

2. Установите зависимости:

   ```
   npm install
   ```

3. Настройте подключение к MongoDB в файле `src/database/database.providers.ts`.

## Запуск приложения

Для запуска приложения используйте команду:

```
npm run start
```

## Тестирование

Для запуска тестов используйте команду:

```
npm run test
```

## Лицензия

Этот проект лицензирован под MIT License.
