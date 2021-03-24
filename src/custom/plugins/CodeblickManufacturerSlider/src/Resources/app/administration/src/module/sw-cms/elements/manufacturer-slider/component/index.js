import template from './sw-cms-el-manufacturer-slider.html.twig';
import './sw-cms-el-manufacturer-slider.scss';

Shopware.Component.register('sw-cms-el-manufacturer-slider', {
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
        }
    }
});