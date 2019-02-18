export const isUrl = (s: string) => {
  var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
  return regexp.test(s);
};

export const getArrayFromLinks = (links: { [keyof: string]: number }) => {
  let linksArray = [];
  for (let link in links) {
    const linkCount = links[link];
    linksArray.push({ link, linkCount });
  }
  return linksArray;
};
