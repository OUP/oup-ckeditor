define(function (require, exports, module) {

    var $ = require("jquery");

    var Alpaca = $.alpaca;

    Alpaca.Fields.OUPCKEditorField = Alpaca.Fields.CKEditorField.extend(
        /**
         * @lends Alpaca.Fields.OUPCKEditorField.prototype
         */
        {
            toolbarOptions: {
                "config1": {
                    "toolbar": [
                        [
                            "Cut",
                            "Copy",
                            "Paste",
                            "-",
                            "Undo",
                            "Redo"
                        ],
                        [
                            "Link",
                            "Unlink",
                            "Anchor"
                        ],
                        [
                            "Table",
                            "HorizontalRule",
                            "SpecialChar"
                        ],
                        [
                            "Maximize",
                            "ShowBlocks",
                            "Source",
                            "Preview"
                        ],
                        [
                            "Bold",
                            "Italic",
                            "Strike",
                            "Subscript",
                            "Superscript",
                            "-",
                            "RemoveFormat"
                        ],
                        [
                            "NumberedList",
                            "BulletedList",
                            "-",
                            "Outdent",
                            "Indent",
                            "Blockquote",
                            "-",
                            "JustifyLeft",
                            "JustifyCenter",
                            "JustifyRight",
                            "JustifyBlock"
                        ],
                        [
                            "Format"
                        ],
                        [
                            "cloudcms-image",
                            "cloudcms-iframe"
                        ]
                    ], 
                    "removeButtons": null,                   
                    "stylesSet": [
                        {
                            "name": "Paragraph",
                            "element": "p"
                        },
                        {
                            "name": "Heading 2",
                            "element": "H2"
                        },
                        {
                            "name": "Heading 3",
                            "element": "H3"
                        },
                        {
                            "name": "Heading 4",
                            "element": "H4"
                        }
                    ],
                    "cloudcms-image": {
                        "imagePickerType": "file-picker",
                        "imageUploadPath": "../Image Library",
                        "imagePickerConfig": {
                            "rootContainerPath": "../../..",
                            "initialContainerPath": "../Image Library"
                        }
                    },
                    
                },
                "config2": {
                    "toolbar": [
                        [
                            "SpecialChar",
                            "Italic",
                            "Subscript",
                            "Superscript"
                        ]
                    ]
                },
                "config3": {
                    "toolbar": [
                        [
                            "Cut",
                            "Copy",
                            "Paste",
                            "-",
                            "Undo",
                            "Redo"
                        ],
                        [
                            "Link",
                            "Unlink"
                        ],
                        [
                            "Bold",
                            "Italic",
                            "BulletedList",
                            "Strike",
                            "Subscript",
                            "Superscript",
                            "SpecialChar",
                            "-",
                            "RemoveFormat"
                        ],
                        [
                            "Format"
                        ],
                        [
                            "cloudcms-image",
                            "ouphello",
                            "stylesSet"
                        ]
                    ],
                    "removeButtons": null,
                    "stylesSet": [
                        {
                            "name": "Paragraph",
                            "element": "p"
                        },
                        {
                            "name": "Heading 2",
                            "element": "H2"
                        },
                        {
                            "name": "Heading 3",
                            "element": "H3"
                        },
                        {
                            "name": "Heading 4",
                            "element": "H4"
                        }
                    ],
                    "cloudcms-image": {
                        "imagePickerType": "file-picker",
                        "imageUploadPath": "../Image Library",
                        "imagePickerConfig": {
                            "rootContainerPath": "../../..",
                            "initialContainerPath": "../Image Library"
                        }
                    }
                },
                "config4": {
                    "toolbar": [
                        [
                            "Link",
                            "Unlink"
                        ]
                    ]
                   
                },
                "config5": {
                    "toolbar": [
                        [
                            "H4",
                            "-",
                            "Italic",
                            "SpecialChar",
                            "Subscript",
                            "Superscript",
                            "-",
                            "Link",
                            "Unlink",
                            "-",
                            "ShowBlocks"
                        ]
                    ]
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
                    this.options.ckeditor.format_tags  = 'p;h1;h2;h3;h4;pre';
                    this.options.ckeditor = this.toolbarOptions[this.options.ckeditor];

                    this.options.ckeditor.plugins.add(pluginName, {
                        icons: "ouphello",
                        init: function (editor) {
                            // button
                            editor.ui.addButton(pluginName, {
                                label: 'Hello',
                                command: "ouphello"
                            });
                
                            editor.addCommand(pluginName, {
                                exec: function (editor) {
                                    editor.insertHtml("<em>Hello</em>");
                                }
                            });
                        }
                    });
                }

                this.base();
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

    Alpaca.registerFieldClass("oup-ckeditor", Alpaca.Fields.OUPCKEditorField);

});