# Bookshelf

Библиотека для работы с книжной полкой. Учебный пример.

```js
bookshelf.add('Анна Каренина', 'Толстой', 600);
bookshelf.add('Зависть', 'Олеша', 700);
bookshelf.add('Алмазный мой венец', 'Катаев', 800);
bookshelf.list();
bookshelf.amount();
bookshelf.total();
bookshelf.delete('Зависть');
bookshelf.list();
```

Учебный пример для работы с шоколадом.

```js
chocolate.add('Ritter Sport с цельным лесным орехом','молочный', 100, 120);
chocolate.add('Ritter Sport с йогуртом','черный', 100, 130);
chocolate.add('Ritter Sport со злаками','белый', 90, 140);
chocolate.add('Ritter Sport со злаками','Vfhb', 75, 100);
chocolate.add('Ritter Sport с лесными орехами','черный', 100, 130);
chocolate.add('Ritter Sport с молочной начинкой','белый', 90, 140);
chocolate.list();
chocolate.amount();
chocolate.total();
chocolate.delete('Ritter Sport со злаками');
chocolate.list();
chocolate.amountType();
```