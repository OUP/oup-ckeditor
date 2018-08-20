define(function (require, exports, module) {

    var $ = require("jquery");

    var Alpaca = $.alpaca;

    //window.CKEDITOR.config.scayt_autoStartup = true;
    //window.CKEDITOR.config.wsc_autoStartup = true;
    //window.CKEDITOR.config.disableNativeSpellChecker = false;
    //window.CKEDITOR.config.removePlugins = 'scayt';

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
                            "PasteText",
                            "PasteFromWord",
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
                            "Format",
                            "Styles"
                        ],
                        [
                            "cloudcms-image"
                        ],
                        [
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
                            "name": "OUP bulleted list",
                            "element": "ul",
                            "attributes": {
                                "class": "bullet"
                            }
                        },
                        {
                            "name": "OUP floatLeft Image",
                            "element": "img",
                            "attributes": {
                                "class": "floatLeft"
                            }
                        },
                        {
                            "name": "OUP floatRight Image",
                            "element": "img",
                            "attributes": {
                                "class": "floatRight"
                            }
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
                        '/',
                        [
                            "Format",
                            "Styles"
                        ],
                        [
                            "cloudcms-image"
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
                            "name": "OUP bulleted list",
                            "element": "ul",
                            "attributes": {
                                "class": "bullet"
                            }
                        },
                        {
                            "name": "OUP floatLeft Image",
                            "element": "img",
                            "attributes": {
                                "class": "floatLeft"
                            }
                        },
                        {
                            "name": "OUP floatRight Image",
                            "element": "img",
                            "attributes": {
                                "class": "floatRight"
                            }
                        }
                    ],
                    "cloudcms-image": {
                        "imagePickerType": "file-picker",
                        "imageUploadPath": "../Image Library",
                        "imagePickerConfig": {
                            "rootContainerPath": "../../..",
                            "initialContainerPath": "./"
                        }
                    }
                },
                "config4": {
                    "toolbar": [
                        [
                            "Link",
                            "Unlink"
                        ],
                        [
                            "cloudcms-link"
                        ]
                    ],
                    "cloudcms-link": {
                        "linkPickerType": "file-picker",
                        "linkPickerConfig": {
                            "rootContainerPath": "../../..",
                            "initialContainerPath": "/"
                        }
                    }
                   
                },
                "config5": {
                    "toolbar": [
                        [
                            "Styles",
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
                    ],
                    "removeButtons": null,                   
                    "stylesSet": [
                        {
                            "name": "Paragraph",
                            "element": "p"
                        },
                        {
                            "name": "Heading 4",
                            "element": "H4"
                        }
                    ],
                },
                "config6": {
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
                            "Format",
                            "Styles"
                        ],
                        [
                            "cloudcms-image"
                        ],
                        [
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
                            "name": "OUP bulleted list",
                            "element": "ul",
                            "attributes": {
                                "class": "bullet"
                            }
                        },
                        {
                            "name": "OUP floatLeft Image",
                            "element": "img",
                            "attributes": {
                                "class": "floatLeft"
                            }
                        },
                        {
                            "name": "OUP floatRight Image",
                            "element": "img",
                            "attributes": {
                                "class": "floatRight"
                            }
                        }
                    ],
                    "cloudcms-image": {
                        "imagePickerType": "file-picker",
                        "imageUploadPath": "../Image Library",
                        "imagePickerConfig": {
                            "rootContainerPath": "../../..",
                            "initialContainerPath": "./"
                        }
                    }
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
                    this.options.ckeditor = this.toolbarOptions[this.options.ckeditor];
                    this.options.ckeditor.format_tags  = 'p;h2;h3;h4;pre';
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