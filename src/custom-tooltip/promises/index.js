import { images } from './images';

const CustomTooltipPromises = {
  async handlePromises({ customTooltipModel, nodes, attrExps, opts }) {
    let modifiedNodes = nodes;
    modifiedNodes = await images.addImagesToTheNodes({
      customTooltipModel,
      nodes,
      attrExps,
      opts,
    });

    return modifiedNodes;
  },

  checkIfPromisesExist({ customTooltipModel }) {
    return images.checkIfPromisesExist({ customTooltipModel });
  },
};

export default CustomTooltipPromises;
