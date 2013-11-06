(function(w){

    "use strict";

    var
        $ = jQuery,
        editr,
        object,
        currentLVL = 0,
        intro = window.wac_intro,
        story = window.wac_story,
        victory = window.wac_victory,
        currentIntro = {},
        currentStory = {},
        currentVictory = {},

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
        initGame = function(gamelvl){

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
        },

        /**
         * @function startIntro : Launch intro
         * @param option {object} : Option for intro
         * @return {void}
         */
        initIntro = function (option){
            var
               intro = introJs();

            intro.setOptions(option);
            intro.start();
        },
        /**
         * @function init : Initialize Drag, Game, Intro
         * @param index {int} : Index for all game component
         */
        init = function(index){
            currentIntro = intro[index];
            currentStory = story[index];
            currentVictory = victory[index];

            initGame(currentStory);
            initDrag();
            initIntro(currentIntro);
        };

    $('.editr').each(function(){
        editr = new Editr({
            el: this,
            path: '/editr/items/'
        });
    });
    init(0);
    $('#main_panel .wrap').droppable({
        drop: function(evt, ui){
            var
                clone = $(ui.draggable).clone(),
                wrap = currentStory[this.id];

            currentVictory[wrap.victory_index].state = currentVictory[wrap.victory_index].uniq === ui.draggable[0].id;
            currentVictory[wrap.victory_index].gameobject = ui.draggable[0].id;

            console.log(checkWin(currentVictory, currentStory));
            $(this).html('');
            $(this).width($(ui.draggable).width() + 25);
            clone.appendTo( this );
            $('#main_panel div.btn').unbind();
            $('#main_panel .btn').dblclick(function(evt){
                currentVictory[currentStory[evt.target.parentNode.id].victory_index].gameobject = null;
                currentVictory[currentStory[evt.target.parentNode.id].victory_index].state = false;
                console.log(checkWin(currentVictory, currentStory));
                $(evt.target).remove();
            });
        }
    });
}).call(this, window);
