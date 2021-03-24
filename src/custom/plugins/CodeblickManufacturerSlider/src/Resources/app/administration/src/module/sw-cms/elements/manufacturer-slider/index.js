import './component';
import './config';
import './preview';
Shopware.Service('cmsService').registerCmsElement({
    name: 'manufacturer-slider',
    label: 'sw-cms.elements.manufacturerSliderElement.label',
    component: 'sw-cms-el-manufacturer-slider',
    configComponent: 'sw-cms-el-config-manufacturer-slider',
    previewComponent: 'sw-cms-el-preview-manufacturer-slider',
    defaultConfig: {
        heading: {
            source: 'static',
            value: ''
        },
        selectedManufacturers: {
            source: 'static',
            value: []
        },
        showControls: {
            source: 'static',
            value: true
        },
        autoRotate: {
            source: 'static',
            value: true
        },
        sliderSpeed: {
            source: 'static',
            value: 3000
        }
    }
});