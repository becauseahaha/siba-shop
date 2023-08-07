# Работа со скриптами

Скрипты размещаются в папке `src/js`:

```text
nikoland-template
└── src
    └── js
        ├── vendor
        │   └── .keep
        ├── main.js
        └── vendor.js
```

За сборку и преобразование JS отвечает задача `js`:

```bash
gulp js
```

После выполнения команды в папке `build/js` появятся файлы `main.js` и `vendor.js`:

```text
nikoland-template
└── build
    └── js
        ├── main.js
        └── vendor.js
```


