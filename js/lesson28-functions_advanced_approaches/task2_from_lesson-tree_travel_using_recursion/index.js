export const markFavorites = (tree, favorites) => {
    const isFavorites = favorites.includes(tree.id);

    return {
        ...tree,
        isFavorites,
        nodes: tree.nodes.map(childNode = markFavorites(childNode, favorites))
    }
};

const result = markFavorites(tree, favorites);
console.log(result);

// tree -object;
// favorites -array;