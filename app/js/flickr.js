import $ from 'jquery';
import _ from 'rambda';

const trace = _.curry(
  (tag, x) => {
    console.log(tag, x);
    return x;
  },
);

const Impure = {
  getJSON: _.curry(
    (callback, url) =>
      $.getJSON(url, callback),
  ),
  setHtml: _.curry(
    (sel, html) =>
      $(sel).html(html),
  ),
};

const img = src =>
  $('<img>').attr('src', src);

const url = term =>
  `https://api.flickr.com/services/feeds/photos_public.gne?tags=${term}&format=json&jsoncallback=?`;

const urlImg = _.compose(_.prop('m'), _.prop('media'));

const mediaToImg = _.compose(img, urlImg);

const srcs = _.compose(_.map(mediaToImg), _.prop('items'));

const renderImages = _.compose(Impure.setHtml('body'), srcs);

const app = _.compose(Impure.getJSON(renderImages), url);

app('cats');

