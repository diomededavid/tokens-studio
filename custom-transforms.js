const StyleDictionary = require('style-dictionary');

StyleDictionary.registerTransform({
    name: 'size/px-to-rem',
    type: 'value',
    matcher: function (prop) {
        return prop.attributes.category === 'size';
    },
    transformer: function (prop, options) {
        const baseFontSize = options.baseFontSize || 16;
        return (prop.original.value / baseFontSize) + 'rem';
    }
});

// custom-transforms.js

StyleDictionary.registerTransform({
    name: 'typography/css-clamp',
    type: 'value',
    matcher: function (prop) {
        return prop.attributes.category === 'typography';
    },
    transformer: function (prop) {
        const { fontSize, lineHeight, minWidth, maxWidth } = prop.value;
        return `font-size: clamp(${minWidth}px, ${fontSize}px, ${maxWidth}px); line-height: ${lineHeight};`;
    },
});

StyleDictionary.registerTransform({
    name: 'bootstrap-colors-and-scss-map',
    type: 'value',
    matcher: function (prop) {
        return prop.attributes.category === 'color';
    },
    transformer: function (prop) {
        // Mapping of your color tokens to Bootstrap color classes
        const colorMap = {
            primary: 'bg-primary',
            secondary: 'bg-secondary',
            success: 'bg-success',
            danger: 'bg-danger',
            warning: 'bg-warning',
            info: 'bg-info',
            light: 'bg-light',
            dark: 'bg-dark',
        };

        if (colorMap[prop.name]) {
            return {
                bootstrapClass: colorMap[prop.name],
                scssVariable: `$color-${prop.name}`,
            };
        }

        // If no match is found, return the original token name
        return prop.name;
    },
});
