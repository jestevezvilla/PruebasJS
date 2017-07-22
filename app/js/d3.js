import * as d3 from 'd3';

import '../css/d3.scss';

d3.select('body').append('p').text('New paragraph!');

d3.select('body').append('div').attr('id', 'graph');

const dataset = [12, 32, 43, 32, 13, 43];

const w = 500;
const h = 200;

const svg = d3.select('#graph')
                .append('svg')
                  .attr('height', h)
                  .attr('width', w);

svg
  .selectAll('circle')
  .data(dataset)
  .enter()
  .append('circle')
    .attr('cy', h / 2)
    .attr('cx', (d, i) => (i * 25) + (d * 2))
    .attr('r', d => d);
