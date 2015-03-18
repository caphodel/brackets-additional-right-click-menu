/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets */

define(function (require, exports, module) {
    'use strict';

    // The CommandManager registers command IDs with functions
    var CommandManager = brackets.getModule("command/CommandManager"),
    // This will let us add menus items
        Menus          = brackets.getModule("command/Menus");
    
    
    /*
        Some constants used by Additional right click menu       
    */
    var RIGHT_CLICK_MENU_COPY_NAME   = "Copy",
    RIGHT_CLICK_MENU_COPY_COMMAND_ID  = "rightclickmenu.copy",
    RIGHT_CLICK_MENU_PASTE_NAME   = "Paste",
    RIGHT_CLICK_MENU_PASTE_COMMAND_ID  = "rightclickmenu.paste",
    RIGHT_CLICK_MENU_CUT_NAME   = "Cut",
    RIGHT_CLICK_MENU_CUT_COMMAND_ID  = "rightclickmenu.cut";


    
    /* 
        Function to copy text
    */
    function copyToClipboard() {
        document.execCommand("copy", false, null); 
    }
    /* 
        Function to paste text
    */
    function pasteToEditor() {
        document.execCommand('paste')
    }
    /* 
        Function to cut text
    */
    function cutToClipboard() {
        document.execCommand('cut')
    }
    
    /*
        Register command for menu action
    */
    CommandManager.register(RIGHT_CLICK_MENU_CUT_NAME, RIGHT_CLICK_MENU_CUT_COMMAND_ID, cutToClipboard);
    CommandManager.register(RIGHT_CLICK_MENU_COPY_NAME, RIGHT_CLICK_MENU_COPY_COMMAND_ID, copyToClipboard);
    CommandManager.register(RIGHT_CLICK_MENU_PASTE_NAME, RIGHT_CLICK_MENU_PASTE_COMMAND_ID, pasteToEditor);

    
    /*
        Register menu
    */
    Menus.getContextMenu(Menus.ContextMenuIds.EDITOR_MENU).addMenuDivider();
    Menus.getContextMenu(Menus.ContextMenuIds.EDITOR_MENU).addMenuItem(RIGHT_CLICK_MENU_CUT_COMMAND_ID);
    Menus.getContextMenu(Menus.ContextMenuIds.EDITOR_MENU).addMenuItem(RIGHT_CLICK_MENU_COPY_COMMAND_ID);
    Menus.getContextMenu(Menus.ContextMenuIds.EDITOR_MENU).addMenuItem(RIGHT_CLICK_MENU_PASTE_COMMAND_ID);

});