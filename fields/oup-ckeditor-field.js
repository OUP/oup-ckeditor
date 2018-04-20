define(function(require, exports, module) {

    var $ = require("jquery");

    var Alpaca = $.alpaca;

    Alpaca.Fields.OUPCKEditorField = Alpaca.Fields.CKEditorField.extend(
    /**
     * @lends Alpaca.Fields.OUPCKEditorField.prototype
     * For training
     */
    {
        toolbarOptions: {
            "config1" : {  
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
                        "Anchor",
                        "cloudcms-link"
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
                        "cloudcms-image"
                    ]                        
                ]
            },
            "config2" : {
                "toolbar": [
                    [
                        "SpecialChar",
                        "Italic",
                        "Subscript",
                        "Superscript"
                    ]                        
                ]
            },
            "config3" : {
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
                        "cloudcms-link"
                    ],                        
                    [
                        "Bold",
                        "Italic",
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
                        "cloudcms-image"
                    ]                        
                ]                                
            },
            "config4" : {
                "toolbar": [
                    [
                        "Link",
                        "Unlink",
                        "cloudcms-link"
                    ]                                                             
                ]
            }
        },

        /**
         * @see Alpaca.Fields.TextField#getFieldType
         */
        getFieldType: function() {
            return "oup-ckeditor-field";
        },

        /**
         * @see Alpaca.Fields.TextField#setup
         */
        setup: function()
        {
            if (this.options.ckeditor && this.toolbarOptions[this.options.ckeditor]) {
                this.options.ckeditor = this.toolbarOptions[this.options.ckeditor]
            }

            this.base();
        },

        afterRenderControl: function(model, callback)
        {
            var self = this;
            self.base(model, function(){
                callback();
            });
        },

        /**
         * @see Alpaca.Fields.TextField#handleValidate
         */
        handleValidate: function()
        {
            return this.base();
        }

        /* builder_helpers */
        ,

        /**
         * @see Alpaca.Fields.TextField#getTitle
         */
        getTitle: function() {
            return "OUP ckeditor Field";
        },

        /**
         * @see Alpaca.Fields.TextField#getDescription
         */
        getDescription: function() {
            return "Allow output markup rule overrides to ckeditor";
        }

        /* end_builder_helpers */
    });

    Alpaca.registerMessages({
        "noDependentField": "No local config found"
    });
    
    Alpaca.registerFieldClass("oup-ckeditor", Alpaca.Fields.OUPCKEditorField);

});

