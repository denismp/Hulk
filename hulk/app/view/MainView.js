/*
 * File: app/view/MainView.js
 * Date: Wed Jun 25 2014 16:18:28 GMT-0400 (EDT)
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('hulk.view.MainView', {
    extend: 'Ext.container.Viewport',

    requires: [
        'Ext.menu.Menu',
        'Ext.menu.Item',
        'Ext.form.Label',
        'Ext.Img'
    ],

    itemId: 'mainView',
    layout: 'border',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    region: 'west',
                    split: true,
                    itemId: 'menuPanel',
                    width: 150,
                    title: 'Menu',
                    items: [
                        {
                            xtype: 'menu',
                            floating: false,
                            items: [
                                {
                                    xtype: 'menuitem',
                                    itemId: 'home',
                                    text: 'Home'
                                },
                                {
                                    xtype: 'menuitem',
                                    itemId: 'open',
                                    text: 'Open Scenario'
                                },
                                {
                                    xtype: 'menuitem',
                                    itemId: 'create',
                                    text: 'Create Scenario'
                                },
                                {
                                    xtype: 'menuitem',
                                    itemId: 'edit',
                                    text: 'Edit Scenario'
                                },
                                {
                                    xtype: 'menuitem',
                                    itemId: 'about',
                                    text: 'About Us'
                                },
                                {
                                    xtype: 'menuitem',
                                    itemId: 'contact',
                                    text: 'Contact us'
                                }
                            ],
                            listeners: {
                                click: {
                                    fn: me.onMenuClick,
                                    scope: me
                                }
                            }
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    region: 'center',
                    itemId: 'contentPanel',
                    layout: 'card',
                    items: [
                        {
                            xtype: 'panel',
                            itemId: 'homePanel',
                            title: 'Home',
                            layout: {
                                type: 'vbox',
                                align: 'center',
                                pack: 'center'
                            },
                            items: [
                                {
                                    xtype: 'label',
                                    text: 'Home View'
                                },
                                {
                                    xtype: 'image',
                                    autoShow: true,
                                    height: 400,
                                    width: 300,
                                    src: 'http://i45.photobucket.com/albums/f59/EckoUnltd23/8g4bfht.gif'
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            itemId: 'openPanel',
                            title: 'Home',
                            layout: {
                                type: 'vbox',
                                align: 'center',
                                pack: 'center'
                            },
                            items: [
                                {
                                    xtype: 'label',
                                    text: 'Open Scenario View'
                                },
                                {
                                    xtype: 'image',
                                    autoShow: true,
                                    height: 400,
                                    width: 300,
                                    src: 'http://i220.photobucket.com/albums/dd66/Bluedually4x4/TheIncredibleHulk.jpg'
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            itemId: 'createPanel',
                            title: 'Home',
                            layout: {
                                type: 'vbox',
                                align: 'center',
                                pack: 'center'
                            },
                            items: [
                                {
                                    xtype: 'label',
                                    text: 'Create Scenario View'
                                },
                                {
                                    xtype: 'image',
                                    autoShow: true,
                                    height: 400,
                                    width: 400,
                                    src: 'http://i235.photobucket.com/albums/ee229/photophatty67/hulk04.gif'
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            itemId: 'editPanel',
                            title: 'Home',
                            layout: {
                                type: 'vbox',
                                align: 'center',
                                pack: 'center'
                            },
                            items: [
                                {
                                    xtype: 'label',
                                    text: 'Edit Scenario View'
                                },
                                {
                                    xtype: 'image',
                                    autoShow: true,
                                    height: 400,
                                    width: 400,
                                    src: 'http://i261.photobucket.com/albums/ii80/xfactorg1/hulk.gif'
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            itemId: 'aboutPanel',
                            title: 'About Us',
                            layout: {
                                type: 'vbox',
                                align: 'center',
                                pack: 'center'
                            },
                            items: [
                                {
                                    xtype: 'label',
                                    text: 'About Us View'
                                },
                                {
                                    xtype: 'image',
                                    autoShow: true,
                                    height: 400,
                                    width: 400,
                                    src: 'http://i680.photobucket.com/albums/vv161/Jose-ave93/Hulkvswolverine.jpg'
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            itemId: 'contactPanel',
                            title: 'Contact Us',
                            layout: {
                                type: 'vbox',
                                align: 'center',
                                pack: 'center'
                            },
                            items: [
                                {
                                    xtype: 'label',
                                    text: 'Contact Us View'
                                },
                                {
                                    xtype: 'image',
                                    autoShow: true,
                                    height: 400,
                                    width: 400,
                                    src: 'http://i382.photobucket.com/albums/oo261/8-2-B-4-9-5/HulkBeingAmbushed.jpg'
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    onMenuClick: function(menu, item, e, eOpts) {
        location.hash = item.itemId;
    }

});