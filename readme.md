# О проекте

### Api:
#### Посты
Получение постов (будет возвращено 15 последних постов): GET /api/posts
Пагинация: GET /api/posts?page={page}&perPage={perPage}
Получение поста по id: GET /api/posts/{id}
Сохранение поста: POST /api/posts/store
Нужно передать следующие данные:
    title - обязательное значение
    content - обязательное значение
    date - обязательное значение в формате d/m/y
    category_id - обязательное значение
    tags - необязательное значение, массив с идентификаторами тегов
    image - необязательное значение, изображение с расширением jpg или png
Изменение поста: POST /api/posts/update/{id}
Нужно передать следующие данные:
    title - обязательное значение
    content - обязательное значение
    date - обязательное значение в формате d/m/y
    category_id - обязательное значение
    tags - необязательное значение, массив с идентификаторами тегов
    image - необязательное значение, изображение с расширением jpg или png

#### Категории
Список категорий: GET /api/categories

#### Теги
Список тегов: GET /api/tags