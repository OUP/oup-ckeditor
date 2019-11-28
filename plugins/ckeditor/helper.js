define(function (require, exports, module) {

    var CKEDITOR = window.CKEDITOR;

    return {
        registerPlugin: function (pluginId, moduleId) {
            var pluginPath = "../../../" + moduleId + "/oup-ckeditor/plugins/ckeditor/wordcount/";

            CKEDITOR.plugins.addExternal(pluginId, pluginPath, 'plugin.js');

            if (CKEDITOR.config.extraPlugins.length > 0) {
                CKEDITOR.config.extraPlugins += ",";
            }
            CKEDITOR.config.extraPlugins += pluginId;
        },
        registerPlugin1: function (pluginId, moduleId) {
            var pluginPath = "../../../" + moduleId + "/oup-ckeditor/plugins/ckeditor/a11ychecker/";

            CKEDITOR.plugins.addExternal(pluginId, pluginPath, 'plugin.js');

            if (CKEDITOR.config.extraPlugins.length > 0) {
                CKEDITOR.config.extraPlugins += ",";
            }
            CKEDITOR.config.extraPlugins += pluginId;
        },
        registerPlugin2: function (pluginId, moduleId) {
            var pluginPath = "../../../" + moduleId + "/oup-ckeditor/plugins/ckeditor/balloonpanel/";

            CKEDITOR.plugins.addExternal(pluginId, pluginPath, 'plugin.js');

            if (CKEDITOR.config.extraPlugins.length > 0) {
                CKEDITOR.config.extraPlugins += ",";
            }
            CKEDITOR.config.extraPlugins += pluginId;
        }
    };
});