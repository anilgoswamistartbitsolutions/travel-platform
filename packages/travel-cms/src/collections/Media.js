"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Media = void 0;
exports.Media = {
    slug: 'media',
    access: {
        read: function () { return true; },
        create: function () { return true; },
        update: function () { return true; },
        delete: function () { return true; },
    },
    upload: {
        staticURL: '/media',
        staticDir: 'media',
        imageSizes: [
            {
                name: 'thumbnail',
                width: 400,
                height: 300,
                position: 'center',
            },
            {
                name: 'card',
                width: 768,
                height: 1024,
                position: 'center',
            },
            {
                name: 'desktop',
                width: 1920,
                height: 1080,
                position: 'center',
            },
        ],
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*'],
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
            required: true,
        },
        {
            name: 'caption',
            type: 'richText',
            admin: {
                elements: ['link'],
                leaves: ['bold', 'italic', 'underline'],
            },
        },
    ],
};
exports.default = exports.Media;
