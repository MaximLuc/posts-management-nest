# Posts Management System

Backend-приложение на NestJS для управления постами с in-memory хранилищем.

## Локальный запуск

```bash
npm install
npm run start
```

Сервер будет доступен по адресу `http://localhost:3000`.

## Запуск через Docker

Сборка и запуск контейнера локально:

```bash
docker build -t posts-management-nest .
docker run -p 3000:3000 posts-management-nest
```

## Запуск из GitHub Container Registry

Команды для скачивания и запуска:

```bash
docker pull ghcr.io/maximluc/posts-management-nest:latest
docker run -p 3000:3000 ghcr.io/maximluc/posts-management-nest:latest
```

## Endpoints

- `POST /posts`
- `GET /posts`
- `GET /posts/:id`
- `PATCH /posts/:id`
- `DELETE /posts/:id`

## Пагинация

`GET /posts?page=1&limit=5`
