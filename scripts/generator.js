/**
 * This node script allow to generate actual data for layer from http://213.248.47.89
 */
const fs = require('fs');
const NgwConnector = require('@nextgis/ngw-connector');
const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
const baseUrl = config.baseUrl;

const out = './src/data/layers.json';

const connector = new NgwConnector({ baseUrl });

function generateData(data) {
  const toFile = [];
  data.forEach(x => {
    toFile.push({
      name: x.name,
      items: x.items.map(x => {
        const res = x.resource;
        return { resource: { display_name: res.display_name, id: res.id } };
      })
    });
  });

  fs.writeFile(out, JSON.stringify(toFile), () =>
    console.log('Data write in `' + out + '` file')
  );
}

const promises = config.sourceGroups.map(x => {
  console.log(`Start loading layer ${x.name} resource from ${x.resourceId}`);
  return connector
    .getResourceChildren({ resourceId: x.resourceId })
    .then(items => {
      return { ...x, items };
    })
    .catch(err => {
      throw new Error(err);
    });
});

Promise.all(promises)
  .then(data => {
    generateData(data);
  })
  .catch(err => {
    console.log(err);
  });
