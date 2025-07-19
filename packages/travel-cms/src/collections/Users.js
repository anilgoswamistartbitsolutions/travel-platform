"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
exports.Users = {
    slug: 'users',
    auth: {
        tokenExpiration: 7200, // 2 hours
        cookies: {
            sameSite: 'lax',
            secure: process.env.NODE_ENV === 'production',
            domain: process.env.COOKIE_DOMAIN || 'localhost',
        },
    },
    admin: {
        useAsTitle: 'email',
    },
    access: {
        read: function () { return true; },
        create: function () { return true; },
        update: function (_a) {
            var user = _a.req.user;
            if (user.role === 'admin')
                return true;
            return {
                id: {
                    equals: user.id,
                },
            };
        },
        delete: function (_a) {
            var user = _a.req.user;
            return user.role === 'admin';
        },
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
        },
        {
            name: 'role',
            type: 'select',
            options: [
                { label: 'Admin', value: 'admin' },
                { label: 'Editor', value: 'editor' },
                { label: 'User', value: 'user' },
            ],
            defaultValue: 'user',
            required: true,
        },
        {
            name: 'avatar',
            type: 'upload',
            relationTo: 'media',
        },
    ],
    timestamps: true,
};
exports.default = exports.Users;
