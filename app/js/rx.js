import Rx from 'rx';
import jQuery from 'jquery';


(() => {
  const refreshButton = document.querySelector('.refresh');
  const refreshClickStream = Rx.Observable.fromEvent(refreshButton, 'click');

  // const points = refreshClickStream.map(e => ({ x: e.clientX, y: e.clientY }));

  refreshClickStream
    .map(e => ({ x: e.clientX, y: e.clientY }))
    .forEach(
      (point) => {
        console.log(point);
      },
      (e) => {
        console.log(e);
      },
      () => {
        console.log('completed');
      },

  );
})();
