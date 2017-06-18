import Rx from 'rx';

// Click observable
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

// Drag&Drop Observable
(() => {
  const main = document.querySelector('#main');
  const widget = document.querySelector('#widget');
  const mouseDown = Rx.Observable.fromEvent(widget, 'mousedown');
  const parentMouseMove = Rx.Observable.fromEvent(main, 'mousemove');
  const parentMouseOut = Rx.Observable.fromEvent(main, 'mouseout');
  const parentMouseUp = Rx.Observable.fromEvent(main, 'mouseup');

  const drags = mouseDown
                    .map(() => parentMouseMove.takeUntil(parentMouseUp))
                    .concatAll();

  drags
    .forEach(
      (point) => {
        widget.style.top = `${point.y}px`;
        widget.style.left = `${point.x}px`;
      },
      (e) => {
        console.log(e);
      },
      () => {
        console.log('completed');
      },

  );
})();

