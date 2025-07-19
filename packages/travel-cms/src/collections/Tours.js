"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tours = void 0;
exports.Tours = {
    slug: 'tours',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'destination', 'price', 'duration', 'isFeatured'],
    },
    access: {
        read: function () { return true; },
        create: function (_a) {
            var user = _a.req.user;
            return user.role === 'admin' || user.role === 'editor';
        },
        update: function (_a) {
            var user = _a.req.user;
            return user.role === 'admin' || user.role === 'editor';
        },
        delete: function (_a) {
            var user = _a.req.user;
            return user.role === 'admin';
        },
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
        },
        {
            name: 'description',
            type: 'richText',
            required: true,
        },
        {
            name: 'destination',
            type: 'relationship',
            relationTo: 'destinations',
            required: true,
        },
        {
            name: 'price',
            type: 'number',
            required: true,
            min: 0,
        },
        {
            name: 'duration',
            type: 'group',
            fields: [
                {
                    name: 'days',
                    type: 'number',
                    required: true,
                    min: 1,
                },
                {
                    name: 'nights',
                    type: 'number',
                    required: true,
                    min: 0,
                },
            ],
        },
        {
            name: 'included',
            type: 'array',
            fields: [
                {
                    name: 'item',
                    type: 'text',
                    required: true,
                },
            ],
        },
        {
            name: 'itinerary',
            type: 'array',
            fields: [
                {
                    name: 'day',
                    type: 'number',
                    required: true,
                    min: 1,
                },
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'description',
                    type: 'richText',
                    required: true,
                },
            ],
        },
        {
            name: 'images',
            type: 'array',
            fields: [
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                },
            ],
        },
        {
            name: 'isFeatured',
            type: 'checkbox',
            defaultValue: false,
        },
        {
            name: 'seo',
            type: 'group',
            fields: [
                {
                    name: 'title',
                    type: 'text',
                },
                {
                    name: 'description',
                    type: 'textarea',
                },
                {
                    name: 'keywords',
                    type: 'text',
                },
            ],
        },
    ],
    timestamps: true,
};
exports.default = exports.Tours;
