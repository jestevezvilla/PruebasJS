import * as d3 from 'd3';

import '../css/d3.scss';

d3.select('body').append('p').text('New paragraph!');

d3.select('body').append('div').attr('id', 'graph1');
d3.select('body').append('div').attr('id', 'graph2');

const w = 500;
const h = 200;

const svg1 = d3.select('#graph1')
                .append('svg')
                  .attr('height', h)
                  .attr('width', w);

const dataset1 = [12, 32, 43, 32, 13, 43];

svg1
  .selectAll('rect')
  .data(dataset1)
  .enter()
  .append('rect')
    .attr('x', (d, i) => (i * w) / dataset1.length)
    .attr('y', d => h - d)
    .attr('width', -2 + (w / dataset1.length))
    .attr('height', d => d)
    .attr('fill', d => `rgb(0,0, ${d * 10})`);

svg1
  .selectAll('text')
  .data(dataset1)
  .enter()
  .append('text')
    .text(d => d)
    .attr('x', (d, i) => (i * (w / dataset1.length)) + (((w / dataset1.length) - 2) / 2))
    .attr('y', d => (h - d) + 15)
    .attr('text-anchor', 'middle')
    .attr('fill', 'white');


// const w = 500;
// const h = 200;


const dataset2 = [[12, 32], [43, 32], [13, 43], [21, 32], [54, 14], [54, 1]];

const pad = 50;

const xScale =
  d3.scaleLinear()
    .domain(d3.extent(dataset2, d => d[0]))
    .range([pad, w - pad]);

const yScale =
  d3.scaleLinear()
    .domain(d3.extent(dataset2, d => d[1]))
    .range([h - pad, pad]);

const rScale =
  d3.scaleSqrt()
    .domain(d3.extent(dataset2, d => d[1]))
    .range([0, 40]);

const xAxis = d3.axisBottom(xScale).ticks(5);

const svg2 = d3.select('#graph2')
                .append('svg')
                  .attr('height', h)
                  .attr('width', w);


svg2
  .append('g')
    .attr('transform', `translate(0, ${h - pad})`)
  .call(xAxis);


const circles =
  svg2
  .selectAll('.ball')
  .data(dataset2)
  .enter()
  .append('g')
    .attr('class', 'ball')
    .attr('transform', d =>
      `translate(${xScale(d[0])}, ${yScale(d[1])})`,
  );


circles
    .append('circle')
      .attr('cx', 0)
      .attr('cy', 0)
      .attr('r', d => rScale(d[1]))
      .style('fill', 'blue')
      .style('fill-opacity', 0.5);

circles
  .append('text')
    .attr('text-anchor', 'middle')
    .attr('fill', 'white')
    .attr('y', 6)
    .text(d => d[1]);

