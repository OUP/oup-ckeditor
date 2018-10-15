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
                        ],
                        [
                            "cloudcms-link"
                        ]
                    ],
                    "removeButtons": null,
                    "stylesSet": [{
                            "name": "Paragraph",
                            "element": "p"
                        },
                        {
                            "name": "OUP Notice",
                            "element": "div",
                            "attributes": {
                                "class": "notice"
                            }
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
                        "imageUploadPath": "",
                        "imagePickerConfig": {
                            "rootContainerPath": "../../..",
                            "initialContainerPath": "../Image Library",
                        }
                    },
                    "cloudcms-link": {
                        "linkPickerType": "file-picker",
                        "uploadPath": null,
                        "linkPickerConfig": {
                            "rootContainerPath": "../../..",
                            "initialContainerPath": "../Document Library",
                        }
                    }
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
                            "RemoveFormat",
                            "-",
                            "ShowBlocks"
                        ],
                        [
                            "Format",
                            "Styles"
                        ],
                        [
                            "cloudcms-image"
                        ],
                    ],
                    "removeButtons": null,
                    "stylesSet": [{
                            "name": "Paragraph",
                            "element": "p"
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
                        "imageUploadPath": null,
                        "imagePickerConfig": {
                            "rootContainerPath": "../../..",
                            "initialContainerPath": "./"
                        },
                        "uploadPath": null
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
                            "Format",
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
                    "removeButtons": null
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
                    "stylesSet": [{
                            "name": "Paragraph",
                            "element": "p"
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
                        "imageUploadPath": null,
                        "imagePickerConfig": {
                            "rootContainerPath": "../../..",
                            "initialContainerPath": "./"
                        },
                        "uploadPath": null
                    }
                },
                "config7": {
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
                            "RemoveFormat",
                            "-",
                            "ShowBlocks"
                        ],
                        [
                            "Format",
                            "Styles"
                        ]
                    ],
                    "removeButtons": null,
                    "stylesSet": [{
                            "name": "Paragraph",
                            "element": "p"
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
                    var type = this.options.ckeditor;
                    this.options.ckeditor = this.toolbarOptions[this.options.ckeditor];
                    if (type && type == "config5") {
                        this.options.ckeditor.format_tags = 'p;h4;pre';
                    } else {
                        this.options.ckeditor.format_tags = 'p;h2;h3;pre';
                    }
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
    
    // window.CKEDITOR.config.extraPlugins+=",devtools";, For development purposes

    window.CKEDITOR.on('dialogDefinition', function (ev) {
        var dialogName = ev.data.name;
        var dialogDefinition = ev.data.definition;
        if (dialogName == "table") {
            var infoTab = dialogDefinition.getContents("info");            
            infoTab.get("txtWidth")["default"] = 400;
            infoTab.get("txtCellSpace")["default"] = 2;
            infoTab.get("txtCellPad")["default"] = 2;
            
            infoTab.get("selHeaders")["items"].pop();
            infoTab.get("selHeaders")["items"].pop();

            var advancedTab = dialogDefinition.getContents("advanced");
            advancedTab.get("advCSSClasses")["default"] = "";
        }
    });

    Alpaca.registerFieldClass("oup-ckeditor", Alpaca.Fields.OUPCKEditorField);

});