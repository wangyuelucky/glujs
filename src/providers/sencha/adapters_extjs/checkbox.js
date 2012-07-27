/*
 * Copyright (C) 2012 by CoNarrative
 */
/**
 * @class glu.extjs.adapters.checkbox
 * @author Mike Gai
 * @extends glu.extjs.adapters.field
 *
 * A binder that adapts a checkbox. Normalizes the 'checked' value so that you can bind on either 'value' or 'checked'
 */
glu.regAdapter('checkbox', {
    extend :'field',
    beforeCreate:function (config, viewmodel) {
        config.checked = config.checked || config.value;
    },
    valueBindings:{
        eventName:'change',
        eventConverter:function (field, newVal) {
            return field.getValue()
        }
    },
    checkedBindings:{
        eventName:'change',
        eventConverter:function (field, newVal) {
            return field.getValue()
        },
        setComponentProperty: function(value,oldvalue,config,control){
            control.setValue(value);
        }
    }
});

