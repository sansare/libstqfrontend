В мастере подключающего проекта всегда модуль должен быть подключен в виде

`@storiqa/shared": "git+ssh://git@github.com/StoriqaTeam/libstqfrontend`
#
При работе на задачей, которая требует новых спек и/или переводов необходимо в данном репозитории выделять ветку
с именем идентичным ветке, в которой в подключающем проекте ведется работа.
Например, мы работаем на фронте в ветке `username/trello/XX_taskname`, тогда в данном репо мы создаем ветку `username/trello/XX_taskname`
и в проекте меняем путь до пакета на `@storiqa/shared": "git+ssh://git@github.com/StoriqaTeam/libstqfrontend#username/trello/XX_taskname`

Перед мерджем PRa в проекте мы сначала должны вмерджить изменения в этом репо в мастер, а затем поменять путь до пакета на
`@storiqa/shared": "git+ssh://git@github.com/StoriqaTeam/libstqfrontend`.

