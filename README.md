# Posts Management System

NestJS backend with in-memory storage for managing posts.

## Run

```bash
npm install
npm run start
```

Server starts on `http://localhost:3000`.

## Endpoints

- `POST /posts`
- `GET /posts`
- `GET /posts/:id`
- `PATCH /posts/:id`
- `DELETE /posts/:id`

## Pagination

`GET /posts?page=1&limit=5`
