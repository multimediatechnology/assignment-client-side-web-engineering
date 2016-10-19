export default class Appclass {
    constructor(___this) {
      let ____this = ___this
        __this.todos = util.store('todos-jquery');
        __this.cacheElements();
        __this.bindEvents();

        new Router({
            '/:filter': function(filter) {
                __this.filter = filter;
                __this.render();
            }.bind(__this)
        }).init('/all');
    }
    cacheElements() {
        __this.todoTemplate = Handlebars.compile($('#todo-template').html());
        __this.footerTemplate = Handlebars.compile($('#footer-template').html());
        __this.$todoApp = $('#todoapp');
        __this.$header = __this.$todoApp.find('#header');
        __this.$main = __this.$todoApp.find('#main');
        __this.$footer = __this.$todoApp.find('#footer');
        __this.$newTodo = __this.$header.find('#new-todo');
        __this.$toggleAll = __this.$main.find('#toggle-all');
        __this.$todoList = __this.$main.find('#todo-list');
        __this.$count = __this.$footer.find('#todo-count');
        __this.$clearBtn = __this.$footer.find('#clear-completed');
    }
    bindEvents() {
        var list = __this.$todoList;
        __this.$newTodo.on('keyup', __this.create.bind(__this));
        __this.$toggleAll.on('change', __this.toggleAll.bind(__this));
        __this.$footer.on('click', '#clear-completed', __this.destroyCompleted.bind(__this));
        list.on('change', '.toggle', __this.toggle.bind(__this));
        list.on('dblclick', 'label', __this.edit.bind(__this));
        list.on('keyup', '.edit', __this.editKeyup.bind(__this));
        list.on('focusout', '.edit', __this.update.bind(__this));
        list.on('click', '.destroy', __this.destroy.bind(__this));
    }
    render() {
        var todos = __this.getFilteredTodos();
        __this.$todoList.html(__this.todoTemplate(todos));
        __this.$main.toggle(todos.length > 0);
        __this.$toggleAll.prop('checked', __this.getActiveTodos().length === 0);
        __this.renderFooter();
        __this.$newTodo.focus();
        util.store('todos-jquery', __this.todos);
    }
    renderFooter() {
        var todoCount = __this.todos.length;
        var activeTodoCount = __this.getActiveTodos().length;
        var template = __this.footerTemplate({
            activeTodoCount: activeTodoCount,
            activeTodoWord: util.pluralize(activeTodoCount, 'item'),
            completedTodos: todoCount - activeTodoCount,
            filter: __this.filter
        });

        __this.$footer.toggle(todoCount > 0).html(template);
    }
    toggleAll(e) {
        var isChecked = $(e.target).prop('checked');

        __this.todos.forEach(function(todo) {
            todo.completed = isChecked;
        });

        __this.render();
    }
    getActiveTodos() {
        return __this.todos.filter(function(todo) {
            return !todo.completed;
        });
    }
    getCompletedTodos() {
        return __this.todos.filter(function(todo) {
            return todo.completed;
        });
    }
    getFilteredTodos() {
        if (__this.filter === 'active') {
            return __this.getActiveTodos();
        }

        if (__this.filter === 'completed') {
            return __this.getCompletedTodos();
        }

        return __this.todos;
    }
    destroyCompleted() {
            __this.todos = __this.getActiveTodos();
            __this.filter = 'all';
            __this.render();
        }
        // accepts an element from inside the `.item` div and
        // returns the corresponding index in the `todos` array
    indexFromEl(el) {
        var id = $(el).closest('li').data('id');
        var todos = __this.todos;
        var i = todos.length;

        while (i--) {
            if (todos[i].id === id) {
                return i;
            }
        }
    }
    create(e) {
        var $input = $(e.target);
        var val = $input.val().trim();

        if (e.which !== ENTER_KEY || !val) {
            return;
        }

        __this.todos.push({
            id: util.uuid(),
            title: val,
            completed: false
        });

        $input.val('');

        __this.render();
    }
    toggle(e) {
        var i = __this.indexFromEl(e.target);
        __this.todos[i].completed = !__this.todos[i].completed;
        __this.render();
    }
    edit(e) {
        var $input = $(e.target).closest('li').addClass('editing').find('.edit');
        $input.val($input.val()).focus();
    }
    editKeyup(e) {
        if (e.which === ENTER_KEY) {
            e.target.blur();
        }

        if (e.which === ESCAPE_KEY) {
            $(e.target).data('abort', true).blur();
        }
    }
    update(e) {
        var el = e.target;
        var $el = $(el);
        var val = $el.val().trim();

        if ($el.data('abort')) {
            $el.data('abort', false);
            __this.render();
            return;
        }

        var i = __this.indexFromEl(el);

        if (val) {
            __this.todos[i].title = val;
        } else {
            __this.todos.splice(i, 1);
        }

        __this.render();
    }
    destroy(e) {
        __this.todos.splice(__this.indexFromEl(e.target), 1);
        __this.render();
    }
}
