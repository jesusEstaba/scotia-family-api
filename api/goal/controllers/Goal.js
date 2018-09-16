'use strict';

/**
 * Goal.js controller
 *
 * @description: A set of functions called "actions" for managing `Goal`.
 */

module.exports = {

  /**
   * Retrieve goal records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.goal.search(ctx.query);
    } else {
      return strapi.services.goal.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a goal record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.goal.fetch(ctx.params);
  },

  /**
   * Count goal records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.goal.count(ctx.query);
  },

  /**
   * Create a/an goal record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.goal.add(ctx.request.body);
  },

  /**
   * Update a/an goal record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.goal.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an goal record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.goal.remove(ctx.params);
  }
};
