# Survegana

## Короткий огляд продукту

*Survegana* - сервіс для обробки та аналізу даних соціологічних та маркетологічних досліджень.
Основним призначенням платформи є створення зручного середовища для проведення 
маркетингових/соціологічних/політологічних опитуваннь і збору інформації. Сервіс надає можливість легко 
формувати анкети, які є основним методом збору данних, а також зручний інтерфейс для перегляду статистики 
щодо успішних проходжень анкети, кількості і якості відповідей на кожне питання. Основні компоненти *Survegana*:
- середовище для конструювання анкет
- база данних, що збегрігає як самі анкети, так і їх результати 
- інтерфейси для взаємодії з різними типами користувачів 

## Функціональність

Всіх користувачів платформи можна поділити на дві категорії:
* респондент
* аналітик

Тому раціональним рішенням є розгляд функціоналу з позиції кожного учасника процесу.

*Взаємодія з респондентом*:

Респондент є ключовою фігурою в процесі проведення опитування, тому правильна і грамотна побудова взаємодії з користувачем може позитивно вплинути на коректність наданих результатів

* Респондент має можливість проходити опитування у вигляді анкети

* Респондент має можливість переглянути всі наявні опитування, в яких він може взяти участь

* В Особистому кабінеті реcпондент може переглянути статистику(кількість пройдених опитувань, їх результати і тд)

*Взаємодія з аналітиком*:

Аналітик - користувач, що організовує та констроює анкети для опитувань, а згодом обробляє орезультати, тому:
* Аналітик має доступ до конструктору анкети, яка передбачає наявність різних типів питань(альтернативні, з кількома відповідями, оціночні, за шкалою Лайкерта і тд.) і розгалуження 

* Аналітик має можливість обробити вихідні дані у вигляді графіків, дашбордів, діаграм і тд.

* Формувати звітності результату в різних форматах;

* Аналітик має можливість передавати оброблені дані до менеджера 

* Аналітик має доступ до кабінету, де зможе моніторити в онлайн режимі статистику по відповідному проекту

## Практичність

*Мобільність*
Веб-сервіс повинен бути оптимізованим для роботи не тільки із комп’ютера, а й і на мобільних девайсах, оскільки ця платформа може розглядатися як альтернатива проведенню часу, стоячи в чергах, на автобусних зупинках і тд

*UI*
Інтерфейс користувача повинен відповідати наступним вимогам:
- Інтерфейс повинен бути інтуїтивно зрозумілим. Це дозволить користувачу не замислюватись над виконнями дій і більше часу витратити на саме користування, ніж до пошуку шляху до користування
- Анкета має можливість повернутися на попереднє питання, оскільки часто респондентами допускаються випадкові помилки, що можуть вплинути на результати опитування
- Респондент повинен мати можливість відфільтрувати анкети по темам, по часу, що потрібно витратити на проходження тощо
- Особистий кабінет замовника повнен бути наділений всима необхідними засобами для зручного перегляду зібраної інформації з подальшою можливістю збереження цієї інформації.  Графіки та діаграми повинні бути відповідних розмірів і реально відображати зібрані данні 
- Конструктор анкет, компонент, який є найскладнішим для сприйняття користувачем, потрібно реалізувати максимально детально, додавши максимальну кількість можливостей, але не втритивши при цьому інтуітивну зрозумілість 

## Надійність

*Резервне копіювання та відновлення даних*

Повинно проводитись резервне копіювання баз даних.

*Захист від зловмисних атак*

Система повинна бути добре захищена від різного роду зловмисних
атак із метою заволодіння інформації чи атак типу DdoS.

*Великі навантаження*

Система повинна витримувати великі навантаження,
обслуговуючи значну кількість користувачів.

## Продуктивність

Вимоги до продуктивності описують очікувані параметри продуктивності системи у термінах ‘не більше ніж’, ‘не менше ніж’. Наприклад, визначаються наступні параметри системи:

- Response time (час відповіді) системи на queries (запити даних) і updates (оновлення даних). 
- Throughput (пропускна здатність).
- Очікуваний рівень активності користувачів (наприклад, кількість транзакцій в годину, день чи місяць або циклічні періоди.
- Очікуване максимальне навантаження, при якому система має працювати нормально.
- Специфічні вимоги до робочих характеристик, пов’язані з конкретними функціями, повинні бути вказані у функціональних вимогах.

## Розробник:

* Руденко Станіслав Олександрович | TG: (https://t.me/rudek0)

