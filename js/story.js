(function(w){

    "use strict";


    var
        uniq,
        component = {},
        victory = {},
        intro = {},
        victory_length =  function(){
            var
                count = 0,
                obj;

            for (obj in this){
                if (this.hasOwnProperty(obj) && obj !== 'length'){
                    count = count + 1;
                }
            }
            return (count);
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
        };

    /**
     * @execute : Init story
     * @variable component {object}, victory {object}
     */
    component[0] = {};
    victory[0] = {};
    uniq = uniqid();
    component[0][uniq] = new Gameobject(uniq, 'html', {balise: 'button', value: 'Info', class: 'btn btn-info'});
    component[0][uniq+'_wrap'] = new Gameobject(uniq+'_wrap', 'wrap', {balise: 'li', value: '', class: 'wrap info', position: {x: 45, y: 134}}, 0);
    victory[0][component[0][uniq+'_wrap'].victory_index] = {uniq: uniq, state: false, gameobject: null};

    uniq = uniqid();
    component[0][uniq] = new Gameobject(uniq, 'html', {balise: 'h2', value: 'Moyen Titre', class: 'btn mediumTitle'});

    uniq = uniqid();
    component[0][uniq] = new Gameobject(uniq, 'html', {balise: 'button', value: 'warning', class: 'btn btn-warning'});
    component[0][uniq+'_wrap'] = new Gameobject(uniq+'_wrap', 'wrap', {balise: 'h1', value: '', class: 'wrap toto', position: {x: 115, y: 34}}, 1);
    victory[0][component[0][uniq+'_wrap'].victory_index] = {uniq: uniq, state: false, gameobject: null};


    uniq = uniqid();
    component[0][uniq] = new Gameobject(uniq, 'html', {balise: 'button', value: 'danger', class: 'btn btn-danger'});
    component[0][uniq+'_wrap'] = new Gameobject(uniq+'_wrap', 'wrap', {balise: 'h1', value: '', class: 'wrap toto', position: {x: 155, y: 294}}, 2);
    victory[0][component[0][uniq+'_wrap'].victory_index] = {uniq: uniq, state: false, gameobject: null};

    uniq = uniqid();
    component[0][uniq] = new Gameobject(uniq, 'html', {balise: 'li', value: 'Choix', class: 'btn menuChoice'});

    uniq = uniqid();
    component[0][uniq] = new Gameobject(uniq, 'css', {balise: 'div', value: 'Paint Gros Titre', class: 'btn bigTitle'});
    victory[0].length = victory_length;
    intro = {0: {
        steps: [
            {
                element: '#right_panel',
                intro: "This is a tooltip.",
                position: 'left'
            },
            {
                element: '#result_panel',
                intro: 'Get it, use it.',
                position: 'left'
            }
        ]
    }};

    /**
     * @execute : Set global variable
     * @variable wac_story {object}, wac_victory {object}, wac_intro {object}
     */
    w.wac_story = component;
    w.wac_victory = victory;
    w.wac_intro = intro;

}).call(this, window);