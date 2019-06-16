const Mutations = {
  async createItem(parent, args, ctx, info) {
    const { title, description, price, image, largeImage } = args;
    // TODO: Check if they are logged in

    const item = await ctx.db.mutation.createItem({
      data: {
        title,
        description,
        price,
        image,
        largeImage
      },
      info
    });

    return item;
  }
};

module.exports = Mutations;
