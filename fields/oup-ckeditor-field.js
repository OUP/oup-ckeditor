define(function (require, exports, module) {

    var $ = require("jquery");
    var Alpaca = require("alpaca");
    var OneTeam = require("oneteam");
    var moduleId = module.uri.match(/^.+(_modules[^\/]+)\/.*/)[1];
    var path = "../../../" + moduleId + "/oup-ckeditor/fields/";

    window.CKEDITOR.config.disableNativeSpellChecker = false;

    Alpaca.Fields.OUPCKEditorField = Alpaca.Fields.CKEditorField.extend(
        /**
         * @lends Alpaca.Fields.OUPCKEditorField.prototype
         */
        {
            toolbarOptions: {
                "config1": {
                    'customConfig': path + 'config1.js'
                },
                "config2": {
                    'customConfig': path + 'config2.js'
                },
                "config21": {
                    'customConfig': path + 'config2.js'
                },
                "config3": {
                    'customConfig': path + 'config3.js'
                },
                "config31": {
                    'customConfig': path + 'config3.js'
                },
                "config4": {
                    'customConfig': path + 'config4.js'
                },
                "config5": {
                    'customConfig': path + 'config5.js'
                },
                "config6": {
                    'customConfig': path + 'config6.js'
                },
                "config7": {
                    'customConfig': path + 'config7.js'
                },
                "config8": {
                    'customConfig': path + 'config8.js'
                }
            },

            /**
             * @see Alpaca.Fields.TextField#getFieldType
             */
            getFieldType: function () {
                return "oup-ckeditor-field";
            },

            /**
             * @see Alpaca.Fields.TextField#setup
             */
            setup: function () {

                if (this.options.ckeditor && this.toolbarOptions[this.options.ckeditor]) {
                    var type = this.options.ckeditor;
                    this.options.ckeditor = this.toolbarOptions[this.options.ckeditor];
                    if (type && type == "config5") {
                        this.options.ckeditor.format_tags = 'p;h4;pre;links';
                        this.options.ckeditor.format_links = {
                            name: 'callToAction',
                            element: 'p',
                            "attributes": {
                                "class": 'callToAction'
                            }
                        };
                        this.options.ckeditor.format_h4 = {
                            name: 'Normal',
                            element: 'p',
                            "attributes": {
                                "class": ''
                            }
                        };
                        this.options.ckeditor.format_h4 = {
                            name: 'Heading 4',
                            element: 'h4',
                            "attributes": {
                                "class": ''
                            }
                        };
                        this.options.ckeditor.format_pre = {
                            name: 'Formatted',
                            element: 'pre',
                            "attributes": {
                                "class": ''
                            }
                        };
                    } else if (type && (type == "config1" || type == "config6" || type == "config8")) {
                        this.options.ckeditor.format_tags = 'p;h2;h3;h4;pre';
                    } else {
                        this.options.ckeditor.format_tags = 'p;h2;h3;pre';
                    }

                    if (type && (type == "config21")) {
                        this.options.ckeditor.wordcount = {
                            showParagraphs: true,
                            showWordCount: true,
                            showCharCount: true,
                            countSpacesAsChars: true,
                            countHTML: false,
                            maxWordCount: -1,
                            maxCharCount: 50,
                        }
                    }
                    if (type && (type == "config31")) {
                        this.options.ckeditor.wordcount = {
                            showParagraphs: true,
                            showWordCount: true,
                            showCharCount: true,
                            countSpacesAsChars: true,
                            countHTML: false,
                            maxWordCount: -1,
                            maxCharCount: 100,
                        }
                    }

                }

                // TODO: REMOVE BUTTON BASED ON USER TEAM
                if (this.isUserInTeam("academic-editors")) {
                    this.options.ckeditor.removeButtons = 'Source';
                }


                this.base();
            },

            /**
             * Check if user has role
             * @param {string} role 
             */
            isUserInTeam: function (role) {
                var self = this;
                var observableHolder = self.top().options.observableHolder;

                var teamKeys = [];

                var project = observableHolder.observable("project").get();
                if (project) {
                    teamKeys = observableHolder.observable("projectUserTeamKeys").get();
                } else {
                    teamKeys = observableHolder.observable("oneteamUserTeamKeys").get();
                }

                if (!teamKeys) {
                    return false;
                }

                var x = teamKeys.indexOf(role);
                if (x > -1) {
                    return true;
                }

                return false;
            },

            afterRenderControl: function (model, callback) {
                var self = this;
                self.base(model, function () {
                    callback();
                });
            },

            /**
             * @see Alpaca.Fields.TextField#handleValidate
             */
            handleValidate: function () {
                    return this.base();
                }

                /* builder_helpers */
                ,

            /**
             * @see Alpaca.Fields.TextField#getTitle
             */
            getTitle: function () {
                return "OUP ckeditor Field";
            },

            /**
             * @see Alpaca.Fields.TextField#getDescription
             */
            getDescription: function () {
                return "Allow output markup rule overrides to ckeditor";
            },

            /* end_builder_helpers */
        });



    Alpaca.registerMessages({
        "noDependentField": "No local config found"
    });

    //window.CKEDITOR.config.extraPlugins+=",devtools";

    window.CKEDITOR.on('instanceReady', function (ck) {
        ck.editor.removeMenuItem('image');
    });
    //window.CKEDITOR.on('instanceReady', function(ck) { ck.editor.removeMenuItem('table'); });
    window.CKEDITOR.on('instanceReady', function (ck) {
        ck.editor.removeMenuItem('tablecell');
    });


    window.CKEDITOR.on('dialogDefinition', function (ev) {
        var dialogName = ev.data.name;
        var dialogDefinition = ev.data.definition;
        ev.editor.getCommand('table').allowedContent = "table{width,height}[align,border,cellpadding,cellspacing,summary];caption tbody thead tfoot;th td tr;table[id,dir](*){*}";
        if (dialogName == "table" || dialogName == "tableProperties") {
            var infoTab = dialogDefinition.getContents("info");
            infoTab.get("txtWidth")["default"] = "";
            infoTab.get("txtCellSpace")["default"] = "";
            infoTab.get("txtCellPad")["default"] = "";
            infoTab.get("txtBorder")["default"] = "";

            infoTab.get("selHeaders")["items"].pop();
            infoTab.get("selHeaders")["items"].pop();

            var advancedTab = dialogDefinition.getContents("advanced");
            advancedTab.get("advCSSClasses")["default"] = "";
        }
        if (dialogName == "bulletedListStyle") {
            dialogDefinition.getContents("info").get("type")["items"].pop();
            dialogDefinition.getContents("info").get("type")["items"].pop();
        }
    });

    Alpaca.registerFieldClass("oup-ckeditor", Alpaca.Fields.OUPCKEditorField);

});