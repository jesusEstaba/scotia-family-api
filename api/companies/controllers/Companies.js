'use strict';

/**
 * Companies.js controller
 *
 * @description: A set of functions called "actions" for managing `Companies`.
 */

module.exports = {

  /**
   * Retrieve companies records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.companies.search(ctx.query);
    } else {
      return strapi.services.companies.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a companies record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.companies.fetch(ctx.params);
  },

  /**
   * Count companies records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.companies.count(ctx.query);
  },

  /**
   * Create a/an companies record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.companies.add(ctx.request.body);
  },

  /**
   * Update a/an companies record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.companies.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an companies record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.companies.remove(ctx.params);
  }
};
