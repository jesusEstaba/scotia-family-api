'use strict';

/**
 * Point.js controller
 *
 * @description: A set of functions called "actions" for managing `Point`.
 */

module.exports = {

  /**
   * Retrieve point records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.point.search(ctx.query);
    } else {
      return strapi.services.point.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a point record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.point.fetch(ctx.params);
  },

  /**
   * Count point records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.point.count(ctx.query);
  },

  /**
   * Create a/an point record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.point.add(ctx.request.body);
  },

  /**
   * Update a/an point record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.point.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an point record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.point.remove(ctx.params);
  }
};
