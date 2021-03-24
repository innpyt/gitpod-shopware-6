import template from './sw-cms-el-config-manufacturer-slider.html.twig';

Shopware.Component.register('sw-cms-el-config-manufacturer-slider', {
    template,

    mixins: [
        'cms-element'
    ],

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('manufacturer-slider');
        },

        onElementUpdate(element) {
            this.$emit('element-update', element);
        },
    }
});