(function(w){

    "use strict";

    var
        $ = jQuery,
        editr,
        object,
        uniq,
        currentLVL = 0,
        currentPos = {
            top: null,
            left: null
        },
        component = {},
        victory = {length: function(){
            var
                count = 0,
                obj;

            for (obj in this){
                if (this.hasOwnProperty(obj) && obj !== 'length'){
                    count = count + 1;
                }
            }
            return (count);
        }},
        currentStory = {},

        /**
         * @class Gameobject
         * @param id {string} : UniqId
         * @param type {string} : html, css, js
         * @param button {object} : info for button created
         * @param victory_index {int} : position in victory tab
         */
        Gameobject = function(id, type, button, victory_index){
            this.id = id;
            this.type = type;
            this.button = button;
            this.button.position = this.button.position !== undefined ? this.button.position : {x: 0, y:0};
            this.victory_index = victory_index !== undefined ? victory_index : null;

            var wrapper = {
                html: '#item_left_panel .html',
                css: '#item_left_panel .css',
                wrap: '#main_panel'
            };

            /**
             * @method generateHTML : Create code html appended to editor
             * @return {string}
             */
            this.generateHTML = function(){
                var
                    balise = document.createElement(this.button.balise);

                balise.className = this.button.class;
                balise.innerHTML = this.button.value;

                return balise;
            };

            /**
             * @method generateButton : Create draggable button
             * @return {void}
             */
            this.generateButton = function(){
                var
                    button = document.createElement('div');

                button.id = this.id;
                button.className = this.button.class;
                button.style.position = 'relative';
                button.style.top = this.button.position.x+'px';
                button.style.left = this.button.position.y+'px';
                button.innerHTML = this.button.value;

                $(wrapper[this.type]).append(button);
            };
        },

        /**
         * @function initDrag : Initialize draggable button
         * @return {void}
         */
        initDrag = function(target){

            target = target !== undefined ? target : 'div.btn';

            var
                option = {
                    revert: 'invalid',
                    drag: function(evt, ui){
                    }
            };
            if (target === 'div.btn'){
                option.helper = 'clone';
                option.start = function(evt, ui){
                };
            }
            $(target).each(function(index){
            });
            $(target).draggable(option);
        },

        /**
         * @function initGame : Initialize Game level
         * @return {void}
         */
        initGame = function(gamelvl, lvl){
            currentLVL = lvl;

            for (object in gamelvl){
                if (gamelvl.hasOwnProperty(object)){
                    gamelvl[object].generateButton();
                }
            }
        },
        /**
         * @function insertEditor : Push html in editor.js
         * @param html {string} : Balise html
         * @return {void}
         */
        insertEditor = function(html){
            editr.getFiles().html[0].editor.insert(outerHTML(html));
        },

        /**
         * @function cleanEditor : Clean the html editor
         * @return {void}
         */
        cleanEditor = function(){
            editr.getFiles().html[0].editor.removeLines();
        },

        /**
         * @function outerHTML : HTMLElement to dom
         * @param node {object} : Node html
         * @return {string}
         */
        outerHTML = function (node){
            return node.outerHTML || new XMLSerializer().serializeToString(node);
        },

        /**
         * @function uniqid : Create uniqid
         * @return {string}
         */
        uniqid = function(idlength) {
            var
                charstoformid = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split(''),
                uniqid = '',
                i;

            idlength = idlength !== undefined ? idlength : Math.floor(Math.random() * charstoformid.length);

            for (i = 0; i < idlength; i++) {
                uniqid += charstoformid[Math.floor(Math.random() * charstoformid.length)];
            }
            if($("#"+uniqid).length === 0){
                return uniqid;
            }
            else{
                return uniqid(20);
            }
        },

        /**
         * @function checkWin : Check if all wrappeur are correct
         * @param win {object} : Victory logic
         * @param story {object} : Contains gameobject for the current story
         * @return {boolean}
         */
        checkWin = function(win, story){
            var
                count = 0,
                index;

            cleanEditor();
            for (index in win){
                if (win.hasOwnProperty(index) && index !== 'length'){
                    if (win[index].state === true){
                        count = count + 1;
                    }
                    if (win[index].gameobject !== null){
                        insertEditor(story[win[index].gameobject].generateHTML());
                    }
                }
            }

            return (count === win.length());
        };

    component[0] = {};
    uniq = uniqid();
    component[0][uniq] = new Gameobject(uniq, 'html', {balise: 'button', value: 'Info', class: 'btn btn-info'});
    component[0][uniq+'_wrap'] = new Gameobject(uniq+'_wrap', 'wrap', {balise: 'li', value: '', class: 'wrap info', position: {x: 45, y: 134}}, 0);
    victory[component[0][uniq+'_wrap'].victory_index] = {uniq: uniq, state: false, gameobject: null};

    uniq = uniqid();
    component[0][uniq] = new Gameobject(uniq, 'html', {balise: 'h2', value: 'Moyen Titre', class: 'btn mediumTitle'});

    uniq = uniqid();
    component[0][uniq] = new Gameobject(uniq, 'html', {balise: 'button', value: 'warning', class: 'btn btn-warning'});
    component[0][uniq+'_wrap'] = new Gameobject(uniq+'_wrap', 'wrap', {balise: 'h1', value: '', class: 'wrap toto', position: {x: 115, y: 34}}, 1);
    victory[component[0][uniq+'_wrap'].victory_index] = {uniq: uniq, state: false, gameobject: null};


    uniq = uniqid();
    component[0][uniq] = new Gameobject(uniq, 'html', {balise: 'button', value: 'danger', class: 'btn btn-danger'});
    component[0][uniq+'_wrap'] = new Gameobject(uniq+'_wrap', 'wrap', {balise: 'h1', value: '', class: 'wrap toto', position: {x: 155, y: 294}}, 2);
    victory[component[0][uniq+'_wrap'].victory_index] = {uniq: uniq, state: false, gameobject: null};

    uniq = uniqid();
    component[0][uniq] = new Gameobject(uniq, 'html', {balise: 'li', value: 'Choix', class: 'btn menuChoice'});

    uniq = uniqid();
    component[0][uniq] = new Gameobject(uniq, 'css', {balise: 'div', value: 'Paint Gros Titre', class: 'btn bigTitle'});

    currentStory = component[0];
    initGame(currentStory, 0);
    initDrag();

    $('.editr').each(function(){
        editr = new Editr({
            el: this,
            path: '/editr/items/'
        });
    });

    $('#main_panel .wrap').droppable({
        drop: function(evt, ui){
            var
                clone = $(ui.draggable).clone(),
                wrap = currentStory[this.id];

            victory[wrap.victory_index].state = victory[wrap.victory_index].uniq === ui.draggable[0].id;
            victory[wrap.victory_index].gameobject = ui.draggable[0].id;

            console.log(checkWin(victory, currentStory));
            $(this).html('');
            $(this).width($(ui.draggable).width() + 25);
            clone.appendTo( this );
            $('#main_panel div.btn').unbind();
            $('#main_panel .btn').dblclick(function(evt){
                victory[currentStory[evt.target.parentNode.id].victory_index].gameobject = null;
                console.log(checkWin(victory, currentStory));
                $(evt.target).remove();
            });
        }
    });
}).call(this, window);
